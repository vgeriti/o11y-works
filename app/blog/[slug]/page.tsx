import React from 'react';
import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../../keystatic.config';
import { Header } from '../../../src/components/layout/Header';
import { Footer } from '../../../src/components/layout/Footer';
import { BlogPost } from '../../../src/views/BlogPost';

const reader = createReader(process.cwd(), keystaticConfig);

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await reader.collections.blog.read(slug);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const rawContent = post ? await (post as any).content() : null;

  const articleData = post
    ? {
        slug,
        title: post.title,
        summary: post.summary || '',
        publishedDate: post.publishedDate || '2026-08-03',
        author: post.author || 'Venkatesh Geriti',
        authorId: 'vgeriti',
        authorRole: 'Principal Observability Architect',
        authorBio:
          'Building open-source telemetry collectors, log processors, and monitoring automation tools.',
        tool: post.tool || 'OTel',
        signal: post.signal || 'Traces',
        type: post.type || 'Playbook',
        readTimeMinutes: post.readTimeMinutes || 8,
        coverImage:
          post.coverImage ||
          'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
        content: rawContent,
      }
    : null;

  return (
    <>
      <Header />
      <main className="flex-grow">
        <BlogPost articleData={articleData} fallbackSlug={slug} />
      </main>
      <Footer />
    </>
  );
}
