import PageHeader from "@/components/PageHeader";
import ParallaxImage from "@/components/ParallaxImage";
import ContactCTA from "@/components/home/ContactCTA";
import { StickyPanel, RevealItem } from "@/components/StickyReveal";
import { mietverwaltungLeistungen } from "@/lib/data";

export const metadata = {
  title: "Mietverwaltung",
  description:
    "Vollständige Mietverwaltung durch die GVS GmbH — vom Mieterservice über Betriebskostenabrechnung bis zur Instandhaltungsplanung.",
};

export default function Mietverwaltung() {
  return (
    <>
      <PageHeader
        eyebrow="Leistungen · Mietverwaltung"
        title={<>Werterhalt als Beruf. Nicht als Nebeneffekt.</>}
        lead="Mit Einfühlungsvermögen, Verhandlungsgeschick und Durchsetzungsvermögen kümmern wir uns um die kaufmännischen und technischen Aufgaben — Abrechnungen, Instandsetzungen, Versicherungsfälle — genauso wie um die zwischenmenschlichen Belange: Mieterauswahl, behördliche Aspekte, Einhaltung von Rechtsvorschriften."
      />

      <section className="relative bg-cloud-50 pb-16 pt-4 sm:pt-8">
        <div className="mx-auto max-w-[1240px] px-6 sm:px-8">
          <div className="grid grid-cols-1 gap-10 border-y border-ink-950/10 py-10 md:grid-cols-3 md:gap-16">
            <Feat label="Ihre Entlastung" value="Volle Bandbreite" body="Wir entlasten Eigentümer von den Aufgaben und Pflichten als Vermieter — im Rahmen, den Sie wünschen." />
            <Feat label="Unser Anspruch" value="Werterhaltend" body="Sachkundig, zuverlässig und immer im Einvernehmen mit dem Eigentümer bewirtschaften wir Ihre Immobilie." />
            <Feat label="Team" value="Marktkenntnis" body="Gut ausgebildete, praxiserfahrene Mitarbeiter mit fundierten Kenntnissen der Mietverwaltung." />
          </div>
        </div>
      </section>

      <StickyPanel
        eyebrow="Leistungskatalog"
        title="Alles, was ein Mietverhältnis braucht."
        intro="Angefangen von der korrekten kaufmännischen Abwicklung der Mietsache über die regelmäßige technische Kontrolle des Gebäudezustandes bis hin zur sorgfältigen Auswahl des optimalen Mieters."
      >
        <ul className="divide-y divide-ink-950/10 border-y border-ink-950/10">
          {mietverwaltungLeistungen.map((item, i) => (
            <li key={item}>
              <RevealItem delay={Math.min(i * 0.015, 0.4)}>
                <div className="grid grid-cols-[auto_1fr] items-baseline gap-6 py-4">
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-azure-600 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[15.5px] leading-relaxed text-ink-800">{item}</p>
                </div>
              </RevealItem>
            </li>
          ))}
        </ul>
      </StickyPanel>

      <ParallaxImage
        src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2200&q=80"
        alt="Verwaltete Immobilie"
        height="h-[60dvh] min-h-[440px]"
        intensity={120}
      >
        <blockquote className="max-w-3xl text-center">
          <p className="font-display text-[clamp(1.5rem,2.8vw,2.4rem)] leading-[1.2] text-cloud-50">
            &ldquo;Setzen Sie auf einen erfahrenen, fachkundigen und
            verantwortungsbewussten Partner, wenn es um die professionelle
            Verwaltung Ihres Eigentums geht.&rdquo;
          </p>
        </blockquote>
      </ParallaxImage>

      <ContactCTA />
    </>
  );
}

function Feat({ label, value, body }: { label: string; value: string; body: string }) {
  return (
    <div>
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-steel-500">
        {label}
      </p>
      <p className="mt-2 font-display text-[24px] leading-tight text-ink-950">
        {value}
      </p>
      <p className="mt-3 text-[14.5px] leading-relaxed text-steel-600">{body}</p>
    </div>
  );
}
