
import React, { useState, useEffect } from 'react';

const MouseEffect: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    let movingTimeout: ReturnType<typeof setTimeout>;
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(movingTimeout);
    };
  }, []);
  
  return (
    <div 
      className="pointer-events-none fixed z-30 w-[200px] h-[200px] rounded-full bg-gradient-to-r from-ghibli-blue/10 to-ghibli-green/10 blur-xl"
      style={{
        left: `${mousePosition.x}px`,
        top: `${mousePosition.y}px`,
        transform: 'translate(-50%, -50%)',
        transition: 'transform 0.1s ease',
      }}
    />
  );
};

export default MouseEffect;
