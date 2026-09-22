import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, AlertTriangle, Lightbulb, UserCheck, Layers } from 'lucide-react';
import type { Project } from '../types';
import { GithubIcon } from './SocialIcons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-[#090b14] border border-cyan-500/30 rounded-3xl p-6 sm:p-8 md:p-10 shadow-[0_0_80px_rgba(56,189,248,0.2)] text-white overflow-hidden z-10 max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="mb-8 border-b border-white/10 pb-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-3">
              <span>{project.category}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white">
              {project.name}
            </h2>
            <p className="text-slate-300 text-base mt-2 leading-relaxed">
              {project.fullDescription}
            </p>

            {/* Links Bar */}
            <div className="flex flex-wrap gap-4 mt-6">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-xs font-mono transition-colors flex items-center space-x-2"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-semibold text-xs font-mono transition-colors flex items-center space-x-2"
                >
                  <span>GitHub Repository</span>
                  <GithubIcon className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Grid Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
            
            {/* Problem & Solution */}
            <div className="space-y-6">
              {project.problem && (
                <div className="p-5 rounded-2xl bg-red-500/5 border border-red-500/20">
                  <div className="flex items-center space-x-2 text-xs font-mono text-red-400 uppercase tracking-wider mb-2">
                    <AlertTriangle className="w-4 h-4" />
                    <span>The Problem</span>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.problem}
                  </p>
                </div>
              )}

              {project.solution && (
                <div className="p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/20">
                  <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">
                    <Lightbulb className="w-4 h-4" />
                    <span>The Solution</span>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              )}

              {project.role && (
                <div className="p-5 rounded-2xl bg-purple-500/5 border border-purple-500/20">
                  <div className="flex items-center space-x-2 text-xs font-mono text-purple-400 uppercase tracking-wider mb-2">
                    <UserCheck className="w-4 h-4" />
                    <span>My Role</span>
                  </div>
                  <p className="text-sm text-slate-300 font-semibold">
                    {project.role}
                  </p>
                </div>
              )}
            </div>

            {/* Key Features & Tech Stack */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                  <Layers className="w-4 h-4" />
                  Key Features
                </h3>
                <div className="space-y-2">
                  {project.features.map((feat) => (
                    <div key={feat} className="flex items-start space-x-2.5 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-mono text-purple-400 uppercase tracking-widest mb-3">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-cyan-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Challenges & Learnings */}
          {(project.challenges || project.learnings) && (
            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.challenges && (
                <div>
                  <h4 className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-2">
                    Challenges Encountered
                  </h4>
                  <ul className="list-disc list-inside text-xs text-slate-300 space-y-1">
                    {project.challenges.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.learnings && (
                <div>
                  <h4 className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">
                    What I Learned
                  </h4>
                  <ul className="list-disc list-inside text-xs text-slate-300 space-y-1">
                    {project.learnings.map((l, i) => (
                      <li key={i}>{l}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
