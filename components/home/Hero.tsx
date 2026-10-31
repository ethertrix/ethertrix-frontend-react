import Link from 'next/link';
import { ArrowUpRight, Sparkles, Globe, Cpu, ShieldCheck } from 'lucide-react';
import { CompanyProfile } from '@/lib/types';

interface HeroProps {
  company: CompanyProfile;
}

export default function Hero({ company }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32">
      {/* Background radial glows */}
      <div className="ambient-glow-emerald -top-24 left-1/4 -translate-x-1/2" />
      <div className="ambient-glow-blue -top-20 right-10" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Ethertrix LLP &bull; Chennai Operations</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-xs font-medium text-slate-300">
            <Globe className="h-3.5 w-3.5 text-cyan-400" />
            <span>Building SaaS Applications Across All Countries</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="mt-8 max-w-4xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl lg:leading-[1.1]">
            Engineering{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              High-Impact SaaS
            </span>{' '}
            Platforms for the World.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
            Ethertrix is a Chennai-headquartered software company engineering resilient multi-tenant SaaS products, real-time mobile platforms, and high-throughput cloud architectures for global enterprises.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="/products/sportse2e"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-emerald-500/25 hover:from-emerald-400 hover:to-teal-400 transition-all"
          >
            <Sparkles className="h-4 w-4" />
            <span>Discover SportsE2E (Our Product)</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <Link
            href="/work"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 hover:border-white/25 transition-all"
          >
            <span>Explore Case Studies</span>
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-400 hover:text-emerald-400 transition-colors pl-2"
          >
            <span>Schedule Discovery Call</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Dynamic Metrics Row */}
        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:mt-24">
          {company.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-panel relative overflow-hidden rounded-2xl p-6 transition-all hover:border-emerald-500/30"
            >
              <div className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm font-semibold text-emerald-400">
                {stat.label}
              </div>
              <div className="mt-1 text-xs text-slate-400 leading-snug">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Engineering Platform Pillars */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Cpu className="h-4 w-4 text-emerald-400" />
            <span className="font-medium text-slate-300">Modern Architecture:</span>
            <span>Next.js 16 &bull; Fastify 5 &bull; PostgreSQL &bull; Flutter Native</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-cyan-400" />
            <span className="font-medium text-slate-300">Target Reach:</span>
            <span>North America &bull; Europe &bull; Middle East &bull; APAC</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-400">&bull;</span>
            <span>Chennai Tech Operations Hub</span>
          </div>
        </div>
      </div>
    </section>
  );
}
