import React, { useEffect, useRef, useState } from 'react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Set isVisible to true when the footer is in view, false when it's out of view
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 1, // Adjust this value to control when the animation triggers
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer ref={footerRef} className={isVisible ? 'footer-visible' : ''}>
      <div id="con">
        <a className="contact mail-me" href="mailto:mohdkaif2003@gmail.com">
          <img src="/porfolio/images/mail.png" width="17.6" alt="Email Icon" />
          Mail Me
        </a>
        <a className="contact" href="https://www.linkedin.com/in/mohammadkaif007/" target="_blank" rel="noopener noreferrer">
          <img src="/porfolio/images/linkedin.png" width="15.8" alt="LinkedIn Icon" />
          LinkedIn
        </a>
        <a className="contact" href="https://github.com/LordAizen1" target="_blank" rel="noopener noreferrer">
          <img src="/porfolio/images/github.png" width="15.8" alt="GitHub Icon" />
          GitHub
        </a>
      </div>
      <div id="last-footer">
        &copy; 2025 Dr Web Dev | Made with Love 💖.
      </div>
    </footer>
  );
};

export default Footer;