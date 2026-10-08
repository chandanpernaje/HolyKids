import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer id="about">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <img className="footer-logo" src="/holykids-logo.png" alt="HolyKids" />
            <p>Making early learning easier, brighter and full of fun for every little mind.</p>
          </div>
          <div>
            <h4>Explore</h4>
            <Link to="/beginner">Beginner Series</Link>
            <Link to="/junior">Junior Series</Link>
            <Link to="/senior">Senior Series</Link>
          </div>
          <div>
            <h4>Discover</h4>
            <a href="https://play.google.com/store/apps/details?id=school.theholykids.qr" target="_blank" rel="noreferrer" style={{color: 'var(--yellow)', fontWeight: '800'}}>📱 Download App</a>
            <Link to="/learn-and-play">Learn & Play</Link>
            <Link to="/learn-and-play#activities">Fun Activities</Link>
            <Link to="/about">About Us</Link>
          </div>
          <div>
            <h4>Need a hand?</h4>
            <a href="mailto:hello@holykids.in">hello@holykids.in</a>
            <Link to="/contact">Contact us</Link>
            <Link to="/#shipping">Shipping & Returns</Link>
          </div>
        </div>
        <div className="copyright">© 2026 HolyKids Publication. Made for bright beginnings. 🌈</div>
      </div>
    </footer>
  );
}
