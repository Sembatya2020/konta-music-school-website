import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key';

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export const sendContactEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        to_email: 'info@kontaschool.org', // Your school's email
      }
    );

    console.log('Email sent successfully:', result.status);
    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
};

export const sendAutoReply = async (formData: ContactFormData): Promise<boolean> => {
  try {
    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      'auto_reply_template', // You'll need to create this template
      {
        to_name: formData.name,
        to_email: formData.email,
        subject: formData.subject,
        school_name: 'Konta School of Music & Performing Arts',
      }
    );

    console.log('Auto-reply sent successfully:', result.status);
    return true;
  } catch (error) {
    console.error('Failed to send auto-reply:', error);
    return false;
  }
};