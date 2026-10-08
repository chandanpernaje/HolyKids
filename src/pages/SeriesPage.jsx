import { useEffect, useState } from 'react';
import { seriesData } from '../data';
import BookCard from '../components/BookCard';

export default function SeriesPage({ seriesId }) {
  const series = seriesData[seriesId];
  
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', schoolName: '', city: '', district: '', address: '', quantity: 1, message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [seriesId]);

  if (!series) return <div>Series not found</div>;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: null });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.phone.trim() || !/^\+?\d{7,15}$/.test(formData.phone.replace(/[\s-]/g, ''))) newErrors.phone = 'Valid phone number is required.';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Valid email is required.';
    if (!formData.address.trim()) newErrors.address = 'Delivery address is required.';
    if (formData.quantity < 1) newErrors.quantity = 'Quantity must be at least 1.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      const fullMessage = `
School: ${formData.schoolName || 'N/A'}
City: ${formData.city || 'N/A'}
District: ${formData.district || 'N/A'}
Address: ${formData.address}
Series: ${series.title}
Quantity: ${formData.quantity}

Additional Message:
${formData.message}
      `;

      try {
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: fullMessage
          })
        });

        const result = await response.json();

        if (response.ok && result.success) {
          setSubmitted(true);
          setTimeout(() => setSubmitted(false), 5000);
          setFormData({ name: '', phone: '', email: '', schoolName: '', city: '', district: '', address: '', quantity: 1, message: '' });
        } else {
          alert("Error: " + (result.error || "Failed to send message."));
        }
      } catch (error) {
        console.error("Submission failed:", error);
        alert("Failed to connect to the mail server. Make sure the Node server is running on port 5000.");
      }
    }
  };

  return (
    <main>
      <section className="series-hero">
        <div className="wrap">
          <h1>{series.title}</h1>
          <p>{series.description}</p>
          <p style={{fontSize: '16px', maxWidth: '700px', margin: '0 auto 25px', color: '#607a9e', lineHeight: '1.6'}}>{series.paragraph}</p>
          <a href="#enquiry" className="button primary">Buy {series.title}</a>
        </div>
      </section>

      <section className="section" style={{paddingTop: '20px'}}>
        <div className="wrap book-columns">
          <div>
            <h2 className="column-title"><span>📖</span> Reader Books</h2>
            <div className="book-grid">
              {series.books.reader.map(book => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          </div>
          <div>
            <h2 className="column-title"><span>✏️</span> Practice Books</h2>
            <div className="book-grid">
              {series.books.practice.map(book => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="enquiry" className="enquiry-section">
        <div className="wrap">
          <div className="enquiry-form-wrapper">
            <h2>Interested in the {series.title}?</h2>
            <p>Fill out the form below and we will get back to you with purchase details.</p>
            
            {submitted ? (
              <div style={{background: '#e5f7e3', color: '#1c9b45', padding: '20px', borderRadius: '12px', textAlign: 'center', fontWeight: 'bold', fontSize: '16px'}}>
                ✅ Thank you! Your enquiry has been submitted. Our team will contact you shortly.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="form-grid" noValidate>
                <div className="form-group" style={{marginBottom: errors.name ? '10px' : '20px'}}>
                  <label>Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" style={{borderColor: errors.name ? 'var(--pink)' : ''}} />
                  {errors.name && <span style={{color: 'var(--pink)', fontSize: '13px', marginTop: '5px', display: 'block'}}>{errors.name}</span>}
                </div>
                <div className="form-group" style={{marginBottom: errors.phone ? '10px' : '20px'}}>
                  <label>Phone Number</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Your Phone Number" style={{borderColor: errors.phone ? 'var(--pink)' : ''}} />
                  {errors.phone && <span style={{color: 'var(--pink)', fontSize: '13px', marginTop: '5px', display: 'block'}}>{errors.phone}</span>}
                </div>
                <div className="form-group full" style={{marginBottom: errors.email ? '10px' : '20px'}}>
                  <label>Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email Address" style={{borderColor: errors.email ? 'var(--pink)' : ''}} />
                  {errors.email && <span style={{color: 'var(--pink)', fontSize: '13px', marginTop: '5px', display: 'block'}}>{errors.email}</span>}
                </div>
                <div className="form-group full" style={{marginBottom: '20px'}}>
                  <label>School Name</label>
                  <input type="text" name="schoolName" value={formData.schoolName} onChange={handleChange} placeholder="Your School Name" />
                </div>
                <div className="form-group" style={{marginBottom: '20px'}}>
                  <label>City</label>
                  <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="Your City" />
                </div>
                <div className="form-group" style={{marginBottom: '20px'}}>
                  <label>District</label>
                  <input type="text" name="district" value={formData.district} onChange={handleChange} placeholder="Your District" />
                </div>
                <div className="form-group full" style={{marginBottom: errors.address ? '10px' : '20px'}}>
                  <label>Address</label>
                  <textarea name="address" value={formData.address} onChange={handleChange} placeholder="Your Delivery Address" style={{borderColor: errors.address ? 'var(--pink)' : ''}}></textarea>
                  {errors.address && <span style={{color: 'var(--pink)', fontSize: '13px', marginTop: '5px', display: 'block'}}>{errors.address}</span>}
                </div>
                <div className="form-group">
                  <label>Selected Series</label>
                  <select defaultValue={series.title}>
                    <option value="Beginner Series">Beginner Series</option>
                    <option value="Junior Series">Junior Series</option>
                    <option value="Senior Series">Senior Series</option>
                  </select>
                </div>
                <div className="form-group" style={{marginBottom: errors.quantity ? '10px' : '20px'}}>
                  <label>Quantity (Sets)</label>
                  <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} min="1" style={{borderColor: errors.quantity ? 'var(--pink)' : ''}} />
                  {errors.quantity && <span style={{color: 'var(--pink)', fontSize: '13px', marginTop: '5px', display: 'block'}}>{errors.quantity}</span>}
                </div>
                <div className="form-group full">
                  <label>Message / Additional Requirement</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Any special requests?"></textarea>
                </div>
                <div className="form-group full">
                  <button type="submit" className="button primary submit-btn">Send Enquiry</button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
