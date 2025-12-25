export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string[];
  logo: string;
}

export interface Skill {
  icon: string;
  name: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export interface ContactMethod {
  icon: string;
  title: string;
  description: string;
  link: string;
  target?: string;
}

export interface SocialLink {
  icon: string;
  link: string;
  label: string;
}
