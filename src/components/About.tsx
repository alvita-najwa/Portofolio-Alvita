import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO, STATISTICS, TIMELINE } from '../data/portfolioData';
import { GraduationCap, Users, Workflow, Sparkles, Server, Network, Terminal } from 'lucide-react';

export default function About() {
  const [activePhoto, setActivePhoto] = useState(0);

  // Fallback handler for stacked photos if not physically on host
  const stackedPhotos = [
    { src: 'img/fotoal.jpg.jpeg', alt: 'Alvita Professional Focus', label: 'Alvita Najwa', desc: 'Full-Stack Developer' },
    { src: 'img/foto1.jpeg', alt: 'Alvita IT Community', label: 'IT Community', desc: 'Open Source Lab' },
    { src: 'img/foto2 (2).jpg', alt: 'Alvita Networking Specialist', label: 'TKJ Specialist', desc: 'MikroTik Cisco IOS' },
    { src: 'img/foto3.jpg', alt: 'Alvita Web Development Stack', label: 'Coder Life', desc: 'React, Node, Cloud' }
  ];

  const statIcons = [
    <GraduationCap className="text-cyan-400 w-5 h-5" />,
    <Users className="text-emerald-400 w-5 h-5" />,
    <Workflow className="text-purple-400 w-5 h-5" />
  ];

  return (
    <section id="about" className="relative py-24 bg-transparent col-span-1">
      {/* Glow highlight */}
      <div className="absolute top-[30%] left-[-10%] w-[35rem] h-[35rem] bg-cyan-900/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-zinc-900/40 border border-white/5 backdrop-blur-sm rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00d2ff]" />
            <span className="font-mono text-[9px] tracking-widest text-zinc-400 uppercase font-bold">Kisah &amp; Statistik</span>
          </div>
          <h2 className="font-sans font-extrabold text-3xl md:text-4xl text-zinc-100 tracking-tight leading-tight mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Me</span>
          </h2>
          <p className="max-w-xl font-sans text-xs md:text-sm text-zinc-400 leading-relaxed">
            Menyelami kisah perjalanan transisi teknologi saya dari penguasa Jaringan Jaringan lokal menuju rekayasa platform web modern.
          </p>
        </div>

        {/* Bento Grid Top Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
          
          {/* Box 1 (60% width on Desktop): Professional Narrative */}
          <div className="lg:col-span-7 p-6 md:p-8 rounded-2xl bg-zinc-900/20 hover:bg-zinc-900/30 border border-white/5 backdrop-blur-md transition-all duration-300 flex flex-col justify-between group shadow-lg min-h-[360px] text-left">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-cyan-950/45 border border-cyan-500/20 flex items-center justify-center">
                  <Terminal className="text-cyan-400 w-4 h-4 animate-pulse" />
                </div>
                <span className="font-mono text-[10px] tracking-wider text-cyan-400 font-bold uppercase">Modern Storytelling</span>
              </div>
              <h3 className="font-sans font-extrabold text-lg md:text-xl text-zinc-100 mb-4 group-hover:text-cyan-400 transition-colors">
                Membentuk Nilai Baru di Persimpangan Jaringan &amp; Kode
              </h3>
              <p className="font-sans text-xs md:text-sm text-zinc-300 leading-relaxed mb-4">
                {PERSONAL_INFO.aboutText1}
              </p>
              <p className="font-sans text-xs md:text-sm text-zinc-400 leading-relaxed">
                {PERSONAL_INFO.aboutText2}
              </p>
            </div>
            
            {/* Highlights at bottom of story */}
            <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-white/5">
              <div>
                <span className="block font-mono text-[9px] text-[#00d2ff] uppercase font-bold tracking-wider">LOKASI STUDI</span>
                <span className="font-sans text-xs text-zinc-300 font-medium">SMKN 1 Nglegok, Blitar</span>
              </div>
              <div>
                <span className="block font-mono text-[9px] text-[#00d2ff] uppercase font-bold tracking-wider">KOMUNITAS TI</span>
                <span className="font-sans text-xs text-zinc-300 font-medium font-bold">Aktif &amp; Kolaboratif</span>
              </div>
            </div>
          </div>

          {/* Box 2 (40% width on Desktop): Stacked Asymmetrical Photo Collage */}
          <div className="lg:col-span-5 p-6 md:p-8 rounded-2xl bg-zinc-900/20 border border-white/5 backdrop-blur-md transition-all duration-300 flex flex-col justify-between group shadow-lg min-h-[360px] text-left overflow-hidden relative">
            
            <div className="flex items-center justify-between mb-4 z-10 relative">
              <span className="font-mono text-[10px] tracking-wider text-[#00d2ff] font-bold uppercase">ASIMETRIS STACK</span>
              <span className="font-mono text-[9px] text-zinc-500">Klik untuk beralih</span>
            </div>

            {/* Stack Box Container */}
            <div className="relative flex-1 w-full flex items-center justify-center my-6 min-h-[200px]">
              {stackedPhotos.map((photo, index) => {
                const isActive = activePhoto === index;
                // Calculate different static offsets to make stacked look
                const rotateDeg = [
                  'rotate-[-4deg]',
                  'rotate-[3deg]',
                  'rotate-[-10deg]',
                  'rotate-[5deg]'
                ][index];

                const hoverTranslate = [
                  'group-hover:translate-x-[-15px] group-hover:translate-y-[-10px]',
                  'group-hover:translate-x-[15px] group-hover:translate-y-[-10px]',
                  'group-hover:translate-x-[-5px] group-hover:translate-y-[15px]',
                  'group-hover:translate-x-[10px] group-hover:translate-y-[10px]'
                ][index];

                return (
                  <motion.div
                    key={photo.src}
                    onClick={() => setActivePhoto(index)}
                    whileHover={{ scale: 1.05, zIndex: 30 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className={`absolute w-36 h-48 md:w-40 md:h-52 rounded-xl p-[1px] bg-gradient-to-tr transition-all duration-500 cursor-pointer shadow-xl ${
                      isActive 
                        ? 'from-cyan-400 to-blue-500 z-20 scale-103' 
                        : 'from-white/5 to-white/10 z-0 opacity-80 ' + rotateDeg + ' ' + hoverTranslate
                    }`}
                  >
                    <div className="w-full h-full bg-zinc-950 rounded-[11px] overflow-hidden relative flex flex-col justify-between">
                      {/* Grid background inside stack cards */}
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#09090b_100%)] pointer-events-none" />
                      
                      {/* Image render with onError fallback */}
                      <div className="w-full h-full relative">
                        <img
                          src={photo.src}
                          alt={photo.alt}
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            // Convert e.target into HTMLImageElement to replace it safely
                            const imgTarget = e.target as HTMLImageElement;
                            imgTarget.style.display = 'none';
                            const fallbackDiv = imgTarget.nextSibling as HTMLDivElement;
                            if (fallbackDiv) {
                              fallbackDiv.style.display = 'flex';
                            }
                          }}
                          className="w-full h-full object-cover"
                        />
                        {/* Fallback Abstract Gradient Card */}
                        <div className="hidden absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-cyan-950/40 p-4 flex-col justify-center items-center text-center">
                          <Terminal size={22} className="text-cyan-400 mb-2 animate-pulse" />
                          <span className="font-mono text-[9px] text-[#00d2ff] uppercase font-bold tracking-widest">{photo.label}</span>
                          <span className="font-sans text-[8px] text-zinc-500 mt-1">{photo.desc}</span>
                        </div>
                      </div>

                      {/* Overlap tag overlay at bottom */}
                      <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent">
                        <span className="block font-sans text-[9px] font-bold text-zinc-100">{photo.label}</span>
                        <span className="block font-mono text-[7px] text-cyan-400 tracking-wider uppercase mt-0.5">{photo.desc}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Currently focused indicator */}
            <div className="mt-2 text-center select-none">
              <span className="font-mono text-[8px] text-[#00d2ff] uppercase font-black uppercase tracking-widest">
                Active: {stackedPhotos[activePhoto].label} ({activePhoto + 1}/4)
              </span>
            </div>
          </div>

        </div>

        {/* Bento Grid Bottom Row: 3 Quick Stats Bento Column cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STATISTICS.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-zinc-900/20 hover:bg-zinc-900/30 border border-white/5 backdrop-blur-md transition-all duration-300 flex flex-col justify-between group shadow-md text-left"
            >
              <div>
                {/* Header card icon and bullet */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-zinc-950/40 border border-white/5 flex items-center justify-center">
                    {statIcons[index] || <Sparkles className="w-5 h-5 text-cyan-400" />}
                  </div>
                  <span className="font-mono text-[9px] tracking-widest text-[#00d2ff] font-extrabold uppercase bg-cyan-950/30 border border-cyan-500/10 px-2 py-0.5 rounded-md">
                    0{index + 1} / {stat.label}
                  </span>
                </div>
                
                {/* Big Badge label value */}
                <h3 className="font-sans font-black text-lg text-zinc-100 group-hover:text-[#00d2ff] transition-all mb-2 leading-tight">
                  {stat.value}
                </h3>
                
                {/* Stat narrative */}
                <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
