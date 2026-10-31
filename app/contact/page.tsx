import type { Metadata } from 'next';
import ContactSection from '@/components/home/ContactSection';

export const metadata: Metadata = {
  title: 'Contact Ethertrix LLP | Chennai Headquarters',
  description:
    'Get in touch with Ethertrix LLP in Chennai, India. Request a demo for SportsE2E or schedule an engineering consultation for custom SaaS platforms.',
};

export default function ContactPage() {
  return (
    <div className="py-12 bg-[#060b13]">
      <ContactSection />
    </div>
  );
}
