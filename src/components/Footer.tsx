import React from 'react';
import { DEVELOPER_PROFILE } from '../data/developer';
import { ArrowUp, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#030305] border-t border-white/10 py-12 relative overflow-hidden text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-12 border-b border-white/10">
          
          {/* Brand & Roles */}
          <div className="md:col-span-6 space-y-2">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center">
                <Code2 className="w-4 h-4 text-cyan-400" />
              </div>
              <span className="font-heading font-bold text-xl text-white tracking-wider">
                {DEVELOPER_PROFILE.logoText}
              </span>
            </div>
            <p className="text-xs font-mono text-cyan-400/80">
              Web Developer • React Developer • MERN Stack
            </p>
            <p className="text-xs text-slate-400 max-w-sm font-sans pt-1">
              Building modern, responsive and user-focused web experiences with clean UI, smooth interactions and practical functionality.
            </p>
          </div>

          {/* Nav Links & Socials */}
          <div className="md:col-span-6 flex flex-col items-start md:items-end gap-4">
            <div className="flex flex-wrap items-center justify-start md:justify-end gap-6 text-xs font-mono">
              <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
              <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
              <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
              <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
              <a href="#journey" className="hover:text-cyan-400 transition-colors">Journey</a>
              <a href="#terminal" className="hover:text-cyan-400 transition-colors">Terminal</a>
              <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={DEVELOPER_PROFILE.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-400/40 transition-all text-xs font-mono"
                title="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4 text-cyan-400" />
                <span>thiyageshmohan2005-svg</span>
              </a>
              <a
                href={DEVELOPER_PROFILE.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-purple-400 hover:border-purple-400/40 transition-all text-xs font-mono"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4 text-purple-400" />
                <span>thiyagesh-mohan-nov30</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            © 2026 {DEVELOPER_PROFILE.name}. Built with React & Designed with curiosity.
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-500/10 text-slate-300 hover:text-cyan-400 transition-all flex items-center space-x-2 cursor-pointer group"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
};
