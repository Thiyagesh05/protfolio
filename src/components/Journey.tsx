import React from 'react';
import { motion } from 'framer-motion';
import { Compass, GraduationCap, Code, Rocket, Database, Layers, Brain, CheckCircle2 } from 'lucide-react';

const JOURNEY_STEPS = [
  {
    step: "01",
    title: "B.Tech Artificial Intelligence & Data Science",
    description: "Built strong foundations in computational logic, algorithms, programming fundamentals, and data structures.",
    icon: <GraduationCap className="w-5 h-5 text-cyan-400" />
  },
  {
    step: "02",
    title: "Frontend Development",
    description: "Mastered semantic HTML5, CSS3, responsive web layouts, JavaScript (ES6+), and UI principles.",
    icon: <Code className="w-5 h-5 text-purple-400" />
  },
  {
    step: "03",
    title: "React Development",
    description: "Dived deep into component architectures, state management, hooks, props, and modern frontend tools.",
    icon: <Layers className="w-5 h-5 text-cyan-400" />
  },
  {
    step: "04",
    title: "Firebase & Backend Learning",
    description: "Learned cloud databases, authentication workflows, Firestore security rules, and serverless backend integrations.",
    icon: <Database className="w-5 h-5 text-amber-400" />
  },
  {
    step: "05",
    title: "MERN Stack Exploration",
    description: "Expanded technical capabilities into full-stack JavaScript: Node.js, Express, MongoDB, and RESTful APIs.",
    icon: <Rocket className="w-5 h-5 text-emerald-400" />
  },
  {
    step: "06",
    title: "Building Real-World Projects",
    description: "Applied knowledge by developing functional web applications like BillPro, Cable Connect Hub, and interactive web tools.",
    icon: <CheckCircle2 className="w-5 h-5 text-blue-400" />
  },
  {
    step: "07",
    title: "Exploring AI & Modern Web Technologies",
    description: "Combining web engineering with modern AI workflows, 3D WebGL graphics, and cutting-edge frontend tooling.",
    icon: <Brain className="w-5 h-5 text-pink-400" />
  }
];

export const Journey: React.FC = () => {
  return (
    <section id="journey" className="py-24 relative overflow-hidden bg-[#07080f]/90 border-y border-white/10">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20 space-y-3"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest uppercase">
            <Compass className="w-3.5 h-3.5" />
            <span>MY JOURNEY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-heading">
            Continuous learning & <span className="text-gradient">growth roadmap.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans">
            A progression focused on mastering core web development, building projects, and exploring new technologies.
          </p>
        </motion.div>

        {/* Timeline Path */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Connecting Neon Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-purple-500 via-cyan-400 to-blue-500 -translate-x-1/2 opacity-40 shadow-[0_0_15px_#22d3ee]" />

          <div className="space-y-12">
            {JOURNEY_STEPS.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot Icon Node */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#090b14] border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.5)] z-10">
                    {item.icon}
                  </div>

                  {/* Content Card */}
                  <div className="ml-12 md:ml-0 md:w-1/2 md:px-8 w-full">
                    <div className="p-6 rounded-2xl glass-panel glass-panel-hover border border-white/10 space-y-2 group">
                      <div className="flex items-center justify-between text-xs font-mono text-cyan-400">
                        <span>STEP {item.step}</span>
                        <span className="text-slate-500">MILESTONE</span>
                      </div>
                      <h3 className="text-lg font-bold font-heading text-white group-hover:text-cyan-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-slate-300 text-sm leading-relaxed font-sans">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
