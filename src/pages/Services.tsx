import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services } from '@/data/mockData';
import { cn } from '@/lib/utils';

export type ServicesPageProps = {
  className?: string;
};

type ServicesAlternatingListProps = {
  className?: string;
};

function ServicesAlternatingList({ className = '' }: ServicesAlternatingListProps) {
  return (
    <div className={cn('space-y-16 md:space-y-24', className)}>
      {services?.map((service, index) => {
        const isReversed = index % 2 === 1;
        return (
          <motion.section
            key={service?.id ?? index}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className={cn(
              'grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-stretch',
              isReversed ? 'md:[&>*:first-child]:order-2' : ''
            )}
          >
            <div className="relative overflow-hidden rounded-[14px] border border-[#2C2C2C] bg-[#1A1A1A] px-6 py-8 md:px-10 md:py-12">
              <div className="absolute inset-px pointer-events-none bg-gradient-to-br from-white/3 via-transparent to-[#D4AF37]/5 opacity-70" />
              <div className="relative flex items-start justify-between gap-6">
                <div className="space-y-4">
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#A6A6A6]">
                    {service?.category ?? 'Advisory'} Mandates
                  </p>
                  <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl tracking-tight text-[#EAEAEA]">
                    {service?.name ?? 'Strategic Advisory'}
                  </h2>
                  <p className="max-w-xl font-['Lora'] text-sm md:text-base text-[#A6A6A6] leading-relaxed">
                    {service?.summary ?? ''}
                  </p>
                </div>
                <div className="flex flex-col items-end gap-3 text-right">
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#A6A6A6]">
                    Typical Ticket
                  </span>
                  <span className="rounded-full border border-[#2C2C2C] bg-black/30 px-3 py-1.5 font-mono text-xs text-[#EAEAEA]">
                    {service?.typicalMandateSize ?? 'Confidential'}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#A6A6A6]">
                    {service?.timelineRange ?? 'Timeline on request'}
                  </span>
                </div>
              </div>
              <div className="relative mt-8 grid gap-6 md:grid-cols-2">
                <div className="space-y-3">
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#A6A6A6]">
                    Mandate Pattern
                  </p>
                  <p className="font-['Lora'] text-sm text-[#EAEAEA]/90 leading-relaxed">
                    {service?.description ?? ''}
                  </p>
                </div>
                <div className="space-y-3">
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#A6A6A6]">
                    Outcome Focus
                  </p>
                  <ul className="space-y-2">
                    {(service?.outcomes ?? [])?.slice(0, 4)?.map((outcome, i) => (
                      <li
                        key={`${service?.id ?? index}-outcome-${i}`}
                        className="flex items-start gap-2 text-sm font-['Lora'] text-[#EAEAEA]"
                      >
                        <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
                        <span>{outcome ?? ''}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="relative mt-8 flex flex-wrap gap-2">
                {(service?.tags ?? [])?.map((tag, i) => (
                  <span
                    key={`${service?.id ?? index}-tag-${i}`}
                    className="rounded-full border border-[#2C2C2C] bg-black/40 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.18em] text-[#A6A6A6]"
                  >
                    {tag ?? ''}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-between gap-6">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[14px] border border-[#2C2C2C] bg-[#050505]">
                <motion.img
                  src="https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80"
                  crossOrigin="anonymous"
                  alt={service?.name ?? 'Service visual'}
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                  className="h-full w-full object-cover opacity-80"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 space-y-3">
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#A6A6A6]">
                    {service?.category ?? 'Advisory'} Lens
                  </p>
                  <p className="font-['Playfair_Display'] text-lg text-[#EAEAEA]">
                    Structured for complex, cross-border balance sheets and sponsors.
                  </p>
                </div>
              </div>
              <div className="rounded-[14px] border border-[#2C2C2C] bg-[#050505] px-4 py-4 md:px-5 md:py-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#A6A6A6]">
                  Mandate Snapshot
                </p>
                <p className="mt-2 font-['Lora'] text-xs text-[#EAEAEA]/80 leading-relaxed">
                  Each {service?.name ?? 'mandate'} begins with a tightly scoped discovery phase,
                  calibrating incentive structures and governance before engaging counterparties.
                </p>
              </div>
            </div>
          </motion.section>
        );
      })}
    </div>
  );
}

export function ServicesPage({ className = '' }: ServicesPageProps) {
  return (
    <main className={cn('min-h-screen bg-[#121212] text-[#EAEAEA]', className)}>
      <section className="border-b border-[#2C2C2C] bg-[#121212]">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 md:flex-row md:items-end md:py-20 lg:px-0">
          <div className="flex-1 space-y-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#A6A6A6]">
              Services
            </p>
            <h1 className="font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl tracking-tight">
              Mandates engineered
              <br />
              for asymmetric outcomes.
            </h1>
            <p className="max-w-xl font-['Lora'] text-sm md:text-base text-[#A6A6A6] leading-relaxed">
              Returnz operates at the intersection of strategic capital, complex carve-outs, and
              sponsor-backed situations—designing processes that hold under scrutiny.
            </p>
          </div>
          <div className="w-full max-w-xs space-y-4 md:text-right">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#A6A6A6]">
              Mandate Profile
            </p>
            <div className="flex items-center justify-between gap-6 md:flex-col md:items-end md:justify-start">
              <div className="space-y-1">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#A6A6A6]">
                  Active Strategies
                </p>
                <p className="font-['Playfair_Display'] text-2xl text-[#D4AF37]">
                  {services?.length ?? 0}
                </p>
              </div>
              <div className="space-y-1">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#A6A6A6]">
                  Typical Horizon
                </p>
                <p className="font-['Lora'] text-sm text-[#EAEAEA]">6–18 months</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-16 lg:px-0 md:py-20">
        <ServicesAlternatingList />
      </section>
      <section className="border-t border-[#2C2C2C] bg-[#1A1A1A]">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-10 md:flex-row md:items-center md:justify-between lg:px-0">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#A6A6A6]">
              Next Step
            </p>
            <h2 className="mt-2 font-['Playfair_Display'] text-xl md:text-2xl">
              Outline a live or prospective mandate.
            </h2>
            <p className="mt-2 max-w-xl font-['Lora'] text-sm text-[#A6A6A6]">
              Share a brief context note and preferred timing; we will revert with a focused,
              conflict-checked perspective.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-[999px] bg-[#D4AF37] px-6 py-3 text-sm font-mono uppercase tracking-[0.22em] text-black transition-colors hover:bg-[#B8921F]"
          >
            Discuss a mandate
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default ServicesPage;