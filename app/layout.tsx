import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Ethertrix LLP | Building Global SaaS Applications | Chennai, India',
  description:
    'Ethertrix LLP is a Chennai-based software engineering company building mission-critical SaaS platforms, SportsE2E sports operating system, matchmaking engines, fleet management, and legal tech systems across all countries.',
  keywords: [
    'Ethertrix',
    'Ethertrix LLP',
    'Chennai SaaS company',
    'SportsE2E',
    'Sports Operating Platform',
    'Match Making Applications',
    'Fleet Management Application',
    'Legal Services Application',
    'Next.js Fastify PostgreSQL',
    'Global SaaS development',
  ],
  authors: [{ name: 'Ethertrix LLP', url: 'https://www.ethertrix.com' }],
  metadataBase: new URL('https://www.ethertrix.com'),
  openGraph: {
    title: 'Ethertrix LLP | Engineering High-Impact SaaS Platforms',
    description:
      'Registered software firm in Chennai building global SaaS platforms. Home of SportsE2E Sports Operating Platform.',
    url: 'https://www.ethertrix.com',
    siteName: 'Ethertrix',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen flex flex-col bg-[#060b13] text-slate-100 antialiased selection:bg-emerald-500/20 selection:text-emerald-300">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
