"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles, X } from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";
import { useLanguage } from "@/components/language-provider";

type LeadModalProps = { isOpen: boolean; onClose: () => void; initialService?: string };
type AssessmentRequest = { serviceType: string; stage: string; needs: string[]; solutionDescription: string; timeline: string; name: string; email: string; company: string; submittedAt: string };

const systems = ["AI Platform", "Enterprise System", "Web Platform", "Mobile Product", "Infrastructure", "Multiple / Full Stack", "Something Else"];
const stages = ["Exploring", "Defined concept", "Existing system", "Prototype", "Production system", "Modernization / replacement"];
const needs = ["Architecture", "Product design", "Frontend / application engineering", "AI / automation", "Data / integrations", "Infrastructure / operations"];
const timelines = ["Exploring the right path", "Within 1–3 months", "Within 3–6 months", "More than 6 months", "Already in progress"];

const normalizeSystem = (service?: string) => {
  if (!service) return "AI Platform";
  if (/ai|intelligence/i.test(service)) return "AI Platform";
  if (/mobile/i.test(service)) return "Mobile Product";
  if (/infrastructure|cloud|devops|gpu/i.test(service)) return "Infrastructure";
  if (/enterprise|erp|platform/i.test(service)) return "Enterprise System";
  if (/web|website|digital/i.test(service)) return "Web Platform";
  return "Something Else";
};

export function GuidedLeadModal({ isOpen, onClose, initialService }: LeadModalProps) {
  const { t } = useLanguage();
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState("AI Platform");
  const [stage, setStage] = useState("");
  const [selectedNeeds, setSelectedNeeds] = useState<string[]>([]);
  const [description, setDescription] = useState("");
  const [timeline, setTimeline] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isOpen) return;
    if (initialService) setSelectedService(normalizeSystem(initialService));
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") onClose(); };
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => { document.documentElement.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [initialService, isOpen, onClose]);

  const toggleNeed = (need: string) => setSelectedNeeds((current) => current.includes(need) ? current.filter((item) => item !== need) : [...current, need]);
  const reset = () => { setStep(1); setSelectedService(normalizeSystem(initialService)); setStage(""); setSelectedNeeds([]); setDescription(""); setTimeline(""); setName(""); setEmail(""); setCompany(""); setSubmitted(false); setError(""); onClose(); };

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    if (step < 5) { setStep((current) => current + 1); return; }
    setIsSubmitting(true); setError("");
    const request: AssessmentRequest = { serviceType: selectedService, stage, needs: selectedNeeds, solutionDescription: description.trim(), timeline, name: name.trim(), email: email.trim(), company: company.trim(), submittedAt: new Date().toISOString() };
    try {
      const response = await fetch("/api/assessment", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(request) });
      const result = await response.json().catch(() => null) as { error?: string } | null;
      if (!response.ok) throw new Error(result?.error || "The request could not be delivered.");
      setSubmitted(true);
    } catch (submissionError) { setError(submissionError instanceof Error ? submissionError.message : "The request could not be delivered."); } finally { setIsSubmitting(false); }
  };

  const fieldClass = "w-full rounded-xl border border-gold/25 bg-[#140207] px-4 py-3 text-sm text-cream outline-none transition-colors placeholder-muted/50 focus:border-gold";
  const choiceClass = (selected: boolean) => `focus-ring rounded-xl border p-3 text-start text-sm transition-colors ${selected ? "border-gold bg-gold/15 text-cream" : "border-gold/20 bg-[#2D0812]/55 text-muted hover:border-gold/45 hover:text-cream"}`;
  const canContinue = step === 1 || (step === 2 && Boolean(stage)) || (step === 3 && selectedNeeds.length > 0) || step === 4;

  return <AnimatePresence>{isOpen && <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto p-4 sm:p-6"><motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 bg-[#080609]/85 backdrop-blur-xl" /><motion.div role="dialog" aria-modal="true" aria-labelledby="modal-heading" initial={{ opacity: 0, scale: 0.96, y: 16 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.96, y: 16 }} className="relative my-auto w-full max-w-2xl overflow-hidden rounded-3xl border border-gold/30 bg-[#1F050C] p-7 shadow-[0_25px_70px_rgba(15,2,6,0.9)] sm:p-10">
    <button type="button" onClick={onClose} aria-label={t("booking.close")} className="focus-ring absolute end-5 top-5 grid h-8 w-8 place-items-center rounded-full border border-gold/25 bg-[#2D0812] text-champagne hover:border-gold"><X size={15} /></button>
    {submitted ? <div className="py-8 text-center"><div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-full border border-gold/60 bg-gold/20 text-gold"><CheckCircle2 size={32} /></div><h3 id="modal-heading" className="display text-3xl font-bold text-cream">{t("booking.successTitle")}</h3><p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted">{t("booking.successDescription")} <strong className="text-champagne">contact@vortexmind.co</strong> and confirm the next technical conversation.</p><button type="button" onClick={reset} className="focus-ring mt-8 rounded-full bg-gradient-to-r from-gold to-champagne px-7 py-3 text-xs font-bold uppercase tracking-wider text-ink">{t("booking.return")}</button></div> : <><div className="mb-7 border-b border-gold/15 pb-5"><div className="flex items-end justify-between gap-4"><div><p className="eyebrow mb-2">{t("booking.eyebrow")}</p><h3 id="modal-heading" className="font-display text-2xl font-bold text-cream">Start with the system.</h3></div><span className="font-mono text-xs font-bold text-champagne">{step} / 5</span></div><div className="mt-5 flex gap-1.5" aria-label={`Project intake step ${step} of 5`}>{[1, 2, 3, 4, 5].map((item) => <span key={item} className={`h-1 flex-1 rounded-full ${item <= step ? "bg-gold" : "bg-gold/15"}`} />)}</div></div><form onSubmit={submit}>
      <AnimatePresence mode="wait">
        <motion.div key={step} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} transition={{ duration: 0.18 }}>
          {step === 1 && <div><p className="text-sm font-semibold text-cream">What are you building?</p><p className="mt-2 text-sm leading-relaxed text-muted">Choose the system shape that is closest. We can refine it together.</p><div className="mt-5 grid gap-2 sm:grid-cols-2">{systems.map((item) => <button key={item} type="button" aria-pressed={selectedService === item} onClick={() => setSelectedService(item)} className={choiceClass(selectedService === item)}>{item}</button>)}</div></div>}
          {step === 2 && <div><p className="text-sm font-semibold text-cream">What stage are you at?</p><div className="mt-5 grid gap-2 sm:grid-cols-2">{stages.map((item) => <button key={item} type="button" aria-pressed={stage === item} onClick={() => setStage(item)} className={choiceClass(stage === item)}>{item}</button>)}</div></div>}
          {step === 3 && <div><p className="text-sm font-semibold text-cream">What do you need from VORTEX?</p><p className="mt-2 text-sm leading-relaxed text-muted">Select as many as are useful.</p><div className="mt-5 grid gap-2 sm:grid-cols-2">{needs.map((item) => <button key={item} type="button" aria-pressed={selectedNeeds.includes(item)} onClick={() => toggleNeed(item)} className={choiceClass(selectedNeeds.includes(item))}>{item}</button>)}</div></div>}
          {step === 4 && <div><label htmlFor="solution-description" className="text-sm font-semibold text-cream">Tell us what you are building.</label><textarea id="solution-description" required autoFocus value={description} onChange={(event) => setDescription(event.target.value)} maxLength={5000} rows={7} placeholder="A short description of the product, workflow, users, integrations, or constraints..." className={`mt-4 ${fieldClass} resize-y leading-relaxed`} /><div className="mt-5 grid gap-2 sm:grid-cols-2">{timelines.map((item) => <button key={item} type="button" aria-pressed={timeline === item} onClick={() => setTimeline(item)} className={choiceClass(timeline === item)}>{item}</button>)}</div></div>}
          {step === 5 && <div className="space-y-4"><p className="text-sm font-semibold text-cream">Where should we send the next technical conversation?</p><div><label htmlFor="booking-name" className="mb-1 block font-mono text-[0.62rem] font-bold uppercase tracking-wider text-muted">Full name *</label><input id="booking-name" required value={name} onChange={(event) => setName(event.target.value)} className={fieldClass} /></div><div><label htmlFor="booking-email" className="mb-1 block font-mono text-[0.62rem] font-bold uppercase tracking-wider text-muted">Work email *</label><input id="booking-email" type="email" required value={email} onChange={(event) => setEmail(event.target.value)} className={fieldClass} /></div><div><label htmlFor="booking-company" className="mb-1 block font-mono text-[0.62rem] font-bold tracking-wider text-muted">Organisation / company</label><input id="booking-company" value={company} onChange={(event) => setCompany(event.target.value)} className={fieldClass} /></div></div>}
        </motion.div>
      </AnimatePresence>
      {error && <p role="alert" className="mt-5 rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-xs text-red-200">{error}</p>}
      <div className="mt-8 flex items-center justify-between border-t border-gold/15 pt-5">{step > 1 ? <button type="button" onClick={() => setStep((current) => current - 1)} className="focus-ring inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase text-muted hover:text-cream"><ArrowLeft size={13} />{t("booking.back")}</button> : <span />}{step < 5 ? <button type="submit" disabled={!canContinue} className="focus-ring inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold via-champagne to-gold px-6 py-3 text-xs font-bold uppercase tracking-wider text-ink disabled:cursor-not-allowed disabled:opacity-40">{t("booking.next")}<ArrowRight size={13} /></button> : <button type="submit" disabled={isSubmitting} className="focus-ring inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold via-champagne to-gold px-6 py-3 text-xs font-bold uppercase tracking-wider text-ink disabled:opacity-60"><Sparkles size={14} />{isSubmitting ? t("booking.sending") : t("booking.submit")}</button>}</div>
    </form></>}</motion.div></div>}</AnimatePresence>;
}
