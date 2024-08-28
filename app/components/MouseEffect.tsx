"use client";

import { useEffect, useState } from 'react';

const MouseEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({
        x: e.clientX - 10, 
        y: e.clientY - 10,
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: position.y,
        left: position.x,
        width: '20px',   
        height: '20px',  
        borderRadius: '50%',
        background: 'black',
        pointerEvents: 'none',
        zIndex: 1000,
        boxShadow: '0 0 10px rgba(0, 255, 0, 0.7)', 
        filter: 'drop-shadow(0 0 6px rgba(0, 255, 0, 0.5))', 
      }}
    />
  );
};

export default MouseEffect;
