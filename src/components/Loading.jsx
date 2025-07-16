import React from 'react';
import { motion } from 'framer-motion';
import SkeletonLoader from './SkeletonLoader';

const Loading = ({ variant = 'default', showSkeleton = false }) => {
  if (showSkeleton) {
    return (
      <div className="loading-container">
        {variant === 'projects' && (
          <div className="skeleton-container">
            <SkeletonLoader variant="project" />
            <SkeletonLoader variant="project" />
            <SkeletonLoader variant="project" />
          </div>
        )}
        {variant === 'timeline' && (
          <div className="skeleton-container">
            <SkeletonLoader variant="timeline" />
            <SkeletonLoader variant="timeline" />
            <SkeletonLoader variant="timeline" />
          </div>
        )}
        {variant === 'cards' && (
          <div className="skeleton-cards-container">
            <SkeletonLoader variant="card" />
            <SkeletonLoader variant="card" />
            <SkeletonLoader variant="card" />
          </div>
        )}
        {variant === 'default' && <SkeletonLoader />}
      </div>
    );
  }

  return (
    <div className="loading-container">
      <motion.div
        className="loading-spinner"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="spinner-inner"></div>
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="loading-text"
      >
        Loading...
      </motion.p>
    </div>
  );
};

export default Loading;