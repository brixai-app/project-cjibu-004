import React from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import HeaderNav from './HeaderNav';
import ContactDrawer from './ContactDrawer';
import { Toaster } from 'sonner';
import { cn } from '@/lib/utils';

type LayoutShellProps = {
  className?: string;
};

export function LayoutShell({ className = '' }: LayoutShellProps) {
  const location = useLocation();
  const [contactOpen, setContactOpen] = React.useState<boolean>(false);

  const handleOpenContact = React.useCallback(() => {
    setContactOpen(true);
  }, []);

  const handleCloseContact = React.useCallback(() => {
    setContactOpen(false);
  }, []);

  return (
    <div className={cn('min-h-screen bg-[#121212] text-[#F5F5F5]', className)}>
      <Toaster position="bottom-right" richColors />
      <HeaderNav onOpenContact={handleOpenContact} />
      <div className="flex min-h-[calc(100vh-4rem)] flex-col">
        <main className="flex-1">
          <Outlet />
        </main>
        <footer className="border-t border-[#2E2E2E] bg-[#1E1E1E]/80 backdrop-blur-sm">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-1 text-xs md:text-sm">
              <p className="font-['JetBrains_Mono'] text-[#B7B7B7]">
                © {new Date().getFullYear()} Returnz Advisory. All rights reserved.
              </p>
              <p className="font-['JetBrains_Mono'] text-[11px] text-[#777777]">
                Transactional insights for complex capital, M&amp;A, and strategic mandates.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm">
              <nav className="flex flex-wrap items-center gap-3">
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    cn(
                      "font-['JetBrains_Mono'] uppercase tracking-wide text-[#B7B7B7] transition-colors hover:text-[#F5F5F5]",
                      isActive ? 'text-[#F5F5F5]' : ''
                    )
                  }
                >
                  Services
                </NavLink>
                <NavLink
                  to="/case-studies"
                  className={({ isActive }) =>
                    cn(
                      "font-['JetBrains_Mono'] uppercase tracking-wide text-[#B7B7B7] transition-colors hover:text-[#F5F5F5]",
                      isActive ? 'text-[#F5F5F5]' : ''
                    )
                  }
                >
                  Case Studies
                </NavLink>
                <NavLink
                  to="/testimonials"
                  className={({ isActive }) =>
                    cn(
                      "font-['JetBrains_Mono'] uppercase tracking-wide text-[#B7B7B7] transition-colors hover:text-[#F5F5F5]",
                      isActive ? 'text-[#F5F5F5]' : ''
                    )
                  }
                >
                  Testimonials
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    cn(
                      "font-['JetBrains_Mono'] uppercase tracking-wide text-[#B7B7B7] transition-colors hover:text-[#F5F5F5]",
                      isActive ? 'text-[#F5F5F5]' : ''
                    )
                  }
                >
                  About
                </NavLink>
              </nav>
              <button
                type="button"
                onClick={handleOpenContact}
                className="rounded-[14px] bg-[#0077FF] px-4 py-2 text-xs font-['JetBrains_Mono'] font-semibold uppercase tracking-[0.18em] text-black transition-transform transition-colors hover:bg-[#0A5ED6] hover:translate-y-0.5"
              >
                Discuss A Mandate
              </button>
              <p className="hidden text-[11px] font-['JetBrains_Mono'] text-[#555555] md:block">
                Route: {location?.pathname ?? '/'}
              </p>
            </div>
          </div>
        </footer>
      </div>
      <ContactDrawer open={contactOpen} onOpenChange={setContactOpen} />
    </div>
  );
}

export default LayoutShell;