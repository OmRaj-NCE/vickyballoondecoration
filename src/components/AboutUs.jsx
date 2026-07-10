// src/components/AboutUs.jsx
// ============================================
// ABOUT US COMPONENT
// Two-column layout: image left, text right
// Fade/slide animation on scroll
// ============================================

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // ✅ use Link for internal routing
import aboutImg from '../assets/images/about-us.jpg'; // make sure this file exists
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section className="about-us section-padding" id="about">
      <div className="container">
        <div className="about-us-grid">
          {/* Image Column */}
          <motion.div 
            className="about-us-image-wrapper"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="about-us-image-container">
              <img 
                src={aboutImg} 
                alt="Vicky Balloon Decoration - Beautiful event decoration setup" 
                className="about-us-image"
                loading="lazy"
                onError={(e) => {
                  // Fallback if image fails to load
                  e.target.style.display = 'none';
                  e.target.parentElement.classList.add('about-fallback');
                }}
              />
              <div className="about-us-image-overlay"></div>
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div 
            className="about-us-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <span className="about-us-tag">About Us</span>
            <h2>Creating Unforgettable Celebrations</h2>
            <p className="about-us-description">
              When it comes to creating unforgettable celebrations, Vicky Balloon Decoration 
              stands as one of the most trusted and creative decoration arrangers in Patna. 
              We specialize in transforming ordinary spaces into extraordinary event setups 
              with stunning balloon decorations, elegant themes, and customized designs that 
              perfectly match your occasion.
            </p>
            <div className="about-us-features">
              <div className="about-feature">
                <span className="about-feature-icon">🎯</span>
                <div>
                  <h4>Trusted Experts</h4>
                  <p>Years of experience in creating beautiful events</p>
                </div>
              </div>
              <div className="about-feature">
                <span className="about-feature-icon">🎨</span>
                <div>
                  <h4>Custom Designs</h4>
                  <p>Every event is uniquely tailored to your vision</p>
                </div>
              </div>
            </div>
            <Link to="/services" className="btn btn-primary about-us-btn">
              Explore Our Services →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;