import {
  Compass,
  FileCode,
  Layers,
  Rocket,
  LineChart,
} from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Understand',
    icon: Compass,
    summary: 'Understand the business, operational or sports problem.',
    detail: 'We immerse ourselves in your on-ground reality: interview tournament directors, map out friction points, audit paper records, and analyze constraint logic before writing a single line of code.',
  },
  {
    number: '02',
    title: 'Design',
    icon: Layers,
    summary: 'Design the product and user experience.',
    detail: 'We architect normalized database models, create accessible UI design tokens, and map clear user journeys tailored for court officials, athletes, facility managers, or enterprise dispatchers.',
  },
  {
    number: '03',
    title: 'Build',
    icon: FileCode,
    summary: 'Develop the technology using modern architecture.',
    detail: 'We build with modern, decoupled technology—Fastify, PostgreSQL, Next.js, and Flutter. We enforce strict TypeScript schemas, automated unit tests, and robust transaction safeguards.',
  },
  {
    number: '04',
    title: 'Launch',
    icon: Rocket,
    summary: 'Deploy and integrate the solution.',
    detail: 'We orchestrate zero-downtime releases, configure reverse proxies and SSL, integrate payment gateways, stress-test concurrency limits, and train operational team members.',
  },
  {
    number: '05',
    title: 'Evolve',
    icon: LineChart,
    summary: 'Improve, scale and support the product.',
    detail: 'True platforms prove their value in production. We monitor system telemetry, optimize database indexes under real tournament load, and provide continuous iterative evolution.',
  },
];

export default function HowWeWorkSection() {
  return (
    <section id="how-we-work" className="relative py-20 lg:py-28 border-t border-white/[0.06] bg-[#060b13]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
            OUR METHODOLOGY
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            How We Work
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-slate-400">
            A structured, disciplined 5-step engineering process that takes projects from initial ambiguity to production-grade reliability.
          </p>
        </div>

        {/* 5-Step Process Cards */}
        <div className="mt-16 space-y-4">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="group relative rounded-2xl border border-white/5 bg-[#091222] p-6 lg:p-8 transition-all duration-300 hover:border-emerald-500/30 hover:bg-[#0c1628]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  
                  {/* Step Number & Title */}
                  <div className="lg:col-span-4 flex items-center gap-4">
                    <span className="text-3xl lg:text-4xl font-black font-mono text-emerald-400/80 group-hover:text-emerald-300 transition-colors">
                      {step.number}
                    </span>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-emerald-400 group-hover:border-emerald-500/30 transition-colors">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="lg:col-span-4">
                    <p className="text-sm font-semibold text-slate-200">
                      {step.summary}
                    </p>
                  </div>

                  {/* Detailed Description */}
                  <div className="lg:col-span-4">
                    <p className="text-xs leading-relaxed text-slate-400">
                      {step.detail}
                    </p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
