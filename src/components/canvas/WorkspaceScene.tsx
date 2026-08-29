import React from "react";
import { motion } from "framer-motion";
import heroImage from "../../assets/IDHU.png";

// ── Floating info card ────────────────────────────────────────────────────────
interface CardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  className?: string;
  delay?: number;
}

const FloatingCard: React.FC<CardProps> = ({ icon, title, subtitle, className = "", delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className={`absolute z-20 flex items-center gap-2.5 px-3 py-2.5 rounded-xl
      bg-[#0a0a2e]/80 border border-white/15 backdrop-blur-md
      shadow-[0_0_20px_rgba(0,180,255,0.15)]
      ${className}`}
  >
    <div className="text-cyber-blue shrink-0">{icon}</div>
    <div>
      <p className="font-orbitron text-[10px] font-bold text-white leading-tight">{title}</p>
      <p className="font-outfit text-[9px] text-slate-400 leading-tight">{subtitle}</p>
    </div>
  </motion.div>
);

// ── SVG icons ─────────────────────────────────────────────────────────────────
const CodeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
  </svg>
);
const BarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
  </svg>
);
const DbIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
  </svg>
);
const RocketIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
  </svg>
);

// ── Main exported component ───────────────────────────────────────────────────
export const WorkspaceScene: React.FC = () => {
  return (
    <div className="relative w-full h-[520px] md:h-[620px] flex items-center justify-center select-none">

      {/* ── Outer glow ring 1 ── */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute w-[420px] h-[420px] md:w-[500px] md:h-[500px] rounded-full border border-cyan-400/20"
        style={{ boxShadow: "0 0 60px 2px rgba(0,200,255,0.12)" }}
      />

      {/* ── Outer glow ring 2 (counter-rotate, purple) ── */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="absolute w-[360px] h-[360px] md:w-[430px] md:h-[430px] rounded-full border border-purple-500/25"
        style={{ boxShadow: "0 0 40px 2px rgba(138,43,226,0.15)" }}
      />

      {/* ── Inner bright ring ── */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        className="absolute w-[280px] h-[280px] md:w-[340px] md:h-[340px] rounded-full border-2 border-cyan-400/40"
        style={{ boxShadow: "0 0 30px 4px rgba(0,242,254,0.2), inset 0 0 30px 4px rgba(0,242,254,0.05)" }}
      />

      {/* ── Globe dot-grid sphere SVG behind person ── */}
      <div className="absolute w-[340px] h-[340px] md:w-[420px] md:h-[420px] rounded-full overflow-hidden opacity-30 pointer-events-none">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <defs>
            <radialGradient id="globeGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#00f2fe" stopOpacity="0.6"/>
              <stop offset="70%" stopColor="#8a2be2" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#030014" stopOpacity="0"/>
            </radialGradient>
          </defs>
          <circle cx="200" cy="200" r="195" fill="url(#globeGrad)" />
          {/* Latitude lines */}
          {[40,80,120,160,200,240,280,320,360].map(y => (
            <ellipse key={y} cx="200" cy={y} rx={Math.sqrt(Math.max(0,195*195-(y-200)*(y-200)))} ry="8"
              fill="none" stroke="#00f2fe" strokeWidth="0.6" strokeOpacity="0.4"/>
          ))}
          {/* Longitude lines */}
          {[0,30,60,90,120,150].map(angle => (
            <ellipse key={angle} cx="200" cy="200" rx="12" ry="195"
              fill="none" stroke="#00f2fe" strokeWidth="0.6" strokeOpacity="0.3"
              transform={`rotate(${angle} 200 200)`}/>
          ))}
        </svg>
      </div>

      {/* ── Bottom HUD arc rings ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[300px] h-[60px] pointer-events-none opacity-60">
        <svg viewBox="0 0 300 60" className="w-full h-full">
          <path d="M10,50 Q150,-20 290,50" fill="none" stroke="#00f2fe" strokeWidth="1.5" strokeOpacity="0.6"/>
          <path d="M30,55 Q150,0 270,55" fill="none" stroke="#8a2be2" strokeWidth="1" strokeOpacity="0.4"/>
          <path d="M50,58 Q150,10 250,58" fill="none" stroke="#00f2fe" strokeWidth="0.5" strokeOpacity="0.3"/>
          {/* Tick marks */}
          {[60,90,120,150,180,210,240].map(x => (
            <line key={x} x1={x} y1="48" x2={x} y2="54" stroke="#00f2fe" strokeWidth="1" strokeOpacity="0.5"/>
          ))}
        </svg>
      </div>

      {/* ── Central glowing base light under figure ── */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-48 h-8 rounded-full bg-cyan-400/20 blur-xl pointer-events-none" />

      {/* ── Photo — centered, full height ── */}
      <motion.img
        src={heroImage}
        alt="Kishor S"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 h-[460px] md:h-[560px] w-auto object-contain object-bottom drop-shadow-[0_0_40px_rgba(0,242,254,0.2)]"
        style={{
          filter: "brightness(1.08) contrast(1.05)",
          maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
        }}
      />

      {/* ── Floating cards ── */}

      {/* Top-center: Clean Code */}
      <FloatingCard
        icon={<CodeIcon />}
        title="Clean Code"
        subtitle="Scalable Solutions"
        className="top-[8%] left-[22%]"
        delay={0.4}
      />

      {/* Right: Data Driven */}
      <FloatingCard
        icon={<BarIcon />}
        title="Data Driven"
        subtitle="Decisions"
        className="top-[28%] right-[2%]"
        delay={0.6}
      />

      {/* Left-middle: MERN Stack */}
      <FloatingCard
        icon={<DbIcon />}
        title="MERN Stack"
        subtitle="Developer"
        className="top-[52%] left-[0%]"
        delay={0.8}
      />

      {/* Right-lower: Building the Future */}
      <FloatingCard
        icon={<RocketIcon />}
        title="Building the"
        subtitle="Future"
        className="top-[62%] right-[2%]"
        delay={1.0}
      />

      {/* ── Small orbiting dot particles ── */}
      {[
        { top: "18%", left: "18%", color: "#ff007f", size: 8, delay: 0 },
        { top: "72%", left: "14%", color: "#ff007f", size: 10, delay: 0.5 },
        { top: "35%", right: "14%", color: "#00ffff", size: 8, delay: 0.3 },
        { top: "80%", right: "18%", color: "#ffff00", size: 6, delay: 0.8 },
        { top: "88%", left: "40%", color: "#8a2be2", size: 7, delay: 1.1 },
      ].map((dot, i) => (
        <motion.div
          key={i}
          animate={{ y: [-4, 4, -4], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2.5 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: dot.delay }}
          className="absolute z-20 rounded-full"
          style={{
            width: dot.size,
            height: dot.size,
            backgroundColor: dot.color,
            boxShadow: `0 0 10px 3px ${dot.color}88`,
            top: dot.top,
            left: (dot as { left?: string }).left,
            right: (dot as { right?: string }).right,
          }}
        />
      ))}

    </div>
  );
};
