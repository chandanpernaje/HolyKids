import { useEffect, useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

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
      try {
        // Calling our PHP script
        // Note: For local testing, change '/api/send_email.php' to your live domain 
        // Calling our new Node.js server
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData)
        });

        const result = await response.json();

        if (response.ok && result.success) {
          setSubmitted(true);
          setTimeout(() => setSubmitted(false), 5000);
          setFormData({ name: '', email: '', message: '' });
        } else {
          alert("Error: " + (result.error || "Failed to send message."));
        }
      } catch (error) {
        console.error("Submission failed:", error);
        alert("Failed to connect to the mail script. Are you running this on a live PHP server?");
      }
    }
  };

  return (
    <main style={{backgroundColor: 'var(--paper)', minHeight: '80vh', padding: '60px 0'}}>
      <div className="wrap">
        <h1 style={{fontFamily: '"Baloo 2", cursive', fontSize: '48px', color: 'var(--ink)', marginBottom: '20px', textAlign: 'center'}}>Contact Us</h1>
        <p style={{textAlign: 'center', color: '#607a9e', fontWeight: '600', marginBottom: '40px'}}>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        
        <div style={{background: '#fff', padding: '40px', borderRadius: '24px', boxShadow: '0 10px 40px #173a6f0d', maxWidth: '600px', margin: '0 auto'}}>
          {submitted ? (
            <div style={{background: '#e5f7e3', color: '#1c9b45', padding: '20px', borderRadius: '12px', textAlign: 'center', fontWeight: 'bold', fontSize: '16px'}}>
              ✅ Thank you! Your message has been sent successfully.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="form-grid" style={{gridTemplateColumns: '1fr'}} noValidate>
              <div className="form-group full" style={{marginBottom: errors.name ? '10px' : '20px'}}>
                <label>Full Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" style={{borderColor: errors.name ? 'var(--pink)' : ''}} />
                {errors.name && <span style={{color: 'var(--pink)', fontSize: '13px', marginTop: '5px', display: 'block'}}>{errors.name}</span>}
              </div>
              <div className="form-group full" style={{marginBottom: errors.email ? '10px' : '20px'}}>
                <label>Email Address</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" style={{borderColor: errors.email ? 'var(--pink)' : ''}} />
                {errors.email && <span style={{color: 'var(--pink)', fontSize: '13px', marginTop: '5px', display: 'block'}}>{errors.email}</span>}
              </div>
              <div className="form-group full" style={{marginBottom: errors.message ? '10px' : '20px'}}>
                <label>Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="How can we help you?" style={{borderColor: errors.message ? 'var(--pink)' : ''}}></textarea>
                {errors.message && <span style={{color: 'var(--pink)', fontSize: '13px', marginTop: '5px', display: 'block'}}>{errors.message}</span>}
              </div>
              <div className="form-group full" style={{marginTop: '10px'}}>
                <button type="submit" className="button primary submit-btn">
                  Send Message
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
