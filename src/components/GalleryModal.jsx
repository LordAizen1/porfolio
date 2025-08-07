import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GalleryModal = ({ isOpen, onClose, images, projectTitle }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen || !images || images.length === 0) return null;

  const handlePrevious = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') handlePrevious(e);
    if (e.key === 'ArrowRight') handleNext(e);
    if (e.key === 'Escape') onClose();
  };

  return (
    <AnimatePresence>
      <motion.div
        className="gallery-modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        <motion.div
          className="gallery-modal-content"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="gallery-modal-header">
            <h3>{projectTitle}</h3>
            <button className="gallery-modal-close" onClick={onClose}>
              ×
            </button>
          </div>

          <div className="gallery-modal-image-container">
            <motion.img
              key={currentImageIndex}
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt}
              className="main-image"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
            
            {images.length > 1 && (
              <>
                <button 
                  className="gallery-nav-button prev"
                  onClick={handlePrevious}
                >
                  ‹
                </button>
                <button 
                  className="gallery-nav-button next"
                  onClick={handleNext}
                >
                  ›
                </button>
              </>
            )}
          </div>

          {images.length > 1 && (
            <div className="gallery-thumbnails">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`gallery-thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <img src={image.src} alt={`Thumbnail ${index + 1}`} />
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default GalleryModal;
