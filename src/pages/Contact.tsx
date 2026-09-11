import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';
import { ArrowRight, CheckCircle2, AlertCircle, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { PageContainer } from '../components/layout/PageContainer';
import { Button } from '../components/ui/Button';
import { FoldText } from '../components/effects/FoldText';
import { AmbientScene } from '../components/effects/AmbientOrb';
import { useSEO } from '../hooks/useSEO';

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

export const Contact: React.FC = () => {
  const [searchParams] = useSearchParams();
  const defaultType = searchParams.get('type') || '';
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormInputs>({
    defaultValues: {
      projectType: defaultType === 'research' ? 'Research & Product R&D' : defaultType === 'partner' ? 'Partnership' : 'AI & Machine Learning',
    },
  });

  useSEO({
    title: "Contact — Let's Build Something Intelligent",
    description:
      "Have an idea, research concept, technical challenge, or collaboration opportunity? Let's start a conversation.",
  });

  const onSubmit = async (_data: ContactFormInputs) => {
    // Simulate inquiry transmission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSuccess(true);
    reset();
  };

  return (
    <PageContainer>
      {/* ── HERO ── */}
      <section className="py-20 md:py-28 border-b border-nox-border grid-bg relative overflow-hidden" aria-label="Contact Hero">
        <AmbientScene variant="subtle" />
        <div className="nox-container relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[11px] font-semibold tracking-[0.2em] uppercase text-nox-cyan mb-4"
          >
            NOXVION / CONTACT
          </motion.p>
          <FoldText
            as="h1"
            splitBy="word"
            hinge="top"
            trigger="scroll"
            className="text-4xl md:text-5xl lg:text-[60px] font-semibold leading-[1.05] tracking-[-0.03em] text-nox-text mb-6"
          >
            Let's Build Something<br />
            <span className="text-nox-cyan">Intelligent.</span>
          </FoldText>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-nox-text-muted text-base md:text-xl leading-relaxed max-w-2xl"
          >
            Have an idea, research concept, technical challenge, or collaboration opportunity? Let's start a conversation.
          </motion.p>
        </div>
      </section>

      {/* ── CONTACT INTERFACE ── */}
      <section className="nox-section" aria-label="Contact Form and Information">
        <div className="nox-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Form Left Panel */}
            <div className="lg:col-span-7 bg-nox-layer border border-nox-border p-8 md:p-10">
              <div className="flex justify-between items-center mb-8 border-b border-nox-border/60 pb-3">
                <span className="text-xs font-semibold tracking-widest uppercase text-nox-text">
                  TRANSMISSION CHANNEL
                </span>
                <span className="text-[10px] font-mono text-nox-text-dim">SYS-REQ-09</span>
              </div>

              {isSuccess ? (
                <div className="bg-nox-cyan/10 border border-nox-cyan/40 p-8 text-center my-8">
                  <CheckCircle2 size={32} className="text-nox-cyan mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-nox-text mb-2">Inquiry Transmitted</h3>
                  <p className="text-sm text-nox-text-muted mb-6 leading-relaxed">
                    Your request has been registered in the Noxvion intake pipeline. Our engineering syndicate will review and respond.
                  </p>
                  <Button onClick={() => setIsSuccess(false)} variant="secondary" size="sm">
                    Send Another Inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Row 1: Full Name & Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[11px] font-semibold tracking-widest uppercase text-nox-text-dim mb-2">
                        FULL NAME *
                      </label>
                      <input
                        type="text"
                        {...register('fullName', { required: 'Full name is required' })}
                         className="w-full bg-nox-base border border-nox-border px-4 py-3 text-sm text-nox-text input-focus-glow"
                        placeholder="Dr. Jane Doe"
                      />
                      {errors.fullName && (
                        <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.fullName.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold tracking-widest uppercase text-nox-text-dim mb-2">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        {...register('email', {
                          required: 'Email address is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address',
                          },
                        })}
                         className="w-full bg-nox-base border border-nox-border px-4 py-3 text-sm text-nox-text input-focus-glow"
                        placeholder="jane@organization.com"
                      />
                      {errors.email && (
                        <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Organization & Project Type */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[11px] font-semibold tracking-widest uppercase text-nox-text-dim mb-2">
                        ORGANIZATION / COMPANY
                      </label>
                      <input
                        type="text"
                        {...register('organization')}
                         className="w-full bg-nox-base border border-nox-border px-4 py-3 text-sm text-nox-text input-focus-glow"
                        placeholder="Enterprise / Lab / University"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold tracking-widest uppercase text-nox-text-dim mb-2">
                        PROJECT TYPE *
                      </label>
                      <select
                        {...register('projectType', { required: 'Please select a project type' })}
                        className="w-full bg-nox-base border border-nox-border px-4 py-3 text-sm text-nox-text input-focus-glow cursor-pointer"
                      >
                        {projectTypeOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-nox-base text-nox-text">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[11px] font-semibold tracking-widest uppercase text-nox-text-dim mb-2">
                      MESSAGE / TECHNICAL SPECIFICATION *
                    </label>
                    <textarea
                      rows={5}
                      {...register('message', { required: 'Message details are required' })}
                      className="w-full bg-nox-base border border-nox-border px-4 py-3 text-sm text-nox-text input-focus-glow resize-none"
                      placeholder="Detail your engineering challenges, research objectives, or deployment timeline..."
                    />
                    {errors.message && (
                      <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
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
                      className="w-full sm:w-auto"
                    >
                      Send Inquiry
                      <ArrowRight size={16} />
                    </Button>
                  </div>
                </form>
              )}
            </div>

            {/* Info Right Panel */}
            <div className="lg:col-span-5 space-y-6">
              {/* Coordinates Info */}
              <div className="bg-nox-layer border border-nox-border p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 border border-nox-border bg-nox-base text-nox-cyan shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono tracking-widest uppercase text-nox-text-dim mb-1">
                      DIRECT COMM
                    </p>
                    <p className="text-sm font-semibold text-nox-text">[Official Contact Email — To Be Supplied]</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 border border-nox-border bg-nox-base text-nox-cyan shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono tracking-widest uppercase text-nox-text-dim mb-1">
                      VOICE PROTOCOL
                    </p>
                    <p className="text-sm font-semibold text-nox-text">[Phone Number — To Be Supplied]</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 border border-nox-border bg-nox-base text-nox-cyan shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono tracking-widest uppercase text-nox-text-dim mb-1">
                      HQ COORDINATES
                    </p>
                    <p className="text-sm font-semibold text-nox-text">[Office Location — To Be Supplied]</p>
                  </div>
                </div>
              </div>

              {/* Technical diagram placeholder matching Stitch */}
              <div className="border border-dashed border-nox-border bg-nox-base p-8 text-center flex flex-col items-center justify-center min-h-[160px]">
                <div className="w-6 h-6 border border-nox-cyan text-nox-cyan flex items-center justify-center text-[10px] font-mono mb-3">
                  ⬡
                </div>
                <p className="text-[11px] font-mono tracking-widest uppercase text-nox-text-dim">
                  DIAGRAM_RENDER_PENDING
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
};
