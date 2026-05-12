'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Code2 } from 'lucide-react';
import Image from 'next/image';
import { Project } from '@/types';

const projects: Project[] = [
  {
    title: 'Filmalisa',
    category: 'Movie Search Platform',
    description: 'Netflix-style movie and TV show discovery platform with search, categories, and detailed film pages. Built with modern React architecture.',
    tech: ['Javascript', 'HTML', 'CSS', 'API Integration'],
    demoUrl: 'https://filmalisa-five.vercel.app/',
    githubUrl: '#',
    image: '/images/film.png',
    featured: true,
  },
  {
    title: 'TIKTAK',
    category: 'E-Commerce Platform',
    description: 'Modern furniture and home decor e-commerce platform with campaigns, product listings, and responsive design.',
    tech: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'E-Commerce'],
    demoUrl: 'https://tik-tak-clientt.vercel.app/',
    githubUrl: '#',
    image: '/images/tktk.png',
  },
  {
    title: 'MagicBG',
    category: 'AI Background Remover',
    description: 'AI-powered background removal tool. Upload any photo and instantly remove the background with professional results.',
    tech: ['React', 'TypeScript', 'Next.js', 'AI/ML', 'Image Processing'],
    demoUrl: 'https://bgremove-mu.vercel.app/#top',
    githubUrl: '#',
    image: '/images/mgcbg.png',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-24 bg-secondary/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={isInView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.5 }} 
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Real-world applications built with modern technologies</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: Project, index: number) => (
            <motion.div 
              key={project.title} 
              initial={{ opacity: 0, y: 20 }} 
              animate={isInView ? { opacity: 1, y: 0 } : {}} 
              transition={{ duration: 0.5, delay: index * 0.1 }} 
              className="group relative rounded-2xl border border-white/10 bg-secondary/30 overflow-hidden hover:border-white/20 transition-all hover:shadow-xl hover:shadow-blue-500/10"
            >
              {/* ŞƏKİL - sizes + loading əlavə edildi */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading={index === 0 ? "eager" : "lazy"}
                  priority={index === 0}
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-blue-400 uppercase tracking-wider">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 text-xs">
                      Featured
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t: string) => (
                    <span key={t} className="px-2 py-1 rounded-md bg-white/5 text-xs text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4">
                  <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                    aria-label={`Live Demo — ${project.title}`}
                  >
                    <ExternalLink size={14} />Live Demo
                  </a>
                  <a 
                    href={project.githubUrl} 
                    className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
                    aria-label={`View Source — ${project.title}`}
                  >
                    <Code2 size={14} />Source
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}