import { Skill, Project, Certificate, Stat, TimelineEvent } from '../types';

export const PERSONAL_INFO = {
  name: 'Alvita Najwa Zahrotun Nashiha',
  title: 'Full-Stack Web Developer',
  tagline: 'Membangun fungsionalitas hurni di balik estetika modern.',
  aboutText1: 'Saya Alvita Najwa Zahrotun Nashiha, seorang Siswi TKJ di SMKN 1 Nglegok yang aktif di Komunitas IT lokal. Memiliki ketertarikan tinggi di dunia teknologi, saya bertransisi fokus menuju dunia Full-Stack Web Development secara profesional.',
  aboutText2: 'Dengan latar belakang Penataan Jaringan (TKJ) dan otomatisasi, saya menggabungkan keahlian manajemen infrastruktur server dengan antarmuka web modern yang responsif, berkinerja tinggi, dan berdaya guna.',
  cvUrl: 'https://drive.google.com/file/d/1ALkXGbv-kz3nRGdhKbVSQsKD3JmdV3cn/view?usp=sharing',
  email: 'alvitanajwa286@gmail.com',
  github: 'https://github.com/alvitanajwa',
  linkedin: 'https://linkedin.com/in/alvitanajwa',
  instagram: 'https://instagram.com/alvitanajwa'
};

export const STATISTICS: Stat[] = [
  {
    id: 'stats-1',
    label: 'Education',
    value: 'TKJ Specialist',
    description: 'Fokus kuat pada infrastruktur jaringan, administrasi server, dan sistem operasi Debian/Ubuntu.'
  },
  {
    id: 'stats-2',
    label: 'Community',
    value: 'IT Active Member',
    description: 'Aktif mendalami kolaborasi pengembangan open-source dan diskusi teknologi.'
  },
  {
    id: 'stats-3',
    label: 'Velocity',
    value: 'Building Solutions',
    description: 'Menerjemahkan ide ke produk digital fungsional dengan antarmuka dinamis.'
  }
];

export const TIMELINE: TimelineEvent[] = [
  {
    id: 't1',
    year: '2025 - Sekarang',
    role: 'Full-Stack Web Developer (Fokus Transisi)',
    company: 'SMKN 1 Nglegok & IT Community',
    description: 'Berfokus pada integrasi hulu-hilir aplikasi web menggunakan React, Node.js, Flask Python, serta otomatisasi deployment cloud.'
  },
  {
    id: 't2',
    year: '2024 - 2025',
    role: 'IT & Network Engineer Specialist',
    company: 'Enterprise Network Lab',
    description: 'Menguasai administrasi server Debian, router Cisco/MikroTik, setup GitLab MOP server lokal, dan konfigurasi SMTP.'
  },
  {
    id: 't3',
    year: '2023 - 2024',
    role: 'Pondasi Kompetensi TKJ',
    company: 'TKJ SMKN 1 Nglegok',
    description: 'Mendalami jaringan dasar, perakitan, instalasi sistem operasi, pengkabelan, VLAN segmentasi, dasar routing dinamis OSPF.'
  }
];

// Skills will be managed directly in the Skills.tsx component as specified in layout of Tech Stack Grid
export const SKILLS: Skill[] = [
  {
    name: 'Placeholder',
    level: 100,
    category: 'frontend',
    icon: 'Atom',
    description: 'Placeholder'
  }
];

export const PROJECTS: Project[] = [
  // Modul Pembelajaran
  {
    id: 'proj-mtcna',
    title: 'Modul MTCNA (2025)',
    description: 'Panduan lengkap pembelajaran sertifikasi MikroTik Certified Network Associate, mencakup manajemen bandwidth, firewall, link redundan, dan routing statis.',
    longDescription: 'Dokumen panduan mendalam untuk kurikulum MTCNA yang dirancang untuk membantu siswa mendalami teknik administrasi jaringan dasar menggunakan RouterOS MikroTik secara sistematis.',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
    tags: ['MikroTik', 'Routing', 'Bandwidth', 'Firewall'],
    liveUrl: 'https://drive.google.com',
    githubUrl: 'https://github.com/alvitanajwa',
    category: 'Modul Pembelajaran',
    featured: true
  },
  {
    id: 'proj-debian',
    title: 'Modul Debian 12 Server Deployment (2025)',
    description: 'Dokumentasi praktis setup administrasi server menggunakan Debian 12, lengkap dengan konfigurasi Webmin, GitLab Server, Nginx Server Block, dan SMTP Mail Server.',
    longDescription: 'Modul terstruktur mengenai instalasi sistem operasi server Debian 12, manajemen user, firewall UFW, perakitan web block server, hingga setup email server SMTP yang aman dan tangguh.',
    image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=800&q=80',
    tags: ['Debian 12', 'WebServer', 'Lab-MOP', 'SMTP Mail'],
    liveUrl: 'https://drive.google.com',
    githubUrl: 'https://github.com/alvitanajwa',
    category: 'Modul Pembelajaran',
    featured: true
  },
  {
    id: 'proj-ccna',
    title: 'Modul CCNA Network Engineering (2025)',
    description: 'Catatan ringkas & modul laboratorium praktek Cisco CCNA, berkonsentrasi pada routing dinamis OSPF, segmentasi VLAN, Access Control List (ACL), dan penanganan failover HSRP.',
    longDescription: 'Modul referensi komprehensif bagi rekayasa jaringan Cisco Enterprise dengan representasi topologi logis, konfigurasi CLI IOS, segmentasi keamanan akses, dan redundansi jaringan.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    tags: ['Cisco IOS', 'OSPF Routing', 'VLAN Segmentasi', 'ACL Security'],
    liveUrl: 'https://drive.google.com',
    githubUrl: 'https://github.com/alvitanajwa',
    category: 'Modul Pembelajaran',
    featured: true
  },
  // Proyek Implementasi
  {
    id: 'proj-gitlab',
    title: 'MOP GitLab Ubuntu (2025)',
    description: 'Implementasi dan perakitan server kolaborasi tim berbasis GitLab Self-Hosted di atas infrastruktur server Ubuntu Linux lokal.',
    longDescription: 'Membangun GitLab Enterprise Edition secara lokal dengan manajemen kontainer Docker, sertifikat internal SSL, pipeline CI/CD runner kustom, serta performansi optimal sistem.',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80',
    tags: ['Ubuntu', 'GitLab', 'CI/CD Pipelines', 'On-Premise Server'],
    liveUrl: 'https://github.com/alvitanajwa',
    githubUrl: 'https://github.com/alvitanajwa',
    category: 'Proyek Implementasi',
    featured: true
  },
  {
    id: 'proj-aws',
    title: 'Python Web AWS + RDS Cloud Deployment (2025)',
    description: 'Arsitektur dan orkestrasi penyebaran aplikasi web berbasis Python di layanan cloud Amazon Web Services (AWS) menggunakan RDS PostgreSQL terkelola.',
    longDescription: 'Penyusunan arsitektur web tangguh di cloud AWS, menyebarkan server aplikasi Python Flask dengan proxy Nginx, dan memisahkan lapisan data ke cloud database PostgreSQL RDS yang memiliki backup berkala.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    tags: ['AWS Cloud', 'PostgreSQL RDS', 'Python Flask', 'Nginx Proxy'],
    liveUrl: 'https://github.com/alvitanajwa',
    githubUrl: 'https://github.com/alvitanajwa',
    category: 'Proyek Implementasi',
    featured: true
  },
  {
    id: 'proj-cli',
    title: 'Kalkulator CLI Python (2025)',
    description: 'Aplikasi kalkulator interaktif berbasis antarmuka baris perintah (CLI) yang ditulis dalam Python murni, efisien, dengan fitur log perhitungan logis.',
    longDescription: 'Proyek fondasi pemrograman terstruktur menggunakan bahasa Python dengan penanganan perkecualian masukan (input exception handling), penghitungan matematis berkelanjutan, dan pencatatan riwayat transaksi kalkulasi.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    tags: ['Python 3', 'CLI Interface', 'Exception Handling', 'Structured Code'],
    liveUrl: 'https://github.com/alvitanajwa',
    githubUrl: 'https://github.com/alvitanajwa',
    category: 'Proyek Implementasi',
    featured: false
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    id: 'cert-ccna',
    title: 'Cisco Certified Network Associate (CCNA) Course Completion',
    issuer: 'Cisco Networking Academy',
    date: 'Maret 2025',
    credentialId: 'CCNA-NETAC-202503',
    image: 'img/CCNA-Netacad.jpg',
    verifyUrl: 'https://www.netacad.com'
  },
  {
    id: 'cert-aguna-1',
    title: 'Aguna Course - Web Design Fundamental (HTML & CSS)',
    issuer: 'Aguna Course',
    date: 'September 2024',
    credentialId: 'AGU-WDF-48201-AL',
    image: 'img/Aguna-Course.jpg',
    verifyUrl: 'https://drive.google.com/file/d/1wb9n4PotpBOvpuRqouMh4u6U-Z-HTq86/view?usp=drive_link'
  },
  {
    id: 'cert-aguna-2',
    title: 'Aguna Course - Modern Frontend Engineering (React & Tailwind CSS)',
    issuer: 'Aguna Course',
    date: 'Oktober 2024',
    credentialId: 'AGU-MFE-39402-AL',
    image: 'img/Aguna-Course.jpg',
    verifyUrl: 'https://drive.google.com/file/d/1vREl9WslodGyAk89cgLCQzWNk5MPlQfX/view?usp=drive_link'
  },
  {
    id: 'cert-aguna-3',
    title: 'Aguna Course - Backend Engine & Relational Databases (Node.js & SQLite)',
    issuer: 'Aguna Course',
    date: 'November 2024',
    credentialId: 'AGU-BCE-28104-AL',
    image: 'img/Aguna-Course.jpg',
    verifyUrl: 'https://drive.google.com/file/d/1vKTU7TkGcU8dLNoZDVw3bFj83AzeSMl6/view?usp=drive_link'
  },
  {
    id: 'cert-aguna-4',
    title: 'Aguna Course - Cloud Infrastructure & Server Administration (CI/CD & DevOps)',
    issuer: 'Aguna Course',
    date: 'Desember 2024',
    credentialId: 'AGU-CIA-10294-AL',
    image: 'img/Aguna-Course.jpg',
    verifyUrl: 'https://drive.google.com/file/d/150r7ToxBgVRYpNMeVglGK_kWo1jtCSRu/view?usp=drive_link'
  },
  {
    id: 'cert-aguna-5',
    title: 'Aguna Course - Full-Stack Web Development Mastery (Capstone Project)',
    issuer: 'Aguna Course',
    date: 'Januari 2025',
    credentialId: 'AGU-FSD-39210-AL',
    image: 'img/Aguna-Course.jpg',
    verifyUrl: 'https://drive.google.com/file/d/1vTWF4xjhYdDxfiErB04hS3_Of8S92RDK/view?usp=drive_link'
  },
  {
    id: 'cert-fortinet',
    title: 'Fortinet Certified Associate - Cybersecurity Foundation',
    issuer: 'Fortinet Training Academy',
    date: 'Januari 2025',
    credentialId: 'FTN-FND-88291-NA',
    image: 'img/Fortinet.jpg',
    verifyUrl: 'https://training.fortinet.com'
  },
  {
    id: 'cert-ngoding',
    title: 'React & Next.js Advanced Architecture Solution',
    issuer: 'Always Ngoding Studio',
    date: 'Februari 2025',
    credentialId: 'ALW-RXT-10294-NA',
    image: 'img/Always-Ngoding.jpg',
    verifyUrl: 'https://alwaysngoding.com'
  },
  {
    id: 'cert-redhat',
    title: 'RedHat Linux System Administration Workshop',
    issuer: 'RedHat Inc. Certification',
    date: 'April 2025',
    credentialId: 'RH-LSA-29381-NZ',
    image: 'img/RedHat.jpg',
    verifyUrl: 'https://redhat.com'
  },
  {
    id: 'cert-events',
    title: 'National IT Competition - Jaringan dan Otomasi Infrastruktur',
    issuer: 'Events / Kemenristekdikti',
    date: 'Mei 2025',
    credentialId: 'EVT-JOI-2025-01',
    image: 'img/Events.jpg',
    verifyUrl: 'https://kemdikbud.go.id'
  }
];
