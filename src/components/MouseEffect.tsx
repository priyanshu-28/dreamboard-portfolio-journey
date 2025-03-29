import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const MouseEffect: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  
  useEffect(() => {
    let movingTimeout: ReturnType<typeof setTimeout>; // Declare the variable first
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsMoving(true);
      
      // Reset the moving state after a delay
      clearTimeout(movingTimeout);
      movingTimeout = setTimeout(() => {
        setIsMoving(false);
      }, 100);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(movingTimeout);
    };
  }, []);
  
  return (
    <>
      {/* Studio art style floating elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-30"
            style={{
              background: `radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, rgba(139, 92, 246, 0) 70%)`,
              width: `${Math.random() * 50 + 30}px`,
              height: `${Math.random() * 50 + 30}px`,
              left: `${Math.random() * 100}vw`,
              top: `${Math.random() * 100}vh`,
            }}
            animate={{
              x: [0, Math.random() * 40 - 20],
              y: [0, Math.random() * 40 - 20],
              scale: [1, Math.random() * 0.5 + 0.8, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      {/* Mouse glow effect - keeping this one */}
      <div 
        className="glow-effect fixed pointer-events-none z-30"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(139, 92, 246, 0) 70%)',
          transform: 'translate(-50%, -50%)',
          opacity: isMoving ? 0.8 : 0.4,
          transition: 'opacity 0.3s ease'
        }}
      />
    </>
  );
};

export default MouseEffect;
