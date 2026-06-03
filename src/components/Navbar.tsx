import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background shading on scroll
      setIsScrolled(window.scrollY > 20);

      // Scoll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[2.5px] bg-zinc-900 z-50 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 origin-left"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-[2.5px] left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-zinc-950/40 border-b border-white/5 backdrop-blur-md py-3 shadow-lg shadow-black/30'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo with Cyber Glow */}
          <button
            onClick={() => handleNavClick('home')}
            id="nav-logo-btn"
            className="flex items-center gap-2 group cursor-pointer text-left"
          >
            <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-zinc-900/50 border border-white/10 group-hover:border-cyan-500/50 transition-colors duration-350">
              <Sparkles className="w-4 h-4 text-cyan-400 absolute group-hover:scale-110 transition-transform duration-350" />
              <div className="absolute inset-0 rounded-lg bg-cyan-500/10 opacity-0 group-hover:opacity-100 blur-sm transition-opacity" />
            </div>
            <div>
              <span className="font-sans font-bold text-sm tracking-wide text-zinc-100 block leading-none">
                ALVITA NAJWA
              </span>
              <span className="font-mono text-[9px] text-zinc-500 block mt-0.5 tracking-widest uppercase">
                PORTFOLIO
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-zinc-900/40 p-1 rounded-full border border-white/5 backdrop-blur-sm">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-item-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-4 py-1.5 rounded-full font-sans text-xs tracking-wide font-medium transition-colors duration-300 cursor-pointer ${
                    isActive ? 'text-cyan-400 font-semibold' : 'text-zinc-400 hover:text-zinc-100'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-zinc-900/60 rounded-full border border-white/10 shadow-inner"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right CTA Area */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => handleNavClick('contact')}
              id="navbar-cta-btn"
              className="relative px-4 py-1.5 text-xs font-sans font-medium text-cyan-400 bg-cyan-950/20 border border-cyan-500/30 rounded-lg hover:bg-cyan-500 hover:text-zinc-950 active:scale-95 transition-all duration-300 shadow-[0_0_15px_rgba(0,229,255,0.05)] cursor-pointer"
            >
              Hubungi Saya
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center">
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-zinc-900/50 border border-white/10 text-zinc-400 hover:text-zinc-100 hover:border-zinc-700 cursor-pointer"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[52px] left-4 right-4 z-40 bg-zinc-950/70 border border-white/10 backdrop-blur-xl rounded-2xl p-4 shadow-2xl md:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-1.5">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    id={`mobile-nav-${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center justify-between w-full px-4 py-3 rounded-xl font-sans text-xs tracking-wide font-medium text-left transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-cyan-950/30 text-cyan-400 border border-cyan-500/20'
                        : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/50 border border-transparent'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />}
                  </button>
                );
              })}
              <div className="h-[1px] bg-zinc-900/50 my-2" />
              <button
                onClick={() => handleNavClick('contact')}
                id="mobile-nav-cta"
                className="w-full py-2.5 text-center text-xs font-sans font-medium text-zinc-950 bg-cyan-400 rounded-xl hover:bg-cyan-300 transition-colors cursor-pointer"
              >
                Hubungi Saya
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
