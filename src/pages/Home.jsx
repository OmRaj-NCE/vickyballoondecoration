// src/pages/Home.jsx
// ============================================
// HOME PAGE
// Assembles all homepage sections with lazy loading
// for components below the fold to boost performance
// ============================================

import React, { lazy, Suspense } from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero'; // Hero is critical – keep eager
import './Home.css';

// Lazy-load components that are not visible initially
const AboutUs = lazy(() => import('../components/AboutUs'));
const WhyChooseUs = lazy(() => import('../components/WhyChooseUs'));
const Testimonials = lazy(() => import('../components/Testimonials'));
const CTASection = lazy(() => import('../components/CTASection'));

const Home = () => {
  return (
    <>
      <SEO
        title="Vicky Balloon Decoration | Patna's Top Balloon Decorator & Birthday Planner"
        description="Transform your celebrations with Patna's most trusted balloon decorator. From birthdays to honeymoon setups – creative, affordable, and stunning."
      />
      <main className="home-page">
        {/* Hero – always eager for LCP */}
        <Hero />

        {/* About Us – lazy */}
        <Suspense fallback={<div className="loader">Loading...</div>}>
          <AboutUs />
        </Suspense>

        {/* Services Preview – static HTML, no heavy JS – keep eager */}
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

        {/* Why Choose Us – lazy */}
        <Suspense fallback={<div className="loader">Loading...</div>}>
          <WhyChooseUs />
        </Suspense>

        {/* Testimonials – lazy */}
        <Suspense fallback={<div className="loader">Loading...</div>}>
          <Testimonials />
        </Suspense>

        {/* CTA Section – lazy */}
        <Suspense fallback={<div className="loader">Loading...</div>}>
          <CTASection />
        </Suspense>
      </main>
    </>
  );
};

export default Home;