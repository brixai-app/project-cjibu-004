import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { testimonials } from '@/data/mockData';
import { cn } from '@/lib/utils';

export type TestimonialsPageProps = {
  className?: string;
};

export type TestimonialsStackProps = {
  className?: string;
};

export function TestimonialsStack({ className = '' }: TestimonialsStackProps) {
  const avgRating =
    testimonials?.length ?? 0
      ? (testimonials?.reduce((acc, t) => acc + (t?.rating ?? 0), 0) ?? 0) /
        (testimonials?.length ?? 1)
      : 0;

  return (
    <section
      className={cn(
        'relative grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]',
        className
      )}
    >
      <div className="space-y-6">
        {testimonials?.map((t) => (
          <motion.article
            key={t?.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="group relative overflow-hidden rounded-[14px] border border-[#2C2C2C] bg-[#1A1A1A]/80 p-6 backdrop-blur"
          >
            <div className="flex items-start gap-4">
              <img
                src={t?.avatarUrl ?? 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=200&q=80'}
                crossOrigin="anonymous"
                alt={t?.name ?? 'Client'}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div className="flex-1 space-y-3">
                <p className="font-['Lora'] text-sm uppercase tracking-[0.2em] text-[#A6A6A6]">
                  {t?.relationship ?? 'Client'} • {t?.sector ?? 'Sector'}
                </p>
                <p className="font-['Playfair_Display'] text-lg leading-relaxed text-[#EAEAEA]">
                  “{t?.quote ?? ''}”
                </p>
                <div className="flex flex-wrap items-center justify-between gap-3 pt-1 text-xs text-[#A6A6A6]">
                  <div>
                    <span className="font-['Lora'] text-sm text-[#EAEAEA]">
                      {t?.name ?? 'Name'}
                    </span>
                    <span className="mx-1">•</span>
                    <span>{t?.role ?? 'Role'}</span>
                    <span className="mx-1">at</span>
                    <span className="text-[#EAEAEA]">
                      {t?.company ?? 'Company'}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          'h-3.5 w-3.5',
                          i < (t?.rating ?? 0)
                            ? 'fill-[#D4AF37] text-[#D4AF37]'
                            : 'text-[#2C2C2C]'
                        )}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
      <aside className="flex flex-col gap-6">
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="rounded-[14px] border border-[#2C2C2C] bg-[#1A1A1A]/90 p-6"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#A6A6A6]">
            SATISFACTION INDEX
          </p>
          <div className="mt-4 flex items-end justify-between">
            <div>
              <div className="flex items-baseline gap-2">
                <span className="font-['Playfair_Display'] text-4xl text-[#EAEAEA]">
                  {avgRating?.toFixed(2) ?? '0.00'}
                </span>
                <span className="text-sm text-[#A6A6A6]">/ 5.00</span>
              </div>
              <p className="mt-1 text-xs text-[#A6A6A6]">
                Across {testimonials?.length ?? 0} verified mandates
              </p>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-[#2C2C2C] px-3 py-1.5 text-xs text-[#A6A6A6]">
              <Users className="h-3.5 w-3.5 text-[#D4AF37]" />
              <span>Board, Family Office & PE Sponsors</span>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          className="rounded-[14px] border border-[#2C2C2C] bg-[#121212] p-6"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#A6A6A6]">
            WHAT CLIENTS SIGNAL
          </p>
          <ul className="mt-3 space-y-2 text-sm text-[#EAEAEA]">
            <li>• Relentless preparation and scenario modeling</li>
            <li>• Calm execution under distressed timelines</li>
            <li>• Sponsor-grade communication to investment committees</li>
          </ul>
        </motion.div>
      </aside>
    </section>
  );
}

export function TestimonialsPage({ className = '' }: TestimonialsPageProps) {
  const navigate = useNavigate();
  const count = testimonials?.length ?? 0;

  return (
    <main className={cn('min-h-screen bg-[#121212] text-[#EAEAEA]', className)}>
      <section className="relative border-b border-[#2C2C2C] bg-[#121212] px-6 pb-16 pt-28 md:px-10 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-end"
          >
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#A6A6A6]">
                LIVE REFERENCES
              </p>
              <h1 className="mt-4 font-['Playfair_Display'] text-4xl leading-tight text-[#EAEAEA] md:text-5xl">
                Measured trust from principals
                <span className="block text-[#D4AF37]">
                  who sign the wire.
                </span>
              </h1>
              <p className="mt-5 max-w-xl font-['Lora'] text-sm text-[#A6A6A6]">
                A curated selection of board chairs, founders and sponsors who
                mandated Returnz on complex, reputation-critical transactions.
              </p>
            </div>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#A6A6A6]">
                  AGGREGATE SENTIMENT
                </p>
                <div className="mt-3 flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-[#D4AF37] text-[#D4AF37]"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-[#EAEAEA]">
                    {count} qualitative endorsements
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => navigate('/contact')}
                className="inline-flex items-center gap-2 rounded-[14px] bg-[#D4AF37] px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-[#B8921F]"
              >
                Request reference call
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="px-6 py-16 md:px-10 lg:px-20">
        <div className="mx-auto max-w-6xl space-y-16">
          <TestimonialsStack />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex flex-col items-start justify-between gap-6 rounded-[14px] border border-[#2C2C2C] bg-[#1A1A1A] px-6 py-7 md:flex-row md:px-9"
          >
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#A6A6A6]">
                NEXT CONVERSATION
              </p>
              <h2 className="mt-3 font-['Playfair_Display'] text-2xl text-[#EAEAEA]">
                Ready for a closed-door, numbers-first discussion.
              </h2>
              <p className="mt-2 max-w-xl text-sm text-[#A6A6A6]">
                Share the contours of your mandate and we will revert with a
                candid view on fit, timing and achievable outcomes.
              </p>
            </div>
            <button
              type="button"
              onClick={() => navigate('/contact')}
              className="inline-flex items-center gap-2 rounded-[14px] bg-[#D4AF37] px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-[#B8921F]"
            >
              Open contact brief
              <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default TestimonialsPage;