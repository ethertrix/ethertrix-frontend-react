import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return <main className="construction-page"><Link href="/" className="brand"><Image className="brand-mark" src="/ethertrix-logo.png" alt="Ethertrix logo" width={42} height={42} />ETHERTRIX</Link><div><p className="eyebrow">SITE UNDER CONSTRUCTION</p><h1>This page is being built with care.</h1><p>The page you requested is not ready yet. The rest of the Ethertrix site is available while we finish the work.</p><Link href="/" className="button">Return home <span aria-hidden="true">→</span></Link></div><span className="construction-number" aria-hidden="true">404</span></main>;
}
