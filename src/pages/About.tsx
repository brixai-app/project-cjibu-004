import React from 'react';
import { motion } from 'framer-motion';
import { about, profile } from '@/data/mockData';
import { cn } from '@/lib/utils';

type AboutPageProps = {
  className?: string;
};

function MetricsMasonry() {
  const metrics = about?.highlightMetrics ?? [];
  if (!metrics?.length) return null;

  return (
    <section className="mt-16 border-t border-[#2C2C2C] pt-10">
      <div className="grid gap-6 md:grid-cols-3">
        {metrics.map((metric) => (
          <motion.div
            key={metric?.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.35 }}
            className="group relative overflow-hidden rounded-[14px] border border-[#2C2C2C] bg-[#1A1A1A]/80 px-5 py-6"
          >
            <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#A6A6A6]">
              {metric?.label ?? ''}
            </div>
            <div className="mt-2 text-2xl font-semibold text-[#EAEAEA]">
              {metric?.value ?? ''}
            </div>
            <div className="mt-1 text-xs text-[#A6A6A6]">{metric?.descriptor ?? ''}</div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/0 via-[#D4AF37]/0 to-[#D4AF37]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function AboutPage({ className = '' }: AboutPageProps) {
  const narrative = about?.narrative ?? [];

  return (
    <main
      className={cn(
        'min-h-screen bg-[#121212] text-[#EAEAEA]',
        'pb-20',
        className
      )}
    >
      <section className="relative h-[320px] overflow-hidden border-b border-[#2C2C2C]">
        <motion.img
          src="https://images.unsplash.com/photo-1611416457332-946853cc75d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDY2MTIyfDB8MXxzZWFyY2h8MXx8bmlnaHQlMjBjaXR5JTIwZmluYW5jaWFsJTIwZGlzdHJpY3QlMjBza3lsaW5lJTIwZWRpdG9yaWFsfGVufDB8MHx8fDE3OTMwMTg0NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&q=80&w=1200&auto=format&fit=crop"
          crossOrigin="anonymous"
          alt={profile?.name ?? 'Principal'}
          initial={{ scale: 1.1, opacity: 0.6 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/10" />
        <div className="relative mx-auto flex h-full max-w-6xl items-end justify-between px-6 pb-10 md:px-10">
          <div className="max-w-xl">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#A6A6A6]">
              About Returnz
            </div>
            <h1 className="mt-2 font-['Playfair_Display'] text-3xl md:text-4xl">
              {profile?.headline ?? 'Discipline behind every transaction.'}
            </h1>
            <p className="mt-3 max-w-lg text-sm text-[#A6A6A6]">
              {about?.mission ?? ''}
            </p>
          </div>
          <div className="hidden items-end gap-4 md:flex">
            <div className="flex flex-col text-right">
              <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#A6A6A6]">
                Principal
              </span>
              <span className="mt-1 text-sm">{profile?.name ?? ''}</span>
              <span className="text-xs text-[#A6A6A6]">
                {profile?.title ?? ''} · {profile?.location ?? ''}
              </span>
            </div>
            <img
              src={profile?.avatarUrl ?? 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80'}
              crossOrigin="anonymous"
              alt={profile?.name ?? 'Principal'}
              className="h-16 w-16 rounded-full border border-[#2C2C2C] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-6xl px-6 md:px-10">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
          >
            <h2 className="font-['Playfair_Display'] text-xl md:text-2xl">
              Biography
            </h2>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-[#A6A6A6]">
              <p>{profile?.bio ?? ''}</p>
              {narrative.map((para) => (
                <p key={para?.slice(0, 32) ?? ''}>{para ?? ''}</p>
              ))}
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="rounded-[14px] border border-[#2C2C2C] bg-[#1A1A1A]/80 p-5">
              <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#A6A6A6]">
                Philosophy
              </div>
              <p className="mt-3 text-sm italic text-[#EAEAEA]">
                “{about?.philosophy ?? ''}”
              </p>
            </div>
            <div className="rounded-[14px] border border-[#2C2C2C] bg-[#1A1A1A]/80 p-5 text-xs text-[#A6A6A6]">
              <div className="flex items-center justify-between">
                <span className="font-mono uppercase tracking-[0.18em]">
                  Years in market
                </span>
                <span className="text-sm text-[#EAEAEA]">
                  {profile?.yearsExperience ?? 0}+ 
                </span>
              </div>
              <div className="mt-3 border-t border-[#2C2C2C] pt-3">
                <div className="font-mono text-[11px] uppercase tracking-[0.18em]">
                  Focus sectors
                </div>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {(profile?.sectors ?? []).map((sector) => (
                    <span
                      key={sector ?? ''}
                      className="rounded-full border border-[#2C2C2C] px-2 py-1 text-[11px] text-[#EAEAEA]"
                    >
                      {sector ?? ''}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.aside>
        </div>

        <MetricsMasonry />
      </section>
    </main>
  );
}

export default AboutPage;