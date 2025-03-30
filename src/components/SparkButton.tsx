
import React, { useState } from 'react';

interface SparkButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const SparkButton: React.FC<SparkButtonProps> = ({ children, onClick, className = '' }) => {
  const [sparks, setSparks] = useState<{ id: number; left: string; top: string }[]>([]);
  
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    
    // Get the position relative to the button
    const relativeX = e.clientX - rect.left;
    const relativeY = e.clientY - rect.top;
    
    // Create 5 sparks at random offsets from the click position
    const newSparks = Array.from({ length: 5 }).map((_, index) => {
      const offsetX = Math.random() * 20 - 10; // Random offset between -10px and 10px
      const offsetY = Math.random() * 20 - 10;
      
      return {
        id: Date.now() + index,
        left: `${relativeX + offsetX}px`,
        top: `${relativeY + offsetY}px`,
      };
    });
    
    setSparks([...sparks, ...newSparks]);
    
    // Remove the sparks after animation completes
    setTimeout(() => {
      setSparks(currentSparks => currentSparks.filter(spark => !newSparks.includes(spark)));
    }, 700); // Match the animation duration
    
    if (onClick) onClick();
  };
  
  return (
    <button 
      onClick={handleClick}
      className={`relative overflow-hidden spark-container ${className}`}
    >
      {children}
      {sparks.map(spark => (
        <div
          key={spark.id}
          className="spark"
          style={{
            left: spark.left,
            top: spark.top,
          }}
        />
      ))}
    </button>
  );
};

export default SparkButton;
