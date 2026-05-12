'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import { ContactFormState } from '@/types';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formState, setFormState] = useState<ContactFormState>({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:baloğlanovizzet@gmail.com?subject=Project Inquiry from ${formState.name}&body=${formState.message}%0D%0A%0D%0AFrom: ${formState.email}`;
  };

  return (
    <section id="contact" className="py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Have a project in mind? Let&apos;s discuss how I can help bring your ideas to life.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }} className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <p className="text-slate-400 mb-6">I typically respond within 24 hours. For urgent inquiries, please email directly.</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400"><Mail size={20} /></div>
                <div><p className="text-sm text-slate-400">Email</p><a href="mailto:baloğlanovizzet@gmail" className="text-white hover:text-blue-400 transition-colors">baloğlanovizzet@gmail</a></div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400"><MapPin size={20} /></div>
                <div><p className="text-sm text-slate-400">Location</p><p className="text-white">Azerbaijan (Remote Worldwide)</p></div>
              </div>
            </div>
          </motion.div>
          <motion.form initial={{ opacity: 0, x: 20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.3 }} onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
              <input type="text" id="name" required value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-secondary border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors" placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
              <input type="email" id="email" required value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-secondary border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors" placeholder="your@email.com" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Project Details</label>
              <textarea id="message" required rows={4} value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-secondary border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors resize-none" placeholder="Tell me about your project..." />
            </div>
            <button type="submit" className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors">
              Send Message <Send size={16} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}