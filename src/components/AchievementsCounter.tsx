import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Award, Trophy, Users, Calendar, Medal } from 'lucide-react';
import { cvData } from '../data/cvData';

interface CountUpNumberProps {
  endValue: number;
  suffix: string;
}

const CountUpNumber: React.FC<CountUpNumberProps> = ({ endValue, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1500; // ms
    const increment = endValue / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        setCount(endValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, endValue]);

  return (
    <span ref={ref} className="font-mono">
      {count}
      {suffix}
    </span>
  );
};

export const AchievementsCounter: React.FC = () => {
  const icons = [Award, Trophy, Users, Calendar];

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 text-cyan-400 font-mono text-xs tracking-widest uppercase mb-2">
          <span className="w-8 h-[1px] bg-cyan-400" />
          <span>07 &bull; Credentials & Stats</span>
          <span className="w-8 h-[1px] bg-cyan-400" />
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          ACHIEVEMENTS <span className="bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent">& MEMBERSHIPS</span>
        </h2>
      </div>

      {/* Grid of Counters + Award Banner */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center">
        {cvData.stats.map((stat, idx) => {
          const IconComponent = icons[idx % icons.length];
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-6 rounded-3xl border border-white/10 hover:border-sky-500/40 text-center flex flex-col items-center justify-center space-y-3 group shadow-xl"
            >
              <div className="p-3 rounded-2xl bg-gradient-to-tr from-sky-500/10 to-purple-500/10 border border-sky-500/20 text-sky-400 group-hover:scale-110 transition-transform">
                <IconComponent className="w-6 h-6" />
              </div>

              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                <CountUpNumber endValue={stat.value} suffix={stat.suffix} />
              </div>

              <span className="text-xs font-mono tracking-wider text-slate-400 uppercase">
                {stat.label}
              </span>
            </motion.div>
          );
        })}

        {/* Featured Award Pill Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="col-span-2 md:col-span-1 glass-card p-6 rounded-3xl border border-amber-500/30 hover:border-amber-400 text-center flex flex-col items-center justify-center space-y-2 bg-amber-950/20 shadow-2xl"
        >
          <div className="p-3 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-amber-400">
            <Medal className="w-6 h-6 animate-pulse" />
          </div>

          <span className="text-xs font-mono font-bold text-amber-300 uppercase tracking-widest">
            Award Winner
          </span>

          <p className="text-xs text-slate-200 font-semibold leading-tight">
            Best Sport Graphic Designer
          </p>
          <span className="text-[10px] font-mono text-slate-400">BICA 2024</span>
        </motion.div>
      </div>
    </section>
  );
};
