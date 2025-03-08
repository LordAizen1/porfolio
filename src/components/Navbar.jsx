// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // For routing

const Navbar = () => {
  return (
    <div id="nav-header">
      <nav>
        <Link to="/" className="nav-btn">Home</Link>
        <Link to="/know-more" className="nav-btn">Know More</Link>
        <Link to="/projects" className="nav-btn">Projects</Link>
        <a href="#last-footer" className="nav-btn get-in-touch">Get In Touch</a>
      </nav>
    </div>
  );
};

export default Navbar;