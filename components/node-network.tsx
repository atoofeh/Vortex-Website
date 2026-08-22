export function NodeNetwork({ variant = "section" }: { variant?: "section" | "hero" }) {
  return (
    <div className={`node-network node-network--${variant}`} aria-hidden="true">
      <svg viewBox="0 0 640 920" role="presentation">
        <g className="node-network-lines">
          <path d="M74 112 L228 176 L164 332 L350 286 L510 392 L438 548 L574 690 L404 812" />
          <path d="M228 176 L438 548 L350 286 L404 812 L164 332 L574 690" />
          <path d="M74 112 L164 332 L350 286 L438 548 L404 812" />
          <path d="M228 176 L510 392 L574 690" />
        </g>

        <g className="node-network-traces">
          <path d="M74 112 L228 176 L164 332 L350 286 L510 392 L438 548 L574 690 L404 812" />
          <path d="M228 176 L438 548 L350 286 L404 812" />
          <path d="M74 112 L164 332 L350 286 L438 548 L404 812" />
        </g>

        <g className="node-network-nodes">
          <circle cx="74" cy="112" r="7" />
          <circle cx="228" cy="176" r="5" />
          <circle cx="164" cy="332" r="8" />
          <circle cx="350" cy="286" r="6" />
          <circle cx="510" cy="392" r="5" />
          <circle cx="438" cy="548" r="8" />
          <circle cx="574" cy="690" r="6" />
          <circle cx="404" cy="812" r="7" />
        </g>

        <g className="node-network-halos">
          <circle cx="74" cy="112" r="19" />
          <circle cx="164" cy="332" r="23" />
          <circle cx="438" cy="548" r="22" />
          <circle cx="404" cy="812" r="20" />
        </g>

        {variant === "hero" ? (
          <g className="node-network-labels">
            <text x="40" y="76">LOCAL INFERENCE</text>
            <text x="382" y="260">AGENT MESH // 06</text>
            <text x="450" y="660">SECURE FABRIC</text>
            <text x="270" y="866">ZERO-EGRESS LINK</text>
          </g>
        ) : null}
      </svg>
    </div>
  );
}
