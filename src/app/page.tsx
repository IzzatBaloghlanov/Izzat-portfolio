import dynamic from 'next/dynamic';
import Navbar from '@/components/navbar';
import Hero from '@/components/hero';

const About = dynamic(() => import('@/components/about'));
const Services = dynamic(() => import('@/components/services'));
const Projects = dynamic(() => import('@/components/projects'));
const Contact = dynamic(() => import('@/components/contact'));
const Footer = dynamic(() => import('@/components/footer'));

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}