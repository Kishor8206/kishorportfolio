import React, { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    VANTA: any;
    THREE: any;
  }
}

export const ParticleBackground: React.FC = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);

  // Check WebGL availability
  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const support = !!(
        window.WebGLRenderingContext &&
        (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
      );
      setHasWebGL(support);
    } catch {
      setHasWebGL(false);
    }
  }, []);

  useEffect(() => {
    if (!hasWebGL) return;

    let effectInstance: any = null;
    let intervalId: ReturnType<typeof setInterval> | null = null;

    const initVanta = () => {
      if (window.VANTA && window.VANTA.NET && vantaRef.current) {
        try {
          effectInstance = window.VANTA.NET({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x70a0ff,       // Blue-violet net lines
            backgroundColor: 0x2c, // Near-black background
            points: 12.00,
            maxDistance: 19.00,
            spacing: 16.00,
          });
        } catch (err) {
          console.error("Vanta.js initialization error:", err);
        }
      }
    };

    // Poll until CDN scripts are ready
    if (window.VANTA?.NET) {
      initVanta();
    } else {
      intervalId = setInterval(() => {
        if (window.VANTA?.NET) {
          initVanta();
          clearInterval(intervalId!);
        }
      }, 100);
    }

    const handleResize = () => {
      if (effectInstance && typeof effectInstance.resize === "function") {
        effectInstance.resize();
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      effectInstance?.destroy();
      if (intervalId) clearInterval(intervalId);
      window.removeEventListener("resize", handleResize);
    };
  }, [hasWebGL]);

  if (!hasWebGL) {
    // CSS fallback when WebGL is unavailable
    return (
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#02020c]">
        <div className="absolute top-[20%] left-[30%] w-2 h-2 rounded-full bg-cyber-blue opacity-30 shadow-[0_0_15px_#00f2fe] animate-float" />
        <div className="absolute top-[60%] right-[20%] w-3 h-3 rounded-full bg-cyber-purple opacity-20 shadow-[0_0_20px_#8a2be2] animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-[20%] left-[15%] w-1.5 h-1.5 rounded-full bg-cyber-pink opacity-35 shadow-[0_0_10px_#ff007f] animate-float" style={{ animationDelay: "4s" }} />
        <div className="cyber-grid absolute inset-0 opacity-10" />
      </div>
    );
  }

  return (
    // fixed + inset-0 ensures the canvas covers the full viewport at all scroll depths
    <div
      ref={vantaRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ width: "100vw", height: "100vh" }}
    >
      {/* Subtle cyber grid overlay */}
      <div className="cyber-grid absolute inset-0 opacity-[0.08] pointer-events-none" />
    </div>
  );
};
