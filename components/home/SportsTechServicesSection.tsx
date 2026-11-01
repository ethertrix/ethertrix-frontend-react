import Link from 'next/link';
import {
  Calendar,
  Trophy,
  UserCheck,
  Activity,
  Sliders,
  Users,
  MapPin,
  BarChart3,
  ArrowRight,
} from 'lucide-react';

const sportsServices = [
  {
    title: 'Event Technology',
    icon: Calendar,
    tag: 'Infrastructure',
    description: 'On-ground and cloud software deployments integrating race-timing systems, digital display boards, and fast QR registration booths.',
  },
  {
    title: 'Tournament Management',
    icon: Trophy,
    tag: 'Draw Algorithms',
    description: 'Custom bracket generators for single/double elimination and round-robin leagues with real-time seed placements and tie-breakers.',
  },
  {
    title: 'Registration Systems',
    icon: UserCheck,
    tag: 'High-Throughput',
    description: 'Custom entry portals engineered to withstand thousands of concurrent registrations with zero duplicate bib allocations.',
  },
  {
    title: 'Competition Management',
    icon: Activity,
    tag: 'Match Operations',
    description: 'Matchday tablets for umpires, point scoring, dispute tracking, disciplinary yellow/red cards, and official digital match reports.',
  },
  {
    title: 'Sports Operations Technology',
    icon: Sliders,
    tag: 'Field Logistics',
    description: 'Operational backends coordinating multi-pitch logistics, equipment inventories, volunteer shifts, and official travel per diems.',
  },
  {
    title: 'Participant Management',
    icon: Users,
    tag: 'Athlete Passports',
    description: 'Centralized athlete databases with verified credentials, biometric registration, age validation, and historical tournament stats.',
  },
  {
    title: 'Venue Technology',
    icon: MapPin,
    tag: 'Facility Operations',
    description: 'Turf and arena management systems handling hourly slots, membership packages, floodlight scheduling, and conflict-free booking.',
  },
  {
    title: 'Sports Data & Analytics',
    icon: BarChart3,
    tag: 'Performance Insights',
    description: 'Live WebSocket score broadcasting, player statistical leaderboards, and executive attendance/revenue analytics.',
  },
];

export default function SportsTechServicesSection() {
  return (
    <section id="sports-services" className="relative py-20 lg:py-28 border-t border-white/[0.06] bg-[#070e1a]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
            DOMAIN EXPERTISE
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Technology for the sports ecosystem.
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-slate-400">
            Ethertrix combines deep software engineering expertise with an understanding of sports operational realities. We help sports organizations replace paper-heavy chaos with connected digital workflows.
          </p>
        </div>

        {/* 8 Cards Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sportsServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group rounded-2xl border border-white/5 bg-[#0a1221] p-6 transition-all duration-300 hover:border-emerald-500/30 hover:bg-[#0c172a] hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="rounded bg-white/5 px-2 py-0.5 text-[10px] font-semibold text-slate-400">
                    {service.tag}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
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
            href="/sports-technology"
            className="group inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-8 py-3.5 text-sm font-semibold text-emerald-300 hover:bg-emerald-500 hover:text-slate-950 transition-all"
          >
            <span>Explore Sports Solutions</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}
