import { Globe, MapPin, Server, Zap, Shield, Check } from 'lucide-react';
import { CompanyProfile } from '@/lib/types';

interface GlobalReachProps {
  company: CompanyProfile;
}

export default function GlobalReachSection({ company }: GlobalReachProps) {
  const regions = [
    { name: 'North America', countries: 'United States, Canada', focus: 'B2B SaaS, Marketplace Platforms' },
    { name: 'Europe & UK', countries: 'United Kingdom, Germany, Netherlands', focus: 'Legal Tech, Enterprise Compliance' },
    { name: 'Middle East', countries: 'United Arab Emirates, Saudi Arabia', focus: 'Fleet Telematics, Multi-depot Ops' },
    { name: 'Asia-Pacific', countries: 'Singapore, India, Australia', focus: 'Sports Tech, Social Discovery' },
  ];

  return (
    <section className="py-24 bg-[#060b13] relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column (6 cols): Global Reach story */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 text-xs font-semibold text-blue-300">
              <Globe className="h-3.5 w-3.5" />
              <span>Chennai Hub &bull; Worldwide Footprint</span>
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Operating From Chennai. Building SaaS For The World.
            </h2>

            <p className="text-base text-slate-300 leading-relaxed">
              Ethertrix LLP combines the deep engineering rigor of India&apos;s premier software ecosystem in Chennai with global production standards. We serve high-growth businesses and enterprise clients across diverse timezones with high velocity.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 shrink-0 mt-0.5">
                  <Check className="h-4 w-4" />
                </div>
                <div>
                  <strong className="text-sm font-semibold text-white">Full-Stack SaaS Ownership:</strong>
                  <p className="text-xs text-slate-400">From architectural blueprint to PostgreSQL schemas, Fastify APIs, Flutter mobile apps, and Next.js portals.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400 shrink-0 mt-0.5">
                  <Check className="h-4 w-4" />
                </div>
                <div>
                  <strong className="text-sm font-semibold text-white">Direct Production Deployments:</strong>
                  <p className="text-xs text-slate-400">Deployed with high availability on Vercel Edge networks and dedicated VPS nodes on Hostinger.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/10 text-blue-400 shrink-0 mt-0.5">
                  <Check className="h-4 w-4" />
                </div>
                <div>
                  <strong className="text-sm font-semibold text-white">Registered Indian Entity (LLP):</strong>
                  <p className="text-xs text-slate-400">Fully compliant corporate framework with international invoice and contract compliance.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (6 cols): Regional Coverage Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {regions.map((reg, idx) => (
              <div
                key={idx}
                className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-emerald-500/30 transition-all"
              >
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>{reg.name}</span>
                </div>
                <div className="mt-2 text-sm font-bold text-white">{reg.countries}</div>
                <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                  {reg.focus}
                </p>
              </div>
            ))}

            {/* Architecture Card */}
            <div className="sm:col-span-2 rounded-2xl border border-emerald-500/20 bg-emerald-950/20 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-300 shrink-0">
                  <Server className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">High-Throughput Global Infrastructure</div>
                  <div className="text-xs text-slate-300">
                    Hostinger VPS &bull; Fastify 5 Engine &bull; PostgreSQL &bull; Sub-50ms API Latency
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                <Zap className="h-4 w-4" />
                <span>99.98% SLA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
