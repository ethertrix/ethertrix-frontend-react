export interface CompanyStats {
  label: string;
  value: string;
  description: string;
}

export interface CompanyProfile {
  name: string;
  legalName: string;
  tagline: string;
  headquarters: string;
  operatingAddress: string;
  description: string;
  mission: string;
  foundedYear: number;
  stats: CompanyStats[];
  contactEmail: string;
  contactPhone: string;
  globalCoverage: string[];
  socialLinks: {
    platform: string;
    url: string;
  }[];
}

export interface ProductModule {
  name: string;
  summary: string;
  features: string[];
}

export interface Product {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  heroBadge: string;
  description: string;
  highlights: string[];
  modules: ProductModule[];
  architectureLayers: {
    layer: string;
    details: string;
  }[];
  techStack: string[];
  platforms: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  featured: boolean;
  liveUrl?: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  category: 'Match Making' | 'Fleet Management' | 'Legal Tech' | 'Enterprise SaaS' | string;
  clientIndustry: string;
  headline: string;
  summary: string;
  challenge: string;
  solution: string;
  capabilities: string[];
  techStack: string[];
  platforms: string[];
  metrics: {
    metric: string;
    label: string;
  }[];
  featured: boolean;
  orderIndex: number;
  image?: string;
  gallery?: string[];
}

export interface ServiceOffering {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  capabilities: string[];
  deliverables: string[];
  techStack: string[];
  icon: string;
}

export interface InquiryFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  projectType: string;
  budgetRange?: string;
  timeline?: string;
  message: string;
}
