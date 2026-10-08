import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // CORS support
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message, phone } = req.body;

  if (!email || !name) {
    return res.status(400).json({ success: false, error: 'Name and email are required.' });
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.resend.com',
    port: 465,
    secure: true,
    auth: {
      user: 'resend',
      pass: process.env.RESEND_API_KEY,
    }
  });

  try {
    // 1. Send Admin Notification Email
    await transporter.sendMail({
      from: '"Admin" <onboarding@resend.dev>',
      to: 'chandanpernaje2@gmail.com',
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
      console.log("User confirmation skipped or failed:", userMailError.message);
    }

    res.status(200).json({ success: true, message: 'Emails processed by Resend!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, error: 'Failed to send emails. Error: ' + error.message });
  }
}
