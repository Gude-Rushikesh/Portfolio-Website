import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [menuOpen, setMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => setMenuOpen(false), [location.pathname]);

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    if (!isHome) return;
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        R<span>.</span>
      </Link>

      {isHome ? (
        <>
          <button
            className="nav-burger"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          <div className={`nav-links${menuOpen ? ' open' : ''}`}>
            <a href="#work"    onClick={scrollTo('work')}>Work</a>
            <a href="#skills"  onClick={scrollTo('skills')}>Skills</a>
            <a href="#about"   onClick={scrollTo('about')}>About</a>
            <a href="#contact" onClick={scrollTo('contact')}>Contact</a>
          </div>
        </>
      ) : (
        <Link to="/" className="back-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          Back to Home
        </Link>
      )}
    </nav>
  );
}
