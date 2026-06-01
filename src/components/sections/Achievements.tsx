import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../../config/portfolioData";
import { Award, Trophy, Star, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

export const Achievements: React.FC = () => {
  const { achievements } = portfolioData;

  const triggerConfetti = () => {
    // High-end double-burst celebration confetti effect
    const duration = 2 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#00f2fe", "#8a2be2", "#ff007f"]
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#00f2fe", "#8a2be2", "#ff007f"]
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  };

  return (
    <section id="achievements" className="relative py-24 overflow-hidden border-t border-white/5 bg-[#030014]/30">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[450px] rounded-full bg-cyber-blue/5 opacity-20 blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="font-orbitron text-xs font-bold tracking-widest text-cyber-blue uppercase mb-2"
          >
            // MILESTONES & RECOGNITIONS
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-orbitron text-3xl md:text-5xl font-extrabold text-white"
          >
            HONORS & <span className="bg-gradient-to-r from-cyber-blue via-cyber-cyan to-cyber-purple bg-clip-text text-transparent">AWARDS</span>
          </motion.h3>
        </div>

        {/* Achievements Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 60, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false }}
              transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              onClick={triggerConfetti}
              className="glass-panel-neon rounded-xl p-8 border border-white/5 bg-cyber-card flex flex-col justify-between cursor-pointer relative group overflow-hidden"
            >
              {/* Highlight background overlays */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyber-blue/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div>
                {/* Floating Badge */}
                <div className="flex items-center justify-between mb-8">
                  <div className="p-3 rounded bg-white/5 border border-white/5 group-hover:scale-110 transition-transform">
                    {idx === 0 ? (
                      <Star className="text-cyber-cyan" size={22} />
                    ) : idx === 1 || idx === 2 || idx === 3 ? (
                      <Trophy className="text-cyber-blue animate-float" size={22} />
                    ) : (
                      <Award className="text-cyber-pink" size={22} />
                    )}
                  </div>
                  
                  {item.badge && (
                    <span className="px-3 py-1 rounded bg-cyber-blue/10 border border-cyber-blue/20 text-[9px] font-mono text-cyber-blue font-bold tracking-widest uppercase">
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Achievement Header */}
                <h4 className="font-orbitron text-base font-bold text-white mb-2 tracking-wide group-hover:text-cyber-blue transition-colors">
                  {item.title}
                </h4>
                <p className="text-slate-400 text-xs md:text-sm font-outfit leading-relaxed">
                  {item.detail}
                </p>
              </div>

              {/* Bottom trigger notification indicator */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between font-mono text-[9px] text-slate-500">
                <span className="flex items-center gap-1">
                  <Sparkles size={10} className="text-cyber-cyan" />
                  CLICK TO CELEBRATE
                </span>
                <span>{item.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

