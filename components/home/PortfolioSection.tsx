'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Layers, Smartphone, Database, Check } from 'lucide-react';
import { fallbackClientProjects } from '@/lib/fallback-data';

const categories = ['All', 'Sports Technology', 'SaaS', 'Operations & Fleet', 'Legal Tech'];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredProjects = fallbackClientProjects.filter((project) => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Sports Technology') return project.category.includes('Sports');
    if (activeCategory === 'SaaS') return project.category.includes('SaaS');
    if (activeCategory === 'Operations & Fleet') return project.category.includes('Fleet') || project.category.includes('Operations');
    if (activeCategory === 'Legal Tech') return project.category.includes('Legal');
    return true;
  });

  return (
    <section id="portfolio" className="relative py-20 lg:py-28 border-t border-white/[0.06] bg-[#060b13]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
            ENGINEERING TRACK RECORD
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Portfolio &amp; Solutions
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-slate-400">
            Real systems engineered for high-concurrency operations, mission-critical workflows, and enterprise compliance.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                  : 'border border-white/10 bg-white/[0.03] text-slate-400 hover:border-white/20 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.slug}
              className="group rounded-3xl border border-white/5 bg-[#091222] p-8 flex flex-col justify-between transition-all duration-300 hover:border-emerald-500/30 hover:bg-[#0c1628]"
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold text-emerald-400 border border-emerald-500/20">
                    {project.type}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {project.industry}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {project.description}
                </p>

                {/* Challenge & Solution snippets */}
                <div className="mt-6 space-y-3 rounded-xl border border-white/5 bg-white/[0.02] p-4 text-xs">
                  <div>
                    <span className="font-semibold text-slate-400 uppercase tracking-wider block text-[10px]">Challenge</span>
                    <span className="text-slate-300">{project.challenge}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-emerald-400 uppercase tracking-wider block text-[10px]">Solution</span>
                    <span className="text-slate-300">{project.solution}</span>
                  </div>
                </div>

                {/* Capabilities list */}
                <div className="mt-6">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                    Key Capabilities:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.capabilities.map((cap) => (
                      <span
                        key={cap}
                        className="inline-flex items-center gap-1 rounded-md bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-slate-300 border border-white/5"
                      >
                        <Check className="h-3 w-3 text-emerald-400" />
                        <span>{cap}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer Tech Stack & Link */}
              <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded bg-white/5 px-2 py-0.5 text-[10px] font-mono text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href={project.slug === 'sports-os' ? '/products/sports-os' : `/portfolio/${project.slug}`}
                  className="group/link inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <span>Explore System</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
