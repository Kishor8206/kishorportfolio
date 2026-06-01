import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { portfolioData } from "../../config/portfolioData";
import { GraduationCap, Landmark, ChevronRight } from "lucide-react";

export const Education: React.FC = () => {
  const { education } = portfolioData;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.18, delayChildren: 0.1 }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, x: -50, scale: 0.96 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="education" className="relative py-24 overflow-hidden border-t border-white/5 bg-[#030014]/20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[450px] rounded-full bg-cyber-blue/5 opacity-20 blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-4xl px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="font-orbitron text-xs font-bold tracking-widest text-cyber-blue uppercase mb-2"
          >
            // ACADEMIC HISTORY PATHWAY
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-orbitron text-3xl md:text-5xl font-extrabold text-white"
          >
            EDUCATION <span className="bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent">JOURNEY</span>
          </motion.h3>
        </div>

        {/* Timeline Stack */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className="space-y-8 relative"
        >
          {education.map((item, idx) => (
            <motion.div
              key={item.institution + idx}
              variants={cardVariants}
              whileHover={{ x: 6 }}
              className="glass-panel rounded-xl p-8 border border-white/5 bg-cyber-card flex flex-col md:flex-row items-start md:items-center justify-between gap-6 cursor-pointer relative group"
            >
              {/* Highlight left glowing border line */}
              <div className="absolute top-0 bottom-0 left-0 w-[4px] rounded-l bg-gradient-to-b from-cyber-blue to-cyber-purple opacity-30 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-start gap-5">
                {/* Institution Icon */}
                <div className="p-3.5 rounded bg-white/5 border border-white/5 text-cyber-blue group-hover:scale-110 transition-transform">
                  {idx === 0 ? <GraduationCap size={24} /> : <Landmark size={24} />}
                </div>

                {/* Main Copy */}
                <div>
                  <span className="font-orbitron text-[9px] font-bold text-cyber-cyan tracking-widest uppercase mb-1 block">
                    {item.date}
                  </span>
                  <h4 className="font-orbitron text-base md:text-lg font-bold text-white tracking-wide group-hover:text-cyber-blue transition-colors">
                    {item.degree}
                  </h4>
                  <h5 className="font-orbitron text-xs font-semibold text-slate-400 mt-1 uppercase">
                    {item.institution}
                  </h5>
                  {item.details && (
                    <p className="text-slate-400 text-xs md:text-sm font-outfit mt-4 leading-relaxed max-w-xl">
                      {item.details}
                    </p>
                  )}
                </div>
              </div>

              {/* Scoring Badge widget */}
              <div className="flex flex-col items-end shrink-0 pl-14 md:pl-0">
                <span className="px-4 py-2 rounded bg-cyber-blue/10 border border-cyber-blue/20 text-xs font-mono text-cyber-blue font-bold tracking-widest shadow-[0_0_12px_rgba(0,242,254,0.1)] group-hover:bg-cyber-blue group-hover:text-[#030014] transition-colors">
                  {item.score}
                </span>
                
                <span className="text-[9px] font-mono text-slate-500 mt-3 flex items-center gap-1">
                  TRANSCRIPT VERIFIED
                  <ChevronRight size={10} />
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

