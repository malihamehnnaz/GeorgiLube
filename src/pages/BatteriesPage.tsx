import React from 'react';
import { Check } from 'lucide-react';
import '../components/Services.css'; // Reusing styles

const BatteriesPage: React.FC = () => {
  return (
    <div className="page-container" style={{paddingTop: '100px', minHeight: '80vh'}}>
       <div className="container">
         <div style={{display: 'flex', gap: '40px', flexWrap: 'wrap', alignItems: 'center'}}>
            <div style={{flex: 1, minWidth: '300px'}}>
                <h1 style={{fontSize: '2.5rem', marginBottom: '20px'}}>Mobile Car Battery Replacement</h1>
                <p style={{fontSize: '1.2rem', marginBottom: '20px', color: '#555'}}>
                    Stuck with a flat battery? Don't worry, we come to you! 
                    Georgi The Lube Master stocks a range of high-performance batteries 
                    to suit most makes and models.
                </p>
                <ul style={{listStyle: 'none', fontSize: '1.1rem', marginBottom: '30px'}}>
                    <li style={{marginBottom: '10px', display: 'flex', alignItems: 'center'}}><Check size={20} color="var(--primary-color)" style={{marginRight: '10px'}} /> <span><strong>Fast Arrival:</strong> We get you moving again quickly.</span></li>
                    <li style={{marginBottom: '10px', display: 'flex', alignItems: 'center'}}><Check size={20} color="var(--primary-color)" style={{marginRight: '10px'}} /> <span><strong>Quality Brands:</strong> Long-lasting power you can rely on.</span></li>
                    <li style={{marginBottom: '10px', display: 'flex', alignItems: 'center'}}><Check size={20} color="var(--primary-color)" style={{marginRight: '10px'}} /> <span><strong>Professional Installation:</strong> Incorrect installation can damage your car's electronics. Trust the experts.</span></li>
                    <li style={{marginBottom: '10px', display: 'flex', alignItems: 'center'}}><Check size={20} color="var(--primary-color)" style={{marginRight: '10px'}} /> <span><strong>Testing & Disposal:</strong> We test your charging system and dispose of your old battery environmentally.</span></li>
                </ul>
                <button className="btn-primary" style={{marginBottom: '20px'}}>Get a Battery Quote</button>
            </div>
            <div style={{flex: 1, minWidth: '300px'}}>
                <img 
                    src="https://static.where-e.com/United_Kingdom/Foundry-Motors_64b63ac4860eec87786cec16fb9426b4.jpg" 
                    alt="Car Battery Service" 
                    style={{width: '100%', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)'}}
                />
            </div>
         </div>
       </div>
    </div>
  );
};

export default BatteriesPage;