// ============================================
// WHY CHOOSE US COMPONENT
// Animated icon grid with 6 points
// ============================================

import React from 'react';
import { motion } from 'framer-motion';
import { whyChooseUsData } from '../data/servicesData';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <section className="why-choose-us section-padding">
      <div className="container">
        <div className="section-title">
          <h2>Why Choose Us</h2>
          <p className="section-subtitle">
            What makes Vicky Balloon Decoration the top choice for events in Patna
          </p>
        </div>

        <motion.div 
          className="why-choose-us-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {whyChooseUsData.map((item) => (
            <motion.div 
              key={item.id} 
              className="why-choose-us-item"
              variants={itemVariants}
              whileHover={{ 
                y: -6,
                transition: { duration: 0.3 }
              }}
            >
              <div className="why-choose-us-icon-wrapper">
                <span className="why-choose-us-icon">{item.icon}</span>
              </div>
              <h3 className="why-choose-us-title">{item.title}</h3>
              <p className="why-choose-us-description">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;