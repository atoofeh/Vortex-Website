"use client";

import Link from "@/components/localized-link";
import { ArrowRight, BrainCircuit, Code2, Database, Globe2, Layers3, Server } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "@/components/language-provider";

const layers = [
  { key: "experience", label: "Experience", subtitle: "What people see and use.", items: ["Web experiences", "Mobile products", "Interactive interfaces", "Customer portals"], href: "/services/web-development", icon: Globe2 },
  { key: "software", label: "Software", subtitle: "The applications and platforms behind the interface.", items: ["Applications", "Enterprise platforms", "APIs", "Business logic"], href: "/services/enterprise-software", icon: Code2 },
  { key: "intelligence", label: "Intelligence", subtitle: "Systems that understand, reason, and act.", items: ["AI systems", "Agents", "Automation", "Computer vision"], href: "/services/artificial-intelligence", icon: BrainCircuit },
  { key: "data", label: "Data", subtitle: "The information layer that gives systems context.", items: ["Databases", "Search", "Knowledge systems", "Analytics"], href: "/services/enterprise-software", icon: Database },
  { key: "infrastructure", label: "Infrastructure", subtitle: "The production foundation beneath everything.", items: ["Private AI", "Cloud", "Compute", "Deployment"], href: "/services/infrastructure", icon: Server },
] as const;

const stackCopy = {
  en: {
    title: "The VORTEX Engineering Stack.",
    description: "Technology is rarely one layer. Neither are we. VORTEX connects experience, software, intelligence, data, and infrastructure into one accountable system.",
    system: "Five layers / one connected system",
    model: "VORTEX / Engineering model",
    connected: "Connected system",
    architecture: "Architecture / 01—05",
    active: "Active layer",
    responsibilities: "Layer responsibilities",
    layers: {
      experience: { label: "Experience", subtitle: "What people see and use.", items: ["Web experiences", "Mobile products", "Interactive interfaces", "Customer portals"], cta: "Explore experience engineering" },
      software: { label: "Software", subtitle: "The applications and platforms behind the interface.", items: ["Applications", "Enterprise platforms", "APIs", "Business logic"], cta: "Explore software engineering" },
      intelligence: { label: "Intelligence", subtitle: "Systems that understand, reason, and act.", items: ["AI systems", "Agents", "Automation", "Computer vision"], cta: "Explore intelligence engineering" },
      data: { label: "Data", subtitle: "The information layer that gives systems context.", items: ["Databases", "Search", "Knowledge systems", "Analytics"], cta: "Explore data engineering" },
      infrastructure: { label: "Infrastructure", subtitle: "The production foundation beneath everything.", items: ["Private AI", "Cloud", "Compute", "Deployment"], cta: "Explore infrastructure engineering" },
    },
  },
  ar: {
    title: "منظومة VORTEX الهندسية.",
    description: "نادراً ما تكون التقنية طبقة واحدة. ونحن كذلك. تربط VORTEX بين التجربة والبرمجيات والذكاء والبيانات والبنية التحتية ضمن نظام واحد مسؤول.",
    system: "خمس طبقات / نظام واحد متصل",
    model: "VORTEX / النموذج الهندسي",
    connected: "نظام متصل",
    architecture: "المعمارية / 01—05",
    active: "الطبقة النشطة",
    responsibilities: "مسؤوليات الطبقة",
    layers: {
      experience: { label: "التجربة", subtitle: "ما يراه الناس ويستخدمونه.", items: ["تجارب الويب", "المنتجات الجوالة", "الواجهات التفاعلية", "بوابات العملاء"], cta: "استكشف هندسة التجربة" },
      software: { label: "البرمجيات", subtitle: "التطبيقات والمنصات خلف الواجهة.", items: ["التطبيقات", "المنصات المؤسسية", "واجهات API", "منطق الأعمال"], cta: "استكشف هندسة البرمجيات" },
      intelligence: { label: "الذكاء", subtitle: "أنظمة تفهم وتستنتج وتتصرف.", items: ["أنظمة الذكاء الاصطناعي", "الوكلاء", "الأتمتة", "الرؤية الحاسوبية"], cta: "استكشف هندسة الذكاء" },
      data: { label: "البيانات", subtitle: "طبقة المعلومات التي تمنح الأنظمة سياقها.", items: ["قواعد البيانات", "البحث", "أنظمة المعرفة", "التحليلات"], cta: "استكشف هندسة البيانات" },
      infrastructure: { label: "البنية التحتية", subtitle: "الأساس التشغيلي الذي يقوم عليه كل شيء.", items: ["ذكاء اصطناعي خاص", "السحابة", "الحوسبة", "النشر"], cta: "استكشف هندسة البنية التحتية" },
    },
  },
} as const;

function ArchitectureGeometry({ layer }: { layer: string }) {
  return (
    <div aria-hidden="true" className={`vortex-stack-geometry vortex-stack-geometry--${layer}`}>
      <svg viewBox="0 0 640 360" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M-20 304C92 267 112 88 244 90C364 92 354 258 492 228C565 212 596 131 670 88" />
        <path d="M-14 332C119 296 145 136 249 137C358 139 374 290 515 255C575 240 609 180 667 135" />
        <path d="M86 0C157 76 160 188 258 200C355 211 416 151 474 0" />
        <path d="M274 55L274 307M184 179H590" />
        <circle cx="274" cy="179" r="38" />
        <circle cx="274" cy="179" r="5" />
        <circle cx="184" cy="179" r="3" />
        <circle cx="590" cy="179" r="3" />
      </svg>
    </div>
  );
}

export function EngineeringStack() {
  const { t, locale } = useLanguage();
  const reducedMotion = useReducedMotion();
  const [activeLayer, setActiveLayer] = useState(0);
  const [previewLayer, setPreviewLayer] = useState<number | null>(null);
  const active = layers[activeLayer];
  const visibleLayerIndex = previewLayer ?? activeLayer;
  const visibleLayer = layers[visibleLayerIndex];
  const localized = stackCopy[locale];
  const activeLocalized = localized.layers[active.key];

  return (
    <section id="architecture" className="section-wrap py-24 sm:py-36" aria-labelledby="engineering-stack-title">
      <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-16">
        <motion.div initial={reducedMotion ? false : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="lg:pt-8">
          <p className="eyebrow mb-5"><Layers3 aria-hidden="true" size={13} className="text-gold" />{t("architecture.eyebrow")}</p>
          <h2 id="engineering-stack-title" className="display max-w-xl text-4xl leading-[0.92] text-cream sm:text-6xl">{localized.title}</h2>
          <p className="mt-7 max-w-lg text-base leading-[1.8] text-muted">{localized.description}</p>
          <div className="mt-10 flex items-center gap-3 border-t border-gold/15 pt-5 font-mono text-[0.68rem] font-bold uppercase tracking-[0.14em] text-champagne"><span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_12px_rgba(212,175,55,0.8)]" /> {localized.system}</div>
        </motion.div>

        <motion.div initial={reducedMotion ? false : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: 0.06 }} className="vortex-stack-console lg:mt-2">
          <div className="vortex-stack-console__topline flex items-center justify-between font-mono text-[0.68rem] uppercase tracking-[0.14em] text-champagne/75"><span>{localized.model}</span><span className="text-gold">{localized.connected}</span></div>
          <div className="vortex-stack-console__header mt-5 border-b border-gold/20 pb-5"><p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-gold">{localized.architecture}</p></div>

          <div className="vortex-stack-path relative mt-8" role="tablist" aria-label={locale === "ar" ? "طبقات VORTEX الهندسية" : "VORTEX engineering layers"}>
            <span aria-hidden="true" className="vortex-stack-path__line" />
            <span aria-hidden="true" className="vortex-stack-path__foundation" />
            <div className="vortex-stack-nodes relative grid grid-cols-1 gap-3 sm:grid-cols-5 sm:gap-1">
              {layers.map((layer, index) => {
                const Icon = layer.icon;
                const selected = index === activeLayer;
                const inspected = index === visibleLayerIndex;
                const layerLocalized = localized.layers[layer.key];
                return (
                  <button key={layer.key} id={`engineering-layer-tab-${layer.key}`} type="button" role="tab" aria-label={`${layerLocalized.label} ${locale === "ar" ? "الطبقة" : "layer"} 0${index + 1}`} aria-selected={selected} aria-controls="engineering-layer-panel" onClick={() => setActiveLayer(index)} onMouseEnter={() => setPreviewLayer(index)} onMouseLeave={() => setPreviewLayer(null)} onFocus={() => setPreviewLayer(index)} onBlur={() => setPreviewLayer(null)} className={`focus-ring vortex-stack-node group ${inspected ? "is-inspected" : ""} ${selected ? "is-selected" : ""}`}>
                    <span className="vortex-stack-node__index">0{index + 1}</span>
                    <span className="vortex-stack-node__icon"><Icon aria-hidden="true" size={17} /></span>
                    <span className="vortex-stack-node__label">{layerLocalized.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <motion.div key={active.key} initial={reducedMotion ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} id="engineering-layer-panel" role="tabpanel" aria-labelledby={`engineering-layer-tab-${active.key}`} className="vortex-stack-console__body relative mt-10 grid gap-12 border-t border-gold/15 pt-10 md:grid-cols-[0.82fr_1.18fr] md:gap-14">
            <ArchitectureGeometry layer={visibleLayer.key} />
            <div className="vortex-stack-active relative">
              <span className="vortex-stack-number" aria-hidden="true">0{activeLayer + 1}</span>
              <div className="relative z-[1]">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-gold">{localized.active} / 0{activeLayer + 1}</p>
                <h3 className="mt-5 font-display text-3xl font-bold leading-none text-cream sm:text-5xl">{activeLocalized.label}</h3>
                <p className="mt-4 max-w-md text-base leading-relaxed text-muted">{activeLocalized.subtitle}</p>
                <Link href={active.href} className="focus-ring vortex-stack-cta mt-9 inline-flex items-center gap-3 text-sm font-semibold text-champagne hover:text-cream">{activeLocalized.cta} <ArrowRight aria-hidden="true" size={16} /></Link>
              </div>
            </div>
            <div className="vortex-stack-responsibility-panel relative">
              <p className="mb-4 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-gold">{localized.responsibilities}</p>
              <ul className="vortex-stack-responsibilities grid gap-y-1">{activeLocalized.items.map((item, index) => <li key={item}><span className="vortex-stack-responsibilities__index">0{index + 1}</span><strong>{item}</strong></li>)}</ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
