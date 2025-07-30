// Types for projects.ts
export type Project = {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  category: 'web' | 'game' | 'mobile' | 'backend';
  tags: string[];
  features: string[];
  githubUrl: string | null;
  liveUrl: string | null;
};

// Types for aboutInfo.tsx
export type Skill = {
  name: string;
  level: number; // 0-100
  category: "frontend" | "backend" | "other";
};
export type SkillCategory = {
  name: string;
  icon: React.ReactNode;
  skills: Skill[];
};
export type Education = {
  degree: string;
  institution: string;
  duration: string;
  description: string;
};
export type Experience = {
  position: string;
  company: string;
  duration: string;
  description: string[];
};