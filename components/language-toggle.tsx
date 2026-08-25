"use client";

import { Languages } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export function LanguageToggle() {
  const { locale, toggleLocale, t } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label={t("language.switchTo")}
      data-cursor="interactive"
      className="focus-ring inline-flex items-center gap-1.5 rounded-full border border-gold/25 bg-gold/5 px-2.5 py-1.5 font-mono text-[0.62rem] font-bold tracking-[0.12em] text-champagne transition-colors hover:border-gold/60 hover:bg-gold/10"
    >
      <Languages size={13} aria-hidden="true" />
      <span className={locale === "en" ? "text-cream" : "text-muted"}>EN</span>
      <span className="text-gold/50">|</span>
      <span className={locale === "ar" ? "text-cream" : "text-muted"}>AR</span>
    </button>
  );
}
