'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Sparkles,
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
} from 'lucide-react';

const ecosystemNodes = [
  'Events',
  'Competitions',
  'Registrations',
  'Participants',
  'Teams',
  'Venues',
  'Payments',
  'Scheduling',
  'Results',
  'Analytics',
];

const capabilities = [
  {
    id: 'events',
    title: 'Sports Event Management',
    description: 'End-to-end orchestration for multi-day, multi-category sporting events and athletics.',
    icon: Calendar,
  },
  {
    id: 'tournaments',
    title: 'Tournament & Competition Management',
    description: 'Single/double elimination, round-robin, and custom league formats with instant tie-breakers.',
    icon: Trophy,
  },
  {
    id: 'registrations',
    title: 'Online Registrations & Entry',
    description: 'Configurable digital entry forms, category caps, medical waivers, and instant payment validation.',
    icon: UserCheck,
  },
  {
    id: 'participants',
    title: 'Participant & Athlete Passports',
    description: 'Verified athletic credentials, competition history, age category checks, and digital IDs.',
    icon: Users,
  },
  {
    id: 'teams',
    title: 'Team & Roster Management',
    description: 'Roster builder, team staff assignments, squad submission workflows, and jersey allocation.',
    icon: Shield,
  },
  {
    id: 'scheduling',
    title: 'Fixtures & Smart Scheduling',
    description: 'Conflict-free court and pitch scheduling with rest intervals and automated official assignments.',
    icon: Clock,
  },
  {
    id: 'venues',
    title: 'Venue & Facility Management',
    description: 'Multi-court inventory, pitch lighting availability, and automated facility reservations.',
    icon: MapPin,
  },
  {
    id: 'payments',
    title: 'Unified Payment Processing',
    description: 'Automated entry fee collections, category fees, refund policies, and automated invoicing.',
    icon: CreditCard,
  },
  {
    id: 'results',
    title: 'Live Courtside Scores & Results',
    description: 'Low-latency referee console that publishes point tables and leaderboard computations.',
    icon: Activity,
  },
  {
    id: 'certificates',
    title: 'Digital Certificates & Badges',
    description: 'Batch generation of verifiable digital participation certificates, winner medals, and staff badges.',
    icon: Award,
  },
  {
    id: 'communication',
    title: 'Participant & Fan Communication',
    description: 'Automated SMS, WhatsApp, and email alerts for draw changes, court assignments, and delays.',
    icon: MessageSquare,
  },
  {
    id: 'analytics',
    title: 'Reports & Operations Analytics',
    description: 'Actionable executive insights on athlete retention, category revenue, and venue utilization.',
    icon: BarChart3,
  },
  {
    id: 'organization',
    title: 'Organization Governance',
    description: 'Multi-tiered management for state and national bodies to manage affiliated clubs and officials.',
    icon: Building2,
  },
];

export default function SportsOSShowcase() {
  const [selectedNode, setSelectedNode] = useState<string>('Scheduling');

  return (
    <section id="sports-os" className="relative py-24 lg:py-32 overflow-hidden bg-[#060b13]">
      {/* Background ambient lighting */}
      <div className="ambient-glow-emerald top-1/3 left-1/4 opacity-40 pointer-events-none" />
      <div className="ambient-glow-blue bottom-10 right-10 opacity-30 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-400">
            <Sparkles className="h-3.5 w-3.5" />
            <span>FLAGSHIP PRODUCT</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Introducing Ethertrix Sports OS
          </h2>
          <p className="text-xl font-medium text-emerald-400">
            One operating system for modern sports organizations.
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-slate-400">
            Sports organizations and event operators manage registrations, participants, competitions, schedules, venues, payments, results and communications across different systems. Ethertrix Sports OS is being built to bring these operations together into one connected platform.
          </p>
        </div>

        {/* Ecosystem Nodes Interactive Visual */}
        <div className="mt-16 rounded-3xl border border-white/10 bg-[#08101e]/90 p-8 shadow-2xl backdrop-blur-xl">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
              CONNECTED OPERATIONAL INFRASTRUCTURE
            </span>
            <h3 className="text-xl font-bold text-white mt-1">
              10 Pillars Converging into One Core
            </h3>
          </div>

          {/* Central Diagram with Orbit Nodes */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 max-w-4xl mx-auto">
            {ecosystemNodes.map((node) => {
              const isSelected = selectedNode === node;
              return (
                <button
                  key={node}
                  type="button"
                  onClick={() => setSelectedNode(node)}
                  className={`group rounded-xl p-3.5 text-center transition-all ${
                    isSelected
                      ? 'border border-emerald-400 bg-emerald-500/20 text-white shadow-lg shadow-emerald-500/10 scale-105'
                      : 'border border-white/10 bg-white/[0.03] text-slate-300 hover:border-white/20 hover:bg-white/[0.06]'
                  }`}
                >
                  <span className="block text-xs font-semibold uppercase tracking-wider">
                    {node}
                  </span>
                  <span className={`block h-1 w-6 mx-auto mt-2 rounded-full transition-all ${
                    isSelected ? 'bg-emerald-400' : 'bg-transparent group-hover:bg-slate-600'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Core Hub Preview Box */}
          <div className="mt-10 max-w-4xl mx-auto rounded-2xl border border-emerald-500/30 bg-[#0b1424] p-6 lg:p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-white/10 pb-6 mb-6">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">Active Node Stream</span>
                <h4 className="text-2xl font-bold text-white mt-0.5">{selectedNode} Integration</h4>
                <p className="text-sm text-slate-400 mt-1">
                  Connected directly to the Ethertrix Sports OS centralized transactional core.
                </p>
              </div>
              <Link
                href="/products/sports-os"
                className="group shrink-0 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-950 hover:bg-emerald-400 transition-all"
              >
                <span>Explore Sports OS</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Abstract UI Fragments Preview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Fragment 1: Courtside Scoring UI preview */}
              <div className="rounded-xl border border-white/10 bg-[#060c18] p-4 text-xs font-mono">
                <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-white/5">
                  <span>COURT 01 &bull; SET 2</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                    LIVE
                  </span>
                </div>
                <div className="py-3 space-y-2">
                  <div className="flex justify-between items-center text-slate-200">
                    <span>Alpha Strikers</span>
                    <span className="font-bold text-emerald-400 text-sm">21</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-400">
                    <span>Apex Titans</span>
                    <span className="font-bold text-sm">18</span>
                  </div>
                </div>
                <div className="text-[10px] text-slate-500 pt-1 border-t border-white/5">
                  Instant referee tap-to-score sync
                </div>
              </div>

              {/* Fragment 2: Fixture Scheduler */}
              <div className="rounded-xl border border-white/10 bg-[#060c18] p-4 text-xs font-mono">
                <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-white/5">
                  <span>SMART SCHEDULER</span>
                  <span className="text-cyan-400">CONFLICT-FREE</span>
                </div>
                <div className="py-2.5 space-y-1.5 text-[11px]">
                  <div className="p-1.5 rounded bg-white/[0.04] text-slate-300">
                    10:00 AM &bull; Quarterfinal A (Pitch 1)
                  </div>
                  <div className="p-1.5 rounded bg-white/[0.04] text-slate-300">
                    11:15 AM &bull; Quarterfinal B (Pitch 2)
                  </div>
                </div>
                <div className="text-[10px] text-slate-500 pt-1 border-t border-white/5">
                  Rest interval constraints auto-checked
                </div>
              </div>

              {/* Fragment 3: Registration Status */}
              <div className="rounded-xl border border-white/10 bg-[#060c18] p-4 text-xs font-mono">
                <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-white/5">
                  <span>REGISTRATION CAP</span>
                  <span className="text-emerald-400">ACTIVE</span>
                </div>
                <div className="py-2.5 space-y-2">
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <div className="bg-emerald-400 h-full w-[82%]" />
                  </div>
                  <div className="flex justify-between text-[11px] text-slate-300">
                    <span>Capacity: 82%</span>
                    <span className="text-emerald-400">Verified IDs</span>
                  </div>
                </div>
                <div className="text-[10px] text-slate-500 pt-1 border-t border-white/5">
                  Automated entry receipts &amp; waivers
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 13 Capabilities Grid */}
        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              CORE CAPABILITIES
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2">
              Everything Needed to Run Modern Sports Operations
            </h3>
            <p className="text-sm text-slate-400 mt-2">
              Designed from ground-up for sports operators, organizers, coaches, and administrators.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.id}
                  className="rounded-2xl border border-white/5 bg-[#091221] p-6 transition-all hover:border-emerald-500/30 hover:bg-[#0c1628]"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="text-base font-bold text-white">{cap.title}</h4>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-400">
                    {cap.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
