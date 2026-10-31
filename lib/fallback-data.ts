import { CompanyProfile, Product, CaseStudy, ServiceOffering } from './types';

export const fallbackCompanyProfile: CompanyProfile = {
  name: 'Ethertrix',
  legalName: 'Ethertrix LLP',
  tagline: 'Engineering High-Performance SaaS Platforms for the Global Enterprise',
  headquarters: 'Chennai, Tamil Nadu, India',
  operatingAddress: 'Ethertrix LLP, Tech Operations Center, Chennai, India',
  description:
    'Ethertrix LLP is an engineering-first software company headquartered in Chennai, specializing in building mission-critical SaaS applications, real-time mobile platforms, and high-throughput cloud backends for enterprises and fast-growing businesses worldwide.',
  mission:
    'To engineer resilient, scalable, and intuitive digital ecosystems that replace fragmented tools and legacy workflows across global industries.',
  foundedYear: 2023,
  stats: [
    { label: 'Global SaaS Reach', value: '15+ Countries', description: 'Active users & clients across North America, Europe, Middle East & APAC' },
    { label: 'Architecture Uptime', value: '99.98%', description: 'Enterprise-grade reliability across cloud and distributed VPS nodes' },
    { label: 'Daily Operations Handled', value: '100K+', description: 'Transactions, fleet routes, matchmaking pairs & legal workflows processed daily' },
    { label: 'Engineering Platforms', value: '100% Web & Mobile', description: 'Unified responsive Next.js web applications and native-feel Flutter mobile apps' },
  ],
  contactEmail: 'contact@ethertrix.com',
  contactPhone: '+91 98400 00000',
  globalCoverage: [
    'United States',
    'United Kingdom',
    'United Arab Emirates',
    'Singapore',
    'India',
    'Australia',
    'Canada',
    'Germany',
  ],
  socialLinks: [
    { platform: 'LinkedIn', url: 'https://linkedin.com/company/ethertrix' },
    { platform: 'GitHub', url: 'https://github.com/ethertrix' },
    { platform: 'Twitter', url: 'https://x.com/ethertrix' },
  ],
};

export const fallbackProducts: Product[] = [
  {
    slug: 'sportse2e',
    title: 'SportsE2E',
    tagline: 'The Complete Sports Operating Platform',
    category: 'Sports Technology & Venue Operations',
    heroBadge: 'Ethertrix Flagship In-House Product',
    description:
      'SportsE2E is an end-to-end sports operating system designed for sports federations, tournament organizers, academies, and multi-sport facilities. It consolidates tournament scheduling, live courtside scoring, athlete performance analytics, academy admissions, and venue slot bookings into a unified, high-availability platform.',
    highlights: [
      'Multi-sport tournament bracket engine with auto-scheduling and knockout / round-robin support',
      'Real-time courtside match scoring engine with low-latency live audience feeds',
      'Academy & student lifecycle management with attendance, batch rosters, and fees tracking',
      'Dynamic venue & turf slot booking with automated payment gateways and slot conflict prevention',
      'Player passports: verified athletic credentials, match statistics, and career leaderboards',
      'Multi-tenant architecture allowing clubs and state bodies to brand their own white-label portals',
    ],
    modules: [
      {
        name: 'Tournament & League Engine',
        summary: 'Automate fixture creation, referee assignment, rule engines, and point table computations with instant tie-breaker logic.',
        features: ['Automated fixtures & brackets', 'Umpire / Referee mobile console', 'Live digital scorecards', 'Instant penalty & points deduction calculation'],
      },
      {
        name: 'Academy & Athlete Management',
        summary: 'Empower coaches and academy directors to run day-to-day batches, track athlete physical assessments, and automate billing.',
        features: ['Coach-student batch allocations', 'Daily attendance & biometric integration', 'Skill rating & video assessment uploads', 'Automated recurring tuition invoices'],
      },
      {
        name: 'Venue & Turf Booking Hub',
        summary: 'Manage multi-court facilities, lighting controls, membership plans, and hourly bookings with zero double-booking.',
        features: ['Real-time slot calendar', 'Dynamic peak-hour pricing', 'Split payment & group bookings', 'Automated SMS / WhatsApp gate passes'],
      },
      {
        name: 'Live Match Center & Fan Experience',
        summary: 'Broadcast live ball-by-ball / point-by-point action to thousands of spectators with sub-second WebSocket updates.',
        features: ['Low-latency WebSocket streaming', 'Sponsor overlay management', 'Instant match highlights & shareable cards', 'Federation leaderboards'],
      },
    ],
    architectureLayers: [
      { layer: 'Frontend Layer', details: 'Next.js App Router for high-speed public web portals & administration dashboard with Tailwind CSS' },
      { layer: 'Mobile Experience', details: 'Cross-platform Flutter apps for iOS & Android targeting referees, players, and facility managers' },
      { layer: 'Real-time Event Engine', details: 'Fastify microservices with WebSocket cluster handling live match events and slot locks' },
      { layer: 'Data & Storage Layer', details: 'PostgreSQL database with JSONB indexing for custom sport rules, TimescaleDB for telemetry, and S3 asset storage' },
    ],
    techStack: ['Next.js', 'Fastify', 'PostgreSQL', 'Flutter', 'WebSockets', 'Redis', 'Docker'],
    platforms: ['Web Administration Portal', 'Mobile App (iOS & Android)', 'Courtside Referee Tablet', 'Public Spectator Web'],
    metrics: [
      { label: 'Event Latency', value: '< 150ms' },
      { label: 'Tournament Matches Scored', value: '25,000+' },
      { label: 'Concurrent Fans Supported', value: '50K+' },
      { label: 'Scheduling Efficiency', value: '10x Faster' },
    ],
    featured: true,
    liveUrl: 'https://sportse2e.com',
  },
];

export const fallbackCaseStudies: CaseStudy[] = [
  {
    slug: 'match-making-applications',
    title: 'Intelligent Match Making Applications',
    category: 'Match Making',
    clientIndustry: 'Social Discovery & Matrimonial Technology',
    headline: 'High-accuracy compatibility engines with real-time encrypted messaging across Web & Mobile.',
    summary:
      'Engineered an enterprise matchmaking and discovery ecosystem designed for hyper-accurate preference matching, verified user onboarding, real-time chat, and subscription monetization, servicing millions of daily profile evaluations.',
    challenge:
      'Previous client systems struggled with slow candidate discovery, fake profile spammers, inefficient database filtering across hundreds of multi-faceted attributes, and high server costs during peak matchmaking hours.',
    solution:
      'Architected a modular multi-tier application with Next.js web portals and Flutter mobile apps backed by Fastify and PostgreSQL. Implemented sub-second faceted indexing, AI-powered profile verification, and end-to-end socket messaging with automated privacy controls.',
    capabilities: [
      'Multi-dimensional compatibility scoring algorithms',
      'ID verification & photo liveness anti-fraud validation',
      'Real-time encrypted one-on-one chat & audio calling',
      'Granular privacy shields (stealth mode, contact gating)',
      'Multi-tier subscription billing with regional payment gateways',
      'Automated candidate recommendation queues refreshed daily',
    ],
    techStack: ['Next.js', 'Flutter (iOS & Android)', 'Fastify', 'PostgreSQL', 'Redis', 'WebSockets', 'Stripe / Razorpay'],
    platforms: ['iOS Mobile App', 'Android Mobile App', 'Responsive Web App', 'Admin Operations Console'],
    metrics: [
      { metric: '94%', label: 'Match Satisfaction Score' },
      { metric: '< 200ms', label: 'Candidate Query Latency' },
      { metric: '1M+', label: 'Profile Discoveries Monthly' },
      { metric: '99.9%', label: 'Uptime on Live Chat' },
    ],
    featured: true,
    orderIndex: 1,
    image: '/portfolio/matchmaking-hero.jpg',
    gallery: ['/portfolio/matchmaking-mobile.jpg', '/portfolio/matchmaking-dashboard.jpg'],
  },
  {
    slug: 'fleet-management-application',
    title: 'Enterprise Fleet Management & Transit Operations',
    category: 'Fleet Management',
    clientIndustry: 'Logistics, Transit & Transportation',
    headline: 'Mission-critical fleet telemetry, multi-depot operations, and automated driver dispatch.',
    summary:
      'Built a complete end-to-end fleet orchestration system connecting thousands of commercial transit vehicles, multi-depot supervisors, maintenance schedules, driver attendance, and live route telematics into one unified platform.',
    challenge:
      'The client operated multiple regional depots with fragmented paper logbooks, unmonitored fuel leakages, delayed trip dispatching, and zero real-time visibility into transit driver locations or trip incidents.',
    solution:
      'Developed a ruggedized mobile driver app with offline-first syncing alongside a commanding administrative web dashboard. Powered by Fastify and PostgreSQL, it tracks live GPS pings, calculates driver payroll based on verified trip manifests, and triggers automated maintenance alerts.',
    capabilities: [
      'Real-time vehicle GPS tracking & geofencing alerts',
      'Multi-depot dispatch scheduler and load balancing',
      'Driver mobile application with OTP trip manifests',
      'Attendance, shift logs & automated payroll computation',
      'Fuel telematics, tire wear & maintenance inspection logs',
      'Exportable compliance reports (PDF & Excel bulk generation)',
    ],
    techStack: ['Next.js', 'Flutter Android & iOS', 'Fastify', 'PostgreSQL', 'Redis Geo', 'Google Maps API', 'Docker'],
    platforms: ['Driver Mobile App', 'Depot Dispatch Console', 'Executive Web Dashboard', 'Field Inspection Tablet'],
    metrics: [
      { metric: '38%', label: 'Fuel & Idling Reduction' },
      { metric: '100%', label: 'Paperless Manifest Conversion' },
      { metric: '5,000+', label: 'Daily Transit Trips Managed' },
      { metric: '15 min', label: 'Average Dispatch Time Saved' },
    ],
    featured: true,
    orderIndex: 2,
    image: '/portfolio/fleet-management-hero.jpg',
    gallery: ['/portfolio/fleet-dispatch.jpg', '/portfolio/fleet-driver-app.jpg'],
  },
  {
    slug: 'legal-services-application',
    title: 'On-Demand Legal Services & Advocate Marketplace',
    category: 'Legal Tech',
    clientIndustry: 'Legal Services & Compliance',
    headline: 'Secure advocate discovery, digital notice generation, escrow transactions, and live consultation tracking.',
    summary:
      'Designed and delivered a comprehensive digital legal services marketplace bridging corporate clients and individuals with certified legal advocates, featuring automated digital legal documentation, escrow-secured payments, and live consultation tracking.',
    challenge:
      'Legal clients faced opaque pricing, lack of verified advocate credentials, delayed drafting of simple notices and non-disclosure agreements, and no reliable mechanism for tracked consultations.',
    solution:
      'Constructed a three-sided digital experience (Client App, Advocate App, and Compliance Admin Portal) with document generation workflows, instant consultation booking, live advocate location tracking for courtroom visits, and milestone-based escrow payouts.',
    capabilities: [
      'Bar council credential verification and specialization tagging',
      'Instant video & in-person consultation booking system',
      'Live GPS advocate tracking for courtroom / registry visits',
      'Automated legal notice, NDA & contract generator with e-signatures',
      'Secure escrow wallet for milestone release upon case delivery',
      'Confidential document vault with AES-256 cloud encryption',
    ],
    techStack: ['Next.js', 'Flutter Mobile (User & Advocate)', 'Fastify', 'PostgreSQL', 'Razorpay Escrow', 'AWS S3 Encrypted'],
    platforms: ['Client Mobile App', 'Advocate Mobile App', 'Web Administration & Compliance Portal'],
    metrics: [
      { metric: '65%', label: 'Faster Legal Notice Turnaround' },
      { metric: '10,000+', label: 'Consultations Completed' },
      { metric: '100%', label: 'Verified Bar Council Advocates' },
      { metric: 'Zero', label: 'Payment Escrow Disputes' },
    ],
    featured: true,
    orderIndex: 3,
    image: '/portfolio/legal-services-hero.jpg',
    gallery: ['/portfolio/legal-advocate-view.jpg', '/portfolio/legal-contract-editor.jpg'],
  },
];

export const fallbackServices: ServiceOffering[] = [
  {
    slug: 'saas-engineering',
    title: 'Full-Cycle SaaS Application Engineering',
    shortDescription: 'We design, engineer, and deploy multi-tenant SaaS products built for enterprise scalability and global distribution.',
    fullDescription:
      'From Day 1 architecture through zero-downtime scaling, Ethertrix builds B2B and B2C software-as-a-service platforms. We implement granular tenant isolation, flexible subscription engines, role-based access control (RBAC), and high-throughput background processing.',
    capabilities: [
      'Multi-tenant database architectures (schema-per-tenant or pooled with RLS)',
      'Enterprise authentication (SSO, SAML, OAuth2, Multi-factor)',
      'Usage-based & recurring subscription billing integration',
      'Audit logging, compliance readiness, and data privacy safeguards',
    ],
    deliverables: ['Production SaaS Application', 'Tenant Administration Console', 'Billing Engine', 'CI/CD Pipelines'],
    techStack: ['Next.js', 'Fastify', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes'],
    icon: 'Layers',
  },
  {
    slug: 'mobile-web-applications',
    title: 'Cross-Platform Mobile & Web Apps',
    shortDescription: 'Native-grade iOS & Android applications paired with high-performance responsive Next.js web applications.',
    fullDescription:
      'We build synchronized digital products where users effortlessly transition between desktop browsers and mobile devices. Utilizing Flutter and Next.js, your product shares core business contracts while delivering platform-native performance.',
    capabilities: [
      'Single codebase mobile development targeting iOS and Android',
      'Server-side rendered (SSR) & static responsive web frontends',
      'Offline-first synchronization with local cache fallback',
      'Push notifications, deep-linking, and biometric authentication',
    ],
    deliverables: ['App Store & Play Store Builds', 'Responsive Web Application', 'Design System & Component Library'],
    techStack: ['Flutter', 'Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    icon: 'Smartphone',
  },
  {
    slug: 'cloud-backend-systems',
    title: 'Scalable Cloud Backends & Distributed Systems',
    shortDescription: 'Ultra-fast Fastify APIs and hardened PostgreSQL databases engineered to process millions of requests effortlessly.',
    fullDescription:
      'We engineer backends that never choke under traffic spikes. By combining Fastify’s low-overhead asynchronous event loop with PostgreSQL’s rock-solid relational model and Redis caching, our systems deliver sub-50ms latency across global endpoints.',
    capabilities: [
      'Microservices and modular monolithic API architectures',
      'High-performance PostgreSQL optimization, query plans & partitioning',
      'Real-time WebSocket & event stream pipelines',
      'VPS and Cloud infrastructure setup (Hostinger, AWS, DigitalOcean)',
    ],
    deliverables: ['RESTful / GraphQL APIs', 'Database Schemas & Migrations', 'Nginx Reverse Proxy Config', 'Monitoring Dashboards'],
    techStack: ['Fastify', 'PostgreSQL', 'Node.js', 'Redis', 'Linux / VPS', 'Nginx'],
    icon: 'Database',
  },
  {
    slug: 'enterprise-automation',
    title: 'Enterprise Workflow Automation & Integrations',
    shortDescription: 'Replace messy spreadsheets and manual operations with custom, role-governed workflow engines.',
    fullDescription:
      'Ethertrix eliminates operational bottlenecks by turning manual paperwork, multi-step approvals, and legacy tools into automated digital workflows. We connect logistics, legal, and operational units with centralized systems of record.',
    capabilities: [
      'Automated document & invoice generation (PDF / Excel pipelines)',
      'Custom role-based permissions and multi-level approval queues',
      'Third-party ERP, CRM, accounting, and telematics API integrations',
      'Live operational telemetry dashboards and executive BI exports',
    ],
    deliverables: ['Automated Workflow Portals', 'Data Ingestion Pipelines', 'Custom ERP Integrations', 'Analytics Engine'],
    techStack: ['TypeScript', 'Fastify', 'PostgreSQL', 'Puppeteer', 'BullMQ'],
    icon: 'Workflow',
  },
];
