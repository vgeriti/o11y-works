import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { 
  BookOpen, 
  Wrench, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  Cpu,
  Layers,
  Sparkles
} from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Radial Glow & Ambient Grid */}
      <div className="absolute top-0 inset-x-0 h-[600px] bg-radial-gradient opacity-80 pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />

      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Foundation Tag Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
            <span>Open Developer Ecosystem Foundation</span>
            <span className="text-gray-500">|</span>
            <span className="text-brand-cyan">Phase 1 Public Release</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.1]"
          >
            Practical Knowledge. <br className="hidden sm:inline" />
            <span className="text-gradient-cyan">Open Tools.</span> Better Observability.
          </motion.h1>

          {/* Supporting Narrative */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-normal"
          >
            <strong className="text-white font-semibold">o11y.works</strong> is a vendor-neutral ecosystem helping engineers learn, experiment, collaborate, and improve real-world observability practices.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              to="/ecosystem"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Explore the Ecosystem
            </Button>
            <Button
              to="/community"
              variant="secondary"
              size="lg"
              icon={<Users className="w-4 h-4 text-brand-cyan" />}
              iconPosition="left"
            >
              Join the Community
            </Button>
          </motion.div>

          {/* Minimal Code/Telemetry Preview Frame */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 max-w-3xl mx-auto rounded-xl bg-surface-card border border-white/10 p-4 sm:p-6 text-left shadow-2xl relative group"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4 font-mono text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                <span className="ml-2 text-gray-400">telemetry-signal.yaml</span>
              </div>
              <Badge variant="cyan" size="sm">OpenTelemetry Standard</Badge>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-gray-300 overflow-x-auto leading-relaxed">
              <code>{`receivers:
  otlp:
    protocols:
      grpc: { endpoint: "0.0.0.0:4317" }
processors:
  batch: { timeout: 1s, send_batch_size: 1024 }
  memory_limiter: { check_interval: 1s, limit_percentage: 75 }
exporters:
  prometheus: { endpoint: "0.0.0.0:8889" }`}</code>
            </pre>
            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-gray-500 font-mono">
              <span className="flex items-center gap-1.5 text-brand-cyan">
                <CheckCircle2 className="w-3.5 h-3.5" /> 100% Vendor-Neutral Architecture Pattern
              </span>
              <span>o11y.works Specification</span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 2. WHAT IS O11Y.WORKS? */}
      <section className="py-20 border-t border-white/10 bg-surface/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="violet" size="md" className="mb-4">
              Foundation Philosophy
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              What is o11y.works?
            </h2>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed font-normal">
              <strong className="text-white">o11y.works</strong> is an open ecosystem where observability practitioners share knowledge, build practical tools, explore engineering ideas, and collaborate without commercial bias or vendor lock-in.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan mb-4">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">Engineering-First</h3>
              <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                Built by and for practitioners who work directly with metrics, distributed tracing, continuous profiling, and log pipelines.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <div className="w-10 h-10 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-blue mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">Vendor-Neutral</h3>
              <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                Focused strictly on open standards like OpenTelemetry, Prometheus, W3C Trace Context, and eBPF telemetry without commercial sales agendas.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <div className="w-10 h-10 rounded-lg bg-brand-violet/10 border border-brand-violet/20 flex items-center justify-center text-brand-violet mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">Practical & Actionable</h3>
              <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                Zero fluff or marketing buzzwords—only battle-tested architecture blueprints, query guides, and developer utilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THREE PILLARS SECTION */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="cyan" size="md" className="mb-4">
              Core Architecture
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              The Three Pillars of o11y.works
            </h2>
            <p className="mt-4 text-gray-400 text-base">
              A balanced foundation bringing together educational resources, open developer utilities, and community collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Pillar 1: Knowledge */}
            <Card hoverEffect glow="cyan" className="flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan mb-6">
                  <BookOpen className="w-6 h-6" />
                </div>
                <Badge variant="cyan" size="sm" className="mb-3">
                  Pillar I
                </Badge>
                <h3 className="text-2xl font-bold text-white">Knowledge</h3>
                <p className="mt-4 text-gray-300 text-sm leading-relaxed">
                  Practical guides, engineering patterns, and structured learning paths that help practitioners grow from telemetry basics to complex TSDB tuning.
                </p>
                <ul className="mt-6 space-y-2.5 text-xs text-gray-400 font-mono">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                    Observability Fundamentals Track
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                    High-Cardinality Management Runbooks
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                    Reference Architecture Specifications
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-white/10">
                <Button to="/knowledge" variant="outline" size="sm" className="w-full justify-between">
                  <span>Explore Knowledge</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </Card>

            {/* Pillar 2: Tools */}
            <Card hoverEffect glow="blue" className="flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-blue mb-6">
                  <Wrench className="w-6 h-6" />
                </div>
                <Badge variant="blue" size="sm" className="mb-3">
                  Pillar II
                </Badge>
                <h3 className="text-2xl font-bold text-white">Tools</h3>
                <p className="mt-4 text-gray-300 text-sm leading-relaxed">
                  Open utilities, experiments, and browser-based developer tools created to simplify collector configuration, query syntax, and cost calculation.
                </p>
                <ul className="mt-6 space-y-2.5 text-xs text-gray-400 font-mono">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                    OTel Collector Config Generator
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                    PromQL & LogQL Query Helper
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                    Metric Cost & Memory Estimator
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-white/10">
                <Button to="/ecosystem" variant="outline" size="sm" className="w-full justify-between">
                  <span>Explore Open Tools</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </Card>

            {/* Pillar 3: Community */}
            <Card hoverEffect glow="violet" className="flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-violet/10 border border-brand-violet/20 flex items-center justify-center text-brand-violet mb-6">
                  <Users className="w-6 h-6" />
                </div>
                <Badge variant="violet" size="sm" className="mb-3">
                  Pillar III
                </Badge>
                <h3 className="text-2xl font-bold text-white">Community</h3>
                <p className="mt-4 text-gray-300 text-sm leading-relaxed">
                  A collaborative space where engineers review projects, share operational experiences, contribute code, and shape the future of open observability.
                </p>
                <ul className="mt-6 space-y-2.5 text-xs text-gray-400 font-mono">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-violet" />
                    GitHub Working Groups & Discussions
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-violet" />
                    1-Click Local Docker Sandboxes
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-violet" />
                    Community Architecture Reviews
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-white/10">
                <Button to="/community" variant="outline" size="sm" className="w-full justify-between">
                  <span>Join the Community</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* 4. WHY O11Y.WORKS? (PRINCIPLES SECTION) */}
      <section className="py-24 border-t border-white/10 bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge variant="emerald" size="md" className="mb-4">
              Guiding Principles
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Why o11y.works?
            </h2>
            <p className="mt-4 text-gray-400 text-base">
              Our core tenets guide every resource, blueprint, and open utility released under the o11y.works foundation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex gap-4 p-6 rounded-xl bg-glass-card">
              <div className="shrink-0 w-8 h-8 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan font-mono text-sm font-bold">
                01
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Practical over Theoretical</h3>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                  We prioritize real-world production practices, executable YAML configurations, and verified runbooks over high-level marketing theory.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 rounded-xl bg-glass-card">
              <div className="shrink-0 w-8 h-8 rounded-full bg-brand-blue/10 border border-brand-blue/30 flex items-center justify-center text-brand-blue font-mono text-sm font-bold">
                02
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Community over Silos</h3>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                  Observability challenges are shared across every engineering organization. Knowledge should be openly accessible, not locked behind paywalls.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 rounded-xl bg-glass-card">
              <div className="shrink-0 w-8 h-8 rounded-full bg-brand-violet/10 border border-brand-violet/30 flex items-center justify-center text-brand-violet font-mono text-sm font-bold">
                03
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Engineering Experience over Marketing</h3>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                  We build calm, fast, developer-first tools inspired by Linear and Vercel, focusing on utility and clarity rather than marketing noise.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 rounded-xl bg-glass-card">
              <div className="shrink-0 w-8 h-8 rounded-full bg-brand-emerald/10 border border-brand-emerald/30 flex items-center justify-center text-brand-emerald font-mono text-sm font-bold">
                04
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Open Collaboration over Closed Ecosystems</h3>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                  We support open telemetry specifications, open-source maintainers, and community-owned reference implementations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA SECTION */}
      <section className="py-24 border-t border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient opacity-60 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Badge variant="cyan" size="md" className="mb-4">
            Join The Foundation Movement
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Help build the future of observability.
          </h2>
          <p className="mt-6 text-lg text-gray-300 max-w-xl mx-auto leading-relaxed">
            Whether you are writing your first OpenTelemetry collector file or scaling high-throughput Prometheus clusters, o11y.works is your home.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              to="/community"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Join the Community
            </Button>
            <Button
              to="/about"
              variant="secondary"
              size="lg"
            >
              Read Our Mission
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
