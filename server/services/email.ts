import { Resend } from 'resend';
import type { ContactFormData } from '../types.js';

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_EMAIL = process.env.FROM_EMAIL || 'hello@shen-dev.com';
const TO_EMAIL = process.env.TO_EMAIL || 'leoalshen@gmail.com';

export async function sendContactNotification(data: ContactFormData): Promise<void> {
  const { name, email, message } = data;

  try {
    await resend.emails.send({
      from: `Portfolio Contact <${FROM_EMAIL}>`,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #7aa2f7; border-bottom: 2px solid #7aa2f7; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background: #1a1b26; color: #a9b1d6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0 0 15px 0;">
              <strong style="color: #7aa2f7;">Name:</strong><br>
              ${name}
            </p>
            
            <p style="margin: 0 0 15px 0;">
              <strong style="color: #7aa2f7;">Email:</strong><br>
              <a href="mailto:${email}" style="color: #7dcfff;">${email}</a>
            </p>
            
            <p style="margin: 0;">
              <strong style="color: #7aa2f7;">Message:</strong><br>
              <span style="white-space: pre-wrap;">${message}</span>
            </p>
          </div>
          
          <p style="color: #565f89; font-size: 12px; margin-top: 20px;">
            This message was sent from your portfolio contact form at shen-dev.com
          </p>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}

Message:
${message}

---
This message was sent from your portfolio contact form at shen-dev.com
      `.trim(),
    });

    console.log(`Email notification sent successfully to ${TO_EMAIL}`);
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}
