import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Code2, LayoutDashboard, Palette, Database, Sparkles } from 'lucide-react';

const SERVICES = [
  {
    title: "Responsive Websites",
    description: "Modern websites engineered to adapt seamlessly across desktop, tablet, and mobile displays.",
    icon: <Monitor className="w-6 h-6 text-cyan-400" />,
    tags: ["HTML5", "CSS3", "Mobile-First"]
  },
  {
    title: "React Applications",
    description: "Interactive single-page applications leveraging modular React components and state workflows.",
    icon: <Code2 className="w-6 h-6 text-purple-400" />,
    tags: ["React.js", "JSX", "Hooks"]
  },
  {
    title: "Business Applications",
    description: "Practical operational platforms, billing portals, customer management systems, and data dashboards.",
    icon: <LayoutDashboard className="w-6 h-6 text-emerald-400" />,
    tags: ["Dashboards", "Billing", "Analytics"]
  },
  {
    title: "UI Development",
    description: "Clean, intuitive, accessible, and user-focused interfaces with smooth glassmorphism styling.",
    icon: <Palette className="w-6 h-6 text-amber-400" />,
    tags: ["Tailwind CSS", "Bootstrap", "UX"]
  },
  {
    title: "Firebase Applications",
    description: "Cloud database integrations, user authentication flows, document storage, and hosting setups.",
    icon: <Database className="w-6 h-6 text-pink-400" />,
    tags: ["Firestore", "Auth", "NoSQL"]
  },
  {
    title: "AI-Enhanced Applications",
    description: "Exploring AI-assisted web features, API integrations, and intelligent digital user experiences.",
    icon: <Sparkles className="w-6 h-6 text-blue-400" />,
    tags: ["AI Tools", "APIs", "Future Web"]
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#07080e]/90 border-y border-white/10">
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
            <Code2 className="w-3.5 h-3.5" />
            <span>WHAT I CAN BUILD</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-heading">
            Practical digital solutions <span className="text-gradient">engineered for real needs.</span>
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl glass-panel glass-panel-hover border border-white/10 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 p-3 mb-6 flex items-center justify-center group-hover:border-cyan-400/50 group-hover:bg-cyan-500/10 transition-all">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold font-heading text-white group-hover:text-cyan-400 transition-colors mb-3">
                  {item.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed font-sans mb-6">
                  {item.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md bg-white/[0.03] text-slate-400 text-xs font-mono"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
