import React from 'react';

const SimpleBackground = () => {
  return (
    <div className="simple-background">
      {/* Option 1: Clean gradient */}
      <div className="gradient-bg"></div>
      
      {/* Option 2: Subtle dots pattern */}
      <div className="dots-pattern"></div>
      
      {/* Option 3: Soft geometric shapes */}
      <div className="geometric-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
    </div>
  );
};

export default SimpleBackground;