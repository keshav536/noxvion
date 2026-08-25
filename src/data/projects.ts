export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  categorySlug: string;
  tags: string[];
  status: 'coming-soon' | 'deployed' | 'beta' | 'active';
  imageAlt: string;
}

// No real project data has been supplied.
// Projects will display as "Coming Soon" placeholders per the content spec.
export const projects: Project[] = [
  {
    id: 'PRJ_01',
    title: 'Project Title — Coming Soon',
    description: 'An AI & Machine Learning project currently in development. Details will be published upon completion.',
    category: 'AI & Machine Learning',
    categorySlug: 'ai-machine-learning',
    tags: [],
    status: 'coming-soon',
    imageAlt: 'AI & Machine Learning project placeholder',
  },
  {
    id: 'PRJ_02',
    title: 'Project Title — Coming Soon',
    description: 'An IoT solutions project currently in development. Details will be published upon completion.',
    category: 'IoT',
    categorySlug: 'iot',
    tags: [],
    status: 'coming-soon',
    imageAlt: 'IoT project placeholder',
  },
  {
    id: 'PRJ_03',
    title: 'Project Title — Coming Soon',
    description: 'A hardware engineering project currently in development. Details will be published upon completion.',
    category: 'Hardware',
    categorySlug: 'hardware',
    tags: [],
    status: 'coming-soon',
    imageAlt: 'Hardware project placeholder',
  },
  {
    id: 'PRJ_04',
    title: 'Project Title — Coming Soon',
    description: 'An automation project currently in development. Details will be published upon completion.',
    category: 'Automation',
    categorySlug: 'automation',
    tags: [],
    status: 'coming-soon',
    imageAlt: 'Automation project placeholder',
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
