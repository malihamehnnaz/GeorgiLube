import React from 'react';
import { Check } from 'lucide-react';
import { repairTypes } from '../data/content';
import '../components/RepairsList.css';

const RepairsPage: React.FC = () => {
  return (
    <div className="page-container" style={{paddingTop: '80px', minHeight: '80vh'}}>
      <div className="container">
        <h1 className="page-title" style={{marginBottom: '20px', textAlign: 'center'}}>Car Repairs</h1>
         <section className="repairs-list-section" style={{paddingTop: '20px'}}>
             <p className="repair-subtitle">
                From engine troubles to electrical faults, our qualified technicians diagnose and fix 
                a wide range of issues on-site. We stand by our work with a warranty you can trust.
             </p>
             <div className="repairs-grid">
               {repairTypes.map((repair, index) => (
                 <div key={index} className="repair-item">
                   <span className="repair-check"><Check size={18} /></span>
                   <span className="repair-name">{repair}</span>
                 </div>
               ))}
             </div>
             <div className="repairs-cta">
               <p>Don't see your problem listed? We probably fix it too!</p>
               <button className="book-btn">Get a Quote</button>
             </div>
         </section>
      </div>
    </div>
  );
};

export default RepairsPage;