import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo-real.jpeg';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className={`top-bar ${isScrolled ? 'hidden' : ''}`}>
        <div className="container top-bar-content">
           <div className="scrolling-text-container">
             <span className="scrolling-text">Qualified mechanics that come to your location! • Affordable, Reliable & Convenient • Book Online 24/7</span>
             <span className="scrolling-text">Qualified mechanics that come to your location! • Affordable, Reliable & Convenient • Book Online 24/7</span>
           </div>
           <div className="top-contact">
             <a href="tel:0432058012">📞 0432 058 012</a>
             <Link to="/contact">Contact Us</Link>
           </div>
        </div>
      </div>
      <div className="container header-main">
        <Link to="/" className="logo-link">
          <div className="logo">
            <img src={logo} alt="Georgi The Lube Master" style={{height: isScrolled ? '50px' : '80px', width: 'auto', transition: 'height 0.3s ease'}} />
          </div>
        </Link>
        <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </button>
        <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><NavLink to="/services" className={({ isActive }) => isActive ? "active" : ""}>Car Services</NavLink></li>
            <li><NavLink to="/repairs" className={({ isActive }) => isActive ? "active" : ""}>Repairs</NavLink></li>
            <li><NavLink to="/battery" className={({ isActive }) => isActive ? "active" : ""}>Batteries</NavLink></li>
            <li><NavLink to="/tyres" className={({ isActive }) => isActive ? "active" : ""}>Tyres</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink></li>
          </ul>
        </nav>
        <div className="header-cta">
          <button className="btn-primary">Book Online</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
