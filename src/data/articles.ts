export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  categorySlug: string;
  date: string;
  status: 'published' | 'coming-soon';
  featured?: boolean;
  imageAlt: string;
}

// No real article data has been supplied.
// Articles will display as "Coming Soon" per the content spec.
export const articles: Article[] = [
  {
    id: 'FEAT-01',
    title: 'Coming Soon',
    excerpt:
      'A major technological insight is currently undergoing final review. Stay tuned for detailed research notes and engineering updates.',
    category: 'Featured Insight',
    categorySlug: 'all',
    date: 'TBD',
    status: 'coming-soon',
    featured: true,
    imageAlt: 'Featured article placeholder',
  },
];

export const articleCategories = [
  { label: 'All', slug: 'all' },
  { label: 'Technology Insights', slug: 'technology-insights' },
  { label: 'Research Notes', slug: 'research-notes' },
  { label: 'Engineering Updates', slug: 'engineering-updates' },
  { label: 'Company Updates', slug: 'company-updates' },
  { label: 'Technology Breakthroughs', slug: 'technology-breakthroughs' },
];
