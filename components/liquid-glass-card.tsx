"use client";

import type { ReactNode } from "react";

type LiquidGlassCardProps = {
  eyebrow: string;
  title: string;
  body: ReactNode;
  consequence: string;
  icon?: ReactNode;
};

export function LiquidGlassCard({ eyebrow, title, body, consequence, icon }: LiquidGlassCardProps) {
  return (
    <article
      tabIndex={0}
      className="liquid-glass-card p-7 sm:p-9"
    >
      <span aria-hidden="true" className="liquid-glass-rim" />

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
    </article>
  );
}
