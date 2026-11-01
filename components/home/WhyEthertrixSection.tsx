import { Brain, Cpu, Compass, Handshake } from 'lucide-react';

const whyUsPoints = [
  {
    title: 'Product Thinking',
    headline: "We don't just build features.",
    description: 'We think deeply about end-to-end product usability, data coherence, operator incentives, user lifecycle, and sustainable business models.',
    icon: Brain,
  },
  {
    title: 'Engineering Rigor',
    headline: 'Modern technology architecture designed for reliability and scale.',
    description: 'We engineer with type-safe, modular stacks (Next.js, Fastify, PostgreSQL, Flutter) built to withstand peak tournament concurrency without data corruption.',
    icon: Cpu,
  },
  {
    title: 'Domain Understanding',
    headline: 'Real-world operational knowledge of sports and business processes.',
    description: 'We understand the chaos of rainy outdoor tournament courts, referee scheduling conflicts, and driver paper logbooks before writing a single line of code.',
    icon: Compass,
  },
  {
    title: 'Long-Term Partnership',
    headline: 'We work with organizations as long-term technology partners.',
    description: 'We do not abandon platforms at launch. We provide infrastructure maintenance, continuous security audits, and architectural evolution as our partners scale.',
    icon: Handshake,
  },
];

export default function WhyEthertrixSection() {
  return (
    <section id="why-ethertrix" className="relative py-20 lg:py-28 border-t border-white/[0.06] bg-[#070e1a]/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
            OUR ADVANTAGE
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Why build with Ethertrix?
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-slate-400">
            Technology is only as good as the operational understanding behind it. Here is what sets our approach apart.
          </p>
        </div>

        {/* 4 Strong Points Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {whyUsPoints.map((point) => {
            const Icon = point.icon;
            return (
              <div
                key={point.title}
                className="group rounded-3xl border border-white/5 bg-[#091222] p-8 transition-all duration-300 hover:border-emerald-500/30 hover:bg-[#0c1628]"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                      Pillar
                    </span>
                    <h3 className="text-xl font-bold text-white">
                      {point.title}
                    </h3>
                  </div>
                </div>

                <h4 className="text-base font-semibold text-slate-200 mt-2">
                  {point.headline}
                </h4>

                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
