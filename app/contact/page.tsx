import type { Metadata } from 'next';
import ContactSection from '@/components/home/ContactSection';
import { Sparkles, MapPin, Mail, Phone, Clock, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Ethertrix | Initiate a Project or Sports OS Demo',
  description:
    'Contact Ethertrix: discuss sports technology, request an Ethertrix Sports OS demonstration, or partner on custom SaaS and operations platforms.',
};

export default function ContactPage() {
  return (
    <div className="py-16 lg:py-24 bg-[#060b13] text-white relative overflow-hidden">
      <div className="ambient-glow-emerald -top-20 left-1/4 opacity-40 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-300">
            <Sparkles className="h-3.5 w-3.5" />
            <span>DIRECT ACCESS TO TECHNICAL LEADERSHIP</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            Let&apos;s Build the Future of Sports Operations.
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            Whether you run a sports tournament, manage a multi-court facility, or need custom enterprise software engineered from scratch, we want to hear from you.
          </p>
        </div>

        {/* Contact Form & Channels */}
        <ContactSection />
      </div>
    </div>
  );
}
