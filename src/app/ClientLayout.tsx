
"use client"; 

import React, { useEffect, useState, ReactNode } from 'react';
import AnimatedCursor from "react-animated-cursor";

interface ClientLayoutProps {
  children: ReactNode; 
}

const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  const [charmStyle, setCharmStyle] = useState({ top: 0, left: 0, opacity: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    setCharmStyle({ 
      top: e.clientY - 20, 
      left: e.clientX - 20, 
      opacity: 1 
    });
  };

  const handleMouseLeave = () => {
    setCharmStyle({ ...charmStyle, opacity: 0 });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="hidden md:block">
        <AnimatedCursor
          innerSize={8}
          outerSize={35}
          innerScale={2}
          outerScale={2}
          outerAlpha={0}
          innerStyle={{
            backgroundColor: "yellow",
          }}
          // outerStyle={{
          //   border: "3px solid white",
          // }}
        />
      </div>
      {children}
      
    </>
  );
};

export default ClientLayout;
