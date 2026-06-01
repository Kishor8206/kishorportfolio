import React, { useState, useEffect } from "react";
import { LoadingScreen } from "./components/ui/LoadingScreen";
import { CursorGlow } from "./components/ui/CursorGlow";
import { ParticleBackground } from "./components/canvas/ParticleBackground";
import { Navbar } from "./components/sections/Navbar";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Projects } from "./components/sections/Projects";
import { Experience } from "./components/sections/Experience";
import { Achievements } from "./components/sections/Achievements";
import { Education } from "./components/sections/Education";
import { Contact } from "./components/sections/Contact";
import { Cpu, Copyright } from "lucide-react";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  // Track scroll position to update active navbar section
  useEffect(() => {
    if (isLoading) return;

    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "experience", "achievements", "education", "contact"];
      const scrollPosition = window.scrollY + 250; // Offset trigger boundary

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Execute once initially to set starting active tab
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading]);

  return (
    <div className="relative min-h-screen bg-cyber-bg text-slate-100 overflow-x-hidden selection:bg-cyber-blue/30 selection:text-white">
      {/* Scans & Loading Screens */}
      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <>
          {/* Immersive 3D Interactive Canvas Particle Swarm */}
          <ParticleBackground />

          {/* Mouse Ambient Halo Glow Tracking Layer */}
          <CursorGlow />

          {/* Core Navigation Bar */}
          <Navbar activeSection={activeSection} />

          {/* Content Sections */}
          <main className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Achievements />
            <Education />
            <Contact />
          </main>

          {/* Futuristic Cyber Footer */}
          <footer className="relative z-10 border-t border-white/5 bg-[#030014]/65 backdrop-blur-md py-12">
            <div className="mx-auto max-w-7xl px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6 font-orbitron text-[10px] tracking-widest text-slate-500">
              
              {/* Left Side: Brand Copyright info */}
              <div className="flex items-center gap-2">
                <Copyright size={12} />
                <span>{new Date().getFullYear()} KISHOR S. ALL SHIELD RIGHTS RESERVED.</span>
              </div>

              {/* Center Status Indicators */}
              <div className="flex items-center gap-3">
                <Cpu size={12} className="text-cyber-cyan animate-pulse" />
                <span>STATUS: ONLINE // SECURITY: SECURE</span>
              </div>

              {/* Right Side: Design Tech metadata */}
              <div className="flex items-center gap-2">
                <span>ENGINE: REACT + VITE + TAILWIND</span>
              </div>
            </div>
          </footer>
        </>
      )}
    </div>
  );
};

export default App;
