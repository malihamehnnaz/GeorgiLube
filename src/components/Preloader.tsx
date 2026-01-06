import React, { useEffect, useState } from 'react';
import './Preloader.css';
import { Wrench } from 'lucide-react';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [exiting, setExiting] = useState(false);
  
  useEffect(() => {
    // Show brand for 2s, then trigger exit
    const timer = setTimeout(() => {
      setExiting(true);
      // Wait for slide animation (3.5s) to finish
      setTimeout(onComplete, 3500); 
    }, 2000); 

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="preloader-wrapper">
      {/* The main background/content that gets wiped away */}
      <div className={`preloader-overlay ${exiting ? 'exit-anim' : ''}`}>
        <div className={`preloader-content ${exiting ? 'fade-content' : ''}`}>
          <div className="logo-icon-animate">
             <Wrench size={60} strokeWidth={1.5} />
          </div>
          <div className="brand-text">
            <span className="brand-main">GEORGI</span>
            <span className="brand-highlight">LUBE</span>
          </div>
          <div className="loading-line-container">
              <div className="loading-line"></div>
          </div>
        </div>
      </div>

      {/* The Tool that wipes across during exit */}
      {exiting && (
         <div className="moving-tool-container">
           <Wrench size={140} className="moving-tool-icon" strokeWidth={1.5} color="#cbd5e1" fill="#1e293b" />
        </div>
      )}
    </div>
  );
};



export default Preloader;
