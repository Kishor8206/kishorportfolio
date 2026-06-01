import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CursorGlow: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  
  // High-performance cursor tracking using Framer Motion
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Smooth spring physics configuration
  const springConfig = { damping: 25, stiffness: 200, mass: 0.6 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    setMounted(true);
    
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 150); // Offset by half the glow width
      cursorY.set(e.clientY - 150);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY]);

  if (!mounted) return null;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30 hidden md:block"
      style={{
        left: cursorXSpring,
        top: cursorYSpring,
      }}
    >
      <div 
        className="h-[300px] w-[300px] rounded-full opacity-20 blur-[80px]"
        style={{
          background: "radial-gradient(circle, #00f2fe 0%, #8a2be2 50%, transparent 100%)",
        }}
      />
    </motion.div>
  );
};
