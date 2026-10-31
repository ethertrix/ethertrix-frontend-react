import Link from 'next/link';
import { Layers, Smartphone, Database, Workflow, ArrowUpRight } from 'lucide-react';
import { ServiceOffering } from '@/lib/types';

interface ServicesSectionProps {
  services: ServiceOffering[];
}

export default function ServicesSection({ services }: ServicesSectionProps) {
  const getIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'layers':
        return <Layers className="h-6 w-6 text-emerald-400" />;
      case 'smartphone':
        return <Smartphone className="h-6 w-6 text-cyan-400" />;
      case 'database':
        return <Database className="h-6 w-6 text-blue-400" />;
      case 'workflow':
        return <Workflow className="h-6 w-6 text-purple-400" />;
      default:
        return <Layers className="h-6 w-6 text-emerald-400" />;
    }
  };

  return (
    <section className="py-24 bg-[#080f1b] relative overflow-hidden border-t border-b border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-300">
            <span>Core Capabilities &bull; Global Delivery</span>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            SaaS Engineering Services
          </h2>
          <p className="mt-3 text-base text-slate-300">
            We partner with founders and enterprise leaders across the world to build, launch, and modernize mission-critical digital systems.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((service, idx) => (
            <div
              key={service.slug || idx}
              className="glass-panel group rounded-3xl p-8 hover:border-emerald-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 border border-white/10 group-hover:scale-105 transition-transform">
                  {getIcon(service.icon)}
                </div>

                <h3 className="mt-6 text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  {service.shortDescription}
                </p>

                <div className="mt-6 border-t border-white/5 pt-4">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Key Deliverables
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {service.capabilities.map((cap, cIdx) => (
                      <li key={cIdx} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-4">
                <div className="flex flex-wrap gap-1.5">
                  {service.techStack.slice(0, 3).map((tech, tIdx) => (
                    <span key={tIdx} className="tech-tag text-[10px]">
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/services#${service.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 hover:text-emerald-300"
                >
                  <span>Learn more</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
