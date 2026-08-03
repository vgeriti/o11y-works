import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getAuthorById } from '../content/authors';
import { ArrowLeft, Github, Linkedin, Twitter, BookOpen, Clock, Layers } from 'lucide-react';

export const AuthorProfile: React.FC = () => {
  const { username } = useParams<{ username: string }>();
  const author = getAuthorById(username || 'vgeriti');

  // Sample articles attributed to author
  const allArticles = [
    {
      slug: 'otel-collector-pipeline-benchmark',
      title: 'Tuning the OpenTelemetry Collector Pipeline for High-Throughput Streams',
      summary: 'A comprehensive benchmark and step-by-step runbook for optimizing memory_limiter, batching, and sampling processors under 100k events/sec load.',
      publishedDate: '2026-08-02',
      authorId: 'vgeriti',
      authorName: 'Venkatesh Geriti',
      tool: 'OTel',
      signal: 'Traces',
      type: 'Benchmark',
      readTimeMinutes: 12,
      coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    },
    {
      slug: 'splunk-ta-ado-alerts-playbook',
      title: 'Splunk TA ADO Alerts: Incident Throttling & Deduplication Playbook',
      summary: 'How to configure state-aware ticket deduplication, 1-hour comment throttling, and 24h ticket re-open logic in Splunk Alert Actions.',
      publishedDate: '2026-08-01',
      authorId: 'vgeriti',
      authorName: 'Venkatesh Geriti',
      tool: 'Splunk',
      signal: 'SIEM',
      type: 'Playbook',
      readTimeMinutes: 9,
      coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    },
    {
      slug: 'cribl-stream-log-reduction-guide',
      title: 'Building Custom Log Data Reduction Pipelines in Cribl Stream',
      summary: 'Reduce log volume by 45% using regex scrubbing, structural JSON parsing, and dynamic field dropping before Splunk ingestion.',
      publishedDate: '2026-07-28',
      authorId: 'vgeriti',
      authorName: 'Venkatesh Geriti',
      tool: 'Cribl',
      signal: 'Logs',
      type: 'Guide',
      readTimeMinutes: 10,
      coverImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    },
  ];

  // Filter articles for this author
  const authorArticles = allArticles.filter(
    (a) => a.authorId === author.id || a.authorName.toLowerCase() === author.name.toLowerCase()
  );

  const avatarUrl = `https://github.com/${author.githubUsername}.png`;

  return (
    <div className="min-h-screen bg-background text-gray-100 pt-28 pb-20 relative overflow-hidden">
      {/* Background Ambient Top Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-radial-gradient opacity-15 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Back Link */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-brand-cyan transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Blog & Runbooks
        </Link>

        {/* Author Header Card */}
        <div className="p-6 sm:p-10 rounded-3xl bg-surface/90 border border-white/10 backdrop-blur-md shadow-2xl mb-14">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            {/* GitHub Avatar Image */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-brand-cyan/40 bg-surface shadow-xl shrink-0">
              <img
                src={avatarUrl}
                alt={author.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback avatar text if GitHub image fails
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>

            {/* Author Details */}
            <div className="flex-1">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {author.name}
                  </h1>
                  <span className="text-xs font-mono text-brand-cyan font-semibold">
                    @{author.githubUsername} • {author.role}
                  </span>
                </div>

                {/* Social & GitHub Links */}
                <div className="flex items-center gap-2">
                  <a
                    href={author.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-xs font-mono text-gray-200 hover:text-white transition-all"
                  >
                    <Github className="w-4 h-4 text-brand-cyan" /> GitHub
                  </a>
                  {author.linkedinUrl && (
                    <a
                      href={author.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-gray-300 hover:text-white transition-all"
                      aria-label="LinkedIn Profile"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {author.twitterUrl && (
                    <a
                      href={author.twitterUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-gray-300 hover:text-white transition-all"
                      aria-label="Twitter / X Profile"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-sm text-gray-400 leading-relaxed mb-4 max-w-3xl">
                {author.bio}
              </p>

              {/* Author Stats Bar */}
              <div className="flex items-center gap-6 pt-4 border-t border-white/10 text-xs font-mono text-gray-400">
                <span className="flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-brand-cyan" />
                  <strong className="text-white font-semibold">{authorArticles.length}</strong> Published Runbooks
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-brand-cyan" />
                  <strong className="text-white font-semibold">o11yworks Core</strong> Contributor
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Author's Published Articles Header */}
        <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-brand-cyan" />
          Articles & Runbooks by {author.name}
        </h2>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {authorArticles.map((article) => (
            <Link
              key={article.slug}
              to={`/blog/${article.slug}`}
              className="group flex flex-col rounded-2xl bg-surface/80 border border-white/10 hover:border-brand-cyan/40 p-5 transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              {/* Thumbnail Image */}
              <div className="rounded-xl overflow-hidden aspect-video bg-background/80 border border-white/10 mb-5 relative">
                <img
                  src={article.coverImage}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2.5 left-2.5 flex gap-1.5">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-background/90 text-brand-cyan border border-brand-cyan/30">
                    {article.tool}
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-background/90 text-gray-300 border border-white/20">
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
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTimeMinutes} min read
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-brand-cyan transition-colors mb-2 line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-xs text-gray-400 leading-relaxed mb-4 line-clamp-3">
                    {article.summary}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs font-mono text-gray-400">
                  <span>{article.publishedDate}</span>
                  <span className="text-brand-cyan font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Read →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
