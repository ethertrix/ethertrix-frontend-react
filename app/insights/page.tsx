import type { Metadata } from 'next';
import Link from 'next/link';
import { Sparkles, ArrowRight, BookOpen, Clock, Tag } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Insights & Architecture | Ethertrix',
  description:
    'Engineering insights, real-time sports operational architectures, and enterprise digitization case studies by the Ethertrix team.',
};

const articles = [
  {
    slug: 'why-we-built-ethertrix-sports-os',
    title: 'Why We Built Ethertrix Sports OS: Unifying Fragmented Sports Operations',
    category: 'Product Strategy',
    readTime: '6 min read',
    excerpt:
      'Tournament directors juggling paper draw sheets in the rain, club managers tracking fees on WhatsApp, and courtside referees struggling with signal drops. Here is the operational philosophy behind our flagship operating system.',
    date: 'October 2026',
  },
  {
    slug: 'sub-150ms-courtside-scoring-architecture',
    title: 'Sub-150ms Courtside Scoring: Real-Time Architecture with Fastify & WebSockets',
    category: 'System Architecture',
    readTime: '8 min read',
    excerpt:
      'How we decoupled our courtside mobile referee console from unpredictable arena networks using offline SQLite caching, monotonic revision clocks, and asynchronous Fastify WebSocket broadcast clusters.',
    date: 'September 2026',
  },
  {
    slug: 'eliminating-paper-manifests-in-fleet-operations',
    title: 'Eliminating Paper Manifests in Fleet Operations: A Field Study',
    category: 'Operations',
    readTime: '5 min read',
    excerpt:
      'Lessons learned from digitizing multi-depot bus transit manifests across regional hubs, and how offline-first OTP verification saved 15 minutes per transit trip.',
    date: 'August 2026',
  },
  {
    slug: 'designing-verified-athlete-passports',
    title: 'Designing Verified Athlete Passports for Grassroots & Federation Sports',
    category: 'Sports Technology',
    readTime: '7 min read',
    excerpt:
      'Why credential fraud and duplicate athlete records plague state tournaments, and how cryptographically verifiable athlete passports resolve governance bottlenecks.',
    date: 'July 2026',
  },
];

export default function InsightsPage() {
  return (
    <div className="py-16 lg:py-24 bg-[#060b13] text-white relative overflow-hidden">
      <div className="ambient-glow-emerald -top-20 left-1/4 opacity-40 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-300">
            <Sparkles className="h-3.5 w-3.5" />
            <span>THOUGHT LEADERSHIP &bull; ARCHITECTURE</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            Insights &amp; Engineering Perspectives.
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            Deep dives into operational workflows, real-time sports system architectures, and technical decisions from the Ethertrix team.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article) => (
            <div
              key={article.slug}
              className="rounded-3xl border border-white/10 bg-[#091222] p-8 flex flex-col justify-between space-y-6 hover:border-emerald-500/30 hover:bg-[#0b1628] transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="rounded-full bg-emerald-500/10 px-3 py-1 font-semibold text-emerald-400 border border-emerald-500/20">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-white hover:text-emerald-400 transition-colors">
                  {article.title}
                </h2>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              <div className="border-t border-white/5 pt-4 flex items-center justify-between text-xs">
                <span className="text-slate-500">{article.date}</span>
                <Link
                  href="/contact?intent=insights"
                  className="inline-flex items-center gap-1.5 font-bold uppercase tracking-wider text-emerald-400 hover:text-emerald-300"
                >
                  <span>Discuss Topic</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter / Contact Box */}
        <div className="rounded-3xl border border-white/10 bg-[#081120] p-8 lg:p-12 text-center max-w-3xl mx-auto space-y-4">
          <BookOpen className="h-8 w-8 text-emerald-400 mx-auto" />
          <h3 className="text-2xl font-bold text-white">
            Have a technical question on our architecture?
          </h3>
          <p className="text-sm text-slate-400">
            Our engineers love discussing distributed systems, tournament algorithms, and real-time operations.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-950 hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20"
            >
              <span>Connect with an Architect</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
