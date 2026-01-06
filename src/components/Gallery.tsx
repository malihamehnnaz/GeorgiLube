import React from 'react';
import { galleryImages } from '../data/content';
import './Gallery.css';

const Gallery: React.FC = () => {
  return (
    <section className="gallery-section">
      <div className="container">
        <h2 className="section-title">Our Work in Action</h2>
        <div className="gallery-grid">
          {galleryImages.map((img, index) => (
            <div key={index} className="gallery-item">
              <img src={img} alt={`Work sample ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;