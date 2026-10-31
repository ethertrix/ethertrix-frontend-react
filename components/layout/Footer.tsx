import Link from 'next/link';
import { Sparkles, MapPin, Mail, ArrowUpRight, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#04080e] text-slate-400">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Company Bio */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight text-white">ETHERTRIX</span>
              <span className="rounded bg-emerald-500/10 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-400 border border-emerald-500/20">
                LLP
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
              Ethertrix LLP is a registered software engineering firm based in Chennai, India. We engineer mission-critical SaaS platforms, mobile systems, and real-time cloud backends for enterprises across the globe.
            </p>
            <div className="flex flex-col gap-2 pt-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Headquartered in Chennai, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>contact@ethertrix.com</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Operating as a Registered Limited Liability Partnership (LLP)</span>
              </div>
            </div>
          </div>

          {/* In-House Product & Case Studies */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
              Products &amp; Case Studies
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link
                  href="/products/sportse2e"
                  className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium"
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  SportsE2E Platform
                </Link>
              </li>
              <li>
                <Link href="/work/match-making-applications" className="hover:text-white transition-colors">
                  Match Making Applications
                </Link>
              </li>
              <li>
                <Link href="/work/fleet-management-application" className="hover:text-white transition-colors">
                  Fleet Management Platform
                </Link>
              </li>
              <li>
                <Link href="/work/legal-services-application" className="hover:text-white transition-colors">
                  Legal Services Marketplace
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-white transition-colors">
                  All Case Studies
                </Link>
              </li>
            </ul>
          </div>

          {/* SaaS Services */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
              Engineering Services
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/services#saas-engineering" className="hover:text-white transition-colors">
                  SaaS Architecture &amp; Multi-tenancy
                </Link>
              </li>
              <li>
                <Link href="/services#mobile-web" className="hover:text-white transition-colors">
                  Cross-Platform Apps (Flutter &amp; Web)
                </Link>
              </li>
              <li>
                <Link href="/services#cloud-backends" className="hover:text-white transition-colors">
                  Fastify &amp; PostgreSQL Scalable APIs
                </Link>
              </li>
              <li>
                <Link href="/services#automation" className="hover:text-white transition-colors">
                  Enterprise Workflow Automation
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Technical Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Global Operations & Tech Stack */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
              Company &amp; Stack
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Ethertrix
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Schedule Consultation
                </Link>
              </li>
              <li>
                <span className="text-xs text-slate-500">Deployments: Vercel &bull; Hostinger VPS</span>
              </li>
              <li>
                <span className="text-xs text-slate-500">Stack: Next.js &bull; Fastify &bull; PostgreSQL &bull; Flutter</span>
              </li>
            </ul>
            <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.02] p-3 text-xs">
              <div className="flex items-center gap-2 text-emerald-400 font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Production API Status: Nominal</span>
              </div>
              <p className="mt-1 text-[11px] text-slate-500">
                Sub-50ms Fastify API responding dynamically from VPS Hostinger.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Ethertrix LLP. All rights reserved. Registered entity in Chennai, India.
          </p>
          <div className="flex items-center gap-6">
            <span>Global SaaS Delivery Across 15+ Countries</span>
            <Link href="/contact" className="hover:text-slate-300">Privacy &amp; Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
