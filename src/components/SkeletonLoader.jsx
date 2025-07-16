import React from 'react';
import { motion } from 'framer-motion';

const SkeletonLoader = ({ variant = 'default' }) => {
  const shimmerAnimation = {
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  if (variant === 'project') {
    return (
      <motion.div
        className="skeleton-project"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="skeleton-project-content">
          <motion.div
            className="skeleton-title"
            animate={shimmerAnimation}
          />
          <motion.div
            className="skeleton-description"
            animate={shimmerAnimation}
          />
          <motion.div
            className="skeleton-description-short"
            animate={shimmerAnimation}
          />
        </div>
        <motion.div
          className="skeleton-image"
          animate={shimmerAnimation}
        />
      </motion.div>
    );
  }

  if (variant === 'timeline') {
    return (
      <motion.div
        className="skeleton-timeline"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="skeleton-timeline-dot"
          animate={shimmerAnimation}
        />
        <div className="skeleton-timeline-content">
          <motion.div
            className="skeleton-period"
            animate={shimmerAnimation}
          />
          <motion.div
            className="skeleton-title"
            animate={shimmerAnimation}
          />
          <motion.div
            className="skeleton-description"
            animate={shimmerAnimation}
          />
          <motion.div
            className="skeleton-description-short"
            animate={shimmerAnimation}
          />
        </div>
      </motion.div>
    );
  }

  if (variant === 'card') {
    return (
      <motion.div
        className="skeleton-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="skeleton-card-title"
          animate={shimmerAnimation}
        />
        <motion.div
          className="skeleton-description"
          animate={shimmerAnimation}
        />
        <motion.div
          className="skeleton-description-short"
          animate={shimmerAnimation}
        />
      </motion.div>
    );
  }

  return (
    <motion.div
      className="skeleton-default"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="skeleton-line"
        animate={shimmerAnimation}
      />
      <motion.div
        className="skeleton-line"
        animate={shimmerAnimation}
      />
      <motion.div
        className="skeleton-line skeleton-line-short"
        animate={shimmerAnimation}
      />
    </motion.div>
  );
};

export default SkeletonLoader;