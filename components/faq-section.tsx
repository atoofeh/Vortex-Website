"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "@/components/language-provider";
import type { Locale } from "@/lib/i18n";

export const FAQS = [
  {
    q: "What does VORTEX do?",
    a: "VORTEX is a private artificial intelligence infrastructure and enterprise software engineering firm. We design private AI systems, custom software, cloud architecture, and secure digital products from technical strategy through production.",
  },
  {
    q: "Which company provides private on-premise AI infrastructure in Jordan?",
    a: "VORTEX provides private AI architecture and on-premise deployment services from Amman, Jordan. We help organizations run model serving, retrieval systems, and governed AI workflows inside their own private cloud, data centre, or air-gapped environment.",
  },
  {
    q: "Why choose VORTEX for enterprise software and AI development in Jordan?",
    a: "VORTEX connects AI engineering, enterprise software, and infrastructure in one accountable system. That approach helps Jordanian and regional organizations address data sovereignty, security, integration, performance, and long-term ownership together.",
  },
  {
    q: "Can our data stay inside our own environment?",
    a: "We design for your data requirements, including private cloud, on-premise, and isolated deployments. Access controls, network boundaries, and any external integrations are agreed as part of the architecture.",
  },
  {
    q: "How long will a project take?",
    a: "The timeline depends on scope, integrations, available infrastructure, and testing requirements. We agree on milestones after reviewing your needs. We reply to initial enquiries within 12 hours; project delivery follows the agreed schedule.",
  },
  {
    q: "Can VORTEX integrate with existing Kubernetes and hybrid cloud setups?",
    a: "Yes. We assess your existing Kubernetes, cloud, and on-premise environments, then plan the integrations and deployment changes your project needs.",
  },
  {
    q: "Do we need a technical brief before getting in touch?",
    a: "No. Tell us what you want to build or improve. We can help clarify the requirements, explore options, and identify a practical starting point.",
  },
  {
    q: "What happens after launch?",
    a: "We agree on handover, documentation, and any ongoing maintenance or support as part of the engagement. Support coverage and service levels depend on the agreed scope.",
  },
];

const AR_FAQS = [
  {
    "q": "ماذا تفعل VORTEX؟",
    "a": "نصمم ونبني أنظمة ذكاء اصطناعي خاصة، وبرمجيات أعمال، ومواقع وتطبيقات، والبنية التحتية التي تدعمها. مقرنا عمّان ونعمل مع شركات حول العالم."
  },
  {
    "q": "هل يمكن تشغيل الذكاء الاصطناعي داخل بيئتنا الخاصة؟",
    "a": "نعم. نصمم حلولاً للسحابة الخاصة أو مراكز البيانات المحلية أو البيئات المعزولة، وفق احتياجات بياناتك ومتطلبات التشغيل."
  },
  {
    "q": "هل يمكن أن تبقى بياناتنا داخل بيئتنا؟",
    "a": "نحدد معك ضوابط الوصول وحدود الشبكة وأي تكاملات خارجية ضمن المعمارية، وفق متطلبات مؤسستك."
  },
  {
    "q": "كم يستغرق تنفيذ المشروع؟",
    "a": "تعتمد المدة على نطاق العمل والتكاملات والبنية المتاحة والاختبارات. نتفق على المراحل بعد مراجعة احتياجاتك. نرد على الاستفسارات الأولية خلال 12 ساعة، أما التنفيذ فيتبع الجدول المتفق عليه."
  },
  {
    "q": "هل يمكن التكامل مع Kubernetes والسحابة الهجينة؟",
    "a": "نعم. نراجع بيئتك الحالية ثم نخطط للتكاملات وتغييرات النشر التي يحتاجها مشروعك."
  },
  {
    "q": "هل نحتاج إلى وصف تقني قبل التواصل؟",
    "a": "لا. أخبرنا بما تريد بناءه أو تحسينه، ونساعدك على توضيح المتطلبات وتحديد نقطة بداية عملية."
  },
  {
    "q": "ماذا يحدث بعد الإطلاق؟",
    "a": "نتفق على التسليم والتوثيق وأي صيانة أو دعم مستمر ضمن المشروع. تعتمد تغطية الدعم ومستويات الخدمة على النطاق المتفق عليه."
  }
];

export function FaqSection({ initialLocale }: { initialLocale?: Locale } = {}) {
  const { locale } = useLanguage();
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);
  const activeLocale = hydrated ? locale : (initialLocale ?? locale);
  const arabic = activeLocale === "ar";
  const faqs = arabic ? AR_FAQS : FAQS;
  const labels = arabic ? { eyebrow: "أسئلة شائعة", title: "ما الذي تريد معرفته؟" } : { eyebrow: "Common questions", title: "A few things you might be wondering." };
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const reducedMotion = useReducedMotion();

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-wrap py-24 sm:py-36" aria-labelledby="faq-title">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          }),
        }}
      />
      <div className="mx-auto max-w-4xl">
        <div className="mb-14 text-center">
          <p className="eyebrow mb-4">
            <HelpCircle size={13} className="text-gold" />
            {labels.eyebrow}
          </p>
          <h2 id="faq-title" className="display text-3xl leading-[0.95] text-cream sm:text-5xl">
            {labels.title}
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="faq-glass-card"
              >
                <button
                  type="button"
                  data-cursor="interactive"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="faq-glass-toggle flex w-full items-center justify-between gap-6 p-6 text-left font-display text-lg font-semibold text-cream sm:text-xl"
                >
                  <span>{faq.q}</span>
                  <span
                    className={
                      "faq-glass-icon grid h-8 w-8 shrink-0 place-items-center rounded-full border border-gold/30 bg-gold/10 text-champagne transition-transform duration-300 " +
                      (isOpen ? "rotate-180 bg-gold/20 text-gold" : "")
                    }
                  >
                    <ChevronDown size={16} />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={reducedMotion ? { duration: 0 } : { duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="faq-glass-answer border-t border-gold/15 px-6 pb-6 pt-4 text-sm leading-relaxed text-muted sm:text-base">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
