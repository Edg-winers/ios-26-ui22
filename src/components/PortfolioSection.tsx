import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Sparkles, Layers, ArrowUpRight } from 'lucide-react';
import { cvData } from '../data/cvData';

export const PortfolioSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'web' | 'uiux' | 'design'>('all');
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  const filteredProjects = cvData.projects.filter(
    (p) => activeFilter === 'all' || p.category === activeFilter
  );

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="flex items-center space-x-3 text-cyan-400 font-mono text-xs tracking-widest uppercase mb-2">
            <span className="w-8 h-[1px] bg-cyan-400" />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            SELECTED <span className="bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent">WORKS</span>
          </h2>
        </div>

        {/* Portfolio Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-slate-900/40 border border-white/10 backdrop-blur-xl w-fit">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'web', label: 'Web Applications' },
            { id: 'uiux', label: 'UI/UX Concepts' },
            { id: 'design', label: 'Graphic Suite' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`ios-water-button px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all duration-300 uppercase ${
                activeFilter === tab.id
                  ? 'bg-gradient-to-r from-sky-500/40 via-cyan-400/30 to-purple-600/40 text-white border-sky-300/60 shadow-[0_0_18px_rgba(56,189,248,0.35)]'
                  : 'text-slate-300 border-transparent'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              onMouseEnter={() => setHoveredCardId(project.id)}
              onMouseLeave={() => setHoveredCardId(null)}
              className="group relative rounded-3xl glass-card overflow-hidden border border-white/10 hover:border-sky-400/50 transition-all duration-500 shadow-2xl"
              data-cursor="card"
            >
              {/* Project Image Container with Zoom */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Gradient Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Category Pill */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-slate-950/80 border border-sky-400/40 text-sky-300 text-[10px] font-mono uppercase tracking-widest backdrop-blur-md">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Card Content */}
              <div className="p-6 sm:p-8 space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-sky-300 transition-colors flex items-center justify-between">
                  <span>{project.title}</span>
                  <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 text-[11px] font-mono"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center space-x-4 text-xs font-mono">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ios-water-button flex items-center space-x-1.5 px-4 py-2 rounded-xl text-slate-100 hover:text-white"
                    >
                      <Github className="w-4 h-4 text-sky-400" />
                      <span>Repository</span>
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ios-water-button flex items-center space-x-1.5 px-4 py-2 rounded-xl text-sky-300 hover:text-white border-sky-400/40"
                    >
                      <ExternalLink className="w-4 h-4 text-cyan-400" />
                      <span>Live Preview</span>
                    </a>
                  )}
                </div>

              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
