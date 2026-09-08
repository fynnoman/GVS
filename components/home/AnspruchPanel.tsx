"use client";

import { pillars } from "@/lib/data";
import { StickyPanel, RevealItem } from "../StickyReveal";

export default function AnspruchPanel() {
  return (
    <StickyPanel
      eyebrow="Unser Anspruch"
      title="Für Ihre Immobilien."
      intro="Kundenorientierte, sachkundige und umfassende Objektverwaltung, die höchsten Qualitätsansprüchen genügt und zur Sicherung oder Steigerung Ihrer Immobilienwerte beiträgt."
    >
      <ul className="divide-y divide-ink-950/10 border-y border-ink-950/10">
        {pillars.map((p, i) => (
          <li key={p.tag}>
            <RevealItem delay={i * 0.03}>
              <div className="grid grid-cols-[auto_1fr] gap-6 py-6 sm:py-7">
                <div className="pt-1 min-w-[140px] sm:min-w-[180px]">
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-azure-600">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-2 font-display text-[22px] leading-tight text-ink-950">
                    {p.tag}
                  </p>
                </div>
                <p className="text-[15.5px] leading-relaxed text-ink-800">
                  {p.text}
                </p>
              </div>
            </RevealItem>
          </li>
        ))}
      </ul>
    </StickyPanel>
  );
}
