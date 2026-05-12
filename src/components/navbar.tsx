'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from '@/types';

const navLinks: NavLink[] = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            IB.
          </a>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link: NavLink) => (
              <a key={link.name} href={link.href} className="text-sm text-slate-300 hover:text-white transition-colors">
                {link.name}
              </a>
            ))}
          </div>
          <button className="md:hidden text-slate-300" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-secondary border-b border-white/5">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link: NavLink) => (
                <a key={link.name} href={link.href} className="block text-sm text-slate-300 hover:text-white" onClick={() => setIsOpen(false)}>
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}