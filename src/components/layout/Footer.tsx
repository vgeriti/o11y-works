import React from 'react';
import Link from 'next/link';
import { Logo } from '../ui/Logo';
import { Github, Twitter, Linkedin, BookOpen, Layers, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#030712] border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Logo showTagline />
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Open, vendor-neutral observability foundation. Practical knowledge, operational playbooks, and standardized telemetry processing tools.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/o11yworks"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-surface/60 border border-white/10 text-gray-400 hover:text-white hover:border-brand-cyan/40 transition-colors"
                aria-label="GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com/o11yworks"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-surface/60 border border-white/10 text-gray-400 hover:text-white hover:border-brand-cyan/40 transition-colors"
                aria-label="Twitter Profile"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/company/o11yworks"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-surface/60 border border-white/10 text-gray-400 hover:text-white hover:border-brand-cyan/40 transition-colors"
                aria-label="LinkedIn Page"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-300 mb-4 flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-[#06b6d4]" /> Navigation
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/ecosystem" className="hover:text-white transition-colors">Ecosystem Tools</Link>
              </li>
              <li>
                <Link href="/knowledge" className="hover:text-white transition-colors">Knowledge Base</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">Blog & Runbooks</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-300 mb-4 flex items-center gap-2">
              <BookOpen className="w-3.5 h-3.5 text-[#06b6d4]" /> Resources
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <Link href="/blog/contribute" className="hover:text-white transition-colors">Write for o11y.works</Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-white transition-colors">Keystatic Studio (/admin)</Link>
              </li>
              <li>
                <a href="/rss.xml" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  RSS 2.0 Feed
                </a>
              </li>
              <li>
                <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  XML Sitemap
                </a>
              </li>
            </ul>
          </div>

          {/* Ecosystem */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-300 mb-4 flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#06b6d4]" /> Foundation
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <Link href="/community" className="hover:text-[#06b6d4] transition-colors">Community Hub</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#06b6d4] transition-colors">About & Team</Link>
              </li>
              <li>
                <a href="https://github.com/o11yworks/o11y-works" target="_blank" rel="noopener noreferrer" className="hover:text-[#06b6d4] transition-colors">
                  Open Source Code
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500">
          <p>© {new Date().getFullYear()} o11y.works. Open-source observability foundation.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> for SREs & Platform Engineers.
          </p>
        </div>
      </div>
    </footer>
  );
};
