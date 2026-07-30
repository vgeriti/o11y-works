import React from 'react';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { 
  Target, 
  Eye, 
  Check,
  ArrowRight
} from 'lucide-react';

const corePrinciples = [
  {
    title: 'Open',
    badge: 'cyan',
    description: 'We believe observability specifications, architecture patterns, and developer utilities must be open-source and freely accessible to everyone.'
  },
  {
    title: 'Practical',
    badge: 'blue',
    description: 'We focus on concrete, operational knowledge—executable configurations, query guides, and verified incident runbooks over theoretical marketing hype.'
  },
  {
    title: 'Community-Driven',
    badge: 'violet',
    description: 'o11y.works is shaped by practitioners. Initiatives, tools, and research paper topics are incubated through open collaboration.'
  },
  {
    title: 'Vendor-Neutral',
    badge: 'emerald',
    description: 'We maintain absolute independence from any single commercial SaaS provider, focusing strictly on open standards like OpenTelemetry, Prometheus, and eBPF.'
  },
  {
    title: 'Engineering-Focused',
    badge: 'cyan',
    description: 'Every resource is created with developer experience in mind: calm interfaces, sharp typography, fast performance, and zero sales jargon.'
  }
];

export const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24 relative overflow-hidden">
      {/* Ambient background radial glow */}
      <div className="absolute top-0 inset-x-0 h-[400px] bg-radial-gradient opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="cyan" size="md" className="mb-4">
            About the Foundation
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            The Story of o11y.works
          </h1>
          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            Building the premier vendor-neutral ecosystem where observability practitioners come together to learn, build open tools, and shape the future of telemetry.
          </p>
        </div>

        {/* MISSION & VISION GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          
          {/* Mission */}
          <Card hoverEffect glow="cyan" className="p-8">
            <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan mb-6">
              <Target className="w-6 h-6" />
            </div>
            <Badge variant="cyan" size="sm" className="mb-3">
              Our Mission
            </Badge>
            <h2 className="text-2xl font-bold text-white">Make Observability Practical & Open</h2>
            <p className="mt-4 text-gray-300 text-sm leading-relaxed">
              o11y.works exists to empower engineers with practical knowledge, open developer tools, and community-driven resources to become effective, productive, and cost-conscious observability practitioners.
            </p>
            <ul className="mt-6 space-y-2.5 text-xs text-gray-400 font-mono">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-brand-cyan shrink-0" /> Make practical observability knowledge accessible
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-brand-cyan shrink-0" /> Encourage open engineering collaboration
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-brand-cyan shrink-0" /> Build useful developer utilities
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-brand-cyan shrink-0" /> Incubate future telemetry ideas
              </li>
            </ul>
          </Card>

          {/* Vision */}
          <Card hoverEffect glow="blue" className="p-8">
            <div className="w-12 h-12 rounded-xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-blue mb-6">
              <Eye className="w-6 h-6" />
            </div>
            <Badge variant="blue" size="sm" className="mb-3">
              Our Vision
            </Badge>
            <h2 className="text-2xl font-bold text-white">The Global Observability Foundation</h2>
            <p className="mt-4 text-gray-300 text-sm leading-relaxed">
              We envision a future where observability knowledge is universally shared rather than siloed within commercial vendor documentation. A world where engineers can quickly architect, configure, and troubleshoot telemetry stacks using open standards.
            </p>
            <div className="mt-8 p-4 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-400 leading-normal font-mono">
              "This is where observability practitioners come together to learn, build, and shape the future."
            </div>
          </Card>

        </div>

        {/* 5 GUIDING PRINCIPLES */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-12">
            <Badge variant="emerald" size="md" className="mb-3">
              Foundation Core
            </Badge>
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Our Five Guiding Principles
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              Non-negotiable tenets that govern the o11y.works foundation.
            </p>
          </div>

          <div className="space-y-6">
            {corePrinciples.map((principle, index) => (
              <Card key={index} hoverEffect glow={principle.badge as any} className="p-6 flex flex-col sm:flex-row items-start gap-5">
                <div className={`shrink-0 w-10 h-10 rounded-lg bg-brand-${principle.badge}/10 border border-brand-${principle.badge}/20 flex items-center justify-center text-brand-${principle.badge} font-mono font-bold`}>
                  0{index + 1}
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-bold text-white">{principle.title}</h3>
                    <Badge variant={principle.badge as any} size="sm">
                      Principle 0{index + 1}
                    </Badge>
                  </div>
                  <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* WHAT O11Y.WORKS IS NOT */}
        <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-surface-card border border-white/10 text-center">
          <Badge variant="outline" size="sm" className="mb-4">
            Positioning Clarity
          </Badge>
          <h3 className="text-2xl font-bold text-white">What o11y.works is NOT</h3>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left text-sm text-gray-300">
            <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex items-center gap-2">
              <span className="text-red-400 font-bold">✕</span> NOT a commercial vendor product
            </div>
            <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex items-center gap-2">
              <span className="text-red-400 font-bold">✕</span> NOT a consulting agency
            </div>
            <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex items-center gap-2">
              <span className="text-red-400 font-bold">✕</span> NOT a commercial training sales company
            </div>
            <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex items-center gap-2">
              <span className="text-red-400 font-bold">✕</span> NOT a vendor documentation clone
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs font-mono text-gray-400">
              Ready to contribute to an open ecosystem?
            </span>
            <Button to="/community" variant="primary" size="md" icon={<ArrowRight className="w-4 h-4" />}>
              Join the Foundation Community
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};
