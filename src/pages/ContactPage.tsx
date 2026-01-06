import React from 'react';
import { Phone, Mail, MapPin, TriangleAlert } from 'lucide-react';
import './Contact.css';

const ContactPage: React.FC = () => {
  return (
    <div className="contact-page">
      <div className="container">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>Ready to get back on the road? Our mobile mechanics are just a call away. We come to your home, office, or breakdown location.</p>
        </div>
        
        <div className="contact-grid">
          {/* Contact Details */}
          <div className="contact-card">
            <h2 className="card-title">Get in Touch</h2>
            
            <div className="contact-item">
              <div className="contact-icon-box"><Phone size={24} color="var(--primary-color)" /></div>
              <div className="contact-details">
                <h3>Phone</h3>
                <a href="tel:0432058012" className="contact-link">0432 058 012</a>
                <p className="contact-sub">Available Mon-Sat</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon-box"><Mail size={24} color="var(--primary-color)" /></div>
              <div className="contact-details">
                <h3>Email</h3>
                <a href="mailto:contact@georgilubemaster.com.au" className="contact-link">contact@georgilubemaster.com.au</a>
                <p className="contact-sub">We reply within 24 hours</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon-box"><MapPin size={24} color="var(--primary-color)" /></div>
              <div className="contact-details">
                <h3>Service Area</h3>
                <p style={{fontWeight: '500', color: 'var(--text-color)'}}>Sydney Metropolitan Area & Surrounding Suburbs</p>
                <p className="contact-sub">We come to you!</p>
              </div>
            </div>

            <button className="book-btn" style={{marginTop: '10px'}}>Book Online Now</button>
          </div>

          {/* Business Hours Card */}
          <div className="hours-card">
            <h2 className="card-title">Business Hours</h2>
            
            <div className="hours-list">
              <div className="hours-row">
                <span className="day-label">Monday - Friday</span>
                <span className="time-val">7:00 AM - 6:00 PM</span>
              </div>
              <div className="hours-row">
                <span className="day-label">Saturday</span>
                <span className="time-val">8:00 AM - 4:00 PM</span>
              </div>
              <div className="hours-row">
                <span className="day-label">Sunday</span>
                <span className="closed-val">Closed</span>
              </div>
            </div>

            <div className="emergency-box">
               <div className="emergency-title"><TriangleAlert size={20} style={{marginRight: '8px'}} /> Emergency Breakdown?</div>
               <p style={{margin: '5px 0 0 0', opacity: 0.9, fontSize: '0.9rem'}}>Call us immediately for urgent assistance.</p>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424146.1029887711!2d150.65178652684725!3d-33.84740399676646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129838f39a743f%3A0x3017d681632a850!2sSydney%20NSW!5e0!3m2!1sen!2sau!4v1709695000000!5m2!1sen!2sau" 
            width="100%" 
            height="100%" 
            style={{border: 0}} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Service Area Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;