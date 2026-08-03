import React from 'react';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { 
  FolderGit2, 
  BookOpen, 
  Microscope, 
  FlaskConical, 
  FileCode2, 
  Users, 
  Clock, 
  ShieldCheck
} from 'lucide-react';

export const Ecosystem: React.FC = () => {
  return (
    <div className="pt-32 pb-24 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 inset-x-0 h-[400px] bg-radial-gradient opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="cyan" size="md" className="mb-4">
            Ecosystem Model & Architecture
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            The o11y.works Ecosystem
          </h1>
          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            A structured incubation model designed to turn practical engineering ideas into open-source projects, verified resources, and collaborative research.
          </p>
        </div>

        {/* Foundation Incubator Notice */}
        <div className="max-w-4xl mx-auto mb-16 p-4 sm:p-6 rounded-xl bg-surface-card border border-brand-cyan/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-brand-cyan/10 text-brand-cyan shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">Authentic Incubator Governance</h3>
              <p className="text-xs text-gray-400 mt-0.5">
                All initiatives below represent active foundation roadmap pillars. We do not display artificial projects or inflated statistics.
              </p>
            </div>
          </div>
          <Badge variant="outline" size="sm" className="shrink-0">
            Phase 1 Foundation
          </Badge>
        </div>

        {/* 6 Ecosystem Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* 1. Projects */}
          <Card hoverEffect glow="cyan" className="flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan">
                  <FolderGit2 className="w-5 h-5" />
                </div>
                <Badge variant="cyan" size="sm">
                  Incubating
                </Badge>
              </div>
              <h3 className="text-xl font-bold text-white">Projects</h3>
              <p className="mt-3 text-sm text-gray-300 leading-relaxed">
                Community-driven open source tools, telemetry utilities, and OTel collector extensions built to solve operational pain points.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400 font-mono">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-brand-cyan" /> Roadmap Q3/Q4
              </span>
              <span>Open Source</span>
            </div>
          </Card>

          {/* 2. Knowledge */}
          <Card hoverEffect glow="blue" className="flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-blue">
                  <BookOpen className="w-5 h-5" />
                </div>
                <Badge variant="emerald" size="sm">
                  Active
                </Badge>
              </div>
              <h3 className="text-xl font-bold text-white">Knowledge</h3>
              <p className="mt-3 text-sm text-gray-300 leading-relaxed">
                Practical guides, engineering patterns, and vendor-neutral learning paths covering metrics, logging, tracing, and eBPF.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400 font-mono">
              <span className="text-brand-emerald font-semibold">Available Now</span>
              <Button to="/knowledge" variant="ghost" size="sm" className="p-0 text-brand-blue">
                View Knowledge Hub &rarr;
              </Button>
            </div>
          </Card>

          {/* 3. Research */}
          <Card hoverEffect glow="violet" className="flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-brand-violet/10 border border-brand-violet/20 flex items-center justify-center text-brand-violet">
                  <Microscope className="w-5 h-5" />
                </div>
                <Badge variant="violet" size="sm">
                  Research Track
                </Badge>
              </div>
              <h3 className="text-xl font-bold text-white">Research</h3>
              <p className="mt-3 text-sm text-gray-300 leading-relaxed">
                Exploration of emerging observability concepts including zero-code eBPF profiling, AI-assisted anomaly triage, and high-cardinality indexing.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400 font-mono">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-brand-violet" /> Working Paper Stage
              </span>
              <span>Open Research</span>
            </div>
          </Card>

          {/* 4. Labs */}
          <Card hoverEffect glow="cyan" className="flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-brand-teal/10 border border-brand-teal/20 flex items-center justify-center text-brand-teal">
                  <FlaskConical className="w-5 h-5" />
                </div>
                <Badge variant="outline" size="sm">
                  Experimental
                </Badge>
              </div>
              <h3 className="text-xl font-bold text-white">Labs</h3>
              <p className="mt-3 text-sm text-gray-300 leading-relaxed">
                Sandbox environments and experimental tools created by community engineers to prototype next-generation telemetry collectors.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400 font-mono">
              <span>Community Sandbox</span>
              <span>In Development</span>
            </div>
          </Card>

          {/* 5. Resources */}
          <Card hoverEffect glow="blue" className="flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-blue">
                  <FileCode2 className="w-5 h-5" />
                </div>
                <Badge variant="emerald" size="sm">
                  Active
                </Badge>
              </div>
              <h3 className="text-xl font-bold text-white">Resources</h3>
              <p className="mt-3 text-sm text-gray-300 leading-relaxed">
                Reference architectures, downloadable cheatsheets, configuration templates, and operational incident playbooks.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400 font-mono">
              <span className="text-brand-emerald font-semibold">Available Now</span>
              <Button to="/knowledge" variant="ghost" size="sm" className="p-0 text-brand-blue">
                Browse Resources &rarr;
              </Button>
            </div>
          </Card>

          {/* 6. Community */}
          <Card hoverEffect glow="violet" className="flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-brand-violet/10 border border-brand-violet/20 flex items-center justify-center text-brand-violet">
                  <Users className="w-5 h-5" />
                </div>
                <Badge variant="violet" size="sm">
                  Active
                </Badge>
              </div>
              <h3 className="text-xl font-bold text-white">Community</h3>
              <p className="mt-3 text-sm text-gray-300 leading-relaxed">
                A vendor-neutral network of engineers collaborating, reviewing architecture designs, and building open standards together.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400 font-mono">
              <span className="text-brand-violet font-semibold">Join Today</span>
              <Button to="/community" variant="ghost" size="sm" className="p-0 text-brand-violet">
                Join Community &rarr;
              </Button>
            </div>
          </Card>

        </div>

        {/* Call to Collaborate */}
        <div className="mt-20 p-8 rounded-2xl bg-surface-card border border-white/10 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-white">Have an idea for an o11y.works incubator project?</h3>
          <p className="mt-3 text-sm text-gray-300 leading-relaxed">
            We welcome open-source maintainers, researchers, and SRE practitioners who want to incubate tool ideas or author engineering guides under our foundation.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <Button to="/community" variant="primary" size="md">
              Propose an Initiative
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};
