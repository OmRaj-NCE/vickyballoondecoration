// ============================================
// SERVICES PAGE
// Displays all 7 services with full descriptions
// ============================================

import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';
import { servicesData } from '../data/servicesData';
import CTASection from '../components/CTASection';
import './Services.css';

const Services = () => {
  // Banner animation variants
  const bannerVariants = {
    hidden: { opacity: 0, scale: 1.05 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    },
  };

  return (
    <main className="services-page">
      {/* Services Banner */}
      <section className="services-banner">
        <motion.div 
          className="services-banner-content container"
          initial="hidden"
          animate="visible"
          variants={bannerVariants}
        >
          <h1>Our Services</h1>
          <p className="services-banner-subtitle">
            Every celebration deserves a beautiful setting
          </p>
          <p className="services-banner-description">
            From birthdays to weddings, we transform your vision into reality with 
            stunning decorations that leave lasting memories.
          </p>
        </motion.div>
        <div className="services-banner-overlay"></div>
      </section>

      {/* Services Grid */}
      <section className="services-grid-section section-padding">
        <div className="container">
          <div className="section-title">
            <h2>Explore Our Decorations</h2>
            <p className="section-subtitle">
              Each service is crafted with attention to detail and a passion for perfection
            </p>
          </div>

          <div className="services-grid">
            {servicesData.map((service, index) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                image={service.image}
                icon={service.icon}
                delay={index * 0.08}
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

export default Services;