import React, { useRef, useState } from "react";
import { motion as motionFramer, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, X } from "lucide-react";
import { portfolioData } from "../../config/portfolioData";
import confetti from "canvas-confetti";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID  = "service_aiz3hss";
const EMAILJS_TEMPLATE_ID = "template_f5gvzuy";
const EMAILJS_PUBLIC_KEY  = "skwVeBnaHWw8Tb46O";

export const Contact: React.FC = () => {
  const { email, phone, location } = portfolioData.personalInfo;

  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setError(null);

    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: EMAILJS_PUBLIC_KEY }
      )
      .then(() => {
        setIsSubmitting(false);
        setShowSuccess(true);
        formRef.current?.reset();

        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#00f2fe", "#8a2be2", "#ff007f"],
        });
      })
      .catch((err: { text?: string }) => {
        setIsSubmitting(false);
        setError(err.text ?? "Failed to send. Please try again.");
      });
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden border-t border-white/5 bg-[#030014]/30">
      {/* Absolute Ambient Background Lights */}
      <div className="absolute top-1/4 left-1/4 h-[350px] w-[350px] rounded-full bg-cyber-blue/5 opacity-20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 h-[350px] w-[350px] rounded-full bg-cyber-purple/5 opacity-25 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-6xl px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motionFramer.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="font-orbitron text-xs font-bold tracking-widest text-cyber-blue uppercase mb-2"
          >
            // TELEMETRY & CHANNELS
          </motionFramer.h2>
          <motionFramer.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-orbitron text-3xl md:text-5xl font-extrabold text-white"
          >
            GET IN <span className="bg-gradient-to-r from-cyber-blue via-cyber-cyan to-cyber-purple bg-clip-text text-transparent">TOUCH</span>
          </motionFramer.h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Communication Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <motionFramer.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="glass-panel rounded-xl p-8 border border-white/5 bg-cyber-card space-y-8"
            >
              <h4 className="font-orbitron text-base font-bold text-white tracking-widest uppercase mb-6 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-cyber-blue shadow-[0_0_8px_#00f2fe]" />
                COMMUNICATION NODES
              </h4>

              {/* Email channel */}
              <div className="flex items-center gap-5 group">
                <div className="p-3.5 rounded bg-white/5 border border-white/5 text-cyber-blue group-hover:scale-110 transition-transform">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="font-orbitron text-[9px] font-bold text-slate-500 tracking-widest uppercase">EMAIL DIRECT</span>
                  <a href="https://mail.google.com/mail/u/0/?fs=1&to=kishorsakthinarayanan@gmail.com&tf=cm" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyber-blue transition-colors text-sm font-semibold tracking-wider font-mono block mt-0.5">
                    {email}
                  </a>
                </div>
              </div>

              {/* Phone channel */}
              <div className="flex items-center gap-5 group">
                <div className="p-3.5 rounded bg-white/5 border border-white/5 text-cyber-cyan group-hover:scale-110 transition-transform">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="font-orbitron text-[9px] font-bold text-slate-500 tracking-widest uppercase">TELEPHONY CELL</span>
                  <a href={`tel:${phone}`} className="text-white hover:text-cyber-cyan transition-colors text-sm font-semibold tracking-wider font-mono block mt-0.5">
                    {phone}
                  </a>
                </div>
              </div>

              {/* Location channel */}
              <div className="flex items-center gap-5 group">
                <div className="p-3.5 rounded bg-white/5 border border-white/5 text-cyber-pink group-hover:scale-110 transition-transform">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="font-orbitron text-[9px] font-bold text-slate-500 tracking-widest uppercase">GEOGRAPHIC COORD</span>
                  <span className="text-slate-300 text-sm font-semibold block mt-0.5">
                    {location}
                  </span>
                </div>
              </div>
            </motionFramer.div>

            {/* Micro warning system status badge */}
            <div className="hidden lg:flex items-center gap-3 p-4 rounded border border-white/5 bg-cyber-card/35 font-mono text-[9px] text-slate-500 mt-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-blue opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-blue"></span>
              </span>
              TRANSMISSIONS SECURE // AUTOMATED FIREWALL ACTIVE // SSL ENABLED
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <motionFramer.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="glass-panel rounded-xl p-8 border border-white/5 bg-cyber-card"
            >
              <h4 className="font-orbitron text-base font-bold text-white tracking-widest uppercase mb-6 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-cyber-purple shadow-[0_0_8px_#8a2be2]" />
                TRANSMIT SECURE SIGNAL
              </h4>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name field — EmailJS template variable: {{name}} */}
                <div className="relative flex flex-col">
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full bg-[#030014]/50 border border-white/10 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-cyber-blue focus:shadow-[0_0_12px_rgba(0,242,254,0.15)] transition-all font-outfit"
                    placeholder="Full Name"
                  />
                </div>

                {/* Email field — EmailJS template variable: {{email}} */}
                <div className="relative flex flex-col">
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full bg-[#030014]/50 border border-white/10 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-cyber-blue focus:shadow-[0_0_12px_rgba(0,242,254,0.15)] transition-all font-outfit"
                    placeholder="Email Address"
                  />
                </div>

                {/* Subject field — EmailJS template variable: {{subject}} */}
                <div className="relative flex flex-col">
                  <input
                    type="text"
                    name="subject"
                    required
                    className="w-full bg-[#030014]/50 border border-white/10 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-cyber-blue focus:shadow-[0_0_12px_rgba(0,242,254,0.15)] transition-all font-outfit"
                    placeholder="Subject"
                  />
                </div>

                {/* Message field — EmailJS template variable: {{message}} */}
                <div className="relative flex flex-col">
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="w-full bg-[#030014]/50 border border-white/10 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-cyber-purple focus:shadow-[0_0_12px_rgba(138,43,226,0.15)] transition-all font-outfit resize-none"
                    placeholder="Describe your project or request details..."
                  />
                </div>

                {/* Error message */}
                {error && (
                  <p className="text-cyber-pink text-xs font-mono text-center">{error}</p>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded bg-gradient-to-r from-cyber-blue to-cyber-purple font-orbitron text-xs font-bold tracking-widest text-white shadow-[0_0_15px_rgba(0,242,254,0.2)] hover:shadow-[0_0_30px_rgba(0,242,254,0.4)] hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:hover:scale-100 disabled:pointer-events-none cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      DISPATCHING SIGNAL...
                    </>
                  ) : (
                    <>
                      <Send size={13} />
                      TRANSMIT MESSAGE
                    </>
                  )}
                </button>
              </form>
            </motionFramer.div>
          </div>
        </div>
      </div>

      {/* Success Modal Dialogue */}
      <AnimatePresence>
        {showSuccess && (
          <motionFramer.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md px-6"
          >
            <motionFramer.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-panel-neon rounded-xl p-8 max-w-md w-full border border-cyber-blue/30 bg-cyber-card relative text-center flex flex-col items-center"
            >
              <button
                onClick={() => setShowSuccess(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>

              <div className="p-3.5 rounded-full bg-cyber-blue/10 text-cyber-blue mb-4 animate-float">
                <CheckCircle2 size={32} />
              </div>

              <h4 className="font-orbitron text-lg font-bold text-white mb-2">
                SIGNAL TRANSMITTED SECURELY
              </h4>
              <p className="text-slate-400 text-xs md:text-sm font-outfit leading-relaxed mb-6">
                Your message has been routed through cyber systems successfully. Kishor S will respond to your telemetry node shortly!
              </p>

              <button
                onClick={() => setShowSuccess(false)}
                className="px-6 py-2.5 rounded bg-cyber-blue text-[#030014] font-orbitron text-[10px] font-bold tracking-widest hover:bg-cyber-cyan shadow-[0_0_15px_rgba(0,242,254,0.3)] transition-all cursor-pointer"
              >
                CLOSE CONSOLE
              </button>
            </motionFramer.div>
          </motionFramer.div>
        )}
      </AnimatePresence>
    </section>
  );
};

