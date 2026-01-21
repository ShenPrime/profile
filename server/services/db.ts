import { SQL } from 'bun';
import type { ContactSubmission, ContactFormData } from '../types.js';

// Bun's native SQL client - automatically handles connection pooling
const sql = new SQL({
  url: process.env.DATABASE_URL,
  tls: process.env.NODE_ENV === 'production',
});

// Initialize database schema
export async function initializeDatabase(): Promise<void> {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS contact_submissions (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Error initializing database:', error);
    throw error;
  }
}

// Save a contact submission
export async function saveContactSubmission(data: ContactFormData): Promise<ContactSubmission> {
  const [result] = await sql`
    INSERT INTO contact_submissions (name, email, message) 
    VALUES (${data.name}, ${data.email}, ${data.message}) 
    RETURNING id, name, email, message, created_at
  `;
  return result as ContactSubmission;
}

// Get all contact submissions (useful for admin dashboard later)
export async function getContactSubmissions(): Promise<ContactSubmission[]> {
  const results = await sql`
    SELECT * FROM contact_submissions ORDER BY created_at DESC
  `;
  return results as ContactSubmission[];
}

// Close connection (for graceful shutdown)
export async function closeDatabase(): Promise<void> {
  await sql.close();
}

export { sql };
