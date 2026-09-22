import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, FolderGit2, Send } from 'lucide-react';
import { DEVELOPER_PROFILE } from '../data/developer';
import { Hero3DScene } from './Hero3DScene';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Hero: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex flex-col justify-between overflow-hidden grid-bg">
      {/* Background Ambient Glows & Particles */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none animate-pulse-glow [animation-delay:2s]" />

      {/* Hero Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left z-10"
          >
            {/* Top Sub-tag */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-cyan-400/30 text-cyan-400 text-xs font-mono tracking-widest uppercase shadow-[0_0_15px_rgba(34,211,238,0.15)]">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
              <span>HELLO, I'M</span>
            </div>

            {/* Developer Name */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight font-heading uppercase text-white">
              {DEVELOPER_PROFILE.name}
            </h1>

            {/* Animated Roles */}
            <div className="space-y-1 font-mono text-lg sm:text-xl md:text-2xl font-semibold">
              <div className="text-gradient-purple flex flex-wrap items-center justify-center lg:justify-start gap-x-3 gap-y-1">
                <span>WEB DEVELOPER</span>
                <span className="text-slate-600">•</span>
                <span>REACT DEVELOPER</span>
                <span className="text-slate-600">•</span>
                <span>MERN STACK DEVELOPER</span>
              </div>
            </div>

            {/* Intro text */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans">
              {DEVELOPER_PROFILE.shortIntro}
            </p>

            {/* Floating Tech Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-2">
              {['React', 'JavaScript', 'Firebase', 'Git'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-700/60 text-slate-300 text-xs font-mono flex items-center space-x-1.5 shadow-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>{tech}</span>
                </span>
              ))}
            </div>

            {/* CTA Buttons & Social Links */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={() => handleScrollTo('projects')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-white font-semibold text-sm tracking-wide shadow-[0_0_25px_rgba(59,130,246,0.4)] hover:shadow-[0_0_35px_rgba(34,211,238,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center space-x-2.5 group cursor-pointer"
              >
                <span>View My Work</span>
                <FolderGit2 className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => handleScrollTo('contact')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 text-slate-200 hover:text-white font-semibold text-sm tracking-wide transition-all flex items-center justify-center space-x-2.5 cursor-pointer backdrop-blur-md"
              >
                <span>Contact Me</span>
                <Send className="w-4 h-4 text-cyan-400" />
              </button>

              <div className="flex items-center gap-2.5 pt-1 sm:pt-0">
                <a
                  href={DEVELOPER_PROFILE.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-white/[0.05] hover:bg-cyan-500/10 border border-white/10 hover:border-cyan-400/40 text-slate-300 hover:text-cyan-400 transition-all shadow-sm group"
                  title="GitHub Profile (@thiyageshmohan2005-svg)"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href={DEVELOPER_PROFILE.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-white/[0.05] hover:bg-purple-500/10 border border-white/10 hover:border-purple-400/40 text-slate-300 hover:text-purple-400 transition-all shadow-sm group"
                  title="LinkedIn Profile (thiyagesh-mohan-nov30)"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right 3D Interactive Canvas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <Hero3DScene />
          </motion.div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="flex flex-col items-center justify-center text-center pt-8 z-10"
      >
        <button
          onClick={() => handleScrollTo('about')}
          className="group flex flex-col items-center text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors space-y-2 cursor-pointer"
        >
          <span className="tracking-widest uppercase text-[11px]">SCROLL TO EXPLORE</span>
          <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-cyan-400/50 group-hover:bg-cyan-500/10 transition-all shadow-md">
            <ArrowDown className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 animate-bounce" />
          </div>
        </button>
      </motion.div>
    </section>
  );
};
