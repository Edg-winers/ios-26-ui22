import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Mail, Phone, MapPin, Github, CheckCircle2, Sparkles } from 'lucide-react';
import { cvData } from '../data/cvData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 text-cyan-400 font-mono text-xs tracking-widest uppercase mb-2">
          <span className="w-8 h-[1px] bg-cyan-400" />
          <span>08 &bull; Contact & Collaboration</span>
          <span className="w-8 h-[1px] bg-cyan-400" />
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          LET'S CONNECT: <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">Have a project in mind?</span>
        </h2>
        <p className="text-slate-300 text-sm mt-3 font-mono">
          Let's bring your ideas to life. Reach out directly or send a message below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column — Contact Information Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-card p-6 rounded-3xl border border-white/10 space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-sky-400" />
              <span>Direct Channels</span>
            </h3>

            {/* Email */}
            <a
              href={`mailto:${cvData.personalInfo.email}`}
              className="flex items-start space-x-4 p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-sky-500/40 transition-all group"
            >
              <div className="p-3 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs font-mono text-slate-400">Email</span>
                <span className="text-sm font-semibold text-white group-hover:text-sky-300 transition-colors">
                  {cvData.personalInfo.email}
                </span>
              </div>
            </a>

            {/* Phone */}
            <div className="space-y-2">
              <span className="block text-xs font-mono text-slate-400 pl-1">Phone</span>
              {cvData.personalInfo.phones.map((phone, pIdx) => (
                <a
                  key={pIdx}
                  href={`tel:${phone.replace(/\s+/g, '')}`}
                  className="flex items-center space-x-4 p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-purple-500/40 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">
                    {phone}
                  </span>
                </a>
              ))}
            </div>

            {/* Address */}
            <div className="flex items-start space-x-4 p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="text-xs space-y-1">
                <span className="block font-mono text-slate-400">Location</span>
                <p className="text-slate-300">Dutse, Jigawa State, Nigeria</p>
                <p className="text-slate-400 text-[11px]">Opposite Freedom Radio Dutse</p>
              </div>
            </div>

            {/* GitHub */}
            <a
              href={cvData.personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-sky-400/50 text-slate-200 hover:text-white transition-all text-xs font-mono"
            >
              <div className="flex items-center space-x-3">
                <Github className="w-5 h-5 text-sky-400" />
                <span>GitHub Developer Repository</span>
              </div>
              <span className="text-sky-400">&rarr;</span>
            </a>
          </div>
        </div>

        {/* Right Column — Glass Contact Form with Focus & Glow */}
        <div className="lg:col-span-7">
          <div className="glass-card p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Message Transmitted</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  Thank you, <span className="text-cyan-400 font-semibold">{formData.name}</span>. Your message has been logged. Muhammad Auwal Abubakar will reply shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', message: '' });
                  }}
                  className="px-6 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs font-mono text-sky-400 hover:bg-slate-800"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-xl font-bold text-white mb-2 font-mono">Send Message</h3>

                {/* Name Input */}
                <div className="space-y-2">
                  <label className="block text-xs font-mono text-slate-300">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Enter your full name..."
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-slate-100 text-sm focus:outline-none transition-all ${
                      focusedField === 'name'
                        ? 'border-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.35)]'
                        : 'border-slate-800 hover:border-slate-700'
                    }`}
                  />
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label className="block text-xs font-mono text-slate-300">Your Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Enter your email address..."
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-slate-100 text-sm focus:outline-none transition-all ${
                      focusedField === 'email'
                        ? 'border-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.35)]'
                        : 'border-slate-800 hover:border-slate-700'
                    }`}
                  />
                </div>

                {/* Message Input */}
                <div className="space-y-2">
                  <label className="block text-xs font-mono text-slate-300">Your Message</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Describe your project, inquiry, or idea..."
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-slate-100 text-sm focus:outline-none transition-all resize-none ${
                      focusedField === 'message'
                        ? 'border-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.35)]'
                        : 'border-slate-800 hover:border-slate-700'
                    }`}
                  />
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  className="ios-water-button w-full py-4 rounded-2xl bg-gradient-to-r from-sky-500/40 via-cyan-400/30 to-purple-600/40 text-white font-bold text-sm tracking-wide border-sky-300/50 flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4 text-sky-300" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>

      </div>

      {/* Footer */}
      <footer className="mt-24 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-400 gap-4">
        <div>
          <span className="font-bold text-white">Dev. Muhammad Auwal Abubakar</span> &bull; Senior Web Developer
        </div>
        <div>
          &copy; {new Date().getFullYear()} Dev. Muhammad Auwal Abubakar. All rights reserved.
        </div>
      </footer>
    </section>
  );
};
