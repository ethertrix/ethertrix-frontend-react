'use client';

import { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Phone } from 'lucide-react';
import { submitInquiry } from '@/lib/api';

const projectTypes = [
  'Ethertrix Sports OS Inquiry',
  'Custom Sports Technology Platform',
  'Web & Mobile App Development',
  'SaaS Product Engineering',
  'Tournament / Event Technology',
  'General Consultation / Partnership',
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: projectTypes[0],
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setStatusMessage('Please fill in your name, email, and message.');
      return;
    }

    setStatus('submitting');
    setStatusMessage('');

    const res = await submitInquiry({
      name: formData.name,
      email: formData.email,
      company: formData.company,
      phone: formData.phone,
      projectType: formData.projectType,
      message: formData.message,
    });

    if (res.success) {
      setStatus('success');
      setStatusMessage(res.message || 'Thank you! Your message has been received. Our team will follow up within 24 hours.');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        projectType: projectTypes[0],
        message: '',
      });
    } else {
      setStatus('error');
      setStatusMessage(res.message || 'Failed to submit. Please try again or email us directly.');
    }
  };

  return (
    <section id="contact" className="relative py-20 lg:py-28 border-t border-white/[0.06] bg-[#070e1a]/70">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              INITIATE A CONVERSATION
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Have a sports technology challenge?
            </h2>
            <p className="text-base leading-relaxed text-slate-300">
              Let&apos;s talk about building your next digital solution. Whether you want to adopt the Ethertrix Sports OS platform or engineer a custom digital system, our engineering team is ready to assist.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3.5 rounded-xl border border-white/5 bg-[#091222] p-4">
                <Mail className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Direct Email</span>
                  <a href="mailto:contact@ethertrix.com" className="text-sm font-medium text-white hover:text-emerald-400 transition-colors">
                    contact@ethertrix.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 rounded-xl border border-white/5 bg-[#091222] p-4">
                <Phone className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Direct Line</span>
                  <span className="text-sm font-medium text-white">
                    +91 98400 00000
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 rounded-xl border border-white/5 bg-[#091222] p-4">
                <MapPin className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Headquarters</span>
                  <span className="text-sm font-medium text-white">
                    Chennai, Tamil Nadu, India
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-emerald-500/20 bg-emerald-950/20 p-4 text-xs text-slate-400">
              <span className="text-emerald-400 font-bold block mb-1">Confidential &amp; Direct</span>
              All project specifications and inquiries are treated with strict confidentiality. Direct review by technical leadership.
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-white/10 bg-[#091222] p-8 lg:p-10 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-6">
                Tell Us About Your Project
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Interest / Project Type Selector */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    I am interested in:
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-[#060b13] px-4 py-3 text-sm text-white focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  >
                    {projectTypes.map((type) => (
                      <option key={type} value={type} className="bg-[#060b13] text-white">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Santhosh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-[#060b13] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. name@organization.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-[#060b13] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                {/* Company & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                      Organization / Club
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Tamil Nadu Badminton League"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-[#060b13] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +91 98400 00000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-[#060b13] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                    Operational Requirements / Scope *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your event format, court capacity, registration bottlenecks, or custom software requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-[#060b13] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                </div>

                {/* Status alerts */}
                {status === 'success' && (
                  <div className="flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-xs text-emerald-400">
                    <CheckCircle2 className="h-4 w-4 shrink-0" />
                    <span>{statusMessage}</span>
                  </div>
                )}

                {status === 'error' && (
                  <div className="flex items-center gap-2 rounded-xl border border-rose-500/30 bg-rose-500/10 p-3 text-xs text-rose-400">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    <span>{statusMessage}</span>
                  </div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-emerald-500/20 hover:bg-emerald-400 disabled:opacity-50 transition-all cursor-pointer"
                >
                  <Send className="h-4 w-4" />
                  <span>
                    {status === 'submitting' ? 'Submitting Inquiry...' : 'Submit Inquiry'}
                  </span>
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
