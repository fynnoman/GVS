"use client";

import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import PlaceholderImage from "../PlaceholderImage";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, 220]);
  const imageScale = useTransform(scrollYProgress, [0, 1], reduced ? [1, 1] : [1, 1.08]);
  const headlineY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, -60]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100dvh] w-full overflow-hidden bg-cloud-50 pt-28 sm:pt-32"
    >
      {/* ambient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 tech-grid" />
        <div className="absolute -top-40 left-1/2 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-radial opacity-90" />
      </div>

      <div className="relative mx-auto grid max-w-[1240px] gap-14 px-6 pb-16 sm:px-8 md:grid-cols-[1.05fr_1fr] md:gap-10 md:pb-24">
        <motion.div style={{ y: headlineY }} className="relative z-10 pt-6 md:pt-16">
          <p className="eyebrow">Digitales Gebäudemanagement</p>
          <h1 className="mt-5 font-display font-normal text-[clamp(2.5rem,7.2vw,5.6rem)] leading-[0.98] tracking-brand-tight text-ink-950">
            Wenn Zukunft
            <br />
            bereits jetzt
            <br />
            <span className="italic text-azure-600">startet.</span>
          </h1>
          <p className="mt-7 max-w-lg text-[16.5px] leading-relaxed text-steel-600">
            Innovatives Immobilienmanagement für den regionalen Raum Saarland und
            Rheinland-Pfalz. Eigene App, 24-Stunden-Support, Gebäudescanning und
            Drohnen-Inspektion — kompromisslos modernst ausgerüstet.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              href="/leistungen/mietverwaltung"
              className="btn inline-flex items-center gap-2 rounded-full bg-ink-950 px-5 py-3 text-[14px] font-medium text-cloud-50 hover:bg-azure-600"
            >
              Mietverwaltung entdecken
              <span aria-hidden>→</span>
            </Link>
            <Link
              href="/kontakt"
              className="btn inline-flex items-center gap-2 rounded-full border border-ink-950/12 bg-white/60 px-5 py-3 text-[14px] font-medium text-ink-900 backdrop-blur hover:bg-white"
            >
              Beratung anfragen
            </Link>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-6 border-t border-ink-950/10 pt-6 max-w-md">
            <Metric label="gegründet" value="2005" />
            <Metric label="Immobilien" value="100+" />
            <Metric label="Support" value="24 h" />
          </div>
        </motion.div>

        {/* Right column: large image parallax */}
        <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[600px]">
          <motion.div
            style={{ y: imageY, scale: imageScale }}
            className="absolute inset-0 rounded-[28px] overflow-hidden ring-1 ring-ink-950/10 shadow-card will-change-transform"
          >
            <PlaceholderImage
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80"
              alt="Modernes Immobilienportfolio — Saarbrücken"
              sizes="(max-width: 768px) 100vw, 55vw"
              quality={78}
              priority
              className="object-cover"
            />
            {/* Floating glass label */}
            <div className="absolute bottom-5 left-5 right-5 sm:left-6 sm:right-auto sm:max-w-[280px]">
              <div className="glass rounded-2xl p-4">
                <p className="text-[11px] uppercase tracking-[0.22em] text-steel-600 font-mono">
                  Live · GVS App
                </p>
                <p className="mt-2 text-[13.5px] leading-snug text-ink-900">
                  Störungsmeldung <span className="text-azure-600">#2148</span> —
                  Heizung Malstatter Markt 7, dispatched vor 3 min.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        aria-hidden
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[11px] tracking-[0.22em] uppercase text-steel-500 font-mono"
      >
        <span className="inline-flex items-center gap-2">
          <span className="inline-block h-[1px] w-6 bg-steel-400" />
          Scrollen
        </span>
      </div>
    </section>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="tnum font-display text-[28px] text-ink-950">{value}</p>
      <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-steel-500 font-mono">
        {label}
      </p>
    </div>
  );
}
