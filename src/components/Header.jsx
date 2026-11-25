import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/play-group', label: 'Play Group' },
    { to: '/beginner', label: 'Beginner' },
    { to: '/junior', label: 'Junior' },
    { to: '/senior', label: 'Senior' },
    { to: '/learn-and-play', label: 'Learn & Play' },
    { to: '/about', label: 'About Us' },
    { to: '/contact', label: 'Contact Us' }
  ];

  return (
    <>
      <div className="notice">🌈 Aavishkara Global Education</div>
      <header>
        <div className="wrap header-brand-row">
          <Link to="/" aria-label="Aavishkara Global Education home" className="brand-lockup">
            <img className="logo aavishkara-logo" src="/aavishkara-logo.png" alt="Aavishkara Global Education" />
            <span className="brand-tagline">A joyful start to learning</span>
          </Link>

          <div className="header-right-group">
            <form className="search" onSubmit={handleSearchSubmit}>
              <input
                aria-label="Search"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button type="submit" aria-label="Search">⌕</button>
            </form>

            <Link to="/" aria-label="HolyKids home" className="brand-lockup brand-lockup-right">
              <img className="logo holykids-logo" src="/holykids-logo.png" alt="HolyKids" />
              <span className="brand-tagline">Gift your children - secure future with quality education.</span>
            </Link>

            <button
              type="button"
              className="mobile-menu-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        <div className="header-nav-strip">
          <div className="wrap">
            <nav className={`links ${isMenuOpen ? 'open' : ''}`} aria-label="Primary Navigation">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={location.pathname === item.to ? 'active-link' : ''}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a href="tel:9988046446" className="nav-phone" onClick={() => setIsMenuOpen(false)}>
                📞 9988046446
              </a>

              <form className="search mobile-search" onSubmit={handleSearchSubmit}>
                <input
                  aria-label="Search books"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit" aria-label="Search">⌕</button>
              </form>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
