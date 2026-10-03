import React, { useMemo, useState } from 'react';
import { services, caseStudies } from '@/data/mockData';
import { Service, CaseStudy } from '@/types';
import LayoutShell from '@/components/LayoutShell';
import CaseStudyModal from '@/components/CaseStudyModal';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export function Services() {
  const [selectedSlug, setSelectedSlug] = useState<string>(services?.[0]?.slug ?? '');
  const [activeCaseStudy, setActiveCaseStudy] = useState<CaseStudy | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const selectedService: Service | undefined = useMemo(
    () => services?.find((s) => s?.slug === selectedSlug),
    [selectedSlug]
  );

  const relatedCaseStudy: CaseStudy | undefined = useMemo(
    () =>
      caseStudies?.find((c) =>
        c?.servicesUsed?.some(
          (name) => name?.toLowerCase?.() === selectedService?.name?.toLowerCase?.()
        )
      ),
    [selectedService]
  );

  const handleOpenCaseStudy = () => {
    if (!relatedCaseStudy) return;
    setActiveCaseStudy(relatedCaseStudy);
    setModalOpen(true);
  };

  return (
    <LayoutShell className="min-h-screen bg-[#121212] text-[#F5F5F5]">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 md:py-14 lg:flex-row">
        <div className="lg:w-[38%]">
          <h1 className="font-['Lora'] text-3xl font-semibold tracking-tight sm:text-4xl">
            Mandate workbench
          </h1>
          <p className="mt-3 max-w-md font-['JetBrains Mono'] text-xs text-[#B7B7B7] sm:text-sm">
            Select a mandate lane to inspect execution focus, expected outcomes, and live precedent
            transactions powered by Returnz case studies.
          </p>
          <div className="mt-6 flex flex-col gap-2 rounded-[14px] border border-[#2E2E2E] bg-[#1E1E1E] p-2">
            {services?.map((service) => {
              const isActive = service?.slug === selectedSlug;
              return (
                <button
                  key={service?.id}
                  type="button"
                  onClick={() => setSelectedSlug(service?.slug ?? '')}
                  className={cn(
                    'group flex w-full items-start justify-between rounded-[12px] px-3 py-3 text-left transition-colors',
                    isActive ? 'bg-[#121212]' : 'hover:bg-[#121212]'
                  )}
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-['JetBrains Mono'] text-[11px] uppercase tracking-[0.14em] text-[#B7B7B7]">
                        {service?.category ?? 'Advisory'}
                      </span>
                    </div>
                    <div className="mt-1 flex items-center gap-1">
                      <span className="font-['Lora'] text-sm sm:text-base">
                        {service?.name ?? 'Advisory'}
                      </span>
                      {isActive && (
                        <ChevronRight className="h-3 w-3 text-[#0077FF]" aria-hidden="true" />
                      )}
                    </div>
                    <p className="mt-1 line-clamp-2 font-['JetBrains Mono'] text-[11px] text-[#B7B7B7] sm:text-xs">
                      {service?.tagline ?? ''}
                    </p>
                  </div>
                  {service?.spotlightMetric && (
                    <div className="ml-3 rounded-[10px] border border-[#2E2E2E] bg-[#121212] px-2 py-1">
                      <div className="font-['JetBrains Mono'] text-[10px] text-[#B7B7B7]">
                        {service?.spotlightMetric?.label ?? ''}
                      </div>
                      <div className="font-['JetBrains Mono'] text-xs text-[#F5F5F5]">
                        {service?.spotlightMetric?.prefix ?? ''}
                        {service?.spotlightMetric?.value ?? 0}
                        {service?.spotlightMetric?.suffix ?? ''}
                      </div>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div className="lg:w-[62%]">
          <div className="grid gap-4 lg:h-full lg:grid-rows-[minmax(0,1.5fr)_minmax(0,1fr)]">
            <div className="grid gap-4 rounded-[14px] border border-[#2E2E2E] bg-[#1E1E1E] p-4 sm:p-5 lg:grid-cols-[1.2fr_minmax(0,1fr)]">
              <div className="flex flex-col justify-between gap-4">
                <div>
                  <h2 className="font-['Lora'] text-lg font-semibold sm:text-xl">
                    {selectedService?.name ?? 'Service'}
                  </h2>
                  <p className="mt-2 font-['JetBrains Mono'] text-xs text-[#B7B7B7] sm:text-sm">
                    {selectedService?.description ?? ''}
                  </p>
                </div>
                <ul className="mt-1 space-y-1.5">
                  {selectedService?.outcomes?.slice(0, 4)?.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 font-['JetBrains Mono'] text-[11px] text-[#F5F5F5]"
                    >
                      <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-[#0077FF]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  type="button"
                  whileHover={{ x: 2 }}
                  whileTap={{ scale: 0.97 }}
                  className="mt-1 inline-flex items-center gap-2 rounded-[999px] bg-[#0077FF] px-4 py-2 font-['JetBrains Mono'] text-xs font-medium text-black"
                  onClick={handleOpenCaseStudy}
                  disabled={!relatedCaseStudy}
                >
                  View live precedent
                  <ArrowRight className="h-3.5 w-3.5" />
                </motion.button>
              </div>
              <div className="relative overflow-hidden rounded-[12px] border border-[#2E2E2E] bg-[#121212]">
                <img
                  crossOrigin="anonymous"
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80"
                  alt={selectedService?.name ?? 'Service visual'}
                  className="h-full w-full object-cover opacity-80"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent" />
              </div>
            </div>

            <div className="grid gap-4 rounded-[14px] border border-[#2E2E2E] bg-[#1E1E1E] p-4 sm:p-5 lg:grid-cols-3">
              <div className="col-span-2 flex flex-col gap-3">
                <div className="font-['JetBrains Mono'] text-[11px] uppercase tracking-[0.18em] text-[#B7B7B7]">
                  Execution telemetry
                </div>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {(selectedService?.spotlightMetric
                    ? [selectedService?.spotlightMetric]
                    : []
                  )?.map((m) => (
                    <div
                      key={m?.id}
                      className="rounded-[10px] border border-[#2E2E2E] bg-[#121212] px-3 py-2"
                    >
                      <div className="font-['JetBrains Mono'] text-[10px] text-[#B7B7B7]">
                        {m?.label ?? ''}
                      </div>
                      <div className="mt-1 font-['JetBrains Mono'] text-sm text-[#F5F5F5]">
                        {m?.prefix ?? ''}
                        {m?.value ?? 0}
                        {m?.suffix ?? ''}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col justify-between gap-2 rounded-[12px] border border-[#2E2E2E] bg-[#121212] p-3">
                <div>
                  <div className="font-['JetBrains Mono'] text-[11px] text-[#B7B7B7]">
                    Linked case
                  </div>
                  <div className="mt-1 font-['Lora'] text-sm">
                    {relatedCaseStudy?.title ?? 'No linked case yet'}
                  </div>
                  <p className="mt-1 line-clamp-3 font-['JetBrains Mono'] text-[11px] text-[#B7B7B7]">
                    {relatedCaseStudy?.summary ?? 'Once mandates execute, matching deals will surface here.'}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleOpenCaseStudy}
                  disabled={!relatedCaseStudy}
                  className={cn(
                    'inline-flex items-center justify-between rounded-[999px] px-3 py-1.5 text-[11px] font-[',
                    relatedCaseStudy
                      ? 'bg-[#0077FF] font-["JetBrains Mono"] text-black'
                      : 'border border-[#2E2E2E] font-["JetBrains Mono"] text-[#B7B7B7]'
                  )}
                >
                  <span>{relatedCaseStudy ? 'Open case study' : 'Awaiting transaction'}</span>
                  <ArrowRight className="h-3 w-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CaseStudyModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        caseStudy={activeCaseStudy}
      />
    </LayoutShell>
  );
}

export default Services;