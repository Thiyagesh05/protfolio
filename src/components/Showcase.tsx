import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Receipt } from 'lucide-react';
import { PROJECTS_DATA } from '../data/projects';
import type { Project } from '../types';

interface ShowcaseProps {
  onSelectProject: (project: Project) => void;
}

export const Showcase: React.FC<ShowcaseProps> = ({ onSelectProject }) => {
  const billPro = PROJECTS_DATA.find((p) => p.id === 'billpro') || PROJECTS_DATA[0];

  return (
    <section className="py-20 relative overflow-hidden bg-[#070810]/80 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Showcase Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl glass-panel border border-cyan-500/40 overflow-hidden shadow-[0_0_60px_rgba(56,189,248,0.15)] relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 lg:p-12"
        >
          {/* Top Label */}
          <div className="absolute top-6 left-8 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/40 text-cyan-400 text-xs font-mono tracking-widest uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            01 / FEATURED SPOTLIGHT
          </div>

          {/* Left Visual Mockup Display */}
          <div className="lg:col-span-7 pt-10 lg:pt-0">
            <div className="relative rounded-2xl bg-[#090b14] border border-white/15 p-6 shadow-2xl overflow-hidden group">
              {/* Window Controls header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div className="flex space-x-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-cyan-400">
                  billpro.app/dashboard
                </div>
              </div>

              {/* Simulated BillPro Dashboard Mockup Visual */}
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-3 font-mono">
                  <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20">
                    <div className="text-[10px] text-purple-300">TOTAL INVOICES</div>
                    <div className="text-xl font-bold text-white mt-1">1,248</div>
                  </div>
                  <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                    <div className="text-[10px] text-cyan-300">COLLECTED</div>
                    <div className="text-xl font-bold text-white mt-1">₹4,82,500</div>
                  </div>
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                    <div className="text-[10px] text-emerald-300">GST CALCULATED</div>
                    <div className="text-xl font-bold text-white mt-1">18% Auto</div>
                  </div>
                </div>

                {/* Simulated Invoice Card Row */}
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                      <Receipt className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">Invoice #INV-2026-089</div>
                      <div className="text-xs text-slate-400">Client: Enterprise Corp • WhatsApp Sent</div>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-mono">
                    PAID
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-1">
                PROJECT 01
              </div>
              <h3 className="text-3xl font-bold font-heading text-white">
                BillPro
              </h3>
              <p className="text-sm font-mono text-purple-300 mt-1">
                Professional Billing & Invoice Software
              </p>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed font-sans">
              {billPro.shortDescription}
            </p>

            <div className="flex flex-wrap gap-2">
              {billPro.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => onSelectProject(billPro)}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-white font-semibold text-sm tracking-wide shadow-[0_0_20px_rgba(56,189,248,0.4)] hover:scale-[1.03] transition-all flex items-center space-x-2 cursor-pointer group"
              >
                <span>View Full Showcase</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
