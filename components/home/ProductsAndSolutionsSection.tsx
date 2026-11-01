import Link from 'next/link';
import { Sparkles, ArrowRight, ShieldCheck, Cpu, Layers } from 'lucide-react';

export default function ProductsAndSolutionsSection() {
  return (
    <section className="relative py-20 lg:py-28 border-t border-white/[0.06] bg-[#070e1a]/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
            BUSINESS MODEL &amp; OFFERINGS
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Products &amp; Client Solutions
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-slate-400">
            Ethertrix operates on two clearly defined, mutually reinforcing pillars: our proprietary SaaS products and our bespoke engineering solutions for clients.
          </p>
        </div>

        {/* Dual Grid: In-House Products vs Client Solutions */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Box 1: In-House Product (Ethertrix Sports OS) */}
          <div className="rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-[#0c182a] via-[#091222] to-[#060c18] p-8 lg:p-10 flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div className="ambient-glow-emerald -top-20 -right-20 opacity-30 pointer-events-none" />
            
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-300 border border-emerald-500/30">
                  <Sparkles className="h-3.5 w-3.5" />
                  FLAGSHIP PRODUCT
                </span>
                <span className="text-xs font-mono text-slate-400">PROPRIETARY IP</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Ethertrix Sports OS
              </h3>
              <p className="text-sm font-semibold text-emerald-400 mt-1">
                One Operating System for Modern Sports Organizations
              </p>

              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                A Sports Operating System designed to connect event, competition, participant, academy, venue, and organizational workflows into a single high-performance cloud ecosystem.
              </p>

              {/* Feature Highlights */}
              <div className="mt-6 space-y-2.5 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Automated single/double elimination &amp; round-robin bracket engine</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Real-time courtside referee mobile scoring consoles</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Multi-court facility and hourly turf booking optimization</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Verified digital athlete passports &amp; certificate batch generation</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-slate-400">Full-stack web &amp; mobile architecture</span>
              <Link
                href="/products/sports-os"
                className="group inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-950 hover:bg-emerald-400 transition-all"
              >
                <span>Explore Sports OS</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Box 2: Client Solutions & Projects */}
          <div className="rounded-3xl border border-white/10 bg-[#091222] p-8 lg:p-10 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-cyan-400 border border-cyan-500/20">
                  <Cpu className="h-3.5 w-3.5" />
                  CLIENT SOLUTIONS
                </span>
                <span className="text-xs font-mono text-slate-400">BESPOKE SYSTEMS</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Enterprise &amp; Digital Solutions
              </h3>
              <p className="text-sm font-semibold text-cyan-400 mt-1">
                Custom Platforms Engineered for Global Operations
              </p>

              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                We partner with high-growth companies to architect and deliver mission-critical software systems across industries—social discovery, transportation, compliance, and athletics.
              </p>

              {/* Client Projects List */}
              <div className="mt-6 space-y-3">
                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3 text-xs">
                  <span className="font-bold text-white block">Intelligent Match Making Applications</span>
                  <span className="text-slate-400">Compatibility algorithms, photo verification, and real-time socket chat.</span>
                </div>
                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3 text-xs">
                  <span className="font-bold text-white block">Enterprise Fleet Management Platform</span>
                  <span className="text-slate-400">Multi-depot dispatch, driver manifests, fuel telemetry, and automated payroll.</span>
                </div>
                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3 text-xs">
                  <span className="font-bold text-white block">On-Demand Legal Services Marketplace</span>
                  <span className="text-slate-400">Bar council verification, notice generators, milestone escrow, and live tracking.</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-slate-400">Next.js &bull; Fastify &bull; PostgreSQL &bull; Flutter</span>
              <Link
                href="/portfolio"
                className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/10 transition-all"
              >
                <span>View Portfolio</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
