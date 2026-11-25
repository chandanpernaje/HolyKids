import { useState } from 'react';
import { Link } from 'react-router-dom';
import { facilitiesData, getBooksByBrand } from '../data';
import BookCard from '../components/BookCard';

export default function Home() {
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState('all');

  const handleSelectBrand = (brandId) => {
    setSelectedBrand(brandId);
    setSelectedLevel('all');
  };

  const activeBrandLevels = selectedBrand ? getBooksByBrand(selectedBrand) : [];
  const filteredLevels = selectedLevel === 'all'
    ? activeBrandLevels
    : activeBrandLevels.filter((lvl) => lvl.id === selectedLevel);

  const isAavishkara = selectedBrand === 'aavishkara';

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
              <a
                className="button ghost"
                href="#series"
                onClick={() => { setSelectedBrand(null); setSelectedLevel('all'); }}
              >
                Explore Our Series <span>→</span>
              </a>
              <a className="button ghost" href="#why">How HolyKids helps <span>→</span></a>
              <a className="button ghost" href="#facilities">Our Other Facilities <span>→</span></a>
            </div>
          </div>
          <div className="poster-card">
            <img
              src="/holykids-poster.png"
              alt="HolyKids Beginner English, Junior Maths and Senior EVS kindergarten books — Optional Kannada and Hindi also available"
            />
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
          <h2 className="section-title">Explore Our Series</h2>
          <p className="section-sub">
            Select Holy Kids or Aavishkara Global Education to browse dedicated curriculum books across every learning level.
          </p>

          {!selectedBrand ? (
            <div className="series-brands">
              <button
                type="button"
                className="brand-choice-card holykids"
                onClick={() => handleSelectBrand('holykids')}
              >
                <span className="brand-choice-badge">HOLY KIDS SERIES</span>
                <img className="brand-choice-logo" src="/holykids-logo.png" alt="Holy Kids" />
                <h3>Holy Kids</h3>
                <p>
                  Gift your children - secure future with quality education. Explore Reader & Practice books with QR videos and optional Kannada & Hindi.
                </p>
                <span className="brand-choice-cta">Explore Holy Kids Books →</span>
              </button>

              <button
                type="button"
                className="brand-choice-card aavishkara"
                onClick={() => handleSelectBrand('aavishkara')}
              >
                <span className="brand-choice-badge">AAVISHKARA SERIES</span>
                <img className="brand-choice-logo" src="/aavishkara-logo.png" alt="Aavishkara Global Education" />
                <h3>Aavishkara Global Education</h3>
                <p>
                  A joyful start to learning. Discover structured English, Maths, EVS, and optional Kannada & Hindi series books for young learners.
                </p>
                <span className="brand-choice-cta">Explore Aavishkara Books →</span>
              </button>
            </div>
          ) : (
            <div className="brand-series-panel">
              <div className="brand-panel-toolbar">
                <div className="brand-panel-title-wrap">
                  <img
                    className="brand-panel-logo"
                    src={isAavishkara ? '/aavishkara-logo.png' : '/holykids-logo.png'}
                    alt={isAavishkara ? 'Aavishkara Global Education' : 'Holy Kids'}
                  />
                  <div>
                    <h3 style={{ fontFamily: '"Baloo 2", cursive', fontSize: '26px', margin: 0, color: 'var(--ink)' }}>
                      {isAavishkara ? 'Aavishkara Global Education Books' : 'Holy Kids Books'}
                    </h3>
                    <span style={{ fontSize: '13px', fontWeight: '700', color: '#607a9e' }}>
                      {isAavishkara
                        ? 'Showing only Aavishkara Global Education series books'
                        : 'Showing only Holy Kids series books'}
                    </span>
                  </div>
                </div>

                <div className="brand-panel-actions">
                  <button
                    type="button"
                    className="pill-btn"
                    onClick={() => { setSelectedBrand(null); setSelectedLevel('all'); }}
                  >
                    ← Back to Series
                  </button>
                  <button
                    type="button"
                    className={`pill-btn ${!isAavishkara ? 'active' : ''}`}
                    onClick={() => handleSelectBrand('holykids')}
                  >
                    Holy Kids
                  </button>
                  <button
                    type="button"
                    className={`pill-btn purple ${isAavishkara ? 'active' : ''}`}
                    onClick={() => handleSelectBrand('aavishkara')}
                  >
                    Aavishkara Global Education
                  </button>
                </div>
              </div>

              <div className="level-filter-tabs">
                <button
                  type="button"
                  className={`pill-btn ${isAavishkara ? 'purple' : ''} ${selectedLevel === 'all' ? 'active' : ''}`}
                  onClick={() => setSelectedLevel('all')}
                >
                  All Levels
                </button>
                {activeBrandLevels.map((lvl) => (
                  <button
                    key={lvl.id}
                    type="button"
                    className={`pill-btn ${isAavishkara ? 'purple' : ''} ${selectedLevel === lvl.id ? 'active' : ''}`}
                    onClick={() => setSelectedLevel(lvl.id)}
                  >
                    {lvl.title.replace(' Series', '')} ({lvl.age})
                  </button>
                ))}
              </div>

              {filteredLevels.map((level) => (
                <div key={level.id} className="brand-level-group">
                  <div className="brand-level-header">
                    <h3>
                      {level.title}
                      <span className="brand-level-pill">{level.age}</span>
                    </h3>
                    <Link
                      to={`${level.route}?brand=${selectedBrand}`}
                      style={{ fontSize: '13.5px', fontWeight: '800', color: 'var(--orange)' }}
                    >
                      Open {level.title} Page →
                    </Link>
                  </div>
                  <div className="home-books-grid">
                    {level.books.map((book) => (
                      <BookCard key={book.id} book={book} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
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

      <section className="facilities-section" id="facilities">
        <div className="wrap">
          <div className="section-label">Complete Preschool Resources</div>
          <h2 className="section-title">Our Other Facilities</h2>
          <p className="section-sub">
            Along with our curriculum book series, we supply high-quality classroom and student essentials for schools.
          </p>
          <div className="facilities-grid">
            {facilitiesData.map((facility) => (
              <article key={facility.id} className="facility-card">
                <div className="facility-icon" aria-hidden="true">{facility.icon}</div>
                <h3>{facility.title}</h3>
                <p>{facility.shortDesc}</p>
                <Link
                  to={`/contact?topic=${encodeURIComponent(facility.topic)}`}
                  className="facility-link"
                >
                  Enquire for {facility.title} →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta" id="activities">
        <div className="wrap cta-inner">
          <div>
            <h2>Let the learning adventure begin!</h2>
            <p>Explore the perfect HolyKids series for your little one.</p>
          </div>
          <a
            className="button primary"
            href="#series"
            onClick={() => { setSelectedBrand(null); setSelectedLevel('all'); }}
          >
            Find their perfect book →
          </a>
        </div>
      </section>
    </main>
  );
}
