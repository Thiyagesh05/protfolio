import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, CheckCircle2, User, Code2, Zap } from 'lucide-react';
import { DEVELOPER_PROFILE } from '../data/developer';

export const About: React.FC = () => {
  const [cardTilt, setCardTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setCardTilt({
      x: (y / rect.height) * -20,
      y: (x / rect.width) * 20,
    });
  };

  const handleMouseLeave = () => {
    setCardTilt({ x: 0, y: 0 });
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#07080e]/60">
      {/* Background Accent Lines */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono tracking-widest uppercase">
            <User className="w-3.5 h-3.5" />
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-heading">
            Building ideas into <span className="text-gradient">interactive experiences.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Description Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed font-sans"
          >
            {DEVELOPER_PROFILE.aboutText.map((paragraph, index) => (
              <p key={index} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 transition-colors">
                {paragraph}
              </p>
            ))}

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4 font-mono">
              <div className="p-4 rounded-xl glass-panel border-white/10 flex items-center space-x-3">
                <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase">Degree</div>
                  <div className="text-sm font-semibold text-white">B.Tech AI & Data Science</div>
                </div>
              </div>

              <div className="p-4 rounded-xl glass-panel border-white/10 flex items-center space-x-3">
                <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-400">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase">Status</div>
                  <div className="text-sm font-semibold text-white">Final Year Student</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right 3D Tilt Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-md p-8 rounded-2xl glass-panel border border-cyan-500/30 shadow-[0_0_40px_rgba(56,189,248,0.15)] transition-transform duration-200 ease-out cursor-pointer group"
              style={{
                transform: `perspective(1000px) rotateX(${cardTilt.x}deg) rotateY(${cardTilt.y}deg)`,
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Card Holographic Glow Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-5 mb-6">
                <div>
                  <h3 className="text-2xl font-bold font-heading text-white tracking-wider uppercase group-hover:text-cyan-400 transition-colors">
                    {DEVELOPER_PROFILE.name}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400 tracking-widest mt-1">
                    WEB DEVELOPER
                  </p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-purple-600 to-cyan-400 p-[1px]">
                  <div className="w-full h-full bg-[#090b14] rounded-[11px] flex items-center justify-center">
                    <Code2 className="w-6 h-6 text-cyan-400" />
                  </div>
                </div>
              </div>

              {/* Education Banner */}
              <div className="mb-6 p-3.5 rounded-xl bg-purple-500/10 border border-purple-500/20">
                <div className="text-xs font-mono text-purple-300 uppercase tracking-wider mb-1 flex items-center space-x-1.5">
                  <GraduationCap className="w-4 h-4 text-purple-400" />
                  <span>Education</span>
                </div>
                <div className="text-sm font-semibold text-white">
                  {DEVELOPER_PROFILE.education.degree}
                </div>
                <div className="text-xs text-slate-400">
                  {DEVELOPER_PROFILE.education.status}
                </div>
              </div>

              {/* Personality Traits List */}
              <div className="space-y-3">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-2">
                  Key Attributes
                </div>
                {DEVELOPER_PROFILE.traits.map((trait) => (
                  <div
                    key={trait}
                    className="flex items-center space-x-3 p-2.5 rounded-lg bg-white/[0.03] border border-white/5 group-hover:border-cyan-500/30 transition-all"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span className="text-sm font-medium text-slate-200">{trait}</span>
                  </div>
                ))}
              </div>

              {/* Card Footer Badge */}
              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>IDENTITY_VERIFIED</span>
                <span className="text-cyan-400 font-semibold">● ACTIVE</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
