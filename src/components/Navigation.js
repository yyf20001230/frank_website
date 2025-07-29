import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navigation.css';

function Navigation({ dark }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navClass = dark ? 'navigation navigation-dark' : 'navigation';
  const isMain = location.pathname === '/';

  // Helper for cross-page scroll
  const handleNav = (sectionId) => {
    setIsMenuOpen(false);
    if (isMain) {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={navClass}>
      <div className="nav-container">
        <button className="hamburger-menu" onClick={toggleMenu}>
          <div className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></div>
        </button>
        <ul className={`nav-links ${isMenuOpen ? 'mobile-open' : ''}`}>
          <li>
            {isMain ? (
              <button onClick={() => {
                setIsMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}>Home</button>
            ) : (
              <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            )}
          </li>
          <li>
            <button onClick={() => handleNav('work')}>
              <span className="nav-text-large">Work Experience</span>
              <span className="nav-text-small">Work</span>
            </button>
          </li>
          <li>
            <button onClick={() => handleNav('projects')}>Projects</button>
          </li>
          <li>
            <button onClick={() => handleNav('research')}>Research</button>
          </li>
          <li>
            <Link to="/more" className={location.pathname === '/more' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>More</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation; 