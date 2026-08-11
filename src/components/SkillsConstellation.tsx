import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { skillNodes } from '../data/cvData';
import { SkillNode } from '../types';
import { Code2, FileCode2, Server, Layout, Palette, Sparkles, PenTool, Cpu, Layers, ChevronLeft, ChevronRight } from 'lucide-react';

export const SkillsConstellation: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<SkillNode | null>(skillNodes[0]);
  const [hoveredSkillId, setHoveredSkillId] = useState<string | null>(null);

  // Tools I Work With Carousel / Ribbon
  const techStack = [
    { name: 'HTML5', icon: '5', color: '#e34f26' },
    { name: 'CSS3', icon: '3', color: '#1572b6' },
    { name: 'JavaScript', icon: 'JS', color: '#f7df1e' },
    { name: 'React.js', icon: '⚛', color: '#61dafb' },
    { name: 'Next.js', icon: 'N', color: '#ffffff' },
    { name: 'Node.js', icon: '⬢', color: '#339933' },
    { name: 'Tailwind', icon: '≈', color: '#06b6d4' },
    { name: 'PHP', icon: 'PHP', color: '#777bb4' },
    { name: 'Laravel', icon: 'L', color: '#ff2d20' },
    { name: 'Git', icon: '⌥', color: '#f05032' },
  ];

  const [techOffset, setTechOffset] = useState(0);

  const handlePrevTech = () => {
    setTechOffset((prev) => (prev > 0 ? prev - 1 : techStack.length - 1));
  };

  const handleNextTech = () => {
    setTechOffset((prev) => (prev < techStack.length - 1 ? prev + 1 : 0));
  };

  const iconMap: Record<string, React.ElementType> = {
    Code2,
    FileCode2,
    Server,
    Layout,
    Palette,
    Sparkles,
    PenTool,
    Cpu,
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 text-cyan-400 font-mono text-xs tracking-widest uppercase mb-2">
          <span className="w-8 h-[1px] bg-cyan-400" />
          <span>04 &bull; Skill Orbit & Ecosystem</span>
          <span className="w-8 h-[1px] bg-cyan-400" />
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          MY SKILLS: <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">Tools I Work With</span>
        </h2>
        <p className="text-slate-400 text-sm mt-3 font-mono">
          Interactive orbital skill graph and full-stack technical stack inventory.
        </p>
      </div>

      {/* Tools I Work With Horizontal Ribbon */}
      <div className="glass-card p-6 rounded-3xl border border-sky-500/20 shadow-2xl relative overflow-hidden">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-mono text-slate-300 uppercase tracking-widest flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>Core Development Stack & Technologies</span>
          </span>
          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrevTech}
              className="p-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-sky-400"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNextTech}
              className="p-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-sky-400"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-3 overflow-x-auto pb-2 scrollbar-none">
          {techStack.map((tech, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.08, y: -4 }}
              className="px-4 py-3 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-sky-400/50 flex items-center space-x-3 shrink-0 cursor-pointer shadow-lg transition-all"
            >
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center font-extrabold text-xs text-white"
                style={{ backgroundColor: `${tech.color}25`, border: `1px solid ${tech.color}60` }}
              >
                <span style={{ color: tech.color }}>{tech.icon}</span>
              </div>
              <span className="text-xs font-mono font-bold text-slate-200">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Constellation Orbit & Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Interactive Constellation Orbit Box */}
        <div className="lg:col-span-7 relative h-[420px] sm:h-[480px] rounded-3xl glass-card border border-white/10 p-4 flex items-center justify-center overflow-hidden">
          
          {/* Radial Light Base */}
          <div className="absolute inset-0 bg-radial-gradient opacity-60 pointer-events-none" />

          {/* Central Orbit Ring Lines */}
          <div className="absolute w-[240px] h-[240px] rounded-full border border-sky-500/20 pointer-events-none animate-spin-slow" />
          <div className="absolute w-[340px] h-[340px] rounded-full border border-purple-500/20 pointer-events-none" />

          {/* Central Core Node */}
          <div className="relative z-10 w-24 h-24 rounded-full bg-gradient-to-tr from-sky-500 via-purple-600 to-cyan-400 p-[2px] shadow-[0_0_35px_rgba(56,189,248,0.6)] flex items-center justify-center">
            <div className="w-full h-full rounded-full bg-slate-950 flex flex-col items-center justify-center p-2 text-center">
              <Layers className="w-6 h-6 text-cyan-400 animate-pulse" />
              <span className="text-[10px] font-mono font-bold text-white tracking-tighter mt-1">
                React.js Core
              </span>
            </div>
          </div>

          {/* Orbiting Skill Nodes */}
          {skillNodes.map((skill, idx) => {
            const IconComponent = iconMap[skill.iconName] || Code2;
            const isHovered = hoveredSkillId === skill.id;
            const isSelected = selectedSkill?.id === skill.id;

            // Calculate position along orbit angle
            const angleRad = (idx * (360 / skillNodes.length) * Math.PI) / 180;
            const radius = 130 + (idx % 2 === 0 ? 30 : -20);
            const x = Math.cos(angleRad) * radius;
            const y = Math.sin(angleRad) * radius;

            return (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                onClick={() => setSelectedSkill(skill)}
                onMouseEnter={() => {
                  setHoveredSkillId(skill.id);
                  setSelectedSkill(skill);
                }}
                onMouseLeave={() => setHoveredSkillId(null)}
                className="absolute z-20 cursor-pointer group"
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                }}
              >
                {/* Connecting Beam */}
                <svg className="absolute -z-10 w-full h-full overflow-visible pointer-events-none">
                  <line
                    x1="0"
                    y1="0"
                    x2={-x}
                    y2={-y}
                    stroke={isSelected ? '#38bdf8' : 'rgba(255,255,255,0.08)'}
                    strokeWidth={isSelected ? '2' : '1'}
                    strokeDasharray={isSelected ? 'none' : '3 3'}
                  />
                </svg>

                {/* Node Pill */}
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  className={`flex items-center space-x-2 px-3 py-1.5 rounded-2xl glass-panel text-xs font-mono transition-all duration-300 shadow-lg ${
                    isSelected
                      ? 'border-2 border-sky-400 bg-sky-950/80 text-white shadow-[0_0_20px_#38bdf8]'
                      : 'border border-white/10 text-slate-300 hover:border-purple-400'
                  }`}
                >
                  <IconComponent className="w-4 h-4" style={{ color: skill.color }} />
                  <span className="font-bold whitespace-nowrap">{skill.name}</span>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Selected Skill Information Panel */}
        <div className="lg:col-span-5">
          <AnimatePresence mode="wait">
            {selectedSkill && (
              <motion.div
                key={selectedSkill.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="glass-card p-6 sm:p-8 rounded-3xl border border-sky-500/30 shadow-2xl relative overflow-hidden"
              >
                {/* Ambient glow header */}
                <div
                  className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-2xl opacity-30 pointer-events-none"
                  style={{ backgroundColor: selectedSkill.color }}
                />

                <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
                  <div className="flex items-center space-x-3">
                    <div
                      className="p-3 rounded-2xl border flex items-center justify-center"
                      style={{
                        backgroundColor: `${selectedSkill.color}15`,
                        borderColor: `${selectedSkill.color}40`,
                        color: selectedSkill.color,
                      }}
                    >
                      {React.createElement(iconMap[selectedSkill.iconName] || Code2, {
                        className: 'w-6 h-6',
                      })}
                    </div>
                    <div>
                      <h3 className="text-xl font-extrabold text-white">{selectedSkill.name}</h3>
                      <span className="text-xs font-mono text-slate-400 uppercase">
                        {selectedSkill.category}
                      </span>
                    </div>
                  </div>

                  <span
                    className="text-lg font-mono font-bold px-3 py-1 rounded-xl bg-slate-900 border"
                    style={{ color: selectedSkill.color, borderColor: `${selectedSkill.color}40` }}
                  >
                    {selectedSkill.level}%
                  </span>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-sans">
                  {selectedSkill.description}
                </p>

                {/* Proficiency Meter */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono text-slate-400">
                    <span>Proficiency Level</span>
                    <span>{selectedSkill.level} / 100</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden border border-white/5">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: selectedSkill.color }}
                      initial={{ width: 0 }}
                      animate={{ width: `${selectedSkill.level}%` }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
