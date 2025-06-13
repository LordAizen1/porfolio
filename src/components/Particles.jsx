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
    fpsLimit: 120,
    interactivity: {
      detectsOn: "window",
      events: {
        onClick: {
          enable: true,
          mode: "push"
        },
        onHover: {
          enable: true,
          mode: "repulse",
          parallax: {
            enable: false,
            force: 2,
            smooth: 10
          }
        },
        resize: {
          delay: 0.5,
          enable: true
        }
      },
      modes: {
        push: {
          default: true,
          groups: [],
          quantity: 4
        },
        repulse: {
          distance: 200,
          duration: 0.4,
          factor: 100,
          speed: 1,
          maxSpeed: 50,
          easing: "ease-out-quad"
        }
      }
    },
    particles: {
      color: {
        value: ["#667eea", "#764ba2", "#ffffff", "#4facfe", "#00f2fe"]
      },
      links: {
        blink: false,
        color: {
          value: "#667eea"
        },
        consent: false,
        distance: 150,
        enable: true,
        frequency: 1,
        opacity: 0.3,
        shadow: {
          blur: 5,
          color: {
            value: "#667eea"
          },
          enable: false
        },
        triangles: {
          enable: false,
          frequency: 1
        },
        width: 1,
        warp: false
      },
      move: {
        angle: {
          offset: 0,
          value: 90
        },
        attract: {
          distance: 200,
          enable: false,
          rotate: {
            x: 600,
            y: 1200
          }
        },
        direction: "none",
        enable: true,
        path: {},
        outModes: {
          default: "bounce",
          bottom: "bounce",
          left: "bounce",
          right: "bounce",
          top: "bounce"
        },
        random: false,
        size: false,
        speed: 2,
        straight: false,
        trail: {
          enable: false,
          length: 10,
          fillColor: {
            value: "#000000"
          }
        },
        vibrate: false,
        warp: false
      },
      number: {
        density: {
          enable: true,
          area: 800,
          factor: 1000
        },
        limit: 0,
        value: 80
      },
      opacity: {
        random: {
          enable: true,
          minimumValue: 0.1
        },
        value: {
          min: 0.1,
          max: 0.8
        },
        animation: {
          count: 0,
          enable: true,
          speed: 1,
          decay: 0,
          sync: false,
          destroy: "none",
          startValue: "random",
          minimumValue: 0.1
        }
      },
      shape: {
        type: ["circle", "triangle", "polygon"],
        options: {
          polygon: {
            sides: 6
          }
        }
      },
      size: {
        random: {
          enable: true,
          minimumValue: 1
        },
        value: {
          min: 1,
          max: 4
        },
        animation: {
          count: 0,
          enable: true,
          speed: 5,
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
              value: 40
            },
            move: {
              speed: 1
            }
          }
        }
      }
    ],
    smooth: false,
    style: {},
    themes: [],
    zLayers: 100,
    emitters: [
      {
        autoPlay: true,
        fill: true,
        life: {
          wait: false
        },
        rate: {
          quantity: 1,
          delay: 8
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
            value: 25
          },
          move: {
            speed: 6,
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
              speed: 8,
              sync: false
            }
          },
          opacity: {
            value: 0.8
          }
        },
        position: {
          x: -5,
          y: 35
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