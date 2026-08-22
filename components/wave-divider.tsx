"use client";

export function WaveDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none relative w-full overflow-hidden"
      style={{
        height: "48px",
        transform: flip ? "scaleY(-1)" : undefined,
      }}
    >
      <svg viewBox="0 0 1440 48" preserveAspectRatio="none" className="h-full w-full opacity-60">
        <path
          d="M0,24 C240,44 480,4 720,24 C960,44 1200,4 1440,24 L1440,48 L0,48 Z"
          fill="#D4AF37"
          opacity="0.08"
        />
        <path
          d="M0,28 C280,12 520,40 760,26 C1000,12 1240,38 1440,28 L1440,48 L0,48 Z"
          fill="#E5C378"
          opacity="0.05"
        />
      </svg>
    </div>
  );
}
