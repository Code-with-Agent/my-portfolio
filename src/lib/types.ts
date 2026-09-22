export interface SocialLinks {
  linkedin: string;
  github: string;
  email: string;
  portfolio?: string;
}

export interface MetricStat {
  label: string;
  value: string;
  description: string;
}

export interface CompactInfoCards {
  experience: {
    label: string;
    value: string;
    subtext: string;
  };
  specialization: {
    label: string;
    value: string;
    subtext: string;
  };
  industry: {
    label: string;
    value: string;
    subtext: string;
  };
  location: {
    label: string;
    value: string;
    subtext: string;
  };
}

export interface PersonalInfo {
  name: string;
  monogram: string;
  title: string;
  eyebrow: string;
  tagline: string;
  aboutEyebrow: string;
  aboutHeadline: string;
  shortBio: string;
  fullBio: string[];
  infoCards: CompactInfoCards;
  location: string;
  currentRole: string;
  currentCompany: string;
  availability: string;
  yearsOfExperience: string;
  deliveredProjects: string;
  systemsIntegrated: string;
  userSatisfaction: string;
  contactEmail: string;
  phone?: string;
  socials: SocialLinks;
  resumeDownloadUrl: string;
  resumePdfFileName?: string;
  resumePdfUrl?: string;
  stats: MetricStat[];
  corePillars: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export type QualitativeSkillLevel = "Core Expertise" | "Professional Experience" | "Working Knowledge";

export interface SapExpertiseItem {
  id: string;
  title: string;
  shortDescription: string;
  conciseExplanation: string;
  qualitativeLevel: QualitativeSkillLevel;
  category: "Core UI" | "Architecture & Services" | "Backend & Data" | "Cloud & Platform";
  icon: string;
  relatedConcepts: string[];
  ecosystemPathway: "core-erp" | "cloud-native";
  pathwayStep: number;
  pathwayNext?: string;
  enterpriseUseCases: string[];
}

export interface TechStackCategory {
  id: string;
  label: string;
  description: string;
  items: {
    name: string;
    level: string;
    focus: string;
    badge?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  companyUrl?: string;
  role: string;
  location: string;
  workMode: "Remote" | "Hybrid" | "On-site";
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  businessDomain: string;
  summary: string;
  responsibilities: string[];
  keyAchievements: string[];
  technologies: string[];
}

export type ProjectFilterType = "All" | "SAPUI5" | "SAP Fiori" | "CAP" | "RAP" | "ABAP" | "Enterprise Applications";

export interface ProjectItem {
  id: string;
  name: string;
  subtitle: string;
  businessDomain: string;
  role: string;
  projectType: string;
  description: string;
  summary: string;
  imageUrl?: string;
  context: string;
  clientContext?: string;
  businessChallenge: string;
  businessProblem?: string;
  solution: string;
  architectureDetails: string[];
  sapTechnologies: string[];
  technologies?: string[];
  keyContribution: string;
  outcome: string[];
  resultsAndImpact?: string[];
  keyLearnings: string[];
  filterTags: ProjectFilterType[];
  tags: string[];
  featured: boolean;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startYear: string;
  endYear: string;
  graduationYear?: string;
  honors?: string;
  coursework: string[];
  description: string;
  relevantInfo?: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issueYear: string;
  issueDate?: string;
  credentialId?: string;
  verifyUrl?: string;
  category: "SAP Official" | "Cloud & Architecture" | "Specialist" | "Award & Recognition";
  badgeText: string;
  description: string;
  status?: "Active" | "Lifetime" | "Renewed";
  skills?: string[];
}

export type AchievementCategory =
  | "Award"
  | "Recognition"
  | "Major Milestone"
  | "Leadership Contribution"
  | "Knowledge Sharing";

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  year: string;
  category: AchievementCategory;
  badgeText: string;
  description: string;
  impact?: string;
  highlightPills?: string[];
  link?: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  sapExpertise: SapExpertiseItem[];
  techStack: TechStackCategory[];
  experience: ExperienceItem[];
  featuredProjects: ProjectItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
  achievements?: AchievementItem[];
}
