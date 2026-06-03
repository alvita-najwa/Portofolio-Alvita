import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, Linkedin, Instagram, Mail, FileText, ArrowRight, X, Phone, MapPin, Printer, Sparkles, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  const [showCvModal, setShowCvModal] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(true);

  const handlePrint = () => {
    window.print();
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-transparent"
    >
      {/* Decorative Cyber Background Gradients */}
      <div className="absolute top-[8%] left-[10%] w-[35rem] h-[35rem] bg-cyan-700/5 rounded-full blur-[130px] pointer-events-none animate-pulse duration-[8s]" />
      <div className="absolute bottom-[10%] right-[10%] w-[35rem] h-[35rem] bg-blue-700/5 rounded-full blur-[130px] pointer-events-none animate-pulse duration-[10s]" />
      
      {/* Dynamic Digital Mesh Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#09090b_90%)] bg-[linear-gradient(rgba(14,165,233,0.015)_1.2px,transparent_1.2px),linear-gradient(90deg,rgba(14,165,233,0.015)_1.2px,transparent_1.2px)] bg-[size:32px_32px] opacity-70 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 md:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
          
          {/* Sisi Kiri: Tipografi Raksasa */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex self-start items-center gap-2 px-3 py-1 bg-zinc-900/40 border border-white/5 rounded-full mb-6 backdrop-blur-md shadow-inner"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400"></span>
              </span>
              <span className="font-mono text-[9px] tracking-widest text-[#00d2ff] font-bold uppercase">
                READY FOR NETWORK &amp; WEB DEVELOPMENT
              </span>
            </motion.div>

            {/* Giant Typography with bright text gradient */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-sans font-extrabold text-5xl md:text-7xl text-zinc-100 tracking-tight leading-[1.05] mb-4"
            >
              Hi, I am <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 animate-gradient-xy bg-[size:200%_auto]">
                Alvita Najwa Zahrotun Nashiha
              </span>
            </motion.h1>

            {/* Subtitle / Title Description */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-mono text-lg md:text-2xl text-cyan-300 font-semibold mb-6 tracking-wide flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5 text-cyan-400 animate-spin" style={{ animationDuration: '6s' }} />
              Full-Stack Web Developer
            </motion.h2>

            {/* Paragraph Statement */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-sans text-sm md:text-base text-zinc-400 leading-relaxed mb-10 max-w-2xl"
            >
              Siswi TKJ SMKN 1 Nglegok yang berdedikasi tinggi, aktif dalam komunitas IT, dan mahir merekayasa aplikasi web hulu-hilir berskala modern yang presisi tinggi dan tangguh.
            </motion.p>

            {/* CTA Interaction Area */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 items-center w-full max-w-md mb-8"
            >
              {/* Main Button Download CV with fluid hover gradient */}
              <button
                onClick={() => setShowCvModal(true)}
                id="hero-cv-download-btn"
                className="group w-full sm:w-auto px-7 py-3.5 cursor-pointer text-xs font-sans font-bold text-zinc-950 bg-gradient-to-r from-[#00d2ff] via-[#008cff] to-[#00d2ff] bg-[size:200%_auto] hover:bg-[right_center] rounded-xl shadow-lg shadow-cyan-950/30 hover:shadow-cyan-400/10 active:scale-98 transition-all duration-500 flex items-center justify-center gap-2"
              >
                <FileText size={14} className="text-zinc-950 group-hover:rotate-6 transition-transform" />
                <span>Download CV</span>
              </button>

              {/* Ghost Border Button Contact */}
              <button
                onClick={onContactClick}
                id="hero-contact-ghost-btn"
                className="group w-full sm:w-auto px-7 py-3.5 cursor-pointer text-xs font-sans font-bold text-zinc-300 bg-zinc-950/20 hover:bg-zinc-900/40 backdrop-blur-md border border-white/10 hover:border-[#00d2ff]/40 hover:text-[#00d2ff] rounded-xl active:scale-98 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Contact</span>
                <ArrowRight size={14} className="text-zinc-400 group-hover:translate-x-1 group-hover:text-[#00d2ff] transition-all" />
              </button>
            </motion.div>

            {/* Social Connects */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center gap-3"
            >
              <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-zinc-600 mr-2">CONNECT WITH ME:</span>
              {[
                { id: 'h-g', url: PERSONAL_INFO.github, icon: <Github size={14} />, label: 'GitHub' },
                { id: 'h-l', url: PERSONAL_INFO.linkedin, icon: <Linkedin size={14} />, label: 'LinkedIn' },
                { id: 'h-i', url: PERSONAL_INFO.instagram, icon: <Instagram size={14} />, label: 'Instagram' },
                { id: 'h-e', url: `mailto:${PERSONAL_INFO.email}`, icon: <Mail size={14} />, label: 'Email' }
              ].map((soc) => (
                <a
                  key={soc.id}
                  href={soc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={soc.label}
                  className="relative w-8 h-8 rounded-lg bg-zinc-900/30 backdrop-blur-md border border-white/5 text-zinc-400 hover:text-cyan-400 hover:border-cyan-500/30 flex items-center justify-center transition-all duration-300 group shadow-sm"
                >
                  {soc.icon}
                  <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded text-[8px] font-sans font-bold text-zinc-200 bg-zinc-950 border border-white/5 tracking-wider scale-0 group-hover:scale-100 origin-bottom transition-all duration-200 whitespace-nowrap z-20 shadow-md">
                    {soc.label}
                  </span>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Sisi Kanan: Foto Profil berbentuk Squircle dengan Layered Shadow Glowing Pulsing */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-72 h-72 md:w-85 md:h-85 flex items-center justify-center"
            >
              {/* Layered Pulsing Glowing Shadow Effects behind the profile */}
              <div className="absolute inset-0 rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] bg-cyan-500/10 blur-3xl animate-pulse duration-[3s]" />
              <div className="absolute -inset-4 rounded-[40%_60%_70%_30%_/_40%_40%_60%_60%] bg-blue-600/10 blur-2xl animate-pulse duration-[5s] delay-700" />
              <div className="absolute -inset-8 rounded-[40%_40%_60%_60%_/_30%_70%_70%_30%] bg-indigo-500/5 blur-xl animate-pulse duration-[4s] delay-1000" />
              
              {/* Squircle Profile Wrapper with glowing border */}
              <div className="relative w-full h-full p-[1px] bg-gradient-to-tr from-cyan-500 to-blue-500 rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl flex items-center justify-center overflow-hidden">
                <div className="relative w-full h-full bg-zinc-950 rounded-[2.4rem] md:rounded-[3.4rem] overflow-hidden flex items-center justify-center group">
                  
                  {/* Cyber grid overlays inside picture frame */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.02)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none z-10 group-hover:scale-105 transition-transform duration-500" />
                  
                  {imageLoaded ? (
                    <img
                      src="img/fotoal.jpg"
                      alt="Alvita Najwa Zahrotun Nashiha"
                      referrerPolicy="no-referrer"
                      onError={() => setImageLoaded(false)}
                      className="w-full h-full object-cover relative z-0 scale-100 group-hover:scale-105 transition-all duration-700 ease-out"
                    />
                  ) : (
                    /* Fallback Abstract Gradient Profile with Initials if image not found */
                    <div className="w-full h-full bg-gradient-to-br from-zinc-950 via-zinc-900 to-cyan-950/40 flex flex-col items-center justify-center px-4 text-center">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-[1px] mb-4 flex items-center justify-center shadow-lg shadow-cyan-500/10">
                        <div className="w-full h-full bg-zinc-950 rounded-[15px] flex items-center justify-center font-mono text-2xl font-bold text-cyan-400">
                          AN
                        </div>
                      </div>
                      <span className="font-sans font-black text-sm text-zinc-300 select-none">ALVITA NAJWA</span>
                      <span className="font-mono text-[9px] text-[#00d2ff] opacity-80 mt-1 select-none tracking-widest uppercase">TKJ SPECIALIST</span>
                    </div>
                  )}

                  {/* Ambient overlay sheen */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent opacity-90 group-hover:opacity-70 transition-opacity" />
                </div>
              </div>

              {/* Edge glowing status dots */}
              <div className="absolute bottom-6 right-6 w-4.5 h-4.5 bg-emerald-500 rounded-full border-4 border-zinc-950 z-20 shadow-[0_0_12px_rgba(16,185,129,0.8)]" />
            </motion.div>
          </div>

        </div>
      </div>

      {/* Cyber Digital CV Dynamic Modal/Popup */}
      <AnimatePresence>
        {showCvModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowCvModal(false)}
              className="absolute inset-0 bg-black/85 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-3xl max-h-[85vh] bg-zinc-950/70 border border-white/10 backdrop-blur-xl rounded-2xl shadow-2xl overflow-y-auto print:max-h-full print:border-none print:bg-white print:text-zinc-950"
            >
              {/* Header inside Modal */}
              <div className="sticky top-0 bg-zinc-950/60 border-b border-white/5 backdrop-blur-md px-6 py-4 flex items-center justify-between z-10 print:hidden">
                <div className="flex items-center gap-2">
                  <FileText className="text-cyan-400 w-4 h-4 animate-pulse" />
                  <span className="font-sans font-bold text-xs tracking-wider text-zinc-100 uppercase">
                    Curriculum Vitae Preview
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={PERSONAL_INFO.cvUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-zinc-900/50 border border-white/5 hover:border-cyan-500/20 text-zinc-400 hover:text-cyan-400 flex items-center justify-center transition-all cursor-pointer"
                    title="Buka di Google Drive"
                  >
                    <ExternalLink size={15} />
                  </a>
                  <button
                    onClick={handlePrint}
                    className="w-8 h-8 rounded-lg bg-zinc-900/50 border border-white/5 hover:border-cyan-500/20 text-zinc-400 hover:text-cyan-400 flex items-center justify-center transition-all cursor-pointer"
                    title="Cetak CV"
                  >
                    <Printer size={15} />
                  </button>
                  <button
                    onClick={() => setShowCvModal(false)}
                    className="w-8 h-8 rounded-lg bg-zinc-900/50 border border-white/5 hover:text-zinc-600 text-zinc-400 hover:text-zinc-100 flex items-center justify-center transition-all cursor-pointer"
                  >
                    <X size={15} />
                  </button>
                </div>
              </div>

              {/* CV Body Content */}
              <div id="printed-resume-container" className="p-6 md:p-8 font-sans text-left">
                {/* Header Profile */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-6 border-b border-zinc-900 print:border-zinc-200">
                  <div>
                    <h2 className="text-2xl font-bold text-zinc-100 print:text-zinc-900 leading-tight">
                      {PERSONAL_INFO.name}
                    </h2>
                    <p className="text-xs font-mono text-cyan-400 print:text-cyan-600 font-semibold mt-1 tracking-wide uppercase">
                      Full-Stack Web Developer
                    </p>
                  </div>
                  <div className="flex flex-col gap-1.5 text-xs text-zinc-400 print:text-zinc-600">
                    <div className="flex items-center gap-2">
                      <Mail size={12} className="text-cyan-400 print:text-cyan-600" />
                      <span>{PERSONAL_INFO.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={12} className="text-cyan-400 print:text-cyan-600" />
                      <span>Blitar, Jawa Timur, Indonesia</span>
                    </div>
                  </div>
                </div>

                {/* Biography */}
                <div className="py-6 border-b border-zinc-900 print:border-zinc-200">
                  <h3 className="font-mono text-[10px] tracking-widest text-cyan-400 print:text-cyan-600 uppercase font-bold mb-3">
                    Profil Profesional
                  </h3>
                  <p className="text-xs text-zinc-300 print:text-zinc-700 leading-relaxed">
                    Saya Alvita Najwa Zahrotun Nashiha, seorang Siswi TKJ di SMKN 1 Nglegok yang aktif di Komunitas IT lokal. Berbekal pengalaman perakitan jaringan komputer, konfigurasi Debian server hulu-hilir, dan otomatisasi server menggunakan script, saya bertransisi menuju Full-Stack Web Development profesional guna mewujudkan aplikasi web tangguh yang berkinerja unggul.
                  </p>
                </div>

                {/* Kompetensi & Pendidikan */}
                <div className="py-6 border-b border-zinc-900 print:border-zinc-200">
                  <h3 className="font-mono text-[10px] tracking-widest text-cyan-400 print:text-cyan-600 uppercase font-bold mb-4">
                    Pendidikan &amp; Kedudukan
                  </h3>
                  <div className="flex justify-between items-start text-xs">
                    <div>
                      <span className="font-semibold text-zinc-100 print:text-zinc-900">
                        Teknik Komputer &amp; Jaringan (TKJ)
                      </span>
                      <p className="text-[11px] text-zinc-500 mt-0.5">SMKN 1 Nglegok, Blitar</p>
                    </div>
                    <span className="font-mono text-[10px] text-zinc-500 font-medium">Aktif / Siswi</span>
                  </div>
                </div>

                {/* Keahlian Utama */}
                <div className="py-6">
                  <h3 className="font-mono text-[10px] tracking-widest text-[#00d2ff] print:text-[#008cff] uppercase font-bold mb-3">
                    Keahlian Teknis
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 
                      'Flask Python', 'MySQL', 'PostgreSQL', 'Linux Debian/Ubuntu', 
                      'Nginx Server Block', 'Webmin', 'GitLab Server Setup', 
                      'SMTP Configuration', 'Enterprise Network Infrastructure', 
                      'MikroTik Routing (OSPF)', 'Cisco Systems (VLAN, ACL, NAT, HSRP)'
                    ].map((s) => (
                      <span
                        key={s}
                        className="px-2 py-1 text-[9px] font-mono rounded bg-zinc-900 print:bg-zinc-100 border border-zinc-800 print:border-zinc-200 text-zinc-300 print:text-zinc-700 font-medium"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
