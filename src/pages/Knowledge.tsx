import React, { useState } from 'react';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { 
  BookOpen, 
  Layers, 
  Cpu, 
  Zap, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

const learningPaths = [
  {
    id: 'fundamentals',
    title: 'Observability Fundamentals',
    level: 'Beginner → Intermediate',
    duration: '4 Modules',
    badge: 'cyan',
    icon: BookOpen,
    description: 'Understand the core pillars of telemetry: Metrics, Logs, Distributed Tracing, and Continuous Profiling using open standards.',
    topics: [
      'The 4 Pillars of Telemetry (Logs, Metrics, Traces, Profiles)',
      'OpenTelemetry Architecture & Signal Types',
      'Pull vs. Push Metrics Collection Models',
      'W3C Trace Context & B3 Header Propagation'
    ]
  },
  {
    id: 'practices',
    title: 'Engineering Practices',
    level: 'Intermediate',
    duration: '5 Modules',
    badge: 'blue',
    icon: Cpu,
    description: 'Real-world instrumentation strategies, semantic conventions, alert noise reduction, and actionable SLO/SLI design.',
    topics: [
      'OpenTelemetry Semantic Conventions for Services',
      'SLO & Alerting Design without Fatigue',
      'Log Parsing & Structured JSON Pipelines',
      'Contextual Correlation: Linking Traces to Logs & Metrics'
    ]
  },
  {
    id: 'architecture',
    title: 'Architecture Thinking',
    level: 'Intermediate → Advanced',
    duration: '4 Modules',
    badge: 'violet',
    icon: Layers,
    description: 'Designing resilient, high-availability telemetry infrastructure with OpenTelemetry Collector gateways and long-term storage engines.',
    topics: [
      'OTel Collector Gateway Topology & Load Balancing',
      'High-Availability Metrics (Thanos & Cortex Architecture)',
      'Cost-Optimized Log Tiering (Vector + Loki + Object Storage)',
      'Tail-Based Sampling for Distributed Traces'
    ]
  },
  {
    id: 'advanced',
    title: 'Advanced Concepts',
    level: 'Advanced SRE',
    duration: '3 Modules',
    badge: 'emerald',
    icon: Zap,
    description: 'Zero-overhead eBPF kernel telemetry, continuous profiling with Pyroscope, and managing metric cardinality spikes at scale.',
    topics: [
      'eBPF-Based Telemetry without Application Code Changes',
      'Taming High Cardinality in TSDBs',
      'Continuous CPU & Memory Profiling in Production',
      'Data Scrubbing & PII Redaction at the Collector Layer'
    ]
  }
];

const practicalResources = [
  {
    category: 'Playbook',
    title: 'Prometheus High Cardinality Triage Playbook',
    type: 'Operational Runbook',
    badge: 'violet',
    summary: 'Step-by-step diagnostic workflow for identifying memory spikes, finding churned metric labels, and dropping wasteful metrics.',
    readTime: '8 min read'
  },
  {
    category: 'Guide',
    title: 'Production OpenTelemetry Collector Deployment Guide',
    type: 'Architecture Pattern',
    badge: 'cyan',
    summary: 'A battle-tested reference specification for deploying daemonset agents and stateless collector gateways on Kubernetes.',
    readTime: '12 min read'
  },
  {
    category: 'Reference Material',
    title: 'PromQL & LogQL Essential Query Cheatsheet',
    type: 'Quick Reference',
    badge: 'blue',
    summary: 'Practical query examples for calculating error rates, 99th percentile latency histograms, and log rate velocity.',
    readTime: '5 min read'
  },
  {
    category: 'Community Notes',
    title: 'W3C Distributed Trace Context Propagation Patterns',
    type: 'Engineering Notes',
    badge: 'emerald',
    summary: 'Implementation details for preserving trace headers across asynchronous message queues (Kafka, RabbitMQ) and gRPC calls.',
    readTime: '10 min read'
  }
];

export const Knowledge: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'paths' | 'resources'>('paths');

  return (
    <div className="pt-32 pb-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 inset-x-0 h-[400px] bg-radial-gradient opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Badge variant="cyan" size="md" className="mb-4">
            Knowledge Platform
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Observability Knowledge Hub
          </h1>
          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            Vendor-neutral learning pathways, architectural reference specifications, and real-world incident triage runbooks designed by practitioners.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-full bg-surface-card border border-white/10">
            <button
              onClick={() => setActiveTab('paths')}
              className={`px-6 py-2.5 text-sm font-medium rounded-full transition-all ${
                activeTab === 'paths'
                  ? 'bg-white text-gray-950 shadow-md font-semibold'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Learning Paths
            </button>
            <button
              onClick={() => setActiveTab('resources')}
              className={`px-6 py-2.5 text-sm font-medium rounded-full transition-all ${
                activeTab === 'resources'
                  ? 'bg-white text-gray-950 shadow-md font-semibold'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Practical Resources & Playbooks
            </button>
          </div>
        </div>

        {/* TAB 1: LEARNING PATHS */}
        {activeTab === 'paths' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {learningPaths.map((path) => {
              const Icon = path.icon;
              return (
                <Card key={path.id} hoverEffect glow={path.badge as any} className="flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-10 h-10 rounded-lg bg-brand-${path.badge}/10 border border-brand-${path.badge}/20 flex items-center justify-center text-brand-${path.badge}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <Badge variant={path.badge as any} size="sm">
                        {path.level}
                      </Badge>
                    </div>

                    <h3 className="text-2xl font-bold text-white">{path.title}</h3>
                    <p className="mt-3 text-sm text-gray-300 leading-relaxed">
                      {path.description}
                    </p>

                    <div className="mt-6 pt-4 border-t border-white/10">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold mb-3">
                        Curriculum Highlights
                      </h4>
                      <ul className="space-y-2 text-xs text-gray-300 font-mono">
                        {path.topics.map((topic, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className={`w-3.5 h-3.5 mt-0.5 text-brand-${path.badge} shrink-0`} />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs font-mono text-gray-500">{path.duration}</span>
                    <Button variant="outline" size="sm" icon={<ArrowRight className="w-4 h-4" />}>
                      Explore Path
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        )}

        {/* TAB 2: PRACTICAL RESOURCES */}
        {activeTab === 'resources' && (
          <div className="space-y-6 max-w-4xl mx-auto">
            {practicalResources.map((res, index) => (
              <Card key={index} hoverEffect glow={res.badge as any} className="p-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-3">
                  <div className="flex items-center gap-2">
                    <Badge variant={res.badge as any} size="sm">
                      {res.category}
                    </Badge>
                    <span className="text-xs font-mono text-gray-400">{res.type}</span>
                  </div>
                  <span className="text-xs font-mono text-gray-500">{res.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-white hover:text-brand-cyan transition-colors cursor-pointer">
                  {res.title}
                </h3>
                <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                  {res.summary}
                </p>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs font-mono text-gray-500 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-emerald" /> Verified Foundation Resource
                  </span>
                  <Button variant="ghost" size="sm" className="text-brand-cyan p-0 hover:bg-transparent">
                    Read Resource &rarr;
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Contribution Footer */}
        <div className="mt-16 text-center text-xs text-gray-400 font-mono">
          Knowledge base guidelines: All documentation strictly complies with vendor-neutral open telemetry standards.
        </div>

      </div>
    </div>
  );
};
