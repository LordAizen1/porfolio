import React, { useEffect, useRef, useState } from "react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visitorCount, setVisitorCount] = useState(null);
  const footerRef = useRef(null);

  useEffect(() => {
    // Simple localStorage-based visitor counting
    const initializeVisitorCount = () => {
      try {
        const isNewVisitor = !localStorage.getItem("visitedBefore");
        let currentCount = parseInt(localStorage.getItem("visitorCount") || "0");

        if (isNewVisitor) {
          // New visitor - increment count
          currentCount += 1;
          localStorage.setItem("visitedBefore", "true");
          localStorage.setItem("visitorCount", currentCount.toString());
        }

        setVisitorCount(currentCount);
      } catch (error) {
        console.error("Error with visitor count:", error);
        setVisitorCount(1); // Fallback value
      }
    };

    initializeVisitorCount();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { root: null, rootMargin: "0px", threshold: 1 }
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
    <footer ref={footerRef} className={isVisible ? "footer-visible" : ""}>
      <div id="con">
        <a className="contact mail-me" href="mailto:mohdkaif2003@gmail.com">
          <img src="/porfolio/images/mail.png" width="17.6" alt="Email Icon" />
          Mail Me
        </a>
        <a
          className="contact"
          href="https://www.linkedin.com/in/mohammadkaif007/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/porfolio/images/linkedin.png"
            width="15.8"
            alt="LinkedIn Icon"
          />
          LinkedIn
        </a>
        <a
          className="contact"
          href="https://github.com/LordAizen1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/porfolio/images/github.png"
            width="15.8"
            alt="GitHub Icon"
          />
          GitHub
        </a>
      </div>
      <div id="last-footer">
        &copy; 2025 Dr Web Dev | Made with Love 💖.
        <br />
        <strong>Visitors: {visitorCount !== null ? visitorCount : "Loading..."}</strong>
      </div>
    </footer>
  );
};

export default Footer;
