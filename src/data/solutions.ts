export interface Solution {
  id: string;
  slug: string;
  label: string;
  title: string;
  description: string;
  shortDesc: string;
  icon: string;
  capabilities: string[];
  tools: string[];
  tags?: string[];
  cta: string;
}

export const solutions: Solution[] = [
  {
    id: 'SOL-01',
    slug: 'ai-machine-learning',
    label: 'AI & Machine Learning',
    title: 'AI & Machine Learning',
    description:
      'Predictive modeling and automated decision-making engines deployed at scale. Transforming raw data into actionable, strategic intelligence.',
    shortDesc: 'Predictive models, computer vision, and NLP architectures for specialized industrial and analytical applications.',
    icon: 'Brain',
    capabilities: [
      'Custom neural network design & training',
      'Computer vision & object detection models',
      'Predictive analytics & operational forecasting',
      'Intelligent agent workflow modeling',
    ],
    tools: ['PyTorch', 'TensorFlow', 'FastAPI', 'Python', 'OpenCV'],
    tags: ['PREDICTIVE', 'SCALABLE'],
    cta: 'Request Solution Integration',
  },
  {
    id: 'SOL-02',
    slug: 'web-software',
    label: 'Web & Software Development',
    title: 'Web & Software Development',
    description:
      'High-performance, mission-critical applications. We build secure, distributed systems designed for uncompromising reliability and seamless user experience.',
    shortDesc: 'High-performance, scalable frontend architectures and precision-engineered frontend interfaces for critical data management.',
    icon: 'Code2',
    capabilities: [
      'Robust multi-tenant SaaS structures',
      'High-performance web applications',
      'Interactive administrative dashboard feeds',
      'Custom web architectures & APIs',
    ],
    tools: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Vite'],
    tags: ['FULL-STACK', 'SCALABLE'],
    cta: 'Request Solution Integration',
  },
  {
    id: 'SOL-03',
    slug: 'iot',
    label: 'IoT Solutions',
    title: 'IoT Solutions',
    description:
      'Interconnected hardware networks. Real-time telemetry, remote diagnostics, and synchronized control systems for industrial applications.',
    shortDesc: 'Secure sensor networks, edge computing deployment, and real-time telemetry processing systems.',
    icon: 'Wifi',
    capabilities: [
      'Hardware circuit prototyping & design',
      'Edge telemetry parsing & processing',
      'Real-time streaming pipeline configurations',
      'Distributed device mesh security protocols',
    ],
    tools: ['ESP32', 'C++', 'FreeRTOS', 'MQTT', 'InfluxDB'],
    cta: 'Request Solution Integration',
  },
  {
    id: 'SOL-04',
    slug: 'automation',
    label: 'Automation Solutions',
    title: 'Automation Solutions',
    description:
      'Workflow orchestration and robotic process automation. Eliminating redundancies and optimizing operational throughput with precision.',
    shortDesc: 'Robotic process controls, automated QA protocols, and hardware-in-the-loop testing environments.',
    icon: 'Settings2',
    capabilities: [
      'Multi-app workflow orchestrations',
      'Failsafe API integrations & middleware',
      'Scheduled database synchronization tasks',
      'Event-driven action networks',
    ],
    tools: ['Node.js', 'Redis', 'Docker', 'PostgreSQL', 'Bash'],
    cta: 'Request Solution Integration',
  },
  {
    id: 'SOL-05',
    slug: 'research-product-rnd',
    label: 'Research & Product R&D',
    title: 'Research & Product R&D',
    description:
      'Advanced prototyping and theoretical frameworks applied. Pushing the boundaries of current technological capabilities for future-proof assets.',
    shortDesc: 'Exploratory engineering for novel hardware paradigms and next-generation algorithmic efficiency.',
    icon: 'FlaskConical',
    capabilities: [
      'Rapid physical prototyping & layouts',
      'Academic algorithm validations',
      'Proof-of-concept feasibility reporting',
      'Detailed engineering layout schematics',
    ],
    tools: ['ROS2', 'Arduino', 'Python', 'CAD Modelling', 'Matlab'],
    cta: 'Request Solution Integration',
  },
];
