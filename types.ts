export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  year?: string;
  category: 'professional' | 'research' | 'personal';
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  description: string[];
  links?: { label: string; url: string }[];
}

export interface ExpertiseItem {
  id: string;
  title: string;
  skills: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  year?: string;
  description?: string;
  links?: { label: string; url: string }[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  link?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: 'github' | 'linkedin' | 'twitter' | 'mail' | 'external';
}

export enum SectionId {
  HERO = 'hero',
  ABOUT = 'about',
  EXPERTISE = 'expertise',
  EDUCATION = 'education',
  EXPERIENCE = 'experience',
  PROJECTS = 'projects',
  ACHIEVEMENTS = 'achievements',
  CERTIFICATIONS = 'certifications',
  CONTACT = 'contact',
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}