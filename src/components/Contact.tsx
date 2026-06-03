import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, CheckCircle2, MessageSquare, Trash2, CalendarDays, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ContactMessage } from '../types';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedMessages, setSubmittedMessages] = useState<ContactMessage[]>([]);
  const [showHistory, setShowHistory] = useState(false);

  // Load message logs from LocalStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('portfolio_messages');
      if (stored) {
        setSubmittedMessages(JSON.parse(stored));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsLoading(true);

    try {
      // Real fetch submission to the specified Formspree endpoint
      const response = await fetch('https://formspree.io/f/mldpwqbo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'Hubungi Saya',
          message: formData.message
        })
      });

      if (response.ok) {
        // Successful submission
        const newMessage: ContactMessage = {
          id: Date.now().toString(),
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'Hubungi Saya',
          message: formData.message,
          timestamp: new Date().toLocaleString('id-ID', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })
        };

        const updated = [newMessage, ...submittedMessages];
        setSubmittedMessages(updated);
        localStorage.setItem('portfolio_messages', JSON.stringify(updated));

        setIsSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        alert('Gagal mengirim pesan ke server. Silakan coba beberapa saat lagi.');
      }
    } catch (err) {
      console.error(err);
      alert('Terjadi kesalahan jaringan sewaktu mengirim pesan.');
    } finally {
      setIsLoading(false);
      // Auto close success panel after 5s
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }
  };

  const handleDeleteMessage = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = submittedMessages.filter(m => m.id !== id);
    setSubmittedMessages(updated);
    localStorage.setItem('portfolio_messages', JSON.stringify(updated));
  };

  const handleClearAll = () => {
    if (confirm('Apakah Anda yakin ingin menghapus semua riwayat pesan lokal?')) {
      setSubmittedMessages([]);
      localStorage.removeItem('portfolio_messages');
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-transparent col-span-1">
      {/* Glow ambient background overlay */}
      <div className="absolute bottom-[5%] right-[15%] w-[35rem] h-[35rem] bg-cyan-900/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Title Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-zinc-900/40 border border-white/5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span className="font-mono text-[9px] tracking-widest text-zinc-400 uppercase font-bold">Kontak</span>
          </div>
          <h2 className="font-sans font-extrabold text-3xl md:text-4xl text-zinc-100 tracking-tight leading-tight mb-4">
            Hubungi <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400">Saya</span>
          </h2>
          <p className="max-w-xl font-sans text-xs md:text-sm text-zinc-400 leading-relaxed font-bold">
            Hubungkan gagasan Anda sekarang. Isi formulir aman terenkripsi di bawah untuk memulai kolaborasi berkualitas tinggi.
          </p>
        </div>

        {/* Minimalist Inversion Form Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
          
          {/* Sisi Kiri (Col 5): Minimalist Monochromatic coordinates */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            <div className="p-8 rounded-2xl bg-zinc-900/20 border border-white/5 backdrop-blur-md flex flex-col justify-between min-h-[320px] shadow-lg">
              <div>
                <h3 className="font-sans font-extrabold text-xs tracking-wider text-zinc-100 mb-6 uppercase tracking-widest text-cyan-400">
                  Contact Info
                </h3>
                
                {/* Contact Coordinates list */}
                <div className="flex flex-col gap-6">
                  <div className="flex gap-4 items-center">
                    <div className="w-9 h-9 rounded-xl bg-zinc-950/60 border border-white/5 flex items-center justify-center text-cyan-400">
                      <Mail size={15} />
                    </div>
                    <div>
                      <span className="block font-mono text-[8px] tracking-wider text-zinc-500 uppercase font-bold">EMAIL ADDRESS</span>
                      <a href={`mailto:${PERSONAL_INFO.email}`} className="font-sans text-xs text-zinc-200 hover:text-cyan-400 transition-colors font-semibold">
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4 items-center">
                    <div className="w-9 h-9 rounded-xl bg-zinc-950/60 border border-white/5 flex items-center justify-center text-cyan-400">
                      <Phone size={15} />
                    </div>
                    <div>
                      <span className="block font-mono text-[8px] tracking-wider text-zinc-500 uppercase font-bold">TELEPHONE CONTACT</span>
                      <a href="tel:+6281234567890" className="font-sans text-xs text-zinc-200 hover:text-cyan-400 transition-colors font-semibold">
                        +62 812-3456-7890
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4 items-center">
                    <div className="w-9 h-9 rounded-xl bg-zinc-950/60 border border-white/5 flex items-center justify-center text-cyan-400">
                      <MapPin size={15} />
                    </div>
                    <div>
                      <span className="block font-mono text-[8px] tracking-wider text-zinc-500 uppercase font-bold">CURRENT LOCATION</span>
                      <span className="font-sans text-xs text-zinc-200 font-semibold">
                        Blitar, Jawa Timur, Indonesia
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connected Icons */}
              <div className="border-t border-white/5 pt-6 mt-8">
                <span className="block font-mono text-[8px] text-zinc-550 uppercase tracking-widest mb-3 font-extrabold">EXPLORE DEEPER:</span>
                <div className="flex gap-3">
                  {[
                    { url: PERSONAL_INFO.github, label: 'GitHub', icon: <Github size={14} /> },
                    { url: PERSONAL_INFO.linkedin, label: 'LinkedIn', icon: <Linkedin size={14} /> },
                    { url: PERSONAL_INFO.instagram, label: 'Instagram', icon: <Instagram size={14} /> }
                  ].map((soc) => (
                    <a
                      key={soc.label}
                      href={soc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-zinc-950/60 border border-white/5 hover:border-cyan-500/30 text-zinc-400 hover:text-cyan-400 flex items-center justify-center transition-colors shadow-sm backdrop-blur-sm"
                      title={soc.label}
                    >
                      {soc.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Riwayat Pesan toggle switch block */}
            {submittedMessages.length > 0 && (
              <button
                onClick={() => setShowHistory(!showHistory)}
                id="toggle-message-logs-btn"
                className="w-full p-4 rounded-xl cursor-pointer bg-zinc-900/10 border border-white/5 backdrop-blur-md hover:border-white/10 text-xs text-zinc-400 hover:text-zinc-200 transition-colors flex items-center justify-between"
              >
                <span className="flex items-center gap-2">
                  <MessageSquare size={14} className="text-cyan-400 animate-pulse" />
                  <span>Riwayat Pesan Lokal ({submittedMessages.length})</span>
                </span>
                <span className="font-mono text-[8px] px-2 py-0.5 rounded bg-zinc-950 border border-white/5 font-extrabold text-zinc-400 uppercase">
                  {showHistory ? 'Sembunyikan' : 'Tampilkan'}
                </span>
              </button>
            )}
          </div>

          {/* Sisi Kanan (Col 7): Glassmorphic contact form featuring single underline/border ONLY */}
          <div className="lg:col-span-7 w-full overflow-hidden relative">
            <AnimatePresence mode="wait">
              {showHistory && submittedMessages.length > 0 ? (
                /* MESSAGE LOG PANEL */
                <motion.div
                  key="history-panel"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="p-8 rounded-2xl bg-zinc-900/20 border border-white/5 backdrop-blur-md text-left shadow-lg"
                >
                  <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="text-cyan-400 w-4 h-4" />
                      <h3 className="font-sans font-extrabold text-xs text-zinc-100 uppercase tracking-widest font-bold">
                        RIWAYAT ARSIP PESAN LOKAL
                      </h3>
                    </div>
                    <button
                      onClick={handleClearAll}
                      className="text-[9px] font-mono font-bold text-zinc-500 hover:text-red-400 flex items-center gap-1 transition-colors bg-transparent border-none cursor-pointer uppercase"
                    >
                      <Trash2 size={11} />
                      Cetak Ulang / Hapus
                    </button>
                  </div>

                  <div className="flex flex-col gap-4 overflow-y-auto max-h-[380px] pr-2">
                    {submittedMessages.map((msg) => (
                      <div
                        key={msg.id}
                        className="p-4 rounded-xl bg-zinc-950/40 border border-white/5 flex justify-between gap-4 backdrop-blur-sm shadow-md"
                      >
                        <div className="flex-1">
                          <div className="flex justify-between items-baseline mb-1 text-[11px] font-sans">
                            <span className="font-bold text-zinc-200">{msg.name}</span>
                            <span className="font-mono text-[9px] text-zinc-650 flex items-center gap-1 font-semibold">
                              <CalendarDays size={10} />
                              {msg.timestamp}
                            </span>
                          </div>
                          <span className="block text-[9px] font-mono text-cyan-400 uppercase tracking-tight mb-2 font-bold">
                            {msg.subject}
                          </span>
                          <p className="text-xs text-zinc-400 leading-relaxed max-w-lg mt-1 break-words">
                            {msg.message}
                          </p>
                        </div>
                        <button
                          onClick={(e) => handleDeleteMessage(msg.id, e)}
                          className="w-7 h-7 rounded-lg bg-zinc-900/40 border border-white/5 flex items-center justify-center text-zinc-500 hover:text-red-400 transition-colors self-start cursor-pointer"
                          title="Hapus"
                        >
                          <Trash2 size={11} />
                        </button>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setShowHistory(false)}
                    className="w-full mt-6 py-2.5 rounded-xl font-sans text-xs font-bold bg-zinc-900/40 border border-white/5 hover:border-white/10 hover:text-zinc-100 transition-colors text-center text-zinc-400"
                  >
                    Kembali Ke Form Kontak
                  </button>
                </motion.div>
              ) : (
                /* GLASSMORPHIC FORM featuring bottom thin border/underline only that glows */
                <motion.div
                  key="form-panel"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="p-8 rounded-2xl bg-zinc-900/20 border border-white/5 backdrop-blur-md text-left relative shadow-lg"
                >
                  <AnimatePresence>
                    {isSuccess && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="absolute inset-0 bg-zinc-950/85 backdrop-blur-md rounded-2xl z-15 flex flex-col items-center justify-center p-6 text-center"
                      >
                        <CheckCircle2 className="text-cyan-400 w-12 h-12 mb-4 animate-bounce" />
                        <h4 className="font-sans font-extrabold text-base text-zinc-100 mb-2">Pesan Berhasil Terkirim ke Formspree!</h4>
                        <p className="font-sans text-xs text-zinc-400 max-w-xs leading-relaxed mb-6">
                          Terima kasih atas tanggapan Anda. Pesan aman terkirim ke sistem, dan salinan lokal diarsipkan dalam riwayat log di bawah.
                        </p>
                        <button
                          onClick={() => setIsSuccess(false)}
                          className="px-4 py-2 font-sans font-bold bg-zinc-900 border border-white/5 rounded-xl text-xs text-zinc-400 hover:text-zinc-100 transition-all cursor-pointer"
                        >
                          Kirim Pesan Lain
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <h3 className="font-sans font-extrabold text-xs tracking-wider text-zinc-100 mb-8 uppercase tracking-widest text-[#00d2ff]">
                    Direct Form Hubungan
                  </h3>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    {/* Input Name & Email Row - bottom border only */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-none">
                      <div className="relative group/field">
                        <label className="block font-mono text-[9px] text-zinc-550 uppercase mb-1 font-bold select-none tracking-wider">
                          NAMA LENGKAP *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Masukkan nama Anda"
                          className="w-full py-2.5 font-sans text-xs text-zinc-100 bg-transparent border-t-0 border-l-0 border-r-0 border-b border-white/10 focus:border-cyan-400 focus:ring-0 outline-none transition-all placeholder:text-zinc-700 font-medium"
                        />
                        {/* Glow bottom accent line on focus */}
                        <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-cyan-400 scale-x-0 group-focus-within/field:scale-x-100 transition-transform duration-300 origin-left" />
                      </div>
                      
                      <div className="relative group/field">
                        <label className="block font-mono text-[9px] text-zinc-550 uppercase mb-1 font-bold select-none tracking-wider">
                          EMAIL SENDER *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="contoh@mail.com"
                          className="w-full py-2.5 font-sans text-xs text-zinc-100 bg-transparent border-t-0 border-l-0 border-r-0 border-b border-white/10 focus:border-cyan-400 focus:ring-0 outline-none transition-all placeholder:text-zinc-700 font-medium"
                        />
                        <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-cyan-400 scale-x-0 group-focus-within/field:scale-x-100 transition-transform duration-300 origin-left" />
                      </div>
                    </div>

                    {/* Subject field - bottom border only */}
                    <div className="relative group/field">
                      <label className="block font-mono text-[9px] text-zinc-550 uppercase mb-1 font-bold select-none tracking-wider">
                        TOPIK DISKUSI
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Mengenai penawaran modul, server setup, dsb."
                        className="w-full py-2.5 font-sans text-xs text-zinc-100 bg-transparent border-t-0 border-l-0 border-r-0 border-b border-white/10 focus:border-cyan-400 focus:ring-0 outline-none transition-all placeholder:text-zinc-700 font-medium"
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-cyan-400 scale-x-0 group-focus-within/field:scale-x-100 transition-transform duration-300 origin-left" />
                    </div>

                    {/* Message Area - bottom border only */}
                    <div className="relative group/field">
                      <label className="block font-mono text-[9px] text-zinc-550 uppercase mb-1 font-bold select-none tracking-wider">
                        ISI UTAMA KREASI *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Uraikan perihal kerja sama secara lugas di sini..."
                        className="w-full py-2.5 font-sans text-xs text-zinc-100 bg-transparent border-t-0 border-l-0 border-r-0 border-b border-white/10 focus:border-cyan-400 focus:ring-0 outline-none transition-all placeholder:text-zinc-700 resize-none font-medium mt-1"
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-cyan-400 scale-x-0 group-focus-within/field:scale-x-100 transition-transform duration-300 origin-left" />
                    </div>

                    {/* Formspree submission trigger */}
                    <button
                      type="submit"
                      disabled={isLoading}
                      id="submit-formspree-contact"
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:opacity-95 text-zinc-950 font-sans font-bold text-xs active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer mt-4 disabled:opacity-40 select-none shadow-lg shadow-cyan-950/20"
                    >
                      {isLoading ? (
                        <>
                          <div className="w-4 h-4 rounded-full border-[2.5px] border-zinc-950 border-t-transparent animate-spin" />
                          <span>Mengirim ke Server Block Formspree...</span>
                        </>
                      ) : (
                        <>
                          <Send size={12} className="text-zinc-950" />
                          <span>Kirim Gagasan Sekarang</span>
                        </>
                      )}
                    </button>
                    
                    <p className="text-[10px] font-sans text-center text-zinc-600 mt-2 select-none">
                      * Formspree Endpoint terintegrasi aman. Pesan langsung mengalir ke inbox pengembang.
                    </p>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
