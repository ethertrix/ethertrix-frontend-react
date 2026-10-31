import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Trophy,
  Sparkles,
  Calendar,
  Users,
  Activity,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Layers,
  Smartphone,
  Server,
  Database,
  ShieldCheck,
} from 'lucide-react';
import { getProductBySlug } from '@/lib/api';

export const metadata: Metadata = {
  title: 'SportsE2E - A Sports Operating Platform | Ethertrix',
  description:
    'SportsE2E is the flagship sports operating platform engineered by Ethertrix LLP for tournaments, academies, courtside scoring, and venue bookings.',
};

export const revalidate = 60;

export default async function SportsE2EPage() {
  const product = await getProductBySlug('sportse2e');

  return (
    <div className="py-16 lg:py-24 relative overflow-hidden bg-[#060b13]">
      <div className="ambient-glow-emerald -top-20 left-1/3 -translate-x-1/2" />
      <div className="ambient-glow-blue top-1/2 right-10" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
          <Link href="/" className="hover:text-white">Home</Link>
          <span>/</span>
          <span className="text-emerald-400">Products</span>
          <span>/</span>
          <span className="text-white">SportsE2E</span>
        </div>

        {/* Hero Banner */}
        <div className="mt-8 max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-300">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Ethertrix Flagship In-House Product</span>
          </div>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
            SportsE2E &bull; A Complete Sports Operating Platform
          </h1>
          <p className="mt-6 text-xl text-slate-300 leading-relaxed max-w-3xl">
            {product?.description ||
              'SportsE2E is an end-to-end sports operating system designed for federations, academies, tournament organizers, and multi-sport facilities. It unifies tournament brackets, courtside live scoring, player credentials, and venue bookings into one high-availability ecosystem.'}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/contact?product=sportse2e"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-emerald-500/25 hover:from-emerald-400 hover:to-teal-400 transition-all"
            >
              <span>Schedule Live SportsE2E Demo</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>

            <Link
              href="#modules"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-all"
            >
              <span>Explore Platform Modules</span>
            </Link>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {(product?.metrics || [
            { label: 'Event Latency', value: '< 150ms' },
            { label: 'Matches Scored', value: '25,000+' },
            { label: 'Concurrent Fans', value: '50K+' },
            { label: 'Scheduling Efficiency', value: '10x Faster' },
          ]).map((metric, idx) => (
            <div key={idx} className="glass-panel rounded-2xl p-6 border border-white/10">
              <div className="text-3xl font-extrabold text-white">{metric.value}</div>
              <div className="mt-1 text-xs text-emerald-400 font-medium">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Modules Section */}
        <section id="modules" className="mt-28">
          <div className="border-b border-white/10 pb-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
              Complete Feature Suite
            </div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Four Core Engines In One Unified Platform
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {(product?.modules || [
              {
                name: 'Tournament & League Engine',
                summary: 'Automate fixture creation, referee assignment, rule engines, and point table computations with instant tie-breaker logic.',
                features: ['Automated fixtures & brackets', 'Umpire / Referee mobile console', 'Live digital scorecards', 'Instant penalty & points deduction calculation'],
              },
              {
                name: 'Academy & Athlete Management',
                summary: 'Empower coaches and academy directors to run day-to-day batches, track athlete physical assessments, and automate billing.',
                features: ['Coach-student batch allocations', 'Daily attendance & biometric integration', 'Skill rating & video assessment uploads', 'Automated recurring tuition invoices'],
              },
              {
                name: 'Venue & Turf Booking Hub',
                summary: 'Manage multi-court facilities, lighting controls, membership plans, and hourly bookings with zero double-booking.',
                features: ['Real-time slot calendar', 'Dynamic peak-hour pricing', 'Split payment & group bookings', 'Automated SMS / WhatsApp gate passes'],
              },
              {
                name: 'Live Match Center & Fan Experience',
                summary: 'Broadcast live ball-by-ball / point-by-point action to thousands of spectators with sub-second WebSocket updates.',
                features: ['Low-latency WebSocket streaming', 'Sponsor overlay management', 'Instant match highlights & shareable cards', 'Federation leaderboards'],
              },
            ]).map((module, mIdx) => (
              <div
                key={mIdx}
                className="glass-panel rounded-3xl p-8 border border-white/10 flex flex-col justify-between hover:border-emerald-500/30 transition-all"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                      {mIdx === 0 && <Trophy className="h-5 w-5" />}
                      {mIdx === 1 && <Users className="h-5 w-5" />}
                      {mIdx === 2 && <Calendar className="h-5 w-5" />}
                      {mIdx === 3 && <Activity className="h-5 w-5" />}
                    </div>
                    <h3 className="text-xl font-bold text-white">{module.name}</h3>
                  </div>

                  <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                    {module.summary}
                  </p>

                  <div className="mt-6 space-y-2 border-t border-white/5 pt-4">
                    {module.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-300">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 border-t border-white/5 pt-4">
                  <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider">
                    Full Web &amp; Mobile Support Included
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Architecture Deep Dive */}
        <section className="mt-28 rounded-3xl border border-white/10 bg-[#091120] p-8 lg:p-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold text-cyan-300">
              <Cpu className="h-3.5 w-3.5" />
              <span>Under the Hood</span>
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Engineered For High-Concurrency Sports Events
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              When thousands of fans load the live scorecard simultaneously, SportsE2E never bottlenecks.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                <Layers className="h-5 w-5" />
              </div>
              <h4 className="text-base font-bold text-white">Next.js Web Tier</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                App Router architecture deployed to edge CDNs for instant loading of spectator leaderboards and admin dashboards.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                <Smartphone className="h-5 w-5" />
              </div>
              <h4 className="text-base font-bold text-white">Flutter Native Apps</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Offline-tolerant courtside referee tablets and mobile apps for athletes with push notifications and live score entry.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                <Server className="h-5 w-5" />
              </div>
              <h4 className="text-base font-bold text-white">Fastify Event Cluster</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Asynchronous event microservices maintaining WebSocket connections for sub-150ms ball-by-ball updates.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                <Database className="h-5 w-5" />
              </div>
              <h4 className="text-base font-bold text-white">PostgreSQL &amp; Redis</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                ACID-guaranteed tournament fixtures, slot concurrency locks with Redis, and JSONB schemas for dynamic sport rules.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <div className="mt-24 rounded-3xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/40 via-teal-950/30 to-[#060b13] p-10 sm:p-14 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1 text-xs font-semibold text-emerald-300">
            <ShieldCheck className="h-4 w-4" />
            <span>Ready to Deploy or White-Label</span>
          </div>

          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-white">
            Bring SportsE2E to Your Federation or Facility.
          </h2>
          <p className="mt-4 text-base text-slate-300 max-w-2xl mx-auto">
            Ethertrix offers turn-key SaaS deployment, custom rule configurations, and dedicated white-label mobile/web builds for sports organizations worldwide.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/contact?product=sportse2e"
              className="rounded-xl bg-emerald-500 px-8 py-3.5 text-sm font-bold text-slate-950 hover:bg-emerald-400 shadow-lg shadow-emerald-500/25 transition-all"
            >
              Get in Touch with Ethertrix Engineering
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
