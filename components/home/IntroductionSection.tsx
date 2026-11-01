import { Search, Compass, Code2, Rocket, TrendingUp, Layers, Cpu } from 'lucide-react';

const journeySteps = [
  {
    step: '01',
    title: 'Discover',
    icon: Search,
    description: 'We analyze operational bottlenecks, fragmented tools, and communication friction across your field, staff, and users.',
  },
  {
    step: '02',
    title: 'Design',
    icon: Compass,
    description: 'We architect intuitive workflows, normalize complex operational data schemas, and design streamlined, accessible interfaces.',
  },
  {
    step: '03',
    title: 'Build',
    icon: Code2,
    description: 'We engineer robust, type-safe full-stack systems and cross-platform mobile apps built for high reliability and zero data loss.',
  },
  {
    step: '04',
    title: 'Deploy',
    icon: Rocket,
    description: 'We implement hardened cloud infrastructure, zero-downtime release pipelines, payment gateways, and operator training.',
  },
  {
    step: '05',
    title: 'Scale',
    icon: TrendingUp,
    description: 'We support your digital expansion with telemetry monitoring, performance tuning, and long-term technical evolution.',
  },
];

export default function IntroductionSection() {
  return (
    <section className="relative py-20 lg:py-28 border-y border-white/[0.06] bg-[#070d17]/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-400">
            <Layers className="h-3.5 w-3.5" />
            <span>OPERATIONAL UNIFICATION</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            We build technology that connects operations.
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-slate-400">
            Modern organizations often use multiple disconnected tools to manage their daily operations—spreadsheets for schedules, paper forms for registration, fragmented chats for coordination, and siloed payment links. Ethertrix brings these disconnected workflows together into unified, cohesive digital platforms.
          </p>
        </div>

        {/* Two Pillars Grid: Products & Services */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Pillar 1: Products */}
          <div className="group rounded-2xl border border-white/10 bg-[#0a1221] p-8 transition-all hover:border-emerald-500/30 hover:bg-[#0c1628]">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <Cpu className="h-5 w-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">Pillar 01</span>
                <h3 className="text-xl font-bold text-white">SaaS Products</h3>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Building scalable, multi-tenant SaaS products designed to solve deep domain problems, headlined by the <strong className="text-slate-200">Ethertrix Sports Operating System</strong>—our centralized platform for modern sports management.
            </p>
          </div>

          {/* Pillar 2: Services */}
          <div className="group rounded-2xl border border-white/10 bg-[#0a1221] p-8 transition-all hover:border-cyan-500/30 hover:bg-[#0c1628]">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                <Layers className="h-5 w-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400">Pillar 02</span>
                <h3 className="text-xl font-bold text-white">Technology &amp; Sports Services</h3>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Partnering with sports organizations and ambitious businesses to engineer custom digital platforms, mobile apps, and backend systems from initial concept to global enterprise deployment.
            </p>
          </div>
        </div>

        {/* The 5-Step Visual Journey */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              OUR PRODUCT &amp; ENGINEERING JOURNEY
            </span>
            <h3 className="mt-2 text-2xl font-bold text-white">
              Discover &rarr; Design &rarr; Build &rarr; Deploy &rarr; Scale
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {journeySteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.step}
                  className="relative rounded-xl border border-white/5 bg-[#09111e] p-5 transition-all hover:border-emerald-500/20 hover:bg-[#0b1526]"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-emerald-400">{step.step}</span>
                    <Icon className="h-4 w-4 text-slate-400" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">{step.title}</h4>
                  <p className="text-xs leading-relaxed text-slate-400">{step.description}</p>
                  
                  {idx < journeySteps.length - 1 && (
                    <div className="hidden md:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 text-slate-600 font-bold text-xs pointer-events-none">
                      &rarr;
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
