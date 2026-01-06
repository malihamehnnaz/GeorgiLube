import React from 'react';
import { Check, Zap } from 'lucide-react';
import './BatteriesPage.css';

const BatteriesPage: React.FC = () => {
  return (
    <div className="batteries-page-wrapper">
      <section className="batteries-hero-section">
       <div className="container">
         <div className="battery-content-container">
            <div className="battery-text-content">
                <div className="badge-tag" style={{display:'inline-block', marginBottom:'20px'}}>Mobile Service</div>
                <h1 className="battery-title">Mobile Car Battery Replacement</h1>
                <p className="battery-desc">
                    Stuck with a flat battery? Don't worry, we come to you! 
                    Georgi The Lube Master stocks a range of high-performance batteries 
                    to suit most makes and models.
                </p>
                <ul className="battery-features-list">
                    <li className="battery-feature-item">
                        <div className="feature-icon"><Check size={24} /></div>
                        <div className="feature-text">
                            <strong>Fast Arrival</strong>
                            <span>We get you moving again quickly.</span>
                        </div>
                    </li>
                    <li className="battery-feature-item">
                        <div className="feature-icon"><Zap size={24} /></div>
                        <div className="feature-text">
                            <strong>Quality Brands</strong>
                            <span>Long-lasting power you can rely on.</span>
                        </div>
                    </li>
                    <li className="battery-feature-item">
                        <div className="feature-icon"><Check size={24} /></div>
                        <div className="feature-text">
                             <strong>Professional Installation</strong>
                             <span>Incorrect installation can damage electronics. Trust experts.</span>
                        </div>
                    </li>
                    <li className="battery-feature-item">
                        <div className="feature-icon"><Check size={24} /></div>
                        <div className="feature-text">
                             <strong>Testing & Disposal</strong>
                             <span>We test your charging system & recycle old batteries.</span>
                        </div>
                    </li>
                </ul>
                <button className="btn-battery-primary">Get a Battery Quote</button>
            </div>
            
            <div className="battery-image-container">
                <img 
                    src="https://static.where-e.com/United_Kingdom/Foundry-Motors_64b63ac4860eec87786cec16fb9426b4.jpg" 
                    alt="Car Battery Service" 
                    className="battery-hero-img"
                />
            </div>
         </div>
       </div>
      </section>
    </div>
  );
};

export default BatteriesPage;