'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Palette, Smartphone, Zap } from 'lucide-react';
import { FeatureItem, Skill } from '@/types';

const skills: Skill[] = [
{ name: 'HTML5' },{ name: 'CSS' },{ name: 'Bootstrap' },{ name: 'JQuery' },{ name: 'ANT Design UI' },{ name: 'Material UI' },{ name: 'ShadCN UI' },{ name: 'Javascript' },  { name: 'React' }, { name: 'TypeScript' }, { name: 'Next.js' }, { name: 'Tailwind CSS' },
  { name: 'React Native' }, { name: 'Node.js' }, { name: 'Git' }, { name: 'Figma' },
];

const features: FeatureItem[] = [
  { icon: Code2, title: 'Clean Code', description: 'TypeScript-first architecture with scalable component patterns' },
  { icon: Palette, title: 'Modern UI', description: 'Pixel-perfect implementation with Tailwind CSS and Framer Motion' },
  { icon: Smartphone, title: 'Responsive', description: 'Mobile-first approach ensuring perfect experience on all devices' },
  { icon: Zap, title: 'Performance', description: 'Optimized Core Web Vitals and SEO-friendly static generation' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 bg-secondary/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">I build scalable frontend applications with modern technologies. Specialized in React ecosystems and passionate about creating exceptional user experiences.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }}>
            <h3 className="text-2xl font-semibold mb-4">Why Work With Me?</h3>
            <div className="space-y-4">
              {features.map((f: FeatureItem) => (
                <div key={f.title} className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400"><f.icon size={20} /></div>
                  <div><h4 className="font-medium text-white">{f.title}</h4><p className="text-sm text-slate-400">{f.description}</p></div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.3 }} className="space-y-4">
            <h3 className="text-2xl font-semibold mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((s: Skill) => (
                <span key={s.name} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300 hover:bg-blue-500/10 hover:border-blue-500/20 hover:text-blue-400 transition-colors cursor-default">{s.name}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}