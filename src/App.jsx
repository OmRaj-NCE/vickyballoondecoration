// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SocialButtons from './components/SocialButtons';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const HoneymoonDecoration = lazy(() => import('./pages/HoneymoonDecoration'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<div className="loader">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/honeymoon-decoration" element={<HoneymoonDecoration />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
      <SocialButtons />
      <ScrollToTop />
    </Router>
  );
}

export default App;