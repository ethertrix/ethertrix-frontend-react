import type { Metadata } from 'next';
import Link from 'next/link';
import {
  MapPin,
  Globe,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  Cpu,
  Trophy,
  Users,
} from 'lucide-react';
import { getCompanyProfile } from '@/lib/api';

export const metadata: Metadata = {
  title: 'About Ethertrix LLP | Chennai Software Engineering Hub',
  description:
    'Learn about Ethertrix LLP: an Indian software engineering firm headquartered in Chennai building SaaS products and platforms for businesses worldwide.',
};

export const revalidate = 60;

export default async function AboutPage() {
  const company = await getCompanyProfile();

  return (
    <div className="py-16 lg:py-24 bg-[#060b13] relative overflow-hidden">
      <div className="ambient-glow-emerald -top-20 right-1/4" />
      <div className="ambient-glow-blue top-1/2 left-10" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-300">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Ethertrix LLP &bull; Chennai HQ</span>
          </div>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            Engineering Rigor from Chennai for Global Enterprises.
          </h1>

          <p className="mt-4 text-lg text-slate-300 leading-relaxed">
            {company.description}
          </p>
        </div>

        {/* Corporate Status Card */}
        <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.02] p-8 lg:p-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-1">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Corporate Entity
              </div>
              <div className="text-xl font-bold text-white">{company.legalName}</div>
              <div className="text-xs text-emerald-400">Registered Limited Liability Partnership</div>
            </div>

            <div className="space-y-1">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Operating Location
              </div>
              <div className="flex items-center gap-1.5 text-xl font-bold text-white">
                <MapPin className="h-5 w-5 text-emerald-400 shrink-0" />
                <span>Chennai, India</span>
              </div>
              <div className="text-xs text-slate-400">{company.operatingAddress}</div>
            </div>

            <div className="space-y-1">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Global Delivery Footprint
              </div>
              <div className="flex items-center gap-1.5 text-xl font-bold text-white">
                <Globe className="h-5 w-5 text-cyan-400 shrink-0" />
                <span>15+ Countries</span>
              </div>
              <div className="text-xs text-slate-400">North America, Europe, Middle East &amp; APAC</div>
            </div>
          </div>
        </div>

        {/* Story & Mission */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
              Our Purpose
            </div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Why Ethertrix Exists: The SaaS Era Demands Resilient Software.
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              In today&apos;s hyper-connected economy, software products can no longer rely on brittle no-code workarounds or fragile monolithic frameworks. Companies across transportation, legal tech, sports, and consumer discovery require robust architectures that never drop transactions or compromise data integrity.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              From our Chennai development offices, our engineering teams build custom SaaS systems from the ground up, utilizing modern decoupled architectures: Fastify microservices, PostgreSQL databases with strict constraints, Flutter mobile applications, and Next.js web applications.
            </p>

            <div className="pt-2">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300"
              >
                <span>Review Our Systems in Production</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="glass-panel rounded-3xl p-8 lg:p-10 border border-white/10 space-y-6">
            <h3 className="text-xl font-bold text-white">Dual Engine: In-House Products &amp; Enterprise Platforms</h3>

            <div className="space-y-4">
              <div className="rounded-2xl border border-emerald-500/20 bg-emerald-950/20 p-5 space-y-2">
                <div className="flex items-center gap-2 text-sm font-bold text-emerald-300">
                  <Trophy className="h-4 w-4" />
                  <span>SportsE2E &bull; In-House Product</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Our proprietary Sports Operating Platform servicing tournaments, academies, real-time courtside scoring, and venue bookings worldwide.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 space-y-2">
                <div className="flex items-center gap-2 text-sm font-bold text-cyan-300">
                  <Users className="h-4 w-4" />
                  <span>Bespoke Enterprise Systems</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  High-accuracy Match Making systems, Fleet Management operations for transit depots, and on-demand Legal Services marketplaces.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Global Coverage Countries */}
        <div className="mt-20 glass-panel rounded-3xl p-8 border border-white/10">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Active Global Client Territories
          </div>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {company.globalCoverage.map((country, idx) => (
              <span
                key={idx}
                className="rounded-full bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-200 border border-white/10"
              >
                {country}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Ready to partner with an engineering-first team?
          </h2>
          <div className="mt-6 flex justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-xl bg-emerald-500 px-8 py-3.5 text-sm font-bold text-slate-950 hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20"
            >
              Get in Touch with Chennai Operations
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
