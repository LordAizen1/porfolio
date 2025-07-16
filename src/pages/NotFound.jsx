import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const [clickCount, setClickCount] = useState(0);
  const [showSecret, setShowSecret] = useState(false);

  const handleClick = () => {
    setClickCount(prev => prev + 1);
    if (clickCount >= 4) {
      setShowSecret(true);
    }
  };

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const bounceAnimation = {
    scale: [1, 1.1, 1],
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="not-found-container"
    >
      <div className="not-found-content">
        <motion.div
          className="not-found-animation"
          animate={floatingAnimation}
        >
          <motion.div
            className="not-found-404"
            whileHover={bounceAnimation}
            onClick={handleClick}
          >
            4<span className="rotating-zero">0</span>4
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="not-found-title"
        >
          Oops! Page Not Found
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="not-found-description"
        >
          The page you're looking for seems to have wandered off into the digital void.
          {clickCount > 0 && clickCount < 5 && (
            <span className="click-hint"> (Keep clicking the 404! {5 - clickCount} more times...)</span>
          )}
        </motion.p>

        <AnimatePresence>
          {showSecret && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="secret-message"
            >
              <p>🎉 You found the secret! You're persistent, I like that!</p>
              <div className="dancing-cat">🐱</div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="not-found-actions"
        >
          <Link to="/" className="home-button">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="primary-button"
            >
              Take Me Home
            </motion.button>
          </Link>
          
          <Link to="/projects" className="projects-button">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="secondary-button"
            >
              View Projects
            </motion.button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="not-found-suggestions"
        >
          <h3>Maybe you were looking for:</h3>
          <ul>
            <li><Link to="/know-more">About Me</Link></li>
            <li><Link to="/experiences">My Experiences</Link></li>
            <li><Link to="/projects">My Projects</Link></li>
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NotFound;