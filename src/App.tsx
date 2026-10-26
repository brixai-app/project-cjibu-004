import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'sonner';
import { AnimatePresence, motion } from 'framer-motion';
import AppLayout from '@/components/AppLayout';
import HomePage from '@/pages/Home';
import AboutPage from '@/pages/About';
import ServicesPage from '@/pages/Services';
import CaseStudiesPage from '@/pages/CaseStudies';
import TestimonialsPage from '@/pages/Testimonials';
import ContactPage from '@/pages/Contact';

export function RouteTransitionWrapper({
  children = null,
}: {
  children?: React.ReactNode;
}) {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location?.pathname ?? '/'}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="min-h-screen bg-[#121212] text-[#EAEAEA]"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export function AppShell() {
  return (
    <HashRouter>
      <Toaster
        position="top-right"
        richColors
        toastOptions={{
          style: {
            background: '#1A1A1A',
            color: '#EAEAEA',
            borderRadius: 14,
            border: '1px solid #2C2C2C',
          },
        }}
      />
      <RouteTransitionWrapper>
        <AppLayout>
          <Routes>
            <Route path="/" element={<HomePage className="" />} />
            <Route path="/about" element={<AboutPage className="" />} />
            <Route path="/services" element={<ServicesPage className="" />} />
            <Route
              path="/case-studies"
              element={<CaseStudiesPage className="" />}
            />
            <Route
              path="/testimonials"
              element={<TestimonialsPage className="" />}
            />
            <Route path="/contact" element={<ContactPage className="" />} />
          </Routes>
        </AppLayout>
      </RouteTransitionWrapper>
    </HashRouter>
  );
}

export default AppShell;