import { Router, type Request, type Response } from 'express';
import { saveContactSubmission } from '../services/db.js';
import { sendContactNotification } from '../services/email.js';
import type { ContactFormData } from '../types.js';

const router = Router();

// Validation helper
function validateContactForm(data: unknown): { valid: boolean; errors: string[]; data?: ContactFormData } {
  const errors: string[] = [];
  
  if (!data || typeof data !== 'object') {
    return { valid: false, errors: ['Invalid request body'] };
  }

  const { name, email, message } = data as Record<string, unknown>;

  if (!name || typeof name !== 'string' || name.trim().length === 0) {
    errors.push('Name is required');
  } else if (name.length > 255) {
    errors.push('Name must be less than 255 characters');
  }

  if (!email || typeof email !== 'string') {
    errors.push('Email is required');
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push('Invalid email format');
  } else if (email.length > 255) {
    errors.push('Email must be less than 255 characters');
  }

  if (!message || typeof message !== 'string' || message.trim().length === 0) {
    errors.push('Message is required');
  } else if (message.length > 5000) {
    errors.push('Message must be less than 5000 characters');
  }

  if (errors.length > 0) {
    return { valid: false, errors };
  }

  return {
    valid: true,
    errors: [],
    data: {
      name: (name as string).trim(),
      email: (email as string).trim().toLowerCase(),
      message: (message as string).trim(),
    },
  };
}

// POST /api/contact
router.post('/', async (req: Request, res: Response) => {
  console.log('[CONTACT] Received contact form submission');
  
  try {
    // Validate input
    const validation = validateContactForm(req.body);
    if (!validation.valid || !validation.data) {
      console.log('[CONTACT] Validation failed:', validation.errors);
      res.status(400).json({
        success: false,
        errors: validation.errors,
      });
      return;
    }

    const formData = validation.data;
    console.log('[CONTACT] Form data validated for:', formData.email);

    // Save to database
    const submission = await saveContactSubmission(formData);
    console.log('[CONTACT] Saved to DB with ID:', submission.id);

    // Send email notification
    console.log('[CONTACT] Sending email notification...');
    await sendContactNotification(formData);
    console.log('[CONTACT] Email sent successfully');

    res.status(200).json({
      success: true,
      message: 'Thank you for your message! I\'ll get back to you soon.',
    });
  } catch (error) {
    console.error('[CONTACT] Error:', error);
    res.status(500).json({
      success: false,
      errors: ['Something went wrong. Please try again later.'],
    });
  }
});

export default router;
