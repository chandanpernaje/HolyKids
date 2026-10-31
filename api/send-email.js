import dns from 'dns';
dns.setDefaultResultOrder('ipv4first');
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

// Load .env from project root (needed when running via Vite dev middleware)
const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, '..', '.env') });

/**
 * Creates Nodemailer Transporter supporting:
 * 1. Custom SMTP (SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS)
 * 2. Resend API (RESEND_API_KEY)
 * 3. Gmail App Password (GMAIL_USER, GMAIL_APP_PASSWORD)
 */
async function getTransporter() {
  if (process.env.SMTP_HOST) {
    return {
      transporter: nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === 'true' || Number(process.env.SMTP_PORT) === 465,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
        tls: { rejectUnauthorized: false }
      }),
      fromEmail: process.env.SMTP_FROM || process.env.SMTP_USER
    };
  }

  if (process.env.RESEND_API_KEY) {
    return {
      transporter: nodemailer.createTransport({
        host: 'smtp.resend.com',
        port: 465,
        secure: true,
        auth: {
          user: 'resend',
          pass: process.env.RESEND_API_KEY,
        },
        tls: { rejectUnauthorized: false }
      }),
      fromEmail: process.env.RESEND_FROM || '"Admin" <onboarding@resend.dev>'
    };
  }

  const gmailUser = process.env.GMAIL_USER || process.env.EMAIL_USER || 'theholykidspublication@gmail.com';
  const gmailPass = process.env.GMAIL_APP_PASSWORD || process.env.EMAIL_PASS;

  if (gmailPass) {
    let host = 'smtp.gmail.com';
    try {
      const { address } = await dns.promises.lookup('smtp.gmail.com', { family: 4 });
      if (address) host = address;
    } catch { }

    return {
      transporter: nodemailer.createTransport({
        host,
        port: 465,
        secure: true,
        auth: {
          user: gmailUser,
          pass: gmailPass,
        },
        tls: {
          servername: 'smtp.gmail.com',
          rejectUnauthorized: false
        }
      }),
      fromEmail: `"Holy Kids Publication" <${gmailUser}>`
    };
  }

  return null;
}

export default async function handler(req, res) {
  // CORS support
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed. Only POST is supported.' });
  }

  const { name, email, message, phone, organization, schoolName, topic } = req.body || {};

  if (!email || !name) {
    return res.status(400).json({ success: false, error: 'Name and email are required fields.' });
  }

  const adminEmail = process.env.ADMIN_EMAIL || 'theholykidspublication@gmail.com';
  const adminName = process.env.ADMIN_NAME || 'Holy Kids Publication';
  const orgName = organization || schoolName || 'Not Specified';
  const subjectTopic = topic || 'General Inquiry';
  const cleanMessage = (message || 'No message provided').replace(/\n/g, '<br/>');

  const mailSetup = await getTransporter();

  if (!mailSetup) {
    return res.status(503).json({
      success: false,
      error: 'SMTP credentials not configured on backend. Please configure GMAIL_APP_PASSWORD, RESEND_API_KEY, or SMTP_HOST in .env.'
    });
  }

  const { transporter, fromEmail } = mailSetup;

  try {
    // 1. Send Admin Notification Email (Admin receives this)
    await transporter.sendMail({
      from: fromEmail,
      to: adminEmail,
      replyTo: email,
      subject: `[Holy Kids] New Inquiry from ${name} (${subjectTopic})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e1e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
          <div style="background: #ff6d25; color: white; padding: 20px; text-align: center;">
            <h2 style="margin: 0; font-size: 22px;">New Inquiry Received</h2>
            <p style="margin: 5px 0 0; font-size: 14px; opacity: 0.9;">Holy Kids Kindergarten Publishing</p>
          </div>
          <div style="padding: 24px; color: #163560; background: #ffffff;">
            <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; width: 150px; color: #555;">Sender Name:</td>
                <td style="padding: 8px 0; color: #111; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td>
                <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #ff6d25; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Phone:</td>
                <td style="padding: 8px 0; color: #111;">${phone || 'Not Specified'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Organization / School:</td>
                <td style="padding: 8px 0; color: #111;">${orgName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Topic / Subject:</td>
                <td style="padding: 8px 0; color: #111;">${subjectTopic}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555; vertical-align: top;">Message:</td>
                <td style="padding: 8px 0; color: #111; line-height: 1.6;">${cleanMessage}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Submitted At:</td>
                <td style="padding: 8px 0; color: #777; font-size: 13px;">${new Date().toLocaleString()}</td>
              </tr>
            </table>
          </div>
          <div style="background: #f8fbff; padding: 14px 20px; font-size: 12px; color: #7b94b2; text-align: center; border-top: 1px solid #edf2f7;">
            Sent to Admin: <strong>${adminName}</strong> (${adminEmail}) via Holy Kids Mailer
          </div>
        </div>
      `,
    });

    // 2. Send Auto-Reply Confirmation Email to User
    try {
      await transporter.sendMail({
        from: fromEmail,
        to: email,
        replyTo: adminEmail,
        subject: `Thank you for contacting Holy Kids, ${name}!`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e1e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
            <div style="background: linear-gradient(135deg, #173a6f 0%, #0d254a 100%); color: white; padding: 25px 20px; text-align: center;">
              <h1 style="margin: 0; font-size: 24px;">Holy Kids</h1>
              <p style="margin: 6px 0 0; font-size: 14px; color: #ffd13b; font-weight: bold;">Making early learning easier, brighter & full of fun!</p>
            </div>
            <div style="padding: 28px 24px; color: #163560; background: #ffffff; line-height: 1.65; font-size: 15px;">
              <h3 style="color: #ff6d25; margin-top: 0; font-size: 18px;">Hello ${name},</h3>
              <p>
                Thank you for reaching out to <strong>Holy Kids</strong>! We have received your inquiry regarding <em>"${subjectTopic}"</em>.
              </p>
              <p>
                Our academic team and admin, <strong>${adminName}</strong>, are reviewing your details and will get back to you with the required information, demo details, or sample kit assistance shortly.
              </p>
              <div style="background: #fdf8eb; border-left: 4px solid #ffbb00; padding: 14px 18px; border-radius: 6px; margin: 20px 0;">
                <p style="margin: 0; font-size: 14px; color: #855e00;">
                  <strong>Need immediate assistance?</strong><br/>
                  Call our direct academic helpline: <a href="tel:9988046446" style="color: #ff6d25; font-weight: bold; text-decoration: none;">+91 99880 46446</a>
                </p>
              </div>
              <p style="margin-bottom: 0;">
                Warm regards,<br/>
                <strong>${adminName}</strong><br/>
                Administrator & Academic Coordinator<br/>
                <span style="color: #607a9e; font-size: 13px;">Collared Publications (Holy Kids)</span><br/>
                <span style="color: #607a9e; font-size: 13px;"># 39/3, 1st Floor, Kanakapura Road, BSK 2nd Stage, Bangalore – 560070</span><br/>
                <a href="https://theholykids.com" style="color: #173a6f; font-size: 13px; text-decoration: underline;">https://theholykids.com</a>
              </p>
            </div>
            <div style="background: #173a6f; color: #a4c2ea; padding: 12px; font-size: 11px; text-align: center;">
              © 2026 Holy Kids Kindergarten Publishing. All rights reserved.
            </div>
          </div>
        `,
      });
    } catch (autoReplyErr) {
      console.warn('Auto-reply confirmation warning:', autoReplyErr.message);
    }

    return res.status(200).json({
      success: true,
      message: `Inquiry successfully delivered to Admin (${adminEmail}) and auto-reply sent!`
    });
  } catch (error) {
    console.error('Nodemailer sending error:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to send email: ' + (error.message || 'Internal error')
    });
  }
}
