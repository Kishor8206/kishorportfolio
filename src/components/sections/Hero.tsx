import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Mail, ChevronRight, FileText } from "lucide-react";
import { portfolioData } from "../../config/portfolioData";
import { WorkspaceScene } from "../canvas/WorkspaceScene";

const GithubIcon: React.FC<{ size?: number; className?: string }> = ({ size = 18, className }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon: React.FC<{ size?: number; className?: string }> = ({ size = 18, className }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const Hero: React.FC = () => {
  const { name, titles, github, linkedin, leetcode, resumeUrl } = portfolioData.personalInfo;
  
  // Cycling subtitle indexes
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [titles.length]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Absolute Ambient Neon Glow Blobs */}
      <div className="absolute top-1/4 left-1/4 h-[350px] w-[350px] rounded-full bg-cyber-blue opacity-15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 h-[350px] w-[350px] rounded-full bg-cyber-purple opacity-20 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 md:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Copywriting & Branding Info */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          
          {/* Cybernetic Greeting Tag */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyber-blue/30 bg-cyber-blue/5 text-[10px] font-bold tracking-widest text-cyber-blue font-orbitron uppercase"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-blue"></span>
            </span>
            SYSTEM ACCESS ACTIVE // SECURE_COMM
          </motion.div>

          {/* Large Title name with neon text highlights */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-orbitron text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-2"
          >
            I'M <span className="bg-gradient-to-r from-cyber-blue via-cyber-cyan to-cyber-purple bg-clip-text text-transparent glow-text-cyan">{name}</span>
          </motion.h1>

          {/* Cycling sub-heading typing display */}
          <div className="h-10 md:h-12 mb-8 flex items-center font-orbitron text-lg md:text-2xl font-bold tracking-wider text-slate-400">
            <span className="mr-2 text-slate-500">//</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={titleIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="text-white border-r-2 border-cyber-blue pr-1"
              >
                {titles[titleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Subtext info */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-slate-400 text-sm md:text-base leading-relaxed max-w-xl mb-10 font-outfit"
          >
            Bridging the gap between{" "}
            <span className="text-white font-semibold">advanced engineering algorithms</span>{" "}
            and{" "}
            <span className="text-white font-semibold">business analytics systems</span>.
            Engineering high-performance full-stack applications with modular data pipelines.
          </motion.p>

          {/* Glowing CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <button
              onClick={() => scrollToSection("projects")}
              className="w-full sm:w-auto px-8 py-3.5 rounded bg-gradient-to-r from-cyber-blue to-cyber-purple font-orbitron text-xs font-bold tracking-widest text-white shadow-[0_0_20px_rgba(0,242,254,0.3)] hover:shadow-[0_0_35px_rgba(0,242,254,0.6)] hover:scale-[1.03] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              VIEW PROJECTS
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <a
              href={resumeUrl}
              className="w-full sm:w-auto px-8 py-3.5 rounded border border-white/10 hover:border-cyber-blue/50 bg-white/5 hover:bg-cyber-blue/10 font-orbitron text-xs font-bold tracking-widest text-white hover:scale-[1.03] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <FileText size={14} />
              DOWNLOAD RESUME
            </a>

            <button
              onClick={() => scrollToSection("contact")}
              className="w-full sm:w-auto px-8 py-3.5 rounded border border-cyber-purple/50 bg-cyber-purple/5 hover:bg-cyber-purple/20 font-orbitron text-xs font-bold tracking-widest text-white hover:scale-[1.03] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              CONTACT ME
            </button>
          </motion.div>

          {/* Floating animated social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="flex items-center justify-center lg:justify-start gap-6 mt-12 w-full text-slate-500 font-orbitron"
          >
            <span className="text-[10px] tracking-widest uppercase">Social Channels:</span>
            <div className="flex gap-4 text-slate-400">
              <a href={github} target="_blank" rel="noopener noreferrer" className="hover:text-cyber-blue hover:-translate-y-1 transition-all" title="GitHub"><GithubIcon size={18} /></a>
              <a href={linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyber-blue hover:-translate-y-1 transition-all" title="LinkedIn"><LinkedinIcon size={18} /></a>
              <a href={leetcode} target="_blank" rel="noopener noreferrer" className="hover:text-cyber-blue hover:-translate-y-1 transition-all" title="LeetCode"><Code size={18} /></a>
              <a href="https://mail.google.com/mail/u/0/?fs=1&to=kishorsakthinarayanan@gmail.com&tf=cm" target="_blank" rel="noopener noreferrer" className="hover:text-cyber-blue hover:-translate-y-1 transition-all" title="Email"><Mail size={18} /></a>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Large 3D canvas viewport workspace */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="lg:col-span-5 flex justify-center w-full"
        >
          <WorkspaceScene />
        </motion.div>
      </div>
    </section>
  );
};

