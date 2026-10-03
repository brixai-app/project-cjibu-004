import React from 'react';
import { motion } from 'framer-motion';
import LayoutShell from '@/components/LayoutShell';
import { testimonials, globalMetrics } from '@/data/mockData';
import type { Metric, Testimonial } from '@/types';
import { cn } from '@/lib/utils';

type KPIItemProps = {
  metric?: Metric | null;
};

function KPIItem({ metric = null }: KPIItemProps) {
  if (!metric) return null;
  return (
    <div className="flex flex-col gap-1 rounded-[14px] border border-[#2E2E2E] bg-[#1E1E1E]/80 px-4 py-3">
      <div className="text-[11px] uppercase tracking-[0.18em] text-[#B7B7B7]">
        {metric?.label ?? ''}
      </div>
      <div className="flex items-baseline gap-1">
        <span className="font-mono text-2xl font-semibold text-[#F5F5F5]">
          {metric?.prefix ?? ''}
          {metric?.value ?? 0}
          {metric?.suffix ?? ''}
        </span>
      </div>
      {metric?.description ? (
        <p className="text-[11px] text-[#8A8A8A]">{metric?.description ?? ''}</p>
      ) : null}
    </div>
  );
}

type KPIColumnProps = {
  metrics?: Metric[];
};

function KPIColumn({ metrics = [] }: KPIColumnProps) {
  const sliced = metrics?.slice(0, 4) ?? [];
  return (
    <aside className="flex flex-col gap-3 rounded-[14px] border border-[#2E2E2E] bg-[#1E1E1E] p-4">
      <div className="flex items-baseline justify-between">
        <h2 className="font-serif text-sm font-semibold uppercase tracking-[0.22em] text-[#F5F5F5]">
          Relationship Health
        </h2>
        <span className="font-mono text-[11px] text-[#B7B7B7]">Rolling 36M</span>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {sliced?.map((m) => (
          <motion.div
            key={m?.id ?? ''}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <KPIItem metric={m} />
          </motion.div>
        ))}
      </div>
      <div className="mt-2 flex items-center justify-between border-t border-[#2E2E2E] pt-3">
        <span className="font-mono text-[11px] text-[#8A8A8A]">
          Counterparty NPS
        </span>
        <span className="font-mono text-xs text-[#F5F5F5]">+72</span>
      </div>
    </aside>
  );
}

type TestimonialCarouselShellProps = {
  items?: Testimonial[];
};

function TestimonialCarouselShell({ items = [] }: TestimonialCarouselShellProps) {
  const hasItems = (items?.length ?? 0) > 0;
  return (
    <section className="relative flex h-full flex-col rounded-[14px] border border-[#2E2E2E] bg-[#1E1E1E] p-6">
      <header className="mb-4 flex items-baseline justify-between gap-4">
        <div>
          <h1 className="font-serif text-xl text-[#F5F5F5]">
            Institutional conviction, in their words.
          </h1>
          <p className="mt-1 max-w-xl font-mono text-xs text-[#B7B7B7]">
            LPs, strategics, and founders describing live execution across cycles.
          </p>
        </div>
        <span className="hidden rounded-full border border-[#2E2E2E] px-3 py-1 font-mono text-[11px] text-[#B7B7B7] sm:inline-flex">
          {(items?.length ?? 0).toString().padStart(2, '0')} counterparties
        </span>
      </header>
      <div className="relative mt-2 flex-1">
        <div className="h-full w-full rounded-[12px] border border-dashed border-[#2E2E2E] p-4">
          {hasItems ? (
            <div className="h-full w-full">
              <div className="mb-3 flex items-center gap-3">
                <div className="h-9 w-9 overflow-hidden rounded-full border border-[#2E2E2E] bg-[#121212]">
                  <img
                    crossOrigin="anonymous"
                    src={
                      items?.[0]?.avatarUrl ??
                      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1400&q=85'
                    }
                    alt={items?.[0]?.name ?? 'Client avatar'}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-xs text-[#F5F5F5]">
                    {items?.[0]?.name ?? ''}
                  </span>
                  <span className="font-mono text-[11px] text-[#8A8A8A]">
                    {items?.[0]?.role ?? ''} · {items?.[0]?.company ?? ''}
                  </span>
                </div>
              </div>
              <p className="mb-3 font-serif text-[15px] leading-relaxed text-[#F5F5F5]">
                “{items?.[0]?.quote ?? ''}”
              </p>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#B7B7B7]">
                {items?.[0]?.relationship ?? ''}
              </p>
            </div>
          ) : (
            <div className="flex h-full items-center justify-center">
              <span className="font-mono text-xs text-[#8A8A8A]">
                Testimonial carousel mounted here.
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const metrics = globalMetrics ?? [];
  return (
    <LayoutShell className="min-h-screen bg-[#121212] text-[#F5F5F5]">
      <div
        className={cn(
          'mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8',
          'md:px-8 lg:py-10'
        )}
      >
        <div className="grid gap-6 lg:grid-cols-[ minmax(0,2.2fr)_minmax(0,1.4fr) ]">
          <TestimonialCarouselShell items={testimonials ?? []} />
          <KPIColumn metrics={metrics} />
        </div>
      </div>
    </LayoutShell>
  );
}

export default Testimonials;