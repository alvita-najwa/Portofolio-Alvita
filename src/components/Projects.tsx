import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../data/portfolioData';
import { ExternalLink, Eye, Play, Sparkles, FolderOpen, Files, FileText, CheckCircle, Smartphone, Terminal, HelpCircle } from 'lucide-react';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Modul Pembelajaran', 'Proyek Implementasi'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  // Simple local state to demonstrate interactive module viewing inside the modern panel
  const [viewingDocument, setViewingDocument] = useState<string | null>(null);

  return (
    <section id="projects" className="relative py-24 bg-transparent col-span-1">
      {/* Absolute blur highlight */}
      <div className="absolute bottom-1/4 left-1/4 w-[35rem] h-[35rem] bg-indigo-950/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Title Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-zinc-900/40 border border-white/5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00d2ff]" />
            <span className="font-mono text-[9px] tracking-widest text-zinc-400 uppercase font-bold">Produk &amp; Karya</span>
          </div>
          <h2 className="font-sans font-extrabold text-3xl md:text-4xl text-zinc-100 tracking-tight leading-tight mb-4">
            Portofolio <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400">Proyek Unggulan</span>
          </h2>
          <p className="max-w-xl font-sans text-xs md:text-sm text-zinc-400 leading-relaxed">
            Menampilkan perpaduan modul edukasi teknis jaringan dengan sistem instalasi server mandiri berskala handal.
          </p>
        </div>

        {/* Dashboard Categories Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-zinc-900/40 border border-white/5 rounded-2xl backdrop-blur-md max-w-full">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  id={`project-filter-${cat.replace(/\s+/g, '-')}`}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative px-4 py-2.5 rounded-xl font-sans text-xs tracking-wide font-medium transition-colors cursor-pointer select-none ${
                    isActive ? 'text-cyan-400 font-bold' : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeProjCatFilter"
                      className="absolute inset-0 bg-zinc-950/65 rounded-xl border border-white/10 shadow-inner"
                      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Masonry / Bento Product Showcase Grid with wide 16:10 / 16:9 aspect ratio */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative flex flex-col justify-between rounded-2xl bg-zinc-900/20 border border-white/5 hover:border-[#00d2ff]/30 backdrop-blur-md transition-all duration-350 overflow-hidden shadow-lg h-full"
              >
                {/* Image Frame with wide Aspect Ratio */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-950/40 border-b border-white/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                  />
                  
                  {/* Category Accent Badge absolute */}
                  <span className="absolute top-4 left-4 px-2.5 py-1 text-[8px] font-mono font-bold tracking-widest uppercase rounded-lg bg-zinc-950/80 border border-white/10 text-cyan-400 backdrop-blur-md z-15">
                    {project.category}
                  </span>

                  {/* Dark Transparent Overlay + Slide-Up Description on Hover */}
                  <div className="absolute inset-0 bg-zinc-950/90 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-350 flex flex-col justify-end p-6 md:p-8 z-10 text-left">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-350 delay-75">
                      <div className="flex items-center gap-2 mb-3">
                        <Sparkles className="text-cyan-400 w-4 h-4 animate-pulse" />
                        <span className="font-mono text-[9px] tracking-widest text-[#00d2ff] font-extrabold uppercase">Rincian Teknis</span>
                      </div>
                      <p className="font-sans text-xs text-zinc-300 leading-relaxed mb-4">
                        {project.longDescription}
                      </p>
                      {/* Sub tech badges */}
                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                        {project.tags.map(tag => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 text-[8px] font-mono tracking-wider rounded-md bg-zinc-950 border border-white/5 text-zinc-400 font-medium"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card details body */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-sans font-black text-base md:text-lg text-zinc-100 group-hover:text-cyan-400 transition-colors duration-200 mb-2 leading-snug">
                      {project.title}
                    </h3>
                    <p className="font-sans text-xs text-zinc-400 leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  {/* Action controls area customized to request */}
                  <div className="flex items-center justify-between border-t border-white/5 pt-5 mt-auto">
                    {/* Access Action depending on category */}
                    {project.category === 'Modul Pembelajaran' ? (
                      <div className="flex flex-wrap gap-2 w-full justify-between items-center">
                        <button
                          onClick={() => setViewingDocument(project.title)}
                          id={`btn-viewdoc-${project.id}`}
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 text-[10px] font-mono font-bold text-cyan-400 bg-cyan-950/20 hover:bg-cyan-400 hover:text-zinc-950 border border-cyan-500/10 rounded-lg active:scale-95 transition-all duration-300 cursor-pointer"
                        >
                          <FileText size={12} />
                          View Document
                        </button>
                        
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-sans font-semibold text-zinc-400 hover:text-zinc-100 bg-zinc-950/40 border border-white/5 rounded-lg hover:border-white/15 transition-all"
                        >
                          <span>Access Repository</span>
                          <ExternalLink size={11} />
                        </a>
                      </div>
                    ) : (
                      /* Implementation actions */
                      <div className="flex justify-between items-center w-full">
                        <div className="flex items-center gap-1.5 bg-zinc-950/40 border border-white/5 px-2.5 py-1 rounded-lg">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          <span className="font-mono text-[9px] text-zinc-550 uppercase">PROYEK AKTIF</span>
                        </div>
                        
                        <div className="flex gap-2.5">
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-[10px] font-sans font-bold text-zinc-950 bg-[#00d2ff] hover:bg-[#00b0d6] rounded-lg shadow-sm font-semibold active:scale-95 transition-all"
                          >
                            <span>Lihat Kode</span>
                            <ExternalLink size={11} className="text-zinc-950" />
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Dynamic Document Modal popup showcase */}
        <AnimatePresence>
          {viewingDocument && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setViewingDocument(null)}
                className="absolute inset-0 bg-black/85 backdrop-blur-sm"
              />

              {/* Box frame */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 15 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 15 }}
                transition={{ duration: 0.3 }}
                className="relative w-full max-w-xl bg-zinc-950/70 border border-white/10 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl z-10 text-left"
              >
                {/* Header inside modal */}
                <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FolderOpen className="text-cyan-400 w-4.5 h-4.5 animate-pulse" />
                    <span className="font-mono text-[10px] tracking-widest text-[#00d2ff] font-extrabold uppercase">
                      Informasi Repositori
                    </span>
                  </div>
                  <button
                    onClick={() => setViewingDocument(null)}
                    className="w-7 h-7 rounded-lg bg-zinc-900/40 border border-white/10 text-zinc-400 hover:text-zinc-100 flex items-center justify-center cursor-pointer"
                  >
                    ✕
                  </button>
                </div>

                <div className="p-6 md:p-8">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-emerald-400 font-bold block mb-1">
                    STATUS: DIGITAL ARCHIVE ACCESS
                  </span>
                  <h3 className="font-sans font-extrabold text-base text-zinc-100 leading-tight mb-4">
                    {viewingDocument}
                  </h3>
                  <p className="font-sans text-xs text-zinc-400 leading-relaxed mb-6 bg-zinc-900/10 p-4 border border-white/5 rounded-xl">
                    Dokumentasi panduan teknis yang lengkap dan modular ini disimpan secara aman di dalam folder repositori digital Google Drive. Anda dapat mengakses cetak mentah PDF atau menguji kodenya lewat tombol berikut.
                  </p>

                  <div className="flex gap-4">
                    {/* Google Drive target simulation as requested */}
                    <a
                      href="https://drive.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 text-center text-xs font-sans font-bold rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:opacity-90 text-zinc-950 flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Lihat PDF Google Drive</span>
                      <ExternalLink size={12} className="text-zinc-950" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
