"use client";

import { createContext, useContext, useEffect, useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";
import { getTranslation, type Locale, type Translations, translations } from "@/lib/i18n";
import { languagePath } from "@/lib/seo";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: (path: string) => string;
  copy: Translations;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const locale: Locale = pathname === "/ar" || pathname.startsWith("/ar/") ? "ar" : "en";

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
    window.localStorage.setItem("preferredLanguage", locale);
  }, [locale]);

  const value = useMemo<LanguageContextValue>(() => {
    const setLocale = (next: Locale) => {
      window.localStorage.setItem("preferredLanguage", next);
      const target = languagePath(pathname, next);
      if (target !== pathname) router.push(`${target}${window.location.search}${window.location.hash}`);
    };
    return { locale, setLocale, toggleLocale: () => setLocale(locale === "en" ? "ar" : "en"), t: (path) => getTranslation(locale, path), copy: translations[locale] };
  }, [locale, pathname, router]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
