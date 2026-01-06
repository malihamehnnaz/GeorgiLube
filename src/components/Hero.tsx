import React from 'react';
import { Wrench, Gauge, Battery, Key } from 'lucide-react';
import './Hero.css';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-bg-pattern"></div>

      <div className="container hero-content">
        
        {/* Left Column: Text & CTA */}
        <div className="hero-text-column">
          <div className="badge-tag">Mobile Mechanic Service</div>
          <h1 className="hero-headline">
            Georgi The <span className="highlight-text">Lube Master</span>
          </h1>
          <p className="hero-subtext">
            Expert mobile car repairs and maintenance at your doorstep. 
            We come to you—saving you time, money, and hassle.
          </p>
          
          <div className="hero-cta-group">
            <button className="btn-hero-primary" onClick={() => navigate('/contact')}>
              Book Now
            </button>
            <button className="btn-hero-secondary" onClick={() => navigate('/services')}>
              View Services
            </button>
          </div>

          <div className="hero-services-grid">
              <div className="service-card-mini" onClick={() => navigate('/repairs')}>
                  <Wrench className="icon-mini" />
                  <span>Repairs</span>
              </div>
              <div className="service-card-mini" onClick={() => navigate('/services')}>
                  <Gauge className="icon-mini" />
                  <span>Diagnostics</span>
              </div>
              <div className="service-card-mini" onClick={() => navigate('/battery')}>
                  <Battery className="icon-mini" />
                  <span>Batteries</span>
              </div>
          </div>
        </div>

        {/* Right Column: Hero Image */}
        <div className="hero-image-column">
             <div className="hero-image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1625047509168-a7026f36de04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Mobile Mechanic Georgi Lube" 
                  className="hero-main-image" 
                />
                <div className="hero-floating-badge">
                    <span className="badge-year">15+</span>
                    <span className="badge-label">Years Exp.</span>
                </div>
             </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
