import React from 'react';
import { motion } from 'motion/react';
import { Code, Layout, Sparkles, CheckCircle2, ShieldCheck, Briefcase, Award, Zap, Terminal } from 'lucide-react';
import { cvData, profilePhoto } from '../data/cvData';

export const AboutSection: React.FC = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Front-End & Back-End',
      desc: 'Expertise in modern JavaScript/TypeScript frameworks, REST APIs, and client-server architecture.',
    },
    {
      icon: Layout,
      title: 'UI/UX Prototyping',
      desc: 'Crafting user-centered interfaces, glassmorphic themes, responsive grids, and design systems.',
    },
    {
      icon: Sparkles,
      title: 'Multimedia & Graphic Design',
      desc: 'Proficient in Adobe Photoshop, Illustrator, Premiere Pro, BICA Award Winner 2024.',
    },
    {
      icon: Zap,
      title: 'Creative Problem Solving',
      desc: 'Translating complex requirements into scalable, interactive, user-focused digital products.',
    },
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Sub-Header */}
      <div className="mb-12">
        <div className="flex items-center space-x-3 text-cyan-400 font-mono text-xs tracking-widest uppercase mb-2">
          <span className="w-8 h-[1px] bg-cyan-400" />
          <span>02 &bull; Profile Storyboard</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          ABOUT ME: <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">Passionate. Creative. Detail-Oriented.</span>
        </h2>
      </div>

      {/* Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column — 3D Abstract Code Cube Artwork */}
        <div className="lg:col-span-5 relative flex justify-center">
          <div className="relative w-full max-w-[380px] aspect-square rounded-3xl overflow-hidden glass-card p-3 border border-sky-500/30 shadow-[0_0_50px_rgba(56,189,248,0.2)] group">
            {/* Image */}
            <motion.img
              src={profilePhoto}
              alt="Dev. Muhammad Auwal Abubakar"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top rounded-2xl transition-transform duration-700 group-hover:scale-105"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />

            {/* Glowing Orbit Ring Overlay */}
            <div className="absolute inset-0 rounded-3xl border border-purple-500/40 pointer-events-none group-hover:border-sky-400/80 transition-colors" />

            {/* Central Floating Code Symbol Badge */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="w-24 h-24 rounded-full border border-sky-400/40 border-dashed flex items-center justify-center bg-slate-950/60 backdrop-blur-md"
              >
                <Terminal className="w-10 h-10 text-cyan-400" />
              </motion.div>
            </div>

            {/* Floating Top Tag */}
            <div className="absolute top-4 right-4 px-3 py-1.5 rounded-xl glass-panel bg-slate-950/90 border border-white/10 text-xs font-mono text-sky-300 flex items-center space-x-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>Senior Developer</span>
            </div>
          </div>
        </div>

        {/* Right Column — Narrative & 4 Core Feature Cards */}
        <div className="lg:col-span-7 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-normal">
              I'm a professional <span className="text-sky-300 font-semibold">Web Developer</span> with 2+ years of experience delivering clean, functional and user-focused web applications. I combine code with creativity to build digital experiences that make impact.
            </p>
          </motion.div>

          {/* 4 Feature Cards from Storyboard */}
          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="glass-card p-4 rounded-2xl border border-white/10 flex flex-col items-center justify-center text-center space-y-1 hover:border-sky-400/50 transition-all">
              <span className="text-2xl font-extrabold text-white font-mono">2+</span>
              <span className="text-xs text-slate-400 font-mono">Years Experience</span>
            </div>

            <div className="glass-card p-4 rounded-2xl border border-white/10 flex flex-col items-center justify-center text-center space-y-1 hover:border-purple-400/50 transition-all">
              <span className="text-2xl font-extrabold text-white font-mono">20+</span>
              <span className="text-xs text-slate-400 font-mono">Projects Completed</span>
            </div>

            <div className="glass-card p-4 rounded-2xl border border-white/10 flex flex-col items-center justify-center text-center space-y-1 hover:border-cyan-400/50 transition-all">
              <span className="text-sm font-bold text-sky-300">Full Stack</span>
              <span className="text-xs text-slate-400 font-mono">Developer</span>
            </div>

            <div className="glass-card p-4 rounded-2xl border border-white/10 flex flex-col items-center justify-center text-center space-y-1 hover:border-emerald-400/50 transition-all">
              <span className="text-sm font-bold text-emerald-300">Creative</span>
              <span className="text-xs text-slate-400 font-mono">Problem Solver</span>
            </div>
          </div>

          {/* Detailed Skill Breakdown Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-card p-4 rounded-2xl border border-white/5 hover:border-sky-500/30 transition-all flex space-x-3 items-start"
                >
                  <div className="p-2.5 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{item.title}</h4>
                    <p className="text-xs text-slate-400 mt-1 leading-normal">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <a
              href="#portfolio"
              className="ios-water-button px-6 py-3 rounded-2xl bg-gradient-to-r from-sky-500/30 via-cyan-400/20 to-purple-600/30 text-white font-bold text-xs tracking-wider uppercase transition-all"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="ios-water-button px-6 py-3 rounded-2xl text-slate-100 font-mono text-xs transition-all"
            >
              Hire Me
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
