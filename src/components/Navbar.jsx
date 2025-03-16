// src/components/Navbar.jsx
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  return (
    <div id="nav-header">
      <nav>
        <RouterLink to="/" className="nav-btn">Home</RouterLink>
        <RouterLink to="/know-more" className="nav-btn">Know More</RouterLink>
        <RouterLink to="/projects" className="nav-btn">Projects</RouterLink>
        <ScrollLink
          to="last-footer"
          smooth={true}
          duration={1000}
          className="nav-btn get-in-touch"
        >
          Get In Touch
        </ScrollLink>
      </nav>
    </div>
  );
};

export default Navbar;