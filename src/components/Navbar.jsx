// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Auto-close menu on route change
  React.useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);
  return (
    <div id="nav-header">
      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <motion.div
          animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          className="hamburger-line"
        />
        <motion.div
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          className="hamburger-line"
        />
        <motion.div
          animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          className="hamburger-line"
        />
      </div>

      {/* Desktop Navigation */}
      <nav className="desktop-nav">
        <RouterLink to="/" className="nav-btn">Home</RouterLink>
        <RouterLink to="/know-more" className="nav-btn">Know Me</RouterLink>
        <RouterLink to="/projects" className="nav-btn">Projects</RouterLink>
        <RouterLink to="/experiences" className="nav-btn">Experiences</RouterLink>
        <ScrollLink
          to="last-footer"
          smooth={true}
          duration={1000}
          className="nav-btn get-in-touch"
        >
          Contact
        </ScrollLink>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="mobile-nav"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <RouterLink to="/" className="mobile-nav-btn" onClick={closeMenu}>
              Home
            </RouterLink>
            <RouterLink to="/know-more" className="mobile-nav-btn" onClick={closeMenu}>
              Know Me
            </RouterLink>
            <RouterLink to="/projects" className="mobile-nav-btn" onClick={closeMenu}>
              Projects
            </RouterLink>
            <RouterLink to="/experiences" className="mobile-nav-btn" onClick={closeMenu}>
              Experiences
            </RouterLink>
            <ScrollLink
              to="last-footer"
              smooth={true}
              duration={1000}
              className="mobile-nav-btn"
              onClick={closeMenu}
            >
              Contact
            </ScrollLink>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="nav-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;