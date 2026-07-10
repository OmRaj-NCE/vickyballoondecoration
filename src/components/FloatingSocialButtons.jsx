// src/components/FloatingSocialButtons.jsx
import { motion } from 'framer-motion';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import './FloatingSocialButtons.css';

const FloatingSocialButtons = () => {
  const socialLinks = [
    {
      id: 1,
      icon: FaInstagram,
      label: 'Instagram',
      url: 'https://www.instagram.com/vicky_balloon_decorations?igsh=MXhwMjM1ZTFwMmlmag==',
      color: '#E4405F',
    },
    {
      id: 2,
      icon: FaFacebook,
      label: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=61590566848225',
      color: '#1877F2',
    },
  ];

  return (
    <div className="floating-socials">
      {socialLinks.map((link) => (
        <motion.a
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-social-btn"
          style={{ backgroundColor: link.color }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6 + link.id * 0.1, type: 'spring' }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <link.icon />
        </motion.a>
      ))}
    </div>
  );
};

export default FloatingSocialButtons;