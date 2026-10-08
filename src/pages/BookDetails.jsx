import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getBookById } from '../data';
import ImageSlider from '../components/ImageSlider';

export default function BookDetails() {
  const { bookId } = useParams();
  const book = getBookById(bookId);
  
  const [formData, setFormData] = useState({ quantity: 1, name: '', email: '', phone: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [bookId]);

  if (!book) return <div className="wrap" style={{padding: '100px 0', textAlign: 'center'}}><h2>Book not found</h2><Link to="/">Return to Home</Link></div>;

  const galleryImages = book.gallery || [
    book.coverImage,
    "/holykids-poster.png",
    book.coverImage,
    "/holykids-poster.png",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: null });
  };

  const handleRequestSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (formData.quantity < 1) newErrors.quantity = 'Quantity must be at least 1.';
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Valid email is required.';
    if (!formData.phone.trim() || !/^\+?\d{7,15}$/.test(formData.phone.replace(/[\s-]/g, ''))) newErrors.phone = 'Valid phone number is required.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nBook: ${book.title}\nSeries: ${book.seriesName}\nQuantity: ${formData.quantity}`;
      window.location.href = `mailto:hello@holykids.in?subject=Request for ${book.title}&body=${encodeURIComponent(body)}`;
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
      setFormData({ quantity: 1, name: '', email: '', phone: '' });
    }
  };

  return (
    <main style={{backgroundColor: 'var(--paper)', minHeight: '80vh', padding: '40px 0'}}>
      <div className="wrap">
        <div className="breadcrumb">
          <Link to="/">Home</Link> → 
          <Link to={`/${book.seriesId}`}>{book.seriesName}</Link> → 
          <span>{book.title}</span>
        </div>
        
        <div className="book-details-wrapper">
          <div className="book-gallery">
             <ImageSlider images={galleryImages} />
             <a href={book.pdfPreview || "/holykids-poster.png"} target="_blank" className="button ghost" style={{marginTop: '15px', width: '100%', justifyContent: 'center', boxShadow: '0 5px 0 #c9dde5'}}>
               📄 Open PDF Preview (Sample Pages)
             </a>
          </div>
          <div className="book-info">
            <h1>{book.title}</h1>
            <div className="book-meta">
              <span>{book.seriesName}</span>
              <span>{book.type}</span>
              <span className="subject">{book.subject}</span>
            </div>
            
            <div className="book-desc">
              <p>{book.shortDesc}</p>
              <p>This beautifully designed {book.type.toLowerCase()} provides an engaging way for children to learn {book.subject}. The pages are filled with colorful illustrations and activities tailored for kindergarten learning.</p>
            </div>
            
            <div className="promo-box">
              <div className="promo-icon">📱</div>
              <div>
                <h4>Interactive QR Code Included</h4>
                <p>Scan the QR code printed in this book to unlock companion learning videos on the HolyKids YouTube channel and Mobile App!</p>
                <a href="https://play.google.com/store/apps/details?id=school.theholykids.qr" target="_blank" rel="noreferrer">📱 Get it on Google Play</a>
              </div>
            </div>

            <div className="action-buttons">
              <a href="#request-book" className="button primary">Request This Book</a>
            </div>
          </div>
        </div>
      </div>

      <section id="request-book" className="enquiry-section" style={{marginTop: '40px'}}>
        <div className="wrap">
          <div className="enquiry-form-wrapper" style={{boxShadow: '0 10px 40px #173a6f11'}}>
            <h2>Need a Replacement or Sample?</h2>
            <p>Schools and educators can request specific books. We will notify our team via email.</p>
            
            {submitted ? (
              <div style={{background: '#e5f7e3', color: '#1c9b45', padding: '20px', borderRadius: '12px', textAlign: 'center', fontWeight: 'bold', fontSize: '16px'}}>
                ✅ Thank you! Your request has been sent to our team via email.
              </div>
            ) : (
              <form onSubmit={handleRequestSubmit} className="form-grid" noValidate>
                <div className="form-group">
                  <label>Selected Series</label>
                  <input type="text" value={book.seriesName} readOnly style={{background: '#f0f4f8'}} />
                </div>
                <div className="form-group">
                  <label>Selected Book</label>
                  <input type="text" value={book.title} readOnly style={{background: '#f0f4f8'}} />
                </div>
                <div className="form-group" style={{marginBottom: errors.quantity ? '10px' : '20px'}}>
                  <label>Quantity</label>
                  <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} min="1" style={{borderColor: errors.quantity ? 'var(--pink)' : ''}} />
                  {errors.quantity && <span style={{color: 'var(--pink)', fontSize: '13px', marginTop: '5px', display: 'block'}}>{errors.quantity}</span>}
                </div>
                <div className="form-group" style={{marginBottom: errors.name ? '10px' : '20px'}}>
                  <label>Your Name / School Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="E.g., Sunrise Kindergarten" style={{borderColor: errors.name ? 'var(--pink)' : ''}} />
                  {errors.name && <span style={{color: 'var(--pink)', fontSize: '13px', marginTop: '5px', display: 'block'}}>{errors.name}</span>}
                </div>
                <div className="form-group full" style={{marginBottom: errors.email ? '10px' : '20px'}}>
                  <label>Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="school@email.com" style={{borderColor: errors.email ? 'var(--pink)' : ''}} />
                  {errors.email && <span style={{color: 'var(--pink)', fontSize: '13px', marginTop: '5px', display: 'block'}}>{errors.email}</span>}
                </div>
                <div className="form-group full" style={{marginBottom: errors.phone ? '10px' : '20px'}}>
                  <label>Contact Details / Phone</label>
                  <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" style={{borderColor: errors.phone ? 'var(--pink)' : ''}} />
                  {errors.phone && <span style={{color: 'var(--pink)', fontSize: '13px', marginTop: '5px', display: 'block'}}>{errors.phone}</span>}
                </div>
                <div className="form-group full">
                  <button type="submit" className="button primary submit-btn">Send Email Request</button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
