import type { Metadata } from 'next';
import Link from 'next/link';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import CaseStudyExplorer from '@/components/work/CaseStudyExplorer';
import { getCaseStudies } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Engineering Case Studies | Ethertrix LLP',
  description:
    'Explore production case studies by Ethertrix: Match Making Applications, Fleet Management System, and Legal Services Platform across Web & Mobile.',
};

export const revalidate = 60;

export default async function WorkPage() {
  const caseStudies = await getCaseStudies();

  return (
    <div className="py-16 lg:py-24 bg-[#060b13] relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-300">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Selected Production Engineering</span>
          </div>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            Software Built for Real-World Operations.
          </h1>
          <p className="mt-4 text-lg text-slate-300 leading-relaxed">
            We turn complex operational bottlenecks into mission-critical Web &amp; Mobile platforms. Discover how we built scalable matchmaking algorithms, fleet transit telemetry, and on-demand legal marketplaces.
          </p>
        </div>

        {/* Dynamic Explorer */}
        <div className="mt-14">
          <CaseStudyExplorer caseStudies={caseStudies} />
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 rounded-3xl border border-white/10 bg-gradient-to-r from-[#0a1424] to-[#0d1c33] p-10 sm:p-14 text-center">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Have a Complex Workflow or SaaS Concept to Build?
          </h2>
          <p className="mt-3 text-sm text-slate-300 max-w-xl mx-auto">
            From multi-depot fleet systems to real-time consumer platforms, our Chennai engineering team delivers high-performance solutions.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-bold text-slate-950 hover:bg-emerald-400 transition-all"
            >
              <span>Schedule Architecture Consultation</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
