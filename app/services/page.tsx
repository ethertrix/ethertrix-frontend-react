import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Layers,
  Smartphone,
  Database,
  Workflow,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Cpu,
} from 'lucide-react';
import { getServices } from '@/lib/api';

export const metadata: Metadata = {
  title: 'SaaS Engineering Services | Ethertrix LLP Chennai',
  description:
    'Full-cycle SaaS architecture, cross-platform mobile apps with Flutter, and high-throughput Fastify + PostgreSQL cloud backends engineered by Ethertrix.',
};

export const revalidate = 60;

export default async function ServicesPage() {
  const services = await getServices();

  const getIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'layers':
        return <Layers className="h-8 w-8 text-emerald-400" />;
      case 'smartphone':
        return <Smartphone className="h-8 w-8 text-cyan-400" />;
      case 'database':
        return <Database className="h-8 w-8 text-blue-400" />;
      case 'workflow':
        return <Workflow className="h-8 w-8 text-purple-400" />;
      default:
        return <Layers className="h-8 w-8 text-emerald-400" />;
    }
  };

  return (
    <div className="py-16 lg:py-24 bg-[#060b13] relative overflow-hidden">
      <div className="ambient-glow-emerald -top-20 left-1/4" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-300">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Enterprise Digital Capabilities</span>
          </div>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            Engineering Tailored for Product-Scale Growth.
          </h1>
          <p className="mt-4 text-lg text-slate-300 leading-relaxed">
            We don&apos;t just build mockups or standard websites. Ethertrix engineers full-stack, multi-tenant digital systems designed to handle complex business rules, peak concurrency, and international compliance.
          </p>
        </div>

        {/* Services List */}
        <div className="mt-16 space-y-16">
          {services.map((service, idx) => (
            <div
              key={service.slug || idx}
              id={service.slug}
              className="glass-panel rounded-3xl p-8 lg:p-12 border border-white/10 hover:border-emerald-500/30 transition-all"
            >
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                {/* Left (5 cols) */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10">
                    {getIcon(service.icon)}
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    {service.title}
                  </h2>
                  <p className="text-sm text-emerald-400 font-medium">
                    {service.shortDescription}
                  </p>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {service.fullDescription}
                  </p>

                  <div className="pt-4">
                    <Link
                      href={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-2.5 text-xs font-bold text-slate-950 hover:bg-emerald-400 transition-colors"
                    >
                      <span>Inquire About This Service</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                {/* Right (7 cols) */}
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:border-l border-white/10 lg:pl-10">
                  <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 space-y-3">
                    <div className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                      Technical Capabilities
                    </div>
                    <ul className="space-y-2 text-xs text-slate-300">
                      {service.capabilities.map((cap, cIdx) => (
                        <li key={cIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 space-y-4 flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                        Tangible Deliverables
                      </div>
                      <ul className="mt-3 space-y-2 text-xs text-slate-300">
                        {service.deliverables.map((del, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-t border-white/5 pt-3">
                      <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                        Technologies
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {service.techStack.map((tech, tIdx) => (
                          <span key={tIdx} className="tech-tag text-[10px]">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Engineering Principles */}
        <section className="mt-28 rounded-3xl border border-white/10 bg-[#08101d] p-8 lg:p-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 text-xs font-semibold text-blue-300">
              <Cpu className="h-3.5 w-3.5" />
              <span>Ethertrix Engineering Philosophy</span>
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Architected for Performance, Delivered with Certainty
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
              <h3 className="text-base font-bold text-white">1. Modular Architecture</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We avoid monolith blobs. Systems are divided into clean, decoupled repositories, controllers, database models, and reusable components.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
              <h3 className="text-base font-bold text-white">2. Server-Driven Reality</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                No fragile client mock data. Dynamic data flows from PostgreSQL through Fastify endpoints with deterministic data contracts.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
              <h3 className="text-base font-bold text-white">3. Multi-Platform Consistency</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Whether on desktop browsers via Next.js or iOS/Android devices via Flutter, users enjoy unified business logic and zero UX friction.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
