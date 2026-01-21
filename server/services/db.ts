import pg from 'pg';
import type { ContactSubmission, ContactFormData } from '../types.js';

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

// Initialize database schema
export async function initializeDatabase(): Promise<void> {
  const client = await pool.connect();
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS contact_submissions (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Error initializing database:', error);
    throw error;
  } finally {
    client.release();
  }
}

// Save a contact submission
export async function saveContactSubmission(data: ContactFormData): Promise<ContactSubmission> {
  const client = await pool.connect();
  try {
    const result = await client.query(
      `INSERT INTO contact_submissions (name, email, message) 
       VALUES ($1, $2, $3) 
       RETURNING id, name, email, message, created_at`,
      [data.name, data.email, data.message]
    );
    return result.rows[0];
  } finally {
    client.release();
  }
}

// Get all contact submissions (useful for admin dashboard later)
export async function getContactSubmissions(): Promise<ContactSubmission[]> {
  const client = await pool.connect();
  try {
    const result = await client.query(
      'SELECT * FROM contact_submissions ORDER BY created_at DESC'
    );
    return result.rows;
  } finally {
    client.release();
  }
}

export { pool };
