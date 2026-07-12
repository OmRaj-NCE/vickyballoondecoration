// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SocialButtons from './components/SocialButtons';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Services from './pages/Services';
import HoneymoonDecoration from './pages/HoneymoonDecoration';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound'; // <-- import
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/honeymoon-decoration" element={<HoneymoonDecoration />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />  {/* <-- catch-all */}
      </Routes>
      <Footer />
      <SocialButtons />
      <ScrollToTop />
    </Router>
  );
}

export default App;