import React from 'react';
import { Wrench, ClipboardCheck, FileCheck, TriangleAlert, Laptop, Octagon, Search, Clock, MapPin } from 'lucide-react';
import Hero from '../components/Hero';
import Reviews from '../components/Reviews';
import { reasons } from '../data/content';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <Hero />
      
      {/* How It Works Section */}
      <section className="how-it-works-section">
        <div className="container">
          <h2 className="section-title-large">Not sure how to book a mobile mechanic?</h2>
          <div className="steps-grid">
             
             <div className="step-card">
                <div className="step-icon"><Search size={48} className="text-primary" /></div>
                <h3 className="step-title">Search availability</h3>
                <p className="step-desc">Type in your postcode and discover a mobile mechanic near you!</p>
             </div>

             <div className="step-card">
                <div className="step-icon"><Clock size={48} className="text-primary" /></div>
                <h3 className="step-title">Select your time</h3>
                <p className="step-desc">Our large network means same or next business day appointments.</p>
             </div>

             <div className="step-card">
                <div className="step-icon"><Wrench size={48} className="text-primary" /></div>
                <h3 className="step-title">Tell us what’s wrong</h3>
                <p className="step-desc">All our vans are equipped to deal with a wide range of mechanical issues.</p>
             </div>

          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="why-choose-section">
         <div className="container">
            <h2 className="section-title-large">Why choose Georgi The Lube Master?</h2>
            
            <div className="reasons-container">
               {reasons.map((reason, index) => (
                 <div key={index} className="reason-card">
                   <div className="reason-icon-circle">
                      {reason.icon}
                   </div>
                   <h3 className="reason-title">{reason.title}</h3>
                   <p className="reason-desc">{reason.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Our Services Quick List */}
      <section className="services-list-section">
        <div className="container" style={{textAlign: 'center'}}>
           <h2 className="section-title-large">Our Services</h2>
           <div className="services-stat-grid">
              {[
                { name: "All Mechanical Repairs", icon: <Wrench size={32} /> },
                { name: "Pre-purchase Inspections", icon: <ClipboardCheck size={32} /> },
                { name: "Pinkslips", icon: <FileCheck size={32} /> },
                { name: "Brake Services", icon: <Octagon size={32} /> },
                { name: "All types of breakdowns", icon: <TriangleAlert size={32} /> },
                { name: "Diagnostics", icon: <Laptop size={32} /> }
              ].map((service, index) => (
                <div key={index} className="service-stat-card">
                  <div className="stat-icon">{service.icon}</div>
                  <h3>{service.name}</h3>
                </div>
              ))}
           </div>
        </div>
      </section>

      <Reviews />
    </div>
  );
};

export default Home;
