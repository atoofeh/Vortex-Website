"use client";

import { ArrowRight, CheckCircle2, X } from "lucide-react";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { useLanguage } from "@/components/language-provider";

type LeadModalProps = { isOpen: boolean; onClose: () => void; initialService?: string };
const options = [
  ["Not sure yet", "Not sure yet", "لست متأكداً بعد"],
  ["AI System Development", "Private AI", "الذكاء الاصطناعي الخاص"],
  ["Private Infrastructure", "Private Infrastructure", "البنية التحتية الخاصة"],
  ["Cloud Architecture", "Cloud Architecture", "المعمارية السحابية"],
  ["Website Development", "Website Development", "تطوير المواقع"],
  ["Web Application", "Web Application", "تطبيق ويب"],
  ["Mobile Application", "Mobile Apps", "تطبيقات الجوال"],
  ["Custom Software", "Custom Software", "برمجيات مخصصة"],
  ["Enterprise Platform", "Business Software", "برمجيات الأعمال"],
  ["ERP Development", "ERP Development", "تطوير أنظمة إدارة الموارد"],
  ["Intelligent Automation", "Automation & Integrations", "الأتمتة والتكامل"],
  ["DevOps", "DevOps", "عمليات التطوير"],
  ["GPU Infrastructure", "GPU Infrastructure", "بنية GPU التحتية"],
] as const;
const labels = {
  en: { eyebrow: "Let’s start a conversation", title: "What’s on your mind?", intro: "Tell us what you’re trying to build or improve. We’ll reply to your enquiry within 12 hours.", name: "Your name", email: "Email address", description: "What would you like to build?", placeholder: "A few sentences about your idea, problem, or goal…", service: "Interested in", company: "Company", optional: "optional", send: "Send enquiry", sending: "Sending…", note: "We’ll use these details to respond to your enquiry.", close: "Close enquiry form", success: "Thanks. We’ve got your message.", successText: "Our team will reply within 12 hours to", return: "Back to the site", error: "We couldn’t send your message. Please try again, or email us directly.", emailAlternative: "Or email", required: "Name, email, and a short message are all we need." },
  ar: { eyebrow: "لنبدأ الحديث", title: "ما الذي تفكر به؟", intro: "أخبرنا بما تريد بناءه أو تحسينه. سنرد على استفسارك خلال 12 ساعة.", name: "اسمك", email: "البريد الإلكتروني", description: "ما الذي ترغب في بنائه؟", placeholder: "بضعة أسطر عن فكرتك أو المشكلة أو الهدف…", service: "الخدمة التي تهمك", company: "الشركة", optional: "اختياري", send: "أرسل استفسارك", sending: "جارٍ الإرسال…", note: "سنستخدم هذه المعلومات للرد على استفسارك.", close: "إغلاق نموذج التواصل", success: "شكراً. وصلتنا رسالتك.", successText: "سيرد فريقنا خلال 12 ساعة على", return: "العودة إلى الموقع", error: "تعذّر إرسال رسالتك. حاول مجدداً أو راسلنا مباشرة بالبريد الإلكتروني.", emailAlternative: "أو راسلنا على", required: "نحتاج فقط إلى اسمك وبريدك ورسالة قصيرة." },
} as const;

export function LeadModal({ isOpen, ...props }: LeadModalProps) {
  return isOpen ? <EnquiryForm {...props} /> : null;
}

function EnquiryForm({ onClose, initialService }: Omit<LeadModalProps, "isOpen">) {
  const { locale } = useLanguage();
  const c = labels[locale];
  const [service, setService] = useState(initialService || "Not sure yet");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [failed, setFailed] = useState(false);
  const [replyEmail, setReplyEmail] = useState("");
  const dialog = useRef<HTMLDivElement>(null);
  const successHeading = useRef<HTMLHeadingElement>(null);
  const closeRef = useRef(onClose);
  useEffect(() => { closeRef.current = onClose; }, [onClose]);

  useEffect(() => {
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    dialog.current?.querySelector<HTMLInputElement>("input")?.focus();
    const key = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeRef.current();
      if (event.key !== "Tab") return;
      const nodes = Array.from(dialog.current?.querySelectorAll<HTMLElement>("button:not(:disabled),a[href],input,select,textarea,[tabindex='0']") ?? []);
      const first = nodes[0], last = nodes[nodes.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      else if (!nodes.includes(document.activeElement as HTMLElement)) { event.preventDefault(); (event.shiftKey ? last : first)?.focus(); }
    };
    document.addEventListener("keydown", key);
    return () => { document.documentElement.style.overflow = previousOverflow; document.removeEventListener("keydown", key); if (previousFocus?.isConnected) previousFocus.focus(); };
  }, []);
  useEffect(() => { if (submitted) successHeading.current?.focus(); }, [submitted]);

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (sending) return;
    const data = new FormData(event.currentTarget);
    const email = String(data.get("email") || "").trim();
    setSending(true); setFailed(false);
    try {
      const response = await fetch("/api/assessment", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ serviceType: service, solutionDescription: String(data.get("description") || "").trim(), name: String(data.get("name") || "").trim(), email, company: String(data.get("company") || "").trim() }),
      });
      if (!response.ok) throw new Error("Enquiry delivery failed");
      setReplyEmail(email); setSubmitted(true);
    } catch { setFailed(true); } finally { setSending(false); }
  };

  return <div className="refresh-modal-backdrop" onClick={event => { if (event.target === event.currentTarget) onClose(); }}><div ref={dialog} role="dialog" aria-modal="true" aria-labelledby="enquiry-heading" aria-describedby={submitted ? undefined : "enquiry-intro"} className="refresh-modal"><button type="button" className="focus-ring refresh-modal-close" aria-label={c.close} onClick={onClose}><X size={20} /></button>
    {submitted ? <div className="py-10"><CheckCircle2 size={36} className="mb-6 text-gold" /><h2 ref={successHeading} tabIndex={-1} id="enquiry-heading" className="display text-3xl text-cream">{c.success}</h2><p role="status" className="refresh-body mt-5">{c.successText} <strong className="text-cream break-all" dir="ltr">{replyEmail}</strong>.</p><button type="button" onClick={onClose} className="focus-ring refresh-primary mt-8">{c.return}</button></div> : <><p className="refresh-label pe-8">{c.eyebrow}</p><h2 id="enquiry-heading" className="display mt-4 text-3xl text-cream sm:text-4xl">{c.title}</h2><p id="enquiry-intro" className="refresh-body mt-4">{c.intro}</p><form onSubmit={submit} className="mt-7" aria-busy={sending}><p className="mb-5 text-xs text-muted">{c.required}</p><div className="grid gap-5 sm:grid-cols-2"><label className="refresh-field">{c.name}<input name="name" required maxLength={120} autoComplete="name" /></label><label className="refresh-field">{c.email}<input name="email" type="email" required maxLength={254} autoComplete="email" dir="ltr" /></label></div><label className="refresh-field mt-5">{c.description}<textarea name="description" required maxLength={5000} rows={4} placeholder={c.placeholder} /></label><div className="mt-5 grid gap-5 sm:grid-cols-2"><label className="refresh-field"><span>{c.service} <span className="font-normal text-muted">({c.optional})</span></span><select name="service" value={service} onChange={event => setService(event.target.value)}>{initialService && !options.some(([value]) => value === initialService) && <option value={initialService}>{initialService}</option>}{options.map(([value, en, ar]) => <option key={value} value={value}>{locale === "ar" ? ar : en}</option>)}</select></label><label className="refresh-field"><span>{c.company} <span className="font-normal text-muted">({c.optional})</span></span><input name="company" maxLength={200} autoComplete="organization" /></label></div>{failed && <p role="alert" className="refresh-form-error mt-5">{c.error} <a href="mailto:contact@vortexmind.co" className="focus-ring underline" dir="ltr">contact@vortexmind.co</a></p>}<button type="submit" disabled={sending} className="focus-ring refresh-primary mt-7 w-full justify-center disabled:opacity-60">{sending ? c.sending : c.send}<ArrowRight size={16} className={locale === "ar" ? "rotate-180" : ""} /></button><p className="mt-3 text-center text-xs leading-relaxed text-muted">{c.note}</p><p className="mt-5 text-center text-sm text-muted">{c.emailAlternative} <a href="mailto:contact@vortexmind.co" className="focus-ring refresh-email" dir="ltr">contact@vortexmind.co</a></p></form></>}
  </div></div>;
}
