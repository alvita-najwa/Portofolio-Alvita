import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CERTIFICATES } from '../data/portfolioData';
import { Award, CalendarDays, ExternalLink, ShieldCheck, X, Eye, BadgeAlert, Sparkles, AlertCircle, Compass } from 'lucide-react';

type CertCategory = 'All' | 'Aguna Course' | 'Fortinet' | 'Always Ngoding' | 'RedHat' | 'CCNA' | 'Events';

export default function Certificates() {
  const [activeCategory, setActiveCategory] = useState<CertCategory>('All');
  const [selectedCert, setSelectedCert] = useState<typeof CERTIFICATES[0] | null>(null);

  const tabs: { id: CertCategory; label: string }[] = [
    { id: 'All', label: 'All Credentials' },
    { id: 'CCNA', label: 'Cisco CCNA' },
    { id: 'Aguna Course', label: 'Aguna' },
    { id: 'Fortinet', label: 'Fortinet' },
    { id: 'Always Ngoding', label: 'Always Ngoding' },
    { id: 'RedHat', label: 'RedHat' },
    { id: 'Events', label: 'Events' }
  ];

  const filteredCertificates = activeCategory === 'All'
    ? CERTIFICATES
    : CERTIFICATES.filter(cert => cert.issuer.includes(activeCategory) || cert.id.includes(activeCategory.toLowerCase().replace(/\s+/g, '')));

  return (
    <section id="certificates" className="relative py-24 bg-transparent col-span-1">
      {/* Background glow overlay */}
      <div className="absolute top-[40%] left-[10%] w-[30rem] h-[30rem] bg-cyan-900/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Title Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-zinc-900/40 border border-white/5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span className="font-mono text-[9px] tracking-widest text-zinc-400 uppercase font-bold">Kredensial &amp; Verifikasi</span>
          </div>
          <h2 className="font-sans font-extrabold text-3xl md:text-4xl text-zinc-100 tracking-tight leading-tight mb-4">
            Kumpulan <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400">Sertifikasi Legal</span>
          </h2>
          <p className="max-w-xl font-sans text-xs md:text-sm text-zinc-400 leading-relaxed">
            Menghimpun bukti kompetensi terverifikasi dari berbagai lembaga teknologi global serta ajang kompetensi vokasional nasional.
          </p>
        </div>

        {/* Minimalist Dashboard-like Tab Filter Menu */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-zinc-900/40 border border-white/5 rounded-2xl backdrop-blur-md max-w-full">
            {tabs.map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  id={`cert-filter-${tab.id.replace(/\s+/g, '-')}`}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`relative px-3.5 py-2.5 rounded-xl font-sans text-xs tracking-wide font-medium transition-colors cursor-pointer select-none ${
                    isActive ? 'text-cyan-400 font-bold' : 'text-zinc-550 hover:text-zinc-300'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCertFilterTab"
                      className="absolute inset-0 bg-zinc-950/65 rounded-xl border border-white/10 shadow-inner"
                      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Premium Grid Gallery (Uniform 16:9 Certificates) */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left"
        >
          <AnimatePresence mode="popLayout">
            {filteredCertificates.map((cert) => (
              <motion.div
                layout
                key={cert.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedCert(cert)}
                id={`cert-item-${cert.id}`}
                className="group p-5 rounded-2xl bg-zinc-900/20 border border-white/5 hover:bg-zinc-900/40 hover:border-[#00d2ff]/30 backdrop-blur-md transition-all duration-350 cursor-pointer overflow-hidden shadow-lg flex flex-col justify-between"
              >
                <div>
                  {/* Image frame aspect-video (16:9 uniform) featuring Inner-Zoom scale down effect on hover */}
                  <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-zinc-950 border border-white/5 flex items-center justify-center mb-4">
                    {/* Render Image with zoom-inner effect (scale down class on hover) */}
                    <img
                      src={cert.image}
                      alt={cert.title}
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        // Abstract gradient fallback for certificates
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const fallbackDiv = target.nextSibling as HTMLDivElement;
                        if (fallbackDiv) fallbackDiv.style.display = 'flex';
                      }}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out scale-100 group-hover:scale-95"
                    />

                    {/* Gradient fallback wrapper */}
                    <div className="hidden absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-cyan-950/40 p-4 flex-col justify-center items-center text-center">
                      <Award className="w-10 h-10 text-cyan-400 mb-2 animate-pulse" />
                      <span className="font-mono text-[9px] uppercase tracking-widest text-[#00d2ff] font-extrabold">{cert.issuer}</span>
                      <span className="font-sans text-[8px] text-zinc-550 mt-1 uppercase">COMPETENCY DIPLOMA</span>
                    </div>

                    {/* Hover overlay with Lightbox2 scale indicator and eye icon */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-350 flex flex-col items-center justify-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 animate-pulse">
                        <Eye size={16} />
                      </div>
                      <span className="font-sans text-[9px] text-zinc-300 uppercase tracking-widest font-black select-none">
                        Lightbox Zoom
                      </span>
                    </div>
                  </div>

                  {/* Certificate Information */}
                  <span className="font-mono text-[9px] uppercase tracking-widest text-cyan-400 font-extrabold block mb-1">
                    {cert.issuer}
                  </span>
                  <h3 className="font-sans font-extrabold text-xs md:text-sm text-zinc-100 group-hover:text-cyan-400 transition-colors leading-snug line-clamp-2">
                    {cert.title}
                  </h3>
                </div>

                {/* Card footer details */}
                <div className="flex justify-between items-center border-t border-white/5 pt-3 mt-4 text-[9px] font-mono text-zinc-650">
                  <span className="flex items-center gap-1 font-medium">
                    <CalendarDays size={10} className="text-zinc-600" />
                    {cert.date}
                  </span>
                  <span className="hover:text-zinc-400 transition-colors">
                    ID: {cert.credentialId.substring(0, 15)}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Dynamic Zoom Certificate Lightbox Modal */}
        <AnimatePresence>
          {selectedCert && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedCert(null)}
                className="absolute inset-0 bg-black/90 backdrop-blur-md"
              />

              {/* Modal Frame */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 15 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 15 }}
                transition={{ duration: 0.3 }}
                className="relative w-full max-w-2xl bg-zinc-950/70 border border-white/10 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl z-10 text-left"
              >
                {/* Image wrapper */}
                <div className="aspect-video w-full bg-zinc-950 relative border-b border-white/5 flex items-center justify-center overflow-hidden">
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallbackDiv = target.nextSibling as HTMLDivElement;
                      if (fallbackDiv) fallbackDiv.style.display = 'flex';
                    }}
                    className="w-full h-full object-cover"
                  />

                  {/* Fallback frame in Modal */}
                  <div className="hidden absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-cyan-950/40 p-12 flex-col justify-center items-center text-center">
                    <Award className="w-16 h-16 text-cyan-400 mb-4 animate-pulse" />
                    <span className="font-mono text-xs uppercase tracking-widest text-[#00d2ff] font-extrabold">{selectedCert.issuer}</span>
                    <span className="font-sans text-[10px] text-zinc-500 mt-1 leading-relaxed max-w-sm">Certificate image asset '{selectedCert.image}' is simulated dynamically for correct rendering on preview deployment host.</span>
                  </div>

                  {/* Close trigger in Image right corner */}
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-zinc-950/50 border border-white/10 backdrop-blur-md text-zinc-400 hover:text-zinc-100 flex items-center justify-center cursor-pointer"
                  >
                    <X size={15} />
                  </button>
                </div>

                {/* Metadata content */}
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <ShieldCheck className="text-cyan-400 w-4.5 h-4.5 animate-pulse" />
                    <span className="font-mono text-[9px] tracking-widest text-[#00d2ff] font-extrabold uppercase">
                      KREDENSIAL TERVERIFIKASI RESMI
                    </span>
                  </div>

                  <h3 className="font-sans font-extrabold text-base md:text-lg text-zinc-100 leading-snug mb-2">
                    {selectedCert.title}
                  </h3>
                  <p className="font-sans text-xs text-zinc-400 leading-relaxed mb-6">
                    Sertifikat ini diterbitkan resmi oleh <span className="text-zinc-200 font-semibold">{selectedCert.issuer}</span> pada <span className="text-zinc-200 font-semibold">{selectedCert.date}</span> sebagai kredensial penting dalam penguasaan rekayasa materi di bidang teknologi.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-white/5 pt-4 mb-6">
                    <div>
                      <span className="block font-mono text-[9px] text-zinc-550 uppercase">ID KREDENSIAL</span>
                      <span className="font-mono text-xs text-zinc-300 mt-1 block font-bold transition-all">
                        {selectedCert.credentialId}
                      </span>
                    </div>
                    <div>
                      <span className="block font-mono text-[9px] text-zinc-550 uppercase">BULAN PENERBITAN</span>
                      <span className="font-mono text-xs text-zinc-300 mt-1 block font-bold">
                        {selectedCert.date}
                      </span>
                    </div>
                  </div>

                  {/* Actions Link */}
                  <a
                    href={selectedCert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:opacity-90 text-zinc-950 font-sans font-bold text-xs flex items-center justify-center gap-2 cursor-pointer transition-colors"
                  >
                    <span>Verifikasi Kredensial Resmi</span>
                    <ExternalLink size={13} className="text-zinc-950" />
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
