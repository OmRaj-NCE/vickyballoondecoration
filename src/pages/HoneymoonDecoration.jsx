// ============================================
// HONEYMOON DECORATION PAGE
// Dedicated page for honeymoon services
// ============================================

import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';
import { honeymoonServices } from '../data/servicesData';
import CTASection from '../components/CTASection';
import './HoneymoonDecoration.css';

const HoneymoonDecoration = () => {
  // Banner animation variants
  const bannerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  // Floating hearts animation
  const heartVariants = {
    animate: (index) => ({
      y: [0, -20, 0],
      opacity: [0.3, 0.8, 0.3],
      transition: {
        duration: 3 + index * 0.5,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: index * 0.4,
      },
    }),
  };

  const hearts = ['❤️', '💕', '💗', '💖', '💝', '💘'];

  return (
    <main className="honeymoon-page">
      {/* Honeymoon Banner */}
      <section className="honeymoon-banner">
        <div className="honeymoon-banner-content container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={bannerVariants}
          >
            <h1>Honeymoon Decoration</h1>
            <p className="honeymoon-banner-subtitle">
              Make Your First Night Unforgettable ✨
            </p>
            <p className="honeymoon-banner-description">
              Create romantic, elegant, and dreamy honeymoon room decorations for homes, 
              hotels, and banquet rooms with premium materials and perfect finishing.
            </p>
          </motion.div>
        </div>

        {/* Floating Hearts */}
        <div className="honeymoon-hearts">
          {hearts.map((heart, index) => (
            <motion.span
              key={index}
              className="honeymoon-heart"
              custom={index}
              variants={heartVariants}
              animate="animate"
              style={{
                left: `${8 + index * 14}%`,
                top: `${15 + (index % 3) * 20}%`,
                fontSize: `${1.8 + (index % 3) * 0.6}rem`,
              }}
            >
              {heart}
            </motion.span>
          ))}
        </div>
        <div className="honeymoon-banner-overlay"></div>
      </section>

      {/* Honeymoon Services Grid */}
      <section className="honeymoon-services-section section-padding">
        <div className="container">
          <div className="section-title">
            <h2>Our Honeymoon Decorations</h2>
            <p className="section-subtitle">
              Every detail designed to create the perfect romantic atmosphere
            </p>
          </div>

          <div className="honeymoon-services-grid">
            {honeymoonServices.map((service, index) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                image={service.image}
                icon={service.icon}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </main>
  );
};

export default HoneymoonDecoration;