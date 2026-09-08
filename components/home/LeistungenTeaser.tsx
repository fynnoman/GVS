"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import PlaceholderImage from "../PlaceholderImage";
import { leistungen } from "@/lib/data";

export default function LeistungenTeaser() {
  return (
    <section className="relative bg-cloud-50 py-24 sm:py-32">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-8">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">Leistungen</p>
            <h2 className="mt-5 font-display font-normal text-[clamp(2rem,4.8vw,3.5rem)] leading-[1.05] tracking-brand-tight text-ink-950">
              Zwei Kernbereiche.
              <br />
              Vollständig integriert.
            </h2>
          </div>
          <p className="max-w-md text-[15.5px] leading-relaxed text-steel-600">
            Im Gegensatz zu anderen Verwaltungsgesellschaften haben wir uns komplett
            auf die Mietverwaltung spezialisiert und bieten keine WEG-Verwaltung an.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {leistungen.map((l, i) => (
            <Tile key={l.slug} {...l} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Tile({
  slug,
  kicker,
  title,
  lead,
  image,
  index,
}: {
  slug: string;
  kicker: string;
  title: string;
  lead: string;
  image: string;
  index: number;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.a
      ref={ref}
      href={`/leistungen/${slug}`}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group relative block overflow-hidden rounded-[24px] border border-ink-950/8 bg-white"
    >
      <div className="relative aspect-[16/11] w-full overflow-hidden">
        <div className="absolute inset-0 transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]">
          <PlaceholderImage
            src={image}
            alt={title}
            sizes="(max-width: 768px) 100vw, 45vw"
            quality={74}
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-ink-950/10 to-transparent" />
        <div className="absolute left-5 top-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cloud-50/85">
            {kicker}
          </p>
        </div>
      </div>
      <div className="flex items-start justify-between gap-6 p-6 sm:p-7">
        <div>
          <h3 className="font-display text-[28px] leading-tight tracking-brand-tight text-ink-950">
            {title}
          </h3>
          <p className="mt-3 max-w-md text-[14.5px] leading-relaxed text-steel-600">
            {lead}
          </p>
        </div>
        <span
          aria-hidden
          className="mt-2 inline-flex h-10 w-10 flex-none items-center justify-center rounded-full border border-ink-950/10 text-ink-900 transition-transform duration-300 group-hover:translate-x-1 group-hover:border-azure-500 group-hover:text-azure-600"
        >
          →
        </span>
      </div>
    </motion.a>
  );
}
