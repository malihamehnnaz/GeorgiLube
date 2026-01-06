import React from 'react';
import { repairTypes } from '../data/content';
import './RepairsList.css';

const RepairsList: React.FC = () => {
  return (
    <section className="repairs-list-section" id="repairs">
      <div className="container">
        <h2 className="section-title">Common Car Repairs</h2>
        <p className="repair-subtitle">We can fix mechanical, electrical, engine and exhaust problems on a wide range of popular makes and models.</p>
        <div className="repairs-grid">
          {repairTypes.map((repair, index) => (
            <div key={index} className="repair-item">
              <span className="repair-check">✓</span>
              <span className="repair-name">{repair}</span>
            </div>
          ))}
        </div>
        <div className="repairs-cta">
          <p>Don't see your problem listed? We probably fix it too!</p>
          <button className="book-btn">Get a Quote</button>
        </div>
      </div>
    </section>
  );
};

export default RepairsList;