'use client';

import React from 'react';
import { Header } from '../../src/components/layout/Header';
import { Footer } from '../../src/components/layout/Footer';
import { Ecosystem } from '../../src/views/Ecosystem';

export default function EcosystemPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Ecosystem />
      </main>
      <Footer />
    </>
  );
}
