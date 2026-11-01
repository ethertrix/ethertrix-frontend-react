import HeroSection from '@/components/home/HeroSection';
import IntroductionSection from '@/components/home/IntroductionSection';
import SportsOSShowcase from '@/components/home/SportsOSShowcase';
import WhoWeServeSection from '@/components/home/WhoWeServeSection';
import TechServicesSection from '@/components/home/TechServicesSection';
import SportsTechServicesSection from '@/components/home/SportsTechServicesSection';
import HowWeWorkSection from '@/components/home/HowWeWorkSection';
import ProductsAndSolutionsSection from '@/components/home/ProductsAndSolutionsSection';
import PortfolioSection from '@/components/home/PortfolioSection';
import WhyEthertrixSection from '@/components/home/WhyEthertrixSection';
import FounderStorySection from '@/components/home/FounderStorySection';
import PartnershipsSection from '@/components/home/PartnershipsSection';
import InvestorEcosystemSection from '@/components/home/InvestorEcosystemSection';
import ContactSection from '@/components/home/ContactSection';

export const revalidate = 60; // Dynamic server revalidation every 60s

export default async function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* 2. Hero Section */}
      <HeroSection />

      {/* 3. Ethertrix Introduction */}
      <IntroductionSection />

      {/* 4. Sports OS — Flagship Product */}
      <SportsOSShowcase />

      {/* 5. Who We Serve */}
      <WhoWeServeSection />

      {/* 6. Technology Services */}
      <TechServicesSection />

      {/* 7. Sports Technology Services */}
      <SportsTechServicesSection />

      {/* 8. How We Work */}
      <HowWeWorkSection />

      {/* 9. Products & Solutions (Separation of In-House vs Client) */}
      <ProductsAndSolutionsSection />

      {/* 10. Portfolio / Work */}
      <PortfolioSection />

      {/* 11. Why Ethertrix */}
      <WhyEthertrixSection />

      {/* 12. Founder / Company Story */}
      <FounderStorySection />

      {/* 13. Partnerships */}
      <PartnershipsSection />

      {/* 14. Investor / Ecosystem Positioning */}
      <InvestorEcosystemSection />

      {/* 15. Contact Section */}
      <ContactSection />
    </main>
  );
}
