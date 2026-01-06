import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import RepairsPage from './pages/RepairsPage';
import BatteriesPage from './pages/BatteriesPage';
import TyresPage from './pages/TyresPage';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/ScrollToTop';
import Preloader from './components/Preloader';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <Router>
      <ScrollToTop />
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <div className={`app ${loading ? 'blurred' : ''}`}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/repairs" element={<RepairsPage />} />
          <Route path="/battery" element={<BatteriesPage />} />
          <Route path="/tyres" element={<TyresPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
