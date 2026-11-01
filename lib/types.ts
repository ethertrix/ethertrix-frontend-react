export interface CompanyPillar {
  title: string;
  description: string;
}

export interface JourneyStep {
  step: string;
  title: string;
  description: string;
}

export interface WhyUsPillar {
  title: string;
  headline: string;
  description: string;
}

export interface FounderStory {
  headline: string;
  focus: string;
  bio: string;
}

export interface CompanyStats {
  label: string;
  value: string;
  description: string;
}

export interface CompanyProfile {
  name: string;
  tagline: string;
  positioning: string;
  statement: string;
  headquarters: string;
  description: string;
  mission: string;
  pillars: CompanyPillar[];
  journeySteps: JourneyStep[];
  whyUs: WhyUsPillar[];
  founderStory: FounderStory;
  contactEmail: string;
  contactPhone: string;
  socialLinks: {
    platform: string;
    url: string;
  }[];
  // Backward compatibility fields
  legalName?: string;
  operatingAddress?: string;
  foundedYear?: number;
  stats?: CompanyStats[];
  globalCoverage?: string[];
}

export interface SportsOSCapability {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: string;
}

export interface TargetAudience {
  title: string;
  description: string;
  icon: string;
}

export interface ArchitectureLayer {
  layer: string;
  details: string;
}

export interface SportsOSProduct {
  slug: string;
  name: string;
  label: string;
  tagline: string;
  headline: string;
  subheadline: string;
  description: string;
  ecosystemNodes: string[];
  capabilities: SportsOSCapability[];
  architectureLayers: ArchitectureLayer[];
  targetAudiences: TargetAudience[];
}

// Backward compatibility Product type
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

export interface ServiceItem {
  title: string;
  description: string;
  tag?: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  tagline: string;
  description: string;
  services: ServiceItem[];
}

// Backward compatibility ServiceOffering type
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

export interface ClientProject {
  slug: string;
  title: string;
  type: 'Internal Product' | 'Client Solution';
  category: string;
  industry: string;
  description: string;
  challenge: string;
  solution: string;
  capabilities: string[];
  techStack: string[];
  platforms: string[];
  featured: boolean;
  orderIndex?: number;
  image?: string;
  gallery?: string[];
}

// Backward compatibility CaseStudy type
export interface CaseStudy extends ClientProject {
  headline?: string;
  summary?: string;
  clientIndustry?: string;
  metrics?: {
    metric: string;
    label: string;
  }[];
}

export interface HowWeWorkStep {
  step: string;
  title: string;
  description: string;
  details: string;
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
