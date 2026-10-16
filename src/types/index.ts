export interface Project {
  id: string;
  title: string;
  category: 'AI / Computer Vision' | 'Full-Stack & Systems' | 'Data Science & ML';
  subtitle: string;
  description: string;
  bulletPoints: string[];
  techStack: string[];
  repoUrl?: string;
  demoUrl?: string;
  isPrivate?: boolean;
  featured: boolean;
  badge?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  score: string;
  details?: string;
}

export interface AchievementItem {
  title: string;
  organization: string;
  year: string;
  type: 'Patent' | 'Hackathon' | 'Competition';
  description: string;
  applicationNo?: string;
  verified: boolean;
}

export interface OpenSourceItem {
  project: string;
  type: string;
  technologies: string[];
  description: string;
  status: 'Submitted PR' | 'Merged PR';
  details: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  year?: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: string[];
}
