export interface Project {
  id: string;
  name: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  imagePlaceholder?: string;
  problem?: string;
  solution?: string;
  role?: string;
  challenges?: string[];
  learnings?: string[];
}

export interface SkillItem {
  name: string;
  badge: 'Core Technology' | 'Used in Projects' | 'Currently Learning';
  iconName?: string;
  color?: string;
}

export interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

export interface JourneyMilestone {
  step: string;
  title: string;
  description: string;
  highlight?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  tags: string[];
}
