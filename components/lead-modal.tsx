"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles, X } from "lucide-react";
import { memo, useCallback, useEffect, useRef, useState, type FormEvent } from "react";
import { siteConfig } from "@/lib/site-content";

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface AssessmentRequest {
  serviceType: string;
  solutionDescription: string;
  name: string;
  email: string;
  company: string;
  submittedAt: string;
}

const SERVICE_OPTIONS = [
  { id: "website", label: "Website or Web Application", desc: "A new website, portal, platform, or customer experience" },
  { id: "ai", label: "AI Solution", desc: "An AI assistant, model, knowledge system, or agent" },
  { id: "system", label: "Business System or Dashboard", desc: "A private internal tool, dashboard, or operational system" },
  { id: "automation", label: "Automation or Agent Workflow", desc: "A workflow that connects tools and handles work automatically" },
  { id: "other", label: "Something Else", desc: "A custom IT, infrastructure, security, or software requirement" },
];

type ServiceOptionCardProps = {
  id: string;
  label: string;
  desc: string;
  selected: boolean;
  onSelect: (label: string) => void;
};

const ServiceOptionCard = memo(function ServiceOptionCard({
  id,
  label,
  desc,
  selected,
  onSelect,
}: ServiceOptionCardProps) {
  return (
    <button
      key={id}
      type="button"
      onClick={() => onSelect(label)}
      className={
        "w-full rounded-2xl border p-4 text-left transition-[color,border-color,background-color,box-shadow] duration-150 " +
        (selected
          ? "border-gold bg-gold/15 text-cream shadow-sm"
          : "border-gold/20 bg-[#2D0812]/50 text-muted hover:border-gold/40 hover:text-cream")
      }
    >
      <div className="font-display text-sm font-bold text-cream">{label}</div>
      <div className="mt-0.5 text-xs text-muted">{desc}</div>
    </button>
  );
});

type SolutionBriefStepProps = {
  initialValue: string;
  onBack: () => void;
  onNext: (value: string) => void;
};

const SolutionBriefStep = memo(function SolutionBriefStep({
  initialValue,
  onBack,
  onNext,
}: SolutionBriefStepProps) {
  const [text, setText] = useState(initialValue);

  const handleNext = () => {
    const value = text.trim();
    if (value) onNext(value);
  };

  return (
    <div className="space-y-3">
      <p className="font-mono text-xs font-semibold uppercase tracking-wider text-muted mb-2">
        2. Describe the solution you need
      </p>
      <p className="text-sm leading-relaxed text-muted">
        Explain what you want to create, who it is for, and what it should do.
      </p>
      <textarea
        required
        autoFocus
        value={text}
        onChange={(event) => setText(event.target.value)}
        maxLength={5000}
        placeholder="Describe the solution that you need..."
        rows={7}
        className="w-full resize-y rounded-2xl border border-gold/25 bg-[#140207] px-4 py-3 text-sm leading-relaxed text-cream placeholder-muted/50 outline-none transition-colors focus:border-gold"
      />
      <p className="font-mono text-[0.62rem] leading-relaxed text-muted">
        Hint: include important features, integrations, users, or constraints.
      </p>
      <div className="mt-8 flex items-center justify-between border-t border-gold/15 pt-5">
        <button
          type="button"
          onClick={onBack}
          className="focus-ring flex items-center gap-1.5 font-mono text-xs font-bold uppercase text-muted hover:text-cream"
        >
          <ArrowLeft size={13} />
          Back
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="focus-ring flex items-center gap-2 rounded-full bg-gradient-to-r from-gold via-champagne to-gold px-6 py-3 text-xs font-bold uppercase tracking-wider text-ink shadow-[0_0_20px_rgba(212,175,55,0.35)] hover:brightness-110"
        >
          <span>Next</span>
          <ArrowRight size={13} />
        </button>
      </div>
    </div>
  );
});

export function LeadModal({ isOpen, onClose }: LeadModalProps) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [serviceType, setServiceType] = useState(SERVICE_OPTIONS[0].label);
  const [solutionDescription, setSolutionDescription] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");

  const modalRef = useRef<HTMLDivElement>(null);

  const handleServiceSelect = useCallback((label: string) => {
    setServiceType(label);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, onClose]);

  const handleNext = (e: FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      if (!email || !name) return;

      const request: AssessmentRequest = {
        serviceType,
        solutionDescription: solutionDescription.trim(),
        name: name.trim(),
        email: email.trim(),
        company: company.trim(),
        submittedAt: new Date().toISOString(),
      };

      // Keep the event available for a future server-side mail integration.
      window.dispatchEvent(new CustomEvent<AssessmentRequest>("vortex:assessment-request", { detail: request }));

      const subject = `VORTEX System Assessment — ${serviceType}`;
      const body = [
        "VORTEX System Assessment Request",
        "",
        `Name: ${request.name}`,
        `Work email: ${request.email}`,
        `Company: ${request.company || "Not provided"}`,
        `Requested service: ${request.serviceType}`,
        "",
        "Solution brief:",
        request.solutionDescription,
        "",
        `Submitted from ${window.location.origin}`,
      ].join("\\n");

      setSubmitted(true);
      window.location.href = `${siteConfig.contactHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleReset = () => {
    setSubmitted(false);
    setStep(1);
    setServiceType(SERVICE_OPTIONS[0].label);
    setSolutionDescription("");
    setName("");
    setEmail("");
    setCompany("");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#080609]/85 backdrop-blur-xl"
          />

          {/* Modal Card */}
          <motion.div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-heading"
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-gold/30 bg-[#1F050C] p-7 sm:p-10 shadow-[0_25px_70px_rgba(15,2,6,0.9)] my-auto"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              data-cursor="interactive"
              aria-label="Close modal"
              className="focus-ring absolute right-5 top-5 grid h-8 w-8 place-items-center rounded-full border border-gold/25 bg-[#2D0812] text-champagne hover:border-gold hover:text-cream"
            >
              <X size={15} />
            </button>

            {submitted ? (
              <div className="py-6 text-center">
                <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-full border border-gold/60 bg-gold/20 text-gold shadow-[0_0_25px_rgba(212,175,55,0.4)]">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="display text-2xl font-bold text-cream sm:text-3xl">
                  Assessment Brief Prepared
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Thank you, <strong className="text-cream">{name}</strong>. Your <strong className="text-champagne">{serviceType.toLowerCase()}</strong> brief for <strong className="text-champagne">{company || "your organisation"}</strong> is ready in this browser.
                </p>
                <div className="mt-5 rounded-2xl border border-gold/20 bg-[#2D0812]/70 p-4 text-xs font-mono text-champagne">
                  <strong>Next step:</strong> Your email app should open with this request addressed to <strong className="text-cream">{siteConfig.contactEmail}</strong>. Press Send to complete delivery. We will reply to <strong className="text-cream">{email}</strong>.
                </div>
                <div className="mt-8">
                  <button
                    type="button"
                    onClick={handleReset}
                    data-cursor="interactive"
                    className="focus-ring rounded-full bg-gradient-to-r from-gold to-champagne px-7 py-3 text-xs font-bold uppercase tracking-wider text-ink shadow-[0_0_20px_rgba(212,175,55,0.35)] hover:brightness-110"
                  >
                    Return to VORTEX
                  </button>
                </div>
              </div>
            ) : (
              <div>
                {/* Header & Step Indicator */}
                <div className="mb-6 flex items-center justify-between border-b border-gold/15 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="relative h-8 w-8 overflow-hidden rounded-full border border-gold/50 bg-[#2D0812] p-0.5">
                      <Image
                        src="/logo-emblem.webp"
                        alt="VORTEX"
                        width={32}
                        height={32}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div>
                      <span className="font-mono text-[0.6rem] font-bold uppercase tracking-widest text-champagne">
                        VORTEX Assessment
                      </span>
                      <h3 id="modal-heading" className="font-display text-lg font-bold text-cream">
                        Solution Brief
                      </h3>
                    </div>
                  </div>
                  <span className="font-mono text-xs font-bold text-champagne">
                    Step {step} of 3
                  </span>
                </div>

                <form onSubmit={handleNext}>
                  {/* Step 1: Service Type */}
                  {step === 1 && (
                    <div className="space-y-3">
                      <p className="font-mono text-xs font-semibold uppercase tracking-wider text-muted mb-2">
                        1. What would you like us to build?
                      </p>
                      {SERVICE_OPTIONS.map((item) => (
                        <ServiceOptionCard
                          key={item.id}
                          id={item.id}
                          label={item.label}
                          desc={item.desc}
                          selected={serviceType === item.label}
                          onSelect={handleServiceSelect}
                        />
                      ))}
                    </div>
                  )}

                  {/* Step 2: Solution Brief */}
                  {step === 2 && (
                    <SolutionBriefStep
                      initialValue={solutionDescription}
                      onBack={handleBack}
                      onNext={(value) => {
                        setSolutionDescription(value);
                        setStep(3);
                      }}
                    />
                  )}

                  {/* Step 3: Contact Information */}
                  {step === 3 && (
                    <div className="space-y-4">
                      <p className="font-mono text-xs font-semibold uppercase tracking-wider text-muted mb-2">
                        3. Who should receive the technical assessment?
                      </p>
                      <div>
                        <label className="block font-mono text-[0.6rem] font-bold uppercase tracking-wider text-muted mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          maxLength={120}
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Dr. Avery Chen"
                          className="w-full rounded-xl border border-gold/25 bg-[#140207] px-4 py-2.5 text-sm text-cream placeholder-muted/40 outline-none focus:border-gold"
                        />
                      </div>
                      <div>
                        <label className="block font-mono text-[0.6rem] font-bold uppercase tracking-wider text-muted mb-1">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          maxLength={254}
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="name@enterprise.com"
                          className="w-full rounded-xl border border-gold/25 bg-[#140207] px-4 py-2.5 text-sm text-cream placeholder-muted/40 outline-none focus:border-gold"
                        />
                      </div>
                      <div>
                        <label className="block font-mono text-[0.6rem] font-bold uppercase tracking-wider text-muted mb-1">
                          Organisation / Company
                        </label>
                        <input
                          type="text"
                          maxLength={200}
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          placeholder="Enterprise name"
                          className="w-full rounded-xl border border-gold/25 bg-[#140207] px-4 py-2.5 text-sm text-cream placeholder-muted/40 outline-none focus:border-gold"
                        />
                      </div>
                    </div>
                  )}

                  {/* Step Navigation Actions */}
                  {step !== 2 && <div className="mt-8 flex items-center justify-between border-t border-gold/15 pt-5">
                    {step > 1 ? (
                      <button
                        type="button"
                        onClick={handleBack}
                        className="focus-ring flex items-center gap-1.5 font-mono text-xs font-bold uppercase text-muted hover:text-cream"
                      >
                        <ArrowLeft size={13} />
                        Back
                      </button>
                    ) : (
                      <div />
                    )}

                    <button
                      type="submit"
                      data-cursor="interactive"
                      className="focus-ring flex items-center gap-2 rounded-full bg-gradient-to-r from-gold via-champagne to-gold px-6 py-3 text-xs font-bold uppercase tracking-wider text-ink shadow-[0_0_20px_rgba(212,175,55,0.35)] hover:brightness-110"
                    >
                      {step === 3 ? (
                        <>
                          <Sparkles size={14} />
                          <span>Submit Assessment Brief</span>
                        </>
                      ) : (
                        <>
                          <span>Next</span>
                          <ArrowRight size={13} />
                        </>
                      )}
                    </button>
                  </div>}
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
