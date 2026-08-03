'use client';

import React from 'react';
import { Header } from '../../src/components/layout/Header';
import { Footer } from '../../src/components/layout/Footer';
import { Community } from '../../src/views/Community';

export default function CommunityPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Community />
      </main>
      <Footer />
    </>
  );
}
