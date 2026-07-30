import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glow?: 'none' | 'cyan' | 'blue' | 'violet';
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverEffect = true,
  glow = 'none',
}) => {
  const glowStyles = {
    none: '',
    cyan: 'hover:shadow-glow-cyan hover:border-brand-cyan/40',
    blue: 'hover:shadow-[0_0_25px_-5px_rgba(59,130,246,0.25)] hover:border-brand-blue/40',
    violet: 'hover:shadow-glow-violet hover:border-brand-violet/40',
  };

  return (
    <div
      className={`relative rounded-xl bg-glass-card p-6 transition-all duration-300 ${
        hoverEffect ? 'hover:-translate-y-1 hover:border-white/20' : ''
      } ${glowStyles[glow]} ${className}`}
    >
      {/* Subtle top border accent highlight */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none rounded-t-xl" />
      {children}
    </div>
  );
};
