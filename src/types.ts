export type PageId = 'home' | 'about' | 'skills' | 'portfolio' | 'contact';

export interface CVData {
  personalInfo: {
    surname: string;
    firstName: string;
    otherNames: string;
    fullName: string;
    title: string;
    subtitle: string;
    yearsOfExperience: number;
    sex: string;
    maritalStatus: string;
    dateOfBirth: string;
    nationality: string;
    address1: string;
    address2: string;
    phones: string[];
    email: string;
    github: string;
  };
  summary: string;
  education: Array<{
    id: string;
    degree: string;
    institution: string;
    location: string;
    years: string;
    description: string;
  }>;
  experience: Array<{
    id: string;
    role: string;
    company: string;
    location: string;
    period: string;
    responsibilities: string[];
  }>;
  otherTraining: Array<{
    id: string;
    title: string;
    organization: string;
    year: string;
  }>;
  memberships: Array<{
    id: string;
    name: string;
    organization: string;
  }>;
  certificates: Array<{
    id: string;
    year: string;
    title: string;
    issuer: string;
    icon: string;
  }>;
  conferences: Array<{
    id: string;
    title: string;
    location: string;
    year: string;
  }>;
  skills: {
    development: string[];
    design: string[];
    multimedia: string[];
    softSkills: string[];
  };
  hobbies: Array<{
    category: string;
    details: string;
  }>;
  projects: Array<{
    id: string;
    title: string;
    category: 'web' | 'uiux' | 'design';
    description: string;
    tags: string[];
    image: string;
    liveUrl?: string;
    githubUrl?: string;
    featured: boolean;
  }>;
  stats: Array<{
    label: string;
    value: number;
    suffix: string;
  }>;
}

export interface SkillNode {
  id: string;
  name: string;
  category: string;
  level: number;
  iconName: string;
  color: string;
  radius: number; // distance from orbit center
  speed: number;
  angle: number;
  description: string;
}
