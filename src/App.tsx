import React, { useEffect } from 'react';
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
    </BrowserRouter>
  );
};
