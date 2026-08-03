import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, PenSquare, GitPullRequest, ShieldCheck, Flame, Terminal, Cpu, Database, Code2 } from 'lucide-react';

export const ContributorGuide: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-gray-100 pt-28 pb-20 relative">
      {/* Background Ambient Top Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-radial-gradient opacity-15 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Back Link */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-brand-cyan transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Blog & Runbooks
        </Link>

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-mono mb-4">
            <PenSquare className="w-3.5 h-3.5" />
            <span>Open-Source Writer & Author Portal</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Contribute to <span className="text-gradient-cyan">o11y.works</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed font-sans">
            Share practical observability runbooks, pipeline benchmarks, and troubleshooting playbooks with over 15,000 platform engineers and SREs.
          </p>
        </div>

        {/* 3-Step Walkthrough Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-surface/80 border border-white/10 relative overflow-hidden">
            <div className="text-3xl font-mono font-bold text-brand-cyan/40 mb-3">01</div>
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-brand-cyan" />
              Sign in with GitHub
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Open <Link to="/admin" className="text-brand-cyan underline">o11y.works/admin</Link> and click 1-click GitHub login. No credentials or DB tokens needed.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-surface/80 border border-white/10 relative overflow-hidden">
            <div className="text-3xl font-mono font-bold text-brand-cyan/40 mb-3">02</div>
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <PenSquare className="w-5 h-5 text-brand-cyan" />
              Write in Visual CMS
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Write using a Notion/WordPress-style visual editor, select Tool/Signal dropdown tags, and paste code snippets.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-surface/80 border border-white/10 relative overflow-hidden">
            <div className="text-3xl font-mono font-bold text-brand-cyan/40 mb-3">03</div>
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <GitPullRequest className="w-5 h-5 text-brand-cyan" />
              1-Click Publish
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Click Publish. Keystatic automatically generates a Pull Request on GitHub for core team review.
            </p>
          </div>
        </div>

        {/* Code Formatting Standards Section */}
        <div className="p-8 rounded-3xl bg-surface/90 border border-white/10 mb-12 shadow-2xl">
          <h2 className="text-2xl font-bold text-white mb-4">
            Priority Language Support
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed mb-6">
            We prioritize high-utility code blocks with native syntax highlighting for core observability tooling:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 font-mono text-xs">
            <div className="p-4 rounded-xl bg-background border border-white/10 flex items-center gap-3">
              <Flame className="w-5 h-5 text-amber-400" />
              <div>
                <div className="font-bold text-white">Splunk SPL</div>
                <div className="text-gray-400 text-[11px]">`.spl` query blocks</div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-background border border-white/10 flex items-center gap-3">
              <Terminal className="w-5 h-5 text-teal-400" />
              <div>
                <div className="font-bold text-white">Cribl Stream</div>
                <div className="text-gray-400 text-[11px]">JavaScript & Packs</div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-background border border-white/10 flex items-center gap-3">
              <Cpu className="w-5 h-5 text-purple-400" />
              <div>
                <div className="font-bold text-white">Dynatrace DQL</div>
                <div className="text-gray-400 text-[11px]">DQL log & metric queries</div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-background border border-white/10 flex items-center gap-3">
              <Database className="w-5 h-5 text-blue-400" />
              <div>
                <div className="font-bold text-white">SQL / ClickHouse</div>
                <div className="text-gray-400 text-[11px]">High-volume column queries</div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-background border border-white/10 flex items-center gap-3">
              <Code2 className="w-5 h-5 text-cyan-400" />
              <div>
                <div className="font-bold text-white">OTel & YAML</div>
                <div className="text-gray-400 text-[11px]">Collector pipeline configs</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Launch Admin */}
        <div className="text-center pt-8 border-t border-white/10">
          <Link
            to="/admin"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-cyan text-background font-mono font-bold text-sm hover:bg-brand-cyan/90 transition-colors shadow-lg"
          >
            <PenSquare className="w-4 h-4" /> Open Writer Portal (/admin)
          </Link>
        </div>
      </div>
    </div>
  );
};
