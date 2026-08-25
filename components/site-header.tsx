"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown, Menu, Sparkles, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { LanguageToggle } from "@/components/language-toggle";
import { ThemeToggle } from "@/components/theme-toggle";
import { useLanguage } from "@/components/language-provider";

const capabilityGroups = [
  {
    label: "AI & Intelligence",
    links: [["build.ai", "/services/artificial-intelligence", "build.ai.short"]] as const,
  },
  {
    label: "Software Engineering",
    links: [["build.enterprise", "/services/enterprise-software", "build.enterprise.short"]] as const,
  },
  {
    label: "Digital Experiences",
    links: [
      ["build.web", "/services/web-development", "build.web.short"],
      ["build.mobile", "/services/mobile-development", "build.mobile.short"],
    ] as const,
  },
  {
    label: "Automation & Infrastructure",
    links: [
      ["beyond.intelligent", "/services/automation", "beyond.intelligent.description"],
      ["build.infrastructure", "/services/infrastructure", "build.infrastructure.short"],
    ] as const,
  },
] as const;

export function SiteHeader({ onOpenModal }: { onOpenModal?: () => void }) {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [capabilitiesOpen, setCapabilitiesOpen] = useState(false);
  const reducedMotion = useReducedMotion();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const toggleEl = toggleRef.current;
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    const timer = window.setTimeout(() => menuRef.current?.querySelector<HTMLElement>("a[href], button")?.focus(), 60);
    return () => { document.documentElement.style.overflow = ""; window.removeEventListener("keydown", onKey); window.clearTimeout(timer); toggleEl?.focus(); };
  }, [open]);

  const chromeClass = scrolled
    ? "max-w-6xl border-gold/35 bg-[#1F050C]/92 px-3.5 py-2 shadow-[0_16px_40px_-15px_rgba(212,175,55,0.25)]"
    : "max-w-7xl border-gold/20 bg-[#1F050C]/75 px-5 py-3 shadow-[0_18px_45px_-20px_rgba(212,175,55,0.18)]";
  const openConsultation = () => {
    if (onOpenModal) onOpenModal();
    else window.location.href = "/#contact";
  };

  return (
    <>
      <header className="fixed inset-x-0 top-3.5 z-50 px-4 sm:top-5">
        <div className={`mx-auto grid w-full grid-cols-[auto_1fr_auto] items-center gap-3 rounded-full border transition-all duration-150 ${chromeClass}`}>
          <Link href="/" aria-label="VORTEX home" className="focus-ring group flex items-center gap-1.5 rounded-full pr-2"><Image src="/logo-emblem.webp" alt="" width={36} height={36} className={(scrolled ? "h-8 w-8" : "h-9 w-9") + " object-contain transition-transform duration-300 group-hover:scale-105"} priority /><span className="font-display text-sm font-bold tracking-tight text-cream">ORTEX</span></Link>

          <nav aria-label={t("navigation.menu")} className="site-header-nav hidden items-center gap-1 md:flex">
            <div className="relative" onMouseEnter={() => setCapabilitiesOpen(true)} onMouseLeave={() => setCapabilitiesOpen(false)}>
              <button type="button" aria-haspopup="true" aria-expanded={capabilitiesOpen} onClick={() => setCapabilitiesOpen((current) => !current)} className="focus-ring link-underline inline-flex items-center gap-1 rounded-full px-3 py-1.5 font-mono text-[0.66rem] uppercase tracking-[0.12em] text-muted hover:text-champagne">{t("navigation.capabilities")} <ChevronDown aria-hidden="true" size={12} className={capabilitiesOpen ? "rotate-180 transition-transform" : "transition-transform"} /></button>
              <AnimatePresence>
                {capabilitiesOpen && <motion.div role="menu" initial={reducedMotion ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} className="absolute start-0 top-full mt-3 grid w-[38rem] grid-cols-2 gap-3 rounded-2xl border border-gold/25 bg-[#1F050C]/95 p-4 shadow-[0_20px_60px_rgba(15,2,6,0.65)] backdrop-blur-xl">{capabilityGroups.map((group) => <div key={group.label} className="rounded-xl border border-gold/10 bg-[#2D0812]/25 p-2"><p className="px-3 pb-2 pt-1 font-mono text-[0.58rem] font-bold uppercase tracking-[0.14em] text-gold">{group.label}</p>{group.links.map(([labelKey, href, descriptionKey]) => <Link key={href} role="menuitem" href={href} className="focus-ring group block rounded-xl p-3 hover:bg-gold/10"><span className="block text-xs font-semibold text-cream group-hover:text-champagne">{t(`${labelKey}.title`)}</span><span className="mt-1 block text-[0.67rem] leading-relaxed text-muted">{t(descriptionKey)}</span></Link>)}</div>)}</motion.div>}
              </AnimatePresence>
            </div>
            <Link href="/engineering" className="link-underline focus-ring rounded-full px-3 py-1.5 font-mono text-[0.66rem] uppercase tracking-[0.12em] text-muted hover:text-champagne">Engineering</Link>
            <Link href="/#architecture" className="link-underline focus-ring rounded-full px-3 py-1.5 font-mono text-[0.66rem] uppercase tracking-[0.12em] text-muted hover:text-champagne">{t("navigation.architecture")}</Link>
            <Link href="/#about" className="link-underline focus-ring rounded-full px-3 py-1.5 font-mono text-[0.66rem] uppercase tracking-[0.12em] text-muted hover:text-champagne">{t("navigation.about")}</Link>
            <Link href="/#contact" className="link-underline focus-ring rounded-full px-3 py-1.5 font-mono text-[0.66rem] uppercase tracking-[0.12em] text-muted hover:text-champagne">{t("navigation.contact")}</Link>
          </nav>

          <div className="flex items-center justify-self-end gap-2"><LanguageToggle /><ThemeToggle /><button type="button" onClick={openConsultation} className="focus-ring hidden items-center gap-1.5 rounded-full bg-gradient-to-r from-gold via-champagne to-gold px-4 py-2 text-xs font-bold text-ink shadow-[0_0_20px_rgba(212,175,55,0.35)] hover:brightness-110 sm:inline-flex"><Sparkles aria-hidden="true" size={13} /><span>{t("navigation.book")}</span></button><button type="button" ref={toggleRef} onClick={() => setOpen((current) => !current)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"} className="focus-ring grid h-9 w-9 place-items-center rounded-full border border-gold/30 bg-[#2D0812] text-champagne md:hidden">{open ? <X aria-hidden="true" size={16} /> : <Menu aria-hidden="true" size={16} />}</button></div>
        </div>
      </header>

      <AnimatePresence>
        {open && <motion.div id="mobile-menu" ref={menuRef} role="dialog" aria-modal="true" aria-label={t("navigation.menu")} initial={reducedMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} exit={reducedMotion ? undefined : { opacity: 0 }} className="fixed inset-0 z-40 flex flex-col justify-between gap-8 overflow-y-auto bg-[#1F050C] px-6 pb-10 pt-28 md:hidden"><div className="flex items-center justify-between border-b border-gold/20 pb-6"><Link href="/" onClick={() => setOpen(false)} className="focus-ring flex items-center gap-1.5"><Image src="/logo-emblem.webp" alt="" width={40} height={40} className="h-10 w-10 object-contain" /><span className="font-display text-base font-bold text-cream">ORTEX</span></Link><div className="flex items-center gap-2"><LanguageToggle /><ThemeToggle /></div></div><nav aria-label={t("navigation.menu")} className="flex flex-col gap-5"><p className="eyebrow">{t("navigation.capabilities")}</p>{capabilityGroups.map((group) => <div key={group.label}><p className="mb-2 font-mono text-[0.6rem] font-bold uppercase tracking-[0.14em] text-gold">{group.label}</p>{group.links.map(([labelKey, href], index) => <motion.a key={href} href={href} onClick={() => setOpen(false)} initial={reducedMotion ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2, delay: index * 0.025 }} className="focus-ring block rounded-xl py-1.5 text-2xl text-cream hover:text-champagne">{t(`${labelKey}.title`)}</motion.a>)}</div>)}<div className="border-t border-gold/15 pt-3"><Link href="/engineering" onClick={() => setOpen(false)} className="display focus-ring block rounded-xl py-1.5 text-3xl text-cream hover:text-champagne">Engineering</Link><Link href="/#architecture" onClick={() => setOpen(false)} className="display focus-ring block rounded-xl py-1.5 text-3xl text-cream hover:text-champagne">{t("navigation.architecture")}</Link><Link href="/#about" onClick={() => setOpen(false)} className="display focus-ring block rounded-xl py-1.5 text-3xl text-cream hover:text-champagne">{t("navigation.about")}</Link><Link href="/#contact" onClick={() => setOpen(false)} className="display focus-ring block rounded-xl py-1.5 text-3xl text-cream hover:text-champagne">{t("navigation.contact")}</Link></div></nav><button type="button" onClick={() => { setOpen(false); openConsultation(); }} className="focus-ring flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold to-champagne px-5 py-4 text-sm font-bold text-ink shadow-[0_0_25px_rgba(212,175,55,0.4)]"><Sparkles aria-hidden="true" size={16} />{t("navigation.book")}</button></motion.div>}
      </AnimatePresence>
    </>
  );
}
