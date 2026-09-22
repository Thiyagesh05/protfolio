import React from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, ExternalLink, ArrowUpRight } from 'lucide-react';
import { PROJECTS_DATA } from '../data/projects';
import type { Project } from '../types';
import { GithubIcon } from './SocialIcons';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#050505]">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

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
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>FEATURED PROJECTS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-heading">
            A collection of applications <span className="text-gradient">I've built.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans">
            A collection of applications I've built while learning and developing.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS_DATA.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-7 rounded-3xl glass-panel glass-panel-hover border border-white/10 flex flex-col justify-between group transition-all duration-300 relative overflow-hidden"
            >
              {/* Card Header & Category */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-slate-500">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-2xl font-bold font-heading text-white group-hover:text-cyan-400 transition-colors mb-3">
                  {project.name}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-sans">
                  {project.shortDescription}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-slate-300 text-xs font-mono group-hover:border-cyan-500/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => onSelectProject(project)}
                  className="text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-300 flex items-center space-x-1.5 cursor-pointer group/btn"
                >
                  <span>View Details</span>
                  <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>

                <div className="flex items-center space-x-2">
                  <a
                    href={project.liveUrl || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors text-xs font-mono flex items-center gap-1"
                    title="Live Demo"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Demo</span>
                  </a>
                  <a
                    href={project.githubUrl || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors text-xs font-mono flex items-center gap-1"
                    title="GitHub Repository"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Code</span>
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
