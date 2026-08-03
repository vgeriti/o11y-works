import React from 'react';
import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../keystatic.config';
import { Header } from '../../src/components/layout/Header';
import { Footer } from '../../src/components/layout/Footer';
import { BlogIndex } from '../../src/views/BlogIndex';

const reader = createReader(process.cwd(), keystaticConfig);

export default async function BlogPage() {
  const posts = await reader.collections.blog.all();

  const articles = posts.map((post) => ({
    slug: post.slug,
    title: post.entry.title,
    summary: post.entry.summary || '',
    publishedDate: post.entry.publishedDate || '2026-08-03',
    author: post.entry.author || 'Venkatesh Geriti',
    tool: post.entry.tool || 'OTel',
    signal: post.entry.signal || 'Traces',
    type: post.entry.type || 'Playbook',
    featured: post.entry.featured || false,
    readTimeMinutes: post.entry.readTimeMinutes || 8,
    coverImage:
      post.entry.coverImage ||
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
  }));

  return (
    <>
      <Header />
      <main className="flex-grow">
        <BlogIndex articles={articles} />
      </main>
      <Footer />
    </>
  );
}
