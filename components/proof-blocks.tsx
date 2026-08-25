"use client";

import { Check, Clock3, Database, Server } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { proofConfig } from "@/lib/proof-config";

export function ProofBlocks() {
  const { t } = useLanguage();
  const reference = proofConfig.referenceDeployment;
  const architecture = proofConfig.redactedArchitecture;

  return (
    <section className="section-wrap py-24 sm:py-32">
      <div className="mb-12 max-w-3xl">
        <p className="eyebrow mb-4"><Check size={13} className="text-gold" />{t("trust.eyebrow")}</p>
        <h2 className="display text-4xl leading-[0.95] text-cream sm:text-6xl">{t("trust.title")}</h2>
        <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">{t("trust.description")}</p>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <article className="liquid-glass-card rounded-[1.7rem] p-6 sm:p-7">
          <div className="flex items-start justify-between gap-4"><div className="grid h-11 w-11 place-items-center rounded-xl border border-gold/30 bg-gold/10 text-gold"><Server size={20} /></div><span className="rounded-full border border-gold/20 px-2.5 py-1 font-mono text-[0.58rem] font-bold uppercase tracking-wider text-champagne">{t("trust.placeholder")}</span></div>
          <h3 className="mt-7 text-xl font-semibold text-cream">{t("trust.referenceTitle")}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">{t("trust.referenceDescription")}</p>
          <dl className="mt-6 space-y-3 border-t border-gold/15 pt-5 font-mono text-[0.66rem]">
            <div className="flex justify-between gap-4"><dt className="text-muted">MODEL</dt><dd className="text-end text-cream">{reference.model}</dd></div>
            <div className="flex justify-between gap-4"><dt className="text-muted">HARDWARE</dt><dd className="text-end text-cream">{reference.hardware}</dd></div>
            <div className="flex justify-between gap-4"><dt className="text-muted">MODE</dt><dd className="text-end text-cream">{reference.deploymentMode}</dd></div>
            <div className="flex justify-between gap-4"><dt className="text-muted">THROUGHPUT</dt><dd className="text-end text-cream">{reference.throughput}</dd></div>
            <div className="flex justify-between gap-4"><dt className="text-muted">DATA EGRESS</dt><dd className="text-end text-cream">{reference.dataEgress}</dd></div>
          </dl>
        </article>

        <article className="liquid-glass-card rounded-[1.7rem] p-6 sm:p-7">
          <div className="flex items-start justify-between gap-4"><div className="grid h-11 w-11 place-items-center rounded-xl border border-gold/30 bg-gold/10 text-gold"><Database size={20} /></div><span className="rounded-full border border-gold/20 px-2.5 py-1 font-mono text-[0.58rem] font-bold uppercase tracking-wider text-champagne">{t("trust.placeholder")}</span></div>
          <h3 className="mt-7 text-xl font-semibold text-cream">{t("trust.architectureTitle")}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">{t("trust.architectureDescription")}</p>
          <dl className="mt-6 space-y-3 border-t border-gold/15 pt-5 font-mono text-[0.66rem]">
            <div className="flex justify-between gap-4"><dt className="text-muted">SYSTEM</dt><dd className="text-end text-cream">{architecture.system}</dd></div>
            <div className="flex justify-between gap-4"><dt className="text-muted">SERVICES</dt><dd className="text-end text-cream">{architecture.services}</dd></div>
            <div className="flex justify-between gap-4"><dt className="text-muted">DATA FLOW</dt><dd className="text-end text-cream">{architecture.dataFlow}</dd></div>
            <div className="flex justify-between gap-4"><dt className="text-muted">BOUNDARY</dt><dd className="text-end text-cream">{architecture.securityBoundary}</dd></div>
          </dl>
        </article>

        <article className="liquid-glass-card rounded-[1.7rem] p-6 sm:p-7 lg:flex lg:flex-col lg:justify-between">
          <div><div className="flex items-start justify-between gap-4"><div className="grid h-11 w-11 place-items-center rounded-xl border border-gold/30 bg-gold/10 text-gold"><Clock3 size={20} /></div><span className="rounded-full border border-gold/20 px-2.5 py-1 font-mono text-[0.58rem] font-bold uppercase tracking-wider text-champagne">{t("trust.placeholder")}</span></div><h3 className="mt-7 text-xl font-semibold text-cream">{t("trust.guaranteeTitle")}</h3><p className="mt-3 text-sm leading-relaxed text-muted">{t("trust.guaranteeDescription")}</p></div>
          <div className="mt-8 rounded-2xl border border-gold/30 bg-gold/10 p-5"><p className="font-mono text-[0.6rem] font-bold uppercase tracking-[0.14em] text-champagne">RESPONSE WINDOW</p><p className="mt-3 text-2xl font-semibold text-cream">{proofConfig.engagementGuarantee.responseWindow}</p><p className="mt-2 text-xs leading-relaxed text-muted">{proofConfig.engagementGuarantee.condition}</p></div>
        </article>
      </div>
    </section>
  );
}
