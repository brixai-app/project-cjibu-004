import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Award, Users, MapPin, Clock } from 'lucide-react';
import LayoutShell from '@/components/LayoutShell';
import { globalMetrics } from '@/data/mockData';
import type { Metric } from '@/types';

type AboutMetricProps = {
  metric?: Metric | null;
};

function AboutMetric({ metric = null }: AboutMetricProps) {
  if (!metric) return null;
  return (
    <motion.div
      className="rounded-[14px] border border-[#2E2E2E] bg-[#1E1E1E]/80 px-4 py-3 sm:px-5 sm:py-4"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.35 }}
    >
      <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#B7B7B7]">
        {metric?.label ?? ''}
      </div>
      <div className="mt-1 flex items-baseline gap-1">
        {metric?.prefix && (
          <span className="text-sm text-[#B7B7B7]">{metric?.prefix ?? ''}</span>
        )}
        <motion.span
          className="text-2xl sm:text-3xl font-semibold text-[#F5F5F5] font-['JetBrains_Mono']"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          {metric?.value ?? 0}
        </motion.span>
        {metric?.suffix && (
          <span className="text-xs sm:text-sm text-[#B7B7B7]">
            {metric?.suffix ?? ''}
          </span>
        )}
      </div>
      {metric?.description && (
        <p className="mt-1 text-xs text-[#8E8E8E] font-['JetBrains_Mono'] leading-relaxed">
          {metric?.description ?? ''}
        </p>
      )}
    </motion.div>
  );
}

type TimelineItemProps = {
  year?: string;
  title?: string;
  subtitle?: string;
  detail?: string;
};

function TimelineItem({
  year = '',
  title = '',
  subtitle = '',
  detail = '',
}: TimelineItemProps) {
  return (
    <div className="grid grid-cols-[auto,1fr] gap-4">
      <div className="flex flex-col items-center pt-1">
        <span className="text-[11px] font-['JetBrains_Mono'] text-[#B7B7B7]">
          {year}
        </span>
        <span className="mt-1 h-8 w-px bg-[#2E2E2E]" />
      </div>
      <div className="rounded-[14px] border border-[#2E2E2E] bg-[#1E1E1E]/70 px-4 py-3 sm:px-5 sm:py-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-sm sm:text-base font-semibold text-[#F5F5F5] font-['Lora']">
            {title}
          </h3>
          {subtitle && (
            <span className="inline-flex items-center gap-1 rounded-full border border-[#2E2E2E] px-2 py-0.5 text-[11px] text-[#B7B7B7] font-['JetBrains_Mono']">
              <MapPin className="h-3 w-3 text-[#0077FF]" />
              {subtitle}
            </span>
          )}
        </div>
        {detail && (
          <p className="mt-2 text-xs sm:text-sm text-[#B7B7B7] font-['JetBrains_Mono'] leading-relaxed">
            {detail}
          </p>
        )}
      </div>
    </div>
  );
}

export function About() {
  const yearsMetric = globalMetrics?.find?.(
    (m: Metric) => m?.id === 'years-experience'
  );
  const sectorsMetric = globalMetrics?.find?.(
    (m: Metric) => m?.id === 'sectors-covered'
  );
  const mandatesMetric = globalMetrics?.find?.(
    (m: Metric) => m?.id === 'mandates-closed'
  );

  return (
    <LayoutShell className="min-h-screen bg-[#121212] text-[#F5F5F5]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 pb-20 pt-28 sm:px-6 lg:px-8">
        <section className="grid gap-10 lg:grid-cols-[1.15fr,0.95fr] lg:items-start">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#2E2E2E] bg-[#1E1E1E]/80 px-3 py-1">
              <Clock className="h-3.5 w-3.5 text-[#0077FF]" />
              <span className="text-[11px] uppercase tracking-[0.18em] text-[#B7B7B7] font-['JetBrains_Mono']">
                About Returnz
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.7rem] font-semibold leading-tight text-[#F5F5F5] font-['Lora']">
              Discipline-first investment banking grounded in observable cash
              flow, not narratives.
            </h1>
            <p className="text-sm sm:text-base text-[#B7B7B7] font-['JetBrains_Mono'] leading-relaxed">
              Returnz is a focused advisory studio working with operators,
              sponsors, and family offices who treat basis points with the same
              precision as code. Our practice blends sell-side rigor with
              buy-side skepticism, building mandates around measurable downside
              protection and verified return drivers.
            </p>
            <p className="text-sm sm:text-base text-[#B7B7B7] font-['JetBrains_Mono'] leading-relaxed">
              Every engagement is run as a high-frequency experiment loop: map
              the signal, quantify the asymmetry, instrument the funnel, then
              ship a clean data room that survives hostile diligence. No
              theatre, no vanity decks—just auditable work product that clears
              investment committees.
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              <AboutMetric metric={yearsMetric ?? null} />
              <AboutMetric metric={sectorsMetric ?? null} />
              <AboutMetric metric={mandatesMetric ?? null} />
            </div>
          </div>
          <div className="space-y-5">
            <div className="overflow-hidden rounded-[18px] border border-[#2E2E2E] bg-[#1E1E1E]">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  crossOrigin="anonymous"
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80"
                  alt="Returnz investment workbench"
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />
              </div>
              <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-5 sm:py-4">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-[#B7B7B7] font-['JetBrains_Mono']">
                    Operating posture
                  </p>
                  <p className="mt-1 text-xs sm:text-sm text-[#F5F5F5] font-['JetBrains_Mono']">
                    Full-stack transaction workbench built for recurring
                    mandates.
                  </p>
                </div>
                <div className="flex gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-[12px] border border-[#2E2E2E] bg-[#151515]">
                    <BarChart3 className="h-4 w-4 text-[#0077FF]" />
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-[12px] border border-[#2E2E2E] bg-[#151515]">
                    <Award className="h-4 w-4 text-[#F5F5F5]" />
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-[12px] border border-[#2E2E2E] bg-[#151515]">
                    <Users className="h-4 w-4 text-[#B7B7B7]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-[14px] border border-[#2E2E2E] bg-[#1E1E1E]/80 px-4 py-4 sm:px-5 sm:py-5">
              <p className="text-[11px] uppercase tracking-[0.18em] text-[#B7B7B7] font-['JetBrains_Mono']">
                Sectors we live in
              </p>
              <p className="mt-2 text-xs sm:text-sm text-[#F5F5F5] font-['JetBrains_Mono'] leading-relaxed">
                Vertical software, data infrastructure, capital-efficient
                marketplaces, and workflow-heavy real assets. We favour markets
                with visible unit economics and repeatable acquisition loops.
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-8 rounded-[18px] border border-[#2E2E2E] bg-[#101010] px-4 py-6 sm:px-6 sm:py-7 lg:grid-cols-[1.05fr,1.2fr]">
          <div className="space-y-4">
            <h2 className="text-lg sm:text-xl font-semibold text-[#F5F5F5] font-['Lora']">
              Milestones in the Returnz build
            </h2>
            <p className="text-xs sm:text-sm text-[#B7B7B7] font-['JetBrains_Mono'] leading-relaxed">
              Returnz emerged from a decade of mandates across bulge-bracket
              banks, specialist boutiques, and operator-side capital formation.
              Each phase hardened our bias for transparent structures and
              empirically priced risk.
            </p>
          </div>
          <div className="space-y-5">
            <TimelineItem
              year="2014–2018"
              title="Institutional apprenticeship"
              subtitle="New York · London"
              detail="Structured and executed cross-border sell-side and financing mandates for software, infra, and data assets; learned the cost of noise inside large transaction stacks."
            />
            <TimelineItem
              year="2018–2021"
              title="Operator-side capital formation"
              subtitle="Product-first teams"
              detail="Built in-house deal desks, investor pipelines, and data rooms for high-velocity SaaS operators; translated boardroom narratives into defensible KPIs."
            />
            <TimelineItem
              year="2021–Today"
              title="Returnz studio"
              subtitle="Distributed"
              detail="Standalone advisory platform focused on repeat LP relationships, clean execution, and a narrow universe of sectors where we have genuine pattern recognition."
            />
          </div>
        </section>
      </div>
    </LayoutShell>
  );
}

export default About;