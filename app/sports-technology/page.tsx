import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Calendar,
  Trophy,
  UserCheck,
  Activity,
  Sliders,
  Users,
  MapPin,
  BarChart3,
  ArrowRight,
  Sparkles,
  Building2,
  Shield,
  Clock,
  CheckCircle2,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sports Technology & Operations | Ethertrix',
  description:
    'Dedicated technology for sports organizations, tournament directors, leagues, and sports facilities: bracket engines, courtside referee scoring, athlete passports, and venue optimization.',
};

const sportsPillars = [
  {
    title: 'Sports Event Technology',
    icon: Calendar,
    headline: 'Unified On-Ground & Digital Infrastructure',
    description: 'Software systems that connect registration gates, bib issuance kiosks, courtside scoring tablets, and digital display scoreboards without latency or offline failure.',
    features: ['Real-time sync across multi-court venues', 'Offline caching for field connectivity lapses', 'Direct timing & RFID hardware integration hooks'],
  },
  {
    title: 'Tournament & Competition Management',
    icon: Trophy,
    headline: 'Algorithmic Draw & Bracket Engine',
    description: 'Automated bracket generation supporting single elimination, double elimination, Swiss rounds, and multi-week round-robin leagues with real-time seed placements.',
    features: ['Instant tie-breaker calculations', 'Automated walkover and penalty processing', 'Live bracket progression broadcast for spectators'],
  },
  {
    title: 'Event Registration Systems',
    icon: UserCheck,
    headline: 'High-Volume Participant Entry Engines',
    description: 'Custom entry portals engineered to withstand thousands of concurrent registrations with zero duplicate bib allocations, automated payment receipts, and digital medical waivers.',
    features: ['Dynamic category quota caps & waiting lists', 'Integrated payment processing (Razorpay, Stripe)', 'Instant QR entry badges & confirmation passes'],
  },
  {
    title: 'Participant & Athlete Passports',
    icon: Users,
    headline: 'Verified Athletic Credentials & History',
    description: 'Centralized athlete profiles maintaining verified historical match statistics, state ranking points, medical clearances, and age group verification documents.',
    features: ['Tamper-proof digital athlete passports', 'Cross-tournament career ranking leaderboards', 'Automated certificate & medal issuance'],
  },
  {
    title: 'Fixtures & Smart Scheduling',
    icon: Clock,
    headline: 'Conflict-Free Court & Field Allocation',
    description: 'Algorithmic scheduling engine that assigns courts, pitches, umpires, and rest intervals, eliminating double-bookings and multi-match fatigue.',
    features: ['Rest-interval enforcement between matches', 'Multi-court floodlight optimization', 'Automated SMS/WhatsApp notification on match call'],
  },
  {
    title: 'Venue & Facility Management',
    icon: MapPin,
    headline: 'Turf & Court Yield Optimization',
    description: 'Hourly court booking calendars, academy batch allocations, lighting timer integrations, and recurring membership billing for commercial facilities.',
    features: ['Real-time court reservation grid', 'Peak-hour dynamic pricing engines', 'Access control and coach roster management'],
  },
];

export default function SportsTechnologyPage() {
  return (
    <div className="py-16 lg:py-24 bg-[#060b13] text-white relative overflow-hidden">
      <div className="ambient-glow-emerald -top-20 left-1/3 opacity-50 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-24">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-300">
            <Sparkles className="h-3.5 w-3.5" />
            <span>DEDICATED SPORTS TECHNOLOGY HUB</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            Technology for the Sports Ecosystem.
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            Ethertrix combines modern software engineering with a deep understanding of operational workflows to help sports organizations, tournament directors, and facility owners digitize every aspect of their operations.
          </p>
        </div>

        {/* Flagship Sports OS Showcase Callout */}
        <div className="rounded-3xl border border-emerald-500/30 bg-gradient-to-r from-[#0c182a] via-[#091222] to-[#070f1e] p-8 lg:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="rounded bg-emerald-500/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-300 border border-emerald-500/30">
                FLAGSHIP PRODUCT
              </span>
              <h2 className="text-3xl font-extrabold text-white">
                Ethertrix Sports OS
              </h2>
              <p className="text-base text-slate-300 leading-relaxed">
                Rather than cobbling together disparate spreadsheets, WhatsApp groups, and generic forms, modern organizations run on <strong className="text-white">Ethertrix Sports OS</strong>—our unified operating system for events, brackets, courtside scoring, athlete passports, and venue management.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <Link
                href="/products/sports-os"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-8 py-4 text-xs font-bold uppercase tracking-wider text-slate-950 hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20"
              >
                <span>Explore Sports OS</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* 6 In-Depth Sports Technology Pillars */}
        <div className="space-y-10">
          <div className="border-b border-white/10 pb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              FIELD-TESTED CAPABILITIES
            </span>
            <h2 className="text-3xl font-extrabold text-white mt-2">
              Transforming Every Dimension of Sports Operations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sportsPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="rounded-3xl border border-white/10 bg-[#091222] p-8 flex flex-col justify-between space-y-6 hover:border-emerald-500/30 transition-all"
                >
                  <div className="space-y-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{pillar.title}</h3>
                    <p className="text-xs font-semibold text-emerald-400">{pillar.headline}</p>
                    <p className="text-xs text-slate-300 leading-relaxed">{pillar.description}</p>
                  </div>

                  <div className="border-t border-white/5 pt-4 space-y-2">
                    {pillar.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="rounded-3xl border border-white/10 bg-[#081120] p-8 lg:p-12 text-center max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Modernize Your Sports Organization Today
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Talk with our sports technology architects to schedule an operational assessment or platform pilot.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact?interest=sports-technology"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-950 hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20"
            >
              <span>Talk to Sports Tech Team</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
