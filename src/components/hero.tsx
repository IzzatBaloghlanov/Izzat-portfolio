'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Code2, Globe, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-background to-background" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium border border-blue-500/20 mb-6">
            Available for freelance
          </span>
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-5xl sm:text-7xl font-bold tracking-tight mb-6">
          <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">IZZAT BALOGHLANOV</span>
        </motion.h1>
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-xl sm:text-2xl text-slate-400 mb-8 max-w-2xl mx-auto">
          Frontend Developer & React Specialist<br />
          <span className="text-cyan-400">Javascript · React · TypeScript · Next.js </span>
        </motion.h2>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a href="#projects" className="px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors">View Projects</a>
          <a href="#contact" className="px-8 py-3 rounded-lg bg-secondary hover:bg-white/10 text-white font-medium border border-white/10 transition-colors">Contact Me</a>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }} className="flex items-center justify-center gap-6">
          <a href="https://github.com/IzzatBaloghlanov" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors"><Code2 size={20} /></a>
          <a href="https://linkedin.com/in/IzzatBaloghlanov" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors"><Globe size={20} /></a>
          <a href="mailto:baloğlanovizzet@gmail.com" className="text-slate-400 hover:text-white transition-colors"><Mail size={20} /></a>
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <ArrowDown className="animate-bounce text-slate-500" size={20} />
      </motion.div>
    </section>
  );
}