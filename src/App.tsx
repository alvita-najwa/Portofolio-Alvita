import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import { Sparkles, Heart } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Smooth scroll handler
  const handleNavigate = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Offset scrolling slightly to account for the sticky progress/navbar
      const offset = 65;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  // Intersection Observer to highlight active section on manual scroll
  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'certificates', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // Trigger when section occupies the sweet spot of viewport
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 flex flex-col justify-between selection:bg-[#00d2ff]/20 selection:text-cyan-300">
      
      {/* Premium Glassmorphic Navbar */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Portfolio Sections */}
      <main className="flex-grow">
        <Hero onContactClick={() => handleNavigate('contact')} />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>

      {/* Footer Design Statement */}
      <footer className="bg-zinc-950/40 backdrop-blur-md border-t border-white/5 py-12 relative overflow-hidden">
        {/* Background ambient lighting */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-32 bg-cyan-700/5 rounded-full blur-[70px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 text-center md:text-left">
          {/* Copyright description */}
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2 font-sans font-extrabold text-xs tracking-wider text-zinc-300 uppercase">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Alvita Najwa Portfolio</span>
            </div>
            <p className="font-sans text-[10px] text-zinc-500 leading-relaxed">
              &copy; {new Date().getFullYear()} Alvita Najwa. Hak Cipta Dilindungi Undang-Undang. <br />
              Dibuat penuh dedikasi berstandar UI/UX Premium modern.
            </p>
          </div>

          {/* Core framework references badges */}
          <div className="flex flex-col items-center md:items-end gap-2 text-[10px] text-zinc-600 font-mono">
            <span className="flex items-center gap-1">
              Ditenagai oleh <span className="text-zinc-400">React 19</span> &amp; <span className="text-zinc-400">Tailwind v4</span>
            </span>
            <span className="flex items-center gap-1">
              Disusun dengan <Heart size={10} className="text-cyan-400 animate-pulse fill-cyan-400" /> untuk Kinerja Tinggi.
            </span>
          </div>
        </div>
      </footer>

    </div>
  );
}
