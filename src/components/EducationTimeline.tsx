import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, School, MapPin, Calendar, Award } from 'lucide-react';
import { cvData } from '../data/cvData';

export const EducationTimeline: React.FC = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-14">
        <div className="flex items-center space-x-3 text-cyan-400 font-mono text-xs tracking-widest uppercase mb-2">
          <span className="w-8 h-[1px] bg-cyan-400" />
          <span>Academic Foundation</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          EDUCATION & <span className="bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent">QUALIFICATIONS</span>
        </h2>
      </div>

      {/* Grid of Education Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cvData.education.map((edu, idx) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="glass-card p-6 sm:p-7 rounded-3xl border border-white/10 hover:border-sky-500/30 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-sky-500/10 border border-sky-500/20 text-sky-400 group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-purple-300">
                  {edu.years}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors leading-snug">
                {edu.degree}
              </h3>

              <div className="mt-2 space-y-1 text-xs font-mono text-slate-400">
                <div className="flex items-center space-x-1.5 text-slate-300">
                  <School className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span className="font-semibold">{edu.institution}</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                  <span>{edu.location}</span>
                </div>
              </div>

              <p className="mt-4 text-xs text-slate-300 leading-relaxed font-sans">
                {edu.description}
              </p>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>Verified Credential</span>
              <Award className="w-3.5 h-3.5 text-sky-400" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
