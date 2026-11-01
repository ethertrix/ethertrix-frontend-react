import { Metadata } from 'next';
import Link from 'next/link';
import {
  Sparkles,
  ArrowRight,
  Calendar,
  Trophy,
  UserCheck,
  Users,
  Shield,
  Clock,
  MapPin,
  CreditCard,
  Activity,
  Award,
  MessageSquare,
  BarChart3,
  Building2,
  CheckCircle2,
  Cpu,
  Layers,
  Smartphone,
  Database,
} from 'lucide-react';
import { fallbackSportsOS } from '@/lib/fallback-data';

export const metadata: Metadata = {
  title: 'Ethertrix Sports OS | One Operating System for Modern Sports Organizations',
  description:
    'Ethertrix Sports OS is a centralized digital operating system bringing event management, draws, registrations, courtside referee scoring, venue bookings, and athlete passports together into one connected platform.',
};

export default function SportsOSPage() {
  const product = fallbackSportsOS;

  return (
    <div className="flex flex-col min-h-screen bg-[#060b13] text-white">
      {/* Product Hero */}
      <section className="relative pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden border-b border-white/[0.08]">
        <div className="ambient-glow-emerald top-0 left-1/2 -translate-x-1/2 opacity-60 pointer-events-none" />
        <div className="ambient-glow-blue top-40 right-10 opacity-30 pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-400">
              <Sparkles className="h-4 w-4" />
              <span>{product.label}</span>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl leading-[1.12]">
              {product.name}
            </h1>

            <p className="text-xl sm:text-2xl font-semibold text-emerald-400">
              {product.headline}
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-slate-300">
              {product.subheadline}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                href="/contact?interest=sports-os-demo"
                className="group inline-flex items-center gap-2 rounded-full bg-emerald-500 px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-slate-950 hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20"
              >
                <span>Request Platform Demo</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#capabilities"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white hover:bg-white/10 transition-all"
              >
                <span>View Capabilities</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 10 Connected Ecosystem Nodes */}
      <section className="py-20 lg:py-28 border-b border-white/[0.08] bg-[#070e1a]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              UNIFIED ECOSYSTEM
            </span>
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              10 Connected Operational Nodes
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Ethertrix Sports OS synchronizes every aspect of your sports operations into an integrated database.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            {product.ecosystemNodes.map((node, idx) => (
              <div
                key={node}
                className="rounded-2xl border border-white/5 bg-[#091222] p-6 text-center space-y-2 hover:border-emerald-500/30 transition-all"
              >
                <span className="text-xs font-mono font-bold text-emerald-400">0{idx + 1}</span>
                <h3 className="text-base font-bold text-white">{node}</h3>
                <span className="block h-1 w-6 mx-auto rounded-full bg-emerald-500/40" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities Breakdown */}
      <section id="capabilities" className="py-20 lg:py-28 border-b border-white/[0.08] bg-[#060b13]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              DETAILED SPECIFICATIONS
            </span>
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Platform Capabilities
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Everything required to plan, schedule, officiate, and analyze professional sports operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.capabilities.map((cap) => (
              <div
                key={cap.id}
                className="rounded-2xl border border-white/5 bg-[#091222] p-6 space-y-3 hover:border-emerald-500/30 transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-400 border border-emerald-500/20">
                    {cap.category}
                  </span>
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                </div>
                <h3 className="text-base font-bold text-white">{cap.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audiences */}
      <section id="audiences" className="py-20 lg:py-28 border-b border-white/[0.08] bg-[#070e1a]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              BUILT FOR SPORT OPERATORS
            </span>
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Who We Serve
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Scalable from single-venue independent academies to multi-thousand participant national tournaments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.targetAudiences.map((aud) => (
              <div
                key={aud.title}
                className="rounded-2xl border border-white/5 bg-[#091222] p-6 space-y-2 hover:border-emerald-500/30 transition-all"
              >
                <h3 className="text-base font-bold text-white">{aud.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {aud.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Technical Architecture */}
      <section id="architecture" className="py-20 lg:py-28 bg-[#060b13]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
              SYSTEM ARCHITECTURE
            </span>
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Modern Full-Stack Engineering
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Architected for zero data loss, sub-150ms referee scoring sync, and offline resilience during critical event finals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {product.architectureLayers.map((layer) => (
              <div
                key={layer.layer}
                className="rounded-2xl border border-white/10 bg-[#091222] p-6 space-y-2"
              >
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <h3 className="text-base font-bold text-white">{layer.layer}</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {layer.details}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom CTA Banner */}
          <div className="mt-16 rounded-3xl border border-emerald-500/30 bg-gradient-to-r from-[#0c182a] via-[#091222] to-[#070f1e] p-8 lg:p-12 text-center max-w-4xl mx-auto space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Ready to Upgrade Your Sports Operations?
            </h3>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
              Schedule a technical walk-through with our product engineers to see how Ethertrix Sports OS can unify your events, draws, and registrations.
            </p>
            <div>
              <Link
                href="/contact?interest=sports-os"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-950 hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20"
              >
                <span>Request a Demo / Pilot</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
