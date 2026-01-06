import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        {/* Brand Column */}
        <div className="footer-col brand-col">
          <h3>Georgi The Lube Master</h3>
          <p className="footer-desc">
             Affordable, Reliable & Convenient. Georgi The Lube Master employs qualified mechanics 
             that do the work at your location. Our easy-to-use online booking system makes 
             maintaining your car simple.
          </p>
          <div className="social-links">
            <a href="https://www.facebook.com/p/Georgi-the-lube-master-100075534891726/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Facebook size={24} />
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="footer-col contact-col">
          <h3>Contact Us</h3>
          <ul className="contact-list">
            <li>
              <strong>Phone:</strong> <a href="tel:0432058012">0432 058 012</a>
            </li>
            <li>
              <strong>Email:</strong> <a href="mailto:contact@georgilubemaster.com.au">contact@georgilubemaster.com.au</a>
            </li>
            <li>
              <strong>Service Area:</strong> Sydney Metropolitan & Surrounds
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container bottom-content">
            <p>&copy; 2026 Georgi The Lube Master. All rights reserved.</p>
            <div className="legal-links">
                <a href="#">Privacy Policy</a>
                <span>|</span>
                <a href="#">Terms of Service</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
