import React from 'react';
// import Navbar from './Navbar'; // Ensure Navbar is imported correctly

const Header = () => {
  return (
    <header>
      <img
        className="logo"
        src="/porfolio/images/dr-webdev-high-resolution-logo-transparent.png" // Use absolute path
        alt="Dr-WebDev Logo"
        width="300"
      />
      {/* <Navbar /> */}
    </header>
  );
};

export default Header;