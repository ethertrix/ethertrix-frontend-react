import Hero from '@/components/home/Hero';
import SportsE2ESpotlight from '@/components/home/SportsE2ESpotlight';
import CaseStudiesSection from '@/components/home/CaseStudiesSection';
import ServicesSection from '@/components/home/ServicesSection';
import GlobalReachSection from '@/components/home/GlobalReachSection';
import ContactSection from '@/components/home/ContactSection';
import {
  getCompanyProfile,
  getProducts,
  getCaseStudies,
  getServices,
} from '@/lib/api';

export const revalidate = 60; // Dynamic server revalidation every 60s

export default async function HomePage() {
  // Dynamic server-side data fetching from Fastify backend (with resilient fallback)
  const [company, products, caseStudies, services] = await Promise.all([
    getCompanyProfile(),
    getProducts(),
    getCaseStudies(),
    getServices(),
  ]);

  const sportsE2EProduct = products.find((p) => p.slug === 'sportse2e') || products[0];

  return (
    <div className="flex flex-col">
      <Hero company={company} />
      <SportsE2ESpotlight product={sportsE2EProduct} />
      <CaseStudiesSection caseStudies={caseStudies} />
      <ServicesSection services={services} />
      <GlobalReachSection company={company} />
      <ContactSection />
    </div>
  );
}
