import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, ChevronDown } from 'lucide-react';
import { caseStudies } from '@/data/mockData';
import { LayoutShell } from '@/components/LayoutShell';
import { CaseStudyModal } from '@/components/CaseStudyModal';
import { CaseStudy } from '@/types';
import { cn } from '@/lib/utils';

type SortKey = 'recent' | 'alpha';

export function CaseStudies() {
  const [activeSector, setActiveSector] = useState<string>('All');
  const [sortKey, setSortKey] = useState<SortKey>('recent');
  const [selected, setSelected] = useState<CaseStudy | null>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const sectors = useMemo(
    () => ['All', ...Array.from(new Set((caseStudies ?? []).map((c) => c?.sector ?? '')))].filter(Boolean),
    []
  );

  const sortedFiltered = useMemo(() => {
    const items = (caseStudies ?? []).filter((c) =>
      activeSector === 'All' ? true : (c?.sector ?? '') === activeSector
    );
    if (sortKey === 'alpha') {
      return [...items].sort((a, b) => (a?.title ?? '').localeCompare(b?.title ?? ''));
    }
    return [...items].sort((a, b) => (b?.timeline ?? '').localeCompare(a?.timeline ?? ''));
  }, [activeSector, sortKey]);

  const handleCardClick = (item: CaseStudy | null) => {
    if (!item) return;
    setSelected(item);
    setModalOpen(true);
  };

  const handleModalChange = (open: boolean) => {
    setModalOpen(open);
    if (!open) setSelected(null);
  };

  return (
    <LayoutShell className="min-h-screen bg-[#121212] text-[#F5F5F5]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-10 lg:py-14">
        <header className="flex flex-col gap-6 border-b border-[#2E2E2E] pb-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-[#B7B7B7]">
              Returnz Case Ledger
            </p>
            <h1 className="font-['Lora'] text-3xl font-semibold tracking-tight sm:text-4xl">
              Transactions that rewired the risk curve.
            </h1>
            <p className="max-w-2xl font-['JetBrains_Mono'] text-xs text-[#B7B7B7] sm:text-sm">
              A curated record of complex, cross-border and special situations mandates where
              Returnz architected outsized outcomes under tight constraints.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 font-['JetBrains_Mono'] text-[11px] text-[#B7B7B7]">
            <div className="flex items-center gap-2 rounded-[14px] border border-[#2E2E2E] bg-[#1E1E1E] px-3 py-2">
              <Filter className="h-3.5 w-3.5 text-[#B7B7B7]" />
              <span className="uppercase tracking-[0.16em]">Filter by sector</span>
            </div>
            <button
              type="button"
              onClick={() => setSortKey(sortKey === 'recent' ? 'alpha' : 'recent')}
              className="inline-flex items-center gap-2 rounded-[14px] border border-[#2E2E2E] bg-[#1E1E1E] px-3 py-2 text-[11px] transition-colors hover:border-[#0077FF]"
            >
              <span className="uppercase tracking-[0.16em]">
                {sortKey === 'recent' ? 'Sort: recent first' : 'Sort: alphabetical'}
              </span>
              <ChevronDown className="h-3 w-3" />
            </button>
          </div>
        </header>

        <div className="flex flex-wrap gap-2">
          {sectors.map((sector) => {
            const active = sector === activeSector;
            return (
              <button
                key={sector}
                type="button"
                onClick={() => setActiveSector(sector)}
                className={cn(
                  'rounded-full border px-3.5 py-1.5 text-xs font-[',
                  "JetBrains_Mono'] uppercase tracking-[0.16em] transition-colors",
                  active
                    ? 'border-[#0077FF] bg-[#0077FF] text-black'
                    : 'border-[#2E2E2E] bg-[#1E1E1E] text-[#B7B7B7] hover:border-[#0077FF]'
                )}
              >
                {sector}
              </button>
            );
          })}
        </div>

        <section className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {sortedFiltered.map((item, index) => (
            <motion.button
              key={item?.id ?? index}
              type="button"
              onClick={() => handleCardClick(item ?? null)}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="group flex flex-col overflow-hidden rounded-[14px] border border-[#2E2E2E] bg-[#1E1E1E] text-left"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item?.thumbnailUrl ?? 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80'}
                  crossOrigin="anonymous"
                  alt={item?.title ?? 'Case study'}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-3 left-3 rounded-full bg-black/70 px-3 py-1 text-[10px] font-['JetBrains_Mono'] uppercase tracking-[0.18em] text-[#F5F5F5]">
                  {item?.sector ?? 'Unspecified'}
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-3 p-4">
                <div className="space-y-1">
                  <h2 className="font-['Lora'] text-base font-semibold leading-snug">
                    {item?.title ?? 'Untitled mandate'}
                  </h2>
                  <p className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.18em] text-[#B7B7B7]">
                    {item?.headline ?? 'Mandate overview'}
                  </p>
                </div>
                <p className="line-clamp-3 font-['JetBrains_Mono'] text-xs text-[#B7B7B7]">
                  {item?.summary ?? 'No summary available.'}
                </p>
                <div className="mt-auto flex items-center justify-between pt-2 font-['JetBrains_Mono'] text-[11px] text-[#B7B7B7]">
                  <span>{item?.timeline ?? 'Timeline confidential'}</span>
                  <span className="text-[10px] uppercase tracking-[0.18em] text-[#0077FF]">
                    View mandate →
                  </span>
                </div>
              </div>
            </motion.button>
          ))}
        </section>
      </div>
      <CaseStudyModal open={modalOpen} onOpenChange={handleModalChange} caseStudy={selected} />
    </LayoutShell>
  );
}

export default CaseStudies;