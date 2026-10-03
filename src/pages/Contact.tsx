import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Copy,
  Check,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { PageContainer } from '../components/layout/PageContainer';
import { Button } from '../components/ui/Button';
import { useSEO } from '../hooks/useSEO';
import {
  contactConfig,
  getEmailHref,
  getPhoneHref,
  getWhatsappHref,
  getMapsHref,
  isConfigured,
} from '../config/contact';
import { SocialLinks } from '../components/ui/SocialLinks';

interface ContactFormInputs {
  fullName: string;
  email: string;
  organization: string;
  projectType: string;
  message: string;
}

const projectTypeOptions = [
  'Website Development',
  'AI Solutions',
  'Business Automation',
  'Custom Software Development',
  'Mobile App Development',
  'UI/UX Design',
  'SEO & Digital Marketing',
  'Cloud & Deployment',
  'IoT & Smart Systems',
  'Research & Product R&D',
  'Partnership Inquiry',
  'Other Inquiry',
];

const getInitialProjectType = (type: string): string => {
  const t = type.toLowerCase();
  if (t.includes('web') || t.includes('starter') || t.includes('business') || t.includes('advanced')) return 'Website Development';
  if (t.includes('ai-iot') || t.includes('iot')) return 'IoT & Smart Systems';
  if (t.includes('ai')) return 'AI Solutions';
  if (t.includes('auto')) return 'Business Automation';
  if (t.includes('soft') || t.includes('build')) return 'Custom Software Development';
  if (t.includes('mobile') || t.includes('app')) return 'Mobile App Development';
  if (t.includes('design') || t.includes('ui')) return 'UI/UX Design';
  if (t.includes('seo') || t.includes('market') || t.includes('retainer') || t.includes('social')) return 'SEO & Digital Marketing';
  if (t.includes('cloud')) return 'Cloud & Deployment';
  if (t.includes('research')) return 'Research & Product R&D';
  if (t.includes('partner')) return 'Partnership Inquiry';
  return 'Website Development';
};

type SubmissionStatus = 'idle' | 'submitting' | 'server_success' | 'client_dispatched' | 'config_notice' | 'error';

export const Contact: React.FC = () => {
  const [searchParams] = useSearchParams();
  const defaultType = searchParams.get('type') || '';
  const [submissionStatus, setSubmissionStatus] = useState<SubmissionStatus>('idle');
  const [statusMessage, setStatusMessage] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const [lastSubmissionData, setLastSubmissionData] = useState<ContactFormInputs | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormInputs>({
    defaultValues: {
      projectType: getInitialProjectType(defaultType),
    },
  });

  useSEO({
    title: "Contact — Let's Build Something Intelligent | NOXVION",
    description:
      "Have an idea, research concept, technical challenge, or collaboration opportunity? Let's start a conversation.",
  });

  const emailHref = getEmailHref('Direct Inquiry via NOXVION Contact Page');
  const phoneHref = getPhoneHref();
  const whatsappHref = getWhatsappHref('Hello NOXVION, I would like to inquire about your engineering solutions.');
  const mapsHref = getMapsHref();

  const onSubmit = async (data: ContactFormInputs) => {
    setLastSubmissionData(data);
    setSubmissionStatus('submitting');

    if (isConfigured(contactConfig.formEndpoint)) {
      try {
        const response = await fetch(contactConfig.formEndpoint!, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          setSubmissionStatus('server_success');
          setStatusMessage('Your inquiry has been successfully transmitted to our engineering team.');
          reset();
          return;
        } else {
          setSubmissionStatus('error');
          setStatusMessage(`Transmission failed with status code ${response.status}.`);
          return;
        }
      } catch {
        setSubmissionStatus('error');
        setStatusMessage('Network connectivity issue. Please try again or use direct email.');
        return;
      }
    }

    if (isConfigured(contactConfig.email)) {
      const subject = `Inquiry: ${data.projectType} — ${data.fullName}`;
      const body = `Name: ${data.fullName}\nEmail: ${data.email}\nOrganization: ${data.organization || 'N/A'}\nProject Type: ${data.projectType}\n\nDetails:\n${data.message}`;
      window.location.href = `mailto:${contactConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      setSubmissionStatus('client_dispatched');
      setStatusMessage(`Email client launched to send your inquiry directly to ${contactConfig.email}.`);
      return;
    }

    setSubmissionStatus('config_notice');
    setStatusMessage('Inquiry captured locally. Communication endpoint is pending backend provisioning.');
  };

  const copyInquiryToClipboard = () => {
    if (!lastSubmissionData) return;
    const text = `Name: ${lastSubmissionData.fullName}\nEmail: ${lastSubmissionData.email}\nOrg: ${lastSubmissionData.organization}\nType: ${lastSubmissionData.projectType}\nDetails: ${lastSubmissionData.message}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <PageContainer className="bg-white">
      {/* ── HERO ── */}
      <section
        className="relative py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-[#F8FAFC] border-b border-slate-200/80 overflow-hidden"
        aria-label="Contact Hero"
      >
        <div className="nox-container relative z-10">
          <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#1E3A8A] mb-4 font-mono flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1E3A8A]" aria-hidden="true" />
            COMMUNICATION INTAKE
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.08] tracking-[-0.03em] text-[#0A2540] mb-5">
            Let's Start a <span className="text-[#1E3A8A]">Conversation.</span>
          </h1>
          <p className="text-[#4A6080] text-base md:text-xl leading-relaxed max-w-2xl">
            Have an idea, research concept, technical challenge, or collaboration opportunity?
            Engage directly with our engineering team.
          </p>
        </div>
      </section>

      {/* ── CONTACT INTERFACE ── */}
      <section className="nox-section bg-[#F8FAFC]" aria-label="Contact Form and Information">
        <div className="nox-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Form Left Panel */}
            <div className="lg:col-span-7 nox-card bg-white border border-slate-200 p-8 md:p-10 shadow-sm">
              <div className="flex justify-between items-center mb-8 border-b border-slate-100 pb-3">
                <span className="text-xs font-bold tracking-wider uppercase text-[#0A2540] font-mono">
                  TRANSMISSION CHANNEL
                </span>
                <span className="text-[10px] font-mono text-slate-400 font-semibold">FORM V2.4</span>
              </div>

              {submissionStatus !== 'idle' && submissionStatus !== 'submitting' ? (
                <motion.div
                  key="contact-status-state"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                  className={`rounded-2xl p-8 text-center my-6 border ${
                    submissionStatus === 'server_success' || submissionStatus === 'client_dispatched'
                      ? 'bg-blue-50 border-blue-200 text-[#1E3A8A]'
                      : submissionStatus === 'config_notice'
                      ? 'bg-amber-50 border-amber-200 text-amber-800'
                      : 'bg-rose-50 border-rose-200 text-rose-800'
                  }`}
                  role="status"
                  aria-live="polite"
                >
                  <div className="inline-block mb-4">
                    {submissionStatus === 'server_success' || submissionStatus === 'client_dispatched' ? (
                      <CheckCircle2 size={36} className="text-[#1E3A8A]" />
                    ) : (
                      <AlertCircle size={36} />
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-[#0A2540] mb-2">
                    {submissionStatus === 'server_success'
                      ? 'Inquiry Transmitted'
                      : submissionStatus === 'client_dispatched'
                      ? 'Email Client Launched'
                      : submissionStatus === 'config_notice'
                      ? 'Transmission Staged'
                      : 'Transmission Error'}
                  </h3>

                  <p className="text-sm mb-6 leading-relaxed max-w-md mx-auto">
                    {statusMessage}
                  </p>

                  <div className="flex flex-wrap items-center justify-center gap-3">
                    {lastSubmissionData && (
                      <button
                        type="button"
                        onClick={copyInquiryToClipboard}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-xs font-mono text-slate-700 transition-colors"
                        aria-label="Copy inquiry text to clipboard"
                      >
                        {copied ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                        <span>{copied ? 'Copied to Clipboard' : 'Copy Inquiry Summary'}</span>
                      </button>
                    )}

                    <Button onClick={() => setSubmissionStatus('idle')} variant="secondary" size="sm">
                      Back to Form
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                  {/* Row 1: Full Name & Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contact-fullName" className="block text-[11px] font-bold tracking-wider uppercase text-[#0A2540] mb-2 font-mono">
                        FULL NAME *
                      </label>
                      <input
                        id="contact-fullName"
                        type="text"
                        {...register('fullName', { required: 'Full name is required' })}
                        aria-required="true"
                        aria-invalid={!!errors.fullName}
                        className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-sm text-[#0A2540] placeholder:text-slate-400 focus:outline-none focus:border-[#1E3A8A] focus:ring-2 focus:ring-blue-100 transition-all font-mono"
                        placeholder="Dr. Jane Doe"
                      />
                      {errors.fullName && (
                        <p className="text-rose-600 text-xs mt-1.5 flex items-center gap-1 font-medium font-mono" role="alert">
                          <AlertCircle size={12} /> {errors.fullName.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-[11px] font-bold tracking-wider uppercase text-[#0A2540] mb-2 font-mono">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        {...register('email', {
                          required: 'Email address is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address',
                          },
                        })}
                        aria-required="true"
                        aria-invalid={!!errors.email}
                        className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-sm text-[#0A2540] placeholder:text-slate-400 focus:outline-none focus:border-[#1E3A8A] focus:ring-2 focus:ring-blue-100 transition-all font-mono"
                        placeholder="jane@organization.com"
                      />
                      {errors.email && (
                        <p className="text-rose-600 text-xs mt-1.5 flex items-center gap-1 font-medium font-mono" role="alert">
                          <AlertCircle size={12} /> {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Organization & Project Type */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contact-organization" className="block text-[11px] font-bold tracking-wider uppercase text-[#0A2540] mb-2 font-mono">
                        ORGANIZATION / COMPANY
                      </label>
                      <input
                        id="contact-organization"
                        type="text"
                        {...register('organization')}
                        className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-sm text-[#0A2540] placeholder:text-slate-400 focus:outline-none focus:border-[#1E3A8A] focus:ring-2 focus:ring-blue-100 transition-all font-mono"
                        placeholder="Enterprise / Lab / University"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-projectType" className="block text-[11px] font-bold tracking-wider uppercase text-[#0A2540] mb-2 font-mono">
                        PROJECT TYPE *
                      </label>
                      <select
                        id="contact-projectType"
                        {...register('projectType', { required: 'Please select a project type' })}
                        aria-required="true"
                        aria-invalid={!!errors.projectType}
                        className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-sm text-[#0A2540] focus:outline-none focus:border-[#1E3A8A] focus:ring-2 focus:ring-blue-100 cursor-pointer transition-all font-mono"
                      >
                        {projectTypeOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-white text-[#0A2540]">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-[11px] font-bold tracking-wider uppercase text-[#0A2540] mb-2 font-mono">
                      MESSAGE / TECHNICAL SPECIFICATION *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      {...register('message', { required: 'Message details are required' })}
                      aria-required="true"
                      aria-invalid={!!errors.message}
                      className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-sm text-[#0A2540] placeholder:text-slate-400 focus:outline-none focus:border-[#1E3A8A] focus:ring-2 focus:ring-blue-100 resize-none transition-all font-mono"
                      placeholder="Detail your engineering challenges, research objectives, or deployment timeline..."
                    />
                    {errors.message && (
                      <p className="text-rose-600 text-xs mt-1.5 flex items-center gap-1 font-medium font-mono" role="alert">
                        <AlertCircle size={12} /> {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Submit CTA */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      loading={isSubmitting}
                      disabled={isSubmitting}
                      className="w-full sm:w-auto"
                      aria-label="Send Inquiry to NOXVION"
                    >
                      Send Inquiry
                      <ArrowRight size={16} aria-hidden="true" />
                    </Button>
                  </div>
                </form>
              )}
            </div>

            {/* Info Right Panel */}
            <div className="lg:col-span-5 space-y-6">
              {/* Coordinates Info */}
              <div className="nox-card bg-white border border-slate-200 p-8 space-y-6 shadow-sm">
                {/* Email Channel */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-blue-50 text-[#1E3A8A] shrink-0">
                    <Mail size={18} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono tracking-wider uppercase text-[#1E3A8A] font-bold mb-1">
                      DIRECT INQUIRY
                    </p>
                    {emailHref ? (
                      <a
                        href={emailHref}
                        aria-label={`Send direct email to ${contactConfig.email}`}
                        className="text-sm font-bold text-[#0A2540] hover:text-[#1E3A8A] font-mono transition-colors block break-all"
                      >
                        {contactConfig.email}
                      </a>
                    ) : (
                      <p className="text-sm font-bold text-slate-500 font-mono">
                        [Email Pending Configuration]
                      </p>
                    )}
                    <p className="text-[11px] text-slate-500 font-mono mt-0.5">Encrypted PGP / Standard SMTP</p>
                  </div>
                </div>

                {/* Phone Channel */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-blue-50 text-[#1E3A8A] shrink-0">
                    <Phone size={18} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono tracking-wider uppercase text-[#1E3A8A] font-bold mb-1">
                      DIRECT PHONE
                    </p>
                    {phoneHref ? (
                      <a
                        href={phoneHref}
                        aria-label={`Call ${contactConfig.phoneDisplay}`}
                        className="text-sm font-bold text-[#0A2540] hover:text-[#1E3A8A] font-mono transition-colors block"
                      >
                        {contactConfig.phoneDisplay}
                      </a>
                    ) : (
                      <p className="text-sm font-bold text-slate-500 font-mono">
                        [Phone Pending Configuration]
                      </p>
                    )}
                    <p className="text-[11px] text-slate-500 font-mono mt-0.5">Mon–Fri // 09:00–18:00 UTC</p>
                  </div>
                </div>

                {/* HQ Location */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-blue-50 text-[#1E3A8A] shrink-0">
                    <MapPin size={18} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono tracking-wider uppercase text-[#1E3A8A] font-bold mb-1">
                      LABORATORY LOCATION
                    </p>
                    {mapsHref ? (
                      <a
                        href={mapsHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open map location for ${contactConfig.address}`}
                        className="text-sm font-bold text-[#0A2540] hover:text-[#1E3A8A] font-mono transition-colors block"
                      >
                        {contactConfig.address}
                      </a>
                    ) : (
                      <p className="text-sm font-bold text-slate-500 font-mono">
                        [Office Location Pending Configuration]
                      </p>
                    )}
                    <p className="text-[11px] text-slate-500 font-mono mt-0.5">Physical Engineering Lab</p>
                  </div>
                </div>

                {/* WhatsApp Channel (if configured) */}
                {whatsappHref && (
                  <div className="flex items-start gap-4 pt-2 border-t border-slate-100">
                    <div className="p-3 rounded-xl bg-emerald-50 text-emerald-600 shrink-0">
                      <MessageCircle size={18} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono tracking-wider uppercase text-emerald-700 font-bold mb-1">
                        WHATSAPP DISPATCH
                      </p>
                      <a
                        href={whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Direct message NOXVION on WhatsApp"
                        className="text-sm font-bold text-[#0A2540] hover:text-emerald-700 font-mono transition-colors block"
                      >
                        Open WhatsApp Channel
                      </a>
                      <p className="text-[11px] text-slate-500 font-mono mt-0.5">Instant Messaging Routing</p>
                    </div>
                  </div>
                )}

                {/* Official Channels */}
                <div className="pt-4 border-t border-slate-100">
                  <p className="text-[10px] font-mono tracking-wider uppercase text-slate-500 mb-3 font-semibold">
                    CONNECT WITH US
                  </p>
                  <SocialLinks iconSize={16} />
                </div>
              </div>

              {/* Security Telemetry Badge */}
              <div className="nox-card bg-white border border-slate-200 p-5 shadow-xs flex items-center justify-between font-mono">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#1E3A8A] flex items-center justify-center text-xs font-bold">
                    ⬡
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#0A2540] block">SECURITY BASELINE</span>
                    <span className="text-[10px] text-slate-500">MUTUAL TLS // ZERO TRUST</span>
                  </div>
                </div>
                <span className="text-[10px] tracking-wider uppercase text-emerald-700 font-semibold bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded">
                  ONLINE
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
};

export default Contact;
