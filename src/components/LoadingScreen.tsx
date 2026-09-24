import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleSkip = () => {
    setIsFinished(true);
    onComplete();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsFinished(true);
          setTimeout(onComplete, 300);
          return 100;
        }
        // Fast smooth random increment
        const increment = Math.floor(Math.random() * 25) + 15;
        return Math.min(prev + increment, 100);
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onComplete]);

  // Generate progress bar string: e.g. [████████████████░░░]
  const totalBlocks = 20;
  const filledBlocks = Math.floor((progress / 100) * totalBlocks);
  const progressBarString = `[${'█'.repeat(filledBlocks)}${'░'.repeat(totalBlocks - filledBlocks)}]`;

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505] text-white overflow-hidden"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-tr from-purple-600/20 to-cyan-500/20 blur-[100px] rounded-full pointer-events-none" />

          {/* 3D Wireframe Rotating Cube Visual */}
          <div className="relative w-32 h-32 mb-10 perspective-1000 flex items-center justify-center">
            <div className="relative w-20 h-20 animate-[spin_8s_linear_infinite] transform-style-3d">
              <div className="absolute inset-0 border-2 border-cyan-400/80 rounded-lg shadow-[0_0_20px_rgba(34,211,238,0.4)] backdrop-blur-xs transform -rotate-12 translate-z-4" />
              <div className="absolute inset-0 border-2 border-purple-500/80 rounded-lg shadow-[0_0_20px_rgba(168,85,247,0.4)] backdrop-blur-xs transform rotate-45 -translate-z-4" />
              <div className="absolute inset-0 border-2 border-blue-500/80 rounded-lg shadow-[0_0_20px_rgba(59,130,246,0.4)] backdrop-blur-xs transform rotate-12" />
            </div>

            {/* Floating glowing particle dots */}
            <div className="absolute top-0 left-0 w-2 h-2 bg-cyan-400 rounded-full animate-ping shadow-[0_0_10px_#22d3ee]" />
            <div className="absolute bottom-2 right-1 w-2 h-2 bg-purple-400 rounded-full animate-ping shadow-[0_0_10px_#c084fc] [animation-delay:400ms]" />
          </div>

          {/* Developer Branding */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-3 z-10"
          >
            <h1 className="text-2xl md:text-3xl font-bold tracking-widest text-gradient font-heading">
              THIYAGESH
            </h1>

            <div className="flex items-center justify-center space-x-2 text-xs font-mono text-cyan-400/90 tracking-wider">
              <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>INITIALIZING EXPERIENCE...</span>
            </div>

              {/* Progress Bar & Percentage */}
              <div className="pt-4 font-mono text-sm space-y-1">
                <div className="text-slate-400 tracking-widest selection:bg-none">
                  {progressBarString} <span className="text-cyan-300 font-bold ml-2">{progress}%</span>
                </div>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest">
                  Loading WebGL Assets • React Three Fiber
                </p>
              </div>

              <div className="pt-3">
                <button
                  onClick={handleSkip}
                  className="px-4 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-400 hover:text-white transition-all cursor-pointer"
                >
                  Skip Intro →
                </button>
              </div>
            </motion.div>
          </motion.div>
      )}
    </AnimatePresence>
  );
};
