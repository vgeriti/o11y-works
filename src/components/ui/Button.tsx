import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  to,
  href,
  icon,
  iconPosition = 'right',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#06b6d4] focus-visible:ring-offset-2 focus-visible:ring-offset-[#030712] active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none';

  const variantStyles = {
    primary: 'bg-white text-gray-950 hover:bg-gray-200 shadow-md hover:shadow-lg font-semibold',
    secondary: 'bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20',
    outline: 'bg-transparent text-gray-300 border border-white/15 hover:border-[#06b6d4]/40 hover:text-white hover:bg-[#06b6d4]/5',
    ghost: 'bg-transparent text-gray-400 hover:text-white hover:bg-white/5',
  };

  const sizeStyles = {
    sm: 'text-xs px-3 py-1.5 gap-1.5',
    md: 'text-sm px-4 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5',
  };

  const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  const linkTarget = href || to;

  if (linkTarget) {
    return (
      <Link href={linkTarget} className={combinedClasses}>
        {icon && iconPosition === 'left' && icon}
        <span>{children}</span>
        {icon && iconPosition === 'right' && icon}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {icon && iconPosition === 'left' && icon}
      <span>{children}</span>
      {icon && iconPosition === 'right' && icon}
    </button>
  );
};
