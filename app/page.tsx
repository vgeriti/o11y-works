'use client';

import React from 'react';
import { Header } from '../src/components/layout/Header';
import { Footer } from '../src/components/layout/Footer';
import { Home } from '../src/views/Home';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Home />
      </main>
      <Footer />
    </>
  );
}
