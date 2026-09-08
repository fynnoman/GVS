"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { company } from "@/lib/data";

export default function UnternehmenBand() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative bg-cloud-50 py-24 sm:py-32">
      <div className="mx-auto grid max-w-[1240px] gap-14 px-6 sm:px-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] md:gap-24">
        <div>
          <p className="eyebrow">Unternehmen</p>
          <h2 className="mt-5 font-display font-normal text-[clamp(2rem,4.6vw,3.4rem)] leading-[1.05] tracking-brand-tight text-ink-950">
            Gegründet {company.founded}.<br />
            Vom Portfolio zum Betrieb.
          </h2>

          <dl className="mt-10 space-y-4 border-t border-ink-950/10 pt-6 text-[14.5px]">
            <Item label="Gründungsjahr">{company.founded}</Item>
            <Item label="Gesellschafter">{company.founders.join(" · ")}</Item>
            <Item label="Schwestergesellschaft">
              {company.sisterCompany} (seit {company.sisterCompanyFounded})
            </Item>
            <Item label="Region">{company.region}</Item>
          </dl>
        </div>

        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(1.4rem,2.4vw,2rem)] leading-[1.35] text-ink-900"
          >
            Für die Betreuung eines Großprojektes wurde{" "}
            <span className="text-azure-600">im Jahr 2005</span> die GVS GmbH durch
            die Gesellschafter Nadine Wobido und Patrick Berger gegründet.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-xl text-[15.5px] leading-relaxed text-steel-600"
          >
            Die Kaufleute der Grundstücks- und Wohnungswirtschaft gründeten bereits{" "}
            im Jahr 2000 die Modern home Immobilienservice GmbH. In den folgenden
            Jahren wurde der Immobilienbestand der GVS GmbH weiter ausgebaut und
            eigenes Betreuungspersonal in den Bereichen Technik, Vermietung und
            Verwaltung eingestellt. 2010 wurden die Tätigkeitsfelder Mietverwaltung
            und Sanierungskonzepte aufgenommen.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

function Item({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-baseline justify-between gap-8 border-b border-ink-950/8 pb-4 last:border-b-0">
      <dt className="font-mono text-[11px] uppercase tracking-[0.22em] text-steel-500">
        {label}
      </dt>
      <dd className="text-right text-ink-900">{children}</dd>
    </div>
  );
}
