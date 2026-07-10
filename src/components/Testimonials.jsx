// src/components/Testimonials.jsx
// ============================================
// TESTIMONIALS / SOCIAL PROOF COMPONENT
// Features: curved wave divider, glassmorphism stat cards,
// floating animations, gradient background.
// ============================================

import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaUsers, FaHandshake, FaSmile } from 'react-icons/fa';
import './Testimonials.css';

const Testimonials = () => {
  const stats = [
    {
      id: 1,
      icon: FaMapMarkerAlt,
      number: '6+',
      label: 'States Served',
    },
    {
      id: 2,
      icon: FaUsers,
      number: '25+',
      label: 'Team Members',
    },
    {
      id: 3,
      icon: FaHandshake,
      number: '500+',
      label: 'Network Reach',
    },
    {
      id: 4,
      icon: FaSmile,
      number: '30+',
      label: 'Happy Clients',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section className="testimonials section-padding" id="testimonials">
      {/* Wave Divider at top */}
      <div className="testimonials-wave">
        <svg viewBox="0 0 1200 100" preserveAspectRatio="none">
          <path
            d="M0,0 C300,100 600,0 900,80 C1050,120 1150,60 1200,0 L1200,100 L0,100 Z"
            fill="url(#testimonialGradient)"
          />
          <defs>
            <linearGradient id="testimonialGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#C2185B', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#D4AF37', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container">
        <motion.div
          className="testimonials-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Trusted by Families Across Patna</h2>
          <p className="testimonials-subtext">
            We take pride in delivering joy and creating beautiful memories for every celebration.
          </p>
        </motion.div>

        <motion.div
          className="stats-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              className="stat-card glassmorphism"
              variants={itemVariants}
              whileHover={{ y: -12, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              animate={{ y: [0, -6, 0] }} // gentle floating effect
              transition={{ repeat: Infinity, duration: 3, delay: stat.id * 0.2, ease: 'easeInOut' }}
            >
              <div className="stat-icon">
                <stat.icon />
              </div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust badge with gradient border */}
        <motion.div
          className="trust-badge"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <span>🎉 100% Satisfaction Guaranteed</span>
          <span>⭐ 5-Star Rated Decorators</span>
        </motion.div>
      </div>

      {/* Bottom wave (optional, inverted) */}
      <div className="testimonials-wave-bottom">
        <svg viewBox="0 0 1200 100" preserveAspectRatio="none">
          <path
            d="M0,100 C300,0 600,100 900,20 C1050,-20 1150,40 1200,100 L1200,0 L0,0 Z"
            fill="url(#testimonialGradient2)"
          />
          <defs>
            <linearGradient id="testimonialGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#D4AF37', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#C2185B', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Testimonials;