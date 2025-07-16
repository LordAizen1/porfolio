import React from 'react';

const GradientBackground = () => {
  return (
    <div className="gradient-background">
      {/* Main gradient background */}
      <div className="main-gradient"></div>
      
      {/* Subtle floating elements */}
      <div className="floating-elements">
        <div className="floating-orb orb-1"></div>
        <div className="floating-orb orb-2"></div>
        <div className="floating-orb orb-3"></div>
      </div>
      
      {/* Subtle overlay for breathing effect */}
      <div className="breathing-overlay"></div>
    </div>
  );
};

export default GradientBackground;