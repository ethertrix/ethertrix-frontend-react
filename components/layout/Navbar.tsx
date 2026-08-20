import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#050B18]/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-[0.15em] text-white"
        >
          ETHERTRIX
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm text-white transition-colors hover:text-blue-400"
          >
            Home
          </Link>

          <Link
            href="/services"
            className="text-sm text-gray-400 transition-colors hover:text-white"
          >
            Solutions
          </Link>

          <Link
            href="/expertise"
            className="text-sm text-gray-400 transition-colors hover:text-white"
          >
            Expertise
          </Link>

          <Link
            href="/industries"
            className="text-sm text-gray-400 transition-colors hover:text-white"
          >
            Industries
          </Link>

          <Link
            href="/work"
            className="text-sm text-gray-400 transition-colors hover:text-white"
          >
            Work
          </Link>

          <Link
            href="/about"
            className="text-sm text-gray-400 transition-colors hover:text-white"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="text-sm text-gray-400 transition-colors hover:text-white"
          >
            Contact
          </Link>
        </nav>

        {/* CTA */}
        <Link
          href="/contact"
          className="hidden rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-500 md:block"
        >
          Start a Project
        </Link>

      </div>
    </header>
  );
}