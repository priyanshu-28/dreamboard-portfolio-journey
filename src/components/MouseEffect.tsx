
import React, { useState, useEffect } from 'react';

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
  );
};

export default MouseEffect;
