import PageHeader from "@/components/PageHeader";
import ContactCTA from "@/components/home/ContactCTA";

export const metadata = {
  title: "Links",
  description:
    "Ausgewählte Partner, Institutionen und Fachverbände rund um Immobilienmanagement, Gebäudetechnik und Verwaltung.",
};

const groups = [
  {
    title: "Schwestergesellschaft",
    items: [
      {
        label: "Modern home Immobilienservice GmbH",
        href: "https://www.modernhome-immobilien.de",
        note: "Gegründet im Jahr 2000 — der Ursprung unserer Fachkompetenz in Grundstücks- und Wohnungswirtschaft.",
      },
    ],
  },
  {
    title: "Bildung & Verbände",
    items: [
      {
        label: "Europäische Immobilienakademie (EIA)",
        href: "https://www.eia-eu.com",
        note: "Patrick Berger unterrichtet dort den Fachbereich Gebäudetechnik.",
      },
      {
        label: "Deutscher Mieterbund",
        href: "https://www.mieterbund.de",
        note: "Anlaufstelle für rechtliche Fragen rund um das Mietverhältnis.",
      },
    ],
  },
  {
    title: "Behörden & Register",
    items: [
      {
        label: "Landeshauptstadt Saarbrücken",
        href: "https://www.saarbruecken.de",
        note: "Bürgerdienste, Bauamt, Ummeldung, Anwohnerparken.",
      },
      {
        label: "Handwerkskammer des Saarlandes",
        href: "https://www.hwk-saarland.de",
        note: "Betriebssuche und Meisterverzeichnis für qualifizierte Fachbetriebe.",
      },
    ],
  },
  {
    title: "Versicherung",
    items: [
      {
        label: "Allianz Versicherung",
        href: "https://www.allianz.de",
        note: "Berufshaftpflicht mit 10 Mio. € und Vermögensschadenhaftpflicht mit 1 Mio. € Deckungssumme.",
      },
    ],
  },
];

export default function Links() {
  return (
    <>
      <PageHeader
        eyebrow="Links"
        title={<>Starke Partner. Kurze Wege.</>}
        lead="Eine Auswahl an Partnern und Institutionen, mit denen wir zusammenarbeiten oder auf die wir Mieter und Eigentümer regelmäßig verweisen."
      />

      <section className="relative bg-cloud-50 pb-24 sm:pb-32">
        <div className="mx-auto max-w-[1240px] px-6 sm:px-8">
          <div className="space-y-14">
            {groups.map((g) => (
              <div key={g.title}>
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-steel-500">
                  {g.title}
                </p>
                <ul className="mt-6 divide-y divide-ink-950/10 border-y border-ink-950/10">
                  {g.items.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="group grid grid-cols-1 items-baseline gap-3 py-6 md:grid-cols-[minmax(0,1fr)_auto] md:gap-8"
                      >
                        <div>
                          <p className="font-display text-[22px] leading-tight tracking-brand-tight text-ink-950 transition-colors group-hover:text-azure-600">
                            {l.label}
                          </p>
                          <p className="mt-2 max-w-2xl text-[14.5px] leading-relaxed text-steel-600">
                            {l.note}
                          </p>
                        </div>
                        <span
                          aria-hidden
                          className="inline-flex items-center gap-2 text-[13px] text-steel-500 transition-colors group-hover:text-azure-600"
                        >
                          Öffnen ↗
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
