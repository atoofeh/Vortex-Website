"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { defaultLocale, getTranslation, type Locale, type Translations, translations } from "@/lib/i18n";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: (path: string) => string;
  copy: Translations;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    const stored = window.localStorage.getItem("preferredLanguage");
    const nextLocale: Locale = stored === "ar" ? "ar" : "en";
    setLocaleState(nextLocale);
    document.documentElement.lang = nextLocale;
    document.documentElement.dir = nextLocale === "ar" ? "rtl" : "ltr";
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
    window.localStorage.setItem("preferredLanguage", locale);
  }, [locale]);

  const value = useMemo<LanguageContextValue>(() => ({
    locale,
    setLocale: setLocaleState,
    toggleLocale: () => setLocaleState((current) => current === "en" ? "ar" : "en"),
    t: (path) => getTranslation(locale, path),
    copy: translations[locale],
  }), [locale]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
