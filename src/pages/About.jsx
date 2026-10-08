import { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main style={{backgroundColor: 'var(--paper)', minHeight: '80vh', padding: '60px 0'}}>
      <div className="wrap">
        <h1 style={{fontFamily: '"Baloo 2", cursive', fontSize: '48px', color: 'var(--ink)', marginBottom: '20px', textAlign: 'center'}}>About HolyKids</h1>
        
        <div style={{background: '#fff', padding: '40px', borderRadius: '24px', boxShadow: '0 10px 40px #173a6f0d', width: '100%', margin: '0'}}>
          <img src="/holykids-logo.png" alt="HolyKids" style={{display: 'block', margin: '0 auto 30px', maxWidth: '150px'}} />
          
          <h2 style={{fontFamily: '"Baloo 2", cursive', color: 'var(--purple)', fontSize: '28px', marginBottom: '15px'}}>Making early learning easier, brighter, and full of fun!</h2>
          
          <p style={{fontSize: '18px', color: '#42628b', lineHeight: '1.6', marginBottom: '20px'}}>
            HolyKids is a Kindergarten Publishing Company dedicated to creating engaging, educational books for young minds. We specialize in materials for Pre-K, LKG, and UKG students through our carefully crafted Beginner, Junior, and Senior series.
          </p>
          
          <p style={{fontSize: '18px', color: '#42628b', lineHeight: '1.6', marginBottom: '20px'}}>
            Our philosophy is simple: learning should be a joyful adventure. That's why every book we publish is designed not just to teach, but to entertain, engage, and inspire curiosity. 
          </p>
          
          <div style={{background: '#f8fbff', padding: '25px', borderRadius: '16px', marginTop: '30px'}}>
            <h3 style={{fontFamily: '"Baloo 2", cursive', color: 'var(--ink)', fontSize: '22px', margin: '0 0 10px'}}>Our Digital Integration</h3>
            <p style={{fontSize: '16px', color: '#607a9e', lineHeight: '1.5', margin: '0 0 15px'}}>
              Modern learning goes beyond the page. Our physical books are equipped with <strong>QR Codes</strong>. When scanned, these codes unlock a world of digital content—including rhymes, educational videos, and interactive stories—available directly on our mobile application and YouTube channel.
            </p>
            <a href="https://play.google.com/store/apps/details?id=school.theholykids.qr" target="_blank" rel="noreferrer" className="button primary" style={{fontSize: '14px', padding: '10px 20px', display: 'inline-flex', alignItems: 'center', gap: '8px'}}>📱 Download HolyKids App on Google Play</a>
          </div>
        </div>
      </div>
    </main>
  );
}
