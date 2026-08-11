import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export const CustomCursor: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState<'default' | 'hover' | 'card' | 'text'>('default');
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Detect touch device
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouch(true);
      return;
    }

    document.body.classList.add('custom-cursor-active');

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      // Check hovered element
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isButton = target.closest('button, a, input, textarea, [role="button"]');
      const isCard = target.closest('.glass-card, [data-cursor="card"]');

      if (isButton) {
        setCursorState('hover');
      } else if (isCard) {
        setCursorState('card');
      } else {
        setCursorState('default');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  if (isTouch) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Central Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#38bdf8]"
        animate={{
          x: mousePos.x - 4,
          y: mousePos.y - 4,
          scale: cursorState === 'hover' ? 1.8 : cursorState === 'card' ? 1.2 : 1,
        }}
        transition={{ type: 'spring', stiffness: 1200, damping: 40, mass: 0.1 }}
      />

      {/* Trailing Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-sky-400/40 backdrop-blur-[1px]"
        animate={{
          x: mousePos.x - (cursorState === 'hover' ? 24 : cursorState === 'card' ? 32 : 16),
          y: mousePos.y - (cursorState === 'hover' ? 24 : cursorState === 'card' ? 32 : 16),
          width: cursorState === 'hover' ? 48 : cursorState === 'card' ? 64 : 32,
          height: cursorState === 'hover' ? 48 : cursorState === 'card' ? 64 : 32,
          backgroundColor:
            cursorState === 'hover'
              ? 'rgba(56, 189, 248, 0.15)'
              : cursorState === 'card'
              ? 'rgba(139, 92, 246, 0.1)'
              : 'rgba(255, 255, 255, 0.02)',
          borderColor:
            cursorState === 'hover'
              ? 'rgba(56, 189, 248, 0.8)'
              : cursorState === 'card'
              ? 'rgba(139, 92, 246, 0.6)'
              : 'rgba(255, 255, 255, 0.25)',
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 28, mass: 0.3 }}
      />
    </div>
  );
};
