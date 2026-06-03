import React from 'react';
import {
  Atom,
  Layers,
  Palette,
  Code2,
  Zap,
  Server,
  Cpu,
  Database,
  Globe,
  GitBranch,
  Figma,
  Box,
  Play,
  Award,
  Briefcase,
  Calendar,
  GraduationCap,
  CheckCircle,
  Github,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ExternalLink,
  Menu,
  X,
  FileDown,
  Eye,
  Check,
  CalendarDays,
  Send,
  MessageSquare,
  Sparkles
} from 'lucide-react';

interface LucideIconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function LucideIcon({ name, className = '', size = 20 }: LucideIconProps) {
  switch (name) {
    case 'Atom':
      return <Atom className={className} size={size} />;
    case 'Layers':
      return <Layers className={className} size={size} />;
    case 'Palette':
      return <Palette className={className} size={size} />;
    case 'Code2':
      return <Code2 className={className} size={size} />;
    case 'Zap':
      return <Zap className={className} size={size} />;
    case 'Server':
      return <Server className={className} size={size} />;
    case 'Cpu':
      return <Cpu className={className} size={size} />;
    case 'Database':
      return <Database className={className} size={size} />;
    case 'Globe':
      return <Globe className={className} size={size} />;
    case 'GitBranch':
      return <GitBranch className={className} size={size} />;
    case 'Figma':
      return <Figma className={className} size={size} />;
    case 'Box':
      return <Box className={className} size={size} />;
    case 'Play':
      return <Play className={className} size={size} />;
    case 'Award':
      return <Award className={className} size={size} />;
    case 'Briefcase':
      return <Briefcase className={className} size={size} />;
    case 'Calendar':
      return <Calendar className={className} size={size} />;
    case 'GraduationCap':
      return <GraduationCap className={className} size={size} />;
    case 'CheckCircle':
      return <CheckCircle className={className} size={size} />;
    case 'Github':
      return <Github className={className} size={size} />;
    case 'Linkedin':
      return <Linkedin className={className} size={size} />;
    case 'Instagram':
      return <Instagram className={className} size={size} />;
    case 'Mail':
      return <Mail className={className} size={size} />;
    case 'Phone':
      return <Phone className={className} size={size} />;
    case 'MapPin':
      return <MapPin className={className} size={size} />;
    case 'ArrowRight':
      return <ArrowRight className={className} size={size} />;
    case 'ExternalLink':
      return <ExternalLink className={className} size={size} />;
    case 'Menu':
      return <Menu className={className} size={size} />;
    case 'X':
      return <X className={className} size={size} />;
    case 'FileDown':
      return <FileDown className={className} size={size} />;
    case 'Eye':
      return <Eye className={className} size={size} />;
    case 'Check':
      return <Check className={className} size={size} />;
    case 'CalendarDays':
      return <CalendarDays className={className} size={size} />;
    case 'Send':
      return <Send className={className} size={size} />;
    case 'MessageSquare':
      return <MessageSquare className={className} size={size} />;
    case 'Sparkles':
      return <Sparkles className={className} size={size} />;
    default:
      return <Code2 className={className} size={size} />;
  }
}
