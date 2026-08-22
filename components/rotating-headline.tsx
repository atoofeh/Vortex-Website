"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const PHRASES = [
  "private AI infrastructure",
  "intelligent systems",
  "sovereign agent networks",
  "systems that stay inside",
  "deterministic automation",
];

// Give each phrase enough time to be read before the next one begins.
const HOLD_MS = 4200;

export function RotatingHeadline() {
  const reducedMotion = useReducedMotion();
  const [phraseIndex, setPhraseIndex] = useState(0);
  const phrase = PHRASES[phraseIndex];

  useEffect(() => {
    if (reducedMotion) return;

    let timer: number | undefined;
    const stop = () => {
      if (timer !== undefined) {
        window.clearInterval(timer);
        timer = undefined;
      }
    };
    const start = () => {
      if (document.visibilityState !== "visible") return;
      stop();
      timer = window.setInterval(() => {
        setPhraseIndex((current) => (current + 1) % PHRASES.length);
      }, HOLD_MS);
    };
    const onVisibilityChange = () => {
      if (document.visibilityState === "visible") start();
      else stop();
    };

    start();
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      stop();
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [reducedMotion]);

  return (
    <h1
      aria-label={`We build ${PHRASES.join(", ")}`}
      className="display max-w-5xl text-[clamp(2.75rem,7vw,6.25rem)] font-semibold leading-[1.12] tracking-[-0.03em] text-cream"
    >
      <span aria-hidden="true" className="block mb-1">We build</span>

      {reducedMotion ? (
        <span aria-hidden="true" className="rotating-headline-gradient block pb-2">
          {phrase}
        </span>
      ) : (
        <div className="relative inline-block w-full max-w-full pb-2 align-top overflow-visible">
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={phrase}
              initial={{ opacity: 0, y: 22, filter: "blur(3px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -14, filter: "blur(3px)" }}
              transition={{
                duration: 0.78,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="rotating-headline-gradient block w-fit max-w-full whitespace-normal break-words py-1 [will-change:transform,opacity,filter]"
            >
              {phrase}
            </motion.span>
          </AnimatePresence>

          {/* Underline positioned with generous margin below all letter descenders */}
          <span aria-hidden="true" className="hero-phrase-rule" />
        </div>
      )}
    </h1>
  );
}
