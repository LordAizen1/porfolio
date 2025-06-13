// src/components/Navbar.jsx
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  return (
    <div id="nav-header">
      <nav>
        <ScrollLink
          to="hero-section"
          smooth={true}
          duration={1000}
          className="nav-btn"
        >
          Home
        </ScrollLink>
        <ScrollLink
          to="about-section"
          smooth={true}
          duration={1000}
          className="nav-btn"
        >
          About
        </ScrollLink>
        <ScrollLink
          to="skills-section"
          smooth={true}
          duration={1000}
          className="nav-btn"
        >
          Skills
        </ScrollLink>
        <ScrollLink
          to="timeline-section"
          smooth={true}
          duration={1000}
          className="nav-btn"
        >
          Journey
        </ScrollLink>
        <ScrollLink
          to="projects-section"
          smooth={true}
          duration={1000}
          className="nav-btn"
        >
          Projects
        </ScrollLink>
        <ScrollLink
          to="last-footer"
          smooth={true}
          duration={1000}
          className="nav-btn get-in-touch"
        >
          Contact
        </ScrollLink>
      </nav>
    </div>
  );
};

export default Navbar;