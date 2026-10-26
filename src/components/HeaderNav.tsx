import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { serviceCategories } from '@/data/mockData';
import MobileNavDrawer from './MobileNavDrawer';

export type HeaderNavProps = {
  className?: string;
};

export function HeaderNav({ className = '' }: HeaderNavProps) {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleContactClick = () => {
    navigate('/contact');
  };

  const routes = React.useMemo(
    () => [
      { path: '/', label: 'Overview' },
      { path: '/services', label: 'Mandates' },
      { path: '/case-studies', label: 'Case Studies' },
      { path: '/about', label: 'Firm' },
      { path: '/testimonials', label: 'Perspective' },
    ],
    []
  );

  const primaryCategory = serviceCategories?.[0] ?? 'Advisory';

  return (
    <header
      className={cn(
        'sticky top-0 z-40 border-b border-[#2C2C2C]/70 bg-[#121212]/80 backdrop-blur-xl',
        className
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 lg:px-6">
        <button
          type="button"
          onClick={() => navigate('/')}
          className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
        >
          <div className="relative h-9 w-9 rounded-full border border-[#D4AF37]/40 bg-gradient-to-br from-[#1A1A1A] to-[#2C2C2C]">
            <div className="absolute inset-[3px] rounded-full border border-[#D4AF37]/60" />
            <div className="absolute inset-0 flex items-center justify-center text-[11px] font-semibold tracking-[0.22em] text-[#D4AF37]">
              RZ
            </div>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-['Playfair_Display'] text-sm uppercase tracking-[0.28em] text-[#EAEAEA]">
              Returnz
            </span>
            <span className="font-['Lora'] text-[11px] uppercase tracking-[0.26em] text-[#A6A6A6]">
              {primaryCategory ?? 'Advisory'} & Capital
            </span>
          </div>
        </button>

        <nav className="hidden items-center gap-8 lg:flex">
          {routes?.map?.((route) => (
            <NavLink
              key={route?.path ?? ''}
              to={route?.path ?? '/'}
              className={({ isActive }) =>
                cn(
                  'group relative pb-1 text-xs font-medium uppercase tracking-[0.24em] transition-colors',
                  isActive ? 'text-[#D4AF37]' : 'text-[#A6A6A6] hover:text-[#EAEAEA]'
                )
              }
            >
              {({ isActive }) => (
                <>
                  <span>{route?.label ?? ''}</span>
                  <span
                    className={cn(
                      'absolute -bottom-0.5 left-0 h-[1.5px] w-0 bg-[#D4AF37] transition-all duration-300',
                      isActive ? 'w-full' : 'group-hover:w-2/3'
                    )}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleContactClick}
            className="hidden items-center justify-center rounded-[14px] border border-[#D4AF37]/40 bg-[#D4AF37] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-black transition-colors hover:bg-[#B8921F] lg:inline-flex"
          >
            Contact
          </button>
          <MobileNavDrawer open={open ?? false} onOpenChange={(val = false) => setOpen(val)} />
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#2C2C2C] bg-[#1A1A1A] text-[#EAEAEA] lg:hidden"
          >
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default HeaderNav;