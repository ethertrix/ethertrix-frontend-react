import type { Metadata } from "next";
import "./globals.css";
import "./portfolio.css";

export const metadata: Metadata = {
  title: "Ethertrix | Architecture for execution",
  description: "Ethertrix helps ambitious organisations build the shared foundations that make execution reliable and growth less fragile.",
  metadataBase: new URL("https://www.ethertrix.com"),
  openGraph: { title: "Ethertrix | Architecture for execution", description: "Build the shared foundations that make execution reliable—and growth less fragile.", url: "/", siteName: "Ethertrix", type: "website" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
