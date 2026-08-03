'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Clock, ArrowRight, BookOpen } from 'lucide-react';

export interface ArticleItem {
  slug: string;
  title: string;
  summary: string;
  publishedDate: string;
  author: string;
  tool: string;
  signal: string;
  type: string;
  featured: boolean;
  readTimeMinutes: number;
  coverImage: string;
}

interface BlogIndexProps {
  articles?: ArticleItem[];
}

export const BlogIndex: React.FC<BlogIndexProps> = ({ articles = [] }) => {
  const [selectedTool, setSelectedTool] = useState<string>('All');
  const [selectedSignal, setSelectedSignal] = useState<string>('All');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Fallback sample articles if none supplied
  const defaultArticles: ArticleItem[] = [
    {
      slug: 'otel-collector-pipeline-benchmark',
      title: 'Tuning the OpenTelemetry Collector Pipeline for High-Throughput Streams',
      summary: 'A comprehensive benchmark and step-by-step runbook for optimizing memory_limiter, batching, and sampling processors under 100k events/sec load.',
      publishedDate: '2026-08-02',
      author: 'Venkatesh Geriti',
      tool: 'OTel',
      signal: 'Traces',
      type: 'Benchmark',
      featured: true,
      readTimeMinutes: 12,
      coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    },
    {
      slug: 'splunk-ta-ado-alerts-playbook',
      title: 'Splunk TA ADO Alerts: Incident Throttling & Deduplication Playbook',
      summary: 'How to configure state-aware ticket deduplication, 1-hour comment throttling, and 24h ticket re-open logic in Splunk Alert Actions.',
      publishedDate: '2026-08-01',
      author: 'Venkatesh Geriti',
      tool: 'Splunk',
      signal: 'SIEM',
      type: 'Playbook',
      featured: false,
      readTimeMinutes: 9,
      coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    },
    {
      slug: 'cribl-stream-log-reduction-guide',
      title: 'Building Custom Log Data Reduction Pipelines in Cribl Stream',
      summary: 'Reduce log volume by 45% using regex scrubbing, structural JSON parsing, and dynamic field dropping before Splunk ingestion.',
      publishedDate: '2026-07-28',
      author: 'Venkatesh Geriti',
      tool: 'Cribl',
      signal: 'Logs',
      type: 'Guide',
      featured: false,
      readTimeMinutes: 10,
      coverImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const displayArticles = articles.length > 0 ? articles : defaultArticles;

  // Filtering Logic
  const filteredArticles = displayArticles.filter((article) => {
    const matchesTool = selectedTool === 'All' || article.tool === selectedTool;
    const matchesSignal = selectedSignal === 'All' || article.signal === selectedSignal;
    const matchesType = selectedType === 'All' || article.type === selectedType;
    const matchesSearch =
      searchQuery.trim() === '' ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTool && matchesSignal && matchesType && matchesSearch;
  });

  const featuredArticle = filteredArticles.find((a) => a.featured) || filteredArticles[0];
  const gridArticles = filteredArticles.filter((a) => a !== featuredArticle);

  return (
    <div className="min-h-screen bg-[#030712] text-gray-100 pt-28 pb-20 relative overflow-hidden">
      {/* Background Ambient Top Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-radial-gradient opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#06b6d4]/10 border border-[#06b6d4]/20 text-[#06b6d4] text-xs font-mono mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Open Observability Knowledge & Runbooks</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 font-mono">
            <span>o11y</span><span className="text-[#06b6d4] font-bold">.</span><span>works</span>{' '}
            <span className="text-gradient-cyan">Insights</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed font-sans max-w-2xl mx-auto">
            Practical observability guides, high-throughput pipeline benchmarks, and operational playbooks for Splunk, Cribl, Dynatrace, SQL, and OTel.
          </p>
        </div>

        {/* Integrated Filter Bar */}
        <div className="mb-12 p-3 rounded-2xl bg-surface/80 border border-white/10 backdrop-blur-md shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {/* Tool Dropdown */}
            <div className="relative">
              <label htmlFor="tool-select" className="sr-only">Filter by Tool</label>
              <select
                id="tool-select"
                aria-label="Filter by Tool"
                value={selectedTool}
                onChange={(e) => setSelectedTool(e.target.value)}
                className="w-full h-10 px-3.5 py-2 rounded-xl bg-[#030712] border border-white/10 text-xs font-mono text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#06b6d4] transition-all appearance-none cursor-pointer"
              >
                <option value="All">🛠️ Tool: All Platforms</option>
                <option value="Splunk">⚡ Splunk</option>
                <option value="Cribl">🌀 Cribl</option>
                <option value="Dynatrace">🦅 Dynatrace</option>
                <option value="SQL">🗄️ SQL</option>
                <option value="OTel">🩵 OTel</option>
                <option value="Prometheus">🟧 Prometheus</option>
                <option value="K8s">☸️ K8s</option>
              </select>
            </div>

            {/* Signal Dropdown */}
            <div className="relative">
              <label htmlFor="signal-select" className="sr-only">Filter by Signal</label>
              <select
                id="signal-select"
                aria-label="Filter by Signal"
                value={selectedSignal}
                onChange={(e) => setSelectedSignal(e.target.value)}
                className="w-full h-10 px-3.5 py-2 rounded-xl bg-[#030712] border border-white/10 text-xs font-mono text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#06b6d4] transition-all appearance-none cursor-pointer"
              >
                <option value="All">⚡ Signal: All Domains</option>
                <option value="Logs">Logs</option>
                <option value="Traces">Traces</option>
                <option value="Metrics">Metrics</option>
                <option value="SIEM">SIEM</option>
                <option value="RUM">RUM</option>
                <option value="eBPF">eBPF</option>
              </select>
            </div>

            {/* Type Dropdown */}
            <div className="relative">
              <label htmlFor="type-select" className="sr-only">Filter by Format Type</label>
              <select
                id="type-select"
                aria-label="Filter by Format Type"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full h-10 px-3.5 py-2 rounded-xl bg-[#030712] border border-white/10 text-xs font-mono text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#06b6d4] transition-all appearance-none cursor-pointer"
              >
                <option value="All">📋 Type: All Formats</option>
                <option value="Playbook">🛠️ Playbook</option>
                <option value="Guide">📖 Guide</option>
                <option value="Deep Dive">🔬 Deep Dive</option>
                <option value="Roadmap">🗺️ Roadmap</option>
                <option value="Benchmark">📐 Benchmark</option>
              </select>
            </div>

            {/* Live Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search articles & runbooks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-10 pl-10 pr-3.5 py-2 rounded-xl bg-[#030712] border border-white/10 text-xs font-mono text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#06b6d4] transition-all"
              />
            </div>
          </div>
        </div>

        {/* Featured Hero Article Card */}
        {featuredArticle && (
          <div className="mb-16">
            <Link
              href={`/blog/${featuredArticle.slug}`}
              className="group block rounded-3xl bg-surface/90 border border-white/10 hover:border-[#06b6d4]/40 p-6 sm:p-8 transition-all duration-300 shadow-2xl hover:shadow-[#06b6d4]/5 overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Cover Image Preview */}
                <div className="lg:col-span-6 rounded-2xl overflow-hidden aspect-video bg-[#030712]/80 border border-white/10 relative">
                  <img
                    src={featuredArticle.coverImage}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-[#06b6d4] text-[#030712]">
                      FEATURED RUNBOOK
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-[#030712]/90 text-gray-200 border border-white/20">
                      {featuredArticle.tool}
                    </span>
                  </div>
                </div>

                {/* Hero Metadata & Title */}
                <div className="lg:col-span-6 flex flex-col justify-center">
                  <div className="flex items-center gap-3 text-xs font-mono text-gray-400 mb-3">
                    <span className="text-[#06b6d4] font-semibold">{featuredArticle.type}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {featuredArticle.readTimeMinutes} min read
                    </span>
                    <span>•</span>
                    <span>{featuredArticle.publishedDate}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-[#06b6d4] transition-colors mb-4 leading-tight">
                    {featuredArticle.title}
                  </h2>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {featuredArticle.summary}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-[#06b6d4]/20 border border-[#06b6d4]/40 flex items-center justify-center font-mono text-xs font-bold text-[#06b6d4]">
                        VG
                      </div>
                      <span className="text-xs font-mono text-gray-300">{featuredArticle.author}</span>
                    </div>

                    <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#06b6d4] group-hover:translate-x-1 transition-transform">
                      Read Runbook <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* 3-Column Responsive Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gridArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group flex flex-col rounded-2xl bg-surface/80 border border-white/10 hover:border-[#06b6d4]/40 p-5 transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              {/* Thumbnail Image */}
              <div className="rounded-xl overflow-hidden aspect-video bg-[#030712]/80 border border-white/10 mb-5 relative">
                <img
                  src={article.coverImage}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2.5 left-2.5 flex gap-1.5">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-[#030712]/90 text-[#06b6d4] border border-[#06b6d4]/30">
                    {article.tool}
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-[#030712]/90 text-gray-300 border border-white/20">
                    {article.signal}
                  </span>
                </div>
              </div>

              {/* Title & Excerpt */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-[11px] font-mono text-gray-400 mb-2">
                    <span className="text-gray-300 font-semibold">{article.type}</span>
                    <span>•</span>
                    <span>{article.readTimeMinutes} min read</span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-[#06b6d4] transition-colors mb-2 line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-xs text-gray-400 leading-relaxed mb-4 line-clamp-3">
                    {article.summary}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs font-mono text-gray-400">
                  <span>{article.author}</span>
                  <span>{article.publishedDate}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
