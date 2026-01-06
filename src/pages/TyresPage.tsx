import React from 'react';
import { Disc, Phone, ArrowRight } from 'lucide-react';
import { tyreBrands } from '../data/content';
import './TyresPage.css';

const TyresPage: React.FC = () => {
  return (
    <div className="tyres-page-wrapper">
       
       {/* Hero/Intro Section */}
       <section className="tyres-hero-section">
         <div className="container">
           <div style={{display: 'flex', gap: '60px', flexWrap: 'wrap', alignItems: 'center'}}>
              <div style={{flex: 1, minWidth: '300px'}}>
                  <div className="badge-tag" style={{display:'inline-block', marginBottom:'20px'}}>We Come To You</div>
                  <h1 className="tyres-title">Mobile Tyre Service</h1>
                  <p className="tyres-subtitle">
                      New tyres fitted at your home or workplace. Avoid the waiting room and save time with Georgi The Lube Master.
                      We handle balancing and disposal too.
                  </p>
                  <button className="book-btn-modern">Book Tyre Service</button>
              </div>
              <div style={{flex: 1, minWidth: '300px'}}>
                   <div className="tyre-img-wrapper">
                     <img 
                        src="https://www.otc-trainingcentre.co.za/wp-content/uploads/2017/12/Untitled-design-1-960x512.jpg" 
                        alt="Mobile Tyre Fitting" 
                        className="tyre-hero-img"
                    />
                   </div>
              </div>
           </div>
         </div>
       </section>

       {/* Popular Brands Section */}
       <div className="tyre-brands-section">
         <div className="container">
            <div className="section-header-center">
                <h2 className="section-title-light">Popular Tyre Brands</h2>
                <p className="section-desc-light">
                    Georgi Lube Master stocks a wide range of tyres from premium brands including Bridgestone, Firestone and Dayton.
                </p>
            </div>
            
            <div className="tyres-grid">
                {tyreBrands.map((brand, index) => (
                    <div key={index} className="tyre-brand-card">
                        <div className="tyre-card-content">
                            <h3 className="tyre-brand-title">{brand.name}</h3>
                            <p className="tyre-brand-desc">{brand.desc}</p>
                            <button className="btn-tyre-action">Book Now</button>
                        </div>
                        <div className="tyre-icon-bg">
                            <Disc size={120} />
                        </div>
                    </div>
                ))}
                
                {/* "Unsure" Card */}
                <div className="tyre-brand-card highlight-card">
                    <div className="tyre-card-content">
                        <h3 className="tyre-brand-title">Unsure about tyres?</h3>
                        <p className="tyre-brand-desc">Call us on <strong>0432 058 012</strong> for a no obligation chat.</p>
                        <a href="tel:0432058012" className="btn-tyre-action" style={{display:'inline-flex', alignItems:'center', gap:'8px'}}>
                            Call Now <ArrowRight size={16} />
                        </a>
                    </div>
                     <div className="tyre-icon-bg" style={{opacity: 0.2}}>
                            <Phone size={120} />
                     </div>
                </div>
            </div>
         </div>
       </div>

    </div>
  );
};

export default TyresPage;