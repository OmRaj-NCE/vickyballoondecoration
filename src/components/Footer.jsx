// ============================================
// FOOTER COMPONENT
// Business info, quick links, and credit
// ============================================

import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container container">
        {/* Business Info */}
        <div className="footer-section">
          <h3 className="footer-logo">
            🎈 Vicky Balloon Decoration
          </h3>
          <p className="footer-tagline">
            Top-rated birthday planner and balloon decorator in Patna
          </p>
          <div className="footer-contact">
            <a href="tel:+917070608318" className="footer-contact-item">
              <FaPhone /> 7070608318
            </a>
            <a href="https://wa.me/917070608318" className="footer-contact-item" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp /> WhatsApp
            </a>
            <a href="mailto:vickyballoondecoration@gmail.com" className="footer-contact-item">
              <FaEnvelope /> vickyballoondecoration@gmail.com
            </a>
            <span className="footer-contact-item">
              <FaMapMarkerAlt /> 3rd villha, 5/9, Gola Rd, Shri Krishna Puram, Danapur, Patna, Bihar 801503
            </span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/honeymoon-decoration">Honeymoon Decoration</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Services Links */}
        <div className="footer-section">
          <h4>Our Services</h4>
          <ul className="footer-links">
            <li><Link to="/services">Birthday Decoration</Link></li>
            <li><Link to="/services">Kids Theme Decoration</Link></li>
            <li><Link to="/services">Anniversary Decoration</Link></li>
            <li><Link to="/services">Engagement Decoration</Link></li>
            <li><Link to="/honeymoon-decoration">Honeymoon Decoration</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container">
          <p>© {currentYear} Vicky Balloon Decoration. All rights reserved.</p>
          <p className="footer-credit">Made by Editor Raj</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;