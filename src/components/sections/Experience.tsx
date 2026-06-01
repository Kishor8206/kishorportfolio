import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../../config/portfolioData";
import { Briefcase, Calendar } from "lucide-react";

export const Experience: React.FC = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="relative py-24 overflow-hidden border-t border-white/5 bg-[#030014]/10">
      <div className="absolute top-1/4 left-1/4 h-[350px] w-[350px] rounded-full bg-cyber-purple/5 opacity-25 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-5xl px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="font-orbitron text-xs font-bold tracking-widest text-cyber-blue uppercase mb-2"
          >
            // PROFESSIONAL DEVELOPMENT CYCLES
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-orbitron text-3xl md:text-5xl font-extrabold text-white"
          >
            WORK <span className="bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent">EXPERIENCE</span>
          </motion.h3>
        </div>

        {/* Timeline Path Structure */}
        <div className="relative">
          {/* Vertical central path line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyber-blue via-cyber-purple to-transparent opacity-30 transform -translate-x-1/2 hidden md:block" />
          <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyber-blue via-cyber-purple to-transparent opacity-30 transform -translate-x-1/2 md:hidden" />

          {/* Internship cards mapper */}
          <div className="space-y-16">
            {experience.map((job, idx) => {
              const isEven = idx % 2 === 0;
              
              const glowTheme = job.glowColor === "cyan" 
                ? "border-cyber-blue/30 shadow-[0_0_15px_rgba(0,242,254,0.08)] hover:border-cyber-blue/60" 
                : job.glowColor === "purple"
                ? "border-cyber-purple/30 shadow-[0_0_15px_rgba(138,43,226,0.08)] hover:border-cyber-purple/60"
                : "border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.08)] hover:border-blue-500/60";

              const textGlow = job.glowColor === "cyan" 
                ? "text-cyber-blue" 
                : job.glowColor === "purple"
                ? "text-cyber-purple"
                : "text-blue-400";

              return (
                <div key={job.role + idx} className="relative flex flex-col md:flex-row md:items-center">
                  
                  {/* Glowing Node Dot on the timeline */}
                  <div className="absolute left-4 md:left-1/2 top-6 md:top-1/2 h-5 w-5 rounded-full bg-cyber-dark border-2 border-cyber-blue transform -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-cyber-cyan animate-ping" />
                  </div>

                  {/* Left Side date */}
                  <div className={`hidden md:block w-1/2 ${isEven ? "pr-12 text-right" : "order-2 pl-12"}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <span className="font-orbitron text-xs font-bold text-slate-500 flex items-center justify-end gap-2">
                        <Calendar size={13} />
                        {job.date.toUpperCase()}
                      </span>
                    </motion.div>
                  </div>

                  {/* Card */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? "md:pl-12" : "md:order-1 md:pr-12"}`}>
                    <motion.div
                      initial={{ opacity: 0, y: 50, scale: 0.95 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false }}
                      transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                      whileHover={{ y: -4 }}
                      className={`glass-panel rounded-xl p-8 border bg-cyber-card ${glowTheme} transition-all`}
                    >
                      <span className="font-orbitron text-[10px] font-bold text-slate-500 flex items-center gap-1.5 mb-3 md:hidden">
                        <Calendar size={12} />
                        {job.date.toUpperCase()}
                      </span>
                      <h4 className="font-orbitron text-base md:text-lg font-bold text-white mb-1 flex items-center gap-2">
                        <Briefcase size={16} className={textGlow} />
                        {job.role}
                      </h4>
                      <h5 className="font-orbitron text-xs font-bold text-slate-400 mb-4 uppercase tracking-widest">
                        {job.company}
                      </h5>
                      <p className="text-slate-300 text-xs md:text-sm font-outfit leading-relaxed mb-6">
                        {job.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                        {job.technologies.map((tech) => (
                          <span key={tech} className="px-2.5 py-0.5 rounded bg-white/5 border border-white/5 text-[9px] font-mono text-slate-400">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

