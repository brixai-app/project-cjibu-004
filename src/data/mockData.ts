import {
  Profile,
  About,
  Service,
  ServiceCategory,
  CaseStudy,
  Testimonial,
  SortKey,
  FilterKey,
} from '@/types';

export const serviceCategories: ServiceCategory[] = [
  'Advisory',
  'Capital',
  'Restructuring',
  'Strategic',
];

export const caseStudySortOptions: { key: SortKey; label: string }[] = [
  { key: 'year', label: 'Year' },
  { key: 'dealSize', label: 'Deal Size' },
  { key: 'client', label: 'Client' },
  { key: 'sector', label: 'Sector' },
];

export const caseStudyFilterOptions: { key: FilterKey; label: string }[] = [
  { key: 'All', label: 'All Mandates' },
  { key: 'M&A', label: 'M&A' },
  { key: 'Capital', label: 'Capital Solutions' },
  { key: 'Restructuring', label: 'Restructuring' },
  { key: 'PrivateEquity', label: 'Private Equity' },
  { key: 'FamilyOffice', label: 'Family Office' },
];

export const profile: Profile = {
  id: 'principal',
  name: 'Returnz Advisory',
  title: 'Independent Investment Banking Boutique',
  location: 'London · New York · Dubai',
  headline: 'Quietly structuring complex capital moments for families, founders, and funds.',
  bio: 'Returnz is a discreet advisory studio specialising in off-market M&A, capital solutions, and special situations for privately held businesses and sophisticated capital allocators.',
  avatarUrl: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
  yearsExperience: 18,
  sectors: ['Business Services', 'Technology', 'Consumer', 'Industrial'],
  metrics: {
    dealsAdvised: 120,
    capitalRaised: 7.4,
    avgDealSize: 180,
    geographies: ['UK', 'DACH', 'MENA', 'North America'],
  },
};

export const about: About = {
  id: 'about-returnz',
  mission:
    'To compound the quiet wealth of our clients by architecting transactions that age well, not loudly.',
  philosophy:
    'We operate at the intersection of discipline and discretion: concentrated mandates, deep preparation, and a bias for outcomes over theatre.',
  narrative: [
    'Returnz was built as a response to mandates that were too nuanced for volume-driven banks yet too consequential for generic brokers.',
    'We embed early with principals, map the true option set, then prosecute a narrow strategy with institutional depth and boutique speed.',
    'Every engagement is partner-led, with a single spine of accountability from first conversation to funds flow.',
  ],
  highlightMetrics: [
    {
      id: 'realized-exits',
      label: 'Realised Exits',
      value: '£4.1bn+',
      descriptor: 'closed across mid-market control and minority transactions',
    },
    {
      id: 'repeat-clients',
      label: 'Repeat Mandates',
      value: '68%',
      descriptor: 'of clients have engaged Returnz on more than one transaction',
    },
    {
      id: 'crossborder',
      label: 'Cross-Border',
      value: '3.2x',
      descriptor: 'average valuation uplift on cross-border competitive processes',
    },
    {
      id: 'time-to-term-sheet',
      label: 'Term Sheet',
      value: '9.5 weeks',
      descriptor: 'median time from long list to signed, actionable term sheet',
    },
  ],
  timeline: [
    {
      id: 'origin',
      year: '2012',
      title: 'Origins in Mid-Market M&A',
      description:
        'The founding partners left bulge-bracket platforms to focus exclusively on founder-led and family office backed companies.',
    },
    {
      id: 'capital-solutions',
      year: '2016',
      title: 'Capital Solutions Platform',
      description:
        'Expanded capabilities into structured equity and credit solutions for sponsors and special situations.',
    },
    {
      id: 'global-reach',
      year: '2019',
      title: 'Global Family Office Network',
      description:
        'Formalised a curated network of global family offices to unlock off-market capital and strategic partners.',
    },
    {
      id: 'today',
      year: 'Today',
      title: 'Returnz Studio',
      description:
        'A focused advisory studio acting as transaction architect, sparring partner, and long-term sounding board.',
    },
  ],
};

export const services: Service[] = [
  {
    id: 'sell-side-manda',
    name: 'Sell-Side M&A',
    category: 'Advisory',
    summary: 'Structured, globally marketed sale processes for control and significant minority stakes.',
    description:
      'We design and execute disciplined sell-side processes that respect the nuance of legacy, culture, and post-transaction alignment while maximising competitive tension.',
    outcomes: [
      'Positioning and equity story articulation',
      'Curated global buyer universe and access',
      'Tight, staged process with asymmetric information control',
    ],
    tags: ['Sell-Side', 'Control', 'Competitive Process'],
    typicalMandateSize: '£50m – £500m enterprise value',
    timelineRange: '6 – 12 months',
  },
  {
    id: 'buy-side-manda',
    name: 'Buy-Side M&A',
    category: 'Advisory',
    summary: 'Targeted acquisition programs and platform build-outs for sponsors and strategic buyers.',
    description:
      'We support disciplined acquirers with thematic origination, bespoke outreach, and execution support on complex and proprietary situations.',
    outcomes: [
      'Pipeline strategy and screening',
      'Direct, senior-level access to principals',
      'End-to-end execution support alongside internal teams',
    ],
    tags: ['Buy-Side', 'Origination', 'Platforms'],
    typicalMandateSize: '£25m – £300m enterprise value',
    timelineRange: '3 – 18 months',
  },
  {
    id: 'growth-capital',
    name: 'Growth & Structured Capital',
    category: 'Capital',
    summary: 'Minority equity and hybrid capital solutions for compounding businesses.',
    description:
      'For founders and families optimising for control, we arrange bespoke capital stacks blending equity, preferred, and credit to fund growth, liquidity, or recapitalisations.',
    outcomes: [
      'Non-dilutive or less dilutive alternatives to traditional equity',
      'Partner selection aligned with governance and horizon',
      'Optimised cost of capital and covenant structure',
    ],
    tags: ['Growth Capital', 'Minority', 'Structured Equity'],
    typicalMandateSize: '£20m – £250m capital raised',
    timelineRange: '4 – 10 months',
  },
  {
    id: 'special-situations',
    name: 'Special Situations & Restructuring',
    category: 'Restructuring',
    summary: 'Calm, creditor-aware navigation of stressed and complex capital structures.',
    description:
      'We advise owners, boards, and creditors on balance sheet realignments, structured solutions, and value-preserving alternatives to formal processes.',
    outcomes: [
      'Stakeholder mapping and scenario design',
      'Independent option analysis and valuation',
      'Execution of liability management and new money solutions',
    ],
    tags: ['Restructuring', 'Liability Management', 'Special Situations'],
    typicalMandateSize: '£40m – £600m capital structure',
    timelineRange: '3 – 9 months',
  },
  {
    id: 'strategic-advisory',
    name: 'Principal & Board Advisory',
    category: 'Strategic',
    summary: 'Long-horizon strategic sparring for capital allocation and transaction readiness.',
    description:
      'We embed alongside principals and boards as an independent, transaction-aware advisor on capital allocation, optionality, and timing.',
    outcomes: [
      'Clear map of strategic and financial options',
      'Preparation for future sale, raise, or consolidation',
      'Confidential second opinions on inbound offers',
    ],
    tags: ['Board Advisory', 'Capital Allocation', 'Readiness'],
    typicalMandateSize: '£100m – £1bn enterprise value',
    timelineRange: 'Ongoing or 6 – 24 month mandates',
  },
];

const sharedCityScapes: string[] = [
  'https://images.unsplash.com/photo-1611416457332-946853cc75d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDY2MTIyfDB8MXxzZWFyY2h8MXx8bmlnaHQlMjBjaXR5JTIwZmluYW5jaWFsJTIwZGlzdHJpY3QlMjBza3lsaW5lJTIwZWRpdG9yaWFsfGVufDB8MHx8fDE3OTMwMTg0NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1544214036-5aaeb9e32d11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDY2MTIyfDB8MXxzZWFyY2h8Mnx8bmlnaHQlMjBjaXR5JTIwZmluYW5jaWFsJTIwZGlzdHJpY3QlMjBza3lsaW5lJTIwZWRpdG9yaWFsfGVufDB8MHx8fDE3OTMwMTg0NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1569169507605-f91e088ce91a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDY2MTIyfDB8MXxzZWFyY2h8M3x8bmlnaHQlMjBjaXR5JTIwZmluYW5jaWFsJTIwZGlzdHJpY3QlMjBza3lsaW5lJTIwZWRpdG9yaWFsfGVufDB8MHx8fDE3OTMwMTg0NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&q=80&w=1200&auto=format&fit=crop',
];

const sharedDealRooms: string[] = [
  'https://images.unsplash.com/photo-1603796846097-bee99e4a601f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDY2MTIyfDB8MXxzZWFyY2h8MXx8Y2xvc2UtdXAlMjBoYW5kcyUyMHNpZ25pbmclMjBkZWFsJTIwY29udHJhY3QlMjBjaW5lbWF0aWN8ZW58MHwwfHx8MTc5MzAxODQ0M3ww&ixlib=rb-4.1.0&q=80&w=1080&q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1681505531034-8d67054e07f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDY2MTIyfDB8MXxzZWFyY2h8Mnx8Y2xvc2UtdXAlMjBoYW5kcyUyMHNpZ25pbmclMjBkZWFsJTIwY29udHJhY3QlMjBjaW5lbWF0aWN8ZW58MHwwfHx8MTc5MzAxODQ0M3ww&ixlib=rb-4.1.0&q=80&w=1080&q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1627518788331-b3b7fdaa382f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDY2MTIyfDB8MXxzZWFyY2h8M3x8Y2xvc2UtdXAlMjBoYW5kcyUyMHNpZ25pbmclMjBkZWFsJTIwY29udHJhY3QlMjBjaW5lbWF0aWN8ZW58MHwwfHx8MTc5MzAxODQ0M3ww&ixlib=rb-4.1.0&q=80&w=1080&q=80&w=1200&auto=format&fit=crop',
];

export const caseStudies: CaseStudy[] = [
  {
    id: 'family-office-consumer',
    slug: 'family-office-consumer-platform-sale',
    title: 'Sale of European Luxury Consumer Platform to Global Strategic',
    subtitle: 'A multi-jurisdiction process balancing legacy, brand, and liquidity.',
    clientType: 'Family Office',
    sector: 'Consumer',
    location: 'Zurich / Paris',
    imageUrls: sharedCityScapes,
    mandate:
      'Advise a European family office on the sale of a majority stake in a multi-brand luxury consumer platform.',
    challenge:
      'Align three shareholder groups across generations while preserving brand equity and future strategic flexibility.',
    approach: [
      'Reframed the equity story around brand architecture and digital optionality.',
      'Orchestrated a staged, invitation-only process with a narrow global buyer set.',
      'Structured a bespoke earn-out and governance package to preserve founder influence.',
    ],
    outcome:
      'Closed transaction with a global strategic buyer at a premium valuation with significant rolled equity for the family office.',
    metrics: [
      {
        id: 'valuation-uplift',
        label: 'Headline Multiple',
        value: '14.3x EBITDA',
        context: 'representing a 32% premium to initial inbound offers',
      },
      {
        id: 'family-rollover',
        label: 'Rollover Stake',
        value: '22%',
        context: 'structured to retain governance and future upside',
      },
      {
        id: 'process-duration',
        label: 'Process Duration',
        value: '7.5 months',
        context: 'from mandate signing to funds flow',
      },
    ],
    servicesUsed: ['Sell-Side M&A', 'Principal & Board Advisory'],
    year: '2023',
    dealSize: '€420m',
    isFeatured: true,
  },
  {
    id: 'growth-capital-saas',
    slug: 'growth-capital-recurring-revenue-saas',
    title: 'Structured Growth Capital for Vertical SaaS Champion',
    subtitle: 'Non-dilutive capital for a founder retaining control.',
    clientType: 'Founder-Led',
    sector: 'Software & Services',
    location: 'London',
    imageUrls: sharedDealRooms,
    mandate:
      'Arrange growth and secondary capital for a bootstrapped vertical SaaS business serving regulated industries.',
    challenge:
      'Fund international expansion and partial founder liquidity without ceding control or over-levering the balance sheet.',
    approach: [
      'Mapped sponsor and credit appetite across hybrid capital providers.',
      'Ran a dual-track preferred equity and unitranche process to maximise options.',
      'Engineered a covenant-light structure with aligned incentives around ARR growth.',
    ],
    outcome:
      'Secured a tailored growth capital package combining preferred equity and senior debt with no governance overreach.',
    metrics: [
      {
        id: 'arr-growth',
        label: 'ARR Growth',
        value: '3.1x',
        context: 'ARR growth within 24 months post-transaction',
      },
      {
        id: 'founder-ownership',
        label: 'Founder Ownership',
        value: '72%',
        context: 'retained fully diluted ownership post-transaction',
      },
      {
        id: 'cost-of-capital',
        label: 'Blended Cost',
        value: '8.4%',
        context: 'effective blended cost of capital over the first three years',
      },
    ],
    servicesUsed: ['Growth & Structured Capital', 'Principal & Board Advisory'],
    year: '2022',
    dealSize: '£95m',
    isFeatured: true,
  },
  {
    id: 'restructuring-industrial',
    slug: 'special-situations-industrial-realignment',
    title: 'Balance Sheet Realignment for Industrial Services Group',
    subtitle: 'Preserving operating footprint through a complex stakeholder landscape.',
    clientType: 'Sponsor-Backed',
    sector: 'Industrial Services',
    location: 'Manchester',
    imageUrls: [
      'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDY2MTIyfDB8MXxzZWFyY2h8MXx8YWJzdHJhY3QlMjBmaW5hbmNpYWwlMjBjaGFydCUyMG9uJTIwZGFyayUyMHNjcmVlbiUyMG1hY3JvJTIwcGhvdG98ZW58MHwwfHx8MTc5MzAxODQ0NHww&ixlib=rb-4.1.0&q=80&w=1080&q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1689732888407-310424e3a372?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDY2MTIyfDB8MXxzZWFyY2h8Mnx8YWJzdHJhY3QlMjBmaW5hbmNpYWwlMjBjaGFydCUyMG9uJTIwZGFyayUyMHNjcmVlbiUyMG1hY3JvJTIwcGhvdG98ZW58MHwwfHx8MTc5MzAxODQ0NHww&ixlib=rb-4.1.0&q=80&w=1080&q=80&w=1200&auto=format&fit=crop',
    ],
    mandate:
      'Advise sponsor and board on options to stabilise a levered industrial services platform facing covenant pressure.',
    challenge:
      'Navigate a tight liquidity runway, union considerations, and multi-layer creditor stack without disrupting key contracts.',
    approach: [
      'Constructed an independent downside and recovery analysis shared with all stakeholders.',
      'Negotiated covenant resets and maturity extensions with senior lenders.',
      'Secured new-money capital from a specialised credit investor alongside sponsor support.',
    ],
    outcome:
      'Delivered a consensual recapitalisation, avoided formal insolvency processes, and preserved over 900 jobs.',
    metrics: [
      {
        id: 'debt-reduction',
        label: 'Gross Debt Reduction',
        value: '£120m',
        context: 'nominal reduction through equitisation and paydown',
      },
      {
        id: 'liquidity-runway',
        label: 'Liquidity Runway',
        value: '24+ months',
        context: 'projected runway post-transaction under base case',
      },
      {
        id: 'job-preservation',
        label: 'Roles Preserved',
        value: '93%',
        context: 'of direct roles across the core operating footprint',
      },
    ],
    servicesUsed: ['Special Situations & Restructuring'],
    year: '2021',
    dealSize: '£260m',
    isFeatured: false,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 'fo-principal',
    name: 'Elena Weiss',
    role: 'Chief Investment Officer',
    company: 'Weiss Familienholding',
    quote:
      'Returnz behaved like an internal deal team with external reach. The process was quietly intense, never theatrical, and the outcome exceeded both our economic and qualitative objectives.',
    rating: 5,
    sector: 'Consumer',
    relationship: 'Client',
    avatarUrl: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
    highlightDealId: 'family-office-consumer',
  },
  {
    id: 'founder-saas',
    name: 'David Lin',
    role: 'Founder & CEO',
    company: 'RegAxis Technologies',
    quote:
      'They translated our obsession with product into a crisp capital story and negotiated like owners, not brokers.',
    rating: 5,
    sector: 'Software & Services',
    relationship: 'Client',
    avatarUrl: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80',
    highlightDealId: 'growth-capital-saas',
  },
  {
    id: 'credit-partner',
    name: 'Sophia Patel',
    role: 'Managing Director, Special Situations',
    company: 'Arbor Ridge Capital',
    quote:
      'Their work in stressed situations is unusually calm and analytical. Documentation arrived early, not late, and always reflected the commercial reality.',
    rating: 4.8,
    sector: 'Industrial Services',
    relationship: 'Partner',
    avatarUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    highlightDealId: 'restructuring-industrial',
  },
];

export const mockData = {
  profile,
  about,
  services,
  caseStudies,
  testimonials,
  serviceCategories,
  caseStudySortOptions,
  caseStudyFilterOptions,
};

export default mockData;