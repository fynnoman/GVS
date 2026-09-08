import PageHeader from "@/components/PageHeader";
import ContactCTA from "@/components/home/ContactCTA";
import { company } from "@/lib/data";

export const metadata = {
  title: "Anfahrt",
  description:
    "So finden Sie zu uns: GVS GmbH, Malstatter Markt 7, 66115 Saarbrücken. Karte, Öffnungszeiten und Wege.",
};

const modes = [
  {
    label: "Öffentlich",
    body:
      "Saarbahn und Bus halten am Malstatter Markt in unmittelbarer Nähe zu unserem Büro.",
  },
  {
    label: "Auto",
    body:
      "Über die A620 Ausfahrt Saarbrücken-Malstatt; Parkmöglichkeiten am Malstatter Markt und in umliegenden Straßen.",
  },
  {
    label: "Barrierefrei",
    body:
      "Zugang ebenerdig. Bitte melden Sie sich vor dem Besuch kurz telefonisch — wir erwarten Sie.",
  },
];

export default function Anfahrt() {
  const address = `${company.address.street}, ${company.address.zip} ${company.address.city}`;
  const mapsSrc = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
  return (
    <>
      <PageHeader
        eyebrow="Anfahrt"
        title={<>Hier finden Sie uns.</>}
        lead={`${company.name} · ${address}. Wir freuen uns über einen Besuch nach vorheriger Terminabsprache.`}
      />

      <section className="relative bg-cloud-50 pb-16">
        <div className="mx-auto max-w-[1240px] px-6 sm:px-8">
          <div className="overflow-hidden rounded-[24px] border border-ink-950/10 bg-white shadow-soft">
            <div className="relative aspect-[16/9] w-full">
              <iframe
                title={`Karte — ${company.name}, ${address}`}
                src={mapsSrc}
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="grid grid-cols-1 divide-y divide-ink-950/8 md:grid-cols-3 md:divide-x md:divide-y-0">
              {modes.map((m) => (
                <div key={m.label} className="p-6 sm:p-7">
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-azure-600">
                    {m.label}
                  </p>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-800">
                    {m.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={`https://www.google.com/maps?q=${encodeURIComponent(address)}`}
              target="_blank"
              rel="noreferrer noopener"
              className="btn inline-flex items-center gap-2 rounded-full bg-ink-950 px-5 py-3 text-[14px] font-medium text-cloud-50 hover:bg-azure-600"
            >
              In Google Maps öffnen <span aria-hidden>↗</span>
            </a>
            <a
              href={`https://www.openstreetmap.org/search?query=${encodeURIComponent(address)}`}
              target="_blank"
              rel="noreferrer noopener"
              className="btn inline-flex items-center gap-2 rounded-full border border-ink-950/12 bg-white/70 px-5 py-3 text-[14px] font-medium text-ink-900 hover:bg-white"
            >
              OpenStreetMap
            </a>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
