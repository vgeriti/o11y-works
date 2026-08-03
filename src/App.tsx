import React, { useEffect, Suspense } from 'react';
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
import keystaticConfig from '../keystatic.config';

// Lazy-load Keystatic Admin UI to keep main web app bundle super lightweight
const KeystaticAdmin = React.lazy(() =>
  import('@keystatic/core/ui').then((module) => ({
    default: () => {
      const Component = module.Keystatic;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return <Component config={keystaticConfig as any} />;
    },
  }))
);

// Scroll to top automatically on route navigation
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Keystatic Admin UI (Lazy loaded, full page without site header/footer) */}
        <Route
          path="/admin/*"
          element={
            <Suspense
              fallback={
                <div className="min-h-screen bg-[#030712] text-gray-100 flex items-center justify-center font-mono text-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 border-2 border-brand-cyan border-t-transparent rounded-full animate-spin" />
                    <span>Loading Keystatic Admin Portal...</span>
                  </div>
                </div>
              }
            >
              <KeystaticAdmin />
            </Suspense>
          }
        />

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
                  <Route path="/blog/:slug" element={<BlogPost />} />
                  <Route path="/blog/author/:username" element={<AuthorProfile />} />
                  <Route path="/blog/contribute" element={<ContributorGuide />} />
                  <Route path="/community" element={<Community />} />
                  <Route path="/about" element={<About />} />
                  {/* Catch-all redirect to Home */}
                  <Route path="*" element={<Home />} />
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

export default App;
