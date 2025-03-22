import React, { useEffect, useRef, useState } from "react";
import { database } from "../firebase"; 
import { ref, get, set } from "firebase/database"; 

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visitorCount, setVisitorCount] = useState(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const isNewVisitor = localStorage.getItem("visitedBefore");

    if (!isNewVisitor) {
      // If visitor is new, mark them as visited and update Firebase count
      localStorage.setItem("visitedBefore", "true");

      const updateVisitorCount = async () => {
        const countRef = ref(database, "visitorCount");
        try {
          const snapshot = await get(countRef);
          if (snapshot.exists()) {
            const currentCount = snapshot.val();
            setVisitorCount(currentCount);
            await set(countRef, currentCount + 1); // Only increment for new visitors
          } else {
            await set(countRef, 1);
            setVisitorCount(1);
          }
        } catch (error) {
          console.error("Error updating visitor count:", error);
        }
      };

      updateVisitorCount();
    } else {
      // If the visitor has been here before, just fetch the count without incrementing
      const fetchVisitorCount = async () => {
        const countRef = ref(database, "visitorCount");
        try {
          const snapshot = await get(countRef);
          if (snapshot.exists()) {
            setVisitorCount(snapshot.val());
          }
        } catch (error) {
          console.error("Error fetching visitor count:", error);
        }
      };

      fetchVisitorCount();
    }
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
