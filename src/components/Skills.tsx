import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code2, Server, Database, Cloud, Share2, Compass, Cpu, Activity } from 'lucide-react';

type SkillTabID = 'all' | 'dev' | 'sysops' | 'neteng';

export default function Skills() {
  const [activeTab, setActiveTab] = useState<SkillTabID>('all');

  const tabs = [
    { id: 'all', label: 'Semu Keahlian' },
    { id: 'dev', label: 'Apps & Data Development' },
    { id: 'sysops', label: 'Systems & DevOps' },
    { id: 'neteng', label: 'Network Infrastructure' }
  ];

  // Specific 5 main skill cards as requested by the user
  const skillCategories = [
    {
      id: 'frontend',
      tab: 'dev',
      title: 'Frontend Development',
      subtitle: 'Antarmuka Digital Dinamis',
      icon: <Code2 className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />,
      glowColor: 'shadow-[0_0_20px_rgba(6,182,212,0.15)] border-cyan-500/20 hover:border-cyan-500/40',
      tagColor: 'text-cyan-400 bg-cyan-950/20 border-cyan-500/10',
      badgeClass: 'text-cyan-400 bg-cyan-950/30',
      techs: [
        { name: 'HTML', level: 'Advanced' },
        { name: 'CSS', level: 'Advanced' },
        { name: 'JavaScript', level: 'Intermediate' }
      ]
    },
    {
      id: 'backend',
      tab: 'dev',
      title: 'Backend Core Engine',
      subtitle: 'Rekayasa Logika Hulu-Hilir',
      icon: <Server className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />,
      glowColor: 'shadow-[0_0_20px_rgba(16,185,129,0.15)] border-emerald-500/20 hover:border-emerald-500/40',
      tagColor: 'text-emerald-400 bg-emerald-950/20 border-emerald-500/10',
      badgeClass: 'text-emerald-400 bg-emerald-950/30',
      techs: [
        { name: 'Node.js', level: 'Intermediate' },
        { name: 'Flask Python', level: 'Intermediate' }
      ]
    },
    {
      id: 'database',
      tab: 'dev',
      title: 'Database & Storage',
      subtitle: 'Manajemen Relasional Tangguh',
      icon: <Database className="w-5 h-5 text-indigo-400 group-hover:scale-110 transition-transform duration-300" />,
      glowColor: 'shadow-[0_0_20px_rgba(99,102,241,0.15)] border-indigo-500/20 hover:border-indigo-500/40',
      tagColor: 'text-indigo-400 bg-indigo-950/20 border-indigo-500/10',
      badgeClass: 'text-indigo-400 bg-indigo-950/30',
      techs: [
        { name: 'MySQL', level: 'Advanced' },
        { name: 'PostgreSQL', level: 'Intermediate' }
      ]
    },
    {
      id: 'cloud-devops',
      tab: 'sysops',
      title: 'Cloud & Systems DevOps',
      subtitle: 'Administrasi Server & Cloud',
      icon: <Cloud className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform duration-300" />,
      glowColor: 'shadow-[0_0_20px_rgba(168,85,247,0.15)] border-purple-500/20 hover:border-purple-500/40',
      tagColor: 'text-purple-400 bg-purple-950/20 border-purple-500/10',
      badgeClass: 'text-purple-400 bg-purple-950/30',
      techs: [
        { name: 'Linux Debian/Ubuntu', level: 'Advanced' },
        { name: 'Nginx/Apache Server Block', level: 'Advanced' },
        { name: 'Webmin Management', level: 'Advanced' },
        { name: 'GitLab Server Deployment', level: 'Intermediate' },
        { name: 'SMTP Mail Configuration', level: 'Intermediate' }
      ]
    },
    {
      id: 'network-auto',
      tab: 'neteng',
      title: 'Network Administration & Automation',
      subtitle: 'Infrastruktur Jaringan Enterprise',
      icon: <Cpu className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform duration-300" />,
      glowColor: 'shadow-[0_0_20px_rgba(245,158,11,0.15)] border-amber-500/20 hover:border-amber-500/40',
      tagColor: 'text-amber-400 bg-amber-950/20 border-amber-500/10',
      badgeClass: 'text-amber-400 bg-amber-950/30',
      techs: [
        { name: 'MikroTik Academy (MTCNA Profile)', level: 'Advanced' },
        { name: 'Cisco Routing OSPF', level: 'Advanced' },
        { name: 'VLAN Segmentasi Jaringan', level: 'Advanced' },
        { name: 'Access Control List (ACL)', level: 'Advanced' },
        { name: 'NAT & Port Forwarding', level: 'Advanced' },
        { name: 'HSRP Redundancy High-Availability', level: 'Intermediate' }
      ]
    }
  ];

  const filteredCategories = activeTab === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.tab === activeTab);

  return (
    <section id="skills" className="relative py-24 bg-transparent col-span-1">
      {/* Decorative center glow blur background */}
      <div className="absolute top-[40%] right-[10%] w-[32rem] h-[32rem] bg-cyan-900/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Title Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-zinc-900/40 border border-white/5 backdrop-blur-sm rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span className="font-mono text-[9px] tracking-widest text-zinc-400 uppercase font-bold">Teknologi &amp; Kompetensi</span>
          </div>
          <h2 className="font-sans font-extrabold text-3xl md:text-4xl text-zinc-100 tracking-tight leading-tight mb-4">
            Spesialisasi <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400">Teknis Saya</span>
          </h2>
          <p className="max-w-xl font-sans text-xs md:text-sm text-zinc-400 leading-relaxed">
            Menyatukan keahlian administrasi jaringan enterprise dengan rekayasa pemrograman server modern guna melahirkan layanan tanpa kendala.
          </p>
        </div>

        {/* Dashboard-like Top Tabs menu filters */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-zinc-900/40 border border-white/5 rounded-2xl backdrop-blur-md max-w-full">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  id={`skill-filter-${tab.id}`}
                  onClick={() => setActiveTab(tab.id as SkillTabID)}
                  className={`relative px-4 py-2.5 rounded-xl font-sans text-xs tracking-wide font-medium transition-colors cursor-pointer select-none ${
                    isActive ? 'text-cyan-400 font-bold' : 'text-zinc-550 hover:text-zinc-300'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeSkillFilterTab"
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

        {/* Intersective Grid of Cards WITHOUT Progress Bars */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left"
        >
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((cat, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ duration: 0.4 }}
                key={cat.id}
                className={`group p-6 rounded-2xl bg-zinc-900/20 backdrop-blur-md border hover:bg-zinc-900/40 transition-all duration-300 flex flex-col justify-between ${cat.glowColor}`}
              >
                <div>
                  {/* Glowing Icon in the top right corner */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="font-sans font-extrabold text-sm text-zinc-100 group-hover:text-cyan-400 transition-colors leading-tight">
                        {cat.title}
                      </h3>
                      <span className="font-sans text-[10px] text-zinc-500 mt-1 block">
                        {cat.subtitle}
                      </span>
                    </div>

                    {/* Glowing outer circle for icon */}
                    <div className="w-9 h-9 rounded-xl bg-zinc-950/60 border border-white/5 flex items-center justify-center shadow-lg group-hover:border-white/10 group-hover:bg-zinc-900/40 transition-all">
                      {cat.icon}
                    </div>
                  </div>

                  {/* Minimalist Tech Badges Grid with custom indicators (NO PROGRESS BARS) */}
                  <div className="flex flex-col gap-2.5 mt-2">
                    {cat.techs.map((tech) => (
                      <div
                        key={tech.name}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-950/30 border border-white/5 group-hover:border-white/10 transition-colors"
                      >
                        <span className="font-sans text-xs text-zinc-300 font-medium tracking-wide">
                          {tech.name}
                        </span>
                        
                        {/* Status level badge indicator */}
                        <span className={`font-mono text-[9px] tracking-wide px-2 py-0.5 rounded-md font-bold uppercase ${cat.badgeClass}`}>
                          {tech.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer status metric inside the card */}
                <div className="flex items-center gap-1.5 mt-8 border-t border-zinc-900 pt-4 font-mono text-[9px] text-zinc-550 group-hover:text-zinc-450 transition-colors">
                  <Activity size={10} className="text-zinc-600 animate-pulse duration-[2s]" />
                  <span>OTOMATISASI DAN IMPLEMENTASI AMAN</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
