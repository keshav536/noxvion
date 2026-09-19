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
import { FoldText } from '../components/effects/FoldText';
import { AmbientScene } from '../components/effects/AmbientOrb';
import { MagneticButton } from '../components/effects/MagneticButton';
import { AccentHalo } from '../components/effects/AccentHalo';
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
  'AI & Machine Learning',
  'Web & Software',
  'IoT',
  'Automation',
  'Research & Product R&D',
  'Partnership',
  'Other',
];

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
      projectType:
        defaultType === 'research'
          ? 'Research & Product R&D'
          : defaultType === 'partner'
          ? 'Partnership'
          : defaultType === 'build'
          ? 'Web & Software'
          : 'AI & Machine Learning',
    },
  });

  useSEO({
    title: "Contact — Let's Build Something Intelligent",
    description:
      "Have an idea, research concept, technical challenge, or collaboration opportunity? Let's start a conversation.",
  });

  const emailHref = getEmailHref('Direct Inquiry via NOXVION Contact Page');
  const phoneHref = getPhoneHref();
  const whatsappHref = getWhatsappHref('Hello NOXVION, I would like to inquire about your engineering solutions.');
  const mapsHref = getMapsHref();

  const onSubmit = async (data: ContactFormInputs) => {
    setLastSubmissionData(data);

    // 1. If real backend endpoint is configured, submit via API
    if (isConfigured(contactConfig.formEndpoint)) {
      try {
        const response = await fetch(contactConfig.formEndpoint!, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          setSubmissionStatus('server_success');
          setStatusMessage('Your inquiry has been successfully delivered to our engineering syndicate.');
          reset();
          return;
        } else {
          setSubmissionStatus('error');
          setStatusMessage(`Server transmission error (Status ${response.status}). Please try sending via direct email.`);
          return;
        }
      } catch (err) {
        setSubmissionStatus('error');
        setStatusMessage('Network connectivity error. Please use direct email or voice protocols below.');
        return;
      }
    }

    // 2. If no backend endpoint exists, check if client email is configured
    if (isConfigured(contactConfig.email)) {
      const subject = `[NOXVION Inquiry — ${data.projectType}] ${data.fullName}`;
      const body = [
        `Sender: ${data.fullName}`,
        `Email: ${data.email}`,
        `Organization: ${data.organization || 'Not specified'}`,
        `Project Type: ${data.projectType}`,
        `\nMessage:\n${data.message}`,
      ].join('\n');

      const mailtoUrl = `mailto:${contactConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoUrl;

      setSubmissionStatus('client_dispatched');
      setStatusMessage(`Default email application launched to transmit your message directly to ${contactConfig.email}.`);
      return;
    }

    // 3. If neither backend endpoint nor real email is configured (both placeholders)
    setSubmissionStatus('config_notice');
    setStatusMessage(
      'Inquiry verified and compiled. Production server endpoint (VITE_FORM_ENDPOINT) or approved email address (VITE_CONTACT_EMAIL) is pending configuration.'
    );
  };

  const copyInquiryToClipboard = () => {
    if (!lastSubmissionData) return;
    const summary = [
      `Sender: ${lastSubmissionData.fullName}`,
      `Email: ${lastSubmissionData.email}`,
      `Organization: ${lastSubmissionData.organization || 'N/A'}`,
      `Domain: ${lastSubmissionData.projectType}`,
      `Message: ${lastSubmissionData.message}`,
    ].join('\n');

    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <PageContainer>
      {/* ── HERO ── */}
      <section className="py-20 md:py-28 bg-black text-white border-b border-white/10 relative overflow-hidden" aria-label="Contact Hero">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] pointer-events-none -z-0"
          style={{
            background: 'radial-gradient(ellipse 60% 60% at 50% 0%, rgba(59,130,246,0.18) 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />

        <AmbientScene variant="subtle" />
        <div className="nox-container relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[11px] font-semibold tracking-[0.2em] uppercase text-blue-400 mb-4 font-mono flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" aria-hidden="true" />
            NOXVION / CONTACT
          </motion.p>
          <FoldText
            as="h1"
            splitBy="word"
            hinge="top"
            trigger="scroll"
            className="text-4xl md:text-5xl lg:text-[60px] font-semibold leading-[1.05] tracking-[-0.03em] text-white mb-6"
          >
            Let's Build Something<br />
            <span className="text-blue-400">Intelligent.</span>
          </FoldText>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-zinc-400 text-base md:text-xl leading-relaxed max-w-2xl"
          >
            Have an idea, research concept, technical challenge, or collaboration opportunity? Let's start a conversation.
          </motion.p>
        </div>
      </section>

      {/* ── CONTACT INTERFACE ── */}
      <section className="nox-section bg-[#070709]" aria-label="Contact Form and Information">
        <div className="nox-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Form Left Panel */}
            <div className="lg:col-span-7 bg-[#0e0e12] border border-white/10 rounded-2xl p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-3">
                <span className="text-xs font-bold tracking-widest uppercase text-white font-mono">
                  TRANSMISSION CHANNEL
                </span>
                <span className="text-[10px] font-mono text-zinc-500 font-semibold">SYS-REQ-09</span>
              </div>

              {submissionStatus !== 'idle' && submissionStatus !== 'submitting' ? (
                <motion.div
                  key="contact-status-state"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 22, mass: 0.8 }}
                  className={`rounded-2xl p-8 text-center my-6 border ${
                    submissionStatus === 'server_success' || submissionStatus === 'client_dispatched'
                      ? 'bg-blue-500/10 border-blue-500/30'
                      : submissionStatus === 'config_notice'
                      ? 'bg-amber-500/10 border-amber-500/30'
                      : 'bg-rose-500/10 border-rose-500/30'
                  }`}
                  role="status"
                  aria-live="polite"
                >
                  {/* NEW-03 — Success state spring entrance */}
                  <motion.div
                    initial={{ scale: 0.6, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 18, delay: 0.08 }}
                    className="inline-block mb-4"
                  >
                    {submissionStatus === 'server_success' || submissionStatus === 'client_dispatched' ? (
                      <CheckCircle2 size={36} className="text-blue-400 shadow-[0_0_16px_rgba(59,130,246,0.6)]" />
                    ) : submissionStatus === 'config_notice' ? (
                      <AlertCircle size={36} className="text-amber-400 shadow-[0_0_16px_rgba(245,158,11,0.6)]" />
                    ) : (
                      <AlertCircle size={36} className="text-rose-400 shadow-[0_0_16px_rgba(244,63,94,0.6)]" />
                    )}
                  </motion.div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {submissionStatus === 'server_success'
                      ? 'Inquiry Transmitted'
                      : submissionStatus === 'client_dispatched'
                      ? 'Email Client Launched'
                      : submissionStatus === 'config_notice'
                      ? 'Transmission Staged'
                      : 'Transmission Error'}
                  </h3>

                  <p className="text-sm text-zinc-300 mb-6 leading-relaxed max-w-md mx-auto font-mono">
                    {statusMessage}
                  </p>

                  <div className="flex flex-wrap items-center justify-center gap-3">
                    {lastSubmissionData && (
                      <button
                        type="button"
                        onClick={copyInquiryToClipboard}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-white/20 bg-white/[0.05] hover:bg-white/[0.1] text-xs font-mono text-white transition-colors"
                        aria-label="Copy inquiry text to clipboard"
                      >
                        {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
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
                      <label htmlFor="contact-fullName" className="block text-[11px] font-bold tracking-widest uppercase text-zinc-400 mb-2 font-mono">
                        FULL NAME *
                      </label>
                      <input
                        id="contact-fullName"
                        type="text"
                        {...register('fullName', { required: 'Full name is required' })}
                        aria-required="true"
                        aria-invalid={!!errors.fullName}
                        className="w-full bg-black/60 border border-white/15 rounded-lg px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 input-focus-glow transition-all font-mono"
                        placeholder="Dr. Jane Doe"
                      />
                      {/* NEW-02 — Error micro-shake entrance */}
                      {errors.fullName && (
                        <motion.p
                          key="err-fullName"
                          initial={{ opacity: 0, x: 0 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.35 }}
                          className="text-rose-400 text-xs mt-1 flex items-center gap-1 font-medium new-error-shake font-mono"
                          style={{ animation: 'newErrorShake 0.35s ease-out forwards' }}
                          role="alert"
                          aria-live="polite"
                        >
                          <AlertCircle size={12} aria-hidden="true" /> {errors.fullName.message}
                        </motion.p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-[11px] font-bold tracking-widest uppercase text-zinc-400 mb-2 font-mono">
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
                        className="w-full bg-black/60 border border-white/15 rounded-lg px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 input-focus-glow transition-all font-mono"
                        placeholder="jane@organization.com"
                      />
                      {/* NEW-02 — Error micro-shake entrance */}
                      {errors.email && (
                        <motion.p
                          key="err-email"
                          initial={{ opacity: 0, x: 0 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.35 }}
                          className="text-rose-400 text-xs mt-1 flex items-center gap-1 font-medium font-mono"
                          style={{ animation: 'newErrorShake 0.35s ease-out forwards' }}
                          role="alert"
                          aria-live="polite"
                        >
                          <AlertCircle size={12} aria-hidden="true" /> {errors.email.message}
                        </motion.p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Organization & Project Type */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contact-organization" className="block text-[11px] font-bold tracking-widest uppercase text-zinc-400 mb-2 font-mono">
                        ORGANIZATION / COMPANY
                      </label>
                      <input
                        id="contact-organization"
                        type="text"
                        {...register('organization')}
                        className="w-full bg-black/60 border border-white/15 rounded-lg px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 input-focus-glow transition-all font-mono"
                        placeholder="Enterprise / Lab / University"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-projectType" className="block text-[11px] font-bold tracking-widest uppercase text-zinc-400 mb-2 font-mono">
                        PROJECT TYPE *
                      </label>
                      <select
                        id="contact-projectType"
                        {...register('projectType', { required: 'Please select a project type' })}
                        aria-required="true"
                        aria-invalid={!!errors.projectType}
                        className="w-full bg-black/60 border border-white/15 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 input-focus-glow cursor-pointer transition-all font-mono"
                      >
                        {projectTypeOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-[#141418] text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-[11px] font-bold tracking-widest uppercase text-zinc-400 mb-2 font-mono">
                      MESSAGE / TECHNICAL SPECIFICATION *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      {...register('message', { required: 'Message details are required' })}
                      aria-required="true"
                      aria-invalid={!!errors.message}
                      className="w-full bg-black/60 border border-white/15 rounded-lg px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 input-focus-glow resize-none transition-all font-mono"
                      placeholder="Detail your engineering challenges, research objectives, or deployment timeline..."
                    />
                    {/* NEW-02 — Error micro-shake entrance */}
                    {errors.message && (
                      <motion.p
                        key="err-message"
                        initial={{ opacity: 0, x: 0 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.35 }}
                        className="text-rose-400 text-xs mt-1 flex items-center gap-1 font-medium font-mono"
                        style={{ animation: 'newErrorShake 0.35s ease-out forwards' }}
                        role="alert"
                        aria-live="polite"
                      >
                        <AlertCircle size={12} aria-hidden="true" /> {errors.message.message}
                      </motion.p>
                    )}
                  </div>

                  {/* Submit CTA */}
                  <div className="pt-2">
                    <MagneticButton strength={8}>
                      <AccentHalo intensity="normal">
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
                      </AccentHalo>
                    </MagneticButton>
                  </div>
                </form>
              )}
            </div>

            {/* Info Right Panel */}
            <div className="lg:col-span-5 space-y-6">
              {/* Coordinates Info */}
              <div className="bg-[#0e0e12] border border-white/10 rounded-2xl p-8 space-y-6 shadow-[0_16px_40px_rgba(0,0,0,0.8)]">
                {/* Email Channel */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl border border-white/10 bg-white/[0.04] text-blue-400 shrink-0">
                    <Mail size={18} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono tracking-widest uppercase text-blue-400 font-bold mb-1">
                      DIRECT COMM
                    </p>
                    {emailHref ? (
                      <a
                        href={emailHref}
                        aria-label={`Send direct email to ${contactConfig.email}`}
                        className="text-sm font-bold text-white hover:text-blue-400 font-mono transition-colors focus-visible:outline-none focus-visible:underline block break-all"
                      >
                        {contactConfig.email}
                      </a>
                    ) : (
                      <p className="text-sm font-bold text-zinc-400 font-mono" title="Email address pending client configuration">
                        [Email Pending Configuration]
                      </p>
                    )}
                    <p className="text-[11px] text-zinc-500 font-mono mt-0.5">Encrypted PGP / Standard SMTP</p>
                  </div>
                </div>

                {/* Phone Channel */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl border border-white/10 bg-white/[0.04] text-blue-400 shrink-0">
                    <Phone size={18} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono tracking-widest uppercase text-blue-400 font-bold mb-1">
                      VOICE PROTOCOL
                    </p>
                    {phoneHref ? (
                      <a
                        href={phoneHref}
                        aria-label={`Call ${contactConfig.phoneDisplay}`}
                        className="text-sm font-bold text-white hover:text-blue-400 font-mono transition-colors focus-visible:outline-none focus-visible:underline block"
                      >
                        {contactConfig.phoneDisplay}
                      </a>
                    ) : (
                      <p className="text-sm font-bold text-zinc-400 font-mono" title="Telephone number pending client configuration">
                        [Phone Pending Configuration]
                      </p>
                    )}
                    <p className="text-[11px] text-zinc-500 font-mono mt-0.5">Mon–Fri // 09:00–18:00 UTC</p>
                  </div>
                </div>

                {/* HQ Location / Map Channel */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl border border-white/10 bg-white/[0.04] text-blue-400 shrink-0">
                    <MapPin size={18} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono tracking-widest uppercase text-blue-400 font-bold mb-1">
                      HQ COORDINATES
                    </p>
                    {mapsHref ? (
                      <a
                        href={mapsHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open map location for ${contactConfig.address}`}
                        className="text-sm font-bold text-white hover:text-blue-400 font-mono transition-colors focus-visible:outline-none focus-visible:underline block"
                      >
                        {contactConfig.address}
                      </a>
                    ) : (
                      <p className="text-sm font-bold text-zinc-400 font-mono" title="HQ address pending client configuration">
                        [Office Location Pending Configuration]
                      </p>
                    )}
                    <p className="text-[11px] text-zinc-500 font-mono mt-0.5">Physical Engineering Lab</p>
                  </div>
                </div>

                {/* WhatsApp Channel (if configured) */}
                {whatsappHref && (
                  <div className="flex items-start gap-4 pt-2 border-t border-white/10">
                    <div className="p-3 rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 shrink-0">
                      <MessageCircle size={18} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono tracking-widest uppercase text-emerald-400 font-bold mb-1">
                        WHATSAPP CHAT
                      </p>
                      <a
                        href={whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Direct message NOXVION on WhatsApp"
                        className="text-sm font-bold text-white hover:text-emerald-400 font-mono transition-colors focus-visible:outline-none focus-visible:underline block"
                      >
                        Open WhatsApp Channel
                      </a>
                      <p className="text-[11px] text-zinc-500 font-mono mt-0.5">Instant Messaging Routing</p>
                    </div>
                  </div>
                )}

                {/* Official Channels */}
                <div className="pt-4 border-t border-white/10">
                  <p className="text-[10px] font-mono tracking-widest uppercase text-zinc-500 mb-3 font-semibold">
                    OFFICIAL SYNDICATE CHANNELS
                  </p>
                  <SocialLinks iconSize={16} />
                </div>
              </div>

              {/* Technical Telemetry Badge */}
              <div className="border border-white/10 bg-[#0e0e12] rounded-2xl p-6 shadow-sm flex items-center justify-between font-mono">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg border border-blue-500/30 bg-blue-500/10 text-blue-400 flex items-center justify-center text-xs font-bold shadow-[0_0_12px_rgba(59,130,246,0.2)]">
                    ⬡
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">DISPATCH PROTOCOL</span>
                    <span className="text-[10px] text-zinc-500">MUTUAL TLS // ENCRYPTED</span>
                  </div>
                </div>
                <span className="text-[10px] tracking-widest uppercase text-emerald-400 font-semibold bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded">
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
