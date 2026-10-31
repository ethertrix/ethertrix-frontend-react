'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#060b13]/80 backdrop-blur-xl transition-all">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Brand Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 via-cyan-500 to-blue-600 p-[1px] shadow-lg shadow-emerald-500/10 transition-transform group-hover:scale-105">
            <div className="flex h-full w-full items-center justify-center rounded-[11px] bg-[#060b13]">
              <span className="text-lg font-black tracking-tighter text-white">E</span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                ETHERTRIX
              </span>
              <span className="rounded bg-emerald-500/10 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-400 border border-emerald-500/20">
                LLP
              </span>
            </div>
            <span className="text-[11px] font-medium tracking-wide text-slate-400">
              Chennai &bull; Global SaaS Engineering
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/products/sportse2e"
            className="flex items-center gap-1.5 text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors"
          >
            <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
            <span>SportsE2E</span>
            <span className="rounded-full bg-emerald-400/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-400">
              Product
            </span>
          </Link>
          <Link
            href="/work"
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            Work &amp; Case Studies
          </Link>
          <Link
            href="/services"
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            Services
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            About Ethertrix
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-md shadow-emerald-500/20 hover:bg-emerald-400 hover:shadow-emerald-500/30 transition-all"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-slate-400 hover:bg-white/5 hover:text-white"
            aria-expanded={mobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#080f1a] px-6 py-6 space-y-4">
          <Link
            href="/products/sportse2e"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between rounded-lg p-3 text-base font-medium text-white hover:bg-white/5"
          >
            <span className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-emerald-400" />
              SportsE2E (Flagship Product)
            </span>
            <ArrowUpRight className="h-4 w-4 text-emerald-400" />
          </Link>
          <Link
            href="/work"
            onClick={() => setMobileMenuOpen(false)}
            className="block rounded-lg p-3 text-base font-medium text-slate-300 hover:bg-white/5 hover:text-white"
          >
            Work &amp; Case Studies (Match Making, Fleet, Legal)
          </Link>
          <Link
            href="/services"
            onClick={() => setMobileMenuOpen(false)}
            className="block rounded-lg p-3 text-base font-medium text-slate-300 hover:bg-white/5 hover:text-white"
          >
            SaaS Engineering Services
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block rounded-lg p-3 text-base font-medium text-slate-300 hover:bg-white/5 hover:text-white"
          >
            About Ethertrix LLP
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block rounded-lg p-3 text-base font-medium text-slate-300 hover:bg-white/5 hover:text-white"
          >
            Contact Chennai HQ
          </Link>

          <div className="pt-2">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 py-3 text-center text-sm font-semibold text-slate-950 hover:bg-emerald-400"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
