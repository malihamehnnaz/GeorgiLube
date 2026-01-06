import React from 'react';
import { Wrench, CheckCircle2 } from 'lucide-react';
import { repairTypes } from '../data/content';
import '../components/RepairsList.css';

const RepairsPage: React.FC = () => {
  return (
    <div className="repairs-page-wrapper">
      <div className="repairs-header-bg">
        <div className="container repairs-header-content">
           <div className="repairs-icon-large">
              <Wrench size={48} />
           </div>
           <h1 className="page-title-modern">Professional Repairs</h1>
           <p className="repair-subtitle-modern">
              Expert diagnostics and repairs delivered to your location. 
              We handle everything from minor fixes to major mechanical components.
           </p>
        </div>
      </div>

      <div className="container repairs-content-container">
         <section className="repairs-grid-section">
             <div className="repairs-grid">
               {repairTypes.map((repair, index) => (
                 <div key={index} className="repair-card">
                   <div className="repair-card-icon">
                      <CheckCircle2 size={20} />
                   </div>
                   <span className="repair-name">{repair}</span>
                 </div>
               ))}
             </div>
             
             <div className="repairs-cta-box">
               <div className="cta-text">
                  <h3>Don't see your issue listed?</h3>
                  <p>We likely fix it too. Contact us for a custom quote.</p>
               </div>
               <button className="book-btn-modern">Get a Free Quote</button>
             </div>
         </section>
      </div>
    </div>
  );
};

export default RepairsPage;