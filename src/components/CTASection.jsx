// ============================================
// CTA SECTION COMPONENT
// Call to action with phone and WhatsApp buttons
// ============================================

import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';
import './CTASection.css';

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <motion.div 
          className="cta-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Ready to Make Your Event Unforgettable?</h2>
          <p>
            Contact Vicky Balloon Decoration today and let's create something 
            magical together. We bring your vision to life with creativity, 
            precision, and a touch of celebration!
          </p>
          <div className="cta-buttons">
            <a 
              href="tel:+917070608318" 
              className="btn btn-primary"
            >
              <FaPhone /> Call Now
            </a>
            <a 
              href="https://wa.me/917070608318?text=Hi%2C%20I'm%20interested%20in%20your%20decoration%20services" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-gold"
            >
              <FaWhatsapp /> WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;