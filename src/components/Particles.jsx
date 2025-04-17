
import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import particlesConfig from './particles.json';

const AmongUsBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  // Customize the JSON config specifically for Among Us
  const customizedConfig = {
    ...particlesConfig,
    background: {
      ...particlesConfig.background,
      color: {
        value: "#110E19" // Your preferred dark blue background
      }
    },
    emitters: {
      ...particlesConfig.emitters,
      position: {
        x: -5,
        y: 30 // Adjusted y-position for better visibility
      },
      particles: {
        ...particlesConfig.emitters.particles,
        move: {
          speed: 5, // Slower speed
          outModes: {
            default: "destroy",
            right: "destroy"
          },
          straight: false // More natural movement
        }
      }
    },
    particles: {
      ...particlesConfig.particles,
      move: {
        enable: true,
        speed: 1, // Slower movement for regular particles
        direction: "none",
        random: true,
        straight: false,
        out_mode: "bounce" // Bounce at edges
      }
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1
    }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={customizedConfig}
      />
    </div>
  );
};

export default AmongUsBackground;