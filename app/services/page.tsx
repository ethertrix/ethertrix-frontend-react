import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Globe,
  Smartphone,
  Layers,
  Database,
  Cloud,
  CreditCard,
  Workflow,
  Cpu,
  Calendar,
  Trophy,
  UserCheck,
  Activity,
  Sliders,
  Users,
  MapPin,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { fallbackServicesData } from '@/lib/fallback-data';

export const metadata: Metadata = {
  title: 'Technology & Sports Services | Ethertrix',
  description:
    'From ideas to production-ready technology: Web & Mobile Application Development, SaaS Engineering, Custom Platforms, and Specialized Sports Operations Systems.',
};

const engagementSteps = [
  { step: '01', title: 'Idea & Discovery', desc: 'Understanding operational bottlenecks, data rules, user roles, and compliance constraints.' },
  { step: '02', title: 'Product Architecture', desc: 'Designing normalized schemas, intuitive UX workflows, and decoupled API interfaces.' },
  { step: '03', title: 'Full-Stack Engineering', desc: 'Developing with Next.js, Fastify, PostgreSQL, and Flutter with strict type safety.' },
  { step: '04', title: 'Hardened Deployment', desc: 'Setting up Docker containers, reverse proxies, payment gateways, and automated CI/CD.' },
  { step: '05', title: 'Ongoing Support', desc: 'Providing active telemetry monitoring, database index tuning, and continuous capability updates.' },
];

export default function ServicesPage() {
  const [techServicesCategory, sportsServicesCategory] = fallbackServicesData;

  const getTechIcon = (title: string) => {
    switch (title) {
      case 'Web Application Development':
        return <Globe className="h-6 w-6 text-cyan-400" />;
      case 'Mobile Application Development':
        return <Smartphone className="h-6 w-6 text-emerald-400" />;
      case 'SaaS Product Development':
        return <Layers className="h-6 w-6 text-blue-400" />;
      case 'Custom Software Development':
        return <Cpu className="h-6 w-6 text-purple-400" />;
      case 'API & Backend Development':
        return <Database className="h-6 w-6 text-emerald-400" />;
      case 'Cloud & Deployment Solutions':
        return <Cloud className="h-6 w-6 text-cyan-400" />;
      case 'Payment & Third-Party Integrations':
        return <CreditCard className="h-6 w-6 text-amber-400" />;
      default:
        return <Workflow className="h-6 w-6 text-emerald-400" />;
    }
  };

  const getSportsIcon = (title: string) => {
    switch (title) {
      case 'Sports Event Technology':
        return <Calendar className="h-6 w-6 text-emerald-400" />;
      case 'Tournament Management Solutions':
        return <Trophy className="h-6 w-6 text-amber-400" />;
      case 'Event Registration Systems':
        return <UserCheck className="h-6 w-6 text-cyan-400" />;
      case 'Competition Management':
        return <Activity className="h-6 w-6 text-rose-400" />;
      case 'Sports Operations Technology':
        return <Sliders className="h-6 w-6 text-purple-400" />;
      case 'Sports Organization Digitization':
        return <Users className="h-6 w-6 text-blue-400" />;
      case 'Sports Data & Analytics':
        return <BarChart3 className="h-6 w-6 text-emerald-400" />;
      default:
        return <MapPin className="h-6 w-6 text-emerald-400" />;
    }
  };

  return (
    <div className="py-16 lg:py-24 bg-[#060b13] text-white relative overflow-hidden">
      <div className="ambient-glow-emerald -top-20 left-1/4 opacity-40 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-24">
        
        {/* Main Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-300">
            <Sparkles className="h-3.5 w-3.5" />
            <span>ENTERPRISE &amp; SPORTS CAPABILITIES</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            Technology &amp; Sports Management Services.
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            Ethertrix works with organizations from initial idea &rarr; product &rarr; deployment &rarr; ongoing technology support, engineering robust full-stack platforms and sports management systems.
          </p>
        </div>

        {/* Section 1: Technology Services */}
        <div id="tech-services" className="space-y-10">
          <div className="border-b border-white/10 pb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
              PILLAR 01 &bull; GENERAL TECHNOLOGY
            </span>
            <h2 className="text-3xl font-extrabold text-white mt-2">
              Technology Services
            </h2>
            <p className="text-slate-400 text-sm mt-1 max-w-2xl">
              From ideas to production-ready technology: full-stack web, native cross-platform mobile apps, multi-tenant SaaS, and cloud backends.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techServicesCategory.services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-white/10 bg-[#091222] p-6 space-y-4 hover:border-cyan-500/30 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10">
                    {getTechIcon(service.title)}
                  </div>
                  {service.tag && (
                    <span className="rounded bg-white/5 px-2.5 py-1 text-[10px] font-semibold text-slate-400">
                      {service.tag}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-white">{service.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Sports Technology & Management Services */}
        <div id="sports-services" className="space-y-10">
          <div className="border-b border-white/10 pb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              PILLAR 02 &bull; SPORTS ECOSYSTEM
            </span>
            <h2 className="text-3xl font-extrabold text-white mt-2">
              Sports Technology &amp; Management Services
            </h2>
            <p className="text-slate-400 text-sm mt-1 max-w-2xl">
              Technology for the sports ecosystem: event software, bracket algorithms, digital athlete passports, courtside score synchronization, and arena yield tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sportsServicesCategory.services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-white/10 bg-[#091222] p-6 space-y-4 hover:border-emerald-500/30 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                    {getSportsIcon(service.title)}
                  </div>
                  {service.tag && (
                    <span className="rounded bg-white/5 px-2.5 py-1 text-[10px] font-semibold text-emerald-300">
                      {service.tag}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-white">{service.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Engagement Model */}
        <div className="rounded-3xl border border-white/10 bg-[#081120] p-8 lg:p-12 space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              ENGAGEMENT MODEL
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">
              How We Work With Organizations
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              From idea &rarr; product &rarr; deployment &rarr; ongoing technology support.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
            {engagementSteps.map((step) => (
              <div key={step.step} className="rounded-xl border border-white/5 bg-white/[0.02] p-4 space-y-2">
                <span className="text-xs font-mono font-bold text-emerald-400">{step.step}</span>
                <h3 className="text-sm font-bold text-white">{step.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Banner */}
        <div className="rounded-3xl border border-cyan-500/30 bg-gradient-to-r from-[#0c182a] to-[#07101e] p-8 lg:p-12 text-center max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Have a Technology or Sports Operations Project?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Discuss your technical requirements with our engineering team. We deliver production-grade software with absolute certainty.
          </p>
          <div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-950 hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20"
            >
              <span>Build With Ethertrix</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
