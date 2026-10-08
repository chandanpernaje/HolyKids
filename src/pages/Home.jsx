import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main id="home">
      <section className="hero">
        <span className="spark s1">✦</span>
        <span className="spark s2">★</span>
        <div className="wrap hero-grid">
          <div>
            <div className="eyebrow"><i>★</i> FUN KINDERGARTEN LEARNING</div>
            <h1>Little minds.<br /><em>Big, bright</em> beginnings.</h1>
            <p>Discover books, videos, rhymes and playful practice made especially for little learners from Pre-KG to UKG.</p>
            <div className="buttons">
              <a className="button ghost" href="#series">Explore Our Series <span>→</span></a>
              <a className="button ghost" href="#why">How HolyKids helps <span>→</span></a>
            </div>
          </div>
          <div className="poster-card">
            <img src="/holykids-poster.png" alt="HolyKids Beginner, Junior and Senior kindergarten books" />
          </div>
        </div>
      </section>
      
      <section className="strip">
        <div className="wrap strip-inner">
          <div className="strip-item"><span>📚</span>Books made for little hands</div>
          <div className="strip-item"><span>▶</span>Watch, learn & enjoy</div>
          <div className="strip-item"><span>✎</span>Fun printable worksheets</div>
          <div className="strip-item"><span>♡</span>Made with care in India</div>
        </div>
      </section>

      <section className="section" id="series">
        <div className="wrap">
          <div className="section-label">Choose their learning adventure</div>
          <h2 className="section-title">Three happy steps to grow</h2>
          <p className="section-sub">A carefully shaped learning journey for every stage of kindergarten.</p>
          <div className="series">
            <article className="series-card">
              <span className="age">PRE-KG</span>
              <span className="series-icon">A B C</span>
              <h3>Beginner</h3>
              <p>First letters, sounds, numbers and wonderful everyday discoveries.</p>
              <Link to="/beginner"><span className="explore">Explore Beginner <b>→</b></span></Link>
            </article>
            <article className="series-card">
              <span className="age">LKG</span>
              <span className="series-icon">1 2 3</span>
              <h3>Junior</h3>
              <p>Build confidence with language, creative practice and joyful activities.</p>
              <Link to="/junior"><span className="explore">Explore Junior <b>→</b></span></Link>
            </article>
            <article className="series-card">
              <span className="age">UKG</span>
              <span className="series-icon">✦</span>
              <h3>Senior</h3>
              <p>Get ready for school with stronger skills and curious thinking.</p>
              <Link to="/senior"><span className="explore">Explore Senior <b>→</b></span></Link>
            </article>
          </div>
        </div>
      </section>

      <section className="why" id="why">
        <div className="wrap why-grid">
          <div className="book-window">
            <img src="/holykids-poster.png" alt="HolyKids learning collection" />
          </div>
          <div className="why-copy">
            <div className="section-label">One joyful learning world</div>
            <h2 className="section-title">More than a book</h2>
            <p className="section-sub">HolyKids brings together everything a child needs to learn with confidence—and have a lot of fun along the way.</p>
            <div className="benefits">
              <div className="benefit"><span className="bubble">📖</span>Engaging books</div>
              <div className="benefit"><span className="bubble">🎵</span>Rhymes & stories</div>
              <div className="benefit"><span className="bubble">▶</span>Learning videos</div>
              <div className="benefit"><span className="bubble">✏️</span>Practice worksheets</div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta" id="activities">
        <div className="wrap cta-inner">
          <div>
            <h2>Let the learning adventure begin!</h2>
            <p>Explore the perfect HolyKids series for your little one.</p>
          </div>
          <a className="button primary" href="#series">Find their perfect book →</a>
        </div>
      </section>
    </main>
  );
}
