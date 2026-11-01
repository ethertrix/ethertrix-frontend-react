import { Globe, TrendingUp, Cpu, ShieldCheck } from 'lucide-react';

export default function InvestorEcosystemSection() {
  return (
    <section className="relative py-20 lg:py-28 border-t border-white/[0.06] bg-[#060b13]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="rounded-3xl border border-white/10 bg-[#091222] p-8 lg:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                ECOSYSTEM &amp; STRATEGY
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Building from India for the global sports ecosystem.
              </h2>
              <p className="text-base leading-relaxed text-slate-300">
                The global sports and tournament management ecosystem is undergoing a generational shift from fragmented offline operations to connected cloud platforms. Ethertrix is positioned at the intersection of this transition—combining world-class software engineering in Chennai with global product vision.
              </p>
              <p className="text-sm leading-relaxed text-slate-400">
                By maintaining a disciplined, capital-efficient approach, we focus on deep product utility, zero data loss during high-stakes competitions, and sustainable technical partnerships.
              </p>
            </div>

            {/* Right Pillars Grid */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4 space-y-2">
                <Globe className="h-5 w-5 text-emerald-400" />
                <h4 className="text-sm font-bold text-white">Global Market Reach</h4>
                <p className="text-xs text-slate-400">
                  Built to support international tournament rules, multi-currency registrations, and regional time zones.
                </p>
              </div>

              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4 space-y-2">
                <TrendingUp className="h-5 w-5 text-cyan-400" />
                <h4 className="text-sm font-bold text-white">Compound Product Value</h4>
                <p className="text-xs text-slate-400">
                  Each feature deployed into Sports OS strengthens our centralized operational dataset.
                </p>
              </div>

              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4 space-y-2">
                <Cpu className="h-5 w-5 text-blue-400" />
                <h4 className="text-sm font-bold text-white">Capital Efficiency</h4>
                <p className="text-xs text-slate-400">
                  Lean engineering culture focused on resilient software execution over vanity metrics.
                </p>
              </div>

              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4 space-y-2">
                <ShieldCheck className="h-5 w-5 text-emerald-400" />
                <h4 className="text-sm font-bold text-white">Operational Moat</h4>
                <p className="text-xs text-slate-400">
                  Domain-specific tournament logic and court rules that cannot be replicated by generic tools.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
