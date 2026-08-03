'use client';

import React from 'react';
import { Header } from '../../../src/components/layout/Header';
import { Footer } from '../../../src/components/layout/Footer';
import { BlogPost } from '../../../src/views/BlogPost';

export default function BlogPostPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <BlogPost />
      </main>
      <Footer />
    </>
  );
}
