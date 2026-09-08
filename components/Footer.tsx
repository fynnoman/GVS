import Link from "next/link";
import Wordmark from "./Wordmark";
import { company } from "@/lib/data";

const cols = [
  {
    title: "Leistungen",
    links: [
      { href: "/leistungen/mietverwaltung", label: "Mietverwaltung" },
      { href: "/leistungen/sanierungskonzepte", label: "Sanierungskonzepte" },
      { href: "/leistungen", label: "Übersicht" },
    ],
  },
  {
    title: "Unternehmen",
    links: [
      { href: "/wir-ueber-uns", label: "Wir über uns" },
      { href: "/portal", label: "Mieter- / Vermieterportal" },
      { href: "/kontakt", label: "Kontakt" },
      { href: "/anfahrt", label: "Anfahrt" },
    ],
  },
  {
    title: "Rechtliches",
    links: [
      { href: "/impressum", label: "Impressum" },
      { href: "/datenschutz", label: "Datenschutz" },
      { href: "/links", label: "Links" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-ink-950 text-cloud-50">
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
        <div className="absolute inset-0 bg-grid bg-gridsm" />
      </div>
      <div className="relative mx-auto max-w-[1240px] px-6 pt-20 pb-10 sm:pt-24 sm:pb-12 sm:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <Wordmark variant="light" />
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-cloud-100/70">
              Digitales Gebäudemanagement seit {company.founded}. Als innovativster
              Mietverwalter im regionalen Raum Saarland und Rheinland-Pfalz betreuen wir
              mehrere hundert Immobilien — vom einzelnen Wohnobjekt bis zum
              Verwaltungsgebäude.
            </p>
            <div className="mt-8 space-y-1.5 text-[14.5px]">
              <p className="text-cloud-100/90">{company.address.street}</p>
              <p className="text-cloud-100/90">
                {company.address.zip} {company.address.city}
              </p>
              <a
                href={company.phoneHref}
                className="mt-3 block text-cloud-50 hover:text-azure-300 transition-colors"
              >
                {company.phone}
              </a>
              <a
                href={`mailto:${company.emailPrimary}`}
                className="block text-cloud-50 hover:text-azure-300 transition-colors"
              >
                {company.emailPrimary}
              </a>
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <p className="eyebrow" style={{ color: "rgba(247,249,252,0.55)" }}>
                {col.title}
              </p>
              <ul className="mt-6 space-y-3">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="group inline-flex items-center gap-2 text-[14.5px] text-cloud-100/80 hover:text-cloud-50 transition-colors"
                    >
                      <span>{l.label}</span>
                      <span
                        aria-hidden
                        className="inline-block translate-x-0 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                      >
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 hairline opacity-40" />

        <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-[12.5px] tracking-[0.14em] uppercase text-cloud-100/50">
            Region {company.region} · Verwaltung seit {company.founded}
          </p>
          <p className="text-[12.5px] text-cloud-100/50">
            © {new Date().getFullYear()} {company.legalForm}. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
