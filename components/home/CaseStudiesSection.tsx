import Link from 'next/link';
import { ArrowUpRight, Smartphone, Monitor, CheckCircle, TrendingUp } from 'lucide-react';
import { CaseStudy } from '@/lib/types';

interface CaseStudiesSectionProps {
  caseStudies: CaseStudy[];
}

export default function CaseStudiesSection({ caseStudies }: CaseStudiesSectionProps) {
  return (
    <section className="py-24 bg-[#060b13] relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold text-cyan-300">
              <span>Production Deployments &bull; Web &amp; Mobile</span>
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Systems We&apos;ve Engineered
            </h2>
            <p className="mt-3 text-base text-slate-300 max-w-2xl">
              From high-traffic matchmaking engines to rugged fleet telemetry and regulated legal marketplaces, we build battle-tested digital platforms across Web &amp; Mobile.
            </p>
          </div>

          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <span>View All Engineering Case Studies</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Case Studies List */}
        <div className="mt-12 space-y-8">
          {caseStudies.map((study, idx) => (
            <div
              key={study.slug || idx}
              className="glass-panel group relative overflow-hidden rounded-3xl p-8 lg:p-10 transition-all hover:border-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-950/20"
            >
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
                {/* Left Content (8 cols) */}
                <div className="lg:col-span-8">
                  {/* Category & Platform Badges */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300 border border-emerald-500/20">
                      {study.category}
                    </span>
                    <span className="text-xs text-slate-400">&bull;</span>
                    <span className="text-xs font-medium text-slate-300">
                      {study.clientIndustry}
                    </span>
                    <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-white/5 px-2.5 py-0.5 text-[11px] font-medium text-slate-300">
                      <Monitor className="h-3 w-3 text-cyan-400" />
                      <Smartphone className="h-3 w-3 text-emerald-400" />
                      <span>All Web &amp; Mobile</span>
                    </span>
                  </div>

                  {/* Title & Headline */}
                  <h3 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl group-hover:text-emerald-300 transition-colors">
                    {study.title}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base font-medium text-emerald-400/90">
                    {study.headline}
                  </p>
                  <p className="mt-3 text-sm text-slate-300 leading-relaxed max-w-3xl">
                    {study.summary}
                  </p>

                  {/* Capabilities Bullet points */}
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {study.capabilities.slice(0, 4).map((cap, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-300">{cap}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="mt-6 flex flex-wrap items-center gap-2">
                    {study.techStack.map((tech, tIdx) => (
                      <span key={tIdx} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Column: Key Metrics & Link (4 cols) */}
                <div className="lg:col-span-4 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-8 space-y-6">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400">
                      <TrendingUp className="h-3.5 w-3.5 text-emerald-400" />
                      <span>Production Impact</span>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-4">
                      {study.metrics?.map((m, mIdx) => (
                        <div key={mIdx} className="rounded-xl bg-white/[0.03] p-3 border border-white/5">
                          <div className="text-xl font-black text-white">{m.metric}</div>
                          <div className="text-[11px] text-slate-400 mt-0.5 leading-tight">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Link
                      href={`/work/${study.slug}`}
                      className="group/btn flex items-center justify-between w-full rounded-xl bg-white/10 hover:bg-emerald-500 hover:text-slate-950 px-4 py-3 text-xs font-bold text-white transition-all"
                    >
                      <span>Read Deep-Dive Architecture</span>
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
