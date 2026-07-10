// src/components/Footer.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebook } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const socialLinks = [
    {
      name: 'Instagram',
      icon: FaInstagram,
      url: 'https://www.instagram.com/vicky_balloon_decorations?igsh=MXhwMjM1ZTFwMmlmag==',
      color: '#E4405F',
    },
    {
      name: 'Facebook',
      icon: FaFacebook,
      url: 'https://www.facebook.com/profile.php?id=61590566848225',
      color: '#1877F2',
    },
  ];

  return (
    <footer className="footer">
      {/* Decorative top border with gold gradient */}
      <div className="footer-gold-line"></div>

      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Brand & Tagline */}
          <motion.div
            className="footer-column"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInUp}
          >
            <h3 className="footer-logo">Vicky Balloon Decoration</h3>
            <p className="footer-tagline">
              Patna's Top-Rated Birthday Planner &amp; Balloon Decorator
            </p>
            <div className="footer-contact">
              <a href="tel:+917070608318" className="footer-contact-item">
                <FaPhone /> 7070608318
              </a>
              <a
                href="https://wa.me/917070608318?text=Hi%2C%20I'm%20interested%20in%20your%20decoration%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-item"
              >
                <FaWhatsapp /> WhatsApp
              </a>
              <a href="mailto:vickyballoondecoration@gmail.com" className="footer-contact-item">
                <FaEnvelope /> vickyballoondecoration@gmail.com
              </a>
              <span className="footer-contact-item">
                <FaMapMarkerAlt /> 3rd villha, 5/9, Gola Rd, Shri Krishna Puram, Danapur, Patna, Bihar 801503
              </span>
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            className="footer-column"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInUp}
            transition={{ delay: 0.1 }}
          >
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/honeymoon-decoration">Honeymoon Decoration</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </motion.div>

          {/* Column 3: Social Media */}
          <motion.div
            className="footer-column"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <h4>Follow Us</h4>
            <div className="footer-social-icons">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-link"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  style={{ '--social-color': social.color }}
                >
                  <social.icon />
                  <span className="social-tooltip">{social.name}</span>
                </motion.a>
              ))}
            </div>
            <p className="social-follow-text">Stay connected for the latest decor inspiration!</p>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-content">
          <p>&copy; {new Date().getFullYear()} Vicky Balloon Decoration. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;