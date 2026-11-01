import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'ETHERTRIX | Technology That Powers Sports Operations',
  description:
    'A technology company building SaaS products and digital solutions, with a strong focus on the sports technology ecosystem and the flagship Ethertrix Sports OS.',
  keywords: [
    'Ethertrix',
    'Ethertrix Sports OS',
    'Sports Technology',
    'Sports Operations',
    'Tournament Management',
    'Competition Management',
    'Athlete Passports',
    'Courtside Scoring',
    'SaaS Products',
    'Digital Solutions',
    'Chennai Software Engineering',
    'Next.js Fastify PostgreSQL Flutter',
  ],
  authors: [{ name: 'ETHERTRIX', url: 'https://www.ethertrix.com' }],
  metadataBase: new URL('https://www.ethertrix.com'),
  openGraph: {
    title: 'ETHERTRIX | Technology That Powers Sports Operations',
    description:
      'A technology company building products and powering the next generation of sports operations.',
    url: 'https://www.ethertrix.com',
    siteName: 'ETHERTRIX',
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
