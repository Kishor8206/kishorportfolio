import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

const loadingTexts = [
  "INITIALIZING QUANTUM GRID...",
  "CONNECTING DATABASE NODES...",
  "RENDERING 3D WORKSPACE SCENE...",
  "DECRYPTING PORTFOLIO ACCESS...",
  "WELCOME USER: KISHOR S"
];

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    // Increment progress bar
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        // Random progress step sizes to look realistic
        const step = Math.floor(Math.random() * 8) + 2;
        return Math.min(prev + step, 100);
      });
    }, 100);

    // Swap scanning labels
    const textInterval = setInterval(() => {
      setTextIndex((prev) => (prev < loadingTexts.length - 1 ? prev + 1 : prev));
    }, 1800);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const delay = setTimeout(() => {
        onComplete();
      }, 1000);
      return () => clearTimeout(delay);
    }
  }, [progress, onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030014]"
        exit={{ 
          opacity: 0,
          y: -100,
          transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
        }}
      >
        {/* Futuristic Background grid lines */}
        <div className="cyber-grid absolute inset-0 opacity-10" />

        {/* Floating background lights */}
        <div className="absolute top-1/4 left-1/4 h-[300px] w-[300px] rounded-full bg-cyber-purple opacity-20 blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 h-[300px] w-[300px] rounded-full bg-cyber-blue opacity-10 blur-[120px] animate-pulse-glow" style={{ animationDelay: "1s" }} />

        <div className="relative flex flex-col items-center max-w-md w-full px-8">
          {/* Neon Initials Logo Grid */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative mb-12 flex h-28 w-28 items-center justify-center"
          >
            {/* Pulsing Hexagon Border */}
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100">
              <motion.polygon
                points="50,3 93,28 93,78 50,97 7,78 7,28"
                fill="transparent"
                stroke="url(#neon-grad)"
                strokeWidth="2.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
              />
              <defs>
                <linearGradient id="neon-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00f2fe" />
                  <stop offset="100%" stopColor="#8a2be2" />
                </linearGradient>
              </defs>
            </svg>

            {/* Glowing Text Logo */}
            <span className="font-orbitron text-3xl font-extrabold tracking-widest text-white glow-text-cyan">
              KS
            </span>
          </motion.div>

          {/* Loader bar */}
          <div className="relative h-[4px] w-full rounded-full bg-white/5 overflow-hidden">
            <motion.div
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-cyber-blue via-cyber-cyan to-cyber-purple"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>

          {/* Statistics display */}
          <div className="mt-6 flex w-full items-center justify-between font-orbitron text-xs tracking-wider text-slate-400">
            <motion.span
              key={textIndex}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="glow-text-cyan uppercase"
            >
              {loadingTexts[textIndex]}
            </motion.span>
            <span>{progress}%</span>
          </div>

          {/* Tiny details box */}
          <div className="absolute bottom-[-150px] font-mono text-[9px] text-slate-600 tracking-tight text-center leading-relaxed">
            SYSTEM STATUS: SECURE // PORTS ACTIVE // WEBGL 2.0 ENABLED<br />
            LATENCY: 12ms // FRAMEBUFFER SECURE // DEEP LEARNING MODEL LOADED
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
