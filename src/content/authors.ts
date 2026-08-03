export interface Author {
  id: string;
  name: string;
  githubUsername: string;
  role: string;
  bio: string;
  githubUrl: string;
  linkedinUrl?: string;
  twitterUrl?: string;
}

export const authorsRegistry: Record<string, Author> = {
  vgeriti: {
    id: 'vgeriti',
    name: 'Venkatesh Geriti',
    githubUsername: 'vgeriti',
    role: 'Principal Observability Architect',
    bio: 'Building open-source telemetry collectors, log processors, and monitoring automation tools for the o11yworks ecosystem.',
    githubUrl: 'https://github.com/vgeriti',
    linkedinUrl: 'https://linkedin.com/in/vgeriti',
    twitterUrl: 'https://x.com/vgeriti',
  },
  'ben-carter': {
    id: 'ben-carter',
    name: 'Ben Carter',
    githubUsername: 'bcarter-o11y',
    role: 'Senior SRE & eBPF Specialist',
    bio: 'Focusing on eBPF kernel tracing, Prometheus metric cardinality reduction, and high-volume log ingestion.',
    githubUrl: 'https://github.com/o11yworks',
  },
  'sarah-chen': {
    id: 'sarah-chen',
    name: 'Sarah Chen',
    githubUsername: 'schen-telemetry',
    role: 'Distributed Tracing Engineer',
    bio: 'OpenTelemetry collector pipeline optimization and distributed tracing instrumentation.',
    githubUrl: 'https://github.com/o11yworks',
  },
};

export const getAuthorById = (id: string): Author => {
  const normalizedId = id.toLowerCase().replace(/\s+/g, '-');
  return (
    authorsRegistry[normalizedId] ||
    authorsRegistry['vgeriti'] || {
      id: 'vgeriti',
      name: 'Venkatesh Geriti',
      githubUsername: 'vgeriti',
      role: 'Principal Observability Architect',
      bio: 'Building open-source telemetry collectors, log processors, and monitoring automation tools.',
      githubUrl: 'https://github.com/vgeriti',
    }
  );
};
