export interface TimelineItem {
  id: string;
  period: string;
  title: string;
  description: string;
  status: 'completed' | 'current' | 'upcoming';
}

export const timeline: TimelineItem[] = [
  {
    id: 'T-01',
    period: '2024 Q3',
    title: 'Formal Incorporation',
    description:
      'NOXVION incorporates as a student-led high-tech enterprise. Secured local grant funding to set up permanent workspace.',
    status: 'completed',
  },
  {
    id: 'T-02',
    period: '2025 Q1',
    title: 'Foundation & Research',
    description:
      'Establishment of core R&D protocols and initial technology stack. Milestone details to be confirmed.',
    status: 'current',
  },
  {
    id: 'T-03',
    period: '2025 Q4',
    title: 'Product Development Phase',
    description:
      'Expansion of engineering capabilities and solution delivery. Milestone details to be confirmed.',
    status: 'upcoming',
  },
  {
    id: 'T-04',
    period: '2026 Q2',
    title: 'Scale & Integration',
    description:
      'Scaling operations and cross-domain integrations. Milestone details to be confirmed.',
    status: 'upcoming',
  },
];
