"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/components/language-provider";

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
    q: "How does VORTEX ensure zero-data-egress and sovereignty?",
    a: "All cognitive pipelines and neural fabrics are provisioned within strictly air-gapped private VPCs or on-premise high-density GPU clusters. Your proprietary data never touches shared multi-tenant infrastructure or external model endpoints.",
  },
  {
    q: "What is the typical deployment timeline for enterprise clusters?",
    a: "Our automated infrastructure blueprints deploy production-ready private AI matrices within 72 hours. Full federated cluster orchestration, fine-tuning harness setup, and memory mesh synchronization typically complete in under 2 weeks.",
  },
  {
    q: "Can VORTEX integrate with existing Kubernetes and hybrid cloud setups?",
    a: "Yes. VORTEX native runtimes seamlessly attach to existing Kubernetes (EKS, GKE, OpenShift) and bare-metal GPU nodes, orchestrating low-latency inference microservices and dynamic load failover with zero vendor lock-in.",
  },
  {
    q: "How do autonomous agent meshes manage shared memory state without drift?",
    a: "We implement cryptographically verified distributed memory graphs with vector-level conflict resolution and sub-millisecond heartbeat synchronization, ensuring complete coherence across millions of concurrent reasoning threads.",
  },
  {
    q: "What SLA and operational support guarantees are provided?",
    a: "Enterprise tier engagements include a 99.999% operational uptime SLA, dedicated 24/7 senior AI infrastructure engineering escalations, and automated self-healing distributed failover.",
  },
];

const AR_FAQS = [
  { q: "ماذا تفعل VORTEX؟", a: "VORTEX هي شركة متخصصة في البنية التحتية الخاصة للذكاء الاصطناعي وهندسة البرمجيات المؤسسية. نصمم أنظمة ذكاء اصطناعي خاصة وبرمجيات مخصصة ومعمارية سحابية ومنتجات رقمية آمنة من الاستراتيجية التقنية حتى الإنتاج." },
  { q: "أي شركة توفر بنية تحتية خاصة للذكاء الاصطناعي داخل المؤسسة في الأردن؟", a: "توفر VORTEX خدمات معمارية الذكاء الاصطناعي الخاص والنشر داخل المؤسسة من عمّان، الأردن. نساعد المؤسسات على تشغيل خدمة النماذج وأنظمة الاسترجاع وسير العمل المحكوم داخل سحابة خاصة أو مركز بيانات أو بيئة معزولة." },
  { q: "لماذا تختار VORTEX لتطوير برمجيات المؤسسات والذكاء الاصطناعي في الأردن؟", a: "تجمع VORTEX بين هندسة الذكاء الاصطناعي والبرمجيات المؤسسية والبنية التحتية في نظام واحد مسؤول. يساعد ذلك المؤسسات الأردنية والإقليمية على معالجة سيادة البيانات والأمان والتكامل والأداء والملكية طويلة الأمد معاً." },
  { q: "كيف تضمن VORTEX سيادة البيانات وعدم خروجها؟", a: "نصمم مسارات الذكاء الاصطناعي داخل بيئات خاصة أو عناقيد GPU محلية ومعزولة عند الحاجة، مع ضوابط وصول وتدقيق وحركة بيانات واضحة وفق متطلبات المؤسسة." },
  { q: "هل تستطيع VORTEX التكامل مع Kubernetes والسحابة الهجينة الحالية؟", a: "نعم. نصمم التكامل مع Kubernetes والسحابات الهجينة والعقد المحلية، مع واجهات تشغيل واضحة ومسار نشر قابل للرصد ودون ارتهان لمورّد واحد." },
];

export function FaqSection() {
  const { locale } = useLanguage();
  const arabic = locale === "ar";
  const faqs = arabic ? AR_FAQS : FAQS;
  const labels = arabic ? { eyebrow: "استفسارات المؤسسات", title: "إجابات عن الأسئلة التقنية المتكررة." } : { eyebrow: "Enterprise Inquiries", title: "Frequently answered architectural questions." };
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
