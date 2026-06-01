import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code, Mail } from "lucide-react";
import { portfolioData } from "../../config/portfolioData";

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

interface NavbarProps {
  activeSection: string;
}

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Achievements", id: "achievements" },
  { label: "Education", id: "education" },
  { label: "Contact", id: "contact" }
];

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Background dark-fill toggle on scroll
      setIsScrolled(window.scrollY > 20);

      // Math for page progress bar
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      // Seamless scrolling offset
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? "bg-[#030014]/80 backdrop-blur-md border-b border-white/5 py-3" 
          : "bg-transparent py-5"
      }`}
    >
      {/* Top Scrolling Progress Indicator */}
      <div className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-cyber-blue via-cyber-cyan to-cyber-purple transition-all duration-75" style={{ width: `${scrollProgress}%` }} />

      <div className="mx-auto max-w-7xl px-6 md:px-8 flex items-center justify-between">
        {/* Logo Branding */}
        <button
          onClick={() => scrollToSection("home")}
          className="group flex items-center gap-2 font-orbitron text-xl font-black tracking-wider text-white"
        >
          <span className="relative flex h-8 w-8 items-center justify-center rounded bg-gradient-to-br from-cyber-blue to-cyber-purple font-extrabold text-sm text-white">
            KS
            <span className="absolute -inset-[2px] rounded bg-gradient-to-br from-cyber-blue to-cyber-purple opacity-30 blur-sm group-hover:opacity-75 transition-opacity" />
          </span>
          <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent group-hover:glow-text-cyan transition-all">
            KISHOR<span className="text-cyber-blue">.S</span>
          </span>
        </button>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-1 font-orbitron text-xs font-semibold tracking-widest text-slate-400">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative px-4 py-2 hover:text-white transition-colors duration-200 ${
                activeSection === item.id ? "text-cyber-blue" : ""
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute bottom-0 left-4 right-4 h-[2px] bg-cyber-blue shadow-[0_0_8px_#00f2fe]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4 text-slate-400">
          <a
            href={portfolioData.personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyber-blue hover:scale-110 transition-all duration-200"
            title="GitHub"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={portfolioData.personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyber-blue hover:scale-110 transition-all duration-200"
            title="LinkedIn"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href={portfolioData.personalInfo.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyber-blue hover:scale-110 transition-all duration-200"
            title="LeetCode"
          >
            <Code size={18} />
          </a>
          <a
            href="https://mail.google.com/mail/u/0/?fs=1&to=kishorsakthinarayanan@gmail.com&tf=cm"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyber-blue hover:scale-110 transition-all duration-200"
            title="Email"
          >
            <Mail size={18} />
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-slate-300 hover:text-white transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Sliding Drawer Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-b border-white/5 bg-[#030014]/95 backdrop-blur-lg"
          >
            <div className="flex flex-col px-6 py-6 gap-4 font-orbitron text-[11px] font-bold tracking-widest text-slate-400">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left py-2 border-b border-white/5 hover:text-white ${
                    activeSection === item.id ? "text-cyber-blue font-extrabold" : ""
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="flex items-center gap-6 mt-4 pt-4 text-slate-400">
                <a href={portfolioData.personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-cyber-blue"><GithubIcon size={20} /></a>
                <a href={portfolioData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyber-blue"><LinkedinIcon size={20} /></a>
                <a href={portfolioData.personalInfo.leetcode} target="_blank" rel="noopener noreferrer" className="hover:text-cyber-blue"><Code size={20} /></a>
                <a href="https://mail.google.com/mail/u/0/?fs=1&to=kishorsakthinarayanan@gmail.com&tf=cm" target="_blank" rel="noopener noreferrer" className="hover:text-cyber-blue"><Mail size={20} /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

