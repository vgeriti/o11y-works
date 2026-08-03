import React from 'react';
import { Link } from 'react-router-dom';
import { RadioTower, Home, BookOpen, ArrowRight } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[80vh] bg-[#030712] text-gray-100 flex items-center justify-center pt-28 pb-20 relative overflow-hidden">
      {/* Ambient Top Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-radial-gradient opacity-15 pointer-events-none" />

      <div className="max-w-xl mx-auto px-4 text-center relative z-10">
        {/* Glow Icon Header */}
        <div className="w-16 h-16 rounded-2xl bg-[#06b6d4]/10 border border-[#06b6d4]/30 flex items-center justify-center text-[#06b6d4] mx-auto mb-6 shadow-[0_0_30px_rgba(6,182,212,0.15)] animate-pulse">
          <RadioTower className="w-8 h-8" />
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#06b6d4]/10 border border-[#06b6d4]/20 text-[#06b6d4] text-xs font-mono mb-4">
          <span>HTTP 404 — ROUTE UNRESOLVED</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 font-mono">
          <span>404</span> <span className="text-gradient-cyan">Signal Lost</span>
        </h1>

        {/* Message */}
        <p className="text-gray-400 text-base leading-relaxed font-sans mb-8">
          The requested telemetry route or runbook URL could not be found. It may have been relocated, renamed, or is currently unindexed.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#06b6d4] text-[#030712] font-bold text-xs font-mono hover:bg-[#06b6d4]/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#06b6d4]/20"
          >
            <Home className="w-4 h-4" /> Return to Home
          </Link>

          <Link
            to="/blog"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-surface border border-white/10 text-gray-200 font-semibold text-xs font-mono hover:border-[#06b6d4]/40 hover:text-white transition-all flex items-center justify-center gap-2"
          >
            <BookOpen className="w-4 h-4 text-[#06b6d4]" /> Explore Runbooks <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
