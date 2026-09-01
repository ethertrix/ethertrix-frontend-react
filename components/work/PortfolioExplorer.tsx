"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { PortfolioCategory, PortfolioProject } from "@/lib/portfolio";

type Filter = "All" | PortfolioCategory;

export default function PortfolioExplorer({ projects }: { projects: PortfolioProject[] }) {
  const [filter, setFilter] = useState<Filter>("All");
  const filters = useMemo<Filter[]>(
    () => ["All", ...Array.from(new Set(projects.map((project) => project.category)))],
    [projects],
  );
  const visibleProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter);

  return <>
    <div className="portfolio-filters" aria-label="Filter portfolio projects">
      {filters.map((item) => <button type="button" key={item} onClick={() => setFilter(item)} className={filter === item ? "portfolio-filter is-active" : "portfolio-filter"}>{item}</button>)}
    </div>
    <div className="portfolio-grid">
      {visibleProjects.map((project, index) => <article className="case-study" key={project.slug} id={project.slug}>
        <div className="case-study-media">
          {project.image ? <Image src={project.image} alt={`${project.title} product interface`} fill sizes="(max-width: 900px) 100vw, 54vw" className="case-study-image" priority={index < 2} /> : <div className="case-study-placeholder" aria-hidden="true"><span>{String(index + 1).padStart(2, "0")}</span><strong>{project.category}</strong></div>}
          <span className="case-study-index">Case study {String(index + 1).padStart(2, "0")}</span>
        </div>
        <div className="case-study-copy">
          <p className="eyebrow">{project.category}</p><h2>{project.title}</h2><p className="case-study-summary">{project.summary}</p>
          <div className="platform-list">{project.platforms.map((platform) => <span key={platform}>{platform}</span>)}</div>
          <details className="case-study-details"><summary>Explore the build <span aria-hidden="true">+</span></summary>
            <div className="detail-columns"><div><h3>Challenge</h3><p>{project.challenge}</p></div><div><h3>Solution</h3><p>{project.solution}</p></div></div>
            <div className="detail-columns"><div><h3>Capabilities</h3><ul>{project.capabilities.map((item) => <li key={item}>{item}</li>)}</ul></div><div><h3>Technology</h3><div className="stack-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div></div></div>
            {project.gallery.length > 0 && <div className="case-gallery">{project.gallery.map((image) => <div className="case-gallery-image" key={image}><Image src={image} alt={`${project.title} interface detail`} fill sizes="(max-width: 900px) 100vw, 40vw" /></div>)}</div>}
          </details>
        </div>
      </article>)}
    </div>
  </>;
}
