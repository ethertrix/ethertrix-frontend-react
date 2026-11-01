import {
  CompanyProfile,
  SportsOSProduct,
  ServiceCategory,
  ClientProject,
  HowWeWorkStep,
  Product,
  CaseStudy,
  ServiceOffering,
} from './types';

export const fallbackCompanyProfile: CompanyProfile = {
  name: 'ETHERTRIX',
  tagline: 'Technology That Powers Sports Operations',
  positioning: 'A technology company building products and powering the next generation of sports operations.',
  statement:
    'Ethertrix builds SaaS products and digital solutions that help organizations simplify operations, connect their workflows and create better digital experiences.',
  headquarters: 'Chennai, India',
  description:
    'Ethertrix operates at the intersection of modern software engineering and operations digitization. We build scalable SaaS platforms with a deep commitment to the sports technology ecosystem, while helping ambitious organizations engineer custom digital platforms from concept to global scale.',
  mission:
    'To build connected digital infrastructure that simplifies complex operations for modern organizations and sports bodies worldwide.',
  pillars: [
    {
      title: 'Products',
      description: 'Building scalable SaaS products, headlined by the Ethertrix Sports Operating System.',
    },
    {
      title: 'Technology & Sports Services',
      description: 'Helping organizations build, digitize, and manage technology-driven business and sports operations.',
    },
  ],
  journeySteps: [
    { step: '01', title: 'Discover', description: 'Uncovering operational frictions, workflow bottlenecks, and user realities.' },
    { step: '02', title: 'Design', description: 'Crafting intuitive architecture, streamlined data flows, and clean interfaces.' },
    { step: '03', title: 'Build', description: 'Engineering robust, type-safe full-stack systems and mobile platforms.' },
    { step: '04', title: 'Deploy', description: 'Hardening cloud infrastructure with automated monitoring and zero-downtime releases.' },
    { step: '05', title: 'Scale', description: 'Iterating continuously with telemetry, performance optimization, and long-term partnership.' },
  ],
  whyUs: [
    {
      title: 'Product Thinking',
      headline: "We don't just build features.",
      description: 'We think deeply about product usability, data coherence, user lifecycle, and sustainable business models.',
    },
    {
      title: 'Engineering Rigor',
      headline: 'Architected for reliability and scale.',
      description: 'Modern decoupled architectures (Fastify, PostgreSQL, Next.js, Flutter) built to perform flawlessly under peak event concurrency.',
    },
    {
      title: 'Domain Understanding',
      headline: 'Rooted in operational realities.',
      description: 'We focus on understanding the chaos of paper scorecards, multi-court fixtures, and real-time operations before writing code.',
    },
    {
      title: 'Long-Term Partnership',
      headline: 'Beyond initial launch.',
      description: 'We work alongside leadership to maintain, evolve, and expand platforms as organizations scale across borders.',
    },
  ],
  founderStory: {
    headline: 'Engineering + Software + Entrepreneurship',
    focus: 'Bridging Real-World Operational Problems With Software',
    bio: 'Ethertrix was founded on a singular conviction: operational friction should never constrain organizational growth. Having witnessed tournament directors handling physical brackets in pouring rain, fleet dispatchers reconciling spreadsheets past midnight, and advocates juggling disconnected legal files, our engineering leadership built Ethertrix to replace fragmented point-tools with unified, high-integrity digital systems.',
  },
  contactEmail: 'contact@ethertrix.com',
  contactPhone: '+91 98400 00000',
  socialLinks: [
    { platform: 'LinkedIn', url: 'https://linkedin.com/company/ethertrix' },
    { platform: 'Instagram', url: 'https://instagram.com/ethertrix' },
    { platform: 'YouTube', url: 'https://youtube.com/@ethertrix' },
  ],
  legalName: 'Ethertrix LLP',
  operatingAddress: 'Ethertrix Operations Hub, Chennai, India',
  foundedYear: 2023,
  stats: [
    { label: 'Technology Focus', value: 'SaaS & Sports', description: 'Connected digital operations & custom platforms' },
    { label: 'Core Platform', value: 'Sports OS', description: 'Flagship operating system for sports organizations' },
    { label: 'Architecture', value: 'Full-Stack', description: 'Next.js, Fastify, PostgreSQL, and Flutter' },
    { label: 'Delivery Model', value: 'End-to-End', description: 'Discover → Design → Build → Deploy → Scale' },
  ],
  globalCoverage: [
    'India',
    'United States',
    'United Arab Emirates',
    'United Kingdom',
    'Singapore',
    'Australia',
  ],
};

export const fallbackSportsOS: SportsOSProduct = {
  slug: 'sports-os',
  name: 'Ethertrix Sports OS',
  label: 'FLAGSHIP PRODUCT',
  tagline: 'One Operating System for Modern Sports Organizations',
  headline: 'One operating system for modern sports organizations.',
  subheadline:
    'Sports organizations and event operators manage registrations, participants, competitions, schedules, venues, payments, results and communications across different systems. Ethertrix Sports OS is being built to bring these operations together into one connected platform.',
  description:
    'Ethertrix Sports OS provides end-to-end operational infrastructure for federations, leagues, tournaments, academies, and multi-sport facilities. From automated knockout fixture generation to courtside referee scoring and instant participant certification, Sports OS powers the entire operational lifecycle.',
  ecosystemNodes: [
    'Events',
    'Competitions',
    'Registrations',
    'Participants',
    'Teams',
    'Venues',
    'Payments',
    'Scheduling',
    'Results',
    'Analytics',
  ],
  capabilities: [
    {
      id: 'events',
      title: 'Sports Event Management',
      description: 'End-to-end orchestration for multi-day, multi-category sporting events and mass-participation athletics.',
      category: 'Operations',
      icon: 'Calendar',
    },
    {
      id: 'tournaments',
      title: 'Tournament & Competition Management',
      description: 'Dynamic bracket generators supporting single elimination, double elimination, round-robin, and custom league formats.',
      category: 'Competition',
      icon: 'Trophy',
    },
    {
      id: 'registrations',
      title: 'Online Registrations & Ticketing',
      description: 'Configurable digital entry forms with real-time category caps, medical waivers, and instant payment validation.',
      category: 'Finance',
      icon: 'UserCheck',
    },
    {
      id: 'participants',
      title: 'Participant / Athlete Management',
      description: 'Digital athlete passports with verified credentials, historical competition statistics, and age category verifications.',
      category: 'Operations',
      icon: 'Users',
    },
    {
      id: 'teams',
      title: 'Team & Club Management',
      description: 'Roster builder, team staff assignments, squad submission workflows, and jersey numbering management.',
      category: 'Competition',
      icon: 'Shield',
    },
    {
      id: 'scheduling',
      title: 'Fixtures & Smart Scheduling',
      description: 'Conflict-free court and pitch scheduling with rest-interval enforcement and automated umpire allocations.',
      category: 'Competition',
      icon: 'Clock',
    },
    {
      id: 'venues',
      title: 'Venue & Facility Management',
      description: 'Multi-court inventory, pitch lighting availability, hourly turf reservations, and facility access permissions.',
      category: 'Operations',
      icon: 'MapPin',
    },
    {
      id: 'payments',
      title: 'Unified Payment Processing',
      description: 'Automated entry fee collections, refund policies, split payouts, and automated tax invoicing.',
      category: 'Finance',
      icon: 'CreditCard',
    },
    {
      id: 'results',
      title: 'Live Results & Courtside Scores',
      description: 'Sub-second referee scoring console that publishes real-time score updates, point tables, and leaderboard computations.',
      category: 'Competition',
      icon: 'Activity',
    },
    {
      id: 'certificates',
      title: 'Digital Certificates & Accreditations',
      description: 'Automated batch generation of verifiable digital participation certificates, winner medals, and staff badges.',
      category: 'Engagement',
      icon: 'Award',
    },
    {
      id: 'communication',
      title: 'Participant & Fan Communication',
      description: 'Automated WhatsApp, SMS, and push notifications for fixture updates, delays, court assignments, and announcements.',
      category: 'Engagement',
      icon: 'MessageSquare',
    },
    {
      id: 'analytics',
      title: 'Reports & Operations Analytics',
      description: 'Actionable executive insights on athlete retention, category revenue, court utilization, and event operational efficiency.',
      category: 'Intelligence',
      icon: 'BarChart3',
    },
    {
      id: 'organization',
      title: 'Organization & Federation Management',
      description: 'Multi-tiered governance for state and national bodies to manage affiliated clubs, certified officials, and licensing.',
      category: 'Operations',
      icon: 'Building2',
    },
  ],
  architectureLayers: [
    { layer: 'Spectator & Participant Web', details: 'Fast-loading Next.js edge-rendered leaderboards, draw sheets, and registration portals.' },
    { layer: 'Official & Referee Mobile Apps', details: 'Offline-capable Flutter tablet/mobile scoring consoles for umpires and field officials.' },
    { layer: 'Fastify Event Stream Cluster', details: 'Asynchronous WebSocket pipelines delivering real-time scoring updates with sub-150ms latency.' },
    { layer: 'PostgreSQL Relational Core', details: 'Strict ACID transactions with JSONB extensions for dynamic sport rules, fixtures, and audit logs.' },
  ],
  targetAudiences: [
    { title: 'Sports Organizations', description: 'Governing bodies seeking digital consolidation across affiliated clubs.', icon: 'Building2' },
    { title: 'Sports Federations', description: 'National and regional associations needing standardized athlete databases.', icon: 'Award' },
    { title: 'Clubs', description: 'Competitive member clubs managing squads, equipment, and facility schedules.', icon: 'Shield' },
    { title: 'Academies', description: 'Training academies tracking student batches, attendance, and progress assessments.', icon: 'GraduationCap' },
    { title: 'Tournament Organizers', description: 'Commercial event promoters managing draws, live courts, and ticketed entries.', icon: 'Trophy' },
    { title: 'Leagues', description: 'Multi-week franchise competitions requiring real-time point tables and fixtures.', icon: 'Flame' },
    { title: 'Sports Event Companies', description: 'Agencies delivering end-to-end race and tournament experiences for corporate brands.', icon: 'Zap' },
    { title: 'Sports Facilities', description: 'Turf and arena operators optimizing hourly venue yield and court memberships.', icon: 'MapPin' },
  ],
};

export const fallbackServicesData: ServiceCategory[] = [
  {
    id: 'technology-services',
    title: 'Technology Services',
    tagline: 'From ideas to production-ready technology.',
    description: 'We work with organizations from idea → product → deployment → ongoing technology support, engineering high-reliability software that stands up to enterprise demands.',
    services: [
      {
        title: 'Web Application Development',
        description: 'Responsive, high-performance web applications built on Next.js and React with modern typography and component design systems.',
        tag: 'Full-Stack Web',
      },
      {
        title: 'Mobile Application Development',
        description: 'Single-codebase native mobile apps for iOS and Android powered by Flutter, ensuring synchronized logic and smooth 60fps performance.',
        tag: 'iOS & Android',
      },
      {
        title: 'SaaS Product Development',
        description: 'End-to-end multi-tenant SaaS engineering, including tenant isolation, usage metering, subscription engines, and automated onboarding.',
        tag: 'Multi-Tenant SaaS',
      },
      {
        title: 'Custom Software Development',
        description: 'Bespoke systems architected around distinct business workflows that cannot be satisfied by off-the-shelf software packages.',
        tag: 'Bespoke Systems',
      },
      {
        title: 'API & Backend Development',
        description: 'High-throughput, low-overhead microservices and modular monoliths developed with Fastify, Node.js, and PostgreSQL.',
        tag: 'High-Throughput APIs',
      },
      {
        title: 'Cloud & Deployment Solutions',
        description: 'Hardened cloud infrastructure, Docker containerization, Hostinger/AWS VPS setups, Nginx reverse proxying, and CI/CD pipelines.',
        tag: 'Cloud & DevOps',
      },
      {
        title: 'Product UI/UX Development',
        description: 'Clean, intentional design systems, design tokenization, wireframing, and design-to-code implementations built for high user clarity.',
        tag: 'Interface Engineering',
      },
      {
        title: 'Business Process Digitization',
        description: 'Translating fragmented spreadsheets, manual approvals, and physical logbooks into role-governed digital workspaces.',
        tag: 'Operational Automation',
      },
      {
        title: 'Payment & Third-Party Integrations',
        description: 'Secure payment gateway integrations (Razorpay, Stripe, escrow solutions), SMS/WhatsApp gateways, and external ERP connectors.',
        tag: 'Fintech & Integrations',
      },
    ],
  },
  {
    id: 'sports-technology-services',
    title: 'Sports Technology & Management Services',
    tagline: 'Technology for the sports ecosystem.',
    description: 'We combine software engineering with an intimate understanding of sports operations to help sports bodies and organizers digitize their entire ecosystem.',
    services: [
      {
        title: 'Sports Event Technology',
        description: 'On-ground and cloud software deployments that connect timing systems, digital display scoreboards, and registration booths.',
        tag: 'Event Infrastructure',
      },
      {
        title: 'Tournament Management Solutions',
        description: 'Custom bracket algorithms, referee assignment platforms, rule configurations, and instant tie-breaker computation systems.',
        tag: 'Tournament Systems',
      },
      {
        title: 'Sports Organization Digitization',
        description: 'Centralized administrative backends allowing federations and clubs to manage player credentials, state transfers, and licensing.',
        tag: 'Federation Platforms',
      },
      {
        title: 'Event Registration Systems',
        description: 'Custom entry portals handling high-volume participant traffic with instant payment receipts and category validation.',
        tag: 'Registration Engines',
      },
      {
        title: 'Competition Management',
        description: 'Matchday management consoles for technical officials, dispute tracking, disciplinary cards, and official match report filings.',
        tag: 'Match Operations',
      },
      {
        title: 'Sports Operations Technology',
        description: 'Operational software coordinating equipment rosters, ground staff, referee per diems, and volunteer shifts.',
        tag: 'Field Operations',
      },
      {
        title: 'Custom Sports Platforms',
        description: 'Tailored digital platforms for private sports academies, golf facilities, fitness challenges, and collegiate leagues.',
        tag: 'Tailored Sports Tech',
      },
      {
        title: 'Sports Data & Analytics',
        description: 'Telemetry ingestion, historical player performance statistics, attendance patterns, and facility revenue heatmaps.',
        tag: 'Sports Analytics',
      },
    ],
  },
];

export const fallbackClientProjects: ClientProject[] = [
  {
    slug: 'sports-os',
    title: 'Ethertrix Sports OS',
    type: 'Internal Product',
    category: 'Sports Technology',
    industry: 'Sports Technology & Operations',
    description: 'Flagship Sports Operating System designed to connect event, competition, academy, venue, and organizational workflows.',
    challenge: 'Organizers and clubs juggle 5+ separate tools for entry forms, draws, umpire scoring, and court bookings.',
    solution: 'One connected cloud platform unifying tournaments, biometric academy management, courtside scoring, and venue yield optimization.',
    capabilities: ['Tournament brackets', 'Courtside referee console', 'Venue slot engine', 'Athlete passports', 'Live fan WebSockets'],
    techStack: ['Next.js', 'Fastify', 'PostgreSQL', 'Flutter', 'WebSockets', 'Redis'],
    platforms: ['Web Administration', 'Mobile Apps (iOS & Android)', 'Referee Tablets'],
    featured: true,
  },
  {
    slug: 'matchmaking-applications',
    title: 'Intelligent Match Making Applications',
    type: 'Client Solution',
    category: 'SaaS',
    industry: 'Social Discovery & Matrimonial Technology',
    description: 'High-accuracy compatibility platforms with real-time encrypted messaging and verified identity onboarding across Web & Mobile.',
    challenge: 'Slow multi-attribute database querying and unverified profile churn during peak search hours.',
    solution: 'Sub-second faceted search engine, AI photo anti-spoofing, real-time socket chat, and regional subscription billing.',
    capabilities: ['Compatibility scoring', 'ID verification & liveness', 'Real-time encrypted chat', 'Privacy shields', 'Tiered subscription billing'],
    techStack: ['Next.js', 'Flutter', 'Fastify', 'PostgreSQL', 'Redis', 'WebSockets'],
    platforms: ['iOS Mobile App', 'Android Mobile App', 'Web Application', 'Admin Console'],
    featured: true,
  },
  {
    slug: 'fleet-management-application',
    title: 'Enterprise Fleet & Transit Operations Platform',
    type: 'Client Solution',
    category: 'Operations & Fleet',
    industry: 'Logistics, Transit & Transportation',
    description: 'Mission-critical fleet telemetry, multi-depot operations, driver trip manifests, and automated payroll computation.',
    challenge: 'Fragmented paper trip manifests across regional bus depots, untracked fuel variance, and delayed vehicle dispatch.',
    solution: 'Driver mobile app with offline OTP validation, live GPS telemetry console, and automated shift-to-payroll pipelines.',
    capabilities: ['Real-time vehicle GPS', 'Multi-depot scheduler', 'Driver OTP manifests', 'Automated payroll', 'Fuel & maintenance logs'],
    techStack: ['Next.js', 'Flutter', 'Fastify', 'PostgreSQL', 'Redis Geo', 'Docker'],
    platforms: ['Driver Mobile App', 'Depot Dispatch Console', 'Executive Web Dashboard'],
    featured: true,
  },
  {
    slug: 'legal-services-application',
    title: 'On-Demand Legal Services & Advocate Marketplace',
    type: 'Client Solution',
    category: 'Legal Tech',
    industry: 'Legal Services & Compliance',
    description: 'Digital marketplace connecting clients with verified advocates for consultations, notice generation, escrow transactions, and live tracking.',
    challenge: 'Opaque pricing, lack of verified advocate credentials, and delayed non-disclosure and notice drafting.',
    solution: 'Three-sided portal (Client, Advocate, Admin) with automated legal document generation, milestone escrow, and live courtroom tracking.',
    capabilities: ['Bar Council verification', 'Live consultation booking', 'Digital notice & contract generator', 'Milestone escrow wallet', 'Courtroom advocate GPS'],
    techStack: ['Next.js', 'Flutter Mobile', 'Fastify', 'PostgreSQL', 'Razorpay Escrow', 'AWS S3'],
    platforms: ['Client Mobile App', 'Advocate Mobile App', 'Web Administration & Compliance'],
    featured: true,
  },
  {
    slug: 'liberty-marathon-event-tech',
    title: 'Marathon & Mass Event Technology Platform',
    type: 'Client Solution',
    category: 'Sports Technology',
    industry: 'Athletics & Event Management',
    description: 'Mass-participation event engine managing participant registrations, race kit collections, route safety, and timing verification.',
    challenge: 'Handling sudden registration spikes, dynamic category quotas, and generating thousands of verified bibs.',
    solution: 'High-concurrency registration portal with instant payment verification, digital bib issuance, and race-day export management.',
    capabilities: ['Dynamic race categories', 'Instant payment receipts', 'Race kit QR check-in', 'Medical emergency records', 'Timing export integrations'],
    techStack: ['Next.js', 'Fastify', 'PostgreSQL', 'Razorpay', 'PM2', 'Nginx'],
    platforms: ['Participant Registration Web', 'Race Day Admin Console'],
    featured: false,
  },
];

export const fallbackHowWeWork: HowWeWorkStep[] = [
  {
    step: '01',
    title: 'Understand',
    description: 'Understand the business, operational or sports problem.',
    details: 'We dive deep into operational workflows, stakeholder pain points, regulatory constraints, and existing tool fragmentation before sketching any solution.',
  },
  {
    step: '02',
    title: 'Design',
    description: 'Design the product and user experience.',
    details: 'We model data entities, map user journeys, and construct accessible, high-clarity interfaces tailored for field staff, athletes, or executives.',
  },
  {
    step: '03',
    title: 'Build',
    description: 'Develop the technology using modern architecture.',
    details: 'We write clean, modular, type-safe code using Next.js, Flutter, Fastify, and PostgreSQL with robust unit tests and automated CI pipelines.',
  },
  {
    step: '04',
    title: 'Launch',
    description: 'Deploy and integrate the solution.',
    details: 'We execute zero-downtime deployment, configure reverse proxies, perform load testing, train team operators, and verify payment gateways.',
  },
  {
    step: '05',
    title: 'Evolve',
    description: 'Improve, scale and support the product.',
    details: 'Post-launch is where platforms prove their value. We monitor telemetry, optimize query plans, and evolve capabilities as the organization grows.',
  },
];

// Backward compatibility exports
export const fallbackProducts: Product[] = [
  {
    slug: 'sports-os',
    title: 'Ethertrix Sports OS',
    tagline: 'One Operating System for Modern Sports Organizations',
    category: 'Sports Technology',
    heroBadge: 'FLAGSHIP PRODUCT',
    description: fallbackSportsOS.description,
    highlights: fallbackSportsOS.capabilities.map((c) => c.title),
    modules: [
      {
        name: 'Tournament & Event Engine',
        summary: 'End-to-end tournament brackets, scheduling, and live scoring.',
        features: ['Automated fixtures', 'Referee consoles', 'Live leaderboards'],
      },
      {
        name: 'Registrations & Athlete Passports',
        summary: 'Digital registration, verified athlete profiles, and instant check-ins.',
        features: ['Category quota caps', 'Digital verification', 'ID cards & QR'],
      },
    ],
    architectureLayers: fallbackSportsOS.architectureLayers,
    techStack: ['Next.js', 'Fastify', 'PostgreSQL', 'Flutter', 'WebSockets', 'Redis'],
    platforms: ['Web Administration', 'Mobile Apps (iOS & Android)', 'Referee Tablet'],
    metrics: [
      { label: 'Ecosystem Nodes', value: '10' },
      { label: 'Core Capabilities', value: '13+' },
      { label: 'Real-time Latency', value: '< 150ms' },
    ],
    featured: true,
    liveUrl: '/products/sports-os',
  },
];

export const fallbackCaseStudies: CaseStudy[] = fallbackClientProjects.map((p, idx) => ({
  ...p,
  headline: p.title,
  summary: p.description,
  clientIndustry: p.industry,
  orderIndex: idx + 1,
  metrics: [
    { metric: 'Production', label: 'Status' },
    { metric: p.platforms.length.toString(), label: 'Platforms' },
  ],
}));

export const fallbackServices: ServiceOffering[] = [
  {
    slug: 'web-development',
    title: 'Web Application Development',
    shortDescription: 'High-performance web apps built on Next.js and React.',
    fullDescription: 'Responsive, high-performance web applications built on Next.js and React with modern typography.',
    capabilities: ['Next.js App Router', 'Tailwind CSS', 'Server-Side Rendering'],
    deliverables: ['Production Web App', 'Design System'],
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    icon: 'Layers',
  },
  {
    slug: 'mobile-development',
    title: 'Mobile Application Development',
    shortDescription: 'Single-codebase native mobile apps for iOS and Android powered by Flutter.',
    fullDescription: 'Single-codebase native mobile apps for iOS and Android powered by Flutter with 60fps performance.',
    capabilities: ['Flutter iOS & Android', 'Offline Synchronization', 'Push Notifications'],
    deliverables: ['iOS App Store Build', 'Google Play Store Build'],
    techStack: ['Flutter', 'Dart'],
    icon: 'Smartphone',
  },
  {
    slug: 'saas-development',
    title: 'SaaS Product Development',
    shortDescription: 'End-to-end multi-tenant SaaS engineering.',
    fullDescription: 'Multi-tenant architecture, tenant isolation, subscription billing, and automated onboarding.',
    capabilities: ['Multi-tenancy', 'Role-Based Access Control', 'Billing Engines'],
    deliverables: ['SaaS Platform', 'Admin Dashboard'],
    techStack: ['Next.js', 'Fastify', 'PostgreSQL', 'Redis'],
    icon: 'Database',
  },
];
