import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  BookOpen, 
  Award, 
  Phone, 
  Sparkles, 
  Download, 
  ExternalLink,
  Eye, 
  X, 
  MessageSquare, 
  ArrowRight,
  Play
} from 'lucide-react';
import './TeachersTrainingSection.css';

export default function TeachersTrainingSection() {
  const trainingVideos = [
    {
      id: 1,
      title: 'Session 1: Classroom Pedagogy & Phonics Drills',
      shortTitle: 'Session 1: Pedagogy & Phonics',
      tag: 'Classroom Pedagogy',
      src: '/teachers-training-video-1.mp4',
      description: 'Hands-on training simulating authentic kindergarten classroom interactions, phonics articulation, and interactive listening.'
    },
    {
      id: 2,
      title: 'Session 2: Activity-Based Lesson Delivery & Worksheets',
      shortTitle: 'Session 2: Activity Execution',
      tag: 'Hands-On Activity',
      src: '/teachers-training-video-2.mp4',
      description: 'Guiding educators on making workbook exercises thrilling, tactile, and deeply engaging for little learners.'
    },
    {
      id: 3,
      title: 'Session 3: Live Teacher Empowerment & Teaching Aids',
      shortTitle: 'Session 3: Live Workshop',
      tag: 'Live Workshop',
      src: '/teachers-training-video-3.mp4',
      description: 'Comprehensive teacher development workshop covering classroom management, teaching aids usage, and student development.'
    }
  ];

  const [activeVideoId, setActiveVideoId] = useState(1);
  const activeVideo = trainingVideos.find(v => v.id === activeVideoId) || trainingVideos[0];
  const brochurePages = [
    { page: 1, title: 'Page 1: Outer Cover & Theme', file: '/brochure-page-1.jpg' },
    { page: 2, title: 'Page 2: Who We Are, Mission & Destination', file: '/brochure-page-2.jpg' },
    { page: 3, title: 'Page 3: Curriculum Factors & LSRW Framework', file: '/brochure-page-3.jpg' },
    { page: 4, title: 'Page 4: 3-Book Mastery System & Belief About Children', file: '/brochure-page-4.jpg' },
    { page: 5, title: 'Page 5: Multi-Book Child Kits (Beginner, Junior, Senior)', file: '/brochure-page-5.jpg' },
    { page: 6, title: 'Page 6: Bangalore Head Office & Regional Branches Directory', file: '/brochure-page-6.jpg' }
  ];
  const [showBrochureModal, setShowBrochureModal] = useState(false);
  const [brochurePage, setBrochurePage] = useState('all');
  const videoRef = useRef(null);

  const waMessage = encodeURIComponent(
    "Hello HolyKids Team! I am interested in your Teachers Training Program and Pre-School Curriculum for my school. Please share more details."
  );

  return (
    <section className="tt-section" id="teachers-training">
      {/* Ambient background glows */}
      <div className="tt-bg-glow tt-bg-glow-1"></div>
      <div className="tt-bg-glow tt-bg-glow-2"></div>
      <div className="tt-bg-glow tt-bg-glow-3"></div>

      <div className="wrap tt-container">
        
        {/* --- Section Header & Sales Hook --- */}
        <div className="tt-header">
          <div className="tt-badge-group">
            <span className="tt-badge-tag">Academic Solution Provider Since 2015</span>
            <span>COLLARED PUBLICATIONS × HOLY KIDS</span>
          </div>

          <h2 className="tt-title">
            Empower Your Teachers. Elevate Your Classrooms.<br />
            <span className="highlight">Guaranteed Preschool Admissions & Growth!</span>
          </h2>

          <p className="tt-subtitle">
            India’s fastest-growing Pre-School Curriculum publisher. We provide complete 
            <strong> Hands-On Teachers Training</strong>, proven <strong>Conceptual Learning Methodologies</strong>, 
            and turnkey <strong>Activity-Based Child Kits</strong> that give your school an unbeatable academic edge.
          </p>

          <div className="tt-quick-actions">
            <a 
              href={`https://wa.me/919988046446?text=${waMessage}`}
              target="_blank" 
              rel="noreferrer" 
              className="tt-btn-whatsapp"
            >
              <MessageSquare size={18} /> Chat with Academic Director
            </a>
            <a href="tel:9988046446" className="tt-btn-primary">
              <Phone size={18} /> Call: 99880 46446
            </a>
            <button 
              type="button" 
              onClick={() => { setBrochurePage('all'); setShowBrochureModal(true); }} 
              className="tt-btn-ghost"
            >
              <Eye size={18} /> View Curriculum Brochure
            </button>
          </div>
        </div>

        {/* --- Social Proof Counters (Brochure Proven Track Record) --- */}
        <div className="tt-stats-grid">
          <div className="tt-stat-card">
            <div className="tt-stat-number">6+ Years</div>
            <div className="tt-stat-label">Of Academic Celebration</div>
          </div>
          <div className="tt-stat-card">
            <div className="tt-stat-number">480+</div>
            <div className="tt-stat-label">Partner Schools Empowered</div>
          </div>
          <div className="tt-stat-card">
            <div className="tt-stat-number">22,000+</div>
            <div className="tt-stat-label">Students Learning Daily</div>
          </div>
          <div className="tt-stat-card">
            <div className="tt-stat-number">11+</div>
            <div className="tt-stat-label">District Support Centers</div>
          </div>
        </div>

        {/* --- Video Presentation & Sales Bullets --- */}
        <div className="tt-feature-box" id="training-videos">
          
          {/* Video Showcase Player */}
          <div className="tt-video-showcase-col">
            <div className="tt-card-video-header">
              <span className="tt-pitch-tag">Curriculum Pedagogy Workshops</span>
              <h3 className="tt-pitch-heading">Teacher Training Program</h3>
            </div>

            {/* Playlist Tabs */}
            <div className="tt-video-tabs-bar">
              {trainingVideos.map((vid) => (
                <button
                  key={vid.id}
                  type="button"
                  className={`tt-video-tab-btn ${activeVideoId === vid.id ? 'active' : ''}`}
                  onClick={() => setActiveVideoId(vid.id)}
                >
                  <Play size={14} />
                  <span>{vid.shortTitle}</span>
                </button>
              ))}
            </div>

            <div className="tt-video-wrapper">
              <div className="tt-video-badge">
                <span className="pulse-dot"></span>
                <span>{activeVideo.tag.toUpperCase()}</span>
              </div>
              
              <video 
                key={activeVideo.id}
                ref={videoRef}
                className="tt-video-player"
                controls
                playsInline
                preload="metadata"
                poster="/holykids-poster.png"
              >
                <source src={activeVideo.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <div className="tt-video-caption">
                <div>
                  <strong>{activeVideo.title}:</strong> {activeVideo.description}
                </div>
                <span style={{ fontSize: '11px', background: 'rgba(255,255,255,0.15)', padding: '3px 8px', borderRadius: '10px', whiteSpace: 'nowrap' }}>
                  Video {activeVideo.id} of 3
                </span>
              </div>
            </div>
          </div>

          {/* Sales Pitch Column */}
          <div className="tt-pitch-col">
            <span className="tt-pitch-tag">The Secret Weapon For School Principals</span>
            <h3 className="tt-pitch-heading">
              Turn Every Teacher into a Master Early Educator
            </h3>
            <p className="tt-pitch-desc">
              Great curriculum is only as good as the teachers who bring it to life. Collared Publications 
              provides dedicated, on-ground and virtual training to equip your teachers with child psychology, 
              classroom engagement techniques, and phonetics mastery.
            </p>

            <div className="tt-pitch-list">
              <div className="tt-pitch-item">
                <div className="tt-pitch-icon-box" style={{ background: 'var(--orange)' }}>
                  <GraduationCap size={20} />
                </div>
                <div className="tt-pitch-text">
                  <h4>Dedicated Teachers Training Support</h4>
                  <p>In-person workshops, session lesson planning, phonics drills, and activity delivery mastery.</p>
                </div>
              </div>

              <div className="tt-pitch-item">
                <div className="tt-pitch-icon-box" style={{ background: 'var(--purple)' }}>
                  <BookOpen size={20} />
                </div>
                <div className="tt-pitch-text">
                  <h4>Curriculum Teachers Resource Material</h4>
                  <p>Detailed day-by-day teacher manuals, flashcards, teaching aids, and activity evaluation sheets.</p>
                </div>
              </div>

              <div className="tt-pitch-item">
                <div className="tt-pitch-icon-box" style={{ background: 'var(--green)' }}>
                  <Award size={20} />
                </div>
                <div className="tt-pitch-text">
                  <h4>Activity-Based Learning Child Kits</h4>
                  <p>Specially curated multi-book packs for Beginner, Junior, and Senior series that delight kids and parents.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* --- Curriculum Factors & LSRW Conceptual Learning Grid --- */}
        <div className="tt-curriculum-grid" id="curriculum-factors">
          
          {/* 5 Factors Box */}
          <div className="tt-box-card">
            <div className="tt-box-header">
              <h3 className="tt-box-title">
                <Sparkles size={22} color="var(--purple)" /> 
                Holy Kids Curriculum Factors
              </h3>
              <p className="tt-box-sub">
                Our curriculum is scientifically designed around the 5 foundational pillars of early childhood development:
              </p>
            </div>

            <div className="tt-factors-list">
              <div className="tt-factor-item">
                <div className="tt-factor-num">01</div>
                <div>
                  <div className="tt-factor-title">Linguistic Development</div>
                  <div className="tt-factor-desc">Phonetics, rich vocabulary, speech clarity, and expressive language.</div>
                </div>
              </div>
              <div className="tt-factor-item">
                <div className="tt-factor-num">02</div>
                <div>
                  <div className="tt-factor-title">Cognitive Development</div>
                  <div className="tt-factor-desc">Critical thinking, problem solving, logic, pattern recognition, and memory.</div>
                </div>
              </div>
              <div className="tt-factor-item">
                <div className="tt-factor-num">03</div>
                <div>
                  <div className="tt-factor-title">Creative Expression</div>
                  <div className="tt-factor-desc">Art, imaginative role-playing, musical rhythms, and open-ended exploration.</div>
                </div>
              </div>
              <div className="tt-factor-item">
                <div className="tt-factor-num">04</div>
                <div>
                  <div className="tt-factor-title">Social & Emotional Well-Being</div>
                  <div className="tt-factor-desc">Empathy, sharing, peer cooperation, self-regulation, and emotional security.</div>
                </div>
              </div>
              <div className="tt-factor-item">
                <div className="tt-factor-num">05</div>
                <div>
                  <div className="tt-factor-title">Gross & Fine Motor Skills</div>
                  <div className="tt-factor-desc">Pencil grip, hand-eye coordination, balance, agility, and motor control.</div>
                </div>
              </div>
            </div>
          </div>

          {/* LSRW Learning Method Box */}
          <div className="tt-box-card">
            <div className="tt-box-header">
              <h3 className="tt-box-title">
                <BookOpen size={22} color="var(--orange)" /> 
                Conceptual Learning Method
              </h3>
              <p className="tt-box-sub">
                Proven natural language acquisition framework that eliminates rote learning and builds lasting fluency:
              </p>
            </div>

            <div className="tt-lsrw-grid">
              <div className="tt-lsrw-card">
                <div className="tt-lsrw-num" style={{ background: '#ff7738' }}>1</div>
                <div>
                  <div className="tt-lsrw-name">Listening 🎧</div>
                  <div className="tt-lsrw-sub">Auditory discrimination, phonics sounds & attentive comprehension.</div>
                </div>
              </div>

              <div className="tt-lsrw-card">
                <div className="tt-lsrw-num" style={{ background: '#7e47b8' }}>2</div>
                <div>
                  <div className="tt-lsrw-name">Speaking 🎙️</div>
                  <div className="tt-lsrw-sub">Conversational confidence, role-play dialogues & vocabulary use.</div>
                </div>
              </div>

              <div className="tt-lsrw-card">
                <div className="tt-lsrw-num" style={{ background: '#327ed3' }}>3</div>
                <div>
                  <div className="tt-lsrw-name">Reading 📖</div>
                  <div className="tt-lsrw-sub">Sight words, blending letters & joyful story illustration reading.</div>
                </div>
              </div>

              <div className="tt-lsrw-card">
                <div className="tt-lsrw-num" style={{ background: '#1c9b45' }}>4</div>
                <div>
                  <div className="tt-lsrw-name">Writing ✍️</div>
                  <div className="tt-lsrw-sub">Tracing, letter formation, fine motor control & neat penmanship.</div>
                </div>
              </div>
            </div>

            {/* Our Mission Banner */}
            <div style={{ background: '#f4faff', border: '1px solid #ddecfa', borderRadius: '16px', padding: '18px', marginTop: '20px' }}>
              <div style={{ fontSize: '13px', fontWeight: '900', color: 'var(--ink)', textTransform: 'uppercase', marginBottom: '8px' }}>
                🎯 Our Clear Mission
              </div>
              <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '13.5px', color: '#42628b', fontWeight: '700', lineHeight: '1.6' }}>
                <li>Provide Quality Education to every school across India.</li>
                <li>Introduce an Activity-Based Education System to every classroom.</li>
                <li>Apply Conceptual Learning Methods to educate each unique child.</li>
              </ul>
            </div>
          </div>

        </div>

        {/* --- 3-Book Structure & Kit Series Banner --- */}
        <div className="tt-series-banner">
          <div className="tt-series-header">
            <span style={{ background: 'rgba(255,255,255,0.2)', padding: '4px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: '800', textTransform: 'uppercase' }}>
              The 3-Book Mastery System
            </span>
            <h3>Holy Kids Program Series</h3>
            <p>
              Every level features a 3-pillar progressive book structure engineered to take little learners from curiosity to complete mastery.
            </p>
          </div>

          <div className="tt-books-flow">
            <div className="tt-book-step">
              <span className="tt-book-tag">Step 1 • Discover</span>
              <h4>Reader Book</h4>
              <p>Activity-based learning crafted specifically for children to learn concepts, observe, and read with joyful engagement.</p>
              <Link to="/book/b-kannada-reader" className="tt-book-sample-btn">
                View Sample <ArrowRight size={14} />
              </Link>
            </div>

            <div className="tt-book-step">
              <span className="tt-book-tag">Step 2 • Understand</span>
              <h4>Work Book</h4>
              <p>Deep guided process of understanding the read things, reinforcing memory through tactile and visual exercises.</p>
            </div>

            <div className="tt-book-step">
              <span className="tt-book-tag">Step 3 • Excel</span>
              <h4>Practice Book</h4>
              <p>Improves writing skills, reinforces retention, and makes children knowledgeable, confident, and school-ready.</p>
            </div>
          </div>

          {/* Kits Badges */}
          <div className="tt-kits-bar">
            <div className="tt-kit-pill">
              <span>🎒</span> <strong>HK Beginner Kit</strong> (Pack of 10 Books • Pre-KG)
            </div>
            <div className="tt-kit-pill">
              <span>📚</span> <strong>HK Junior Kit</strong> (Pack of 11 Books • LKG)
            </div>
            <div className="tt-kit-pill">
              <span>🎓</span> <strong>HK Senior Kit</strong> (Pack of 11 Books • UKG)
            </div>
          </div>
        </div>

        {/* --- Our Belief About Children (From Brochure) --- */}
        <div className="tt-beliefs-section">
          <div className="tt-beliefs-header">
            <span style={{ color: 'var(--orange)', fontWeight: '900', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Child-Centric Pedagogy
            </span>
            <h3>Our Belief About Children</h3>
            <p>Every page and training session is grounded in respect for how children truly learn and flourish.</p>
          </div>

          <div className="tt-beliefs-grid">
            <div className="tt-belief-card">
              <i>✓</i>
              <p>Children develop holistically and learn as a whole, integrating mind, body, and emotions.</p>
            </div>
            <div className="tt-belief-card">
              <i>✓</i>
              <p>Children development is nurtured by diverse social and cultural contexts they live in.</p>
            </div>
            <div className="tt-belief-card">
              <i>✓</i>
              <p>Children learn best when they are actively involved in the construction of their own knowledge.</p>
            </div>
            <div className="tt-belief-card">
              <i>✓</i>
              <p>Every child can learn, and each child learns differently with their own innate pace and gifts.</p>
            </div>
            <div className="tt-belief-card">
              <i>✓</i>
              <p>Children develop knowledge, skills, and dispositions by progressively building on what they already know.</p>
            </div>
            <div className="tt-belief-card">
              <i>✓</i>
              <p>Children develop and learn best when they feel safe, respected, emotionally cherished, and valued.</p>
            </div>
          </div>
        </div>

        {/* --- Academic Modules: Learning Partner & Franchise Partner --- */}
        <div className="tt-partnership-grid">
          
          <div className="tt-partner-card learning">
            <span className="tt-partner-badge">Academic Module 01</span>
            <h3>Become a Learning Partner</h3>
            <p>
              Keep your existing school name and brand identity while revolutionizing your classroom curriculum 
              with our complete books, digital app integration, and year-round teacher training.
            </p>
            <ul className="tt-partner-checklist">
              <li><span className="check">✓</span> 10 & 11 Book Child Kits for Pre-KG, LKG & UKG</li>
              <li><span className="check">✓</span> Dedicated On-Site Teachers Training Workshops</li>
              <li><span className="check">✓</span> Free Teacher Resource Kits, Flashcards & Manuals</li>
              <li><span className="check">✓</span> QR-Code App Access for Interactive Rhymes & Stories</li>
            </ul>
            <a 
              href={`https://wa.me/919988046446?text=${encodeURIComponent("Hello HolyKids, I would like to apply as a Learning Partner for my school.")}`} 
              target="_blank" 
              rel="noreferrer" 
              className="tt-btn-primary" 
              style={{ padding: '10px 20px', fontSize: '14px' }}
            >
              Apply as Learning Partner <ArrowRight size={16} />
            </a>
          </div>

          <div className="tt-partner-card franchise">
            <span className="tt-partner-badge">Academic Module 02</span>
            <h3>Become a Franchise Partner</h3>
            <p>
              Launch a high-demand, prestigious Holy Kids preschool in your city with our end-to-end curriculum, 
              classroom design guidance, marketing support, and ongoing academic management.
            </p>
            <ul className="tt-partner-checklist">
              <li><span className="check">✓</span> Complete Brand Identity & Preschool Setup Roadmap</li>
              <li><span className="check">✓</span> Total Academic Curriculum & Day-by-Day Syllabus</li>
              <li><span className="check">✓</span> Teacher Recruitment & Continuous Staff Training</li>
              <li><span className="check">✓</span> Marketing, Admissions & Enrollment Strategy Kit</li>
            </ul>
            <a 
              href={`https://wa.me/919988046446?text=${encodeURIComponent("Hello HolyKids, I am interested in exploring the Preschool Franchise Partnership Model.")}`} 
              target="_blank" 
              rel="noreferrer" 
              className="tt-btn-primary" 
              style={{ background: 'var(--purple)', boxShadow: '0 5px 0 #572d85', padding: '10px 20px', fontSize: '14px' }}
            >
              Explore Franchise Model <ArrowRight size={16} />
            </a>
          </div>

        </div>

        {/* --- High-Converting Clean Mobile-Responsive CTA Card --- */}
        <div className="tt-cta-card">
          <div className="tt-cta-badge">Partner With Holy Kids & Collared Publications</div>
          <h3>Ready to Elevate Your School’s Early Education?</h3>
          <p>
            Equip your educators with continuous teachers training, complete day-by-day lesson manuals, 
            and 10-11 book activity kits. Connect with our academic coordinators today.
          </p>
          <div className="tt-cta-actions">
            <a 
              href={`https://wa.me/919988046446?text=${waMessage}`}
              target="_blank" 
              rel="noreferrer" 
              className="tt-btn-whatsapp"
            >
              <MessageSquare size={18} /> Chat on WhatsApp: 99880 46446
            </a>
            <a href="tel:9988046446" className="tt-btn-primary">
              <Phone size={18} /> Call Bangalore HO: 99880 46446
            </a>
            <button 
              type="button" 
              onClick={() => { setBrochurePage('all'); setShowBrochureModal(true); }} 
              className="tt-btn-ghost"
            >
              <Eye size={18} /> View Official Brochure (6 Pages • HD)
            </button>
          </div>
        </div>

      </div>

      {/* --- Lightbox Modal for Full Brochure Inspection --- */}
      {showBrochureModal && (
        <div className="tt-modal-backdrop" onClick={() => setShowBrochureModal(false)}>
          <div className="tt-modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="tt-modal-header">
              <h3 className="tt-modal-title">
                <BookOpen size={18} color="var(--orange)" />
                <span className="tt-modal-title-text">Holy Kids Curriculum Brochure (6 Pages)</span>
              </h3>
              <button 
                type="button" 
                className="tt-modal-close" 
                onClick={() => setShowBrochureModal(false)}
                aria-label="Close brochure modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Toolbar with Page Switcher */}
            <div className="tt-modal-toolbar">
              <div className="tt-modal-tabs">
                <button 
                  type="button" 
                  className={`tt-modal-tab-btn ${brochurePage === 'all' ? 'active' : ''}`}
                  onClick={() => setBrochurePage('all')}
                >
                  📑 All Pages (1–6)
                </button>
                {brochurePages.map(p => (
                  <button 
                    key={p.page}
                    type="button" 
                    className={`tt-modal-tab-btn ${brochurePage === p.page ? 'active' : ''}`}
                    onClick={() => setBrochurePage(p.page)}
                  >
                    Pg {p.page}
                  </button>
                ))}
              </div>

              <span className="tt-modal-toolbar-badge">
                🔍 6 Pages • HD
              </span>
            </div>

            <div className="tt-modal-body">
              {brochurePages
                .filter(p => brochurePage === 'all' || brochurePage === p.page)
                .map(p => (
                  <div key={p.page} className="tt-modal-page-wrap">
                    <div className="tt-page-watermark">{p.title}</div>
                    <img 
                      src={p.file} 
                      alt={p.title} 
                      loading="lazy"
                    />
                  </div>
                ))}
            </div>

            <div className="tt-modal-footer">
              <span className="tt-modal-footer-desc">
                Official Collared Publications Pre-School Curriculum Specification Brochure (6 Pages)
              </span>
              <div className="tt-modal-footer-actions">
                <a 
                  href="/Holy-Kids-Brochure.pdf" 
                  download="Holy-Kids-Brochure.pdf"
                  className="tt-btn-primary tt-download-pdf-btn" 
                >
                  <Download size={14} /> Download PDF
                </a>
                <a 
                  href="/Holy-Kids-Brochure.pdf" 
                  target="_blank" 
                  rel="noreferrer"
                  className="tt-btn-ghost tt-open-pdf-btn" 
                >
                  <ExternalLink size={14} /> Open PDF
                </a>
                <button 
                  type="button" 
                  className="tt-btn-ghost tt-close-modal-btn" 
                  onClick={() => setShowBrochureModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}