import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import HeaderNav from '@/components/HeaderNav';
import MobileNavDrawer from '@/components/MobileNavDrawer';

type AppLayoutProps = {
  children?: React.ReactNode;
};

export function AppLayout({ children = null }: AppLayoutProps) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#121212] text-[#EAEAEA] font-[Lora]">
      <div className="fixed inset-x-0 top-0 z-40 border-b border-[#2C2C2C] bg-[#121212]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6 lg:px-8">
          <HeaderNav />
          <MobileNavDrawer />
        </div>
      </div>

      <main className="pt-20">
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-4 md:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={location?.pathname ?? '/'}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.32, ease: [0.22, 0.61, 0.36, 1] }}
              className="space-y-12"
            >
              <Outlet />
              {children}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      <footer className="border-t border-[#2C2C2C] bg-[#1A1A1A]">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-[#A6A6A6] md:flex-row md:items-center md:justify-between md:px-6 lg:px-8">
          <div className="space-y-1">
            <p className="font-[Playfair Display] text-xs uppercase tracking-[0.28em] text-[#A6A6A6]">
              Returnz Advisory
            </p>
            <p>© {new Date().getFullYear()} Returnz. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap gap-4 text-xs">
            <span className="uppercase tracking-[0.22em] text-[#A6A6A6]">
              Discreet. Sector-led. Outcome-first.
            </span>
            <span className="rounded-full border border-[#2C2C2C] px-3 py-1 text-[11px] uppercase tracking-[0.26em] text-[#D4AF37]">
              London · New York · Dubai
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default AppLayout;