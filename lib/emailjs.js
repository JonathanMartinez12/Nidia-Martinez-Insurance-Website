// EmailJS Configuration
// To use EmailJS, you need to:
// 1. Create a free account at https://www.emailjs.com/
// 2. Create an email service (Gmail, Outlook, etc.)
// 3. Create an email template
// 4. Get your Public Key from the EmailJS dashboard
// 5. Replace the placeholders below with your actual credentials

export const EMAILJS_CONFIG = {
  // Your EmailJS Service ID (from EmailJS dashboard)
  SERVICE_ID: 'YOUR_SERVICE_ID_HERE',

  // Your EmailJS Template ID (from EmailJS dashboard)
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID_HERE',

  // Your EmailJS Public Key (from EmailJS dashboard)
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY_HERE',
};

// Example Email Template Variables:
// In your EmailJS template, you can use these variables:
// {{from_name}} - sender's name
// {{from_email}} - sender's email
// {{phone}} - sender's phone
// {{preferred_language}} - preferred language
// {{service_interest}} - service they're interested in
// {{message}} - message content
