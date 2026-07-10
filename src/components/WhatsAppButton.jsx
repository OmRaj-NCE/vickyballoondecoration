// ============================================
// WHATSAPP FLOATING BUTTON
// Fixed bottom-right with pulse animation
// ============================================

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const phoneNumber = '917070608318';
  const message = 'Hi, I\'m interested in your decoration services';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 17,
      }}
    >
      <motion.div
        className="whatsapp-icon-wrapper"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <FaWhatsapp className="whatsapp-icon" />
      </motion.div>
      <span className="whatsapp-tooltip">Chat with us!</span>
    </motion.a>
  );
};

export default WhatsAppButton;