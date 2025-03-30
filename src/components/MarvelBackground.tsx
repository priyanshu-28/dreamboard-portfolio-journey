
import React, { useEffect, useRef } from 'react';

const MarvelBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    // Set canvas size
    canvas.width = width;
    canvas.height = height;
    
    // Particle settings
    const particleCount = 50;
    const particles: Array<{
      x: number;
      y: number; 
      size: number;
      speedX: number;
      speedY: number;
      color: string;
    }> = [];
    
    const colors = ['#ea384c', '#D946EF', '#F97316', '#0EA5E9'];
    
    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.8,
        speedY: (Math.random() - 0.5) * 0.8,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
    
    // Mouse position for interaction
    let mouseX = 0;
    let mouseY = 0;
    
    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });
    
    // Animation function
    const animate = () => {
      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, '#000000e6');
      gradient.addColorStop(1, '#0006');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
      
      // Draw comic style grid
      ctx.strokeStyle = 'rgba(234, 56, 76, 0.05)';
      ctx.lineWidth = 1;
      
      // Draw vertical lines
      for(let x = 0; x < width; x += 50) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      
      // Draw horizontal lines
      for(let y = 0; y < height; y += 50) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
      
      // Update and draw particles
      particles.forEach(particle => {
        // Calculate distance from mouse for interactive effect
        const dx = mouseX - particle.x;
        const dy = mouseY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          // Particles move away from cursor
          const angle = Math.atan2(dy, dx);
          const force = 0.2;
          particle.speedX -= Math.cos(angle) * force;
          particle.speedY -= Math.sin(angle) * force;
        }
        
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Apply friction
        particle.speedX *= 0.98;
        particle.speedY *= 0.98;
        
        // Boundary check
        if (particle.x < 0) particle.x = width;
        if (particle.x > width) particle.x = 0;
        if (particle.y < 0) particle.y = height;
        if (particle.y > height) particle.y = 0;
        
        // Draw particle
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });
      
      // Create glow effect around mouse
      const glow = ctx.createRadialGradient(
        mouseX, mouseY, 10,
        mouseX, mouseY, 100
      );
      
      glow.addColorStop(0, 'rgba(234, 56, 76, 0.2)');
      glow.addColorStop(1, 'rgba(234, 56, 76, 0)');
      
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    // Handle window resize
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
};

export default MarvelBackground;
