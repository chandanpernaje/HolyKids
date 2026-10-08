import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';


export default function Header() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="notice">🌈 A joyful start to learning!</div>
      <header>
        <div className="wrap top">
          <Link to="/" aria-label="HolyKids home" style={{display: 'flex'}}>
            <img className="logo" src="/holykids-logo.png" alt="HolyKids" />
          </Link>
          
          <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? '✕' : '☰'}
          </button>
          
          <div className={`links ${isMenuOpen ? 'open' : ''}`}>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/beginner" onClick={() => setIsMenuOpen(false)}>Beginner</Link>
            <Link to="/junior" onClick={() => setIsMenuOpen(false)}>Junior</Link>
            <Link to="/senior" onClick={() => setIsMenuOpen(false)}>Senior</Link>
            <Link to="/learn-and-play" onClick={() => setIsMenuOpen(false)}>Learn & Play</Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link>
          </div>

          <form className="search" onSubmit={(e) => { e.preventDefault(); if (searchTerm.trim()) { navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`); } }}>
            <input aria-label="Search" placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            <button type="submit" aria-label="Search">⌕</button>
          </form>
        </div>
      </header>
    </>
  );
}
