import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Download, MessageSquare, Bot, Sparkles, SlidersHorizontal } from 'lucide-react';
import { PageId } from '../types';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenCvModal: () => void;
  onOpenAiAssistant: () => void;
  onOpenIosControlCenter?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenCvModal,
  onOpenAiAssistant,
  onOpenIosControlCenter,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 lg:px-8 py-4 transition-all duration-500">
      <nav
        className={`max-w-7xl mx-auto flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${
          isScrolled
            ? 'glass-panel bg-slate-950/80 shadow-[0_8px_32px_rgba(0,0,0,0.5)] border-white/10 py-2.5 backdrop-blur-2xl'
            : 'bg-transparent border border-transparent'
        }`}
      >
        {/* Brand Logo / Initials */}
        <button
          onClick={() => onNavigate('home')}
          className="group flex items-center space-x-3 text-left focus:outline-none"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-purple-600 p-[1px] transition-transform duration-300 group-hover:scale-105 shadow-[0_0_15px_rgba(56,189,248,0.3)]">
            <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
              <span className="text-sm font-extrabold tracking-wider bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent font-mono">
                MAA
              </span>
            </div>
          </div>
          <div className="hidden sm:block">
            <span className="block text-sm font-bold text-white leading-none tracking-wide group-hover:text-cyan-400 transition-colors">
              Dev. Muhammad Auwal
            </span>
            <span className="block text-[10px] font-mono tracking-widest text-slate-400 uppercase mt-0.5">
              Senior Web Developer
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1 relative rounded-full bg-slate-900/40 p-1 border border-white/10 backdrop-blur-xl">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`relative px-4 py-1.5 text-xs font-semibold tracking-wider transition-colors duration-200 uppercase rounded-full ${
                  isActive ? 'text-white' : 'text-slate-300 hover:text-white'
                }`}
              >
                {/* Active Gliding Pill Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-400/35 via-cyan-400/25 to-purple-500/35 border border-sky-300/60 shadow-[0_0_15px_rgba(56,189,248,0.4)] backdrop-blur-md"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Action Buttons — iOS 26 Liquid Water Sheen */}
        <div className="hidden sm:flex items-center space-x-3">
          {/* iOS 26 Liquid Control Center Trigger */}
          {onOpenIosControlCenter && (
            <button
              onClick={onOpenIosControlCenter}
              className="ios-water-button flex items-center space-x-1.5 px-3.5 py-2 rounded-2xl text-cyan-200 hover:text-white text-xs font-mono tracking-wide border-cyan-400/40"
              title="Open iOS 26 Liquid Control Center"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-cyan-300 animate-pulse" />
              <span>iOS UI</span>
            </button>
          )}

          {/* AI Assistant Button */}
          <button
            onClick={onOpenAiAssistant}
            className="ios-water-button flex items-center space-x-1.5 px-3.5 py-2 rounded-2xl text-purple-200 hover:text-white text-xs font-mono tracking-wide"
            title="Ask AI Assistant about Dev. Muhammad"
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-300 animate-pulse" />
            <span>AI Assistant</span>
          </button>

          {/* Download CV */}
          <button
            onClick={onOpenCvModal}
            className="ios-water-button flex items-center space-x-1.5 px-3.5 py-2 rounded-2xl text-slate-100 hover:text-sky-300 text-xs font-mono font-medium"
          >
            <Download className="w-3.5 h-3.5 text-sky-400" />
            <span>CV</span>
          </button>

          {/* Let's Talk CTA */}
          <button
            onClick={() => onNavigate('contact')}
            className="ios-water-button px-4 py-2 rounded-2xl bg-gradient-to-r from-sky-500/40 via-cyan-400/30 to-purple-600/40 text-white font-medium text-xs tracking-wider border-sky-300/40 hover:border-sky-300"
          >
            <span className="relative z-10 flex items-center space-x-1.5 font-bold">
              <MessageSquare className="w-3.5 h-3.5 text-sky-300" />
              <span>Let's Talk</span>
            </span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center space-x-2">
          <button
            onClick={onOpenAiAssistant}
            className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-300"
            title="Ask AI"
          >
            <Bot className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden max-w-7xl mx-auto mt-2 rounded-2xl glass-panel bg-slate-950/95 border border-white/10 overflow-hidden shadow-2xl"
          >
            <div className="p-5 flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left px-4 py-2.5 rounded-xl font-mono text-sm tracking-wide transition-colors ${
                    currentPage === item.id
                      ? 'bg-sky-500/15 text-sky-400 border border-sky-500/30 font-bold'
                      : 'text-slate-300 hover:bg-slate-900'
                  }`}
                >
                  {item.label}
                </button>
              ))}

              <div className="pt-3 border-t border-slate-800 flex flex-col space-y-2">
                <button
                  onClick={() => {
                    onOpenCvModal();
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center justify-center space-x-2 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs font-mono"
                >
                  <Download className="w-4 h-4 text-sky-400" />
                  <span>Download Complete CV</span>
                </button>

                <button
                  onClick={() => {
                    onNavigate('contact');
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center justify-center space-x-2 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-purple-600 text-white text-xs font-mono font-bold"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Let's Talk</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
