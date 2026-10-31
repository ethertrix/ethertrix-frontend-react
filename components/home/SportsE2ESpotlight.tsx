import Link from 'next/link';
import { Sparkles, Trophy, Calendar, Users, Activity, ArrowUpRight, CheckCircle2, Layers } from 'lucide-react';
import { Product } from '@/lib/types';

interface SportsE2EProps {
  product?: Product;
}

export default function SportsE2ESpotlight({ product }: SportsE2EProps) {
  const highlights = product?.highlights || [
    'Multi-sport tournament bracket engine with auto-scheduling and knockout / round-robin support',
    'Real-time courtside match scoring engine with low-latency live audience feeds',
    'Academy & student lifecycle management with attendance, batch rosters, and fees tracking',
    'Dynamic venue & turf slot booking with automated payment gateways and slot conflict prevention',
    'Player passports: verified athletic credentials, match statistics, and career leaderboards',
    'Multi-tenant architecture allowing clubs and state bodies to brand their own white-label portals',
  ];

  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-b from-[#060b13] via-[#091222] to-[#060b13]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-300">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Flagship In-House Product</span>
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              SportsE2E &bull; Sports Operating Platform
            </h2>
            <p className="mt-3 text-base text-slate-300 max-w-2xl">
              Engineered and owned by Ethertrix: the definitive sports management platform unifying tournaments, academy operations, courtside scoring, and venue bookings.
            </p>
          </div>

          <Link
            href="/products/sportse2e"
            className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-500 hover:text-slate-950 transition-all self-start md:self-auto shrink-0"
          >
            <span>Explore Full SportsE2E Product</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Feature Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Main Showcase Panel */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <Trophy className="h-64 w-64 text-emerald-400" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400">
                <Layers className="h-4 w-4" />
                <span>Next-Gen Sports Architecture</span>
              </div>
              <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                Replace 5 Disconnected Tools With One Real-Time Sports Operating Engine.
              </h3>
              <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                Federations and academies traditionally juggle paper tournament fixtures, separate WhatsApp groups, third-party payment links, and offline attendance registers. SportsE2E consolidates every facet of competitive sports into an interactive, cloud-backed ecosystem.
              </p>

              <div className="mt-6 space-y-3">
                {highlights.slice(0, 4).map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-200">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance Metrics Pill */}
            <div className="mt-8 relative z-10 grid grid-cols-2 gap-4 border-t border-white/10 pt-6 sm:grid-cols-4">
              <div>
                <div className="text-2xl font-bold text-white">&lt; 150ms</div>
                <div className="text-xs text-slate-400">Live Scoring Latency</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-emerald-400">25K+</div>
                <div className="text-xs text-slate-400">Matches Scored</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">50K+</div>
                <div className="text-xs text-slate-400">Concurrent Fans</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-cyan-400">10x</div>
                <div className="text-xs text-slate-400">Faster Scheduling</div>
              </div>
            </div>
          </div>

          {/* Sub-modules Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            <div className="glass-panel rounded-2xl p-6 hover:border-emerald-500/40 transition-all">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                  <Trophy className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Tournament &amp; League Engine</h4>
                  <span className="text-xs text-slate-400">Automated brackets, knockouts, round-robin &amp; points tables</span>
                </div>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-slate-300">
                Umpire/referee mobile tablet scoring console that calculates tie-breakers, bonus points, and disciplinary cards in real time.
              </p>
            </div>

            <div className="glass-panel rounded-2xl p-6 hover:border-emerald-500/40 transition-all">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Academy &amp; Athlete Management</h4>
                  <span className="text-xs text-slate-400">Student lifecycle, batches, attendance &amp; tuition billing</span>
                </div>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-slate-300">
                Biometric attendance, coach ratings, video assessment uploads, and recurring tuition billing automation for sports academies.
              </p>
            </div>

            <div className="glass-panel rounded-2xl p-6 hover:border-emerald-500/40 transition-all">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Venue &amp; Turf Slot Booking</h4>
                  <span className="text-xs text-slate-400">Multi-court management, peak pricing &amp; gate access</span>
                </div>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-slate-300">
                Instant slot reservation, split payments, floodlight control scheduling, and conflict-free booking for facility operators.
              </p>
            </div>

            <div className="glass-panel rounded-2xl p-6 hover:border-emerald-500/40 transition-all">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                  <Activity className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Live Match Center &amp; Fan Web</h4>
                  <span className="text-xs text-slate-400">Sub-second WebSockets &amp; digital federation stream</span>
                </div>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-slate-300">
                Broadcast live point-by-point action to thousands of spectators with automated digital social scorecards and sponsor overlays.
              </p>
            </div>
          </div>
        </div>

        {/* Multi-Platform Availability Banner */}
        <div className="mt-8 rounded-2xl border border-emerald-500/20 bg-emerald-950/20 p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-3 w-3 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm font-semibold text-white">
              SportsE2E is Available as White-Label SaaS:
            </span>
            <span className="text-xs text-slate-300">
              Next.js Web Administration Portal &bull; iOS &amp; Android Apps &bull; Referee Tablets
            </span>
          </div>
          <Link
            href="/contact?product=sportse2e"
            className="rounded-xl bg-emerald-500 px-4 py-2 text-xs font-bold text-slate-950 hover:bg-emerald-400 transition-colors shrink-0"
          >
            Request SportsE2E Platform Demo
          </Link>
        </div>
      </div>
    </section>
  );
}
