'use client';

import React from 'react';
import { Header } from '../../../src/components/layout/Header';
import { Footer } from '../../../src/components/layout/Footer';
import { ContributorGuide } from '../../../src/views/ContributorGuide';

export default function ContributorPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <ContributorGuide />
      </main>
      <Footer />
    </>
  );
}
