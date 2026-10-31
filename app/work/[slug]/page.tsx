import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Monitor,
  Smartphone,
  TrendingUp,
  Cpu,
  Layers,
  ShieldAlert,
} from 'lucide-react';
import { getCaseStudyBySlug, getCaseStudies } from '@/lib/api';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);

  if (!study) {
    return {
      title: 'Case Study | Ethertrix',
    };
  }

  return {
    title: `${study.title} | Ethertrix Engineering`,
    description: study.summary,
  };
}

export const revalidate = 60;

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  return (
    <div className="py-16 lg:py-24 bg-[#060b13] relative overflow-hidden">
      <div className="ambient-glow-emerald -top-20 right-1/4" />

      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-emerald-400 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to All Case Studies</span>
        </Link>

        {/* Header Header */}
        <div className="mt-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-400 border border-emerald-500/20">
              {study.category}
            </span>
            <span className="text-xs text-slate-400">&bull;</span>
            <span className="text-xs text-slate-300 font-medium">{study.clientIndustry}</span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-2.5 py-0.5 text-[11px] font-medium text-cyan-300">
              <Monitor className="h-3.5 w-3.5" />
              <Smartphone className="h-3.5 w-3.5" />
              <span>Full Web &amp; Mobile Deployment</span>
            </span>
          </div>

          <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {study.title}
          </h1>

          <p className="mt-4 text-xl font-medium text-emerald-400/90 leading-relaxed">
            {study.headline}
          </p>

          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            {study.summary}
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {study.metrics.map((m, idx) => (
            <div key={idx} className="glass-panel rounded-2xl p-6 border border-white/10">
              <div className="text-3xl font-extrabold text-white">{m.metric}</div>
              <div className="mt-1 text-xs text-slate-400 font-medium leading-snug">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Challenge vs Solution Breakdown */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Challenge */}
          <div className="rounded-3xl border border-rose-500/20 bg-rose-950/10 p-8 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-400">
              <ShieldAlert className="h-4 w-4" />
              <span>The Operational Challenge</span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              {study.challenge}
            </p>
          </div>

          {/* Solution */}
          <div className="rounded-3xl border border-emerald-500/20 bg-emerald-950/10 p-8 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
              <Layers className="h-4 w-4" />
              <span>The Ethertrix Solution</span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              {study.solution}
            </p>
          </div>
        </div>

        {/* Key Engineering Capabilities */}
        <div className="mt-16 glass-panel rounded-3xl p-8 lg:p-10 border border-white/10">
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            Core Architecture &amp; Capabilities
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Engineered with high modularity and enterprise-grade resilience across both web portals and native mobile clients.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {study.capabilities.map((cap, cIdx) => (
              <div key={cIdx} className="flex items-start gap-3 rounded-xl bg-white/[0.02] p-4 border border-white/5">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-200">{cap}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Platforms and Tech Stack */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="glass-panel rounded-2xl p-6 border border-white/10">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
              <Smartphone className="h-4 w-4" />
              <span>Platforms Deployed</span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {study.platforms.map((p, pIdx) => (
                <span key={pIdx} className="rounded-lg bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300 border border-white/10">
                  {p}
                </span>
              ))}
            </div>
          </div>

          <div className="glass-panel rounded-2xl p-6 border border-white/10">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400">
              <Cpu className="h-4 w-4" />
              <span>Technologies &amp; Libraries</span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {study.techStack.map((t, tIdx) => (
                <span key={tIdx} className="tech-tag text-xs">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Box */}
        <div className="mt-20 rounded-3xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/30 via-slate-900 to-[#060b13] p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white">Need a Similar High-Performance System?</h3>
            <p className="mt-1 text-sm text-slate-300">
              Let&apos;s evaluate your requirements and architect your Web &amp; Mobile platform.
            </p>
          </div>
          <Link
            href={`/contact?project=${encodeURIComponent(study.title)}`}
            className="rounded-xl bg-emerald-500 px-6 py-3.5 text-xs font-bold text-slate-950 hover:bg-emerald-400 transition-all shrink-0 inline-flex items-center gap-2 shadow-lg shadow-emerald-500/20"
          >
            <span>Start Technical Consultation</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
