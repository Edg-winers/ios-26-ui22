import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2 } from 'lucide-react';
import { cvData } from '../data/cvData';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-16">
        <div className="flex items-center space-x-3 text-cyan-400 font-mono text-xs tracking-widest uppercase mb-2">
          <span className="w-8 h-[1px] bg-cyan-400" />
          <span>Professional Career</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          WORK <span className="bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent">EXPERIENCE</span>
        </h2>
      </div>

      {/* Vertical Timeline */}
      <div className="relative pl-6 sm:pl-10 border-l border-slate-800 space-y-12">
        {/* Animated Vertical Line Overlay */}
        <div className="absolute top-0 bottom-0 -left-[1px] w-[2px] bg-gradient-to-b from-sky-500 via-purple-500 to-cyan-400 shadow-[0_0_12px_#38bdf8]" />

        {cvData.experience.map((exp, idx) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="relative group"
          >
            {/* Glowing Node Point */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-slate-950 border-2 border-sky-400 flex items-center justify-center shadow-[0_0_15px_#38bdf8] group-hover:scale-125 transition-transform">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            </div>

            {/* Experience Card */}
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-sky-500/40 shadow-xl transition-all duration-300 transform group-hover:-translate-y-1">
              
              {/* Header Details */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800/80 mb-6">
                <div>
                  <div className="flex items-center space-x-2 text-sky-400 font-mono text-xs mb-1">
                    <Building2 className="w-4 h-4" />
                    <span className="font-bold">{exp.company}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                    {exp.role}
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
                  <span className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-purple-300">
                    <Calendar className="w-3.5 h-3.5 text-purple-400" />
                    <span>{exp.period}</span>
                  </span>
                  <span className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{exp.location}</span>
                  </span>
                </div>
              </div>

              {/* Responsibilities List */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono tracking-widest text-slate-400 uppercase">
                  Key Achievements & Responsibilities
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-300">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start space-x-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
