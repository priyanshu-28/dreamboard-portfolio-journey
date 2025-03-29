
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const MouseEffect: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsMoving(true);
      
      // Reset the moving state after a delay
      clearTimeout(movingTimeout);
      const movingTimeout = setTimeout(() => {
        setIsMoving(false);
      }, 100);
    };
    
    let movingTimeout: ReturnType<typeof setTimeout>;
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(movingTimeout);
    };
  }, []);
  
  return (
    <>
      <motion.div 
        className="fixed top-0 left-0 w-[50px] h-[50px] rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 25,
          y: mousePosition.y - 25,
          scale: isMoving ? 0.5 : 1
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1
        }}
        style={{ 
          background: 'rgba(255, 255, 255, 0.25)',
          border: '1px solid rgba(255, 255, 255, 0.3)'
        }}
      />
      
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-primary rounded-full pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 20
        }}
      />
      
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
