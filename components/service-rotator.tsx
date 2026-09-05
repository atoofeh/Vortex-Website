"use client";

import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";
import { Fragment, useEffect, useState } from "react";
import { useLanguage } from "@/components/language-provider";
import { marketingCopy, marketingServices } from "@/lib/marketing-content";

// Long enough to read a service name once the flip has settled.
const HOLD_MS = 3400;

// The cascade is normalised to this, so "Private AI" and "Automation &
// Integrations" take the same time to land however many pieces they split into.
const CASCADE_MS = 400;

/**
 * Arabic is cursive: splitting a word into characters would render every letter
 * in its isolated form and break the joins. So Latin flips letter by letter and
 * Arabic flips word by word, which keeps each word's shaping intact while the
 * motion still reads as a cascade.
 */
function splitPhrase(phrase: string, byCharacter: boolean) {
  return phrase.split(" ").map(word => (byCharacter ? Array.from(word) : [word]));
}

const phraseVariants: Variants = { initial: {}, animate: {}, exit: {} };

function unitVariants(stagger: number): Variants {
  return {
    initial: { opacity: 0, y: "0.34em", rotateX: -90, filter: "blur(6px)", transformPerspective: 800 },
    animate: (index: number) => ({
      opacity: 1,
      y: "0em",
      rotateX: 0,
      filter: "blur(0px)",
      transformPerspective: 800,
      transition: { duration: 0.55, delay: index * stagger, ease: [0.16, 1, 0.3, 1] },
    }),
    // Exits keep rotating the same way rather than reversing, so a swap reads as
    // one continuous turn rather than a bounce back and forth.
    exit: (index: number) => ({
      opacity: 0,
      y: "-0.3em",
      rotateX: 90,
      filter: "blur(6px)",
      transformPerspective: 800,
      transition: { duration: 0.34, delay: index * stagger * 0.55, ease: [0.55, 0, 1, 0.45] },
    }),
  };
}

export function ServiceRotator() {
  const { locale } = useLanguage();
  const reducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const titles = marketingServices.map(service => service[locale].title);
  const prefix = marketingCopy[locale].buildPrefix;
  const phrase = titles[index];
  const byCharacter = locale !== "ar";

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
      timer = window.setInterval(() => setIndex(current => (current + 1) % titles.length), HOLD_MS);
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
  }, [reducedMotion, titles.length]);

  const words = splitPhrase(phrase, byCharacter);
  const unitCount = words.reduce((total, word) => total + word.length, 0);
  const variants = unitVariants(Math.min(0.032, CASCADE_MS / 1000 / Math.max(unitCount, 1)));
  let unitIndex = 0;

  return (
    <p className="refresh-rotator">
      {/* Assistive tech gets the full list once. Announcing a line that rewrites
          itself every few seconds would interrupt the rest of the hero. */}
      <span className="sr-only">{`${prefix} ${titles.join(locale === "ar" ? "، " : ", ")}`}</span>

      <span aria-hidden="true" className="refresh-rotator-prefix">{prefix}</span>

      {/* Every title is stacked in one grid cell, so the slot is already as wide
          and as tall as the longest name and the copy below it never reflows.
          The sizers are split exactly like the live phrase: inline-block units
          drop the kerning between them, so plain text would measure short. */}
      <span aria-hidden="true" className="refresh-rotator-slot">
        {titles.map(title => (
          <span key={title} className="refresh-rotator-ghost">
            {splitPhrase(title, byCharacter).map((word, wordIndex) => (
              <Fragment key={wordIndex}>
                {wordIndex > 0 ? " " : null}
                <span className="refresh-rotator-word">
                  {word.map((unit, i) => <span key={i} className="refresh-rotator-unit">{unit}</span>)}
                </span>
              </Fragment>
            ))}
          </span>
        ))}

        {reducedMotion ? (
          <span className="refresh-rotator-phrase">{phrase}</span>
        ) : (
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={phrase}
              className="refresh-rotator-phrase"
              variants={phraseVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {words.map((word, wordIndex) => (
                <Fragment key={wordIndex}>
                  {wordIndex > 0 ? " " : null}
                  <span className="refresh-rotator-word">
                    {word.map((unit, i) => (
                      <motion.span key={i} custom={unitIndex++} variants={variants} className="refresh-rotator-unit">
                        {unit}
                      </motion.span>
                    ))}
                  </span>
                </Fragment>
              ))}
            </motion.span>
          </AnimatePresence>
        )}
      </span>
    </p>
  );
}
