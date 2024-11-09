import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Star properties
    const stars: { x: number; y: number; z: number }[] = [];
    const numStars = 400;
    const speed = 2;
    const maxZ = 1000;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // Initialize stars with random positions
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: (Math.random() * canvas.width - centerX) * 2,
        y: (Math.random() * canvas.height - centerY) * 2,
        z: Math.random() * maxZ
      });
    }

    // Animation
    let animationFrameId: number;
    const animate = () => {
      ctx.fillStyle = 'rgb(15, 23, 42)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw stars
      stars.forEach(star => {
        // Move star closer (decrease z)
        star.z -= speed;

        // Reset star to far distance if it gets too close
        if (star.z <= 0) {
          star.z = maxZ;
          star.x = (Math.random() * canvas.width - centerX) * 2;
          star.y = (Math.random() * canvas.height - centerY) * 2;
        }

        // Project 3D position to 2D screen space with perspective
        const perspective = 300;
        const scale = perspective / (perspective + star.z);
        const x2d = centerX + star.x * scale;
        const y2d = centerY + star.y * scale;

        // Calculate star size based on distance
        const size = Math.max(0.5, 3 * (1 - star.z / maxZ));

        // Draw star with gradient
        const gradient = ctx.createRadialGradient(
          x2d, y2d, 0,
          x2d, y2d, size
        );
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x2d, y2d, size, 0, Math.PI * 2);
        ctx.fill();

        // Add streaks to stars that are closer
        if (star.z < maxZ / 2) {
          const streakLength = Math.min(20, (1 - star.z / maxZ) * 50);
          const streakGradient = ctx.createLinearGradient(
            x2d, y2d,
            x2d - (star.x * scale * 0.1), y2d - (star.y * scale * 0.1)
          );
          streakGradient.addColorStop(0, 'rgba(255, 255, 255, 0.3)');
          streakGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

          ctx.beginPath();
          ctx.strokeStyle = streakGradient;
          ctx.lineWidth = size / 2;
          ctx.moveTo(x2d, y2d);
          ctx.lineTo(
            x2d - (star.x * scale * 0.1) * streakLength / 20,
            y2d - (star.y * scale * 0.1) * streakLength / 20
          );
          ctx.stroke();
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
      
      <div className="relative z-10 w-full">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="mb-6">
              <span className="block text-white opacity-90">Transform Your</span>
              <span className="relative">
                <span className="block gradient-text mt-4 font-extrabold">
                  Brand Identity
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent-400 to-transparent"></div>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-200 max-w-2xl mx-auto mb-12 leading-relaxed">
              Create, collaborate, and maintain brand consistency across your entire organization.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/demo" className="w-full sm:w-auto">
                <button className="btn-primary group w-full relative overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center">
                    Book a Demo
                    <ArrowRight className="h-5 w-5 inline-block ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-400 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
              </Link>
              <Link to="/trial" className="w-full sm:w-auto">
                <button className="btn-secondary w-full">
                  Start Free Trial
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;