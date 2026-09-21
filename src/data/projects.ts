export interface ProjectGalleryItem {
  label: string;
  src: string;
  caption: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  category: string;
  categorySlug: string;
  tags: string[];
  status: 'coming-soon' | 'deployed' | 'beta' | 'active';
  image?: string;
  imageAlt: string;
  gallery?: ProjectGalleryItem[];
  /** External project website URL. When set the entire card links to this URL in a new tab. */
  externalUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'PRJ_01',
    title: 'VARUNA-X',
    subtitle: 'AI Flood Intelligence & Drainage Response System',
    description:
      'An AI-powered flood intelligence system combining IoT drain sensors, AI/ML prediction, GIS mapping, and digital-twin technology to help predict and respond to urban flooding.',
    category: 'AI & Machine Learning',
    categorySlug: 'ai-machine-learning',
    tags: ['LSTM / RF', 'ESP32 IoT', 'GIS Mapping', 'Digital Twin'],
    status: 'active',
    image: '/projects/varuna-x/varuna-dashboard.png',
    imageAlt: 'VARUNA-X AI flood intelligence and drainage response system',
    externalUrl: 'https://varuna-x-22174.web.app/',
    gallery: [
      {
        label: 'Live Dashboard',
        src: '/projects/varuna-x/varuna-dashboard.png',
        caption: 'Live Monitoring Dashboard showing flood risk metrics & affected areas',
      },
      {
        label: 'GIS Heatmap',
        src: '/projects/varuna-x/varuna-gis.png',
        caption: 'GIS map visualization showing sensor nodes & heat zones',
      },
      {
        label: 'Architecture',
        src: '/projects/varuna-x/varuna-architecture.png',
        caption: 'End-to-end system architecture from IoT sensing to citizen alerts',
      },
      {
        label: 'Hardware Setup',
        src: '/projects/varuna-x/varuna-hardware.png',
        caption: 'ESP32 microcontroller, sensors, and power regulation module',
      },
      {
        label: 'Drain Prototype',
        src: '/projects/varuna-x/varuna-prototype.png',
        caption: 'Physical drainage monitoring testbed simulation prototype',
      },
      {
        label: 'Sensor Module',
        src: '/projects/varuna-x/varuna-manhole-sensor.png',
        caption: 'Manhole cover fixed bracket and ultrasonic water sensor',
      },
    ],
  },
  {
    id: 'PRJ_02',
    title: 'UR NOTED',
    subtitle: 'Training Attendance Management System',
    description:
      'An enterprise-grade attendance platform with automated late-registration logic, role-based access control (RBAC), and one-click Excel & PDF export for training session records.',
    category: 'Software',
    categorySlug: 'software',
    tags: ['React', 'Node.js', 'RBAC', 'Excel Export', 'PDF Export'],
    status: 'active',
    image: '/projects/ur-noted/urnoted-dashboard.jpg',
    imageAlt: 'UR Noted training attendance management system dashboard',
    externalUrl: 'https://urnoted.syasans.com/',
  },
  {
    id: 'PRJ_03',
    title: 'SKILLCETAMOL',
    subtitle: 'Enterprise Exam Portal',
    description:
      'A secure, multi-role online exam platform with real-time countdowns, score analytics, student rank indexing, and separate dashboards for administrators, proctors, and students.',
    category: 'Software',
    categorySlug: 'software',
    tags: ['React', 'Multi-Role Auth', 'Score Analytics', 'Secure Exam'],
    status: 'active',
    image: '/projects/skillcetamol/skillcetamol-dashboard.jpg',
    imageAlt: 'SkillCetamol enterprise exam portal dashboard',
    externalUrl: 'https://skillcetamol.online/',
  },
];

export const projectCategories = [
  'All',
  'AI & Machine Learning',
  'Software',
  'IoT',
  'Automation',
  'Hardware',
  'Research',
];
