import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';
import { DEVELOPER_PROFILE } from '../data/developer';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Terminal', href: '#terminal' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // ScrollSpy section detection
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'py-3 bg-[#050505]/80 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)]' : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center space-x-2 group"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 via-blue-600 to-cyan-400 p-[1px] shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-transform duration-300 group-hover:scale-105">
            <div className="w-full h-full bg-[#090a10] rounded-[11px] flex items-center justify-center">
              <Code2 className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <span className="font-heading font-bold text-lg tracking-wider text-white group-hover:text-cyan-400 transition-colors">
            {DEVELOPER_PROFILE.logoText}
          </span>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center space-x-1 px-4 py-1.5 rounded-full bg-white/[0.03] backdrop-blur-md border border-white/10 shadow-inner">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-4 py-1.5 text-xs font-medium tracking-wider transition-colors duration-200 uppercase ${
                  isActive ? 'text-cyan-400 font-semibold' : 'text-slate-300 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-cyan-400/40 shadow-[0_0_12px_rgba(34,211,238,0.3)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Right Status Indicator & Socials */}
        <div className="hidden sm:flex items-center space-x-3">
          <a
            href={DEVELOPER_PROFILE.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-400/40 transition-colors"
            title="GitHub (@thiyageshmohan2005-svg)"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={DEVELOPER_PROFILE.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-purple-400 hover:border-purple-400/40 transition-colors"
            title="LinkedIn (thiyagesh-mohan-nov30)"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono flex items-center space-x-2 shadow-[0_0_12px_rgba(16,185,129,0.2)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="tracking-wide">Open to opportunities</span>
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden flex items-center space-x-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#0a0b12]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col space-y-3 mb-6">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-medium tracking-wider transition-all flex items-center justify-between ${
                      isActive
                        ? 'bg-cyan-500/10 border border-cyan-400/30 text-cyan-400'
                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />}
                  </a>
                );
              })}
            </div>

            {/* Mobile Social Links & Status */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <div className="flex items-center gap-3">
                <a
                  href={DEVELOPER_PROFILE.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-cyan-400 flex items-center justify-center gap-2 text-xs font-mono"
                >
                  <GithubIcon className="w-4 h-4 text-cyan-400" />
                  <span>GitHub</span>
                </a>
                <a
                  href={DEVELOPER_PROFILE.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-purple-400 flex items-center justify-center gap-2 text-xs font-mono"
                >
                  <LinkedinIcon className="w-4 h-4 text-purple-400" />
                  <span>LinkedIn</span>
                </a>
              </div>

              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">Status:</span>
                <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Open to opportunities</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
