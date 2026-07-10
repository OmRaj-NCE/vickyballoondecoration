// ============================================
// SERVICE CARD COMPONENT
// Reusable card with image zoom on hover
// Used for both main services and honeymoon services
// ============================================

import React from 'react';
import { motion } from 'framer-motion';
import './ServiceCard.css';

const ServiceCard = ({ title, description, image, icon, delay = 0 }) => {
  return (
    <motion.div 
      className="service-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ 
        duration: 0.6, 
        ease: 'easeOut',
        delay: delay 
      }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3 }
      }}
    >
      <div className="service-card-inner">
        {/* Image Container */}
        <div className="service-card-image-wrapper">
          <div className="service-card-image-container">
            <img 
              src={image} 
              alt={title} 
              className="service-card-image"
              loading="lazy"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.classList.add('service-card-fallback');
              }}
            />
            <div className="service-card-icon-badge">
              {icon}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="service-card-content">
          <h3 className="service-card-title">{title}</h3>
          <p className="service-card-description">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;