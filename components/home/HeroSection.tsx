'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Sparkles,
  Calendar,
  Users,
  Shield,
  MapPin,
  Clock,
  CreditCard,
  Activity,
  BarChart3,
  CheckCircle2,
} from 'lucide-react';

const ecosystemNodes = [
  { id: 'events', label: 'Events', icon: Calendar, metric: 'Multi-category' },
  { id: 'participants', label: 'Participants', icon: Users, metric: 'Verified Passports' },
  { id: 'teams', label: 'Teams', icon: Shield, metric: 'Roster Engines' },
  { id: 'venues', label: 'Venues', icon: MapPin, metric: 'Slot Availability' },
  { id: 'schedules', label: 'Schedules', icon: Clock, metric: 'Conflict-Free' },
  { id: 'payments', label: 'Payments', icon: CreditCard, metric: 'Instant Settlement' },
  { id: 'results', label: 'Results', icon: Activity, metric: 'Courtside Scoring' },
  { id: 'analytics', label: 'Analytics', icon: BarChart3, metric: 'Operational Insights' },
];

export default function HeroSection() {
  const [activeNode, setActiveNode] = useState<string>('events');

  return (
    <section className="relative overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32">
      {/* Ambient background glows */}
      <div className="ambient-glow-emerald top-[-100px] left-1/2 -translate-x-1/2 opacity-75 pointer-events-none" />
      <div className="ambient-glow-blue top-[250px] right-[-150px] opacity-50 pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Editorial Value Proposition */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Tagline Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-400">
              <Sparkles className="h-3.5 w-3.5 animate-pulse" />
              <span>Sports Technology &bull; SaaS Products &bull; Digital Solutions</span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.12]">
                Building Technology for the{' '}
                <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Future of Sports.
                </span>
              </h1>
              <p className="text-lg font-medium text-slate-300">
                Technology That Powers Sports Operations.
              </p>
            </div>

            {/* Supporting Message */}
            <p className="text-base sm:text-lg leading-relaxed text-slate-400 max-w-2xl">
              Ethertrix builds SaaS products and digital solutions that help organizations simplify operations, connect their workflows, and create better digital experiences across modern sports and business ecosystems.
            </p>

            {/* Key Value Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-semibold text-white block">Sports OS Platform</span>
                  <span className="text-slate-400">Flagship unified operating infrastructure</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-semibold text-white block">Custom Engineering</span>
                  <span className="text-slate-400">From idea &rarr; product &rarr; deployment</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-semibold text-white block">Connected Workflows</span>
                  <span className="text-slate-400">Eliminating fragmented manual tools</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/products/sports-os"
                className="group inline-flex items-center gap-2.5 rounded-full bg-emerald-500 px-7 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/25 hover:bg-emerald-400 hover:shadow-emerald-500/35 transition-all"
              >
                <span>Explore Sports OS</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 hover:border-white/30 transition-all"
              >
                <span>Work With Ethertrix</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Connected Sports Ecosystem Visualization */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto w-full max-w-md rounded-2xl border border-white/10 bg-[#0a111e]/90 p-6 shadow-2xl backdrop-blur-xl">
              
              {/* Header Badge */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-semibold tracking-wider uppercase text-slate-300">
                    Connected Ecosystem Core
                  </span>
                </div>
                <span className="rounded bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-400 border border-emerald-500/20">
                  REAL-TIME SYNC
                </span>
              </div>

              {/* Central Sports OS Core Hub */}
              <div className="relative mb-6 rounded-xl border border-emerald-500/30 bg-gradient-to-br from-emerald-950/40 via-[#0a1424] to-[#07101c] p-5 text-center shadow-inner">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-[10px] font-bold text-emerald-300 uppercase tracking-widest mb-1.5">
                  FLAGSHIP PLATFORM
                </div>
                <h3 className="text-lg font-black tracking-tight text-white">
                  ETHERTRIX SPORTS OS
                </h3>
                <p className="mt-1 text-xs text-slate-400">
                  The centralized digital backbone uniting sports operational streams
                </p>
              </div>

              {/* Connected Orbit Nodes */}
              <div className="space-y-2">
                <p className="text-[11px] font-medium uppercase tracking-wider text-slate-400 mb-2">
                  Connected Operational Nodes:
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {ecosystemNodes.map((node) => {
                    const Icon = node.icon;
                    const isSelected = activeNode === node.id;
                    return (
                      <button
                        key={node.id}
                        type="button"
                        onClick={() => setActiveNode(node.id)}
                        className={`group flex items-center justify-between rounded-lg p-2.5 text-left transition-all ${
                          isSelected
                            ? 'border border-emerald-500/40 bg-emerald-500/10 text-white shadow-sm'
                            : 'border border-white/5 bg-white/[0.02] text-slate-400 hover:border-white/15 hover:bg-white/[0.05] hover:text-slate-200'
                        }`}
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          <Icon
                            className={`h-4 w-4 shrink-0 transition-colors ${
                              isSelected ? 'text-emerald-400' : 'text-slate-400 group-hover:text-emerald-400'
                            }`}
                          />
                          <span className="text-xs font-medium truncate">{node.label}</span>
                        </div>
                        <span
                          className={`h-1.5 w-1.5 rounded-full shrink-0 ${
                            isSelected ? 'bg-emerald-400' : 'bg-slate-600'
                          }`}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Interactive Node Telemetry Detail */}
              {activeNode && (
                <div className="mt-4 rounded-lg border border-emerald-500/20 bg-emerald-950/20 p-3 text-xs text-slate-300">
                  <div className="flex items-center justify-between text-emerald-400 font-medium mb-1">
                    <span>
                      {ecosystemNodes.find((n) => n.id === activeNode)?.label} Stream
                    </span>
                    <span className="text-[10px] text-slate-400">CONNECTED</span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Seamlessly streams data into the central Ethertrix Sports OS database for instant reconciliation, reports, and participant access.
                  </p>
                </div>
              )}

              {/* Bottom live indicator */}
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                <span>Infrastructure: High-availability Fastify &amp; PostgreSQL</span>
                <span className="text-emerald-400 font-mono">0ms Lag</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
