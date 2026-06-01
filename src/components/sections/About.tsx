import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../../config/portfolioData";
import { Award, BookOpen, BrainCircuit, CodeXml } from "lucide-react";
import heroImage from "../../assets/hero.png";

export const About: React.FC = () => {
  const { aboutSummary, stats } = portfolioData.personalInfo;

  const getIcon = (index: number) => {
    switch (index) {
      case 0: return <CodeXml className="text-cyber-blue" size={24} />;
      case 1: return <BookOpen className="text-cyber-cyan" size={24} />;
      case 2: return <Award className="text-cyber-pink" size={24} />;
      case 3: return <BrainCircuit className="text-cyber-purple" size={24} />;
      default: return <CodeXml className="text-cyber-blue" size={24} />;
    }
  };

  return (
    <section id="about" className="relative py-24 overflow-hidden border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[450px] rounded-full bg-cyber-purple/5 opacity-30 blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10">

        {/* Section Heading */}
        <div className="text-center mb-16 overflow-hidden">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-orbitron text-xs font-bold tracking-widest text-cyber-blue uppercase mb-2"
          >
            // DISCOVER MY BACKGROUND
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-orbitron text-3xl md:text-5xl font-extrabold text-white"
          >
            ABOUT <span className="bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent">ME</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left: Photo */}
          <motion.div
            initial={{ opacity: 0, x: -60, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 hidden lg:flex justify-center w-full"
          >
            <div className="relative group">
              <div className="absolute -inset-[3px] rounded-2xl bg-gradient-to-br from-cyber-blue via-cyber-purple to-cyber-pink opacity-60 blur-sm group-hover:opacity-100 group-hover:blur-md transition-all duration-700" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(0,242,254,0.15)]">
                <img src={heroImage} alt="Kishor S" className="w-64 md:w-72 object-cover object-top" style={{ aspectRatio: "0.47 / 1" }} />
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-bg/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyber-blue to-transparent shadow-[0_0_10px_#00f2fe] animate-bounce pointer-events-none" style={{ animationDuration: "3s" }} />
                <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-cyber-bg/70 backdrop-blur-sm border-t border-cyber-blue/20">
                  <p className="font-orbitron text-[10px] font-bold tracking-widest text-cyber-blue text-center">KISHOR S // CSBS</p>
                </div>
              </div>
              <div className="absolute -top-1 -left-1 w-3 h-3 rounded-full bg-cyber-blue shadow-[0_0_8px_#00f2fe]" />
              <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-cyber-purple shadow-[0_0_8px_#8a2be2]" />
              <div className="absolute -bottom-1 -left-1 w-3 h-3 rounded-full bg-cyber-pink shadow-[0_0_8px_#ff007f]" />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-cyber-cyan shadow-[0_0_8px_#00ffff]" />
            </div>
          </motion.div>

          {/* Right: Content */}
          <div className="col-span-1 lg:col-span-8 flex flex-col">
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="glass-panel rounded-xl p-8 mb-10 border border-white/5 bg-cyber-card backdrop-blur-md"
            >
              <h4 className="font-orbitron text-lg font-bold text-white mb-4 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-cyber-blue shadow-[0_0_8px_#00f2fe]" />
                B.TECH STUDENT IN CSBS
              </h4>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6 font-outfit">{aboutSummary}</p>
              <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-400">
                <span className="px-3 py-1 rounded bg-white/5 border border-white/5">INSTITUTION: Sri Eshwar College of Engineering</span>
                <span className="px-3 py-1 rounded bg-white/5 border border-white/5">BATCH: 2023 - 2027</span>
                <span className="px-3 py-1 rounded bg-white/5 border border-white/5">CGPA: 8.04</span>
              </div>
            </motion.div>

            {/* Stats cards — staggered */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -5 }}
                  className="glass-panel rounded-xl p-6 border border-white/5 bg-cyber-card flex flex-col items-center text-center cursor-pointer relative group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyber-blue/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  <div className="mb-4 p-3 rounded-lg bg-white/5 border border-white/5 group-hover:scale-110 transition-transform">{getIcon(idx)}</div>
                  <span className="font-orbitron text-3xl font-extrabold text-white tracking-tight mb-1">{stat.value}</span>
                  <span className="font-orbitron text-[10px] font-bold tracking-widest text-slate-400 uppercase">{stat.label}</span>
                  {(stat.rating || stat.subtitle) && (
                    <span className="text-[10px] text-cyber-blue mt-2 font-mono">{stat.rating || stat.subtitle}</span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

