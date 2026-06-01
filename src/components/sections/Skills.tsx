import React from "react";
import { motion } from "framer-motion";

interface TechItem {
  name: string;
  bg: string;
  slug?: string;
  color?: string;
  icon?: React.ReactNode;
}

interface SoftSkill {
  name: string;
}

// ── Custom SVG icons ──────────────────────────────────────────────────────────
const VSCodeIcon = () => (
  <svg viewBox="0 0 100 100" className="w-4 h-4">
    <path fill="#fff" d="M74.9 7.4L50 32.3 25.5 11 7.4 19.6l24.2 30.4L7.4 80.4 25.5 89l24.5-21.3 24.9 24.9 18.1-8.6V16z"/>
    <path fill="#ffffffaa" d="M74.9 7.4v85.2L50 67.7 25.5 89 7.4 80.4l24.2-30.4L7.4 19.6 25.5 11 50 32.3z"/>
  </svg>
);

const PowerBIIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
    <rect x="2"  y="14" width="4" height="8"  rx="1" fill="#000"/>
    <rect x="8"  y="9"  width="4" height="13" rx="1" fill="#000"/>
    <rect x="14" y="4"  width="4" height="18" rx="1" fill="#000"/>
    <rect x="20" y="11" width="2" height="11" rx="1" fill="#000"/>
  </svg>
);

const TableauIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4">
    <rect x="11" y="2"  width="2" height="8"  fill="#fff"/>
    <rect x="11" y="14" width="2" height="8"  fill="#fff"/>
    <rect x="2"  y="11" width="8" height="2"  fill="#fff"/>
    <rect x="14" y="11" width="8" height="2"  fill="#fff"/>
    <rect x="7"  y="4"  width="2" height="5"  fill="#ffffffaa"/>
    <rect x="15" y="15" width="2" height="5"  fill="#ffffffaa"/>
    <rect x="4"  y="7"  width="5" height="2"  fill="#ffffffaa"/>
    <rect x="15" y="7"  width="5" height="2"  fill="#ffffffaa"/>
  </svg>
);

// ── Data ──────────────────────────────────────────────────────────────────────
const technicalSkills: TechItem[] = [
  { name: "JavaScript",  slug: "javascript",  bg: "#F7DF1E", color: "000000" },
  { name: "TypeScript",  slug: "typescript",  bg: "#3178C6", color: "ffffff" },
  { name: "C++",         slug: "cplusplus",   bg: "#00599C", color: "ffffff" },
  { name: "Java",        slug: "openjdk",     bg: "#ED8B00", color: "ffffff" },
  { name: "Python",      slug: "python",      bg: "#3776AB", color: "ffffff" },
  { name: "HTML5",       slug: "html5",       bg: "#E34F26", color: "ffffff" },
  { name: "React",       slug: "react",       bg: "#20232A", color: "61DAFB" },
  { name: "Node.js",     slug: "nodedotjs",   bg: "#339933", color: "ffffff" },
  { name: "Express",     slug: "express",     bg: "#000000", color: "ffffff" },
  { name: "MongoDB",     slug: "mongodb",     bg: "#47A248", color: "ffffff" },
  { name: "MySQL",       slug: "mysql",       bg: "#4479A1", color: "ffffff" },
  { name: "Firebase",    slug: "firebase",    bg: "#FFCA28", color: "000000" },
];

const techTools: TechItem[] = [
  { name: "Git",         slug: "git",         bg: "#F05032", color: "ffffff" },
  { name: "GitHub",      slug: "github",      bg: "#181717", color: "ffffff" },
  { name: "Postman",     slug: "postman",     bg: "#FF6C37", color: "ffffff" },
  { name: "Figma",       slug: "figma",       bg: "#F24E1E", color: "ffffff" },
  { name: "VS Code",     bg: "#007ACC", icon: <VSCodeIcon /> },
  { name: "Tailwind",    slug: "tailwindcss", bg: "#06B6D4", color: "ffffff" },
  { name: "Power BI",    bg: "#F2C811", icon: <PowerBIIcon /> },
  { name: "Tableau",     bg: "#E97627", icon: <TableauIcon /> },
  { name: "Flutter",     slug: "flutter",     bg: "#02569B", color: "ffffff" },
  { name: "Spring Boot", slug: "springboot",  bg: "#6DB33F", color: "ffffff" },
  { name: "Vercel",      slug: "vercel",      bg: "#000000", color: "ffffff" },
  { name: "Render",      slug: "render",      bg: "#46E3B7", color: "000000" },
];

const softSkills: SoftSkill[] = [
  { name: "Problem Solving" },
  { name: "Team Collaboration" },
  { name: "Communication" },
  { name: "Adaptability" },
  { name: "Critical Thinking" },
  { name: "Time Management" },
  { name: "Leadership" },
  { name: "Continuous Learning" },
];

// ── Tile components ───────────────────────────────────────────────────────────
const TechTile: React.FC<{ item: TechItem; delay: number }> = ({ item, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.2 }}
    transition={{ duration: 0.4, delay, ease: [0.22, 1, 0.36, 1] }}
    whileHover={{ scale: 1.04, y: -2 }}
    className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-white/5 border border-white/8 hover:border-white/20 hover:bg-white/8 transition-all duration-200 cursor-default"
  >
    <div
      className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0"
      style={{ backgroundColor: item.bg }}
    >
      {item.icon ? item.icon : (
        <img
          src={`https://cdn.simpleicons.org/${item.slug}/${item.color}`}
          alt={item.name}
          className="w-4 h-4 object-contain"
          loading="lazy"
        />
      )}
    </div>
    <span className="font-outfit text-sm text-slate-300 font-medium whitespace-nowrap">
      {item.name}
    </span>
  </motion.div>
);

const SoftTile: React.FC<{ skill: SoftSkill; delay: number }> = ({ skill, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.2 }}
    transition={{ duration: 0.4, delay, ease: [0.22, 1, 0.36, 1] }}
    whileHover={{ scale: 1.04, y: -2 }}
    className="flex items-center justify-center px-3 py-3 rounded-lg bg-white/5 border border-white/8 hover:border-cyber-blue/40 hover:bg-cyber-blue/5 transition-all duration-200 cursor-default text-center"
  >
    <span className="font-outfit text-sm text-slate-300 font-medium leading-tight">
      {skill.name}
    </span>
  </motion.div>
);

// ── Main component ────────────────────────────────────────────────────────────
export const Skills: React.FC = () => {
  return (
    <section id="skills" className="relative py-24 overflow-hidden border-t border-white/5 bg-[#030014]/30">
      <div className="absolute top-1/4 right-1/4 h-[300px] w-[300px] rounded-full bg-cyber-blue/5 opacity-25 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 h-[300px] w-[300px] rounded-full bg-cyber-purple/5 opacity-25 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-orbitron text-xs font-bold tracking-widest text-cyber-blue uppercase mb-2"
          >
            // COGNITIVE CAPABILITIES
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-orbitron text-3xl md:text-5xl font-extrabold text-white"
          >
            SKILLS &amp;{" "}
            <span className="bg-gradient-to-r from-cyber-blue via-cyber-cyan to-cyber-purple bg-clip-text text-transparent">
              STACKS
            </span>
          </motion.h3>
        </div>

        {/* Three-panel grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Panel 1: Technical Skills */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="glass-panel-neon rounded-2xl p-7 border border-white/8 bg-cyber-card flex flex-col gap-5"
          >
            <div>
              <h4 className="font-orbitron text-lg font-bold text-cyber-blue mb-1">Technical Skills</h4>
              <p className="font-orbitron text-[9px] tracking-widest text-slate-500 uppercase">Languages &amp; Frameworks</p>
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              {technicalSkills.map((item, i) => (
                <TechTile key={item.name} item={item} delay={i * 0.04} />
              ))}
            </div>
          </motion.div>

          {/* Panel 2: Tech Tools */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="glass-panel-neon rounded-2xl p-7 border border-white/8 bg-cyber-card flex flex-col gap-5"
          >
            <div>
              <h4 className="font-orbitron text-lg font-bold text-cyber-blue mb-1">Tech Tools</h4>
              <p className="font-orbitron text-[9px] tracking-widest text-slate-500 uppercase">Platforms &amp; DevOps</p>
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              {techTools.map((item, i) => (
                <TechTile key={item.name} item={item} delay={i * 0.04} />
              ))}
            </div>
          </motion.div>

          {/* Panel 3: Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.8, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="glass-panel-neon rounded-2xl p-7 border border-white/8 bg-cyber-card flex flex-col gap-5"
          >
            <div>
              <h4 className="font-orbitron text-lg font-bold text-cyber-blue mb-1">Soft Skills</h4>
              <p className="font-orbitron text-[9px] tracking-widest text-slate-500 uppercase">People &amp; Mindset</p>
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              {softSkills.map((skill, i) => (
                <SoftTile key={skill.name} skill={skill} delay={i * 0.04} />
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
