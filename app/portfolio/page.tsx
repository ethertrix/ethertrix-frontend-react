import type { Metadata } from 'next';
import Link from 'next/link';
import { Sparkles, ArrowRight, CheckCircle2, Monitor, Smartphone, Cpu } from 'lucide-react';
import PortfolioSection from '@/components/home/PortfolioSection';

export const metadata: Metadata = {
  title: 'Portfolio & Client Solutions | Ethertrix',
  description:
    'Explore production systems engineered by Ethertrix: Ethertrix Sports OS, Intelligent Match Making Applications, Enterprise Fleet & Transit Operations, and On-Demand Legal Tech.',
};

export default function PortfolioPage() {
  return (
    <div className="py-16 lg:py-24 bg-[#060b13] text-white relative overflow-hidden">
      <div className="ambient-glow-emerald -top-20 left-1/4 opacity-40 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-300">
            <Sparkles className="h-3.5 w-3.5" />
            <span>PORTFOLIO &amp; WORK</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            Software Built for Real-World Operations.
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            We turn complex operational bottlenecks into mission-critical Web, Mobile, and Cloud platforms. Discover our proprietary products and client systems across sports technology, logistics, social discovery, and legal compliance.
          </p>
        </div>

        {/* Portfolio Section Component */}
        <PortfolioSection />

        {/* Consultation Callout */}
        <div className="rounded-3xl border border-white/10 bg-[#081120] p-8 lg:p-12 text-center max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Have a Specific Platform to Build?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Discuss your requirements directly with our technical leadership. We deliver production-grade software with absolute certainty.
          </p>
          <div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-950 hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20"
            >
              <span>Schedule Architecture Consultation</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
