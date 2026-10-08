require('dotenv').config(); // Load variables from .env file
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();

// Middleware
app.use(cors()); // Allow cross-origin requests from React
app.use(express.json()); // Parse JSON payloads

// ==========================================
// SMTP CONFIGURATION (Resend API)
// ==========================================
const transporter = nodemailer.createTransport({
  host: 'smtp.resend.com',
  port: 465,
  secure: true,
  auth: {
    user: 'resend', // Always 'resend' for Resend API
    pass: process.env.RESEND_API_KEY, // Fetched from .env
  },
  tls: {
    // This bypasses the self-signed certificate error on your local PC (caused by Antivirus)
    rejectUnauthorized: false
  }
});

app.post('/api/send-email', async (req, res) => {
  const { name, email, message, phone } = req.body;

  if (!email || !name) {
    return res.status(400).json({ success: false, error: 'Name and email are required.' });
  }

  try {
    // 1. Send Admin Notification Email
    await transporter.sendMail({
      from: '"Admin" <onboarding@resend.dev>', // Resend requires this for unverified accounts
      to: 'chandanpernaje2@gmail.com', // Must be this email for testing until domain is verified
      replyTo: email,
      subject: `New Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2>New Submission Details</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
            <p><strong>Message/Details:</strong><br/> ${message.replace(/\n/g, '<br/>')}</p>
        </div>
      `,
    });

    // 2. Send User Confirmation Email
    // NOTE: On a free Resend account, you can only send emails TO the address you registered with.
    // If you haven't verified domain in Resend, this confirmation email might fail if they enter a random email.
    try {
      await transporter.sendMail({
        from: '"Admin" <onboarding@resend.dev>',
        to: email, // User receives this
        subject: `Thank you for reaching out, ${name}!`,
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
              <h3>Hello ${name},</h3>
              <p>Thank you! Your enquiry has been submitted. Our team will contact you shortly.</p>
          </div>
        `,
      });
    } catch (userMailError) {
      console.log("User confirmation skipped or failed (common for free Resend accounts):", userMailError.message);
    }

    res.status(200).json({ 
      success: true, 
      message: 'Emails processed by Resend!'
    });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, error: 'Failed to send emails. Error: ' + error.message });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Node mail server running on http://localhost:${PORT}`);
});
