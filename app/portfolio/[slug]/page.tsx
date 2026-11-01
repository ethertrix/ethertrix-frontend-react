import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Monitor,
  Smartphone,
  Cpu,
  Layers,
  ShieldAlert,
  Sparkles,
} from 'lucide-react';
import { fallbackClientProjects } from '@/lib/fallback-data';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = fallbackClientProjects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: 'Project | Ethertrix',
    };
  }

  return {
    title: `${project.title} | Ethertrix Portfolio`,
    description: project.description,
  };
}

export default async function PortfolioDetailPage({ params }: PageProps) {
  const { slug } = await params;

  if (slug === 'sports-os') {
    redirect('/products/sports-os');
  }

  const project = fallbackClientProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="py-16 lg:py-24 bg-[#060b13] text-white relative overflow-hidden">
      <div className="ambient-glow-emerald -top-20 right-1/4 opacity-40 pointer-events-none" />

      <div className="mx-auto max-w-5xl px-6 lg:px-8 space-y-12">
        {/* Back Link */}
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-emerald-400 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to All Solutions</span>
        </Link>

        {/* Header */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-400 border border-emerald-500/20">
              {project.type}
            </span>
            <span className="text-xs text-slate-400">&bull;</span>
            <span className="text-xs text-slate-300 font-medium">{project.industry}</span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-2.5 py-0.5 text-[11px] font-medium text-cyan-300">
              <Monitor className="h-3.5 w-3.5" />
              <Smartphone className="h-3.5 w-3.5" />
              <span>Full Web &amp; Mobile Deployment</span>
            </span>
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            {project.description}
          </p>
        </div>

        {/* Challenge vs Solution Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Challenge */}
          <div className="rounded-3xl border border-rose-500/20 bg-rose-950/10 p-8 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-400">
              <ShieldAlert className="h-4 w-4" />
              <span>The Operational Challenge</span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.challenge}
            </p>
          </div>

          {/* Solution */}
          <div className="rounded-3xl border border-emerald-500/20 bg-emerald-950/10 p-8 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
              <Layers className="h-4 w-4" />
              <span>The Ethertrix Solution</span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Core Capabilities */}
        <div className="rounded-3xl border border-white/10 bg-[#091222] p-8 lg:p-10 space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Core Architecture &amp; System Capabilities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.capabilities.map((cap) => (
              <div key={cap} className="flex items-start gap-3 rounded-xl bg-white/[0.02] p-4 border border-white/5">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-200">{cap}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Platforms and Tech Stack */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-[#091222] p-6 space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
              <Smartphone className="h-4 w-4" />
              <span>Platforms Deployed</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.platforms.map((platform) => (
                <span key={platform} className="rounded-lg bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300 border border-white/10">
                  {platform}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#091222] p-6 space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400">
              <Cpu className="h-4 w-4" />
              <span>Technologies &amp; Libraries</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="rounded-lg bg-emerald-500/10 px-3 py-1.5 text-xs font-mono font-medium text-emerald-300 border border-emerald-500/20">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Box */}
        <div className="rounded-3xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/30 via-slate-900 to-[#060b13] p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white">Need a Similar High-Performance System?</h3>
            <p className="mt-1 text-sm text-slate-300">
              Let&apos;s evaluate your operational requirements and engineer your platform.
            </p>
          </div>
          <Link
            href={`/contact?project=${encodeURIComponent(project.title)}`}
            className="rounded-full bg-emerald-500 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-950 hover:bg-emerald-400 transition-all shrink-0 inline-flex items-center gap-2 shadow-lg shadow-emerald-500/20"
          >
            <span>Start Technical Consultation</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
