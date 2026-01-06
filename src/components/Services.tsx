import React from 'react';
import { services } from '../data/content';
import './Services.css';

const Services: React.FC = () => {
  return (
    <section className="services-section" id="services">
        <div className="container">
          <h2 className="section-title">Mobile Service and Repairs</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} id={service.id} className={`service-card ${service.highlight ? 'highlight' : ''}`}>
                <div className="card-image-wrapper">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="card-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <button className="book-btn">{service.buttonText}</button>
                </div>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
};

export default Services;
