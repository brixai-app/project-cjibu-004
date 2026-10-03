import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { motion, AnimatePresence } from 'framer-motion';
import { X, BarChart3, TrendingUp, Clock, MapPin } from 'lucide-react';
import { CaseStudy, ChartSeries } from '@/types';
import { cn } from '@/lib/utils';

type CaseStudyModalProps = {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  caseStudy?: CaseStudy | null;
};

const iconMap: Record<string, React.ReactNode> = {
  default: <BarChart3 className="h-4 w-4 text-[#0077FF]" />,
  growth: <TrendingUp className="h-4 w-4 text-[#0077FF]" />,
  time: <Clock className="h-4 w-4 text-[#0077FF]" />,
};

function MetricPill({
  label = '',
  value = 0,
  prefix = '',
  suffix = '',
  description = '',
}: {
  label?: string;
  value?: number;
  prefix?: string;
  suffix?: string;
  description?: string;
}) {
  const key = label?.toLowerCase().includes('growth')
    ? 'growth'
    : label?.toLowerCase().includes('time')
    ? 'time'
    : 'default';
  return (
    <div className="flex flex-col gap-1 rounded-[14px] border border-[#2E2E2E] bg-[#1E1E1E]/80 px-3 py-2">
      <div className="flex items-center justify-between text-[11px] uppercase tracking-wide text-[#B7B7B7]">
        <span>{label}</span>
        <span className="flex items-center gap-1">{iconMap[key]}</span>
      </div>
      <div className="text-lg font-semibold text-[#F5F5F5]">
        {prefix}
        {value?.toLocaleString?.() ?? value}
        {suffix}
      </div>
      {description ? (
        <p className="text-[11px] text-[#B7B7B7] line-clamp-2">{description}</p>
      ) : null}
    </div>
  );
}

function ChartsBlock({ series = [] }: { series?: ChartSeries[] }) {
  if (!series?.length) return null;
  const width = 260;
  const height = 120;
  const padding = 18;
  const maxVal =
    series
      ?.flatMap((s) => s?.points ?? [])
      ?.reduce((m, p) => (p?.value ?? 0) > m ? p?.value ?? 0 : m, 0) ?? 0;
  const xStep =
    ((width - padding * 2) /
      Math.max(1, (series?.[0]?.points?.length ?? 1) - 1)) || 0;
  return (
    <div className="space-y-3 rounded-[14px] border border-[#2E2E2E] bg-[#1E1E1E]/80 p-3">
      <div className="flex items-center justify-between text-xs text-[#B7B7B7]">
        <span className="flex items-center gap-2">
          <BarChart3 className="h-4 w-4 text-[#0077FF]" />
          Performance trajectory
        </span>
        <span className="text-[10px] uppercase tracking-wide">
          Normalized · {series?.length ?? 0} streams
        </span>
      </div>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="lineFill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#0077FF" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#0077FF" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect
          x="0"
          y="0"
          width={width}
          height={height}
          fill="none"
          className="stroke-[#2E2E2E]"
        />
        {Array.from({ length: 3 }).map((_, i) => {
          const y =
            padding + ((height - padding * 2) / 2) * i;
          return (
            <line
              key={i}
              x1={padding}
              x2={width - padding}
              y1={y}
              y2={y}
              className="stroke-[#2E2E2E]"
              strokeWidth={0.5}
            />
          );
        })}
        {series?.map((s, idx) => {
          const color = s?.color ?? '#0077FF';
          const points = s?.points ?? [];
          if (!points?.length) return null;
          const d = points
            .map((p, i) => {
              const x = padding + xStep * i;
              const v = maxVal ? (p?.value ?? 0) / maxVal : 0;
              const y = height - padding - (height - padding * 2) * v;
              return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
            })
            .join(' ');
          const area = `${d} L ${padding + xStep * (points.length - 1)} ${
            height - padding
          } L ${padding} ${height - padding} Z`;
          return (
            <g key={s?.id ?? idx}>
              <path
                d={area}
                fill="url(#lineFill)"
                fillOpacity={idx === 0 ? 0.5 : 0.25}
              />
              <path
                d={d}
                stroke={color}
                strokeWidth={1.5}
                fill="none"
                strokeOpacity={idx === 0 ? 1 : 0.6}
              />
            </g>
          );
        })}
      </svg>
      <div className="flex flex-wrap gap-3 text-[10px] text-[#B7B7B7]">
        {series?.map((s) => (
          <div key={s?.id} className="flex items-center gap-1">
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: s?.color ?? '#0077FF' }}
            />
            <span>{s?.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function CaseStudyModal({
  open = false,
  onOpenChange = () => {},
  caseStudy = null,
}: CaseStudyModalProps) {
  const heroUrl =
    caseStudy?.heroImageUrl ??
    caseStudy?.thumbnailUrl ??
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80';
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {open ? (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            </Dialog.Overlay>
            <Dialog.Content asChild>
              <motion.div
                className="fixed inset-y-0 right-0 z-50 flex w-full max-w-4xl flex-col overflow-hidden border-l border-[#2E2E2E] bg-[#121212]"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', stiffness: 260, damping: 30 }}
              >
                <div className="flex items-center justify-between border-b border-[#2E2E2E] px-6 py-4">
                  <div className="flex flex-col">
                    <Dialog.Title className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B7B7B7]">
                      Case study
                    </Dialog.Title>
                    <Dialog.Description className="font-['Lora'] text-lg text-[#F5F5F5]">
                      {caseStudy?.title ?? 'Selected mandate performance'}
                    </Dialog.Description>
                  </div>
                  <Dialog.Close asChild>
                    <button
                      type="button"
                      aria-label="Close"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#2E2E2E] bg-[#1E1E1E] text-[#B7B7B7] transition hover:border-[#0077FF] hover:text-[#F5F5F5]"
                      onClick={() => onOpenChange(false)}
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </Dialog.Close>
                </div>
                <div className="grid flex-1 grid-cols-1 gap-6 overflow-y-auto px-6 py-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
                  <div className="space-y-4">
                    <div className="overflow-hidden rounded-[18px] border border-[#2E2E2E] bg-[#1E1E1E]">
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <img
                          src={heroUrl}
                          crossOrigin="anonymous"
                          alt={caseStudy?.title ?? 'Case study hero'}
                          className="h-full w-full object-cover"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                          <div className="space-y-1">
                            <p className="text-xs uppercase tracking-[0.18em] text-[#B7B7B7]">
                              {caseStudy?.sector ?? 'Strategic mandate'}
                            </p>
                            <p className="font-['Lora'] text-xl text-[#F5F5F5]">
                              {caseStudy?.headline ?? 'Reshaping capital flows.'}
                            </p>
                          </div>
                          <div className="hidden flex-col items-end gap-1 text-right text-[11px] text-[#B7B7B7] md:flex">
                            {caseStudy?.location ? (
                              <span className="flex items-center gap-1">
                                <MapPin className="h-3 w-3 text-[#0077FF]" />
                                {caseStudy?.location}
                              </span>
                            ) : null}
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3 text-[#0077FF]" />
                              {caseStudy?.timeline ?? 'Multi-quarter program'}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid gap-3 md:grid-cols-3">
                      {(caseStudy?.metrics ?? []).slice(0, 3).map((m) => (
                        <MetricPill
                          key={m?.id}
                          label={m?.label}
                          value={m?.value}
                          prefix={m?.prefix}
                          suffix={m?.suffix}
                          description={m?.description}
                        />
                      ))}
                    </div>
                    <div className="grid gap-4 md:grid-cols-3">
                      <div className="md:col-span-1.5 md:col-span-1 md:col-span-2">
                        <h3 className="font-['Lora'] text-sm text-[#F5F5F5]">
                          Challenge
                        </h3>
                        <p className="mt-1 text-[13px] leading-relaxed text-[#B7B7B7]">
                          {caseStudy?.challenge ??
                            'Complex cross-border capital stack with fragmented investor signaling and constrained liquidity windows.'}
                        </p>
                      </div>
                      <div className="md:col-span-1">
                        <h3 className="font-['Lora'] text-sm text-[#F5F5F5]">
                          Approach
                        </h3>
                        <p className="mt-1 text-[13px] leading-relaxed text-[#B7B7B7]">
                          {caseStudy?.approach ??
                            'Constructed a sequence of tightly-timed market interactions, restructuring communication flows and resetting risk narratives.'}
                        </p>
                      </div>
                      <div className="md:col-span-1">
                        <h3 className="font-['Lora'] text-sm text-[#F5F5F5]">
                          Outcome
                        </h3>
                        <p className="mt-1 text-[13px] leading-relaxed text-[#B7B7B7]">
                          {caseStudy?.outcome ??
                            'Mandate delivered outsized multiple on invested capital, accelerated book-build, and durable secondary-market sponsorship.'}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <ChartsBlock series={caseStudy?.chartsData ?? []} />
                    <div className="rounded-[14px] border border-[#2E2E2E] bg-[#1E1E1E]/80 p-3 text-[13px] text-[#B7B7B7]">
                      <h3 className="mb-2 font-['Lora'] text-sm text-[#F5F5F5]">
                        Mandate narrative
                      </h3>
                      <p className="mb-2 leading-relaxed">
                        {caseStudy?.summary ??
                          'We treated the mandate as a system design problem: mapping decision circuits across stakeholders, sequencing disclosures, and choreographing liquidity across time-zones.'}
                      </p>
                      <p className="leading-relaxed">
                        Services deployed:{' '}
                        <span className="text-[#F5F5F5]">
                          {(caseStudy?.servicesUsed ?? []).join(' · ') ||
                            'Capital structuring · Investor coverage · Liquidity architecture'}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        ) : null}
      </AnimatePresence>
    </Dialog.Root>
  );
}

export default CaseStudyModal;