"use client";

import Link from "next/link";
import { company } from "@/lib/data";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-cloud-50 py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 tech-grid opacity-70" />
      <div className="relative mx-auto max-w-[1240px] px-6 sm:px-8">
        <div className="glass mx-auto max-w-[1080px] rounded-[28px] p-8 sm:p-12">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.35fr_1fr] md:items-end md:gap-16">
            <div>
              <p className="eyebrow">Kontakt</p>
              <h2 className="mt-5 font-display font-normal text-[clamp(2rem,4.6vw,3.4rem)] leading-[1.05] tracking-brand-tight text-ink-950">
                Reden wir über
                <br />
                Ihr Objekt.
              </h2>
              <p className="mt-6 max-w-md text-[15.5px] leading-relaxed text-steel-600">
                Ob einzelne Wohnung oder Immobilienkomplex — wir prüfen die Aufgabe,
                schlagen Ihnen ein passendes Betreuungsmodell vor und rechnen
                transparent ab.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/kontakt"
                  className="btn inline-flex items-center gap-2 rounded-full bg-ink-950 px-5 py-3 text-[14px] font-medium text-cloud-50 hover:bg-azure-600"
                >
                  Anfrage senden
                  <span aria-hidden>→</span>
                </Link>
                <a
                  href={company.phoneHref}
                  className="btn inline-flex items-center gap-2 rounded-full border border-ink-950/12 bg-white/60 px-5 py-3 text-[14px] font-medium text-ink-900 hover:bg-white"
                >
                  {company.phone}
                </a>
              </div>
            </div>

            <div className="space-y-4 border-t border-ink-950/10 pt-6 md:border-l md:border-t-0 md:pl-10 md:pt-0">
              <Row label="Anschrift" value={`${company.address.street}, ${company.address.zip} ${company.address.city}`} />
              <Row label="Telefon" value={company.phone} href={company.phoneHref} />
              <Row label="E-Mail" value={company.emailPrimary} href={`mailto:${company.emailPrimary}`} />
              <Row label="Region" value={company.region} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ label, value, href }: { label: string; value: string; href?: string }) {
  return (
    <div className="flex items-baseline justify-between gap-6 border-b border-ink-950/8 pb-4 last:border-b-0">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-steel-500">
        {label}
      </p>
      {href ? (
        <a
          href={href}
          className="text-right text-[15px] text-ink-900 hover:text-azure-600"
        >
          {value}
        </a>
      ) : (
        <p className="text-right text-[15px] text-ink-900">{value}</p>
      )}
    </div>
  );
}
