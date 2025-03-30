import React, { useEffect, useRef } from 'react';

const TerrainBackground = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const entitiesRef = useRef([]);

  // Terrain class
  class Terrain {
    constructor(options, width, height) {
      options = options || {};
      this.canvas = document.createElement('canvas');
      this.ctx = this.canvas.getContext('2d');
      this.scrollDelay = options.scrollDelay || 90;
      this.lastScroll = Date.now();
      this._width = width; // Changed from const to property
      this._height = height; // Changed from const to property

      this.canvas.width = width;
      this.canvas.height = height;
      this.fillStyle = options.fillStyle || "#191D4C";
      this.mHeight = options.mHeight || height;
      this.displacement = options.displacement || 140; // Added as property

      // generate terrain points
      this.points = [];
      const power = Math.pow(2, Math.ceil(Math.log(width) / Math.log(2)));

      this.points[0] = this.mHeight;
      this.points[power] = this.points[0];

      // create terrain points using midpoint displacement
      let currentDisplacement = this.displacement; // Use let instead of const
      for (let i = 1; i < power; i *= 2) {
        for (let j = (power / i) / 2; j < power; j += power / i) {
          this.points[j] = ((this.points[j - (power / i) / 2] + 
                           this.points[j + (power / i) / 2]) / 2) + 
                           Math.floor(Math.random() * -currentDisplacement + currentDisplacement);
        }
        currentDisplacement *= 0.6;
      }
    }

    update() {
      this.ctx.clearRect(0, 0, this._width, this._height);
      this.ctx.fillStyle = this.fillStyle;
      
      if (Date.now() > this.lastScroll + this.scrollDelay) {
        this.lastScroll = Date.now();
        this.points.push(this.points.shift());
      }

      this.ctx.beginPath();
      for (let i = 0; i <= this._width; i++) {
        if (i === 0) {
          this.ctx.moveTo(0, this.points[0]);
        } else if (this.points[i] !== undefined) {
          this.ctx.lineTo(i, this.points[i]);
        }
      }

      this.ctx.lineTo(this._width, this._height);
      this.ctx.lineTo(0, this._height);
      this.ctx.lineTo(0, this.points[0]);
      this.ctx.fill();
    }
  }

  // Star class
  class Star {
    constructor(options, width, height) {
      this.width = width;
      this.height = height;
      this.size = Math.random() * 2;
      this.speed = Math.random() * 0.05;
      this.x = options.x;
      this.y = options.y;
    }

    reset() {
      this.size = Math.random() * 2;
      this.speed = Math.random() * 0.05;
      this.x = this.width;
      this.y = Math.random() * this.height;
    }

    update(ctx) {
      this.x -= this.speed;
      if (this.x < 0) {
        this.reset();
      } else {
        ctx.fillRect(this.x, this.y, this.size, this.size);
      }
    }
  }

  // ShootingStar class
  class ShootingStar {
    constructor(width, height) {
      this.width = width;
      this.height = height;
      this.reset();
    }

    reset() {
      this.x = Math.random() * this.width;
      this.y = 0;
      this.len = (Math.random() * 80) + 10;
      this.speed = (Math.random() * 10) + 6;
      this.size = (Math.random() * 1) + 0.1;
      this.waitTime = Date.now() + (Math.random() * 3000) + 500;
      this.active = false;
    }

    update(ctx) {
      if (this.active) {
        this.x -= this.speed;
        this.y += this.speed;
        if (this.x < 0 || this.y >= this.height) {
          this.reset();
        } else {
          ctx.lineWidth = this.size;
          ctx.beginPath();
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(this.x + this.len, this.y - this.len);
          ctx.stroke();
        }
      } else {
        if (this.waitTime < Date.now()) {
          this.active = true;
        }
      }
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const width = window.innerWidth;
    const height = Math.max(document.body.offsetHeight, 400);
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');

    // Initialize entities
    const entities = [];

    // Create stars
    for (let i = 0; i < height; i++) {
      entities.push(new Star({
        x: Math.random() * width,
        y: Math.random() * height
      }, width, height));
    }

    // Add shooting stars
    entities.push(new ShootingStar(width, height));
    entities.push(new ShootingStar(width, height));

    // Add terrain layers
    entities.push(new Terrain({ mHeight: (height/2)-120 }, width, height));
    entities.push(new Terrain({
      displacement: 120,
      scrollDelay: 50,
      fillStyle: "rgb(17,20,40)",
      mHeight: (height/2)-60
    }, width, height));
    entities.push(new Terrain({
      displacement: 100,
      scrollDelay: 20,
      fillStyle: "rgb(10,10,5)",
      mHeight: height/2
    }, width, height));

    entitiesRef.current = entities;

    // Animation loop
    const animate = () => {
      ctx.fillStyle = '#110E19';
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = '#ffffff';
      ctx.strokeStyle = '#ffffff';

      entitiesRef.current.forEach(entity => {
        if (entity.update.length === 1) {
          entity.update(ctx);
        } else {
          entity.update();
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    // Handle resize
    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = Math.max(document.body.offsetHeight, 400);
      
      if (canvas) {
        canvas.width = newWidth;
        canvas.height = newHeight;
        
        // Update dimensions for all entities
        entitiesRef.current.forEach(entity => {
          if (entity.width !== undefined) entity.width = newWidth;
          if (entity.height !== undefined) entity.height = newHeight;
          
          // Reset terrains
          if (entity instanceof Terrain) {
            const options = {
              displacement: entity.displacement,
              scrollDelay: entity.scrollDelay,
              fillStyle: entity.fillStyle,
              mHeight: entity.mHeight
            };
            const newTerrain = new Terrain(options, newWidth, newHeight);
            Object.assign(entity, newTerrain);
          }
        });
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1
      }}
    />
  );
};

export default TerrainBackground;