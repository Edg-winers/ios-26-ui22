import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Sparkles, Bot, User, Code2, CheckCircle2 } from 'lucide-react';
import { cvData } from '../data/cvData';

interface AiAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ChatMessage {
  sender: 'user' | 'ai';
  text: string;
}

export const AiAssistantModal: React.FC<AiAssistantModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: 'ai',
      text: `Hello! I am Dev. Muhammad Auwal Abubakar's AI Portfolio Assistant. Ask me anything about Dev. Muhammad's web development experience, technical skills, education at Jigawa State Polytechnic, or past projects!`,
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  if (!isOpen) return null;

  const quickQuestions = [
    'What is Muhammad\'s primary tech stack?',
    'Tell me about his work at KowaGuru Tech.',
    'What awards or certificates has he won?',
    'What are his contact details?',
  ];

  const handleSend = async (questionText?: string) => {
    const textToSend = questionText || input;
    if (!textToSend.trim()) return;

    // Add user message
    const userMsg: ChatMessage = { sender: 'user', text: textToSend };
    setMessages((prev) => [...prev, userMsg]);
    if (!questionText) setInput('');
    setIsTyping(true);

    // Call server API route `/api/ai-chat` or generate intelligent local response
    try {
      const res = await fetch('/api/ai-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: textToSend }),
      });

      if (res.ok) {
        const data = await res.json();
        setMessages((prev) => [...prev, { sender: 'ai', text: data.reply }]);
      } else {
        // Local intelligent answer generator using CV data
        const fallbackReply = generateFallbackReply(textToSend);
        setMessages((prev) => [...prev, { sender: 'ai', text: fallbackReply }]);
      }
    } catch (err) {
      const fallbackReply = generateFallbackReply(textToSend);
      setMessages((prev) => [...prev, { sender: 'ai', text: fallbackReply }]);
    } finally {
      setIsTyping(false);
    }
  };

  const generateFallbackReply = (q: string): string => {
    const query = q.toLowerCase();
    if (query.includes('stack') || query.includes('skill') || query.includes('technolog')) {
      return `Muhammad's primary tech stack includes React, TypeScript, Node.js, Express, Tailwind CSS, HTML5/CSS3, and Git. In addition, he is proficient in UI/UX prototyping, Adobe Creative Suite (Photoshop, Illustrator, Premiere Pro), videography, and web content strategy.`;
    }
    if (query.includes('kowaguru') || query.includes('experience') || query.includes('work')) {
      return `At KowaGuru Technology Limited (2025–2026), Muhammad serves as Software Operator & Web Developer. He develops and deploys responsive client web apps, builds front-end and back-end systems, and collaborates with stakeholders to deliver high-performance applications.`;
    }
    if (query.includes('award') || query.includes('certificat')) {
      return `In 2024, Muhammad won the prestigious "Certificate of Award for Best Sport Graphic Designer" from BICA Nigeria. He also holds a Mastercard EDC Pan Atlantic University entrepreneurship certificate, Basic Arabic Certificate from ICLR USA, and attended the NITDA International Conference (Digital Nigeria 2023).`;
    }
    if (query.includes('education') || query.includes('polytechnic')) {
      return `Muhammad is currently pursuing his Diploma in Computer Engineering Technology at Jigawa State Polytechnic Dutse (2024–2026). Previously, he completed his SSCE in Science at Al-Hikmah International School Birnin Kudu (2022–2024).`;
    }
    if (query.includes('contact') || query.includes('email') || query.includes('phone')) {
      return `You can reach Muhammad via email at muhammadbindaddy@gmail.com, phone at +234 7067962658 / +234 8137834828, or visit his GitHub repository at https://github.com/Muhammadumma.`;
    }
    return `Muhammad Auwal Abubakar is a Senior Web Developer with 2 years of experience specializing in full-stack web applications, UI/UX design, and multimedia content. Feel free to ask more about his education, experience, or skills!`;
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-xl h-[600px] glass-card bg-slate-950 border border-purple-500/30 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
        >
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-slate-800 bg-slate-900/80 flex items-center justify-between shrink-0">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-xl bg-purple-500/20 border border-purple-500/40 text-purple-400">
                <Sparkles className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">AI Portfolio Assistant</h3>
                <span className="text-[10px] font-mono text-cyan-400">Powered by Gemini AI Engine</span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="ios-water-button p-2 rounded-xl text-slate-300 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Box */}
          <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4 font-sans text-xs sm:text-sm">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex space-x-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'ai' && (
                  <div className="w-7 h-7 rounded-lg bg-purple-500/20 border border-purple-500/40 text-purple-300 flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] p-3.5 rounded-2xl leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-sky-600 text-white font-medium rounded-tr-none'
                      : 'bg-slate-900/90 border border-slate-800 text-slate-200 rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center space-x-2 text-slate-400 font-mono text-xs">
                <Bot className="w-4 h-4 text-purple-400 animate-spin" />
                <span>Thinking...</span>
              </div>
            )}
          </div>

          {/* Quick Buttons */}
          <div className="px-4 py-2 border-t border-slate-800/80 bg-slate-900/40 flex items-center space-x-2 overflow-x-auto text-[11px] font-mono shrink-0">
            {quickQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(q)}
                className="ios-water-button px-3 py-1 rounded-xl text-sky-300 hover:text-white whitespace-nowrap"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <div className="p-4 border-t border-slate-800 bg-slate-950 shrink-0">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center space-x-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask anything about Dev. Muhammad's portfolio or experience..."
                className="flex-1 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-purple-400"
              />
              <button
                type="submit"
                className="ios-water-button p-2.5 rounded-xl text-white font-bold"
              >
                <Send className="w-4 h-4 text-sky-300" />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
