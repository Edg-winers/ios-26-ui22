import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface InitialLoaderProps {
  onComplete: () => void;
}

export const InitialLoader: React.FC<InitialLoaderProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<number>(0);

  useEffect(() => {
    // Stage sequence
    const t1 = setTimeout(() => setStage(1), 300);  // Ring drawing
    const t2 = setTimeout(() => setStage(2), 900);  // Text reveal & particle glow
    const t3 = setTimeout(() => setStage(3), 1800); // Collapse portal
    const t4 = setTimeout(() => onComplete(), 2300); // Done

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {stage < 4 && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030712] overflow-hidden"
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          {/* Subtle Background Grid */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
          <div className="absolute w-[500px] h-[500px] rounded-full bg-radial-gradient blur-3xl pointer-events-none opacity-40" />

          {/* Center Graphic Portal */}
          <motion.div
            className="relative flex items-center justify-center"
            animate={
              stage === 3
                ? { scale: [1, 0.2, 12], opacity: [1, 0.8, 0] }
                : { scale: 1, opacity: 1 }
            }
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            {/* Orbiting particles */}
            {stage >= 1 && (
              <motion.div
                className="absolute w-36 h-36 rounded-full border border-sky-500/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              >
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_#38bdf8]" />
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_12px_#8b5cf6]" />
              </motion.div>
            )}

            {/* SVG Ring drawing */}
            <svg className="w-28 h-28 transform -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="44"
                className="stroke-slate-800"
                strokeWidth="3"
                fill="transparent"
              />
              <motion.circle
                cx="50"
                cy="50"
                r="44"
                className="stroke-sky-400"
                strokeWidth="3"
                fill="transparent"
                strokeDasharray="276"
                initial={{ strokeDashoffset: 276 }}
                animate={{ strokeDashoffset: stage >= 1 ? 0 : 276 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
              />
            </svg>

            {/* MAA Monogram */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <motion.span
                className="text-2xl font-extrabold tracking-wider bg-gradient-to-r from-white via-sky-300 to-purple-400 bg-clip-text text-transparent font-mono"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                  opacity: stage >= 2 ? 1 : 0,
                  scale: stage >= 2 ? 1 : 0.5,
                }}
                transition={{ duration: 0.4 }}
              >
                MAA
              </motion.span>
            </div>
          </motion.div>

          {/* Loader status subtitle */}
          <motion.div
            className="mt-8 flex items-center space-x-2 font-mono text-xs tracking-widest text-slate-400 uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: stage >= 2 ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>Constructing Digital Environment</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
