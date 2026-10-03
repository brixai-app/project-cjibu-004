import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { mockData } from '@/data/mockData';

export type HeaderNavProps = {
  openContact?: () => void;
};

const navLinks = mockData?.navLinks ?? [
  { id: 'home', label: 'Overview', to: '/' },
  { id: 'services', label: 'Services', to: '/services' },
  { id: 'cases', label: 'Case Studies', to: '/case-studies' },
  { id: 'about', label: 'Firm', to: '/about' },
  { id: 'testimonials', label: 'Clients', to: '/testimonials' },
];

export function HeaderNav({ openContact = () => {} }: HeaderNavProps) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const location = useLocation();

  const toggleMobile = React.useCallback(() => {
    setMobileOpen((prev) => !prev);
  }, []);

  const closeMobile = React.useCallback(() => {
    setMobileOpen(false);
  }, []);

  React.useEffect(() => {
    closeMobile();
  }, [location.pathname, closeMobile]);

  return (
    <header className="sticky top-0 z-40 border-b border-[#2E2E2E] bg-[#121212]/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex items-center gap-2"
          aria-label="Returnz home"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-[14px] border border-[#2E2E2E] bg-[#1E1E1E] text-xs font-semibold tracking-tight text-[#F5F5F5]">
            RZ
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-['Lora'] text-lg font-semibold tracking-tight text-[#F5F5F5]">
              Returnz
            </span>
            <span className="text-[10px] font-['JetBrains Mono'] uppercase tracking-[0.2em] text-[#B7B7B7]">
              Investment Banking
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <div className="flex items-center gap-6 text-xs font-['JetBrains_Mono'] uppercase tracking-[0.18em]">
            {navLinks?.map((link) => (
              <NavLink
                key={link?.id ?? link?.to}
                to={link?.to ?? '/'}
                className={({ isActive }) =>
                  cn(
                    'transition-colors hover:text-[#F5F5F5]',
                    isActive ? 'text-[#F5F5F5]' : 'text-[#B7B7B7]'
                  )
                }
              >
                {link?.label ?? ''}
              </NavLink>
            ))}
          </div>
          <motion.button
            type="button"
            onClick={() => openContact()}
            whileHover={{ x: 2 }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center gap-2 rounded-[14px] bg-[#0077FF] px-4 py-2 text-xs font-['JetBrains_Mono'] font-semibold uppercase tracking-[0.2em] text-black shadow-[0_0_0_1px_rgba(0,0,0,0.25)]"
          >
            <span>Discuss a mandate</span>
            <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
          </motion.button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <motion.button
            type="button"
            onClick={() => openContact()}
            whileHover={{ x: 1 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-1 rounded-[12px] bg-[#0077FF] px-3 py-1.5 text-[10px] font-['JetBrains_Mono'] font-semibold uppercase tracking-[0.18em] text-black"
          >
            <span>Contact</span>
          </motion.button>
          <button
            type="button"
            onClick={toggleMobile}
            aria-label="Toggle navigation"
            className="inline-flex h-9 w-9 items-center justify-center rounded-[12px] border border-[#2E2E2E] bg-[#1E1E1E] text-[#F5F5F5]"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="border-b border-[#2E2E2E] bg-[#121212]"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 pb-4 pt-2 sm:px-6 lg:px-8">
              <div className="flex flex-col gap-2 text-xs font-['JetBrains_Mono'] uppercase tracking-[0.18em]">
                {navLinks?.map((link) => (
                  <NavLink
                    key={link?.id ?? link?.to}
                    to={link?.to ?? '/'}
                    className={({ isActive }) =>
                      cn(
                        'flex items-center justify-between rounded-[12px] px-2 py-2 transition-colors',
                        isActive
                          ? 'bg-[#1E1E1E] text-[#F5F5F5]'
                          : 'text-[#B7B7B7] hover:bg-[#1E1E1E] hover:text-[#F5F5F5]'
                      )
                    }
                  >
                    <span>{link?.label ?? ''}</span>
                    <ArrowRight className="h-3 w-3 opacity-70" />
                  </NavLink>
                ))}
              </div>
              <div className="flex items-center justify-between text-[10px] font-['JetBrains_Mono'] text-[#B7B7B7]">
                <span>Return profiles engineered with precision.</span>
                <span className="uppercase tracking-[0.18em]">
                  AUM: $ {mockData?.aumDisplay ?? '—'}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default HeaderNav;