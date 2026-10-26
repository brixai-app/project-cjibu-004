import React from 'react';
import { motion } from 'framer-motion';
import AppLayout from '@/components/AppLayout';
import { caseStudies } from '@/data/mockData';

export type CaseStudiesPageProps = {
  className?: string;
};

export function CaseStudiesPage({ className = '' }: CaseStudiesPageProps) {
  const featured = caseStudies?.filter((c) => c?.isFeatured ?? false) ?? [];

  return (
    <AppLayout>
      <main
        className={`min-h-screen bg-[#121212] text-[#EAEAEA] pt-28 pb-20 px-4 sm:px-6 lg:px-10 ${className}`}
      >
        <section className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="grid gap-10 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)] items-start"
          >
            <div className="space-y-6">
              <p className="text-xs tracking-[0.32em] uppercase text-[#A6A6A6] font-mono">
                Returnz Case Files
              </p>
              <h1 className="font-['Playfair Display'] text-3xl sm:text-4xl lg:text-5xl leading-[1.1]">
                Capital stories
                <span className="block text-[#A6A6A6] font-normal text-base sm:text-lg mt-4 font-['Lora']">
                  A curated ledger of mandates where discretion, structure, and
                  timing compounded into asymmetric outcomes.
                </span>
              </h1>
              <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-[#A6A6A6] font-['Lora']">
                <div className="rounded-[14px] border border-[#2C2C2C] bg-[#1A1A1A] px-4 py-3 flex flex-col gap-1 min-w-[140px]">
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase">
                    Closed mandates
                  </span>
                  <span className="text-[#EAEAEA] text-base">
                    {caseStudies?.length ?? 0}
                  </span>
                </div>
                <div className="rounded-[14px] border border-[#2C2C2C] bg-[#1A1A1A] px-4 py-3 flex flex-col gap-1 min-w-[160px]">
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase">
                    Featured mandates
                  </span>
                  <span className="text-[#EAEAEA] text-base">
                    {featured?.length ?? 0}
                  </span>
                </div>
                <div className="rounded-[14px] border border-[#2C2C2C] bg-[#1A1A1A] px-4 py-3 flex flex-col gap-1 min-w-[170px]">
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase">
                    Primary sectors
                  </span>
                  <span className="text-[#EAEAEA] text-base">
                    {Array.from(
                      new Set(
                        (caseStudies ?? []).map((c) => c?.sector ?? ''),
                      ),
                    ).filter(Boolean).length}
                  </span>
                </div>
              </div>
            </div>

            <div className="relative rounded-[18px] border border-[#2C2C2C] bg-[#101010] overflow-hidden">
              <motion.img
                initial={{ scale: 1.08, opacity: 0.85 }}
                animate={{ scale: 1.02, opacity: 1 }}
                transition={{ duration: 1.1, ease: 'easeOut' }}
                src={
                  caseStudies?.[0]?.imageUrls?.[0] ??
                  'https://images.unsplash.com/photo-1611416457332-946853cc75d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDY2MTIyfDB8MXxzZWFyY2h8MXx8bmlnaHQlMjBjaXR5JTIwZmluYW5jaWFsJTIwZGlzdHJpY3QlMjBza3lsaW5lJTIwZWRpdG9yaWFsfGVufDB8MHx8fDE3OTMwMTg0NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&q=80&w=1200&auto=format&fit=crop'
                }
                crossOrigin="anonymous"
                alt={caseStudies?.[0]?.title ?? 'Returnz mandate skyline'}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-black/10 to-transparent" />
              <div className="absolute inset-x-5 bottom-4 flex flex-col gap-2">
                <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#A6A6A6]">
                  Live market aperture
                </p>
                <p className="font-['Lora'] text-xs text-[#EAEAEA]/90 max-w-md">
                  Each case distills structure, counterparty dynamics, and
                  execution cadence—curated for principals and investment
                  committees.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="max-w-6xl mx-auto mt-16 border-t border-[#2C2C2C] pt-10">
          <CaseStudiesMasonry />
        </section>
      </main>
    </AppLayout>
  );
}

export default CaseStudiesPage;

export type CaseStudiesMasonryProps = {
  className?: string;
};

export function CaseStudiesMasonry({ className = '' }: CaseStudiesMasonryProps) {
  return (
    <div className={className}>
      
    </div>
  );
}