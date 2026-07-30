import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'cyan' | 'blue' | 'violet' | 'emerald' | 'neutral' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'cyan',
  size = 'md',
  className = '',
}) => {
  const variantStyles = {
    cyan: 'bg-brand-cyan/10 text-brand-cyan border-brand-cyan/20',
    blue: 'bg-brand-blue/10 text-brand-blue border-brand-blue/20',
    violet: 'bg-brand-violet/10 text-brand-violet border-brand-violet/20',
    emerald: 'bg-brand-emerald/10 text-brand-emerald border-brand-emerald/20',
    neutral: 'bg-white/5 text-gray-300 border-white/10',
    outline: 'bg-transparent text-gray-400 border-white/15',
  };

  const sizeStyles = {
    sm: 'text-[10px] px-2 py-0.5 tracking-wider',
    md: 'text-xs px-2.5 py-1 tracking-wide',
  };

  return (
    <span
      className={`inline-flex items-center font-mono font-medium uppercase border rounded-full ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </span>
  );
};
