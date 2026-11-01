import {
  Building2,
  Award,
  Shield,
  GraduationCap,
  Trophy,
  Flame,
  Zap,
  MapPin,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';

const targetAudiences = [
  {
    title: 'Sports Organizations',
    description: 'Governing and regional administrative bodies seeking digital consolidation across member entities.',
    icon: Building2,
    badge: 'Governance',
  },
  {
    title: 'Sports Federations',
    description: 'National and state federations requiring centralized athlete databases, ranking points, and sanctioned event workflows.',
    icon: Award,
    badge: 'Sanctioning',
  },
  {
    title: 'Clubs',
    description: 'Competitive member clubs managing squads, rosters, kit numbers, coach allocations, and facility schedules.',
    icon: Shield,
    badge: 'Squad Operations',
  },
  {
    title: 'Academies',
    description: 'Training academies tracking student batches, daily attendance, physical assessments, and recurring tuition fees.',
    icon: GraduationCap,
    badge: 'Student Lifecycle',
  },
  {
    title: 'Tournament Organizers',
    description: 'Commercial tournament promoters generating automated brackets, live courtside scoring, and entry ticketing.',
    icon: Trophy,
    badge: 'Bracket Engines',
  },
  {
    title: 'Leagues',
    description: 'Multi-week franchise competitions requiring dynamic point tables, disciplinary records, and official match reports.',
    icon: Flame,
    badge: 'Franchise Fixtures',
  },
  {
    title: 'Sports Event Companies',
    description: 'Agencies delivering end-to-end race and corporate sports experiences requiring fast, verified mass registrations.',
    icon: Zap,
    badge: 'Mass Events',
  },
  {
    title: 'Sports Facilities',
    description: 'Turf and arena operators optimizing hourly venue yield, multi-court floodlight scheduling, and memberships.',
    icon: MapPin,
    badge: 'Venue Yield',
  },
];

export default function WhoWeServeSection() {
  return (
    <section className="relative py-20 lg:py-28 border-t border-white/[0.06] bg-[#070e1a]/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
            STAKEHOLDERS &amp; OPERATORS
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Built for the people who run sports.
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-slate-400">
            From grassroots academies to state federations and arena operators, our technology eliminates operational chaos and gives leaders total control.
          </p>
        </div>

        {/* 8 Distinct Audience Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {targetAudiences.map((audience) => {
            const Icon = audience.icon;
            return (
              <div
                key={audience.title}
                className="group relative rounded-2xl border border-white/5 bg-[#091222] p-6 transition-all duration-300 hover:border-emerald-500/30 hover:bg-[#0c172a] hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-emerald-400 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10 transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="rounded bg-white/5 px-2 py-0.5 text-[10px] font-semibold text-slate-400 group-hover:text-emerald-300 transition-colors">
                    {audience.badge}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                  {audience.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-400">
                  {audience.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-[#0a1324] p-6 lg:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-white">
              Running a tournament, league, or sports facility?
            </h4>
            <p className="text-sm text-slate-400 mt-1">
              Talk with our product team to see how Ethertrix can streamline your operational workflows.
            </p>
          </div>
          <Link
            href="/contact"
            className="group shrink-0 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-950 hover:bg-emerald-400 transition-all"
          >
            <span>Consult With Us</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}
