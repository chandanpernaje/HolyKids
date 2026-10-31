import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function LearnAndPlay() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main style={{backgroundColor: 'var(--paper)', minHeight: '80vh'}}>
      <section className="why" style={{paddingTop: '60px'}}>
        <div className="wrap why-grid">
          <div className="book-window">
            <img src="/holykids-poster.png" alt="HolyKids learning collection" />
          </div>
          <div className="why-copy">
            <div className="section-label">Interactive Learning</div>
            <h1 className="section-title" style={{fontSize: '48px', marginBottom: '15px'}}>Learn & Play</h1>
            <p className="section-sub" style={{marginBottom: '15px'}}>At HolyKids, education is an interactive experience. Explore our digital resources, activities, and games that bring our books to life.</p>
            <a href="https://play.google.com/store/apps/details?id=school.theholykids.qr" target="_blank" rel="noreferrer" className="button primary" style={{marginBottom: '30px', display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#327ed3', boxShadow: '0 5px 0 #1b5394'}}>📱 Get the HolyKids Mobile App</a>
            
            <div className="benefits">
              <div className="benefit"><span className="bubble">📖</span>Learning Activities</div>
              <div className="benefit"><span className="bubble">🧩</span>Educational Games</div>
              <div className="benefit"><span className="bubble">▶</span>Learning Videos</div>
              <div className="benefit"><span className="bubble">✏️</span>Printable Worksheets</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="activities" style={{background: '#fff'}}>
        <div className="wrap">
          <h2 className="section-title">Explore by Series</h2>
          <p className="section-sub" style={{marginBottom: '40px'}}>Find activities perfectly tailored for your child's age group.</p>
          
          <div className="series" style={{gap: '30px'}}>
            <div style={{background: '#e8f6ff', padding: '30px', borderRadius: '24px', textAlign: 'center'}}>
              <h3 style={{fontFamily: '"Baloo 2", cursive', fontSize: '28px', color: 'var(--ink)', margin: '0 0 15px'}}>Beginner (Pre-KG)</h3>
              <p style={{color: '#607a9e', marginBottom: '20px'}}>Alphabet tracing, color matching, and fun beginner rhymes.</p>
              <Link to="/beginner" className="button primary" style={{background: '#327ed3', boxShadow: '0 5px 0 #1b5394'}}>View Books</Link>
            </div>
            
            <div style={{background: '#e5f7e3', padding: '30px', borderRadius: '24px', textAlign: 'center'}}>
              <h3 style={{fontFamily: '"Baloo 2", cursive', fontSize: '28px', color: 'var(--ink)', margin: '0 0 15px'}}>Junior (LKG)</h3>
              <p style={{color: '#607a9e', marginBottom: '20px'}}>Simple word games, counting activities, and storytime videos.</p>
              <Link to="/junior" className="button primary" style={{background: '#1c9b45', boxShadow: '0 5px 0 #12632b'}}>View Books</Link>
            </div>
            
            <div style={{background: '#f4ebff', padding: '30px', borderRadius: '24px', textAlign: 'center'}}>
              <h3 style={{fontFamily: '"Baloo 2", cursive', fontSize: '28px', color: 'var(--ink)', margin: '0 0 15px'}}>Senior (UKG)</h3>
              <p style={{color: '#607a9e', marginBottom: '20px'}}>Advanced reading comprehension, math puzzles, and science facts.</p>
              <Link to="/senior" className="button primary" style={{background: '#a760bd', boxShadow: '0 5px 0 #6e397e'}}>View Books</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
