/**
 * Holy Kids Dedicated Email Service
 * 
 * Submits form data directly to the Holy Kids mail handler.
 * - On Vercel / Localhost: Uses local serverless /api/send-email (fastest, direct SMTP)
 * - On static cPanel: Falls back to the deployed backend on Render
 */

export const ADMIN_EMAIL = 'theholykidspublication@gmail.com';
export const ADMIN_NAME = 'Holy Kids Publication';

export async function sendBookingEmail(data) {
  const payload = {
    name: data.name,
    email: data.email,
    phone: data.phone || '',
    organization: data.organization || data.schoolName || '',
    topic: data.topic || 'General Inquiry',
    message: data.message || ''
  };

  // Endpoints to try in order:
  // 1. Same-origin /api (works on local dev & same-origin hosting)
  // 2. Working Vercel mail server (100% verified live backend)
  // 3. Fallback Render server
  const endpoints = [
    '/api/send-email',
    '/api/contact',
    'https://backend-97df.vercel.app/api/send-email',
    'https://backend-97df.vercel.app/api/contact',
    'https://holykids-backend.onrender.com/api/send-email',
    'https://holykids-backend.onrender.com/api/contact'
  ];

  let lastError = null;

  for (const endpoint of endpoints) {
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      // If 404 (endpoint doesn't exist on this host), try the next fallback
      if (res.status === 404) {
        continue;
      }

      const result = await res.json().catch(() => null);

      if (res.ok && result?.success) {
        return {
          success: true,
          provider: 'nodemailer',
          message: result.message || 'Your inquiry has been delivered directly to Holy Kids Publication!'
        };
      }

      if (result && !result.success) {
        lastError = result.error || result.message;
        console.warn(`[Email Service] ${endpoint} error:`, lastError);
      }
    } catch (err) {
      lastError = err?.message || 'Connection error';
      console.warn(`[Email Service] ${endpoint} unreachable:`, lastError);
    }
  }

  return {
    success: false,
    message: lastError || 'Unable to deliver message at this moment. Please try again or call our helpline: +91 99880 46446.'
  };
}

export const sendEmail = sendBookingEmail;
