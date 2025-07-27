import React, { useEffect } from 'react';

const ModernBackground = () => {
  useEffect(() => {
    // Create noise texture effect
    const noise = () => {
      let canvas, ctx;
      
      let w, h, pix;
      
      const init = () => {
        canvas = document.createElement('canvas');
        canvas.classList.add('noise');
        document.querySelector('.modern-background').appendChild(canvas);
        ctx = canvas.getContext('2d');
        
        resize();
        render();
      };
      
      const resize = () => {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
        pix = ctx.createImageData(w, h);
      };
      
      const render = () => {
        const data = pix.data;
        for (let i = 0; i < data.length; i += 4) {
          const noise = Math.random() * 255 * 0.1;
          data[i] = noise;
          data[i + 1] = noise;
          data[i + 2] = noise;
          data[i + 3] = 255;
        }
        ctx.putImageData(pix, 0, 0);
        requestAnimationFrame(render);
      };
      
      window.addEventListener('resize', resize);
      init();
    };

    noise();
  }, []);

  return (
    <div className="modern-background">
      {/* Main gradient overlay */}
      <div className="gradient-overlay"></div>
      
      {/* Grid pattern */}
      <div className="grid-pattern"></div>
      
      {/* Vignette effect */}
      <div className="vignette"></div>
    </div>
  );
};

export default ModernBackground;
