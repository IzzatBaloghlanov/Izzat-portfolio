'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { ServicePackage } from '@/types';

const services: ServicePackage[] = [
  {
    name: 'SaaS Dashboard UI', price: '$2,000', description: 'Full-featured admin dashboard with data visualization',
    features: ['React + TypeScript + Tailwind', 'Interactive Charts & Tables', 'Dark/Light Mode', 'Authentication Screens', 'Responsive Design', '7 days delivery'],
  },
  {
    name: 'Premium Landing Page', price: '$800', description: 'High-converting landing page for your product', popular: true,
    features: ['Next.js + Framer Motion', 'SEO Optimized', 'Mobile Responsive', 'Contact Form Integration', 'Performance Optimized', '3 days delivery'],
  },
  {
    name: 'React Native App', price: '$4,000', description: 'Cross-platform mobile application MVP',
    features: ['iOS + Android', 'React Native + TypeScript', 'API Integration', 'Authentication Flow', 'Push Notifications Setup', '14 days delivery'],
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Services</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Productized service packages for clear scope and fast delivery</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service: ServicePackage, index: number) => (
            <motion.div key={service.name} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: index * 0.1 }} className={`relative p-8 rounded-2xl border ${service.popular ? 'border-blue-500/50 bg-blue-500/5' : 'border-white/10 bg-secondary/30'}`}>
              {service.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-blue-600 text-xs font-medium text-white">Most Popular</span>}
              <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
              <div className="flex items-baseline gap-1 mb-4"><span className="text-3xl font-bold text-white">{service.price}</span><span className="text-slate-400">/project</span></div>
              <p className="text-slate-400 text-sm mb-6">{service.description}</p>
              <ul className="space-y-3 mb-8">
                {service.features.map((f: string) => (<li key={f} className="flex items-center gap-3 text-sm text-slate-300"><Check size={16} className="text-blue-400 flex-shrink-0" />{f}</li>))}
              </ul>
              <a href="#contact" className={`flex items-center justify-center gap-2 w-full py-3 rounded-lg font-medium transition-colors ${service.popular ? 'bg-blue-600 hover:bg-blue-500 text-white' : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'}`}>
                Get Started <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}