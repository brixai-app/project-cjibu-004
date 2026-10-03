import React, { useCallback, useEffect, useMemo, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { ArrowRight, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';
import type { ContactFormErrors, ContactFormState } from '@/types';

export type ContactDrawerProps = {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  onSubmitted?: (data: ContactFormState) => void;
};

const initialFormState: ContactFormState = {
  name: '',
  email: '',
  company: '',
  role: '',
  mandateSize: '',
  timeline: '',
  message: '',
  consent: false,
};

function validate(values: ContactFormState): ContactFormErrors {
  const errors: ContactFormErrors = {};
  if (!values.name?.trim()) errors.name = 'Name is required.';
  if (!values.email?.trim()) errors.email = 'Email is required.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email ?? '')) {
    errors.email = 'Enter a valid email.';
  }
  if (!values.company?.trim()) errors.company = 'Company is required.';
  if (!values.role?.trim()) errors.role = 'Role is required.';
  if (!values.mandateSize?.trim()) errors.mandateSize = 'Mandate size is required.';
  if (!values.timeline?.trim()) errors.timeline = 'Timeline is required.';
  if (!values.message?.trim() || (values.message?.length ?? 0) < 24) {
    errors.message = 'Share at least a few lines of context.';
  }
  if (!values.consent) errors.consent = 'Consent is required.';
  return errors;
}

export function ContactDrawer({
  open = false,
  onOpenChange = () => {},
  onSubmitted = () => {},
}: ContactDrawerProps) {
  const [internalOpen, setInternalOpen] = useState<boolean>(open ?? false);
  const isControlled = useMemo(() => onOpenChange !== undefined, [onOpenChange]);
  const [values, setValues] = useState<ContactFormState>({ ...initialFormState });
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [touched, setTouched] = useState<Record<keyof ContactFormState, boolean>>(
    {
      name: false,
      email: false,
      company: false,
      role: false,
      mandateSize: false,
      timeline: false,
      message: false,
      consent: false,
    }
  );
  const [submitting, setSubmitting] = useState<boolean>(false);

  useEffect(() => {
    if (isControlled) setInternalOpen(open ?? false);
  }, [open, isControlled]);

  const handleOpenChange = useCallback(
    (next: boolean) => {
      setInternalOpen(next);
      onOpenChange?.(next);
      if (!next) {
        setValues({ ...initialFormState });
        setErrors({});
        setTouched({
          name: false,
          email: false,
          company: false,
          role: false,
          mandateSize: false,
          timeline: false,
          message: false,
          consent: false,
        });
      }
    },
    [onOpenChange]
  );

  const handleBlur = useCallback(
    (field: keyof ContactFormState) => {
      setTouched((prev) => ({ ...prev, [field]: true }));
      const nextErrors = validate(values);
      setErrors(nextErrors);
    },
    [values]
  );

  const handleChange = useCallback(
    (field: keyof ContactFormState, value: string | boolean) => {
      setValues((prev) => ({ ...prev, [field]: value as never }));
      if (touched[field]) {
        const nextErrors = validate({ ...values, [field]: value } as ContactFormState);
        setErrors(nextErrors);
      }
    },
    [touched, values]
  );

  const hasErrors = useMemo(() => {
    const current = validate(values);
    return Object.keys(current).length > 0;
  }, [values]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      const nextErrors = validate(values);
      setErrors(nextErrors);
      setTouched({
        name: true,
        email: true,
        company: true,
        role: true,
        mandateSize: true,
        timeline: true,
        message: true,
        consent: true,
      });
      if (Object.keys(nextErrors).length > 0) {
        toast.error('Please resolve the highlighted fields.', { position: 'bottom-right' });
        return;
      }
      try {
        setSubmitting(true);
        await new Promise((res) => setTimeout(res, 900));
        toast.success('Mandate details received. We will respond within one business day.', {
          position: 'bottom-right',
        });
        onSubmitted?.(values);
        handleOpenChange(false);
      } catch {
        toast.error('Unable to submit right now. Please retry.', { position: 'bottom-right' });
      } finally {
        setSubmitting(false);
      }
    },
    [values, onSubmitted, handleOpenChange]
  );

  const fieldClass =
    'w-full rounded-[14px] border border-[#2E2E2E] bg-[#121212] px-3.5 py-2.5 text-sm text-[#F5F5F5] outline-none placeholder:text-[#555] focus:border-[#0077FF] focus:ring-1 focus:ring-[#0077FF]';

  return (
    <Dialog.Root open={internalOpen} onOpenChange={handleOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0" />
        <Dialog.Content className="fixed inset-y-0 right-0 z-50 w-full max-w-md border-l border-[#2E2E2E] bg-[#1E1E1E] shadow-xl focus:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:slide-in-from-right data-[state=closed]:slide-out-to-right">
          <div className="flex h-full flex-col">
            <header className="flex items-start justify-between border-b border-[#2E2E2E] px-6 py-5">
              <div>
                <Dialog.Title className="font-['Lora'] text-lg font-semibold text-[#F5F5F5]">
                  Open a mandate with Returnz
                </Dialog.Title>
                <Dialog.Description className="mt-1 text-xs text-[#B7B7B7]">
                  Share your transaction brief for a tailored response from our senior team.
                </Dialog.Description>
              </div>
              <Dialog.Close asChild>
                <button
                  type="button"
                  className="ml-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#2E2E2E] text-[#B7B7B7] transition-colors hover:border-[#0077FF] hover:text-[#F5F5F5]"
                  aria-label="Close"
                  onClick={() => handleOpenChange(false)}
                >
                  <X className="h-4 w-4" />
                </button>
              </Dialog.Close>
            </header>
            <form
              onSubmit={handleSubmit}
              className="flex-1 overflow-y-auto px-6 pb-6 pt-4 space-y-4 text-xs text-[#F5F5F5]"
            >
              <div className="grid grid-cols-1 gap-3">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="mb-1 block text-[11px] text-[#B7B7B7]">Name</label>
                    <input
                      className={fieldClass}
                      value={values.name ?? ''}
                      onChange={(e) => handleChange('name', e.target.value)}
                      onBlur={() => handleBlur('name')}
                      placeholder="Full name"
                    />
                    {touched.name && errors.name && (
                      <p className="mt-1 text-[10px] text-[#FF6B6B]">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label className="mb-1 block text-[11px] text-[#B7B7B7]">Email</label>
                    <input
                      className={fieldClass}
                      value={values.email ?? ''}
                      onChange={(e) => handleChange('email', e.target.value)}
                      onBlur={() => handleBlur('email')}
                      placeholder="you@firm.com"
                    />
                    {touched.email && errors.email && (
                      <p className="mt-1 text-[10px] text-[#FF6B6B]">{errors.email}</p>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="mb-1 block text-[11px] text-[#B7B7B7]">Company</label>
                    <input
                      className={fieldClass}
                      value={values.company ?? ''}
                      onChange={(e) => handleChange('company', e.target.value)}
                      onBlur={() => handleBlur('company')}
                      placeholder="Entity name"
                    />
                    {touched.company && errors.company && (
                      <p className="mt-1 text-[10px] text-[#FF6B6B]">{errors.company}</p>
                    )}
                  </div>
                  <div>
                    <label className="mb-1 block text-[11px] text-[#B7B7B7]">Role</label>
                    <input
                      className={fieldClass}
                      value={values.role ?? ''}
                      onChange={(e) => handleChange('role', e.target.value)}
                      onBlur={() => handleBlur('role')}
                      placeholder="CFO, Founder, etc."
                    />
                    {touched.role && errors.role && (
                      <p className="mt-1 text-[10px] text-[#FF6B6B]">{errors.role}</p>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="mb-1 block text-[11px] text-[#B7B7B7]">
                      Mandate size (USD)
                    </label>
                    <input
                      className={fieldClass}
                      value={values.mandateSize ?? ''}
                      onChange={(e) => handleChange('mandateSize', e.target.value)}
                      onBlur={() => handleBlur('mandateSize')}
                      placeholder="e.g. 50–200m"
                    />
                    {touched.mandateSize && errors.mandateSize && (
                      <p className="mt-1 text-[10px] text-[#FF6B6B]">{errors.mandateSize}</p>
                    )}
                  </div>
                  <div>
                    <label className="mb-1 block text-[11px] text-[#B7B7B7]">
                      Target timeline
                    </label>
                    <input
                      className={fieldClass}
                      value={values.timeline ?? ''}
                      onChange={(e) => handleChange('timeline', e.target.value)}
                      onBlur={() => handleBlur('timeline')}
                      placeholder="e.g. Q1 2025"
                    />
                    {touched.timeline && errors.timeline && (
                      <p className="mt-1 text-[10px] text-[#FF6B6B]">{errors.timeline}</p>
                    )}
                  </div>
                </div>
                <div>
                  <label className="mb-1 block text-[11px] text-[#B7B7B7]">
                    Brief transaction outline
                  </label>
                  <textarea
                    className={cn(fieldClass, 'min-h-[96px] resize-none')}
                    value={values.message ?? ''}
                    onChange={(e) => handleChange('message', e.target.value)}
                    onBlur={() => handleBlur('message')}
                    placeholder="Structure, sector, geography, counterparty profile, and any timing sensitivities."
                  />
                  {touched.message && errors.message && (
                    <p className="mt-1 text-[10px] text-[#FF6B6B]">{errors.message}</p>
                  )}
                </div>
                <motion.div
                  className={cn(
                    'flex items-start gap-2 rounded-[14px] border px-3 py-2.5',
                    errors.consent ? 'border-[#FF6B6B]' : 'border-[#2E2E2E]'
                  )}
                  initial={{ borderColor: '#2E2E2E' }}
                  animate={{
                    borderColor: errors.consent ? '#FF6B6B' : '#2E2E2E',
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <button
                    type="button"
                    className={cn(
                      'mt-0.5 h-4 w-4 rounded-[6px] border flex items-center justify-center',
                      values.consent
                        ? 'border-[#0077FF] bg-[#0077FF]'
                        : 'border-[#555] bg-transparent'
                    )}
                    onClick={() => handleChange('consent', !values.consent)}
                    onBlur={() => handleBlur('consent')}
                    aria-pressed={values.consent ?? false}
                  >
                    {values.consent && (
                      <span className="h-2 w-2 rounded-[4px] bg-[#000000]" />
                    )}
                  </button>
                  <p className="text-[11px] text-[#B7B7B7]">
                    I consent to Returnz storing my details to assess this mandate and contact me
                    regarding related opportunities.
                  </p>
                </motion.div>
                {touched.consent && errors.consent && (
                  <p className="text-[10px] text-[#FF6B6B]">{errors.consent}</p>
                )}
              </div>
              <div className="mt-2 flex items-center justify-between border-t border-[#2E2E2E] pt-4">
                <p className="text-[11px] text-[#555]">
                  We typically respond within{' '}
                  <span className="text-[#F5F5F5]">1 business day</span>.
                </p>
                <motion.button
                  type="submit"
                  whileHover={{ x: hasErrors || submitting ? 0 : 2 }}
                  whileTap={{ scale: hasErrors || submitting ? 1 : 0.97 }}
                  disabled={hasErrors || submitting}
                  className={cn(
                    'inline-flex items-center gap-2 rounded-[999px] px-4 py-2 text-[11px] font-medium',
                    'bg-[#0077FF] text-[#000000] transition-opacity disabled:cursor-not-allowed',
                    hasErrors || submitting ? 'opacity-50' : 'opacity-100'
                  )}
                >
                  <span>{submitting ? 'Submitting' : 'Share mandate brief'}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </motion.button>
              </div>
            </form>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default ContactDrawer;