'use client';

import React from 'react';
import { Header } from '../../src/components/layout/Header';
import { Footer } from '../../src/components/layout/Footer';
import { About } from '../../src/views/About';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <About />
      </main>
      <Footer />
    </>
  );
}
