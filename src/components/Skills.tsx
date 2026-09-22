import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Layers, Wrench, Sparkles, CheckCircle2 } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/skills';
import { Skills3DSphere } from './Skills3DSphere';

const categoryIcons = [
  <Layers className="w-5 h-5 text-cyan-400" />,
  <Cpu className="w-5 h-5 text-purple-400" />,
  <Wrench className="w-5 h-5 text-emerald-400" />,
  <Sparkles className="w-5 h-5 text-amber-400" />,
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#050505]">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest uppercase">
            <Cpu className="w-3.5 h-3.5" />
            <span>MY TECH STACK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-heading">
            Technologies I use to build <span className="text-gradient">modern web experiences.</span>
          </h2>
        </motion.div>

        {/* Top 3D Sphere Interactive Canvas */}
        <div className="mb-20">
          <Skills3DSphere />
        </div>

        {/* Categorized Interactive Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl glass-panel glass-panel-hover border border-white/10 flex flex-col justify-between group"
            >
              <div>
                {/* Category Title Header */}
                <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-white/10">
                  <div className="p-2.5 rounded-xl bg-white/[0.05] border border-white/10 group-hover:border-cyan-400/50 transition-colors">
                    {categoryIcons[idx % categoryIcons.length]}
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white group-hover:text-cyan-400 transition-colors">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {category.skills.map((skill) => {
                    const badgeStyles =
                      skill.badge === 'Core Technology'
                        ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30'
                        : skill.badge === 'Used in Projects'
                        ? 'bg-purple-500/10 text-purple-400 border-purple-500/30'
                        : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';

                    return (
                      <div
                        key={skill.name}
                        className="p-3 rounded-xl bg-white/[0.02] border border-white/5 group-hover:border-white/15 transition-all flex items-center justify-between"
                      >
                        <div className="flex items-center space-x-2.5">
                          <span
                            className="w-2 h-2 rounded-full shadow-xs"
                            style={{ backgroundColor: skill.color || '#38bdf8' }}
                          />
                          <span className="text-sm font-medium text-slate-200">
                            {skill.name}
                          </span>
                        </div>
                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${badgeStyles}`}
                        >
                          {skill.badge}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Card Bottom Accent */}
              <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>CATEGORY_INDEX #0{idx + 1}</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400/70" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
