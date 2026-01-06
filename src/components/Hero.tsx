import React from 'react';
import { Check } from 'lucide-react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <div className="hero-text">
          <h2>Qualified mechanics that come to your location!</h2>
          <h1>Affordable, Reliable & Convenient</h1>
          <ul className="hero-features">
            <li><Check size={20} className="check-icon" /> Convenient Onsite Service</li>
            <li><Check size={20} className="check-icon" /> Same or Next Day Appointments</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
