"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLanguage } from "@/components/language-provider";

export function DeploymentRotator() {
  const { copy, t } = useLanguage();
  const reducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const deployments = copy.hero.deployments;

  useEffect(() => {
    if (reducedMotion || deployments.length < 2) return;
    const timer = window.setInterval(() => setIndex((current) => (current + 1) % deployments.length), 3200);
    return () => window.clearInterval(timer);
  }, [deployments.length, reducedMotion]);

  return (
    <div className="mt-8 flex items-center gap-3 font-mono text-[0.66rem] uppercase tracking-[0.14em] text-muted" aria-live="polite">
      <span className="h-px w-8 bg-gold/60" aria-hidden="true" />
      <span>{t("hero.rotatorLabel")} {"//"}</span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={deployments[index]}
          initial={reducedMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reducedMotion ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: 0.28 }}
          className="text-gold"
        >
          {deployments[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
