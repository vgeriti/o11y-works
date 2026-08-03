'use client';

import React from 'react';
import { Header } from '../../src/components/layout/Header';
import { Footer } from '../../src/components/layout/Footer';
import { BlogIndex } from '../../src/views/BlogIndex';

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <BlogIndex />
      </main>
      <Footer />
    </>
  );
}
