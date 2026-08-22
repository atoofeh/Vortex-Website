"use client";

import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import type { PointerEvent, ReactNode } from "react";
import { useEffect, useState } from "react";

type LiquidGlassCardProps = {
  eyebrow: string;
  title: string;
  body: ReactNode;
  consequence: string;
  icon?: ReactNode;
};

const MAX_TILT = 6;

export function LiquidGlassCard({ eyebrow, title, body, consequence, icon }: LiquidGlassCardProps) {
  const reducedMotion = useReducedMotion();
  const [canHover, setCanHover] = useState(false);
  const cardX = useMotionValue(0);
  const cardY = useMotionValue(0);
  const rotateX = useSpring(0, { stiffness: 150, damping: 15 });
  const rotateY = useSpring(0, { stiffness: 150, damping: 15 });
  const specularOpacity = useSpring(0, { stiffness: 220, damping: 30 });
  const specular = useMotionTemplate`radial-gradient(circle 320px at ${cardX}px ${cardY}px, rgba(255,243,209,0.22), rgba(212,175,55,0.10) 40%, transparent 70%)`;

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    const sync = () => setCanHover(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (!canHover || reducedMotion || event.pointerType !== "mouse") return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    const normalizedX = x / bounds.width - 0.5;
    const normalizedY = y / bounds.height - 0.5;

    cardX.set(x);
    cardY.set(y);
    // The negated Y axis makes the glass lean toward the cursor. The six
    // degree cap keeps the panel precise and enterprise-grade rather than toy-like.
    rotateX.set(Math.max(-MAX_TILT, Math.min(MAX_TILT, -normalizedY * MAX_TILT * 2)));
    rotateY.set(Math.max(-MAX_TILT, Math.min(MAX_TILT, normalizedX * MAX_TILT * 2)));
  };

  const handlePointerEnter = (event: PointerEvent<HTMLElement>) => {
    if (!canHover || reducedMotion || event.pointerType !== "mouse") return;
    specularOpacity.set(1);
  };

  const handlePointerLeave = () => {
    if (!canHover || reducedMotion) return;
    rotateX.set(0);
    rotateY.set(0);
    specularOpacity.set(0);
    // Push the light off-card so the next hover starts cleanly at the cursor.
    cardX.set(-400);
    cardY.set(-400);
  };

  return (
    <motion.article
      tabIndex={0}
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      style={{ rotateX, rotateY }}
      whileHover={canHover && !reducedMotion ? { y: -6 } : undefined}
      className="liquid-glass-card p-7 sm:p-9"
    >
      <span aria-hidden="true" className="liquid-glass-rim" />
      <motion.span
        aria-hidden="true"
        className="liquid-glass-specular"
        style={{ background: specular, opacity: specularOpacity }}
      />

      <div className="liquid-glass-content">
        <div className="liquid-glass-topline">
          <p className="liquid-glass-eyebrow">{eyebrow}</p>
          {icon ? <span aria-hidden="true" className="liquid-glass-icon">{icon}</span> : null}
        </div>
        <h3 className="liquid-glass-title">{title}</h3>
        <div className="liquid-glass-body">{body}</div>

        <div className="liquid-glass-consequence">
          <span className="liquid-glass-consequence-label">Business consequence</span>
          <p>{consequence}</p>
        </div>
      </div>
    </motion.article>
  );
}
