import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon, RefreshCw, CornerDownLeft } from 'lucide-react';
import { DEVELOPER_PROFILE } from '../data/developer';

interface CommandOutput {
  command: string;
  result: React.ReactNode;
}

const INITIAL_COMMANDS: CommandOutput[] = [
  {
    command: 'whoami',
    result: 'thiyagesh',
  },
  {
    command: 'role',
    result: 'Web Developer | React Developer | MERN Stack Developer',
  },
  {
    command: 'stack',
    result: 'React • JavaScript • Firebase • Tailwind • MERN',
  },
  {
    command: 'status',
    result: '● Open to opportunities',
  },
  {
    command: './build-future.sh',
    result: (
      <div className="text-cyan-400 font-mono text-xs">
        Building... ████████████████ 100% [COMPLETED]
      </div>
    ),
  },
];

export const Terminal: React.FC = () => {
  const [history, setHistory] = useState<CommandOutput[]>(INITIAL_COMMANDS);
  const [inputVal, setInputVal] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    let res: React.ReactNode = '';

    switch (cmd) {
      case 'whoami':
        res = DEVELOPER_PROFILE.name.toLowerCase();
        break;
      case 'role':
        res = DEVELOPER_PROFILE.roles.join(' | ');
        break;
      case 'stack':
        res = 'React • JavaScript • Firebase • HTML/CSS • Node • MongoDB';
        break;
      case 'status':
        res = '● Open to opportunities (B.Tech AI & Data Science Final Year)';
        break;
      case 'education':
        res = `${DEVELOPER_PROFILE.education.degree} (${DEVELOPER_PROFILE.education.status})`;
        break;
      case 'projects':
        res = '1. BillPro  2. Cable Connect Hub  3. Movie Rating & Download  4. Developer Portfolio';
        break;
      case 'contact':
        res = `Email: ${DEVELOPER_PROFILE.socials.emailRaw} | GitHub: ${DEVELOPER_PROFILE.socials.github} | LinkedIn: ${DEVELOPER_PROFILE.socials.linkedin}`;
        break;
      case 'email':
        res = (
          <span>
            Email:{' '}
            <a
              href={DEVELOPER_PROFILE.socials.email}
              className="text-emerald-400 underline hover:text-emerald-300"
            >
              {DEVELOPER_PROFILE.socials.emailRaw}
            </a>
          </span>
        );
        break;
      case 'github':
        res = (
          <span>
            GitHub:{' '}
            <a
              href={DEVELOPER_PROFILE.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 underline hover:text-cyan-300"
            >
              github.com/{DEVELOPER_PROFILE.socials.githubUsername}
            </a>
          </span>
        );
        break;
      case 'linkedin':
        res = (
          <span>
            LinkedIn:{' '}
            <a
              href={DEVELOPER_PROFILE.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 underline hover:text-purple-300"
            >
              linkedin.com/in/{DEVELOPER_PROFILE.socials.linkedinHandle}
            </a>
          </span>
        );
        break;
      case 'socials':
        res = (
          <div className="space-y-1">
            <div>
              GitHub:{' '}
              <a
                href={DEVELOPER_PROFILE.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 underline hover:text-cyan-300"
              >
                {DEVELOPER_PROFILE.socials.github}
              </a>
            </div>
            <div>
              LinkedIn:{' '}
              <a
                href={DEVELOPER_PROFILE.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 underline hover:text-purple-300"
              >
                {DEVELOPER_PROFILE.socials.linkedin}
              </a>
            </div>
          </div>
        );
        break;
      case 'help':
        res = 'Available commands: whoami, role, stack, status, education, projects, contact, email, github, linkedin, socials, clear, ./build-future.sh';
        break;
      case 'clear':
        setHistory([]);
        setInputVal('');
        return;
      case './build-future.sh':
        res = (
          <div className="text-cyan-400 font-mono text-xs">
            Executing build script... ████████████████ 100% [SUCCESS]
          </div>
        );
        break;
      default:
        res = `command not found: ${cmd}. Type "help" for a list of available commands.`;
    }

    setHistory((prev) => [...prev, { command: inputVal, result: res }]);
    setInputVal('');
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  return (
    <section id="terminal" className="py-24 relative overflow-hidden bg-[#050505]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 space-y-3"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest uppercase">
            <TerminalIcon className="w-3.5 h-3.5" />
            <span>DEVELOPER TERMINAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-heading">
            Interactive CLI Console
          </h2>
          <p className="text-slate-400 text-sm font-mono">
            Type <span className="text-cyan-400">help</span> to explore developer commands in real-time.
          </p>
        </motion.div>

        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl bg-[#080910] border border-cyan-500/30 shadow-[0_0_50px_rgba(56,189,248,0.15)] overflow-hidden font-mono"
        >
          {/* Terminal Titlebar Header */}
          <div className="bg-[#0e101b] px-4 py-3 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            </div>
            <span className="text-xs text-slate-400">thiyagesh@developer-workspace:~</span>
            <button
              onClick={() => setHistory(INITIAL_COMMANDS)}
              className="p-1 rounded text-slate-400 hover:text-white text-xs flex items-center gap-1 cursor-pointer"
              title="Reset Terminal"
            >
              <RefreshCw className="w-3 h-3" />
            </button>
          </div>

          {/* Terminal Output Area */}
          <div className="p-6 text-sm space-y-4 max-h-[380px] overflow-y-auto leading-relaxed">
            {history.map((item, i) => (
              <div key={i} className="space-y-1">
                <div className="flex items-center space-x-2 text-cyan-400">
                  <span className="text-purple-400">$</span>
                  <span className="text-slate-200 font-bold">{item.command}</span>
                </div>
                <div className="pl-4 text-slate-300 text-xs sm:text-sm">
                  {item.result}
                </div>
              </div>
            ))}

            {/* Input Prompt Form */}
            <form onSubmit={handleCommandSubmit} className="flex items-center space-x-2 pt-2">
              <span className="text-purple-400">$</span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Type command (e.g. help, whoami, stack)..."
                className="w-full bg-transparent text-cyan-300 placeholder-slate-600 focus:outline-none text-sm font-mono"
              />
              <button type="submit" className="text-slate-500 hover:text-cyan-400">
                <CornerDownLeft className="w-4 h-4" />
              </button>
            </form>
            <div ref={bottomRef} />
          </div>
        </motion.div>

      </div>
    </section>
  );
};
