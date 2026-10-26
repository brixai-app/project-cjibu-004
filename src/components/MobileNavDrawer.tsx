import * as React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

export type MobileNavDrawerProps = {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

const NAV_LINKS: Array<{ href: string; label: string; meta: string }> = [
  { href: '/', label: 'Overview', meta: 'Hero & signal' },
  { href: '/services', label: 'Mandates', meta: 'Advisory scope' },
  { href: '/case-studies', label: 'Transactions', meta: 'Selected deals' },
  { href: '/testimonials', label: 'Conviction', meta: 'Partner voices' },
  { href: '/about', label: 'Firm', meta: 'Story & posture' },
  { href: '/contact', label: 'Engage', meta: 'Begin a mandate' },
];

export function MobileNavDrawer({
  open = false,
  onOpenChange = () => {},
}: MobileNavDrawerProps) {
  const location = useLocation();
  const handleOpenChange = (next: boolean) => {
    onOpenChange?.(next);
  };

  const handleNavigate = () => {
    onOpenChange?.(false);
  };

  return (
    <Dialog.Root open={open} onOpenChange={handleOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0"
        />
        <Dialog.Content
          className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col border-l border-[#2C2C2C] bg-[#121212]/95 shadow-2xl outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:slide-in-from-right data-[state=closed]:slide-out-to-right"
        >
          <header className="flex items-center justify-between border-b border-[#2C2C2C] px-5 py-4">
            <div className="flex flex-col">
              <span className="font-['Playfair_Display'] text-sm uppercase tracking-[0.25em] text-[#A6A6A6]">
                Returnz
              </span>
              <span className="font-['Lora'] text-xs text-[#A6A6A6]">
                Mobile navigation
              </span>
            </div>
            <Dialog.Close asChild>
              <button
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#2C2C2C] bg-[#1A1A1A] text-[#EAEAEA] transition-transform hover:-translate-y-0.5 hover:bg-[#252525] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/70 focus:ring-offset-2 focus:ring-offset-[#121212]"
                aria-label="Close navigation"
              >
                <X className="h-4 w-4" />
              </button>
            </Dialog.Close>
          </header>
          <div className="flex-1 overflow-y-auto px-5 py-6">
            <nav className="space-y-4">
              {NAV_LINKS?.map((item) => {
                const isActive = (location?.pathname ?? '/') === item.href;
                return (
                  <Dialog.Close asChild key={item.href}>
                    <Link
                      to={item.href}
                      onClick={handleNavigate}
                      className={cn(
                        'group flex items-center justify-between rounded-[14px] border px-4 py-3 transition-colors',
                        isActive
                          ? 'border-[#D4AF37] bg-[#1A1A1A]'
                          : 'border-[#2C2C2C] bg-transparent hover:border-[#3A3A3A] hover:bg-[#181818]'
                      )}
                    >
                      <div className="flex flex-col">
                        <span className="font-['Playfair_Display'] text-sm text-[#EAEAEA]">
                          {item.label}
                        </span>
                        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#A6A6A6]">
                          {item.meta}
                        </span>
                      </div>
                      <ArrowRight
                        className={cn(
                          'h-4 w-4 text-[#A6A6A6] transition-transform',
                          'group-hover:translate-x-1',
                          isActive ? 'text-[#D4AF37]' : ''
                        )}
                      />
                    </Link>
                  </Dialog.Close>
                );
              })}
            </nav>
          </div>
          <div className="border-t border-[#2C2C2C] px-5 py-4">
            <Dialog.Close asChild>
              <Link
                to="/contact"
                onClick={handleNavigate}
                className="flex w-full items-center justify-between rounded-[14px] bg-[#D4AF37] px-4 py-3 text-sm font-medium text-black transition-transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/70 focus:ring-offset-2 focus:ring-offset-[#121212]"
              >
                <span className="font-['Playfair_Display']">Discuss a mandate</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Dialog.Close>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.24em] text-[#A6A6A6]">
              Confidential introductions only. No mass processes.
            </p>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default MobileNavDrawer;