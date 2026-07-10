// ============================================
// HERO COMPONENT
// Main hero section with animated entrance
// Floating balloon decorations
// ============================================

import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';
import heroImg from '../assets/images/hero-banner.jpg';
import './Hero.css';

const Hero = () => {
  // Floating balloons animation variants
  const floatVariants = {
    animate: (index) => ({
      y: [0, -15, 0],
      transition: {
        duration: 3 + index * 0.5,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: index * 0.3,
      },
    }),
  };

  // Staggered text animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
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

  const floatingEmojis = ['🎈', '🎉', '💕', '🎊', '🌸', '✨'];

  return (
    <section className="hero">
      {/* Background Image with Overlay */}
      <div className="hero-background">
        <img 
          src={heroImg} 
          alt="Vicky Balloon Decoration - Beautiful event decoration setup" 
          className="hero-image"
          loading="eager"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentElement.classList.add('hero-fallback');
          }}
        />
        <div className="hero-overlay"></div>
      </div>

      {/* Floating Balloons */}
      <div className="hero-floaters">
        {floatingEmojis.map((emoji, index) => (
          <motion.span
            key={index}
            className="floating-emoji"
            custom={index}
            variants={floatVariants}
            animate="animate"
            style={{
              left: `${10 + index * 14}%`,
              top: `${20 + (index % 3) * 15}%`,
              fontSize: `${2 + (index % 3) * 0.5}rem`,
            }}
          >
            {emoji}
          </motion.span>
        ))}
      </div>

      {/* Hero Content */}
      <div className="hero-content container">
        <motion.div
          className="hero-text"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 className="hero-title" variants={itemVariants}>
            <span className="hero-title-main">Vicky Balloon</span>
            <span className="hero-title-secondary">Decoration</span>
          </motion.h1>

          <motion.p className="hero-subtitle" variants={itemVariants}>
            Patna's Top-Rated Birthday Planner & Balloon Decorator
          </motion.p>

          <motion.p className="hero-description" variants={itemVariants}>
            Creating unforgettable celebrations across Patna — from stunning balloon arches 
            to romantic honeymoon setups. Trusted, creative, and affordable event decoration 
            for every occasion.
          </motion.p>

          <motion.div className="hero-buttons" variants={itemVariants}>
            <a 
              href="tel:+917070608318" 
              className="btn btn-primary hero-btn"
            >
              <FaPhone /> Call Now — 7070608318
            </a>
            <a 
              href="https://wa.me/917070608318?text=Hi%2C%20I'm%20interested%20in%20your%20decoration%20services" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-gold hero-btn"
            >
              <FaWhatsapp /> WhatsApp Us
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="hero-scroll-indicator"
        animate={{ 
          y: [0, 8, 0],
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <span>↓</span>
        <p>Scroll</p>
      </motion.div>
    </section>
  );
};

export default Hero;