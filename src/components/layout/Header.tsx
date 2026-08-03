import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import { Logo } from '../ui/Logo';
import { Button } from '../ui/Button';
import { Menu, X, PenSquare } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Ecosystem', path: '/ecosystem' },
  { name: 'Knowledge', path: '/knowledge' },
  { name: 'Blog', path: '/blog' },
  { name: 'Community', path: '/community' },
  { name: 'About', path: '/about' },
];

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isBlogRoute = location.pathname.startsWith('/blog');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-white/10 shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo + Context Badge */}
          <div className="flex items-center gap-3">
            <Logo />
            {isBlogRoute && (
              <span className="hidden sm:inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/30 tracking-wider">
                BLOG
              </span>
            )}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-surface/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-3.5 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive || (item.path === '/blog' && isBlogRoute)
                      ? 'text-white bg-white/10 shadow-sm border border-white/10 text-brand-cyan'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              to="/blog/contribute"
              variant="primary"
              size="sm"
              icon={<PenSquare className="w-3.5 h-3.5" />}
            >
              Contribute
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-brand-cyan"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-surface/95 backdrop-blur-xl border-b border-white/10 p-6 shadow-2xl animate-fadeIn">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                    isActive || (item.path === '/blog' && isBlogRoute)
                      ? 'text-white bg-brand-cyan/20 border border-brand-cyan/40 font-semibold'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
              <Link
                to="/blog/contribute"
                className="w-full text-center px-4 py-3 rounded-lg text-sm font-medium bg-brand-cyan text-background font-semibold hover:bg-brand-cyan/90 transition-colors"
              >
                ✍️ Contributor Portal & Guidelines
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
