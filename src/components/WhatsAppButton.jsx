// src/components/WhatsAppButton.jsx
// ============================================
// WHATSAPP FLOATING ACTION BUTTON
// Attractive design with pulse animation, glow, and hover label
// ============================================

import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  return (
    <motion.div
      className="whatsapp-wrapper"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, type: 'spring', stiffness: 200, damping: 20 }}
    >
      {/* Pulsing ring */}
      <motion.div
        className="whatsapp-ring"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.6, 0, 0.6],
        }}
        transition={{
          repeat: Infinity,
          duration: 2.5,
          ease: 'easeInOut',
        }}
      />

      {/* Main button */}
      <a
        href="https://wa.me/917070608318?text=Hi%2C%20I'm%20interested%20in%20your%20decoration%20services"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
      >
        <motion.div
          className="whatsapp-icon"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 400 }}
        >
          <FaWhatsapp size={32} />
        </motion.div>
        <span className="whatsapp-label">Chat with us</span>
      </a>
    </motion.div>
  );
};

export default WhatsAppButton;