import Link from 'next/link';
import { ArrowRight, Code, HeartHandshake, Lightbulb } from 'lucide-react';

export default function FounderStorySection() {
  return (
    <section className="relative py-20 lg:py-28 border-t border-white/[0.06] bg-[#060b13]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#0c1626] via-[#09111e] to-[#060b13] p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-8 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-400">
                <Lightbulb className="h-3.5 w-3.5" />
                <span>FOUNDER &amp; COMPANY PERSPECTIVE</span>
              </div>

              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Engineering + Software + Entrepreneurship
              </h2>

              <p className="text-base sm:text-lg leading-relaxed text-slate-300">
                Ethertrix was founded on a singular conviction: operational friction should never constrain organizational growth. Having witnessed tournament directors handling physical paper brackets in pouring rain, fleet dispatchers reconciling spreadsheets past midnight, and advocates juggling disconnected legal files, our engineering leadership built Ethertrix to replace fragmented point-tools with unified, high-integrity digital systems.
              </p>

              <p className="text-sm leading-relaxed text-slate-400">
                We are proud to build from Chennai, India, combining deep software craftsmanship with real-world empathy for the administrators, organizers, and athletes who make operations work every single day.
              </p>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-950 hover:bg-emerald-400 transition-all"
                >
                  <span>Meet Ethertrix</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-4">
              <div className="rounded-2xl border border-white/10 bg-[#070e1c] p-6 space-y-4">
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                  <div className="h-10 w-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">
                    E
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Ethertrix Engineering</h3>
                    <span className="text-[11px] text-slate-400">Chennai &bull; Global Ecosystem</span>
                  </div>
                </div>

                <div className="space-y-3 text-xs text-slate-400">
                  <div className="flex items-center gap-2 text-slate-300">
                    <Code className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>Engineered from First Principles</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <HeartHandshake className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>Real-world Operational Empathy</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <Lightbulb className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>Purposeful Digital Workflows</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/5 text-[11px] text-emerald-400 font-mono">
                  &ldquo;A technology company building products and powering the next generation of sports operations.&rdquo;
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
