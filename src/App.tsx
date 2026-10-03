import React, { useCallback, useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Toaster, toast } from 'sonner';
import LayoutShell from '@/components/LayoutShell';
import HeaderNav from '@/components/HeaderNav';
import ContactDrawer from '@/components/ContactDrawer';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import CaseStudies from '@/pages/CaseStudies';
import Testimonials from '@/pages/Testimonials';
import type { ContactFormState } from '@/types';

export function App() {
  const [contactOpen, setContactOpen] = useState<boolean>(false);

  const handleOpenContact = useCallback(() => {
    setContactOpen(true);
  }, []);

  const handleContactChange = useCallback((open: boolean) => {
    setContactOpen(open ?? false);
  }, []);

  const handleContactSubmitted = useCallback((data: ContactFormState) => {
    const name = data?.name ?? '';
    toast.success(name ? `Mandate received, ${name}.` : 'Mandate received.', {
      description: 'Expect a response from Returnz within one business day.',
      position: 'bottom-right',
    });
    setContactOpen(false);
  }, []);

  return (
    <>
      <HashRouter>
        <div className="min-h-screen bg-[#121212] text-[#F5F5F5] font-['JetBrains_Mono',monospace]">
          <HeaderNav openContact={handleOpenContact} />
          <LayoutShell className="pt-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/testimonials" element={<Testimonials />} />
            </Routes>
          </LayoutShell>
          <ContactDrawer
            open={contactOpen}
            onOpenChange={handleContactChange}
            onSubmitted={handleContactSubmitted}
          />
        </div>
      </HashRouter>
      <Toaster richColors theme="dark" position="bottom-right" />
    </>
  );
}

export default App;