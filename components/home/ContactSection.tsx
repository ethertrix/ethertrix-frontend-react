'use client';

import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Sparkles, MapPin, Mail, Phone } from 'lucide-react';
import { submitInquiry } from '@/lib/api';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: 'SaaS Platform Development',
    budgetRange: '$10k - $25k',
    timeline: '1 - 3 Months',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setFeedbackMessage('');

    try {
      const result = await submitInquiry(formData);
      if (result.success) {
        setStatus('success');
        setFeedbackMessage(result.message);
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          projectType: 'SaaS Platform Development',
          budgetRange: '$10k - $25k',
          timeline: '1 - 3 Months',
          message: '',
        });
      } else {
        setStatus('error');
        setFeedbackMessage(result.message);
      }
    } catch (err) {
      setStatus('error');
      setFeedbackMessage('Unable to reach the server. Please try again or email contact@ethertrix.com directly.');
    }
  };

  return (
    <section id="contact-form" className="py-24 bg-[#050910] relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left info column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-300">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Let&apos;s Build Together</span>
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Start Your Next SaaS Project.
            </h2>

            <p className="text-base text-slate-300 leading-relaxed">
              Whether you want to license or white-label <strong>SportsE2E</strong>, engineer a high-throughput matchmaking engine, orchestrate fleet operations, or build a bespoke enterprise SaaS from scratch, our Chennai engineering team is ready.
            </p>

            <div className="space-y-4 pt-4 border-t border-white/10 text-sm text-slate-300">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-emerald-400 shrink-0" />
                <span>Headquarters: Chennai, Tamil Nadu, India (Ethertrix LLP)</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-emerald-400 shrink-0" />
                <span>Direct Inquiries: contact@ethertrix.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-emerald-400 shrink-0" />
                <span>Client Consultations Available Globally Across Timezones</span>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-xs text-slate-400">
              <div className="font-semibold text-white mb-1">What Happens Next?</div>
              <p>1. Your requirements are routed directly to our Fastify/PostgreSQL backend.</p>
              <p className="mt-1">2. Our engineering lead reviews your scope within 24 hours.</p>
              <p className="mt-1">3. We schedule an architecture discovery call with preliminary technical estimates.</p>
            </div>
          </div>

          {/* Right form column (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-white/10 shadow-2xl">
              {status === 'success' ? (
                <div className="py-12 text-center space-y-4">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Inquiry Received!</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    {feedbackMessage}
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="mt-6 rounded-xl bg-emerald-500 px-6 py-2.5 text-xs font-bold text-slate-950 hover:bg-emerald-400 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {status === 'error' && (
                    <div className="flex items-center gap-2 rounded-xl border border-rose-500/30 bg-rose-500/10 p-3 text-xs text-rose-300">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      <span>{feedbackMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. David Miller"
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-emerald-400 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="david@company.com"
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-emerald-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Ethertrix Partner LLC"
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-emerald-400 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 555 019 2834"
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-emerald-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Project Interest
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full rounded-xl border border-white/10 bg-[#0d1627] px-4 py-2.5 text-sm text-white focus:border-emerald-400 focus:outline-none"
                      >
                        <option value="SaaS Platform Development">Full-Cycle SaaS Engineering</option>
                        <option value="SportsE2E Platform">SportsE2E Implementation / License</option>
                        <option value="Match Making System">Match Making &amp; Discovery Engine</option>
                        <option value="Fleet Management">Fleet Telematics &amp; Operations</option>
                        <option value="Legal Services Platform">Legal Tech &amp; Marketplace</option>
                        <option value="Mobile App Development">Mobile App (Flutter / React Native)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Target Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full rounded-xl border border-white/10 bg-[#0d1627] px-4 py-2.5 text-sm text-white focus:border-emerald-400 focus:outline-none"
                      >
                        <option value="Immediate (< 1 month)">Immediate (&lt; 1 month)</option>
                        <option value="1 - 3 Months">1 - 3 Months</option>
                        <option value="3 - 6 Months">3 - 6 Months</option>
                        <option value="Exploratory / Discovery">Exploratory / Discovery</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Project Requirements &amp; Scope *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about the application you're planning: features, user volume, web/mobile requirements..."
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-emerald-400 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-emerald-500/25 hover:from-emerald-400 hover:to-teal-400 transition-all disabled:opacity-50"
                  >
                    <Send className="h-4 w-4" />
                    <span>{status === 'submitting' ? 'Submitting to Backend...' : 'Submit Project Inquiry'}</span>
                  </button>
                  <p className="text-center text-[11px] text-slate-500">
                    Directly synced with Ethertrix PostgreSQL backend. We sign mutual NDAs upon request.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
