import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PortfolioExplorer from "@/components/work/PortfolioExplorer";
import { getPortfolio } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Selected Work | Ethertrix",
  description: "Explore Ethertrix software products across operations, logistics, legal technology, and events.",
};

export default async function WorkPage() {
  const portfolio = await getPortfolio();
  return <>
    <header className="site-header"><Link href="/" className="brand"><Image className="brand-mark" src="/ethertrix-logo.png" alt="Ethertrix logo" width={42} height={42} priority />ETHERTRIX</Link><nav aria-label="Portfolio navigation"><Link href="/">Home</Link><Link href="/#services">Services</Link><Link href="/work" aria-current="page">Portfolio</Link><Link href="/#contact" className="nav-cta">Let&apos;s talk</Link></nav></header>
    <main>
      <section className="work-hero"><p className="eyebrow">SELECTED WORK</p><div className="work-hero-grid"><h1>Software built around the way work <em>really happens.</em></h1><div><p>From depot operations and dispatch control to legal services and public events, we turn complex workflows into clear digital products.</p><div className="portfolio-metrics"><div><strong>{portfolio.count}</strong><span>Products</span></div><div><strong>{portfolio.categories.length}</strong><span>Industries</span></div><div><strong>Web + mobile</strong><span>Delivery</span></div></div></div></div></section>
      <section className="portfolio-section" aria-label="Ethertrix case studies"><PortfolioExplorer projects={portfolio.projects} /></section>
      <section className="work-cta"><p className="eyebrow">HAVE A WORKFLOW WORTH FIXING?</p><h2>Let&apos;s design the system behind your next stage of growth.</h2><Link href="/#contact">Start a conversation <span aria-hidden="true">→</span></Link></section>
    </main>
    <footer><Link href="/" className="brand"><Image className="brand-mark" src="/ethertrix-logo.png" alt="Ethertrix logo" width={36} height={36} />ETHERTRIX</Link><p>SaaS products & enterprise systems.</p><p>© {new Date().getFullYear()} Ethertrix</p></footer>
  </>;
}
