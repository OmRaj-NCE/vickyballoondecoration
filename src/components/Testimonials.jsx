// ============================================
// TESTIMONIALS / STATS COMPONENT
// Trust badges with stats instead of fake reviews
// ============================================

import React from 'react';
import { motion } from 'framer-motion';
import { statsData } from '../data/servicesData';
import './Testimonials.css';

const Testimonials = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="testimonials section-padding">
      <div className="container">
        <div className="section-title">
          <h2>Trusted by Families Across Patna</h2>
          <p className="section-subtitle">
            Numbers that speak for our dedication and excellence
          </p>
        </div>

        <motion.div 
          className="stats-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {statsData.map((stat) => (
            <motion.div 
              key={stat.id} 
              className="stat-item"
              variants={itemVariants}
              whileHover={{ 
                y: -4,
                transition: { duration: 0.3 }
              }}
            >
              <div className="stat-number">
                {stat.number}
              </div>
              <p className="stat-label">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badge */}
        <motion.div 
          className="trust-badge"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="trust-badge-icon">⭐</span>
          <span className="trust-badge-text">
            Rated 5 Stars by Happy Customers
          </span>
          <span className="trust-badge-icon">⭐</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;