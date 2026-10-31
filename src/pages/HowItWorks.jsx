import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main style={{ backgroundColor: 'var(--paper)', minHeight: '80vh', padding: 'clamp(30px, 5vw, 60px) 0' }}>
      <div className="wrap">
        
        {/* Page Title & Subtitle */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto clamp(24px, 4vw, 40px)' }}>
          <span style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '6px', 
            padding: '6px 14px', 
            borderRadius: '20px', 
            background: 'rgba(255, 138, 0, 0.12)', 
            color: 'var(--orange)', 
            fontWeight: '800', 
            fontSize: '13px', 
            textTransform: 'uppercase', 
            letterSpacing: '0.5px',
            marginBottom: '12px' 
          }}>
            <Sparkles size={14} /> Academic Solutions
          </span>
          <h1 style={{ fontFamily: '"Baloo 2", cursive', fontSize: 'clamp(32px, 5.5vw, 50px)', color: 'var(--ink)', lineHeight: '1.15', margin: '0 0 15px' }}>
            How It Works
          </h1>
          <p style={{ fontSize: 'clamp(16px, 2.2vw, 19px)', color: '#42628b', lineHeight: '1.6', margin: 0 }}>
            Empowering preschools, educators, and children through a scientifically researched curriculum and interactive digital integration.
          </p>
        </div>

        {/* Main Mission Card from official theholykids.com/how-it-works/ */}
        <div style={{
          background: '#fff',
          borderRadius: '24px',
          padding: 'clamp(24px, 5vw, 45px)',
          boxShadow: '0 12px 40px rgba(23, 58, 111, 0.06)',
          border: '1px solid #e7eff8',
          marginBottom: '40px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '18px', flexWrap: 'wrap' }}>
            <img src="/holykids-logo.png" alt="Holy Kids" style={{ maxHeight: '42px', width: 'auto' }} />
            <h2 style={{ fontFamily: '"Baloo 2", cursive', color: 'var(--purple)', fontSize: 'clamp(22px, 3.2vw, 30px)', margin: 0 }}>
              HOLY KIDS
            </h2>
          </div>

          <p style={{
            fontSize: 'clamp(16px, 2.4vw, 20px)',
            color: 'var(--ink)',
            lineHeight: '1.65',
            fontWeight: '600',
            background: 'linear-gradient(135deg, #f0f7ff 0%, #faf5ff 100%)',
            padding: 'clamp(20px, 3.5vw, 30px)',
            borderRadius: '16px',
            borderLeft: '5px solid var(--orange)',
            margin: '0 0 25px'
          }}>
            “Holy Kids is an Academic solution provider where we support affordable private schools and entrepreneurs in delivering the right kind of education through an innovative and well researched curriculum.”
          </p>

          <p style={{ fontSize: 'clamp(15px, 2vw, 17px)', color: '#607a9e', lineHeight: '1.6', margin: 0 }}>
            We provide a complete 360-degree academic ecosystem combining structured textbooks, child workbooks, digital phonics apps, and in-person teacher training to ensure outstanding learning outcomes in every classroom.
          </p>
        </div>

        {/* 4-Step Operational Model */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '20px',
          marginBottom: '40px'
        }}>
          <div style={{ background: '#fff', padding: '24px', borderRadius: '18px', border: '1px solid #e7eff8', boxShadow: '0 8px 24px rgba(23, 58, 111, 0.04)' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: '#ffebe6', color: 'var(--orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', marginBottom: '14px' }}>
              01
            </div>
            <h3 style={{ fontFamily: '"Baloo 2", cursive', color: 'var(--ink)', fontSize: '20px', margin: '0 0 8px' }}>
              Curriculum & Child Kits
            </h3>
            <p style={{ fontSize: '14.5px', color: '#607a9e', lineHeight: '1.55', margin: 0 }}>
              Multi-book sets for Beginner (Pre-KG), Junior (LKG), and Senior (UKG) with Reader, Work, and Practice books.
            </p>
          </div>

          <div style={{ background: '#fff', padding: '24px', borderRadius: '18px', border: '1px solid #e7eff8', boxShadow: '0 8px 24px rgba(23, 58, 111, 0.04)' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: '#f2eefa', color: 'var(--purple)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', marginBottom: '14px' }}>
              02
            </div>
            <h3 style={{ fontFamily: '"Baloo 2", cursive', color: 'var(--ink)', fontSize: '20px', margin: '0 0 8px' }}>
              Master Teacher Training
            </h3>
            <p style={{ fontSize: '14.5px', color: '#607a9e', lineHeight: '1.55', margin: 0 }}>
              Practical on-ground pedagogy workshops covering phonics articulation, activity delivery, and daily lesson plans.
            </p>
          </div>

          <div style={{ background: '#fff', padding: '24px', borderRadius: '18px', border: '1px solid #e7eff8', boxShadow: '0 8px 24px rgba(23, 58, 111, 0.04)' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: '#eaf8f0', color: 'var(--green)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', marginBottom: '14px' }}>
              03
            </div>
            <h3 style={{ fontFamily: '"Baloo 2", cursive', color: 'var(--ink)', fontSize: '20px', margin: '0 0 8px' }}>
              Digital App Integration
            </h3>
            <p style={{ fontSize: '14.5px', color: '#607a9e', lineHeight: '1.55', margin: 0 }}>
              Every book page features QR codes linking directly to interactive learning videos, animations, and rhymes on the app.
            </p>
          </div>

          <div style={{ background: '#fff', padding: '24px', borderRadius: '18px', border: '1px solid #e7eff8', boxShadow: '0 8px 24px rgba(23, 58, 111, 0.04)' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: '#e6f3ff', color: 'var(--blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', marginBottom: '14px' }}>
              04
            </div>
            <h3 style={{ fontFamily: '"Baloo 2", cursive', color: 'var(--ink)', fontSize: '20px', margin: '0 0 8px' }}>
              Regional Support Network
            </h3>
            <p style={{ fontSize: '14.5px', color: '#607a9e', lineHeight: '1.55', margin: 0 }}>
              Dedicated coordinators across 11+ Karnataka districts providing direct school assistance throughout the academic year.
            </p>
          </div>
        </div>

        {/* Action Callout */}
        <div style={{
          background: 'linear-gradient(135deg, #173a6f 0%, #0d254a 100%)',
          borderRadius: '24px',
          padding: 'clamp(24px, 4vw, 40px)',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <div>
            <h3 style={{ fontFamily: '"Baloo 2", cursive', fontSize: 'clamp(22px, 3.2vw, 28px)', margin: '0 0 8px' }}>
              Ready to elevate your preschool curriculum?
            </h3>
            <p style={{ fontSize: '15px', color: '#b2c8e5', margin: 0 }}>
              Request a free sample kit or book a live teacher training demo with our academic coordinators.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link to="/contact" className="button primary" style={{ background: 'var(--orange)', color: '#fff', fontWeight: '800' }}>
              Request Free Sample Kit <ArrowRight size={16} />
            </Link>
            <a href="tel:9988046446" className="button" style={{ background: 'rgba(255, 255, 255, 0.15)', color: '#fff', border: '1px solid rgba(255, 255, 255, 0.3)' }}>
              Call: +91 99880 46446
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}
