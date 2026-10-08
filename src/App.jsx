import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import SeriesPage from './pages/SeriesPage';
import BookDetails from './pages/BookDetails';
import About from './pages/About';
import LearnAndPlay from './pages/LearnAndPlay';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Search from './pages/Search';

function ScrollToHashElement() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToHashElement />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/learn-and-play" element={<LearnAndPlay />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/search" element={<Search />} />
        <Route path="/beginner" element={<SeriesPage seriesId="beginner" />} />
        <Route path="/junior" element={<SeriesPage seriesId="junior" />} />
        <Route path="/senior" element={<SeriesPage seriesId="senior" />} />
        <Route path="/book/:bookId" element={<BookDetails />} />
      </Routes>
      <Footer />
      <a href="https://play.google.com/store/apps/details?id=school.theholykids.qr" target="_blank" rel="noreferrer" style={{position: 'fixed', bottom: '20px', right: '20px', zIndex: 100, background: 'var(--yellow)', color: 'var(--ink)', padding: '12px 20px', borderRadius: '30px', fontWeight: '800', boxShadow: '0 5px 20px rgba(0,0,0,0.15)', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none'}}>📱 Download App</a>
    </BrowserRouter>
  );
}

export default App;
