export interface Skill {
  name: string;
  level: number; // 0-100 indicating competency
  category: 'frontend' | 'backend' | 'tools';
  icon: string; // Lucide icon name
  description: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  category: string;
  featured: boolean;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  image: string;
  verifyUrl: string;
}

export interface Stat {
  id: string;
  label: string;
  value: string;
  description: string;
}

export interface TimelineEvent {
  id: string;
  year: string;
  role: string;
  company: string;
  description: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}
