export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
}

export interface Project {
  id: string;
  title: string;
  role: string;
  period: string;
  description: string;
  techStack: string[];
  achievements: string[];
  image?: string;
  buttonText: string;
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  details: string;
  tags: string[];
}

export interface Skill {
  category: string;
  items: string[];
  level: number; // 0-100
}

export interface Award {
  title: string;
  date: string;
}

export interface PersonalInfo {
  name: string;
  englishName: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  intro: string;
  avatarUrl: string;
  ctaButton: string;
}

export interface UIContent {
  nav: {
    skills: string;
    projects: string;
    experience: string;
    education: string;
    contact: string;
  };
  sectionTitles: {
    skills: string;
    skillsSubtitle: string;
    projects: string;
    projectsSubtitle: string;
    experience: string;
    experienceSubtitle: string;
    education: string;
    awards: string;
    contactTitle: string;
    contactSubtitle: string;
    emailButton: string;
    callButton: string;
    copyright: string;
  };
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  skills: Skill[];
  education: Education[];
  experience: Experience[];
  projects: Project[];
  awards: Award[];
  ui: UIContent;
}