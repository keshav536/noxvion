export interface PrimaryService {
  id: string;
  slug: string;
  category: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  bullets: string[];
  deliverables: string[];
  technologies: string[];
  ctaText: string;
}

export interface SecondaryService {
  id: string;
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  bullets: string[];
  iconName: string;
  pricingNote?: string;
  ctaText: string;
  ctaLink: string;
}

export interface SaaSProduct {
  id: string;
  name: string;
  tag: 'Coming Soon' | 'Explore';
  tagVariant: 'blue' | 'amber' | 'emerald';
  valueProp: string;
  iconName: string;
  highlights: string[];
  learnMoreText: string;
}

export interface PricingPackage {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  popular?: boolean;
  pricingLabel: string;
  inclusions: string[];
  idealFor: string;
  ctaText: string;
  ctaLink: string;
}

export const primaryServices: PrimaryService[] = [
  {
    id: 'SRV-01',
    slug: 'website-development',
    category: 'WEB EXPERIENCES',
    title: 'Website Development',
    shortDesc: 'High-performing, responsive web platforms built to convert visitors into loyal clients.',
    fullDesc:
      'We design and engineer bespoke web platforms tailored to your business goals. From high-converting corporate sites to complex booking engines and institutional portals, every build is optimized for blistering speed, clean search visibility, and intuitive user experiences.',
    iconName: 'Globe',
    bullets: [
      'Modern corporate & business websites crafted for commanding brand presence',
      'High-conversion e-commerce & friction-free customer booking systems',
      'Purpose-built digital platforms for institutions, schools, and non-profits',
      'SEO-first architecture, sub-second page loads, and dedicated maintenance',
    ],
    deliverables: [
      'Custom Responsive Glassmorphism Design',
      'Mobile-First Fluid Layouts & Micro-Interactions',
      'Full SEO Optimization & Core Web Vitals < 1s',
      'Headless CMS or Dynamic Admin Controls',
      'Security Hardening & Continuous Backups',
    ],
    technologies: ['React', 'TypeScript', 'Next.js', 'TailwindCSS', 'Node.js', 'Vite'],
    ctaText: 'Start Your Website Build',
  },
  {
    id: 'SRV-02',
    slug: 'ai-solutions',
    category: 'INTELLIGENT SYSTEMS',
    title: 'AI Solutions',
    shortDesc: 'Intelligent agents and custom AI models that automate decisions and elevate client engagement 24/7.',
    fullDesc:
      'Deploy intelligent AI capabilities that directly drive revenue and eliminate support backlogs. We build conversational WhatsApp assistants, automated lead qualification pipelines, and enterprise-grade RAG assistants trained exclusively on your private company data.',
    iconName: 'Bot',
    bullets: [
      '24/7 AI-driven WhatsApp & website assistants that resolve customer queries instantly',
      'Automated lead qualification engines that route high-value prospects to your team',
      'Proprietary RAG knowledge assistants trained privately on your company documentation',
      'Autonomous AI agents engineered to execute repetitive multi-step digital tasks',
    ],
    deliverables: [
      'Custom LLM Fine-Tuning & Prompt Architecture',
      'Private Vector Database & Document Embeddings',
      'Multi-Channel WhatsApp & Web Chatbot Widgets',
      'CRM Integration & Automated Lead Dispatch',
      'Enterprise Privacy & Zero Data Leakage Baseline',
    ],
    technologies: ['OpenAI', 'LangChain', 'FastAPI', 'Python', 'Pinecone', 'WhatsApp Cloud API'],
    ctaText: 'Deploy AI Solutions',
  },
  {
    id: 'SRV-03',
    slug: 'business-automation',
    category: 'WORKFLOW ACCELERATION',
    title: 'Business Automation',
    shortDesc: 'Seamless end-to-end workflow orchestration that eliminates manual friction and scales your output.',
    fullDesc:
      'We audit and automate your operational bottlenecks. Connect your lead sources, CRM, communications, quotation generation, and accounting into a cohesive, hands-off pipeline that operates flawlessly around the clock.',
    iconName: 'Workflow',
    bullets: [
      'We automate your entire client journey — from first contact to final invoice',
      'Automated WhatsApp, SMS, and email sequences that keep prospects engaged',
      'Unified CRM pipelines and automated appointment scheduling that never miss a lead',
      'Real-time executive dashboards delivering live operational clarity',
    ],
    deliverables: [
      'Lead-to-Invoice Automated Process Pipeline',
      'Omnichannel Notification & Follow-Up Triggers',
      'Calendar & Booking Synchronization',
      'Automated PDF Quotation & Invoice Generation',
      'Failsafe Error Monitoring & Slack/Email Alerts',
    ],
    technologies: ['Node.js', 'Zapier', 'Make', 'Webhooks', 'PostgreSQL', 'Redis'],
    ctaText: 'Automate Your Workflows',
  },
  {
    id: 'SRV-04',
    slug: 'custom-software-development',
    category: 'ENTERPRISE ARCHITECTURE',
    title: 'Custom Software Development',
    shortDesc: 'Tailor-made enterprise software and operational backbones built to handle your unique complexity.',
    fullDesc:
      'Off-the-shelf software often forces you to compromise your processes. We architect bespoke ERPs, inventory management engines, clinical management portals, and institutional software engineered precisely around how your team operates.',
    iconName: 'Layers',
    bullets: [
      'Custom ERP, CRM, and real-time inventory systems built around your exact operations',
      'Modern HR, payroll, and workforce management platforms that save administrative hours',
      'Specialized management platforms engineered for educational institutions and healthcare',
      'Enterprise-grade security, role-based access control, and scalable cloud databases',
    ],
    deliverables: [
      'Multi-Tenant SaaS / Enterprise Architecture',
      'Granular Role-Based Access Control (RBAC)',
      'Custom Business Logic & Real-Time Sync',
      'Comprehensive Data Audit Logs & Compliance',
      'High-Concurrency Cloud Database Deployment',
    ],
    technologies: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Docker', 'Prisma'],
    ctaText: 'Architect Custom Software',
  },
  {
    id: 'SRV-05',
    slug: 'mobile-app-development',
    category: 'MOBILE PLATFORMS',
    title: 'Mobile App Development',
    shortDesc: 'Fluid native and Flutter cross-platform mobile apps that customers love to use every day.',
    fullDesc:
      'From dynamic on-demand booking applications to enterprise internal field tools, we design and build high-performance mobile apps across iOS and Android with smooth gestures, offline reliability, and instant push updates.',
    iconName: 'Smartphone',
    bullets: [
      'High-performance iOS and Android applications built with a single Flutter codebase',
      'Intuitive consumer apps for on-demand booking, healthcare, education, and delivery',
      'Secure, offline-capable enterprise mobile tools for field staff and operations',
      'Seamless push notifications, biometric auth, and real-time backend synchronization',
    ],
    deliverables: [
      'Cross-Platform iOS & Android Deployments',
      'Native-Quality 60fps Animations & Interactions',
      'Secure Biometric Authentication (FaceID / Fingerprint)',
      'Offline Storage & Local Database Synchronization',
      'App Store & Google Play Launch Management',
    ],
    technologies: ['Flutter', 'Dart', 'Firebase', 'REST / GraphQL', 'App Store Connect'],
    ctaText: 'Build Your Mobile App',
  },
  {
    id: 'SRV-06',
    slug: 'ui-ux-design',
    category: 'PRODUCT DESIGN',
    title: 'UI/UX Design',
    shortDesc: 'Visually magnetic, user-centric interfaces that turn complex products into intuitive digital journeys.',
    fullDesc:
      'Great design is not just aesthetics — it is your competitive edge. We conduct UX research, map user flows, build high-fidelity interactive Figma prototypes, and establish scalable design systems that make your digital product feel effortless.',
    iconName: 'Palette',
    bullets: [
      'High-converting website and web application designs backed by user psychology',
      'Cohesive design systems and reusable UI component libraries for rapid scaling',
      'Interactive clickable Figma prototypes to test and validate ideas before writing code',
      'UX audits and user journey optimization that boost retention and product adoption',
    ],
    deliverables: [
      'Complete High-Fidelity UI/UX Screen Architecture',
      'Interactive Clickable Figma Prototype',
      'Design Token System (Typography, Spacing, Color)',
      'Responsive Mobile, Tablet & Desktop Breakpoints',
      'Developer-Ready Hand-Off Specification',
    ],
    technologies: ['Figma', 'FigJam', 'Tokens Studio', 'Prototyping', 'UserTesting'],
    ctaText: 'Craft Your Interface',
  },
];

export const secondaryServices: SecondaryService[] = [
  {
    id: 'SEC-01',
    slug: 'seo-digital-marketing',
    category: 'SEARCH & PERFORMANCE',
    title: 'SEO & Digital Marketing',
    subtitle: 'Dominate search rankings and capture high-intent buyers',
    shortDesc:
      'Comprehensive technical, on-page, and local SEO strategies that consistently position your brand at the top of Google search results.',
    bullets: [
      'Strategic Google Business Profile & local map pack domination',
      'Deep high-intent keyword discovery & competitive content mapping',
      'Core Web Vitals speed tuning & technical architecture audits',
      'Transparent monthly growth reports tracking rankings, traffic, and leads',
    ],
    iconName: 'Search',
    pricingNote: 'Custom Pricing / Retainers',
    ctaText: 'Get a Quote',
    ctaLink: '/contact?type=seo',
  },
  {
    id: 'SEC-02',
    slug: 'social-media-content',
    category: 'BRAND VISIBILITY',
    title: 'Social Media & Content',
    subtitle: 'Build an authoritative brand that commands attention',
    shortDesc:
      'End-to-end creative management across Instagram, LinkedIn, Facebook, and YouTube that turns followers into loyal brand advocates.',
    bullets: [
      'High-production reels, motion graphics, and premium branded carousel posters',
      'Data-backed monthly content calendars aligned with business campaign cycles',
      'Platform-tailored copywriting and proactive audience community engagement',
      'Analytics tracking follower growth, engagement velocity, and conversion attribution',
    ],
    iconName: 'Share2',
    pricingNote: 'Monthly Retainers Available',
    ctaText: 'Grow Your Brand',
    ctaLink: '/contact?type=social-media',
  },
  {
    id: 'SEC-03',
    slug: 'cloud-deployment',
    category: 'INFRASTRUCTURE & DEVOPS',
    title: 'Cloud & Deployment',
    subtitle: 'Bulletproof uptime, automated deployments, and continuous security',
    shortDesc:
      'Enterprise cloud infrastructure and DevOps pipelines that keep your digital assets lightning fast, always online, and automatically backed up.',
    bullets: [
      'Resilient cloud hosting & multi-region database setup with zero downtime',
      'Complete domain, SSL certificates, and DNS optimization',
      'Automated CI/CD deployment pipelines for rapid, safe feature releases',
      '24/7 server health monitoring, DDoS shielding, and automated daily backups',
    ],
    iconName: 'Cloud',
    pricingNote: 'Setup & Managed Retainers',
    ctaText: 'Secure Your Cloud',
    ctaLink: '/contact?type=cloud',
  },
  {
    id: 'SEC-04',
    slug: 'iot-smart-systems',
    category: 'HARDWARE & TELEMETRY',
    title: 'IoT & Smart Systems',
    subtitle: 'Bridge physical operations with real-time digital intelligence',
    shortDesc:
      'Interconnected smart sensors and edge hardware that monitor industrial equipment, facilities, and critical assets in real time.',
    bullets: [
      'Custom sensor hardware integration and low-power telemetry transmission',
      'Continuous environmental and industrial equipment health monitoring',
      'Instant multi-channel alert thresholds via SMS, WhatsApp, and email',
      'Centralized cloud control dashboards for synchronized multi-site monitoring',
    ],
    iconName: 'Radio',
    pricingNote: 'Prototype & Production Scoping',
    ctaText: 'Connect Your Hardware',
    ctaLink: '/contact?type=iot',
  },
  {
    id: 'SEC-05',
    slug: 'ai-iot-intelligent-edge',
    category: 'INTELLIGENT EDGE',
    title: 'AI + IoT Solutions',
    subtitle: 'Predictive sensor pipelines with automated real-world action',
    shortDesc:
      'Combining physical edge sensors with machine learning pipelines to detect anomalies, forecast incidents, and trigger automated preventive measures.',
    bullets: [
      'End-to-end sensor-to-dashboard pipelines with predictive alert models',
      'Automated flood defense, water telemetry, and municipal mitigation systems',
      'Industrial factory equipment monitoring with predictive failure forecasting',
      'Smart agriculture sensing for automated irrigation and micro-climate control',
    ],
    iconName: 'Sparkles',
    pricingNote: 'Enterprise R&D & Deployment',
    ctaText: 'Explore AI + IoT',
    ctaLink: '/contact?type=ai-iot',
  },
];

export const saasProducts: SaaSProduct[] = [
  {
    id: 'PROD-01',
    name: 'Noxvion CRM',
    tag: 'Coming Soon',
    tagVariant: 'amber',
    valueProp: 'Unified sales pipeline, lead tracking, and omnichannel deal management.',
    iconName: 'Users',
    highlights: ['Omnichannel deal stages', 'WhatsApp conversation sync', 'Automated quote triggers'],
    learnMoreText: 'Join Waitlist',
  },
  {
    id: 'PROD-02',
    name: 'Noxvion Attendance',
    tag: 'Explore',
    tagVariant: 'emerald',
    valueProp: 'Contactless, geofenced staff attendance & automated payroll-ready compliance.',
    iconName: 'CheckCircle2',
    highlights: ['Geofenced mobile check-in', 'One-click payroll export', 'Shift roster scheduling'],
    learnMoreText: 'View Details',
  },
  {
    id: 'PROD-03',
    name: 'Noxvion Support',
    tag: 'Coming Soon',
    tagVariant: 'amber',
    valueProp: 'AI-first multi-channel ticketing desk that resolves customer inquiries in seconds.',
    iconName: 'Headphones',
    highlights: ['Autonomous AI ticket resolution', 'Email & WhatsApp unification', 'SLA breach alerts'],
    learnMoreText: 'Join Waitlist',
  },
  {
    id: 'PROD-04',
    name: 'Noxvion Forms',
    tag: 'Coming Soon',
    tagVariant: 'amber',
    valueProp: 'Smart conversational form builder with logic branching and instant webhook sync.',
    iconName: 'FileText',
    highlights: ['Dynamic conditional logic', 'Instant webhook integrations', 'High-conversion UI themes'],
    learnMoreText: 'Join Waitlist',
  },
  {
    id: 'PROD-05',
    name: 'Noxvion Invoice',
    tag: 'Coming Soon',
    tagVariant: 'amber',
    valueProp: 'Effortless GST-compliant invoicing, automated payment reminders, and revenue tracking.',
    iconName: 'Receipt',
    highlights: ['One-click GST tax invoices', 'Automated WhatsApp payment nudges', 'Cash flow analytics'],
    learnMoreText: 'Join Waitlist',
  },
];

export const websitePackages: PricingPackage[] = [
  {
    id: 'PKG-01',
    name: 'Starter',
    badge: 'RAPID LAUNCH',
    tagline: 'Ideal for local businesses, portfolios, and founders establishing a polished online presence.',
    pricingLabel: 'Fixed Scope / Milestone-Based',
    inclusions: [
      'Custom 3–5 Page Responsive Glassmorphism Design',
      'Mobile-Optimized & Lightning-Fast Loading Speed',
      'Contact & Lead Capture Form Integration',
      'Basic On-Page SEO & Analytics Tracking',
    ],
    idealFor: 'Small businesses, consultants, personal brands, and high-impact landing pages.',
    ctaText: 'Choose Starter',
    ctaLink: '/contact?type=web-starter',
  },
  {
    id: 'PKG-02',
    name: 'Business',
    badge: 'MOST POPULAR',
    popular: true,
    tagline: 'Engineered for scaling companies requiring dynamic content, lead automation, and top-tier SEO.',
    pricingLabel: 'Turnkey Complete Solution',
    inclusions: [
      'Up to 10 Custom Dynamic Pages & CMS Integration',
      'Lead Automation & WhatsApp / Email Auto-Response',
      'Interactive UI Animations & Modern Design System',
      'Advanced Local & On-Page SEO + Speed Optimization',
    ],
    idealFor: 'Growing commercial firms, clinics, agencies, and dynamic service providers.',
    ctaText: 'Choose Business',
    ctaLink: '/contact?type=web-business',
  },
  {
    id: 'PKG-03',
    name: 'Advanced',
    badge: 'ENTERPRISE SCALE',
    tagline: 'Built for enterprise scale, custom web applications, SaaS platforms, or high-volume e-commerce.',
    pricingLabel: 'Tailored Enterprise Scope',
    inclusions: [
      'Full-Stack Architecture, Custom APIs & Database Setup',
      'Custom E-Commerce or Booking & Payment Gateways',
      'Role-Based Portals, Dashboards & Custom Integrations',
      'Dedicated CI/CD, Enterprise Security & Priority Support',
    ],
    idealFor: 'SaaS startups, educational institutions, hospital networks, and complex platforms.',
    ctaText: 'Contact for Advanced',
    ctaLink: '/contact?type=web-advanced',
  },
];
