import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, BarChart3 } from 'lucide-react';
import LayoutShell from '@/components/LayoutShell';
import HeaderNav from '@/components/HeaderNav';
import ContactDrawer from '@/components/ContactDrawer';
import CaseStudyModal from '@/components/CaseStudyModal';
import { globalMetrics, services, caseStudies, testimonials } from '@/data/mockData';
import type { CaseStudy } from '@/types';

export function Home() {
  const [contactOpen, setContactOpen] = useState(false);
  const [activeCaseStudy, setActiveCaseStudy] = useState<CaseStudy | null>(null);
  const [caseModalOpen, setCaseModalOpen] = useState(false);

  const heroMetrics = useMemo(() => globalMetrics?.slice(0, 3) ?? [], []);
  const primaryService = useMemo(() => services?.[0] ?? null, []);
  const secondaryService = useMemo(() => services?.[1] ?? null, []);
  const featuredCases = useMemo(() => caseStudies?.slice(0, 3) ?? [], []);
  const spotlightTestimonial = useMemo(() => testimonials?.[0] ?? null, []);

  const handleOpenContact = () => {
    setContactOpen(true);
  };

  const handleCaseClick = (cs: CaseStudy | null) => {
    if (!cs) return;
    setActiveCaseStudy(cs);
    setCaseModalOpen(true);
  };

  return (
    <LayoutShell className="min-h-screen bg-[#121212] text-[#F5F5F5]">
      <HeaderNav openContact={handleOpenContact} />
      <main className="px-4 pb-16 pt-24 md:px-8 lg:px-12">
        <section className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.1fr)] lg:items-stretch">
          <motion.div
            className="relative overflow-hidden rounded-[14px] border border-[#2E2E2E] bg-[#1E1E1E]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0">
              <img
                crossOrigin="anonymous"
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85"
                alt="Architectural skyline"
                className="h-full w-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#121212] via-transparent to-transparent" />
            </div>
            <div className="relative flex h-full flex-col justify-between p-6 md:p-10">
              <div className="max-w-xl space-y-4">
                <p className="font-['JetBrains_Mono'] text-xs uppercase tracking-[0.3em] text-[#B7B7B7]">
                  Returnz Investment Banking Studio
                </p>
                <h1 className="font-['Lora'] text-3xl leading-tight md:text-5xl">
                  Precision-led mandates for{' '}
                  <span className="border-b border-[#0077FF] text-[#F5F5F5]">
                    complex capital
                  </span>
                  .
                </h1>
                <p className="font-['JetBrains_Mono'] text-sm text-[#B7B7B7] md:text-base">
                  We structure and execute cross-border transactions where basis points matter,
                  building dense, decision-grade narratives from noisy financial reality.
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <motion.button
                  type="button"
                  onClick={handleOpenContact}
                  whileHover={{ x: 2 }}
                  className="inline-flex items-center justify-center gap-2 rounded-[14px] bg-[#0077FF] px-6 py-3 font-['JetBrains_Mono'] text-xs font-medium uppercase tracking-[0.2em] text-black transition-colors hover:bg-[#0A5ED6]"
                >
                  Open mandate discussion
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2 text-xs font-['JetBrains_Mono'] text-[#B7B7B7]">
                    <TrendingUp className="h-4 w-4 text-[#0077FF]" />
                    <span>Sell-side &amp; buy-side M&amp;A</span>
                  </div>
                  <div className="hidden items-center gap-2 text-xs font-['JetBrains_Mono'] text-[#B7B7B7] md:flex">
                    <BarChart3 className="h-4 w-4 text-[#0077FF]" />
                    <span>Capital structure advisory</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.aside
            className="grid h-full gap-4 rounded-[14px] border border-[#2E2E2E] bg-[#1E1E1E]/70 p-4 backdrop-blur-sm md:grid-cols-2 lg:grid-cols-1"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {heroMetrics?.map((metric) => (
              <div
                key={metric?.id ?? ''}
                className="flex flex-col justify-between rounded-[12px] border border-[#2E2E2E] bg-[#121212]/60 px-4 py-3"
              >
                <div className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.18em] text-[#B7B7B7]">
                  {metric?.label ?? ''}
                </div>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="font-['Lora'] text-2xl">
                    {metric?.prefix ?? ''}
                    {metric?.value?.toLocaleString?.() ?? '0'}
                    {metric?.suffix ?? ''}
                  </span>
                </div>
                <p className="mt-1 line-clamp-2 font-['JetBrains_Mono'] text-[11px] text-[#7A7A7A]">
                  {metric?.description ?? ''}
                </p>
              </div>
            ))}
          </motion.aside>
        </section>

        <section className="mt-16 grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <div className="space-y-6">
            <div className="flex items-center justify-between gap-4">
              <h2 className="font-['Lora'] text-2xl">Mandate workbench</h2>
              <span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.2em] text-[#B7B7B7]">
                Services preview
              </span>
            </div>
            <div className="space-y-4 rounded-[14px] border border-[#2E2E2E] bg-[#1E1E1E] p-5">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full border border-[#2E2E2E] px-3 py-1 text-[11px] font-['JetBrains_Mono'] text-[#B7B7B7]">
                  M&amp;A advisory
                </span>
                <span className="rounded-full border border-[#2E2E2E] px-3 py-1 text-[11px] font-['JetBrains_Mono'] text-[#B7B7B7]">
                  Capital markets
                </span>
                <span className="rounded-full border border-[#2E2E2E] px-3 py-1 text-[11px] font-['JetBrains_Mono'] text-[#B7B7B7]">
                  Special situations
                </span>
              </div>
              <p className="font-['JetBrains_Mono'] text-sm text-[#B7B7B7]">
                Every engagement starts from a dense analytical base: sector structure, capital
                flows, and strategic narratives mapped into a coherent execution thesis.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                {primaryService && (
                  <button
                    type="button"
                    onClick={() => handleCaseClick(featuredCases?.[0] ?? null)}
                    className="flex flex-col items-start rounded-[12px] border border-[#2E2E2E] bg-[#121212]/70 p-4 text-left transition-transform duration-500 hover:-translate-y-0.5 hover:border-[#0077FF]"
                  >
                    <span className="text-xs font-['JetBrains_Mono'] uppercase tracking-[0.18em] text-[#B7B7B7]">
                      {primaryService?.category ?? ''}
                    </span>
                    <span className="mt-1 font-['Lora'] text-lg">
                      {primaryService?.name ?? ''}
                    </span>
                    <p className="mt-2 line-clamp-3 font-['JetBrains_Mono'] text-[12px] text-[#8A8A8A]">
                      {primaryService?.tagline ?? ''}
                    </p>
                  </button>
                )}
                {secondaryService && (
                  <button
                    type="button"
                    onClick={() => handleCaseClick(featuredCases?.[1] ?? null)}
                    className="flex flex-col items-start rounded-[12px] border border-dashed border-[#2E2E2E] bg-transparent p-4 text-left transition-colors hover:border-[#0077FF]"
                  >
                    <span className="text-xs font-['JetBrains_Mono'] uppercase tracking-[0.18em] text-[#B7B7B7]">
                      {secondaryService?.category ?? ''}
                    </span>
                    <span className="mt-1 font-['Lora'] text-lg">
                      {secondaryService?.name ?? ''}
                    </span>
                    <p className="mt-2 line-clamp-3 font-['JetBrains_Mono'] text-[12px] text-[#8A8A8A]">
                      {secondaryService?.tagline ?? ''}
                    </p>
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="space-y-4 rounded-[14px] border border-[#2E2E2E] bg-[#1E1E1E] p-4">
            <div className="flex items-center justify-between">
              <h3 className="font-['Lora'] text-lg">Case study strip</h3>
              <span className="font-['JetBrains_Mono'] text-[11px] text-[#B7B7B7]">
                Selected mandates
              </span>
            </div>
            <div className="grid gap-3">
              {featuredCases?.map((cs, index) => (
                <button
                  type="button"
                  key={cs?.id ?? index}
                  onClick={() => handleCaseClick(cs ?? null)}
                  className="group grid grid-cols-[80px,1fr] gap-3 rounded-[10px] border border-[#2E2E2E] bg-[#121212]/70 p-2 text-left transition-colors hover:border-[#0077FF]"
                >
                  <div className="overflow-hidden rounded-[8px] bg-[#1E1E1E]">
                    <img
                      crossOrigin="anonymous"
                      src={
                        cs?.thumbnailUrl ??
                        `https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80 ?? 'cs'}/1200/800`
                      }
                      alt={cs?.title ?? ''}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="flex flex-col justify-between">
                    <div>
                      <p className="text-[10px] font-['JetBrains_Mono'] uppercase tracking-[0.2em] text-[#B7B7B7]">
                        {cs?.sector ?? ''}
                      </p>
                      <p className="mt-1 line-clamp-1 font-['Lora'] text-sm">
                        {cs?.title ?? ''}
                      </p>
                      <p className="mt-1 line-clamp-2 font-['JetBrains_Mono'] text-[11px] text-[#8A8A8A]">
                        {cs?.headline ?? ''}
                      </p>
                    </div>
                    <span className="mt-1 text-[10px] font-['JetBrains_Mono'] text-[#B7B7B7]">
                      {cs?.timeline ?? ''}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-16 grid gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
          <div className="rounded-[14px] border border-[#2E2E2E] bg-[#1E1E1E] p-5">
            <div className="flex items-center justify-between gap-4">
              <h2 className="font-['Lora'] text-2xl">Testimonials</h2>
              <span className="font-['JetBrains_Mono'] text-[11px] text-[#B7B7B7]">
                Limited selection
              </span>
            </div>
            {spotlightTestimonial && (
              <div className="mt-4 space-y-3">
                <p className="font-['JetBrains_Mono'] text-sm text-[#F5F5F5]">
                  “{spotlightTestimonial?.quote ?? ''}”
                </p>
                <p className="font-['JetBrains_Mono'] text-xs text-[#B7B7B7]">
                  {spotlightTestimonial?.name ?? ''} · {spotlightTestimonial?.role ?? ''},{' '}
                  {spotlightTestimonial?.company ?? ''}
                </p>
                <p className="font-['JetBrains_Mono'] text-[11px] text-[#8A8A8A]">
                  {spotlightTestimonial?.relationship ?? ''}
                </p>
              </div>
            )}
          </div>
          <div className="flex flex-col justify-between gap-4 rounded-[14px] border border-[#2E2E2E] bg-[#1E1E1E] p-5">
            <div>
              <h3 className="font-['Lora'] text-lg">Ready when the window is open.</h3>
              <p className="mt-2 font-['JetBrains_Mono'] text-sm text-[#B7B7B7]">
                Brief us on timing, size, and sensitivities. We respond with a calibrated view on
                options, constraints, and execution risk.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="rounded-[999px] border border-[#2E2E2E] px-3 py-1 text-[11px] font-['JetBrains_Mono'] text-[#B7B7B7]">
                Sub-24h initial response
              </span>
              <span className="rounded-[999px] border border-[#2E2E2E] px-3 py-1 text-[11px] font-['JetBrains_Mono'] text-[#B7B7B7]">
                Discreet, NDA on request
              </span>
            </div>
            <button
              type="button"
              onClick={handleOpenContact}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-[14px] border border-[#0077FF] bg-transparent px-4 py-2 font-['JetBrains_Mono'] text-xs uppercase tracking-[0.2em] text-[#F5F5F5] transition-colors hover:bg-[#0077FF] hover:text-black"
            >
              Open contact drawer
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </section>
      </main>

      <ContactDrawer
        open={contactOpen}
        onOpenChange={setContactOpen}
        onSubmitted={() => setContactOpen(false)}
      />
      <CaseStudyModal
        open={caseModalOpen}
        onOpenChange={setCaseModalOpen}
        caseStudy={activeCaseStudy}
      />
    </LayoutShell>
  );
}

export default Home;