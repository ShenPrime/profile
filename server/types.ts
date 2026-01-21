export interface ContactSubmission {
  id?: number;
  name: string;
  email: string;
  message: string;
  created_at?: Date;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
