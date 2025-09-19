import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const NavigationIndicator = () => {
  const location = useLocation();
  
  const getPageTitle = (pathname) => {
    switch (pathname) {
      case '/': return 'Home';
      case '/know-more': return 'About Me';
      case '/projects': return 'Projects';
      case '/experiences': return 'Experiences';
      default: return 'Portfolio';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="navigation-indicator"
      style={{
        position: 'fixed',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        background: 'var(--card-background)',
        backdropFilter: 'blur(10px)',
        border: '1px solid var(--border-color)',
        borderRadius: 'var(--border-radius)',
        padding: '8px 16px',
        fontSize: '0.9rem',
        color: 'var(--primary-color)',
        zIndex: 100,
        pointerEvents: 'none'
      }}
    >
      {getPageTitle(location.pathname)}
    </motion.div>
  );
};

export default NavigationIndicator;