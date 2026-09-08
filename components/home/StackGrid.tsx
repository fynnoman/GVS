"use client";

import { stack } from "@/lib/data";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function StackGrid() {
  return (
    <section className="relative bg-cloud-100 py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 tech-grid opacity-70" />

      <div className="relative mx-auto max-w-[1240px] px-6 sm:px-8">
        <div className="max-w-3xl">
          <p className="eyebrow">Stack</p>
          <h2 className="mt-5 font-display font-normal text-[clamp(2rem,4.8vw,3.5rem)] leading-[1.05] tracking-brand-tight text-ink-950">
            Sechs Werkzeuge,
            <br />
            ein Betriebsmodell.
          </h2>
          <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-steel-600">
            Durch höchstes Maß an Technik und neusten Softwarelösungen minimieren wir
            Reaktionszeiten und behalten auch bei großem Bestand die Übersicht.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stack.map((s, i) => (
            <Card key={s.label} label={s.label} body={s.body} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ label, body, index }: { label: string; body: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-2xl border border-ink-950/8 bg-white/70 p-6 backdrop-blur transition-colors hover:bg-white"
      style={{ boxShadow: "0 1px 2px rgba(15,27,39,0.04), 0 12px 32px -16px rgba(15,27,39,0.14)" }}
    >
      <div className="flex items-start justify-between">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-azure-600">
          0{index + 1}
        </p>
        <span
          aria-hidden
          className="inline-flex h-2 w-2 items-center justify-center"
        >
          <span className="h-2 w-2 rounded-full bg-azure-500" />
          <span className="absolute h-2 w-2 animate-ping rounded-full bg-azure-500/40" />
        </span>
      </div>
      <h3 className="mt-6 font-display text-[26px] leading-tight text-ink-950">
        {label}
      </h3>
      <p className="mt-3 text-[14.5px] leading-relaxed text-steel-600">{body}</p>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -bottom-16 h-24 bg-gradient-to-t from-azure-200/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
    </motion.article>
  );
}
