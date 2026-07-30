import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', showTagline = false }) => {
  return (
    <Link 
      to="/" 
      className={`group inline-flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan rounded-md p-1 transition-all ${className}`}
      aria-label="o11y.works Home"
    >
      {/* Telemetry Signal Node Icon */}
      <div className="relative flex items-center justify-center w-7 h-7 rounded-lg bg-surface border border-white/10 group-hover:border-brand-cyan/40 transition-colors">
        {/* Signal Node Dot */}
        <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
        
        {/* Subtle Outer Telemetry Pulse */}
        <span className="absolute inset-0 rounded-lg border border-brand-cyan/30 animate-ping opacity-25 pointer-events-none" />
      </div>

      {/* Brand Text */}
      <div className="flex flex-col">
        <div className="flex items-center font-mono font-semibold tracking-tight text-lg text-white group-hover:text-gray-200 transition-colors">
          <span>o11y</span>
          <span className="text-brand-cyan font-bold">.</span>
          <span className="text-gray-300 font-normal group-hover:text-white transition-colors">works</span>
        </div>
        {showTagline && (
          <span className="text-[10px] uppercase tracking-widest font-mono text-gray-400 font-medium">
            Open Foundation
          </span>
        )}
      </div>
    </Link>
  );
};
