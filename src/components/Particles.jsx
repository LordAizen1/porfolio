import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const AmongUsBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesConfig = {
    autoPlay: true,
    background: {
      color: {
        value: "transparent"
      },
      opacity: 0
    },
    fullScreen: {
      enable: true,
      zIndex: -1
    },
    detectRetina: true,
    fpsLimit: 60,
    interactivity: {
      detectsOn: "window",
      events: {
        onClick: {
          enable: false,
          mode: "push"
        },
        onHover: {
          enable: false,
          mode: "repulse"
        },
        resize: {
          delay: 0.5,
          enable: true
        }
      }
    },
    particles: {
      color: {
        value: ["#667eea", "#764ba2", "#ffffff"]
      },
      links: {
        blink: false,
        color: {
          value: "#667eea"
        },
        consent: false,
        distance: 120,
        enable: true,
        frequency: 1,
        opacity: 0.2,
        width: 1,
        warp: false
      },
      move: {
        angle: {
          offset: 0,
          value: 90
        },
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce"
        },
        random: false,
        size: false,
        speed: 1,
        straight: false
      },
      number: {
        density: {
          enable: true,
          area: 1000,
          factor: 1000
        },
        limit: 0,
        value: 50
      },
      opacity: {
        random: {
          enable: true,
          minimumValue: 0.1
        },
        value: {
          min: 0.1,
          max: 0.5
        },
        animation: {
          count: 0,
          enable: true,
          speed: 0.5,
          decay: 0,
          sync: false,
          destroy: "none",
          startValue: "random",
          minimumValue: 0.1
        }
      },
      shape: {
        type: "circle"
      },
      size: {
        random: {
          enable: true,
          minimumValue: 1
        },
        value: {
          min: 1,
          max: 3
        },
        animation: {
          count: 0,
          enable: true,
          speed: 2,
          decay: 0,
          sync: false,
          destroy: "none",
          startValue: "random",
          minimumValue: 0.1
        }
      }
    },
    pauseOnBlur: true,
    pauseOnOutsideViewport: true,
    responsive: [
      {
        maxWidth: 768,
        options: {
          particles: {
            number: {
              value: 30
            },
            move: {
              speed: 0.5
            }
          }
        }
      }
    ],
    smooth: false,
    emitters: [
      {
        autoPlay: true,
        fill: true,
        life: {
          wait: false
        },
        rate: {
          quantity: 1,
          delay: 12
        },
        shape: {
          options: {},
          replace: {
            color: false,
            opacity: false
          },
          type: "square"
        },
        startCount: 0,
        size: {
          mode: "percent",
          height: 0,
          width: 0
        },
        particles: {
          shape: {
            type: "images",
            options: {
              images: {
                src: "/porfolio/images/cyan_amongus.png",
                width: 500,
                height: 634
              }
            }
          },
          size: {
            value: 20
          },
          move: {
            speed: 3,
            outModes: {
              default: "destroy",
              right: "destroy"
            },
            straight: true
          },
          zIndex: {
            value: 0
          },
          rotate: {
            value: {
              min: 0,
              max: 360
            },
            animation: {
              enable: true,
              speed: 5,
              sync: false
            }
          },
          opacity: {
            value: 0.6
          }
        },
        position: {
          x: -5,
          y: 40
        }
      }
    ],
    motion: {
      disable: false,
      reduce: {
        factor: 4,
        value: true
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
      zIndex: -1,
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)'
    }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesConfig}
      />
    </div>
  );
};

export default AmongUsBackground;