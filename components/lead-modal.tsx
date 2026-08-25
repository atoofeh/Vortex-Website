"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles, X } from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";
import { useLanguage } from "@/components/language-provider";

type LeadModalProps = { isOpen: boolean; onClose: () => void; initialService?: string };
type ServiceOption = { key: string; value: string };

const groups: { label: string; items: ServiceOption[] }[] = [
  { label: "aiGroup", items: [{ key: "ai", value: "AI System Development" }, { key: "automation", value: "Intelligent Automation" }] },
  { label: "softwareGroup", items: [{ key: "website", value: "Website Development" }, { key: "webapp", value: "Web Application" }, { key: "mobile", value: "Mobile Application" }, { key: "custom", value: "Custom Software" }, { key: "enterprise", value: "Enterprise Platform" }, { key: "erp", value: "ERP Development" }] },
  { label: "infrastructureGroup", items: [{ key: "cloud", value: "Cloud Architecture" }, { key: "private", value: "Private Infrastructure" }, { key: "devops", value: "DevOps" }, { key: "gpu", value: "GPU Infrastructure" }] },
];

interface AssessmentRequest { serviceType: string; solutionDescription: string; name: string; email: string; company: string; submittedAt: string; }

export function LeadModal({ isOpen, onClose, initialService }: LeadModalProps) {
  const { t } = useLanguage();
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState("AI System Development");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isOpen) return;
    if (initialService) setSelectedService(initialService);
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") onClose(); };
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => { document.documentElement.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [initialService, isOpen, onClose]);

  const reset = () => { setStep(1); setDescription(""); setName(""); setEmail(""); setCompany(""); setSubmitted(false); setError(""); onClose(); };

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    if (step < 3) { setStep((current) => current + 1); return; }
    setIsSubmitting(true); setError("");
    const request: AssessmentRequest = { serviceType: selectedService, solutionDescription: description.trim(), name: name.trim(), email: email.trim(), company: company.trim(), submittedAt: new Date().toISOString() };
    try {
      const response = await fetch("/api/assessment", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(request) });
      const result = await response.json().catch(() => null) as { error?: string } | null;
      if (!response.ok) throw new Error(result?.error || "The request could not be delivered.");
      setSubmitted(true);
    } catch (submissionError) { setError(submissionError instanceof Error ? submissionError.message : "The request could not be delivered."); } finally { setIsSubmitting(false); }
  };

  return <AnimatePresence>{isOpen && <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto p-4 sm:p-6"><motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 bg-[#080609]/85 backdrop-blur-xl" /><motion.div role="dialog" aria-modal="true" aria-labelledby="modal-heading" initial={{ opacity: 0, scale: 0.96, y: 16 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.96, y: 16 }} className="relative my-auto w-full max-w-2xl overflow-hidden rounded-3xl border border-gold/30 bg-[#1F050C] p-7 shadow-[0_25px_70px_rgba(15,2,6,0.9)] sm:p-10">
    <button type="button" onClick={onClose} aria-label={t("booking.close")} className="focus-ring absolute end-5 top-5 grid h-8 w-8 place-items-center rounded-full border border-gold/25 bg-[#2D0812] text-champagne hover:border-gold"><X size={15} /></button>
    {submitted ? <div className="py-8 text-center"><div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-full border border-gold/60 bg-gold/20 text-gold"><CheckCircle2 size={32} /></div><h3 id="modal-heading" className="display text-3xl font-bold text-cream">{t("booking.successTitle")}</h3><p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted">{t("booking.successDescription")} <strong className="text-champagne">contact@vortexmind.co</strong> and confirm the next technical conversation.</p><button type="button" onClick={reset} className="focus-ring mt-8 rounded-full bg-gradient-to-r from-gold to-champagne px-7 py-3 text-xs font-bold uppercase tracking-wider text-ink">{t("booking.return")}</button></div> : <><div className="mb-7 flex items-end justify-between border-b border-gold/15 pb-5"><div><p className="eyebrow mb-2">{t("booking.eyebrow")}</p><h3 id="modal-heading" className="font-display text-2xl font-bold text-cream">{t("booking.title")}</h3></div><span className="font-mono text-xs font-bold text-champagne">{t("booking.step")} {step} {t("booking.of")} 3</span></div><form onSubmit={submit}>
      {step === 1 && <div className="space-y-6"><p className="text-sm font-semibold text-cream">{t("booking.serviceQuestion")}</p>{groups.map((group) => <div key={group.label}><p className="mb-2 font-mono text-[0.62rem] font-bold uppercase tracking-[0.14em] text-champagne">{t(`booking.categories.${group.label}`)}</p><div className="grid gap-2 sm:grid-cols-2">{group.items.map((item) => <button key={item.value} type="button" onClick={() => setSelectedService(item.value)} className={`focus-ring rounded-xl border p-3 text-start text-sm transition-colors ${selectedService === item.value ? "border-gold bg-gold/15 text-cream" : "border-gold/20 bg-[#2D0812]/55 text-muted hover:border-gold/45 hover:text-cream"}`}>{t(`booking.categories.${item.key}`)}</button>)}</div></div>)}</div>}
      {step === 2 && <div><label htmlFor="solution-description" className="text-sm font-semibold text-cream">{t("booking.briefQuestion")}</label><textarea id="solution-description" required autoFocus value={description} onChange={(event) => setDescription(event.target.value)} maxLength={5000} rows={8} placeholder={t("booking.briefPlaceholder")} className="mt-4 w-full resize-y rounded-2xl border border-gold/25 bg-[#140207] px-4 py-3 text-sm leading-relaxed text-cream placeholder-muted/50 outline-none focus:border-gold" /><p className="mt-2 font-mono text-[0.62rem] leading-relaxed text-muted">{t("booking.briefHint")}</p></div>}
      {step === 3 && <div className="space-y-4"><p className="text-sm font-semibold text-cream">{t("booking.contactQuestion")}</p>{([["name", name, setName, "text"], ["email", email, setEmail, "email"], ["company", company, setCompany, "text"]] as const).map(([key, value, setter, type]) => <div key={key}><label htmlFor={`booking-${key}`} className="mb-1 block font-mono text-[0.62rem] font-bold uppercase tracking-wider text-muted">{t(`booking.${key}`)}{key !== "company" ? " *" : ""}</label><input id={`booking-${key}`} type={type} required={key !== "company"} value={value} onChange={(event) => setter(event.target.value)} className="w-full rounded-xl border border-gold/25 bg-[#140207] px-4 py-3 text-sm text-cream outline-none focus:border-gold" /></div>)}</div>}
      {error && <p role="alert" className="mt-5 rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-xs text-red-200">{error}</p>}
      <div className="mt-8 flex items-center justify-between border-t border-gold/15 pt-5">{step > 1 ? <button type="button" onClick={() => setStep((current) => current - 1)} className="focus-ring inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase text-muted hover:text-cream"><ArrowLeft size={13} />{t("booking.back")}</button> : <span />}{step < 3 ? <button type="submit" className="focus-ring inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold via-champagne to-gold px-6 py-3 text-xs font-bold uppercase tracking-wider text-ink">{t("booking.next")}<ArrowRight size={13} /></button> : <button type="submit" disabled={isSubmitting} className="focus-ring inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold via-champagne to-gold px-6 py-3 text-xs font-bold uppercase tracking-wider text-ink disabled:opacity-60"><Sparkles size={14} />{isSubmitting ? t("booking.sending") : t("booking.submit")}</button>}</div>
    </form></>}</motion.div></div>}</AnimatePresence>;
}
