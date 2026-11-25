/**
 * Holy Kids Dedicated Email Service with Anti-Bot & Spam Protection
 * 
 * Submits form data directly to the Holy Kids backend API (/api/send-email and /api/contact).
 * Includes:
 * 1. Honeypot field inspection (blocks automated dumb bots)
 * 2. Invisible Google reCAPTCHA v3 verification (blocks smart headless bots)
 * 3. Rate-limited server submission
 */

export const ADMIN_EMAIL = 'theholykidspublication@gmail.com';
export const ADMIN_NAME = 'Holy Kids Publication';

/**
 * Loads and requests an invisible Google reCAPTCHA v3 token if configured.
 * Gracefully returns null if no valid key is configured.
 */
async function getRecaptchaToken(action = 'submit') {
  const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
  if (!siteKey || siteKey === 'YOUR_RECAPTCHA_V3_SITE_KEY_HERE') {
    return null;
  }

  return new Promise((resolve) => {
    try {
      const execute = () => {
        if (window.grecaptcha && window.grecaptcha.execute) {
          window.grecaptcha.ready(() => {
            window.grecaptcha.execute(siteKey, { action }).then(resolve).catch(() => resolve(null));
          });
        } else {
          resolve(null);
        }
      };

      if (!window.grecaptcha) {
        const scriptId = 'google-recaptcha-v3';
        let script = document.getElementById(scriptId);
        if (!script) {
          script = document.createElement('script');
          script.id = scriptId;
          script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
          script.async = true;
          script.onload = execute;
          script.onerror = () => resolve(null);
          document.head.appendChild(script);
        } else {
          script.addEventListener('load', execute);
        }
      } else {
        execute();
      }
    } catch {
      resolve(null);
    }
  });
}

/**
 * Submits form inquiry to the Holy Kids backend mail handler
 * 
 * @param {Object} data - Form data
 * @param {string} data.name - Sender full name
 * @param {string} data.email - Sender email
 * @param {string} [data.phone] - Contact phone number
 * @param {string} [data.organization] - School or institution name
 * @param {string} [data.schoolName] - Alternative alias for school name
 * @param {string} [data.topic] - Subject or topic
 * @param {string} data.message - Detailed inquiry message
 * @param {string} [data._hp] - Honeypot field (must be empty for human users)
 * @returns {Promise<{success: boolean, message?: string, provider?: string}>}
 */
export async function sendBookingEmail(data) {
  // 1. Client-side Honeypot Check: Dumb bots automatically fill all input fields
  if (data._hp && data._hp.trim() !== '') {
    console.warn('[Anti-Spam] Bot detected via honeypot field. Suppressing request.');
    // Pretend success so bot does not retry
    return {
      success: true,
      provider: 'anti-spam',
      message: 'Your inquiry has been received.'
    };
  }

  // 2. Fetch invisible reCAPTCHA v3 token if configured
  const recaptchaToken = await getRecaptchaToken('contact_form');

  const payload = {
    name: data.name,
    email: data.email,
    phone: data.phone || '',
    organization: data.organization || data.schoolName || '',
    topic: data.topic || 'General Inquiry',
    message: data.message || '',
    _hp: data._hp || '',
    recaptchaToken: recaptchaToken || ''
  };

  const endpoints = ['/api/send-email', '/api/contact'];
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
