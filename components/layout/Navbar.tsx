'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Products', href: '/products/sports-os', badge: 'Sports OS' },
  { label: 'Services', href: '/services' },
  { label: 'Sports Technology', href: '/sports-technology' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-[#060b13]/85 backdrop-blur-xl transition-all">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Brand Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 via-cyan-500 to-blue-600 p-[1.5px] shadow-lg shadow-emerald-500/10 transition-transform group-hover:scale-105">
            <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-[#060b13]">
              <span className="text-lg font-black tracking-tighter text-white">E</span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                ETHERTRIX
              </span>
            </div>
            <span className="text-[11px] font-medium tracking-wide text-slate-400">
              SaaS Products &bull; Sports Operations
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative flex items-center gap-1.5 text-sm font-medium transition-colors ${
                  isActive ? 'text-emerald-400' : 'text-slate-300 hover:text-white'
                }`}
              >
                {item.badge && <Sparkles className="h-3 w-3 text-emerald-400" />}
                <span>{item.label}</span>
                {item.badge && (
                  <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-400 border border-emerald-500/20">
                    {item.badge}
                  </span>
                )}
                {isActive && (
                  <span className="absolute -bottom-6 left-0 right-0 h-[2px] bg-emerald-400 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-md shadow-emerald-500/20 hover:bg-emerald-400 hover:shadow-emerald-500/30 transition-all"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-slate-400 hover:bg-white/5 hover:text-white transition-colors"
            aria-expanded={mobileMenuOpen}
          >
            <span className="sr-only">Open navigation menu</span>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-white/10 bg-[#080f1a] px-6 py-6 space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between rounded-lg p-3 text-base font-medium transition-colors ${
                  isActive ? 'bg-white/10 text-emerald-400' : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                <span className="flex items-center gap-2">
                  {item.badge && <Sparkles className="h-4 w-4 text-emerald-400" />}
                  {item.label}
                </span>
                {item.badge && (
                  <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-400 border border-emerald-500/20">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}

          <div className="pt-4">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 py-3 text-center text-sm font-semibold text-slate-950 hover:bg-emerald-400 transition-colors"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
