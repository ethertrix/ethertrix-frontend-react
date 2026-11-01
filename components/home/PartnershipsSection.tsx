import Link from 'next/link';
import { ArrowRight, Handshake, Users, ShieldCheck, Zap } from 'lucide-react';

export default function PartnershipsSection() {
  return (
    <section className="relative py-20 lg:py-28 border-t border-white/[0.06] bg-[#070e1a]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-400">
            <Handshake className="h-3.5 w-3.5" />
            <span>ECOSYSTEM COLLABORATION</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Let&apos;s build the sports technology ecosystem together.
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-slate-400">
            Whether you are a sports federation seeking digital governance, a tournament promoter needing bracket automation, or an arena chain looking to maximize court yield, we want to build with you.
          </p>
        </div>

        {/* Partnership Types Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-white/5 bg-[#091222] p-6 lg:p-8 space-y-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <Users className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Federations &amp; Governing Bodies</h3>
            <p className="text-xs leading-relaxed text-slate-400">
              Partner with us to deploy standardized athlete passports, state affiliation databases, and certified referee ranking systems.
            </p>
          </div>

          <div className="rounded-2xl border border-white/5 bg-[#091222] p-6 lg:p-8 space-y-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              <Zap className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Tournament &amp; Event Directors</h3>
            <p className="text-xs leading-relaxed text-slate-400">
              Transform your draws and matchday management with automated conflict-free scheduling and real-time referee consoles.
            </p>
          </div>

          <div className="rounded-2xl border border-white/5 bg-[#091222] p-6 lg:p-8 space-y-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Sports Facilities &amp; Academies</h3>
            <p className="text-xs leading-relaxed text-slate-400">
              Adopt connected turf booking, coaching batch management, and automated student attendance across multiple venues.
            </p>
          </div>
        </div>

        {/* CTAs */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact?intent=partner"
            className="group inline-flex items-center gap-2 rounded-full bg-emerald-500 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-950 hover:bg-emerald-400 transition-all"
          >
            <span>Become a Partner</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/10 transition-all"
          >
            <span>Talk to Ethertrix</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
