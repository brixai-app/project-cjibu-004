export type Profile = {
  id: string;
  name: string;
  title: string;
  location: string;
  headline: string;
  bio: string;
  avatarUrl: string;
  yearsExperience: number;
  sectors: string[];
  metrics: {
    dealsAdvised: number;
    capitalRaised: number;
    avgDealSize: number;
    geographies: string[];
  };
};

export type About = {
  id: string;
  mission: string;
  philosophy: string;
  narrative: string[];
  highlightMetrics: Array<{
    id: string;
    label: string;
    value: string;
    descriptor: string;
  }>;
  timeline: Array<{
    id: string;
    year: string;
    title: string;
    description: string;
  }>;
};

export type ServiceCategory = 'Advisory' | 'Capital' | 'Restructuring' | 'Strategic';

export type Service = {
  id: string;
  name: string;
  category: ServiceCategory;
  summary: string;
  description: string;
  outcomes: string[];
  tags: string[];
  typicalMandateSize: string;
  timelineRange: string;
};

export type CaseStudyMetric = {
  id: string;
  label: string;
  value: string;
  context: string;
};

export type CaseStudy = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  clientType: string;
  sector: string;
  location: string;
  imageUrls: string[];
  mandate: string;
  challenge: string;
  approach: string[];
  outcome: string;
  metrics: CaseStudyMetric[];
  servicesUsed: string[];
  year: string;
  dealSize: string;
  isFeatured: boolean;
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  sector: string;
  relationship: 'Client' | 'Partner' | 'Peer';
  avatarUrl: string;
  highlightDealId?: string;
};

export type ContactFormValues = {
  name: string;
  company: string;
  email: string;
  phone?: string;
  mandateType: string;
  mandateSize: string;
  timeline: string;
  message: string;
  consent: boolean;
};

export type ContactFormSubmission = ContactFormValues & {
  id: string;
  submittedAt: string;
  source: 'Website' | 'Referral' | 'Conference' | 'Other';
};

export type SortKey = 'year' | 'dealSize' | 'client' | 'sector';

export type FilterKey =
  | 'All'
  | 'M&A'
  | 'Capital'
  | 'Restructuring'
  | 'PrivateEquity'
  | 'FamilyOffice';

const types = {};
export default types;