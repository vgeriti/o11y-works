'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { CodeBlock } from '../components/blog/CodeBlock';
import { ArrowLeft, Clock, Calendar, Share2, BookOpen, ArrowRight, Check } from 'lucide-react';

export interface ArticleDetail {
  slug: string;
  title: string;
  summary: string;
  publishedDate: string;
  author: string;
  authorId: string;
  authorRole: string;
  authorBio: string;
  tool: string;
  signal: string;
  type: string;
  readTimeMinutes: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content?: any;
}

interface BlogPostProps {
  articleData?: ArticleDetail | null;
  fallbackSlug?: string;
}

export const BlogPost: React.FC<BlogPostProps> = ({ articleData, fallbackSlug = 'otel-collector-pipeline-benchmark' }) => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [activeSection, setActiveSection] = useState<string>('overview');
  const [linkCopied, setLinkCopied] = useState<boolean>(false);

  // Fallback post data if none provided
  const defaultPost = {
    slug: fallbackSlug,
    title: fallbackSlug === 'test-blog' ? 'test blog' : 'Tuning the OpenTelemetry Collector Pipeline for High-Throughput Streams',
    summary: fallbackSlug === 'test-blog' ? 'Test post created via Keystatic Studio.' : 'A comprehensive benchmark and step-by-step runbook for optimizing memory_limiter, batching, and sampling processors under 100k events/sec load.',
    publishedDate: '2026-08-02',
    author: 'Venkatesh Geriti',
    authorId: 'vgeriti',
    authorRole: 'Principal Observability Architect',
    authorBio: 'Building open-source telemetry collectors, log processors, and monitoring automation tools.',
    tool: fallbackSlug === 'test-blog' ? 'Splunk' : 'OTel',
    signal: fallbackSlug === 'test-blog' ? 'Metrics' : 'Traces',
    type: fallbackSlug === 'test-blog' ? 'Guide' : 'Benchmark',
    readTimeMinutes: 8,
  };

  const postData = articleData || defaultPost;

  // Related articles data
  const relatedArticles = [
    {
      slug: 'splunk-ta-ado-alerts-playbook',
      title: 'Splunk TA ADO Alerts: Incident Throttling & Deduplication Playbook',
      summary: 'How to configure state-aware ticket deduplication, 1-hour comment throttling, and 24h ticket re-open logic in Splunk Alert Actions.',
      tool: 'Splunk',
      signal: 'SIEM',
      type: 'Playbook',
      readTimeMinutes: 9,
      publishedDate: '2026-08-01',
    },
    {
      slug: 'cribl-stream-log-reduction-guide',
      title: 'Building Custom Log Data Reduction Pipelines in Cribl Stream',
      summary: 'Reduce log volume by 45% using regex scrubbing, structural JSON parsing, and dynamic field dropping before Splunk ingestion.',
      tool: 'Cribl',
      signal: 'Logs',
      type: 'Guide',
      readTimeMinutes: 10,
      publishedDate: '2026-07-28',
    },
  ];

  // Reading Progress Bar & Scroll-Synced ToC
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);

      // Section scroll tracking
      const section1 = document.getElementById('pipeline-sequence');
      const section2 = document.getElementById('splunk-verification');

      if (section2 && window.scrollY >= section2.offsetTop - 150) {
        setActiveSection('splunk-verification');
      } else if (section1 && window.scrollY >= section1.offsetTop - 150) {
        setActiveSection('pipeline-sequence');
      } else {
        setActiveSection('overview');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShare = async () => {
    if (typeof window !== 'undefined') {
      await navigator.clipboard.writeText(window.location.href);
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 2000);
    }
  };

  const otelCode = `receivers:
  otlp:
    protocols:
      grpc:
        endpoint: 0.0.0.0:4317

processors:
  memory_limiter:
    check_interval: 1s
    limit_percentage: 80
    spike_limit_percentage: 20

  batch:
    send_batch_size: 8192
    timeout: 1s

exporters:
  otlp/tempo:
    endpoint: tempo.o11y.internal:4317

service:
  pipelines:
    traces:
      receivers: [otlp]
      processors: [memory_limiter, batch]
      exporters: [otlp/tempo]`;

  const splunkCode = `index=_internal sourcetype=otel:collector status=error
| stats count by processor, error_reason
| eval threshold = if(count > 5, "CRITICAL", "OK")`;

  return (
    <div className="min-h-screen bg-[#030712] text-gray-100 pt-28 pb-20 relative">
      {/* Top Fixed Reading Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-[#06b6d4] z-50 transition-all duration-150 shadow-[0_0_10px_#06b6d4]"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-[#06b6d4] transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Blog & Runbooks
        </Link>

        {/* 1. TOP TAG PILLS */}
        <div className="flex flex-wrap items-center gap-2.5 mb-4">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#06b6d4]/20 text-[#06b6d4] border border-[#06b6d4]/40">
            {postData.tool}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-mono bg-surface text-gray-300 border border-white/10">
            {postData.signal}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-mono bg-surface text-gray-400 border border-white/10">
            {postData.type}
          </span>
        </div>

        {/* 2. H1 TITLE */}
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
          {postData.title}
        </h1>

        {/* 3. COMPACT METADATA BAR */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-white/10 text-xs font-mono text-gray-400 mb-10">
          <div className="flex items-center gap-4">
            <Link
              href={`/blog/author/${postData.authorId}`}
              className="flex items-center gap-2 text-gray-200 hover:text-[#06b6d4] transition-colors font-semibold"
            >
              <img
                src={`https://github.com/${postData.authorId}.png`}
                alt={postData.author}
                className="w-5 h-5 rounded-full border border-[#06b6d4]/40"
              />
              {postData.author}
            </Link>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" /> {postData.publishedDate}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" /> {postData.readTimeMinutes} min read
            </span>
          </div>

          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 text-gray-400 hover:text-[#06b6d4] transition-colors"
          >
            {linkCopied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400">Link Copied!</span>
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4" /> Share Article
              </>
            )}
          </button>
        </div>

        {/* Article Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* 4. MAIN ARTICLE CONTENT BODY */}
          <div className="lg:col-span-8 prose prose-invert max-w-none">
            <div id="overview" className="scroll-mt-32">
              <p className="text-lg text-gray-300 leading-relaxed font-sans mb-8">
                {postData.summary}
              </p>
            </div>

            {postData.slug === 'otel-collector-pipeline-benchmark' && (
              <>
                <div id="pipeline-sequence" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    1. Recommended Processor Pipeline Sequence
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    The sequence of processors inside your OpenTelemetry Collector configuration directly controls memory limits and throughput latency:
                  </p>

                  <CodeBlock code={otelCode} language="yaml" fileName="otel-collector-config.yaml" />
                </div>

                <div id="splunk-verification" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                    2. Verifying Pipeline Health via Splunk SPL
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Use this SPL query to inspect collector processor errors and drop rates in Splunk:
                  </p>

                  <CodeBlock code={splunkCode} language="spl" fileName="collector-health.spl" />
                </div>
              </>
            )}

            {/* 5. STANDALONE AUTHOR SECTION */}
            <Link
              href={`/blog/author/${postData.authorId}`}
              className="group mt-14 p-6 sm:p-8 rounded-r-2xl bg-surface/90 border border-white/10 border-l-4 border-l-[#06b6d4] flex flex-col sm:flex-row items-start sm:items-center gap-5 shadow-xl hover:border-[#06b6d4]/40 transition-all block"
            >
              <div className="w-14 h-14 rounded-2xl overflow-hidden border border-[#06b6d4]/40 bg-surface shrink-0">
                <img
                  src={`https://github.com/${postData.authorId}.png`}
                  alt={postData.author}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-lg font-bold text-white group-hover:text-[#06b6d4] transition-colors">
                    {postData.author}
                  </h3>
                  <span className="text-xs font-mono text-[#06b6d4]">
                    {postData.authorRole} →
                  </span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {postData.authorBio}
                </p>
              </div>
            </Link>

            {/* 6. RELATED ARTICLES & RUNBOOKS SECTION */}
            <div className="mt-16 pt-10 border-t border-white/10">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#06b6d4]" />
                Related Articles & Runbooks
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedArticles.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/blog/${rel.slug}`}
                    className="group block p-5 rounded-2xl bg-surface/80 border border-white/10 hover:border-[#06b6d4]/40 transition-all duration-300 shadow-md"
                  >
                    <div className="flex items-center gap-2 text-[11px] font-mono text-gray-400 mb-2">
                      <span className="text-[#06b6d4] font-semibold">{rel.tool}</span>
                      <span>•</span>
                      <span>{rel.readTimeMinutes} min read</span>
                    </div>

                    <h4 className="text-base font-bold text-white group-hover:text-[#06b6d4] transition-colors mb-2 line-clamp-2">
                      {rel.title}
                    </h4>

                    <p className="text-xs text-gray-400 leading-relaxed mb-4 line-clamp-2">
                      {rel.summary}
                    </p>

                    <span className="inline-flex items-center gap-1 text-xs font-mono text-[#06b6d4] font-semibold group-hover:translate-x-1 transition-transform">
                      Read Runbook <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky Table of Contents Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 p-6 rounded-2xl bg-surface/80 border border-white/10 backdrop-blur-md">
              <div className="flex items-center gap-2 text-xs font-mono text-[#06b6d4] uppercase tracking-wider mb-4 font-bold">
                <BookOpen className="w-4 h-4" /> Table of Contents
              </div>
              <ul className="space-y-3 text-xs font-mono border-l border-white/10 pl-4">
                <li>
                  <a
                    href="#overview"
                    className={`transition-colors block ${
                      activeSection === 'overview' ? 'text-[#06b6d4] font-bold pl-1 border-l-2 border-[#06b6d4] -ml-[17px]' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Overview
                  </a>
                </li>
                {postData.slug === 'otel-collector-pipeline-benchmark' && (
                  <>
                    <li>
                      <a
                        href="#pipeline-sequence"
                        className={`transition-colors block ${
                          activeSection === 'pipeline-sequence' ? 'text-[#06b6d4] font-bold pl-1 border-l-2 border-[#06b6d4] -ml-[17px]' : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        1. Recommended Sequence
                      </a>
                    </li>
                    <li>
                      <a
                        href="#splunk-verification"
                        className={`transition-colors block ${
                          activeSection === 'splunk-verification' ? 'text-[#06b6d4] font-bold pl-1 border-l-2 border-[#06b6d4] -ml-[17px]' : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        2. Verifying via Splunk
                      </a>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
