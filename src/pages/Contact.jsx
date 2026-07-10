// ============================================
// CONTACT PAGE
// Contact info, map, and call/WhatsApp buttons
// ============================================

import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <main className="contact-page">
      {/* Contact Header */}
      <section className="contact-header">
        <div className="container">
          <motion.div 
            className="contact-header-content"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1 variants={itemVariants}>Get in Touch</motion.h1>
            <motion.p variants={itemVariants} className="contact-header-subtitle">
              Let's create something beautiful together
            </motion.p>
            <motion.p variants={itemVariants} className="contact-header-description">
              Have a question or want to book our services? Reach out to us through 
              any of the channels below. We're here to help make your event special.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Grid */}
      <section className="contact-info-section section-padding">
        <div className="container">
          <motion.div 
            className="contact-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
          >
            {/* Phone */}
            <motion.a 
              href="tel:+917070608318" 
              className="contact-card"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              <div className="contact-card-icon-wrapper">
                <FaPhone className="contact-card-icon" />
              </div>
              <h3>Call Us</h3>
              <p>7070608318</p>
              <span className="contact-card-action">Click to Call →</span>
            </motion.a>

            {/* WhatsApp */}
            <motion.a 
              href="https://wa.me/917070608318?text=Hi%2C%20I'm%20interested%20in%20your%20decoration%20services" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-card"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              <div className="contact-card-icon-wrapper whatsapp-icon-wrapper">
                <FaWhatsapp className="contact-card-icon whatsapp-icon" />
              </div>
              <h3>WhatsApp</h3>
              <p>7070608318</p>
              <span className="contact-card-action">Chat Now →</span>
            </motion.a>

            {/* Email */}
            <motion.a 
              href="mailto:vickyballoondecoration@gmail.com" 
              className="contact-card"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              <div className="contact-card-icon-wrapper">
                <FaEnvelope className="contact-card-icon" />
              </div>
              <h3>Email</h3>
              <p>vickyballoondecoration@gmail.com</p>
              <span className="contact-card-action">Send Email →</span>
            </motion.a>

            {/* Address */}
            <motion.div 
              className="contact-card"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              <div className="contact-card-icon-wrapper">
                <FaMapMarkerAlt className="contact-card-icon" />
              </div>
              <h3>Visit Us</h3>
              <p>3rd villha, 5/9, Gola Rd</p>
              <p>Shri Krishna Puram, Danapur</p>
              <p>Patna, Bihar 801503</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Google Map */}
      <section className="contact-map-section">
        <div className="container">
          <motion.div 
            className="map-wrapper"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28818.19442448243!2d85.041047!3d25.594095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed54f80b17e6f9%3A0x8b3e5d2f5c7d5c5a!2sDanapur%2C%20Patna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vicky Balloon Decoration Location"
              className="google-map"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="contact-hours-section section-padding">
        <div className="container">
          <motion.div 
            className="hours-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <FaClock className="hours-icon" />
            <h3>Business Hours</h3>
            <p>Open 7 Days a Week</p>
            <div className="hours-details">
              <span>Monday - Sunday</span>
              <span className="hours-time">9:00 AM - 9:00 PM</span>
            </div>
            <p className="hours-note">* Flexible hours available for special events</p>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Contact;