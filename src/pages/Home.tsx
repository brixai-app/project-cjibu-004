import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { profile, services, caseStudies, testimonials } from '@/data/mockData';
import { cn } from '@/lib/utils';
import type { CaseStudy, Service, Testimonial } from '@/types';

export type HomePageProps = {
  className?: string;
};

function HeroSection() {
  const navigate = useNavigate();
  const primaryMetric = profile?.metrics?.dealsAdvised ?? 0;
  const secondaryMetric = profile?.metrics?.capitalRaised ?? 0;
  return (
    <section className="relative overflow-hidden rounded-[14px] bg-[#1A1A1A]">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
          crossOrigin="anonymous"
          alt="Editorial skyline"
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-[#121212]/80 to-transparent" />
      </div>
      <div className="relative flex flex-col gap-10 px-6 py-14 lg:flex-row lg:px-10 lg:py-20">
        <div className="max-w-xl space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-medium tracking-[0.25em] text-[#A6A6A6]"
          >
            RETURNZ INVESTMENT PARTNERS
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-['Playfair Display'] text-4xl leading-tight text-[#EAEAEA] sm:text-5xl lg:text-6xl"
          >
            Quietly structuring outcomes for families and founders.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-lg font-['Lora'] text-sm text-[#A6A6A6] sm:text-base"
          >
            Returnz advises private business owners, family offices, and select institutions on
            sale, recapitalisation, and capital solutions where discretion and alignment matter.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <button
              type="button"
              onClick={() => navigate('/contact')}
              className="group inline-flex items-center gap-2 rounded-[14px] bg-[#D4AF37] px-6 py-3 text-sm font-semibold tracking-wide text-black transition-colors hover:bg-[#B8921F]"
            >
              Discuss a mandate
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              type="button"
              onClick={() => navigate('/case-studies')}
              className="text-xs font-medium tracking-[0.22em] text-[#A6A6A6] hover:text-[#EAEAEA]"
            >
              VIEW SELECTED TRANSACTIONS
            </button>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.22 }}
          className="ml-auto flex w-full max-w-xs flex-col gap-6 border-l border-[#2C2C2C]/70 pl-8"
        >
          <div className="space-y-3">
            <p className="text-[11px] font-medium tracking-[0.3em] text-[#A6A6A6]">
              MANDATE OVERVIEW
            </p>
            <div className="space-y-2">
              <p className="font-['Playfair Display'] text-3xl text-[#EAEAEA]">
                {primaryMetric.toLocaleString()}+
              </p>
              <p className="text-xs text-[#A6A6A6]">transactions advised across public and private markets</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-xs text-[#A6A6A6]">
            <div className="space-y-1">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#A6A6A6]">
                Capital Raised
              </p>
              <p className="font-['Playfair Display'] text-xl text-[#EAEAEA]">
                ${secondaryMetric.toLocaleString()}m+
              </p>
            </div>
            <div className="space-y-1">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#A6A6A6]">
                Geographies
              </p>
              <p className="font-['Playfair Display'] text-xl text-[#EAEAEA]">
                {profile?.metrics?.geographies?.length ?? 0}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function MetricsMasonry() {
  const experience = profile?.yearsExperience ?? 0;
  const sectors = profile?.sectors ?? [];
  return (
    <section className="mt-10 grid gap-4 md:grid-cols-[2fr,1.5fr]">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col justify-between rounded-[14px] border border-[#2C2C2C] bg-[#1A1A1A] p-6"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#A6A6A6]">
              TRACK RECORD
            </p>
            <p className="mt-2 font-['Playfair Display'] text-3xl text-[#EAEAEA]">
              {experience}+ years across cycles.
            </p>
          </div>
          <BarChart3 className="h-7 w-7 text-[#D4AF37]" />
        </div>
        <p className="mt-4 max-w-md font-['Lora'] text-xs text-[#A6A6A6]">
          Returnz has advised through liquidity crunches, frothy markets and everything between —
          quietly aligning complex stakeholders around simple, executable outcomes.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="grid gap-4 sm:grid-cols-2"
      >
        <div className="rounded-[14px] border border-[#2C2C2C] bg-[#121212] p-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#A6A6A6]">
            SECTORS
          </p>
          <p className="mt-3 text-sm text-[#EAEAEA]">
            {sectors?.slice(0, 3)?.join(' · ') ?? ''}
          </p>
          <p className="mt-1 text-xs text-[#A6A6A6]">
            With depth in {sectors?.length ?? 0} adjacent sectors for nuanced deal positioning.
          </p>
        </div>
        <div className="rounded-[14px] border border-[#2C2C2C] bg-[#1A1A1A] p-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#A6A6A6]">
            MANDATE SWEET SPOT
          </p>
          <p className="mt-3 text-sm text-[#EAEAEA]">
            {profile?.metrics?.avgDealSize?.toLocaleString() ?? ''}m enterprise value
          </p>
          <p className="mt-1 text-xs text-[#A6A6A6]">Designed for privately-held, cash generative businesses.</p>
        </div>
      </motion.div>
    </section>
  );
}

function ServicesPreview() {
  const navigate = useNavigate();
  const featured = (services ?? []).slice(0, 3) as Service[];
  return (
    <section className="mt-14 space-y-6">
      <div className="flex items-end justify-between">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#A6A6A6]">SERVICES</p>
          <h2 className="mt-2 font-['Playfair Display'] text-2xl text-[#EAEAEA]">
            Quietly rigorous across the capital structure.
          </h2>
        </div>
        <button
          type="button"
          onClick={() => navigate('/services')}
          className="hidden text-xs font-medium tracking-[0.16em] text-[#A6A6A6] hover:text-[#EAEAEA] sm:inline-flex"
        >
          VIEW FULL MANDATE SPECTRUM
        </button>
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        {featured?.map((service) => (
          <motion.article
            key={service?.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
            className="group flex flex-col justify-between rounded-[14px] border border-[#2C2C2C] bg-[#121212] p-5 transition-transform duration-500 hover:-translate-y-1"
          >
            <div className="space-y-3">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#A6A6A6]">
                {service?.category ?? ''}
              </p>
              <h3 className="font-['Playfair Display'] text-lg text-[#EAEAEA]">
                {service?.name ?? ''}
              </h3>
              <p className="text-xs text-[#A6A6A6]">{service?.summary ?? ''}</p>
            </div>
            <p className="mt-4 text-[11px] text-[#A6A6A6]">
              Typical mandate: {service?.typicalMandateSize ?? ''} over {service?.timelineRange ?? ''}.
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function FeaturedCaseStudiesMasonry() {
  const navigate = useNavigate();
  const featured = (caseStudies ?? []).filter((c: CaseStudy) => c?.isFeatured)?.slice(0, 3);
  const primary = featured?.[0];
  const secondary = featured?.slice(1);
  return (
    <section className="mt-16 space-y-6">
      <div className="flex items-end justify-between">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#A6A6A6]">
            SELECTED OUTCOMES
          </p>
          <h2 className="mt-2 font-['Playfair Display'] text-2xl text-[#EAEAEA]">
            A sample of mandates where alignment mattered.
          </h2>
        </div>
        <button
          type="button"
          onClick={() => navigate('/case-studies')}
          className="hidden text-xs font-medium tracking-[0.16em] text-[#A6A6A6] hover:text-[#EAEAEA] sm:inline-flex"
        >
          VIEW TRANSACTION GALLERY
        </button>
      </div>
      <div className="grid gap-4 lg:grid-cols-[1.1fr,1fr]">
        {primary && (
          <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="group relative overflow-hidden rounded-[14px] border border-[#2C2C2C] bg-[#1A1A1A]"
          >
            <div className="relative aspect-[16/9] overflow-hidden">
              <img
                src={primary?.imageUrls?.[0] ?? 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80'}
                crossOrigin="anonymous"
                alt={primary?.title ?? ''}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent" />
            </div>
            <div className="absolute left-6 top-6 rounded-full bg-[#121212]/80 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[#EAEAEA]">
              Featured
            </div>
            <div className="absolute inset-x-0 bottom-0 flex justify-between gap-4 px-6 pb-5">
              <div>
                <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#A6A6A6]">
                  {primary?.sector ?? ''} · {primary?.location ?? ''}
                </p>
                <p className="mt-2 font-['Playfair Display'] text-lg text-[#EAEAEA]">
                  {primary?.title ?? ''}
                </p>
              </div>
              <button
                type="button"
                onClick={() => navigate(`/case-studies#${primary?.id ?? ''}`)}
                className="self-end rounded-full bg-[#D4AF37] px-3 py-1 text-[11px] font-semibold tracking-[0.16em] text-black hover:bg-[#B8921F]"
              >
                VIEW CASE
              </button>
            </div>
          </motion.article>
        )}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {secondary?.map((caseStudy) => (
            <motion.article
              key={caseStudy?.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55 }}
              className="flex flex-col justify-between rounded-[14px] border border-[#2C2C2C] bg-[#121212] p-5"
            >
              <div className="space-y-2">
                <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#A6A6A6]">
                  {caseStudy?.clientType ?? ''} · {caseStudy?.sector ?? ''}
                </p>
                <h3 className="font-['Playfair Display'] text-lg text-[#EAEAEA]">
                  {caseStudy?.title ?? ''}
                </h3>
                <p className="text-xs text-[#A6A6A6]">{caseStudy?.subtitle ?? ''}</p>
              </div>
              <p className="mt-3 text-[11px] text-[#A6A6A6]">
                Outcome: {caseStudy?.outcome ?? ''}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialPullQuote() {
  const featured = (testimonials ?? [])[0] as Testimonial | undefined;
  if (!featured) return null;
  return (
    <section className="mt-16 rounded-[14px] border border-[#2C2C2C] bg-[#121212] p-6 sm:p-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-2xl space-y-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#A6A6A6]">
            QUIET REFERENCES
          </p>
          <p className="font-['Playfair Display'] text-xl leading-relaxed text-[#EAEAEA]">
            “{featured?.quote ?? ''}”
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="h-11 w-11 overflow-hidden rounded-full border border-[#2C2C2C]">
            <img
              src={featured?.avatarUrl ?? 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80'}
              crossOrigin="anonymous"
              alt={featured?.name ?? ''}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm text-[#EAEAEA]">{featured?.name ?? ''}</p>
            <p className="text-[11px] text-[#A6A6A6]">
              {featured?.role ?? ''}, {featured?.company ?? ''}
            </p>
          </div>
          <Users className="ml-2 h-4 w-4 text-[#D4AF37]" />
        </div>
      </div>
    </section>
  );
}

export function HomePage({ className = '' }: HomePageProps) {
  return (
    <main className={cn('space-y-12 pb-16 pt-6 text-[#EAEAEA]', className ?? '')}>
      <HeroSection />
      <MetricsMasonry />
      <ServicesPreview />
      <FeaturedCaseStudiesMasonry />
      <TestimonialPullQuote />
    </main>
  );
}

export default HomePage;