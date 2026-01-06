import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo-real.jpeg';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="top-bar">
        <div className="container top-bar-content">
           <span>Qualified mechanics that come to your location!</span>
           <div className="top-contact">
             <a href="tel:0432058012">📞 0432 058 012</a>
             <Link to="/contact">Contact Us</Link>
           </div>
        </div>
      </div>
      <div className="container header-main">
        <Link to="/" className="logo-link">
          <div className="logo">
            <img src={logo} alt="Georgi The Lube Master" style={{height: '80px', width: 'auto'}} />
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
