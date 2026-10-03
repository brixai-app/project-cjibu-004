import type { Metric, CaseStudy, Service, Testimonial } from '@/types';

export const globalMetrics: Metric[] = [
  {
    id: 'aum',
    label: 'Capital advised',
    value: 18,
    suffix: 'B+',
    prefix: '$',
    description: 'Cumulative transaction value across mandates since 2014',
  },
  {
    id: 'deals',
    label: 'Closed transactions',
    value: 127,
    suffix: '',
    description: 'Sell-side and buy-side mandates completed across sectors',
  },
  {
    id: 'premium',
    label: 'Avg. premium to initial bid',
    value: 23,
    suffix: '%',
    description: 'Median uplift vs. first actionable indication of interest',
  },
  {
    id: 'countries',
    label: 'Cross-border jurisdictions',
    value: 19,
    suffix: '',
    description: 'Geographies navigated for regulatory and execution',
  },
];

export const services: Service[] = [
  {
    id: 'm-a-advisory',
    name: 'M&A Advisory',
    slug: 'm-a-advisory',
    category: 'Transactions',
    tagline: 'Full-cycle execution from indication to closing dinner.',
    description:
      'Strategic and tactical advisory on sell-side and buy-side mandates, with rigorous process design, counter-party mapping, and negotiation choreography.',
    outcomes: [
      'Tightly run auction dynamics with credible competitive tension',
      'Transaction structures aligned to board and sponsor objectives',
      'Fact-based valuations anchored in investor-ready narratives',
    ],
    spotlightMetric: {
      id: 'sell-side-premium',
      label: 'Sell-side premium vs. sector median',
      value: 310,
      suffix: 'bps',
      description: 'Median premium achieved across realized mandates.',
    },
  },
  {
    id: 'capital-raises',
    name: 'Capital Raises',
    slug: 'capital-raises',
    category: 'Financing',
    tagline: 'Architected capital stacks that survive market cycles.',
    description:
      'Debt and equity capital raise support, from story construction to term sheet negotiation and documentation support with legal counsel.',
    outcomes: [
      'Investor shortlists calibrated to mandate size and risk profile',
      'Financing structures designed for covenant headroom',
      'Reduced closing friction via synchronized workstreams',
    ],
    spotlightMetric: {
      id: 'mandate-size',
      label: 'Median mandate size',
      value: 275,
      suffix: 'M',
      prefix: '$',
      description: 'Typical single-transaction size for lead mandates.',
    },
  },
  {
    id: 'strategic-advisory',
    name: 'Strategic Advisory',
    slug: 'strategic-advisory',
    category: 'Advisory',
    tagline: 'Board-level clarity under real-world constraints.',
    description:
      'Independent strategic advisory on portfolio construction, market entry, and capital allocation, grounded in deep sector pattern recognition.',
    outcomes: [
      'Scenario trees that quantify upside, base, and downside cases',
      'Objective challenge to internal conviction and legacy plans',
      'Execution roadmaps with crisp governance milestones',
    ],
    spotlightMetric: {
      id: 'board-engagements',
      label: 'Board strategy sessions facilitated',
      value: 60,
      suffix: '+',
      description: 'Multi-session mandates with public and private boards.',
    },
  },
  {
    id: 'special-situations',
    name: 'Special Situations',
    slug: 'special-situations',
    category: 'Restructuring',
    tagline: 'Complex capital structures, simplified and re-aligned.',
    description:
      'Support for liability management, distressed M&A, and covenant resets, coordinating across lenders, sponsors, and management teams.',
    outcomes: [
      'Extended runways without over-optimizing short-term optics',
      'Stakeholder maps that surface real decision-makers',
      'Structures built to avoid repeat distress scenarios',
    ],
    spotlightMetric: {
      id: 'runway-extension',
      label: 'Runway extension achieved',
      value: 24,
      suffix: ' months',
      description: 'Median liquidity runway created post-transaction.',
    },
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: 'infra-platform-rollup',
    title: 'Pan-European Infrastructure Platform Roll-Up',
    slug: 'infra-platform-rollup',
    sector: 'Infrastructure',
    headline: 'Orchestrated a multi-asset platform sale at 18.4x EBITDA.',
    summary:
      'Advised a sponsor-backed infrastructure platform on a dual-track sale and refinancing, coordinating five bilateral workstreams into a single competitive process.',
    challenge:
      'Fragmented asset-level financials and inconsistent regulatory disclosures were depressing early bids and elongating diligence timelines.',
    approach:
      'Rebuilt a normalized asset data room, introduced standardized KPI packs, and sequenced bidders into staggered management presentations to surface price tension.',
    outcome:
      'Secured a binding offer 19% above the initial bid and closed within a 90-day signing window despite complex cross-border approvals.',
    metrics: [
      {
        id: 'ev-ebitda-multiple',
        label: 'Realized EV / EBITDA',
        value: 18.4,
        suffix: 'x',
        description: 'Headline multiple at signing vs. 15.2x initial IOI.',
      },
      {
        id: 'bid-uplift',
        label: 'Premium to first IOI',
        value: 19,
        suffix: '%',
        description: 'Price increase from first actionable indication.',
      },
      {
        id: 'timeline-days',
        label: 'Signing timeline',
        value: 90,
        suffix: ' days',
        description: 'From teaser launch to signed SPA.',
      },
    ],
    chartsData: [
      {
        id: 'bid-evolution',
        name: 'Bid evolution',
        color: '#0077FF',
        points: [
          { label: 'IOI', value: 100 },
          { label: 'LOI', value: 112 },
          { label: 'Final', value: 119 },
        ],
      },
    ],
    thumbnailUrl:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    heroImageUrl:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    servicesUsed: ['M&A Advisory', 'Strategic Advisory'],
    timeline: '9-month mandate from pre-process to closing',
    location: 'Frankfurt / Amsterdam',
  },
  {
    id: 'saas-growth-recap',
    title: 'Growth Recap for Vertical SaaS Leader',
    slug: 'saas-growth-recap',
    sector: 'Software',
    headline: 'Raised $220M in growth capital while preserving founder control.',
    summary:
      'Led a structured growth recapitalization for a bootstrapped SaaS company, balancing secondary liquidity with continued founder governance.',
    challenge:
      'Founders required meaningful liquidity without triggering a change-of-control or over-levering a subscription-focused balance sheet.',
    approach:
      'Mapped global growth equity investors, modeled multiple recap structures, and ran a targeted process with staged access to cohort analytics.',
    outcome:
      'Closed a minority growth round at 14.1x ARR with a syndicate offering strategic distribution channels.',
    metrics: [
      {
        id: 'arr-multiple',
        label: 'Implied ARR multiple',
        value: 14.1,
        suffix: 'x',
      },
      {
        id: 'capital-raised',
        label: 'Capital raised',
        value: 220,
        suffix: 'M',
        prefix: '$',
      },
      {
        id: 'founder-ownership',
        label: 'Post-deal founder ownership',
        value: 62,
        suffix: '%',
      },
    ],
    chartsData: [
      {
        id: 'ownership-structure',
        name: 'Ownership structure',
        color: '#00C2FF',
        points: [
          { label: 'Founders', value: 62 },
          { label: 'Investors', value: 30 },
          { label: 'ESOP', value: 8 },
        ],
      },
    ],
    thumbnailUrl:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    heroImageUrl:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    servicesUsed: ['Capital Raises', 'Strategic Advisory'],
    timeline: '6-month process from mandate to funding',
    location: 'London / New York',
  },
  {
    id: 'logistics carveout',
    title: 'Corporate Carve-Out of Logistics Division',
    slug: 'logistics-carveout',
    sector: 'Transportation',
    headline: 'Separated a non-core logistics unit into a stand-alone asset.',
    summary:
      'Supported a conglomerate in carving out a logistics division, establishing stand-alone economics and preparing it for a sponsor-led sale.',
    challenge:
      'Legacy systems and shared services obscured true profitability, making sponsor underwriting difficult.',
    approach:
      'Built a granular cost allocation model, validated management adjustments, and created a separation roadmap with day-one readiness metrics.',
    outcome:
      'Enabled a competitive auction that resulted in a sale at 11.6x EBITDA with a clean separation plan.',
    metrics: [
      {
        id: 'margin-uplift',
        label: 'Identified margin uplift',
        value: 260,
        suffix: 'bps',
      },
      {
        id: 'sg-a-disentangled',
        label: 'Allocated group SG&A',
        value: 87,
        suffix: '%',
      },
    ],
    thumbnailUrl:
      'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1400&q=85',
    heroImageUrl:
      'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1400&q=85',
    servicesUsed: ['M&A Advisory', 'Special Situations'],
    timeline: '12-month end-to-end separation and sale',
    location: 'Zurich',
  },
  {
    id: 'energy-restructuring',
    title: 'Balance Sheet Restructuring for Energy Portfolio',
    slug: 'energy-restructuring',
    sector: 'Energy',
    headline: 'Stabilized a multi-asset energy portfolio amid price shocks.',
    summary:
      'Advised a sponsor and management team through a covenant reset, asset sale, and new money injection to restore liquidity.',
    challenge:
      'Volatile commodity prices and tight covenants created a narrow runway with limited appetite for new risk from existing lenders.',
    approach:
      'Led a consensual restructuring process, combining selective asset sales with a structured equity injection and covenant amendments.',
    outcome:
      'Extended runway by 30 months while maintaining sponsor control and protecting key operating assets.',
    metrics: [
      {
        id: 'debt-reduction',
        label: 'Gross debt reduction',
        value: 28,
        suffix: '%',
      },
      {
        id: 'runway-extension-energy',
        label: 'Liquidity runway extension',
        value: 30,
        suffix: ' months',
      },
    ],
    thumbnailUrl:
      'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1400&q=85',
    heroImageUrl:
      'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1400&q=85',
    servicesUsed: ['Special Situations', 'Strategic Advisory'],
    timeline: '9-month restructuring and follow-on monitoring',
    location: 'Oslo',
  },
  {
    id: 'consumer-omnichannel',
    title: 'Omnichannel Expansion for Consumer Brand',
    slug: 'consumer-omnichannel',
    sector: 'Consumer',
    headline: 'Orchestrated a minority sale to fuel omnichannel expansion.',
    summary:
      'Helped a premium consumer brand transition from wholesale-heavy distribution to a modern omnichannel mix via a strategic investor.',
    challenge:
      'Brand equity needed to be preserved while materially shifting channel economics and marketing intensity.',
    approach:
      'Developed an investor-ready growth case with granular cohort analysis, DTC unit economics, and retail partnership benchmarks.',
    outcome:
      'Closed a minority investment at 3.4x revenue with structured earn-outs tied to channel penetration.',
    metrics: [
      {
        id: 'revenue-multiple',
        label: 'Revenue multiple',
        value: 3.4,
        suffix: 'x',
      },
      {
        id: 'dtc-mix',
        label: 'DTC revenue mix post-deal',
        value: 48,
        suffix: '%',
      },
    ],
    thumbnailUrl:
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1400&q=85',
    heroImageUrl:
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1400&q=85',
    servicesUsed: ['M&A Advisory', 'Capital Raises'],
    timeline: '7-month investor search and execution',
    location: 'Paris',
  },
  {
    id: 'digital-infra-jv',
    title: 'Digital Infrastructure Joint Venture',
    slug: 'digital-infra-jv',
    sector: 'Digital Infrastructure',
    headline: 'Structured a cross-border JV to accelerate network rollout.',
    summary:
      'Advised two regional operators on forming a joint venture to pool capex and accelerate digital infrastructure deployment.',
    challenge:
      'Asymmetrical asset quality and divergent governance expectations risked stalling negotiations.',
    approach:
      'Ran a structured negotiation process, re-valued contributed assets, and established a governance framework with clear veto mechanics.',
    outcome:
      'Signed a JV with aligned incentives, pooled procurement, and a pre-agreed roadmap for future equity injections.',
    metrics: [
      {
        id: 'capex-savings',
        label: 'Projected capex savings',
        value: 17,
        suffix: '%',
      },
      {
        id: 'rollout-acceleration',
        label: 'Network rollout acceleration',
        value: 22,
        suffix: '%',
      },
    ],
    thumbnailUrl:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    heroImageUrl:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    servicesUsed: ['Strategic Advisory'],
    timeline: '5-month design and negotiation',
    location: 'Singapore',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 'chair-infra',
    name: 'Elena Meyer',
    role: 'Chair of the Board',
    company: 'Nordbridge Infrastructure Partners',
    avatarUrl:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    quote:
      'Returnz ran the most disciplined process our board has seen—every discussion was anchored in data, not theatre.',
    highlight: 'Disciplined, data-led process with clear trade-off framing.',
    relationship: 'Sell-side M&A and ongoing strategic advisory',
  },
  {
    id: 'founder-saas',
    name: 'David Liu',
    role: 'Founder & CEO',
    company: 'SignalPath Systems',
    avatarUrl:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    quote:
      'They translated our messy product story into an investor narrative that still feels authentic to our team.',
    highlight: 'Narrative precision without sacrificing founder voice.',
    relationship: 'Growth recapitalization and board strategy sessions',
  },
  {
    id: 'cfo-energy',
    name: 'Maria Rodríguez',
    role: 'Group CFO',
    company: 'HelioCore Energy',
    avatarUrl:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    quote:
      'In a stressful restructuring, Returnz were the only ones consistently ahead of the next lender question.',
    highlight: 'Execution under pressure with lender trust intact.',
    relationship: 'Special situations and balance sheet restructuring',
  },
];

export const mockData = {
  globalMetrics,
  services,
  caseStudies,
  testimonials,
};

export default mockData;