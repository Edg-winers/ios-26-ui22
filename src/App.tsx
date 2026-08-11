import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageId } from './types';
import { CustomCursor } from './components/CustomCursor';
import { ParticleNetworkCanvas } from './components/ParticleNetworkCanvas';
import { InitialLoader } from './components/InitialLoader';
import { Navbar } from './components/Navbar';
import { StoryboardNavigator } from './components/StoryboardNavigator';
import { PageTransitionOverlay } from './components/PageTransitionOverlay';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { SkillsConstellation } from './components/SkillsConstellation';
import { EducationTimeline } from './components/EducationTimeline';
import { CertificatesSection } from './components/CertificatesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { AchievementsCounter } from './components/AchievementsCounter';
import { ContactSection } from './components/ContactSection';
import { CvModal } from './components/CvModal';
import { AiAssistantModal } from './components/AiAssistantModal';
import { IosControlCenterWidget } from './components/IosControlCenterWidget';
import { SlidersHorizontal } from 'lucide-react';

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [targetPage, setTargetPage] = useState<PageId>('home');
  const [isCvOpen, setIsCvOpen] = useState(false);
  const [isAiOpen, setIsAiOpen] = useState(false);
  const [isIosCcOpen, setIsIosCcOpen] = useState(false);

  // Smooth cinematic page navigation
  const handleNavigate = (page: PageId) => {
    if (page === currentPage || isTransitioning) return;

    setTargetPage(page);
    setIsTransitioning(true);

    setTimeout(() => {
      setCurrentPage(page);
      const element = document.getElementById(page);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 400);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 850);
  };

  // Scroll spy to update active section automatically as user scrolls
  useEffect(() => {
    if (!loaded) return;

    const sectionIds = [
      'home',
      'about',
      'experience',
      'skills',
      'education',
      'portfolio',
      'achievements',
      'contact',
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const sec = document.getElementById(sectionIds[i]);
        if (sec && sec.offsetTop <= scrollPosition) {
          const matchedPage = sectionIds[i] as PageId;
          if (currentPage !== matchedPage && !isTransitioning) {
            setCurrentPage(matchedPage);
          }
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loaded, currentPage, isTransitioning]);

  const pageNames: Record<string, string> = {
    home: '01 — HERO HOME',
    about: '02 — ABOUT ME',
    experience: '03 — EXPERIENCE',
    skills: '04 — SKILLS',
    education: '05 — EDUCATION & CERTIFICATES',
    portfolio: '06 — PORTFOLIO',
    achievements: '07 — ACHIEVEMENTS & MEMBERSHIPS',
    contact: '08 — CONTACT',
  };

  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 font-sans selection:bg-sky-500/30 selection:text-sky-300 overflow-x-hidden">
      
      {/* Initial Loader Portal */}
      {!loaded && <InitialLoader onComplete={() => setLoaded(true)} />}

      {/* Main Experience */}
      {loaded && (
        <>
          {/* Custom Dual Cursor System */}
          <CustomCursor />

          {/* Interactive Network Particle Background */}
          <ParticleNetworkCanvas particleCount={75} />

          {/* Global Navbar */}
          <Navbar
            currentPage={currentPage}
            onNavigate={handleNavigate}
            onOpenCvModal={() => setIsCvOpen(true)}
            onOpenAiAssistant={() => setIsAiOpen(true)}
            onOpenIosControlCenter={() => setIsIosCcOpen(true)}
          />

          {/* Storyboard Left Timeline Navigator */}
          <StoryboardNavigator
            activeSectionId={currentPage}
            onNavigate={handleNavigate}
          />

          {/* Cinematic Page Transition Overlay */}
          <PageTransitionOverlay
            isTransitioning={isTransitioning}
            targetPageName={pageNames[targetPage] || 'Portfolio Experience'}
          />

          {/* Continuous Scrollable Architecture matching Storyboard 01 - 08 */}
          <main className="relative z-10 space-y-16 pl-0 xl:pl-64">
            
            {/* 01 — HERO HOME */}
            <div id="home" className="min-h-screen flex flex-col justify-center">
              <HeroSection
                onNavigate={handleNavigate}
                onOpenCvModal={() => setIsCvOpen(true)}
                onOpenAiAssistant={() => setIsAiOpen(true)}
              />
            </div>

            {/* 02 — ABOUT ME */}
            <div id="about" className="pt-16">
              <AboutSection />
            </div>

            {/* 03 — EXPERIENCE */}
            <div id="experience" className="pt-16">
              <ExperienceTimeline />
            </div>

            {/* 04 — SKILLS */}
            <div id="skills" className="pt-16">
              <SkillsConstellation />
            </div>

            {/* 05 — EDUCATION & CERTIFICATES */}
            <div id="education" className="pt-16">
              <EducationTimeline />
              <CertificatesSection />
            </div>

            {/* 06 — PORTFOLIO */}
            <div id="portfolio" className="pt-16">
              <PortfolioSection />
            </div>

            {/* 07 — ACHIEVEMENTS & MEMBERSHIPS */}
            <div id="achievements" className="pt-16">
              <AchievementsCounter />
            </div>

            {/* 08 — CONTACT */}
            <div id="contact" className="pt-16">
              <ContactSection />
            </div>

          </main>

          {/* Floating iOS 26 Control Center Quick Launcher */}
          <div className="fixed bottom-6 right-6 z-40">
            <button
              onClick={() => setIsIosCcOpen(true)}
              className="ios-water-button p-3.5 rounded-2xl text-cyan-300 shadow-[0_10px_30px_rgba(56,189,248,0.35)] flex items-center space-x-2 text-xs font-mono font-bold hover:scale-105 transition-transform border-cyan-400/50"
              title="Open iOS 26 Control Center"
            >
              <SlidersHorizontal className="w-4 h-4 text-cyan-300 animate-pulse" />
              <span className="hidden sm:inline text-white">iOS Control Center</span>
            </button>
          </div>

          {/* Interactive Modals */}
          <CvModal isOpen={isCvOpen} onClose={() => setIsCvOpen(false)} />
          <AiAssistantModal isOpen={isAiOpen} onClose={() => setIsAiOpen(false)} />
          <IosControlCenterWidget
            isOpen={isIosCcOpen}
            onClose={() => setIsIosCcOpen(false)}
            onOpenAiAssistant={() => setIsAiOpen(true)}
          />
        </>
      )}

    </div>
  );
}
