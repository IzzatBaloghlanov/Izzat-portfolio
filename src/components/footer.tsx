import { Code2, Globe, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/5 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Izzat Baloghlanov. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="https://github.com/IzzatBaloghlanov" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="Visit my GitHub"><Code2 size={18} /></a>
          <a href="https://linkedin.com/in/IzzatBaloghlanov" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="Visit my LinkedIn"><Globe size={18} /></a>
          <a href="mailto:baloglanovizzet@gmail.com" className="text-slate-400 hover:text-white transition-colors" aria-label="Send me an email"><Mail size={18} /></a>
        </div>
      </div>
    </footer>
  );
}