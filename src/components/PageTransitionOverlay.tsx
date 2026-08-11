import React from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PageTransitionOverlayProps {
  isTransitioning: boolean;
  targetPageName: string;
}

export const PageTransitionOverlay: React.FC<PageTransitionOverlayProps> = ({
  isTransitioning,
  targetPageName,
}) => {
  return (
    <AnimatePresence>
      {isTransitioning && (
        <motion.div
          key="transition-overlay"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950/90 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
        >
          {/* Radial light backdrop */}
          <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/10 via-purple-500/10 to-cyan-500/10" />

          {/* Glowing Circular Portal Indicator */}
          <div className="relative flex items-center justify-center">
            {/* Outer spinning ring */}
            <motion.div
              className="absolute w-28 h-28 rounded-full border border-sky-400/30 border-t-sky-400 border-r-purple-500"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
            />

            {/* Inner pulsing orb */}
            <motion.div
              className="w-16 h-16 rounded-full bg-gradient-to-tr from-sky-500 to-purple-600 shadow-[0_0_40px_rgba(56,189,248,0.6)] flex items-center justify-center"
              initial={{ scale: 0.6 }}
              animate={{ scale: [0.6, 1.1, 0.9, 1] }}
              transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
            >
              <span className="text-xs font-bold tracking-widest text-white uppercase font-mono">
                MAA
              </span>
            </motion.div>
          </div>

          {/* Page Label reveal */}
          <motion.div
            className="mt-6 text-center"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.3 }}
          >
            <span className="text-xs tracking-widest text-cyan-400/80 font-mono uppercase block mb-1">
              Navigating To
            </span>
            <h4 className="text-lg font-semibold text-white tracking-wide uppercase">
              {targetPageName}
            </h4>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
