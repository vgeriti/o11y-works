import React, { useEffect, Component, ErrorInfo, ReactNode } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Ecosystem } from './pages/Ecosystem';
import { Knowledge } from './pages/Knowledge';
import { Community } from './pages/Community';
import { About } from './pages/About';
import { BlogIndex } from './pages/BlogIndex';
import { BlogPost } from './pages/BlogPost';
import { AuthorProfile } from './pages/AuthorProfile';
import { ContributorGuide } from './pages/ContributorGuide';
import { NotFound } from './pages/NotFound';
import { Keystatic } from '@keystatic/core/ui';
import keystaticConfig from '../keystatic.config';
import { ShieldAlert, RefreshCw } from 'lucide-react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class KeystaticErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Keystatic Admin Error Boundary Caught Exception:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#030712] text-gray-100 flex items-center justify-center p-6 font-mono">
          <div className="max-w-md w-full p-8 rounded-2xl bg-surface/90 border border-white/10 text-center shadow-2xl">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 mx-auto mb-4">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Keystatic Local Studio</h2>
            <p className="text-xs text-gray-400 leading-relaxed mb-6">
              {this.state.error?.message || 'Keystatic Local Studio initialized.'}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="w-full py-2.5 px-4 rounded-xl bg-brand-cyan text-background font-bold text-xs hover:bg-brand-cyan/90 transition-all flex items-center justify-center gap-2"
            >
              <RefreshCw className="w-4 h-4" /> Reload Local Studio
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Scroll to top automatically on route navigation
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export const App: React.FC = () => {
  const KeystaticAdminElement = (
    <KeystaticErrorBoundary>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <Keystatic config={keystaticConfig as any} />
    </KeystaticErrorBoundary>
  );

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Keystatic Local Studio UI (Full screen without site header/footer) */}
        <Route path="/admin" element={KeystaticAdminElement} />
        <Route path="/admin/*" element={KeystaticAdminElement} />

        {/* Standard Web Application Routes */}
        <Route
          path="*"
          element={
            <div className="min-h-screen flex flex-col bg-background text-gray-100 font-sans selection:bg-brand-cyan/20 selection:text-brand-cyan">
              <Header />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/ecosystem" element={<Ecosystem />} />
                  <Route path="/knowledge" element={<Knowledge />} />
                  <Route path="/blog" element={<BlogIndex />} />
                  <Route path="/blog/contribute" element={<ContributorGuide />} />
                  <Route path="/blog/author/:username" element={<AuthorProfile />} />
                  <Route path="/blog/:slug" element={<BlogPost />} />
                  <Route path="/community" element={<Community />} />
                  <Route path="/about" element={<About />} />
                  {/* Catch-all 404 Route */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
