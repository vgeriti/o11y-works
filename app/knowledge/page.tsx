'use client';

import React from 'react';
import { Header } from '../../src/components/layout/Header';
import { Footer } from '../../src/components/layout/Footer';
import { Knowledge } from '../../src/views/Knowledge';

export default function KnowledgePage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Knowledge />
      </main>
      <Footer />
    </>
  );
}
