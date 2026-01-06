import React from 'react';
import { services } from '../data/content';
import '../components/Services.css'; // Reuse existing styles

const ServicesPage: React.FC = () => {
  return (
    <div className="page-container" style={{paddingTop: '80px', minHeight: '80vh'}}>
      <div className="container">
        <h1 className="page-title" style={{marginBottom: '40px', textAlign: 'center'}}>Car Services</h1>
        <p style={{textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px', fontSize: '1.2rem', color: '#555'}}>
            Regular servicing is essential to the longevity of your vehicle. 
            Our mobile mechanics come to you to perform comprehensive logbook servicing, 
            essential maintenance, and safety checks to keep you on the road.
        </p>
        
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
    </div>
  );
};

export default ServicesPage;