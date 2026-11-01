import type { Metadata } from 'next';
import Link from 'next/link';
import {
  MapPin,
  Globe,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Trophy,
  Users,
  Lightbulb,
  HeartHandshake,
  Brain,
  Compass,
} from 'lucide-react';
import { fallbackCompanyProfile } from '@/lib/fallback-data';

export const metadata: Metadata = {
  title: 'About Ethertrix | Technology That Powers Sports Operations',
  description:
    'Ethertrix is a technology company building SaaS products and digital solutions, with a strong focus on the sports technology ecosystem.',
};

export default function AboutPage() {
  const company = fallbackCompanyProfile;

  return (
    <div className="py-16 lg:py-24 bg-[#060b13] text-white relative overflow-hidden">
      <div className="ambient-glow-emerald -top-20 right-1/4 opacity-40 pointer-events-none" />
      <div className="ambient-glow-blue top-1/2 left-10 opacity-30 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-24">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-300">
            <Sparkles className="h-3.5 w-3.5" />
            <span>ABOUT ETHERTRIX</span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            Technology That Powers Sports Operations.
          </h1>

          <p className="text-xl font-medium text-emerald-400">
            &ldquo;A technology company building products and powering the next generation of sports operations.&rdquo;
          </p>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Ethertrix is more than a software development agency. We operate at the intersection of modern software engineering and operations digitization—building scalable in-house SaaS products while helping ambitious organizations engineer custom digital platforms from concept to global scale.
          </p>
        </div>

        {/* Two Connected Operational Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-3xl border border-emerald-500/30 bg-[#091222] p-8 lg:p-10 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Trophy className="h-5 w-5" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Area 01 &bull; Products
              </span>
            </div>
            <h2 className="text-2xl font-bold text-white">
              Scalable SaaS Products
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Building proprietary SaaS products, headlined by the <strong className="text-white">Ethertrix Sports Operating System</strong>—our unified platform connecting events, competitions, registrations, courtside referee scoring, athlete passports, and venue management.
            </p>
            <div className="pt-2">
              <Link href="/products/sports-os" className="text-xs font-bold uppercase tracking-wider text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1">
                <span>Explore Sports OS</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-cyan-500/30 bg-[#091222] p-8 lg:p-10 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <Cpu className="h-5 w-5" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                Area 02 &bull; Services
              </span>
            </div>
            <h2 className="text-2xl font-bold text-white">
              Technology &amp; Sports Services
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Helping organizations build, digitize, and manage technology-driven business and sports operations. We accompany our partners from initial idea &rarr; product &rarr; deployment &rarr; ongoing technology support.
            </p>
            <div className="pt-2">
              <Link href="/services" className="text-xs font-bold uppercase tracking-wider text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1">
                <span>Explore Services</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Founder & Company Story */}
        <div id="founder-story" className="rounded-3xl border border-white/10 bg-[#081120] p-8 lg:p-14 space-y-6">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              ORIGINS &amp; VALUES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Engineering + Software + Entrepreneurship
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {company.founderStory.bio}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/10">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-emerald-400">01</span>
              <h3 className="text-base font-bold text-white">Headquartered in Chennai</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Operating out of Chennai, Tamil Nadu, India, with an engineering team passionate about both athletic operations and high-availability code.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-cyan-400">02</span>
              <h3 className="text-base font-bold text-white">Direct Technical Engagement</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                No salespeople or middle layers. Clients and partners work directly with our engineering leadership from day one.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-blue-400">03</span>
              <h3 className="text-base font-bold text-white">Capital Efficiency &amp; Integrity</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                We believe in genuine operational utility and zero data loss over exaggerated metrics or vanity valuations.
              </p>
            </div>
          </div>
        </div>

        {/* 5-Step Journey */}
        <div className="space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              OUR LIFECYCLE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">
              Discover &rarr; Design &rarr; Build &rarr; Deploy &rarr; Scale
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
            {company.journeySteps.map((step) => (
              <div key={step.step} className="rounded-xl border border-white/5 bg-[#091222] p-5 space-y-2">
                <span className="text-xs font-mono font-bold text-emerald-400">{step.step}</span>
                <h3 className="text-base font-bold text-white">{step.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="rounded-3xl border border-white/10 bg-[#081120] p-8 lg:p-12 text-center max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Ready to Build With Ethertrix?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Whether you need a dedicated sports platform or an enterprise software system, let&apos;s start a conversation today.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-950 hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20"
            >
              <span>Let&apos;s Talk</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
