import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Wifi,
  Bluetooth,
  Radio,
  Airplay,
  Sun,
  Volume2,
  Moon,
  Zap,
  SlidersHorizontal,
  X,
  Play,
  Pause,
  SkipForward,
  Lock,
  Bell,
  Smartphone,
  Eye,
  Sparkles,
  Music,
  Check
} from 'lucide-react';

interface IosControlCenterWidgetProps {
  isOpen: boolean;
  onClose: () => void;
  onToggleTheme?: () => void;
  onOpenAiAssistant?: () => void;
}

export const IosControlCenterWidget: React.FC<IosControlCenterWidgetProps> = ({
  isOpen,
  onClose,
  onOpenAiAssistant,
}) => {
  const [wifiOn, setWifiOn] = useState(true);
  const [bluetoothOn, setBluetoothOn] = useState(true);
  const [airplaneOn, setAirplaneOn] = useState(false);
  const [cellularOn, setCellularOn] = useState(true);
  
  const [brightness, setBrightness] = useState(85);
  const [volume, setVolume] = useState(70);

  const [isPlaying, setIsPlaying] = useState(false);
  const [focusMode, setFocusMode] = useState(false);
  const [flashlight, setFlashlight] = useState(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-2xl"
          />

          {/* iOS 18 Liquid Control Center Overlay Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed z-50 top-16 right-4 sm:right-12 w-[340px] sm:w-[385px] p-5 ios-water-card border border-white/30 text-white shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden font-sans select-none"
          >
            {/* Glossy Liquid Top Highlight */}
            <div className="absolute -top-12 -right-12 w-36 h-36 rounded-full bg-cyan-400/20 blur-2xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-36 h-36 rounded-full bg-purple-500/20 blur-2xl pointer-events-none" />

            {/* Header Title */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-xs font-mono font-bold text-sky-200 uppercase tracking-wider">
                  iOS 26 Liquid Control Center
                </span>
              </div>
              <button
                onClick={onClose}
                className="ios-water-button p-1.5 rounded-full text-slate-300 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Grid 1: Connectivity & Now Playing Widgets */}
            <div className="grid grid-cols-2 gap-3.5 mb-4">
              
              {/* 1. Connectivity 4-Pill Liquid Container */}
              <div className="p-3.5 rounded-3xl bg-white/5 border border-white/15 backdrop-blur-2xl grid grid-cols-2 gap-2.5">
                {/* Airplane */}
                <button
                  onClick={() => setAirplaneOn(!airplaneOn)}
                  className={`p-3 rounded-full flex items-center justify-center transition-all ${
                    airplaneOn
                      ? 'bg-amber-500 text-white shadow-[0_0_15px_rgba(245,158,11,0.5)]'
                      : 'bg-white/10 text-slate-300 hover:bg-white/20'
                  }`}
                >
                  <Airplay className="w-4 h-4" />
                </button>

                {/* Cellular */}
                <button
                  onClick={() => setCellularOn(!cellularOn)}
                  className={`p-3 rounded-full flex items-center justify-center transition-all ${
                    cellularOn
                      ? 'bg-emerald-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.5)]'
                      : 'bg-white/10 text-slate-300 hover:bg-white/20'
                  }`}
                >
                  <Radio className="w-4 h-4" />
                </button>

                {/* Wi-Fi */}
                <button
                  onClick={() => setWifiOn(!wifiOn)}
                  className={`p-3 rounded-full flex items-center justify-center transition-all ${
                    wifiOn
                      ? 'bg-sky-500 text-white shadow-[0_0_15px_rgba(56,189,248,0.5)]'
                      : 'bg-white/10 text-slate-300 hover:bg-white/20'
                  }`}
                >
                  <Wifi className="w-4 h-4" />
                </button>

                {/* Bluetooth */}
                <button
                  onClick={() => setBluetoothOn(!bluetoothOn)}
                  className={`p-3 rounded-full flex items-center justify-center transition-all ${
                    bluetoothOn
                      ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.5)]'
                      : 'bg-white/10 text-slate-300 hover:bg-white/20'
                  }`}
                >
                  <Bluetooth className="w-4 h-4" />
                </button>
              </div>

              {/* 2. Now Playing Audio Widget */}
              <div className="p-3.5 rounded-3xl bg-white/5 border border-white/15 backdrop-blur-2xl flex flex-col justify-between">
                <div className="flex items-center space-x-2">
                  <div className="p-2 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/30">
                    <Music className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="block text-[11px] font-bold text-white truncate">
                      Dev. Muhammad
                    </span>
                    <span className="block text-[9px] font-mono text-slate-300 truncate">
                      Portfolio Audio
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-around pt-2 border-t border-white/10">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-2 rounded-full bg-white/15 text-white hover:bg-white/30 transition-all"
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  </button>
                  <button className="p-2 rounded-full bg-white/10 text-slate-300 hover:text-white">
                    <SkipForward className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>

            {/* Grid 2: Vertical Liquid Sliders (Brightness & Volume) */}
            <div className="grid grid-cols-2 gap-3.5 mb-4">
              
              {/* Brightness Liquid Meter */}
              <div className="p-3 rounded-3xl bg-white/5 border border-white/15 backdrop-blur-2xl flex items-center space-x-3">
                <Sun className="w-5 h-5 text-amber-300 shrink-0" />
                <div className="flex-1 space-y-1">
                  <div className="flex justify-between text-[10px] font-mono text-slate-300">
                    <span>Glow</span>
                    <span>{brightness}%</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    value={brightness}
                    onChange={(e) => setBrightness(Number(e.target.value))}
                    className="w-full accent-sky-400 cursor-pointer h-2 bg-white/20 rounded-lg"
                  />
                </div>
              </div>

              {/* Volume Liquid Meter */}
              <div className="p-3 rounded-3xl bg-white/5 border border-white/15 backdrop-blur-2xl flex items-center space-x-3">
                <Volume2 className="w-5 h-5 text-sky-300 shrink-0" />
                <div className="flex-1 space-y-1">
                  <div className="flex justify-between text-[10px] font-mono text-slate-300">
                    <span>Sound</span>
                    <span>{volume}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={volume}
                    onChange={(e) => setVolume(Number(e.target.value))}
                    className="w-full accent-purple-400 cursor-pointer h-2 bg-white/20 rounded-lg"
                  />
                </div>
              </div>

            </div>

            {/* Grid 3: Quick Round Liquid Buttons */}
            <div className="grid grid-cols-4 gap-3 mb-4">
              {/* Flashlight */}
              <button
                onClick={() => setFlashlight(!flashlight)}
                className={`p-3 rounded-full flex flex-col items-center justify-center transition-all ${
                  flashlight
                    ? 'bg-amber-400 text-slate-950 shadow-[0_0_18px_rgba(251,191,36,0.6)]'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <Zap className="w-4 h-4" />
              </button>

              {/* Focus */}
              <button
                onClick={() => setFocusMode(!focusMode)}
                className={`p-3 rounded-full flex flex-col items-center justify-center transition-all ${
                  focusMode
                    ? 'bg-purple-600 text-white shadow-[0_0_18px_rgba(147,51,234,0.6)]'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <Moon className="w-4 h-4" />
              </button>

              {/* Lock */}
              <button className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 flex flex-col items-center justify-center transition-all">
                <Lock className="w-4 h-4" />
              </button>

              {/* AI Quick */}
              <button
                onClick={() => {
                  onClose();
                  onOpenAiAssistant?.();
                }}
                className="p-3 rounded-full bg-gradient-to-tr from-sky-400 to-purple-500 text-white hover:scale-105 flex flex-col items-center justify-center transition-all shadow-md"
              >
                <Sparkles className="w-4 h-4" />
              </button>
            </div>

            {/* Footer Water Banner */}
            <div className="p-3 rounded-2xl bg-sky-500/10 border border-sky-400/30 text-center">
              <span className="text-[11px] font-mono text-sky-200">
                Dev. Muhammad Auwal Abubakar &bull; iOS 26 Liquid Experience
              </span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
