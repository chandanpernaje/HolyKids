import { useEffect, useState } from 'react';
import { sendBookingEmail } from '../services/emailService';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: null });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full Name is required.';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Valid email is required.';
    if (!formData.message.trim()) newErrors.message = 'Message is required.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setSending(true);
      try {
        const result = await sendBookingEmail({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          topic: 'Website Contact Form'
        });

        if (result.success) {
          setSubmitted(true);
          setFormData({ name: '', email: '', message: '' });
        } else {
          alert("Notice: " + (result.message || "Failed to send message. Please try again or call +91 99880 46446."));
        }
      } catch (error) {
        console.error("Submission failed:", error);
        alert("Failed to deliver your message. Please contact us directly at theholykidspublication@gmail.com or call +91 99880 46446.");
      } finally {
        setSending(false);
      }
    }
  };

  return (
    <main style={{ backgroundColor: 'var(--paper)', minHeight: '80vh', padding: '60px 0' }}>
      <div className="wrap">
        <h1 style={{ fontFamily: '"Baloo 2", cursive', fontSize: '48px', color: 'var(--ink)', marginBottom: '20px', textAlign: 'center' }}>Contact Us</h1>
        <p style={{ textAlign: 'center', color: '#607a9e', fontWeight: '600', marginBottom: '40px' }}>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>

        <div style={{ background: '#fff', padding: '40px', borderRadius: '24px', boxShadow: '0 10px 40px #173a6f0d', maxWidth: '600px', margin: '0 auto' }}>
          {submitted ? (
            <div style={{ background: 'linear-gradient(135deg, #e5f7e3 0%, #f0faf0 100%)', padding: '40px 30px', borderRadius: '16px', textAlign: 'center', border: '1px solid #b8e6b0' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
              <h3 style={{ color: '#1c9b45', fontSize: '22px', margin: '0 0 12px', fontFamily: '"Baloo 2", cursive' }}>Thank You!</h3>
              <p style={{ color: '#2d8a4e', fontSize: '16px', margin: '0 0 20px', lineHeight: '1.6' }}>
                Your message has been sent successfully.<br />We will respond to you as soon as possible.
              </p>
              <p style={{ color: '#607a9e', fontSize: '14px', margin: '0 0 20px' }}>A confirmation email has also been sent to your inbox.</p>
              <button type="button" onClick={() => setSubmitted(false)} className="button primary" style={{ fontSize: '14px', padding: '10px 24px' }}>
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="form-grid" style={{ gridTemplateColumns: '1fr' }} noValidate>
              <div className="form-group full" style={{ marginBottom: errors.name ? '10px' : '20px' }}>
                <label>Full Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" style={{ borderColor: errors.name ? 'var(--pink)' : '' }} />
                {errors.name && <span style={{ color: 'var(--pink)', fontSize: '13px', marginTop: '5px', display: 'block' }}>{errors.name}</span>}
              </div>
              <div className="form-group full" style={{ marginBottom: errors.email ? '10px' : '20px' }}>
                <label>Email Address</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" style={{ borderColor: errors.email ? 'var(--pink)' : '' }} />
                {errors.email && <span style={{ color: 'var(--pink)', fontSize: '13px', marginTop: '5px', display: 'block' }}>{errors.email}</span>}
              </div>
              <div className="form-group full" style={{ marginBottom: errors.message ? '10px' : '20px' }}>
                <label>Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="How can we help you?" style={{ borderColor: errors.message ? 'var(--pink)' : '' }}></textarea>
                {errors.message && <span style={{ color: 'var(--pink)', fontSize: '13px', marginTop: '5px', display: 'block' }}>{errors.message}</span>}
              </div>
              <div className="form-group full" style={{ marginTop: '10px' }}>
                <button type="submit" className="button primary submit-btn" disabled={sending}>
                  {sending ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
