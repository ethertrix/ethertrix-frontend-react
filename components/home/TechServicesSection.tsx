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
  ArrowRight,
} from 'lucide-react';

const techServices = [
  {
    title: 'Web Applications',
    icon: Globe,
    tag: 'Next.js & React',
    description: 'High-speed, responsive web applications built with Next.js App Router, server-side rendering, and modern design systems.',
  },
  {
    title: 'Mobile Applications',
    icon: Smartphone,
    tag: 'Flutter iOS & Android',
    description: 'Cross-platform mobile applications powered by Flutter, ensuring shared business contracts, offline sync, and 60fps performance.',
  },
  {
    title: 'SaaS Products',
    icon: Layers,
    tag: 'Multi-Tenant Architecture',
    description: 'End-to-end multi-tenant platforms with tenant isolation, tiered subscriptions, role-based permissions, and automated onboarding.',
  },
  {
    title: 'Backend & APIs',
    icon: Database,
    tag: 'Fastify & PostgreSQL',
    description: 'High-throughput, low-overhead microservices and APIs engineered for sub-50ms response times and strict ACID reliability.',
  },
  {
    title: 'Cloud & Deployment',
    icon: Cloud,
    tag: 'DevOps & Hardened VPS',
    description: 'Automated CI/CD pipelines, Docker containerization, Hostinger/AWS VPS configuration, Nginx reverse proxying, and zero-downtime releases.',
  },
  {
    title: 'Payment Integrations',
    icon: CreditCard,
    tag: 'Fintech & Escrow',
    description: 'Secure payment gateway integrations (Razorpay, Stripe, escrow wallets), automated invoice generation, and tax compliance.',
  },
  {
    title: 'Business Process Digitization',
    icon: Workflow,
    tag: 'Operational Workspaces',
    description: 'Translating messy paper records, spreadsheets, and manual approvals into structured, role-governed digital workflows.',
  },
  {
    title: 'Custom Platforms',
    icon: Cpu,
    tag: 'Bespoke Engineering',
    description: 'Custom software architectures tailored around unique operational requirements that off-the-shelf software cannot satisfy.',
  },
];

export default function TechServicesSection() {
  return (
    <section id="tech-services" className="relative py-20 lg:py-28 border-t border-white/[0.06] bg-[#060b13]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
            ENGINEERING CAPABILITIES
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            From ideas to production-ready technology.
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-slate-400">
            Ethertrix works with organizations to transform complex requirements into reliable, scalable digital products. We accompany our partners from initial idea &rarr; product &rarr; deployment &rarr; ongoing technology support.
          </p>
        </div>

        {/* 8 Service Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group rounded-2xl border border-white/5 bg-[#09111e] p-6 transition-all duration-300 hover:border-cyan-500/30 hover:bg-[#0b1626] hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-cyan-400 group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10 transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="rounded bg-white/5 px-2 py-0.5 text-[10px] font-semibold text-slate-400">
                    {service.tag}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-400">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Section CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/contact?service=tech"
            className="group inline-flex items-center gap-2.5 rounded-full bg-cyan-500 px-8 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 hover:bg-cyan-400 hover:shadow-cyan-500/30 transition-all"
          >
            <span>Build With Ethertrix</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}
