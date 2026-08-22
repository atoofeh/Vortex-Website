"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, Sparkles, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteConfig } from "@/lib/site-content";

export function SiteHeader({ onOpenModal }: { onOpenModal?: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
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
    const media = window.matchMedia("(min-width: 768px)");
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!open) return;
    const toggleEl = toggleRef.current;

    const focusables = (): HTMLElement[] => {
      const items = Array.from(menuRef.current?.querySelectorAll<HTMLElement>("a[href], button") ?? []);
      return toggleEl ? [toggleEl, ...items] : items;
    };

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }
      if (event.key === "Tab") {
        const items = focusables();
        if (!items.length) return;
        const first = items[0];
        const last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    const focusTimer = window.setTimeout(() => {
      menuRef.current?.querySelector<HTMLElement>("a[href], button")?.focus();
    }, 60);

    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      window.clearTimeout(focusTimer);
      toggleEl?.focus();
    };
  }, [open]);

  const chromeClass = scrolled
    ? "max-w-5xl border-gold/35 bg-[#1F050C]/92 px-3.5 py-2 shadow-[0_16px_40px_-15px_rgba(212,175,55,0.25)]"
    : "max-w-6xl border-gold/20 bg-[#1F050C]/75 px-5 py-3 shadow-[0_18px_45px_-20px_rgba(212,175,55,0.18)]";

  return (
    <>
      <header className="fixed inset-x-0 top-3.5 z-50 px-4 sm:top-5">
        <div
          className={
            "mx-auto grid w-full grid-cols-[auto_1fr_auto] items-center gap-3 rounded-full border transition-all duration-150 " +
            chromeClass
          }
        >
          {/* Logo Brand Link */}
          <Link
            href="/"
            data-cursor="interactive"
            aria-label={siteConfig.name + " home"}
            className="focus-ring group flex items-center gap-1.5 rounded-full pr-2"
          >
            <Image
              src="/logo-emblem.webp"
              alt=""
              width={36}
              height={36}
              className={(scrolled ? "h-8 w-8" : "h-9 w-9") + " object-contain transition-transform duration-300 group-hover:scale-105"}
              priority
            />
            <span className="font-display text-sm font-bold tracking-tight text-cream">
              ORTEX
            </span>
          </Link>

          {/* Navigation Links */}
            <nav aria-label="Main navigation" className="site-header-nav hidden items-center gap-1 md:flex">
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={(scrolled ? "px-3" : "px-3.5") + " link-underline focus-ring rounded-full py-1.5 font-mono text-[0.66rem] uppercase tracking-[0.12em] text-muted transition-all hover:text-champagne"}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Header Actions */}
          <div className="flex items-center justify-self-end gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={onOpenModal}
              data-cursor="interactive"
              className={(scrolled ? "px-4 py-2" : "px-5 py-2.5") + " focus-ring hidden items-center gap-1.5 rounded-full bg-gradient-to-r from-gold via-champagne to-gold text-xs font-bold text-ink shadow-[0_0_20px_rgba(212,175,55,0.35)] transition-all hover:brightness-110 sm:inline-flex"}
            >
              <Sparkles size={13} />
              <span>Assessment</span>
            </button>
            <button
              type="button"
              ref={toggleRef}
              onClick={() => setOpen((current) => !current)}
              data-cursor="interactive"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="focus-ring grid h-9 w-9 place-items-center rounded-full border border-gold/30 bg-[#2D0812] text-champagne md:hidden"
            >
              {open ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            ref={menuRef}
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-40 flex flex-col justify-between gap-8 overflow-y-auto overscroll-contain bg-[#1F050C] px-6 pb-10 pt-28 md:hidden"
          >
            <div className="flex items-center justify-between border-b border-gold/20 pb-6">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                data-cursor="interactive"
                aria-label={siteConfig.name + " home"}
                className="focus-ring group flex items-center gap-1.5"
              >
                <Image
                  src="/logo-emblem.webp"
                  alt=""
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-105"
                />
                <span className="font-display text-base font-bold text-cream">
                  ORTEX
                </span>
              </Link>
              <ThemeToggle />
            </div>

            <nav aria-label="Mobile navigation" className="flex flex-col gap-2">
              {siteConfig.nav.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={reducedMotion ? false : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.025 }}
                  className="display focus-ring rounded-xl py-3 text-3xl text-cream hover:text-champagne"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>

            <motion.button
              type="button"
              onClick={() => {
                setOpen(false);
                if (onOpenModal) onOpenModal();
              }}
              initial={reducedMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.12 }}
              className="focus-ring flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold to-champagne px-5 py-4 text-sm font-bold text-ink shadow-[0_0_25px_rgba(212,175,55,0.4)]"
            >
              <Sparkles size={16} />
              {siteConfig.primaryCta}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
