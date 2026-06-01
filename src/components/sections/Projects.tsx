import React, { useState } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../../config/portfolioData";
import type { Project } from "../../config/portfolioData";
import { ExternalLink } from "lucide-react";

const GithubIcon: React.FC<{ size?: number; className?: string }> = ({ size = 18, className }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const Projects: React.FC = () => {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Full Stack", "AI & ML", "Mobile App"];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="relative py-24 overflow-hidden border-t border-white/5 bg-[#030014]/20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-cyber-blue/5 opacity-20 blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="font-orbitron text-xs font-bold tracking-widest text-cyber-blue uppercase mb-2"
          >
            // SYSTEM COMPILATION & REPOSITORIES
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-orbitron text-3xl md:text-5xl font-extrabold text-white"
          >
            FEATURED <span className="bg-gradient-to-r from-cyber-blue via-cyber-cyan to-cyber-purple bg-clip-text text-transparent">PROJECTS</span>
          </motion.h3>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16 font-orbitron text-[10px] font-bold tracking-widest">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded border transition-all duration-300 cursor-pointer ${
                filter === cat
                  ? "bg-gradient-to-r from-cyber-blue to-cyber-purple border-transparent text-white shadow-[0_0_15px_rgba(0,242,254,0.3)]"
                  : "border-white/5 bg-white/5 text-slate-400 hover:text-white hover:border-white/20"
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Projects Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Sub-component featuring mouse-parallax 3D tilt mechanics
const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    
    // Tilt calculations
    setRotateX(-y / 15);
    setRotateY(x / 15);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.93 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, margin: "-50px", amount: 0.15 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX,
          rotateY
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="glass-panel rounded-xl border border-white/5 bg-cyber-card flex flex-col justify-between overflow-hidden cursor-pointer relative group h-[480px]"
      >
        {/* Glowing border outline */}
        <div className={`absolute -inset-px rounded-xl bg-gradient-to-br ${project.glowColor} opacity-0 group-hover:opacity-20 transition duration-500 pointer-events-none`} />

        {/* Inner header card details */}
        <div>
          {/* Project preview — real screenshot if available, else procedural SVG */}
          <div className="h-44 w-full bg-slate-950 relative overflow-hidden flex items-center justify-center border-b border-white/5">
            {project.image ? (
              <>
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                {/* Gradient overlay so text badges stay readable */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              </>
            ) : (
              <>
                <div className="absolute inset-0 cyber-grid opacity-25 group-hover:opacity-40 transition-opacity" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/80 pointer-events-none" />
                <svg className="w-24 h-24 relative z-10 text-slate-700 group-hover:text-cyber-cyan transition-colors duration-500 animate-float" viewBox="0 0 100 100">
                  <polygon points="50,15 90,38 90,82 50,95 10,82 10,38" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3, 3" />
                  <circle cx="50" cy="50" r="22" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M40,50 L60,50 M50,40 L50,60" stroke="#00f2fe" strokeWidth="2.5" className="group-hover:rotate-45 transition-transform" style={{ transformOrigin: "center" }} />
                  <line x1="10" y1="50" x2="90" y2="50" stroke="#ffffff" strokeOpacity="0.05" />
                </svg>
                <div className={`absolute h-24 w-24 rounded-full bg-gradient-to-br ${project.glowColor} opacity-10 blur-xl group-hover:scale-150 transition-transform pointer-events-none`} />
              </>
            )}

            {/* Futuristic floating banner */}
            <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[9px] font-mono text-slate-500 tracking-wider">
              {project.category.toUpperCase()}
            </div>
            <div className="absolute bottom-3 left-3 px-2.5 py-0.5 rounded-full bg-cyber-blue/10 border border-cyber-blue/20 text-[9px] font-mono text-cyber-blue font-bold tracking-widest uppercase">
              {project.date}
            </div>
          </div>

          {/* Description Copywriting */}
          <div className="p-6">
            <h4 className="font-orbitron text-base font-bold text-white mb-2 tracking-wide group-hover:text-cyber-blue transition-colors">
              {project.title}
            </h4>
            <p className="text-slate-400 text-xs md:text-sm font-outfit leading-relaxed line-clamp-3 mb-6">
              {project.longDescription || project.description}
            </p>
          </div>
        </div>

        {/* Badges and Call-to-actions footer */}
        <div className="px-6 pb-6">
          {/* Tech badges */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[9px] font-mono text-slate-400 hover:text-white hover:border-white/15 transition-all"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* GitHub + Live Demo links */}
          <div className="flex items-center gap-4 pt-4 border-t border-white/5 font-orbitron text-[10px] font-bold tracking-widest text-slate-400">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white hover:scale-105 transition-all"
            >
              <GithubIcon size={13} />
              SOURCE_CODE
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-cyber-blue hover:text-cyber-cyan hover:scale-105 transition-all ml-auto"
            >
              <ExternalLink size={13} />
              LIVE_DEMO
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

