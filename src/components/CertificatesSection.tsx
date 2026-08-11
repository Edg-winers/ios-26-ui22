import React from 'react';
import { motion } from 'motion/react';
import { Award, Medal, BookOpen, Users, Globe, ExternalLink, ShieldCheck } from 'lucide-react';
import { cvData } from '../data/cvData';

export const CertificatesSection: React.FC = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-14">
        <div className="flex items-center space-x-3 text-cyan-400 font-mono text-xs tracking-widest uppercase mb-2">
          <span className="w-8 h-[1px] bg-cyan-400" />
          <span>Honors & Professional Growth</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          CERTIFICATES & <span className="bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent">CONFERENCES</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Certificates & Awards */}
        <div className="lg:col-span-7 space-y-4">
          <h3 className="text-sm font-mono tracking-widest text-slate-400 uppercase mb-4 flex items-center space-x-2">
            <Award className="w-4 h-4 text-sky-400" />
            <span>Certificates of Excellence & Awards</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cvData.certificates.map((cert, idx) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -4, rotateX: 3, rotateY: 3 }}
                className="glass-card p-5 rounded-2xl border border-white/10 hover:border-sky-400/40 relative overflow-hidden group shadow-lg"
              >
                {/* Light Sweep Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                    <Medal className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-sky-300">
                    {cert.year}
                  </span>
                </div>

                <h4 className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors leading-snug">
                  {cert.title}
                </h4>

                <p className="text-xs font-mono text-slate-400 mt-2 flex items-center space-x-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{cert.issuer}</span>
                </p>
              </motion.div>
            ))}

            {/* Other Trainings */}
            {cvData.otherTraining.map((tr, idx) => (
              <motion.div
                key={tr.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (idx + 3) * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass-card p-5 rounded-2xl border border-white/10 hover:border-purple-400/40 relative overflow-hidden group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-purple-300">
                    {tr.year}
                  </span>
                </div>

                <h4 className="text-sm font-bold text-white leading-snug">{tr.title}</h4>
                <p className="text-xs font-mono text-slate-400 mt-2">{tr.organization}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Conferences & Professional Memberships */}
        <div className="lg:col-span-5 space-y-6">
          {/* Conferences */}
          <div>
            <h3 className="text-sm font-mono tracking-widest text-slate-400 uppercase mb-4 flex items-center space-x-2">
              <Globe className="w-4 h-4 text-purple-400" />
              <span>Conferences & Summits</span>
            </h3>

            <div className="space-y-3">
              {cvData.conferences.map((conf, idx) => (
                <motion.div
                  key={conf.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="glass-card p-4 rounded-2xl border border-white/5 hover:border-sky-500/30 flex items-center justify-between"
                >
                  <div>
                    <h4 className="text-xs font-bold text-white">{conf.title}</h4>
                    <span className="text-[11px] font-mono text-slate-400">{conf.location}</span>
                  </div>
                  <span className="text-xs font-mono px-2 py-1 rounded bg-slate-900 border border-slate-800 text-cyan-400">
                    {conf.year}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Memberships */}
          <div>
            <h3 className="text-sm font-mono tracking-widest text-slate-400 uppercase mb-4 flex items-center space-x-2">
              <Users className="w-4 h-4 text-cyan-400" />
              <span>Professional Memberships</span>
            </h3>

            <div className="space-y-3">
              {cvData.memberships.map((mem) => (
                <div
                  key={mem.id}
                  className="glass-card p-4 rounded-2xl border border-white/5 hover:border-purple-500/30 flex items-center space-x-3"
                >
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  <div>
                    <h4 className="text-xs font-bold text-white">{mem.name}</h4>
                    <span className="text-[11px] font-mono text-slate-400">{mem.organization}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
