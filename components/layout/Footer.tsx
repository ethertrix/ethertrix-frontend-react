import Link from 'next/link';
import { ArrowUpRight, Mail, MapPin, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#04080e] text-slate-400">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Company Bio */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight text-white">ETHERTRIX</span>
            </Link>
            <p className="text-xs font-semibold tracking-wider uppercase text-emerald-400">
              SaaS Products &bull; Sports Technology &bull; Digital Solutions
            </p>
            <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
              Ethertrix is a technology company building SaaS products and digital solutions, with a deep focus on powering the next generation of sports operations.
            </p>
            <div className="flex flex-col gap-2 pt-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Headquartered in Chennai, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-emerald-400 shrink-0" />
                <a href="mailto:contact@ethertrix.com" className="hover:text-emerald-400 transition-colors">
                  contact@ethertrix.com
                </a>
              </div>
            </div>
            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://linkedin.com/company/ethertrix"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/10 bg-white/5 p-2 text-slate-400 hover:border-emerald-500/40 hover:text-white transition-colors"
                aria-label="Ethertrix LinkedIn"
              >
                <span className="text-xs font-semibold">LinkedIn</span>
              </a>
              <a
                href="https://instagram.com/ethertrix"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/10 bg-white/5 p-2 text-slate-400 hover:border-emerald-500/40 hover:text-white transition-colors"
                aria-label="Ethertrix Instagram"
              >
                <span className="text-xs font-semibold">Instagram</span>
              </a>
              <a
                href="https://youtube.com/@ethertrix"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/10 bg-white/5 p-2 text-slate-400 hover:border-emerald-500/40 hover:text-white transition-colors"
                aria-label="Ethertrix YouTube"
              >
                <span className="text-xs font-semibold">YouTube</span>
              </a>
            </div>
          </div>

          {/* Flagship Product */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
              Products
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link
                  href="/products/sports-os"
                  className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Ethertrix Sports OS</span>
                </Link>
              </li>
              <li>
                <Link href="/products/sports-os#capabilities" className="hover:text-white transition-colors">
                  Ecosystem Capabilities
                </Link>
              </li>
              <li>
                <Link href="/products/sports-os#audiences" className="hover:text-white transition-colors">
                  Who We Serve
                </Link>
              </li>
              <li>
                <Link href="/products/sports-os#architecture" className="hover:text-white transition-colors">
                  Platform Architecture
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/services#tech-services" className="hover:text-white transition-colors">
                  Technology Services
                </Link>
              </li>
              <li>
                <Link href="/sports-technology" className="hover:text-white transition-colors">
                  Sports Technology &amp; Operations
                </Link>
              </li>
              <li>
                <Link href="/services#saas" className="hover:text-white transition-colors">
                  SaaS Engineering
                </Link>
              </li>
              <li>
                <Link href="/services#cloud" className="hover:text-white transition-colors">
                  Cloud &amp; Deployment
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-white transition-colors">
                  Client Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Ethertrix
                </Link>
              </li>
              <li>
                <Link href="/about#founder-story" className="hover:text-white transition-colors">
                  Founder Story
                </Link>
              </li>
              <li>
                <Link href="/#how-we-work" className="hover:text-white transition-colors">
                  How We Work
                </Link>
              </li>
              <li>
                <Link href="/#why-ethertrix" className="hover:text-white transition-colors">
                  Why Ethertrix
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-white transition-colors">
                  Insights &amp; Architecture
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>Let&apos;s Talk</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 border-t border-white/[0.08] pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} ETHERTRIX. All rights reserved. Technology That Powers Sports Operations.
          </p>
          <div className="flex items-center gap-6">
            <span>Building from India for the Global Sports Ecosystem</span>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">
              Contact &amp; Partnerships
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
