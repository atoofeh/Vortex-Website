"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { useLanguage } from "@/components/language-provider";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const { locale } = useLanguage();

  const isLight = theme === "light";
  const label = locale === "ar" ? (isLight ? "التبديل إلى الوضع الداكن" : "التبديل إلى الوضع الفاتح") : (isLight ? "Switch to Dark Mode" : "Switch to Light Mode");

  return (
    <button
      type="button"
      onClick={toggleTheme}
      data-cursor="interactive"
      aria-label={label}
      title={label}
      className={
        "focus-ring relative z-10 grid h-9 w-9 cursor-pointer place-items-center overflow-hidden rounded-full border transition-all duration-400 " +
        (isLight
          ? "border-burgundy/20 bg-amber-50 text-burgundy shadow-sm hover:border-gold hover:bg-white"
          : "border-gold/30 bg-[#2D0812] text-champagne hover:border-gold/60 hover:text-cream shadow-[0_0_12px_rgba(212,175,55,0.2)]") +
        " " +
        className
      }
    >
      <AnimatePresence mode="wait" initial={false}>
        {isLight ? (
          <motion.div
            key="sun"
            initial={{ rotate: -90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: 90, scale: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="flex items-center justify-center"
          >
            <Sun size={16} className="text-amber-600" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ rotate: 90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: -90, scale: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="flex items-center justify-center"
          >
            <Moon size={15} className="text-champagne" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
