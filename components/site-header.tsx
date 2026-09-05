"use client";

import Image from "next/image";
import Link from "@/components/localized-link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { LanguageToggle } from "@/components/language-toggle";
import { ThemeToggle } from "@/components/theme-toggle";
import { useLanguage } from "@/components/language-provider";
import { marketingServices } from "@/lib/marketing-content";

export function SiteHeader({ onOpenModal }: { onOpenModal?: () => void }) {
  const { locale } = useLanguage();
  const ar = locale === "ar";
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const serviceButton = useRef<HTMLButtonElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const prefix = ar ? "/ar" : "";
  const links = [[`${prefix}/solutions`, ar ? "الحلول" : "Solutions"], [`${prefix}/about`, ar ? "من نحن" : "About"], ["/?contact=1", ar ? "تواصل معنا" : "Contact"]];
  const talk = ar ? "تحدث معنا" : "Let’s talk";
  const close = () => { setOpen(false); setServicesOpen(false); };
  const contact = () => { close(); if (onOpenModal) onOpenModal(); else window.location.href = ar ? "/ar?contact=1" : "/?contact=1"; };

  useEffect(() => {
    if (!servicesOpen) return;
    const outside = (event: PointerEvent) => { if (!dropdownRef.current?.contains(event.target as Node)) setServicesOpen(false); };
    const escape = (event: KeyboardEvent) => { if (event.key === "Escape") { setServicesOpen(false); serviceButton.current?.focus(); } };
    document.addEventListener("pointerdown", outside);
    document.addEventListener("keydown", escape);
    return () => { document.removeEventListener("pointerdown", outside); document.removeEventListener("keydown", escape); };
  }, [servicesOpen]);

  useEffect(() => {
    if (!open) return;
    const previous = document.documentElement.style.overflow;
    const trigger = menuButton.current;
    document.documentElement.style.overflow = "hidden";
    const key = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
      if (event.key !== "Tab") return;
      const items = Array.from(headerRef.current?.querySelectorAll<HTMLElement>("a[href],button") ?? []).filter(el => el.getClientRects().length > 0);
      const first = items[0], last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    };
    const media = window.matchMedia("(min-width: 1024px)");
    const resize = () => { if (media.matches) setOpen(false); };
    document.addEventListener("keydown", key);
    media.addEventListener("change", resize);
    return () => { document.documentElement.style.overflow = previous; document.removeEventListener("keydown", key); media.removeEventListener("change", resize); trigger?.focus(); };
  }, [open]);

  return <header ref={headerRef} className="refresh-header" role={open ? "dialog" : undefined} aria-modal={open || undefined} aria-label={open ? (ar ? "القائمة الرئيسية" : "Main menu") : undefined}>
    <div className="refresh-header-bar">
      <Link href="/" dir="ltr" aria-label={ar ? "VORTEX الرئيسية" : "VORTEX home"} onClick={close} className="focus-ring refresh-brand"><Image src="/logo-emblem.webp" alt="" width={36} height={36} priority /><span>ORTEX</span></Link>
      <nav aria-label={ar ? "التنقل الرئيسي" : "Main navigation"} className="refresh-desktop-nav">
        <div ref={dropdownRef} className="relative" onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setServicesOpen(false); }}><button ref={serviceButton} className="focus-ring refresh-nav-link" aria-expanded={servicesOpen} aria-controls="services-menu" onClick={() => setServicesOpen(!servicesOpen)}>{ar ? "الخدمات" : "Services"}<ChevronDown size={14} className={servicesOpen ? "rotate-180" : ""} /></button>
          {servicesOpen && <div id="services-menu" className="refresh-dropdown">{marketingServices.map(s => <Link key={s.slug} href={`/services/${s.slug}`} onClick={close} className="focus-ring refresh-dropdown-link"><s.icon size={20} aria-hidden="true" /><span>{s[locale].title}</span></Link>)}<Link href="/engineering" onClick={close} className="focus-ring refresh-dropdown-engineering">{ar ? "تعرّف على نهجنا الهندسي" : "Explore our engineering approach"}</Link></div>}
        </div>
        {links.map(([href, label]) => <Link key={href} href={href} className="focus-ring refresh-nav-link" onClick={href === "/?contact=1" && onOpenModal ? event => { event.preventDefault(); contact(); } : close}>{label}</Link>)}
      </nav>
      <div className="flex items-center gap-2"><LanguageToggle /><ThemeToggle /><button onClick={contact} className="focus-ring refresh-primary refresh-header-cta">{talk}</button><button ref={menuButton} aria-label={open ? (ar ? "إغلاق القائمة" : "Close menu") : (ar ? "فتح القائمة" : "Open menu")} aria-expanded={open} aria-controls="mobile-menu" onClick={() => { setOpen(!open); setServicesOpen(false); }} className="focus-ring refresh-menu-toggle">{open ? <X size={20} /> : <Menu size={20} />}</button></div>
    </div>
    {open && <div id="mobile-menu" className="refresh-mobile-menu"><nav aria-label={ar ? "الخدمات" : "Services"}><p className="refresh-label mb-4">{ar ? "الخدمات" : "Services"}</p>{marketingServices.map(s => <Link key={s.slug} href={`/services/${s.slug}`} onClick={close} className="focus-ring refresh-mobile-link">{s[locale].title}</Link>)}<div className="mt-5 border-t border-gold/20 pt-4">{links.map(([href, label]) => <Link key={href} href={href} onClick={href === "/?contact=1" && onOpenModal ? event => { event.preventDefault(); contact(); } : close} className="focus-ring refresh-mobile-link">{label}</Link>)}<Link href="/engineering" onClick={close} className="focus-ring refresh-mobile-link">{ar ? "نهجنا الهندسي" : "Engineering approach"}</Link></div></nav><button className="focus-ring refresh-primary mt-6" onClick={contact}>{talk}</button></div>}
  </header>;
}
