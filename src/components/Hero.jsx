// src/components/Hero.jsx
// ============================================
// HERO - AGENCY LEVEL (Performance Optimized)
// Features: animated gradient bg, 3D tilt image,
// floating decorations (responsive), typewriter, scroll indicator
// ============================================

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaPhone, FaWhatsapp, FaChevronDown } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';
import heroImg from '../assets/images/hero-image.jpg'; // fallback JPG
// If you have a WebP version, import it: import heroImgWebp from '../assets/images/hero-image.webp';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Detect mobile for responsive decorations
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Subheadline for typewriter
  const subheadline = "Patna's Top-Rated Birthday Planner & Balloon Decorator";
  const characters = subheadline.split('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.3 },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', damping: 12, stiffness: 200 },
    },
  };

  // 3D Tilt values
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-100, 100], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-8, 8]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e) => {
    const rect = heroRef.current?.getBoundingClientRect();
    if (rect) {
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;
      x.set(mouseX);
      y.set(mouseY);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // All decoration items (emojis)
  const allDecorations = [
    { emoji: '🎈', size: 2.5, left: 5, top: 10, duration: 4, delay: 0 },
    { emoji: '🎉', size: 2, left: 85, top: 15, duration: 5, delay: 0.5 },
    { emoji: '✨', size: 1.8, left: 15, top: 75, duration: 3.5, delay: 1 },
    { emoji: '🎊', size: 2.2, left: 75, top: 80, duration: 4.5, delay: 1.5 },
    { emoji: '💖', size: 2, left: 50, top: 5, duration: 4.2, delay: 0.8 },
    { emoji: '🌟', size: 1.5, left: 92, top: 50, duration: 3.8, delay: 2 },
    { emoji: '🎵', size: 1.8, left: 3, top: 45, duration: 5.2, delay: 1.2 },
  ];

  // Use only first 4 on mobile to reduce DOM
  const decorations = isMobile ? allDecorations.slice(0, 4) : allDecorations;

  return (
    <section 
      className="hero" 
      id="home"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Animated Gradient Background */}
      <div className="hero-bg-animation">
        <div className="hero-bg-orbe"></div>
        <div className="hero-bg-orbe hero-bg-orbe-2"></div>
        <div className="hero-bg-orbe hero-bg-orbe-3"></div>
      </div>

      <div className="container">
        <div className="hero-grid">
          {/* Left: Image with 3D Tilt */}
          <motion.div
            className="hero-image-wrapper"
            style={{ rotateX, rotateY }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div className="hero-image-container">
              {/* <picture> for WebP fallback – update srcSet with actual WebP if available */}
              <picture>
                {/* If you have a WebP version, uncomment the source line and update href */}
                {/* <source srcSet={heroImgWebp} type="image/webp" /> */}
                <img 
                  src={heroImg} 
                  alt="Vicky Balloon Decoration - Beautiful event decoration"
                  className="hero-image"
                  loading="eager"               // LCP – load immediately
                  fetchpriority="high"           // Prioritize this image
                  // Responsive sizes (if you have multiple versions)
                  srcSet={`${heroImg}?w=400 400w, ${heroImg}?w=800 800w, ${heroImg}?w=1200 1200w`}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </picture>
              <div className="hero-image-glow"></div>
              <div className="hero-image-shine"></div>
            </div>
            {/* Floating decoration badges */}
            <motion.div
              className="hero-badge"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, duration: 0.5, type: 'spring' }}
            >
              <span>⭐ 5-Star Rated</span>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <div className="hero-content">
            {/* Floating Decorations – responsive count */}
            <div className="hero-floaters">
              {decorations.map((item, index) => (
                <motion.span
                  key={index}
                  className="floater"
                  style={{ 
                    left: `${item.left}%`, 
                    top: `${item.top}%`,
                    fontSize: `${item.size}rem`,
                  }}
                  animate={{ 
                    y: [0, -20, 0, -10, 0],
                    rotate: [0, 5, -3, 4, 0],
                    scale: [1, 1.1, 0.9, 1.05, 1],
                  }}
                  transition={{
                    duration: item.duration,
                    delay: item.delay,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  {item.emoji}
                </motion.span>
              ))}
            </div>

            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              Vicky Balloon Decoration
            </motion.h1>

            <motion.div
              className="hero-subheadline-wrapper"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {characters.map((char, index) => (
                <motion.span
                  key={index}
                  className="hero-char"
                  variants={letterVariants}
                  style={{ whiteSpace: 'pre' }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
              <motion.span
                className="hero-cursor"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                |
              </motion.span>
            </motion.div>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 + characters.length * 0.04, duration: 0.6 }}
            >
              Creating unforgettable celebrations across Patna — from stunning balloon arches to
              romantic honeymoon setups. Trusted, creative, and affordable event decoration for
              every occasion.
            </motion.p>

            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + characters.length * 0.04, duration: 0.5 }}
            >
              <motion.a
                href="tel:+917070608318"
                className="btn btn-primary"
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(194,24,91,0.3)' }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPhone /> Call Now — 7070608318
              </motion.a>
              <motion.a
                href="https://wa.me/917070608318?text=Hi%2C%20I'm%20interested%20in%20your%20decoration%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold"
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(212,175,55,0.3)' }}
                whileTap={{ scale: 0.95 }}
              >
                <FaWhatsapp /> WhatsApp Us
              </motion.a>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              className="hero-scroll-indicator"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5, duration: 0.8 }}
            >
              <span>Scroll to explore</span>
              <motion.span
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <FaChevronDown />
              </motion.span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;