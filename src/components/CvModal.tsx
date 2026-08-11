import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, Printer, Check, GraduationCap, Briefcase, Award, Phone, Mail, MapPin, Github } from 'lucide-react';
import { cvData } from '../data/cvData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl max-h-[90vh] glass-card bg-slate-950 border border-sky-500/30 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
        >
          {/* Modal Header */}
          <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-900/60 shrink-0">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                Official Document
              </span>
              <h3 className="text-xl font-bold text-white">Curriculum Vitae — {cvData.personalInfo.fullName}</h3>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={handlePrint}
                className="ios-water-button px-3.5 py-2 rounded-xl text-slate-200 text-xs font-mono flex items-center space-x-1.5"
              >
                <Printer className="w-3.5 h-3.5 text-sky-400" />
                <span>Print / Save PDF</span>
              </button>
              <button
                onClick={onClose}
                className="ios-water-button p-2 rounded-xl text-slate-300 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8 font-sans text-slate-300 text-sm">
            
            {/* Header / Biodata */}
            <div className="border-b border-slate-800 pb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h1 className="text-2xl font-extrabold text-white">{cvData.personalInfo.fullName}</h1>
                <p className="text-sky-400 font-mono text-sm font-semibold mt-1">{cvData.personalInfo.title}</p>
                <p className="text-xs text-slate-400 mt-2">{cvData.summary}</p>
              </div>

              <div className="space-y-1.5 text-xs font-mono bg-slate-900/80 p-4 rounded-2xl border border-slate-800">
                <div className="flex items-center space-x-2">
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{cvData.personalInfo.email}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-3.5 h-3.5 text-purple-400" />
                  <span>{cvData.personalInfo.phones.join(' / ')}</span>
                </div>
                <div className="flex items-start space-x-2">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{cvData.personalInfo.address1}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Github className="w-3.5 h-3.5 text-sky-400" />
                  <a href={cvData.personalInfo.github} target="_blank" rel="noreferrer" className="underline hover:text-sky-300">
                    {cvData.personalInfo.github}
                  </a>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-400 flex items-center space-x-2 border-b border-slate-800 pb-1">
                <Briefcase className="w-4 h-4" />
                <span>Professional Work Experience</span>
              </h4>
              {cvData.experience.map((exp) => (
                <div key={exp.id} className="bg-slate-900/40 p-4 rounded-2xl border border-slate-800 space-y-2">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="font-bold text-white text-sm">{exp.role} @ {exp.company}</span>
                    <span className="text-purple-300">{exp.period}</span>
                  </div>
                  <ul className="list-disc list-inside text-xs text-slate-300 space-y-1">
                    {exp.responsibilities.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-400 flex items-center space-x-2 border-b border-slate-800 pb-1">
                <GraduationCap className="w-4 h-4" />
                <span>Education</span>
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {cvData.education.map((edu) => (
                  <div key={edu.id} className="bg-slate-900/40 p-4 rounded-2xl border border-slate-800">
                    <span className="text-[10px] font-mono text-purple-400">{edu.years}</span>
                    <h5 className="font-bold text-white text-xs mt-1">{edu.degree}</h5>
                    <p className="text-[11px] text-slate-400 mt-0.5">{edu.institution}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certificates & Training */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-400 flex items-center space-x-2 border-b border-slate-800 pb-1">
                <Award className="w-4 h-4" />
                <span>Certificates & Trainings</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                {cvData.certificates.map((c) => (
                  <div key={c.id} className="p-3 bg-slate-900/60 rounded-xl border border-slate-800 flex justify-between">
                    <div>
                      <span className="font-bold text-white block">{c.title}</span>
                      <span className="text-slate-400 text-[11px]">{c.issuer}</span>
                    </div>
                    <span className="text-sky-400">{c.year}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
