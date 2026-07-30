import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../ui/Logo';
import { Badge } from '../ui/Badge';
import { Globe, Shield, Heart } from 'lucide-react';

const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

export const Footer: React.FC = () => {
  return (
    <footer className="bg-surface/80 border-t border-white/10 pt-16 pb-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Positioning */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <Logo showTagline />
            <p className="text-sm text-gray-400 max-w-md leading-relaxed mt-2">
              o11y.works is a community-driven, vendor-neutral ecosystem empowering engineers with practical knowledge, open developer tools, and real-world observability engineering practices.
            </p>
            <div className="flex items-center gap-2 mt-2">
              <Badge variant="cyan" size="sm">
                Vendor Neutral
              </Badge>
              <Badge variant="outline" size="sm">
                Open Foundation
              </Badge>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-gray-400 font-semibold mb-4">
              Ecosystem Sitemap
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/ecosystem" className="text-gray-300 hover:text-white transition-colors">
                  Ecosystem Architecture
                </Link>
              </li>
              <li>
                <Link to="/knowledge" className="text-gray-300 hover:text-white transition-colors">
                  Knowledge & Learning
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-gray-300 hover:text-white transition-colors">
                  Community & Working Groups
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Foundation & Principles
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Principles & Channels */}
          <div className="md:col-span-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-gray-400 font-semibold mb-4">
              Ecosystem Channels
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-gray-300">
                <GithubIcon className="w-4 h-4 text-brand-cyan" />
                <a 
                  href="https://github.com/o11yworks" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors"
                >
                  GitHub Organization
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Globe className="w-4 h-4 text-brand-blue" />
                <span className="text-gray-400">Open Standards & Specifications</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Shield className="w-4 h-4 text-brand-emerald" />
                <span className="text-gray-400">Community Code of Conduct</span>
              </li>
            </ul>

            <div className="mt-6 p-3 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-400 leading-normal">
              Not affiliated with any single commercial vendor. Dedicated strictly to open engineering collaboration.
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-mono border-t border-white/5">
          <div>
            &copy; {new Date().getFullYear()} o11y.works Foundation. Released under Open Community Licensing.
          </div>
          <div className="flex items-center gap-1 text-gray-400">
            <span>Built for the global observability community</span>
            <Heart className="w-3.5 h-3.5 text-brand-cyan inline fill-brand-cyan/20" />
          </div>
        </div>

        {/* Legal & Trademark Disclaimer */}
        <div className="mt-4 pt-4 text-[11px] text-gray-600 font-mono leading-relaxed text-center sm:text-left">
          OpenTelemetry, Prometheus, Grafana, Jaeger, Thanos, Kubernetes, and eBPF are registered trademarks of their respective foundations (Linux Foundation, CNCF, Grafana Labs). o11y.works is an independent community foundation and is not officially affiliated with or endorsed by these organizations. Content provided as-is without warranty.
        </div>
      </div>
    </footer>
  );
};
