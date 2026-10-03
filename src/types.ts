export type Metric = {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  description?: string;
};

export type ChartPoint = {
  label: string;
  value: number;
};

export type ChartSeries = {
  id: string;
  name: string;
  color?: string;
  points: ChartPoint[];
};

export type CaseStudy = {
  id: string;
  title: string;
  slug: string;
  sector: string;
  headline: string;
  summary: string;
  challenge: string;
  approach: string;
  outcome: string;
  metrics: Metric[];
  chartsData?: ChartSeries[];
  thumbnailUrl: string;
  heroImageUrl?: string;
  servicesUsed: string[];
  timeline: string;
  location?: string;
};

export type Service = {
  id: string;
  name: string;
  slug: string;
  category: string;
  tagline: string;
  description: string;
  outcomes: string[];
  spotlightMetric?: Metric;
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarUrl?: string;
  quote: string;
  highlight?: string;
  relationship: string;
};

export type ContactFormState = {
  name: string;
  email: string;
  company: string;
  role: string;
  mandateSize: string;
  timeline: string;
  message: string;
  consent: boolean;
};

export type ContactFormErrors = {
  name?: string;
  email?: string;
  company?: string;
  role?: string;
  mandateSize?: string;
  timeline?: string;
  message?: string;
  consent?: string;
};

export type AppTypes = {
  Metric: Metric;
  CaseStudy: CaseStudy;
  Service: Service;
  Testimonial: Testimonial;
  ContactFormState: ContactFormState;
  ContactFormErrors: ContactFormErrors;
};

const types: AppTypes = {} as AppTypes;

export default types;