// src/pages/Home.jsx
// ============================================
// HOME PAGE
// Assembles all homepage sections
// ============================================

import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';
import './Home.css';

const Home = () => {
  return (
    <>
      <SEO
        title="Vicky Balloon Decoration | Patna's Top Balloon Decorator & Birthday Planner"
        description="Transform your celebrations with Patna's most trusted balloon decorator. From birthdays to honeymoon setups – creative, affordable, and stunning."
      />
      <main className="home-page">
        {/* Hero Section */}
        <Hero />
        
        {/* About Us Section */}
        <AboutUs />
        
        {/* Services Preview Banner */}
        <section className="home-services-preview section-padding">
          <div className="container">
            <div className="section-title">
              <h2>Our Services</h2>
              <p className="section-subtitle">
                Every celebration deserves a beautiful setting
              </p>
            </div>
            <div className="home-services-preview-text">
              <p>
                From intimate home celebrations to grand hotel events, we offer 
                a complete range of decoration services. Explore our full portfolio 
                to find the perfect setup for your special occasion.
              </p>
              <a href="/services" className="btn btn-primary home-services-btn">
                View All Services →
              </a>
            </div>
          </div>
        </section>
        
        {/* Why Choose Us Section */}
        <WhyChooseUs />
        
        {/* Testimonials / Stats Section */}
        <Testimonials />
        
        {/* CTA Section */}
        <CTASection />
      </main>
    </>
  );
};

export default Home;