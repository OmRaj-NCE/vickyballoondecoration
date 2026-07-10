// src/components/SocialButtons.jsx
// ============================================
// FLOATING SOCIAL BUTTONS
// WhatsApp (primary), Instagram, Facebook
// Each has a subtle floating animation, glow effects,
// and hover scale. WhatsApp has a pulsing ring.
// ============================================

import { motion } from 'framer-motion';
import { FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa';
import './SocialButtons.css';

const SocialButtons = () => {
  const socialLinks = [
    {
      id: 'whatsapp',
      icon: FaWhatsapp,
      url: 'https://wa.me/917070608318?text=Hi%2C%20I%27m%20interested%20in%20your%20decoration%20services',
      label: 'WhatsApp',
      color: '#25D366',
      glow: 'rgba(37, 211, 102, 0.5)',
      pulse: true,
    },
    {
      id: 'instagram',
      icon: FaInstagram,
      url: 'https://www.instagram.com/vicky_balloon_decorations?igsh=MXhwMjM1ZTFwMmlmag==',
      label: 'Instagram',
      color: '#E4405F',
      glow: 'rgba(228, 64, 95, 0.5)',
      pulse: false,
    },
    {
      id: 'facebook',
      icon: FaFacebookF,
      url: 'https://www.facebook.com/profile.php?id=61590566848225',
      label: 'Facebook',
      color: '#1877F2',
      glow: 'rgba(24, 119, 242, 0.5)',
      pulse: false,
    },
  ];

  // Floating animation variant
  const floatingVariant = {
    initial: { y: 0 },
    animate: (custom) => ({
      y: [0, -8, 0],
      transition: {
        repeat: Infinity,
        duration: 3,
        delay: custom * 0.3,
        ease: 'easeInOut',
      },
    }),
  };

  return (
    <div className="social-buttons-container">
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.id}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`social-btn social-${social.id}`}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 + index * 0.1, type: 'spring', stiffness: 260, damping: 20 }}
          whileHover={{ scale: 1.15 }}
          custom={index}
          variants={floatingVariant}
        >
          <motion.div
            className="social-icon-wrapper"
            animate={
              social.pulse
                ? {
                    boxShadow: [
                      `0 0 0 0 ${social.glow}`,
                      `0 0 0 15px transparent`,
                    ],
                  }
                : {}
            }
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: 'easeOut',
            }}
          >
            <social.icon className="social-icon" />
            {/* Pulsing ring behind WhatsApp */}
            {social.pulse && (
              <motion.span
                className="pulse-ring"
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.8, 0, 0.8],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: 'easeOut',
                }}
              />
            )}
          </motion.div>
          <span className="social-tooltip">{social.label}</span>
        </motion.a>
      ))}
    </div>
  );
};

export default SocialButtons;