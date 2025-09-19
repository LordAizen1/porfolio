import React from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  in: {
    opacity: 1,
    y: 0
  },
  out: {
    opacity: 0,
    y: -20
  }
};

const pageTransition = {
  type: 'tween',
  ease: 'easeInOut',
  duration: 0.3
};

// Reduced motion variant for accessibility
const reducedMotionVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 }
};

const reducedMotionTransition = {
  duration: 0.15
};

const PageTransition = ({ children }) => {
  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={prefersReducedMotion ? reducedMotionVariants : pageVariants}
      transition={prefersReducedMotion ? reducedMotionTransition : pageTransition}
      style={{ 
        width: '100%',
        willChange: 'transform, opacity' // GPU acceleration
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;