import React from 'react';
import { Disc, Phone } from 'lucide-react';
import { tyreBrands } from '../data/content';
import '../components/Services.css'; // Reusing styles

const TyresPage: React.FC = () => {
  return (
    <div className="page-container" style={{paddingTop: '80px', paddingBottom: '80px', minHeight: '80vh', background: '#f9f9f9'}}>
       
       {/* Hero/Intro Section */}
       <div className="container" style={{marginBottom: '80px'}}>
         <div style={{display: 'flex', gap: '50px', flexWrap: 'wrap', alignItems: 'center'}}>
            <div style={{flex: 1, minWidth: '300px'}}>
                <h1 style={{fontSize: '3rem', marginBottom: '20px', lineHeight: '1.2'}}>Mobile Tyre Service</h1>
                <p style={{fontSize: '1.2rem', marginBottom: '30px', color: '#555'}}>
                    New tyres fitted at your home or workplace. Avoid the waiting room and save time with Georgi The Lube Master.
                </p>
                <button className="book-btn" style={{padding: '15px 30px', fontSize: '1.1rem'}}>Book Tyre Service</button>
            </div>
            <div style={{flex: 1, minWidth: '300px'}}>
                 <img 
                    src="https://www.otc-trainingcentre.co.za/wp-content/uploads/2017/12/Untitled-design-1-960x512.jpg" 
                    alt="Mobile Tyre Fitting" 
                    style={{width: '100%', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)'}}
                />
            </div>
         </div>
       </div>

       {/* Popular Brands Section */}
       <div style={{background: '#f4f6f8', padding: '80px 0'}}>
         <div className="container">
            <div style={{textAlign: 'center', marginBottom: '60px', maxWidth: '800px', margin: '0 auto 60px'}}>
                <h2 style={{fontSize: '2.5rem', marginBottom: '20px', color: 'var(--secondary-color)', fontWeight: '800'}}>Popular tyre brands</h2>
                <p style={{color: 'var(--text-light)', fontSize: '1.2rem', lineHeight: '1.6'}}>Georgi Lube Master stocks a wide range of tyres from premium brands including Bridgestone, Firestone and Dayton.</p>
            </div>
            
            <div className="services-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px'}}>
                {tyreBrands.map((brand, index) => (
                    <div key={index} className="tyre-brand-card">
                        <div style={{zIndex: 2}}>
                            <h3>{brand.name}</h3>
                            <p>{brand.desc}</p>
                            <button className="tyre-btn">Book now</button>
                        </div>
                        <div className="brand-icon-wrapper">
                            <span className="brand-icon"><Disc size={64} color="var(--primary-color)" /></span>
                        </div>
                    </div>
                ))}
                
                {/* "Unsure" Card */}
                <div className="tyre-brand-card highlight-card">
                    <div style={{zIndex: 2}}>
                        <h3>Unsure about tyres?</h3>
                        <p>Call us on <strong>0432 058 012</strong> for a no obligation chat.</p>
                        <a href="tel:0432058012" className="tyre-btn call-btn">Call now</a>
                    </div>
                     <div className="brand-icon-wrapper">
                            <span className="brand-icon"><Phone size={64} color="var(--primary-color)" /></span>
                     </div>
                </div>
            </div>
         </div>
       </div>

    </div>
  );
};

export default TyresPage;