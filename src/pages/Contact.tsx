import React from 'react';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export type ContactPageProps = {
  className?: string;
};

type ContactFormProps = {
  className?: string;
};

function ContactForm({ className = '' }: ContactFormProps) {
  return (
    <form
      className={cn(
        'space-y-6',
        'text-[#EAEAEA]',
        'font-[Lora]',
        className
      )}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label className="text-xs tracking-[0.2em] uppercase text-[#A6A6A6] font-mono">
            Name
          </label>
          <input
            className="w-full rounded-[14px] bg-[#121212] border border-[#2C2C2C] px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37]"
            placeholder="Your full name"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs tracking-[0.2em] uppercase text-[#A6A6A6] font-mono">
            Company
          </label>
          <input
            className="w-full rounded-[14px] bg-[#121212] border border-[#2C2C2C] px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37]"
            placeholder="Organization or family office"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label className="text-xs tracking-[0.2em] uppercase text-[#A6A6A6] font-mono">
            Email
          </label>
          <input
            type="email"
            className="w-full rounded-[14px] bg-[#121212] border border-[#2C2C2C] px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37]"
            placeholder="name@sponsor.com"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs tracking-[0.2em] uppercase text-[#A6A6A6] font-mono">
            Phone
          </label>
          <input
            className="w-full rounded-[14px] bg-[#121212] border border-[#2C2C2C] px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37]"
            placeholder="+1 (___) ___ ____"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="space-y-2">
          <label className="text-xs tracking-[0.2em] uppercase text-[#A6A6A6] font-mono">
            Mandate Type
          </label>
          <select className="w-full rounded-[14px] bg-[#121212] border border-[#2C2C2C] px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37]">
            <option>M&A Sell-Side</option>
            <option>M&A Buy-Side</option>
            <option>Capital Raise</option>
            <option>Restructuring</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-xs tracking-[0.2em] uppercase text-[#A6A6A6] font-mono">
            Indicative Size
          </label>
          <select className="w-full rounded-[14px] bg-[#121212] border border-[#2C2C2C] px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37]">
            <option>$25m – $75m</option>
            <option>$75m – $250m</option>
            <option>$250m – $1bn</option>
            <option>$1bn+</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-xs tracking-[0.2em] uppercase text-[#A6A6A6] font-mono">
            Timing
          </label>
          <select className="w-full rounded-[14px] bg-[#121212] border border-[#2C2C2C] px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37]">
            <option>Exploratory</option>
            <option>Next 3–6 months</option>
            <option>This quarter</option>
            <option>Live situation</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-xs tracking-[0.2em] uppercase text-[#A6A6A6] font-mono">
          Mandate context
        </label>
        <textarea
          rows={5}
          className="w-full rounded-[14px] bg-[#121212] border border-[#2C2C2C] px-4 py-3 text-sm resize-none focus:outline-none focus:border-[#D4AF37]"
          placeholder="Share the headline, key constraints, and what success looks like."
        />
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
        <label className="flex items-start gap-3 text-xs text-[#A6A6A6]">
          <input
            type="checkbox"
            className="mt-1 h-4 w-4 rounded border-[#2C2C2C] bg-[#121212] text-[#D4AF37]"
          />
          <span>
            I consent to Returnz contacting me about this mandate and understand this
            does not constitute an engagement or formal advice.
          </span>
        </label>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-[14px] bg-[#D4AF37] px-6 py-3 text-xs font-semibold tracking-[0.2em] uppercase text-black hover:bg-[#B8921F] transition-colors"
        >
          Submit mandate
          <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>
    </form>
  );
}

type ContactInfoPanelProps = {
  className?: string;
};

function ContactInfoPanel({ className = '' }: ContactInfoPanelProps) {
  return (
    <div
      className={cn(
        'rounded-[18px] border border-[#2C2C2C] bg-[#1A1A1A]/80 backdrop-blur',
        'p-6 md:p-8 flex flex-col gap-8 justify-between',
        className
      )}
    >
      <div className="space-y-4">
        <p className="text-xs tracking-[0.3em] uppercase text-[#A6A6A6] font-mono">
          Direct access
        </p>
        <p className="text-sm text-[#EAEAEA] leading-relaxed font-[Lora]">
          Every mandate begins with a confidential conversation with a senior
          dealmaker, not a junior intake team.
        </p>
        <div className="space-y-4 pt-2 text-sm text-[#EAEAEA]">
          <div className="flex items-center gap-3">
            <Mail className="h-4 w-4 text-[#D4AF37]" />
            <span>mandates@returnz.capital</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="h-4 w-4 text-[#D4AF37]" />
            <span>+1 (212) 555 0148</span>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="h-4 w-4 text-[#D4AF37] mt-1" />
            <span>Private offices, Midtown Manhattan and Mayfair, London</span>
          </div>
        </div>
      </div>
      <div className="pt-6 border-t border-[#2C2C2C]">
        <p className="text-[11px] leading-relaxed text-[#A6A6A6] font-[Lora]">
          Returnz works exclusively with institutional sponsors, founders, and
          family offices on transactions above $25m EV. All enquiries are treated
          as strictly confidential.
        </p>
      </div>
    </div>
  );
}

export function ContactPage({ className = '' }: ContactPageProps) {
  return (
    <div className={cn('min-h-screen bg-[#121212] text-[#EAEAEA]', className)}>
      <section className="border-b border-[#2C2C2C] bg-[#1A1A1A]">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <p className="text-xs tracking-[0.3em] uppercase text-[#A6A6A6] font-mono">
                Contact
              </p>
              <h1 className="font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl leading-tight">
                Put a discreet lens on your next transaction.
              </h1>
              <p className="text-sm md:text-base text-[#A6A6A6] font-[Lora]">
                Outline the shape of the mandate and our team will respond within one
                business day with a confidential time to connect.
              </p>
            </div>
            <div className="text-xs text-right text-[#A6A6A6] font-mono space-y-1">
              <p className="tracking-[0.25em] uppercase">Response time</p>
              <p className="text-[#EAEAEA]">Under 24 hours</p>
              <p className="tracking-[0.25em] uppercase mt-3">Typical EV</p>
              <p className="text-[#EAEAEA]">$25m – $1bn+</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <ContactForm />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <ContactInfoPanel />
          </motion.div>
        </div>

        <div className="border border-dashed border-[#2C2C2C] rounded-[16px] px-5 py-4 md:px-6 md:py-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p className="text-xs md:text-sm text-[#A6A6A6] font-[Lora] max-w-2xl">
            Sending this form does not create an adviser–client relationship and
            should not be relied upon as financial advice. We only discuss named
            situations under mutual NDA.
          </p>
          <p className="text-[11px] text-[#EAEAEA] font-mono tracking-[0.18em] uppercase">
            Discretion first.
          </p>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;