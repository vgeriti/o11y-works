'use client';

import React from 'react';
import { Header } from '../../../../src/components/layout/Header';
import { Footer } from '../../../../src/components/layout/Footer';
import { AuthorProfile } from '../../../../src/views/AuthorProfile';

export default function AuthorProfilePage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <AuthorProfile />
      </main>
      <Footer />
    </>
  );
}
