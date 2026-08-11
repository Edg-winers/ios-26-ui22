import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Download, Github, Mail, Phone, Code2, Sparkles, Terminal } from 'lucide-react';
import { cvData, profilePhoto } from '../data/cvData';
import { PageId } from '../types';

interface HeroSectionProps {
  onNavigate: (page: PageId) => void;
  onOpenCvModal: () => void;
  onOpenAiAssistant: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate,
  onOpenCvModal,
  onOpenAiAssistant,
}) => {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [typedLineIndex, setTypedLineIndex] = useState(0);

  // Parallax tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      setMouseOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Code panel lines animation
  const codeSnippet = [
    `const developer = {`,
    `  name: "Muhammad Auwal Abubakar",`,
    `  role: "Senior Web Developer",`,
    `  location: "Dutse, Jigawa State",`,
    `  skills: ["React", "Node", "UI/UX"],`,
    `  status: "Available for Projects"`,
    `};`,
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTypedLineIndex((prev) => (prev < codeSnippet.length ? prev + 1 : prev));
    }, 450);
    return () => clearInterval(timer);
  }, [codeSnippet.length]);

  const fullNameChars = cvData.personalInfo.fullName.split('');

  return (
    <section className="relative min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8 flex flex-col justify-center overflow-hidden">
      {/* Parallax Background Grid */}
      <div
        className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none transition-transform duration-200 ease-out"
        style={{
          transform: `translate(${mouseOffset.x * 8}px, ${mouseOffset.y * 8}px)`,
        }}
      />

      {/* Atmospheric Ambient Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-radial-gradient blur-3xl opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 my-auto">
        
        {/* Left Column — Text & CTAs */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-sky-500/30 text-sky-300 text-xs font-mono tracking-wider w-fit backdrop-blur-md shadow-[0_0_15px_rgba(56,189,248,0.15)]"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>2+ Years Senior Experience</span>
            <span className="text-slate-600">|</span>
            <span className="text-purple-300">KowaGuru Tech</span>
          </motion.div>

          {/* Character-by-Character Name Reveal */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none text-white font-sans">
              {fullNameChars.map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{
                    duration: 0.4,
                    delay: 0.3 + index * 0.03,
                    ease: [0.2, 0.65, 0.3, 0.9],
                  }}
                  className="inline-block"
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </h1>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex items-center space-x-3 text-xl sm:text-2xl lg:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-purple-400"
            >
              <span>{cvData.personalInfo.title}</span>
              <span className="text-slate-600">&bull;</span>
              <span className="text-slate-300 text-base sm:text-xl font-normal font-mono">
                UI/UX Specialist
              </span>
            </motion.div>
          </div>

          {/* Professional Bio */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal"
          >
            Senior Web Developer skilled in building high-performance front-end interfaces, custom server architectures, and creative UI/UX systems. Combining modern TypeScript frameworks with Adobe Creative Suite mastery to deliver world-class digital experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            {/* Primary CTA — iOS 26 Liquid Water Button */}
            <button
              onClick={() => onNavigate('portfolio')}
              className="ios-water-button px-7 py-3.5 rounded-2xl bg-gradient-to-r from-sky-500/40 via-cyan-400/30 to-purple-600/40 text-white font-bold text-sm tracking-wide border-sky-300/50 flex items-center space-x-2"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 text-sky-300 transition-transform group-hover:translate-x-1" />
              </span>
            </button>

            {/* Secondary CTA — iOS 26 Liquid Water */}
            <button
              onClick={onOpenCvModal}
              className="ios-water-button px-6 py-3.5 rounded-2xl text-slate-100 hover:text-sky-300 text-sm font-mono font-medium flex items-center space-x-2"
            >
              <Download className="w-4 h-4 text-sky-400" />
              <span>Download CV</span>
            </button>

            {/* AI Assistant Quick Launcher */}
            <button
              onClick={onOpenAiAssistant}
              className="ios-water-button px-5 py-3.5 rounded-2xl text-purple-200 hover:text-white text-sm font-mono flex items-center space-x-2 border-purple-400/40"
            >
              <Sparkles className="w-4 h-4 text-purple-300 animate-pulse" />
              <span>Ask AI Portfolio</span>
            </button>
          </motion.div>

          {/* Social Links & Quick Contact */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="flex items-center space-x-6 pt-4 border-t border-slate-800/80 text-slate-400 text-xs font-mono"
          >
            <a
              href={cvData.personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 hover:text-sky-400 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href={`mailto:${cvData.personalInfo.email}`}
              className="flex items-center space-x-1.5 hover:text-sky-400 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
            <a
              href={`tel:${cvData.personalInfo.phones[0].replace(/\s+/g, '')}`}
              className="flex items-center space-x-1.5 hover:text-sky-400 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>{cvData.personalInfo.phones[0]}</span>
            </a>
          </motion.div>
        </div>

        {/* Right Column — Photo with Atmospheric Treatment & Floating Code Panel */}
        <div className="lg:col-span-5 relative flex justify-center items-center">
          
          {/* Backlit Glow Ring */}
          <div
            className="absolute w-[320px] sm:w-[400px] h-[320px] sm:h-[400px] rounded-full bg-gradient-to-tr from-sky-500/30 via-purple-600/30 to-cyan-400/20 blur-2xl animate-pulse-glow pointer-events-none"
            style={{
              transform: `translate(${mouseOffset.x * 12}px, ${mouseOffset.y * 12}px)`,
            }}
          />

          {/* Primary Photo Wrapper */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative z-10 w-full max-w-[340px] sm:max-w-[400px] aspect-[3/4] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/10 group"
            style={{
              transform: `translate(${mouseOffset.x * 15}px, ${mouseOffset.y * 15}px)`,
            }}
          >
            {/* The Authentic Photo */}
            <img
              src={profilePhoto}
              alt="Muhammad Auwal Abubakar"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />

            {/* Atmospheric Gradient Blend Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/10 via-transparent to-purple-500/10 mix-blend-overlay" />
            
            {/* Rim light border */}
            <div className="absolute inset-0 border border-sky-400/20 rounded-3xl pointer-events-none group-hover:border-sky-400/50 transition-colors" />

            {/* Floating Tag Overlay on Photo */}
            <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl glass-panel bg-slate-950/80 border border-white/10 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono text-slate-200">Muhammad Auwal Abubakar</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/30">
                Software Engineer
              </span>
            </div>
          </motion.div>

          {/* Floating Developer Code Panel */}
          <motion.div
            initial={{ opacity: 0, x: 40, y: 40 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="absolute -bottom-6 -right-2 sm:right-2 z-20 w-72 sm:w-80 rounded-2xl glass-panel bg-slate-950/90 border border-sky-500/30 p-4 shadow-2xl animate-float backdrop-blur-2xl"
            style={{
              transform: `translate(${mouseOffset.x * 22}px, ${mouseOffset.y * 22}px)`,
            }}
          >
            {/* Code Panel Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
              <div className="flex items-center space-x-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <div className="flex items-center space-x-1 text-[11px] font-mono text-slate-400">
                <Terminal className="w-3 h-3 text-cyan-400" />
                <span>developer.ts</span>
              </div>
            </div>

            {/* Code Content */}
            <div className="font-mono text-[11px] leading-relaxed space-y-1 text-slate-300">
              {codeSnippet.slice(0, typedLineIndex).map((line, idx) => (
                <div key={idx} className="flex">
                  <span className="text-slate-600 w-5 select-none text-right pr-2">{idx + 1}</span>
                  <span
                    className={
                      line.includes('const') || line.includes('role')
                        ? 'text-sky-300'
                        : line.includes('Available')
                        ? 'text-emerald-400 font-bold'
                        : 'text-purple-300'
                    }
                  >
                    {line}
                  </span>
                </div>
              ))}
              {typedLineIndex < codeSnippet.length && (
                <span className="inline-block w-2 h-3.5 bg-cyan-400 animate-pulse ml-5" />
              )}
            </div>
          </motion.div>

        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="mt-12 flex flex-col items-center justify-center space-y-2 cursor-pointer z-10"
        onClick={() => onNavigate('about')}
      >
        <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">
          SCROLL TO EXPLORE
        </span>
        <div className="w-5 h-9 rounded-full border border-slate-700 flex justify-center p-1">
          <motion.div
            className="w-1 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#38bdf8]"
            animate={{ y: [0, 14, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
};
