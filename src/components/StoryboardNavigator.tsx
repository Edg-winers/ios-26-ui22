import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageId } from '../types';
import { ListFilter, ChevronRight, Layers } from 'lucide-react';

interface StoryboardSection {
  id: string;
  number: string;
  title: string;
  shortLabel: string;
}

const storyboardSections: StoryboardSection[] = [
  { id: 'home', number: '01', title: 'HERO HOME', shortLabel: 'Hero' },
  { id: 'about', number: '02', title: 'ABOUT ME', shortLabel: 'About' },
  { id: 'experience', number: '03', title: 'EXPERIENCE', shortLabel: 'Experience' },
  { id: 'skills', number: '04', title: 'SKILLS', shortLabel: 'Skills' },
  { id: 'education', number: '05', title: 'EDUCATION & CERTIFICATES', shortLabel: 'Education' },
  { id: 'portfolio', number: '06', title: 'PORTFOLIO', shortLabel: 'Portfolio' },
  { id: 'achievements', number: '07', title: 'ACHIEVEMENTS & MEMBERSHIPS', shortLabel: 'Achievements' },
  { id: 'contact', number: '08', title: 'CONTACT', shortLabel: 'Contact' },
];

interface StoryboardNavigatorProps {
  activeSectionId: string;
  onNavigate: (sectionId: PageId) => void;
}

export const StoryboardNavigator: React.FC<StoryboardNavigatorProps> = ({
  activeSectionId,
  onNavigate,
}) => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Map internal activeSectionId to one of the 8 IDs
  const getActiveIndex = () => {
    const idx = storyboardSections.findIndex((s) => s.id === activeSectionId);
    return idx >= 0 ? idx : 0;
  };

  const activeIdx = getActiveIndex();

  const handleItemClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <>
      {/* Desktop Left Fixed Storyboard Navigator */}
      <aside className="hidden xl:flex fixed left-6 top-1/2 -translate-y-1/2 z-40 flex-col items-start pointer-events-auto">
        <div className="glass-panel bg-slate-950/85 border border-sky-500/20 rounded-3xl p-4 shadow-2xl backdrop-blur-xl max-w-[240px] space-y-3">
          
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-2.5 w-full">
            <div className="flex items-center space-x-2">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span className="text-[11px] font-mono tracking-wider font-bold text-slate-200 uppercase">
                STORYBOARD
              </span>
            </div>
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
              8 Sections
            </span>
          </div>

          {/* Stepper Timeline List */}
          <nav className="relative space-y-1.5 w-full">
            {/* Vertical Glowing Connector Line */}
            <div className="absolute left-[15px] top-3 bottom-3 w-[2px] bg-slate-800 pointer-events-none" />
            <div
              className="absolute left-[15px] top-3 w-[2px] bg-gradient-to-b from-sky-400 to-purple-500 transition-all duration-500 pointer-events-none"
              style={{
                height: `${(activeIdx / (storyboardSections.length - 1)) * 90}%`,
              }}
            />

            {storyboardSections.map((sec, idx) => {
              const isActive = activeIdx === idx;
              return (
                <button
                  key={sec.id}
                  onClick={() => handleItemClick(sec.id)}
                  className={`group relative flex items-center space-x-3 w-full p-2 rounded-xl text-left text-xs font-mono transition-all ${
                    isActive
                      ? 'bg-sky-500/15 text-white border border-sky-500/40 shadow-[0_0_15px_rgba(56,189,248,0.2)]'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
                  }`}
                >
                  {/* Timeline Dot Node */}
                  <div
                    className={`relative z-10 w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 transition-all ${
                      isActive
                        ? 'bg-sky-500 text-slate-950 shadow-[0_0_12px_#38bdf8] scale-110 ring-2 ring-sky-300/50'
                        : 'bg-slate-900 border border-slate-700 text-slate-400 group-hover:border-sky-400/50'
                    }`}
                  >
                    {sec.number}
                  </div>

                  {/* Section Title */}
                  <div className="overflow-hidden truncate">
                    <span
                      className={`block truncate text-[11px] font-semibold tracking-wide ${
                        isActive ? 'text-sky-300 font-bold' : 'text-slate-300'
                      }`}
                    >
                      {sec.title}
                    </span>
                  </div>
                </button>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Floating Mobile / Small Screen Storyboard Quick Trigger */}
      <div className="xl:hidden fixed left-4 bottom-6 z-40">
        <button
          onClick={() => setMobileOpen(true)}
          className="ios-water-button p-3 rounded-2xl text-sky-300 shadow-2xl flex items-center space-x-2 text-xs font-mono hover:scale-105 transition-transform"
        >
          <Layers className="w-4 h-4 text-cyan-300" />
          <span className="font-bold text-white">
            {storyboardSections[activeIdx]?.number} {storyboardSections[activeIdx]?.shortLabel}
          </span>
        </button>
      </div>

      {/* Mobile Storyboard Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <div className="xl:hidden fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="w-full max-w-md glass-card bg-slate-950 border border-sky-500/30 rounded-3xl p-6 shadow-2xl space-y-4"
            >
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center space-x-2">
                  <Layers className="w-5 h-5 text-cyan-400" />
                  <span className="font-bold text-white text-sm font-mono">PORTFOLIO STORYBOARD</span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-1.5 rounded-xl bg-slate-900 text-slate-400 hover:text-white"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-2 max-h-[60vh] overflow-y-auto">
                {storyboardSections.map((sec, idx) => {
                  const isActive = activeIdx === idx;
                  return (
                    <button
                      key={sec.id}
                      onClick={() => handleItemClick(sec.id)}
                      className={`flex items-center space-x-3 w-full p-3 rounded-2xl text-left text-xs font-mono transition-all ${
                        isActive
                          ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40 font-bold'
                          : 'bg-slate-900/50 text-slate-300 hover:bg-slate-900'
                      }`}
                    >
                      <span className="px-2 py-1 rounded bg-slate-800 text-cyan-400 font-bold">
                        {sec.number}
                      </span>
                      <span className="flex-1 text-slate-200">{sec.title}</span>
                      <ChevronRight className="w-4 h-4 text-slate-500" />
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
