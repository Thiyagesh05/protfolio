import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { DEVELOPER_PROFILE } from '../data/developer';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const validateForm = () => {
    if (!formData.name.trim()) {
      setErrorMsg('Please enter your name.');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMsg('Please enter a valid email address.');
      return false;
    }
    if (formData.message.trim().length < 10) {
      setErrorMsg('Message must be at least 10 characters long.');
      return false;
    }
    setErrorMsg('');
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      setStatus('error');
      return;
    }

    setStatus('loading');

    // Simulate safe frontend submission response
    setTimeout(() => {
      setStatus('success');
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#38bdf8', '#a855f7', '#34d399']
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#050505]">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-purple-600/10 to-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

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
            <Mail className="w-3.5 h-3.5" />
            <span>LET'S BUILD SOMETHING</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-heading">
            Have an idea, project or opportunity? <span className="text-gradient">Let's connect.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          
          {/* Left Info Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-8 rounded-3xl glass-panel border border-white/10 space-y-6">
              <h3 className="text-xl font-bold font-heading text-white">
                Contact Information
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                I'm open to full-time web developer roles, React projects, and software collaborations. Feel free to reach out directly.
              </p>

              {/* Status Badge */}
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>● Available for new opportunities</span>
              </div>

              {/* Social Links */}
              <div className="space-y-3 pt-2">
                <a
                  href={DEVELOPER_PROFILE.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-cyan-400/40 text-slate-300 hover:text-white transition-all group"
                >
                  <div className="p-2 rounded-lg bg-white/5 text-cyan-400 group-hover:scale-110 transition-transform">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">GitHub</div>
                    <div className="text-sm font-semibold font-mono text-cyan-300">@{DEVELOPER_PROFILE.socials.githubUsername}</div>
                  </div>
                </a>

                <a
                  href={DEVELOPER_PROFILE.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-cyan-400/40 text-slate-300 hover:text-white transition-all group"
                >
                  <div className="p-2 rounded-lg bg-white/5 text-purple-400 group-hover:scale-110 transition-transform">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">LinkedIn</div>
                    <div className="text-sm font-semibold font-mono text-purple-300">{DEVELOPER_PROFILE.socials.linkedinHandle}</div>
                  </div>
                </a>

                <a
                  href={DEVELOPER_PROFILE.socials.email}
                  className="flex items-center space-x-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-cyan-400/40 text-slate-300 hover:text-white transition-all group"
                >
                  <div className="p-2 rounded-lg bg-white/5 text-emerald-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Email Direct</div>
                    <div className="text-sm font-semibold font-mono text-emerald-300">{DEVELOPER_PROFILE.socials.emailRaw}</div>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-3xl glass-panel border border-cyan-500/30 space-y-6 shadow-[0_0_50px_rgba(56,189,248,0.1)]"
            >
              {status === 'success' ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-white">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-slate-300 text-sm max-w-sm mx-auto">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-mono text-xs transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  {status === 'error' && errorMsg && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono flex items-center space-x-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your Name"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-sm transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your.email@example.com"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-sm transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Project Inquiry / Job Opportunity"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-sm transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                      Message *
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Thiyagesh, I'd like to discuss..."
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-sm transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-white font-semibold text-sm tracking-wide shadow-[0_0_25px_rgba(56,189,248,0.4)] hover:shadow-[0_0_35px_rgba(34,211,238,0.6)] hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
