import React from 'react';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'o11y.works | Practical Knowledge. Open Tools. Better Observability.',
  description: 'A premium, community-driven observability foundation providing practical knowledge, vendor-neutral engineering practices, and open developer resources.',
  keywords: ['observability', 'o11y', 'OpenTelemetry', 'Prometheus', 'Grafana', 'SRE', 'DevOps', 'telemetry', 'metrics', 'logging', 'tracing', 'eBPF'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#030712] text-gray-100 font-sans antialiased selection:bg-[#06b6d4]/20 selection:text-[#06b6d4] min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
