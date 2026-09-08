import PageHeader from "@/components/PageHeader";
import ScaleToBackground from "@/components/ScaleToBackground";
import ContactCTA from "@/components/home/ContactCTA";
import { StickyPanel, RevealItem } from "@/components/StickyReveal";

export const metadata = {
  title: "Sanierungskonzepte",
  description:
    "Priorisierte Investitionspläne für Bestandsimmobilien: Substanz, Ertrag und Mieterzufriedenheit ausgewogen betrachtet.",
};

const phases = [
  {
    title: "Bestandsaufnahme",
    body:
      "Vollständige Erfassung des Objekts inkl. 360-Grad-Rundgang, Gebäudescan und, wo sinnvoll, Drohnenbegutachtung des Daches.",
  },
  {
    title: "Priorisierung",
    body:
      "Wir gewichten Maßnahmen nach Sicherheit, Substanzerhalt, Ertrag und Mieterzufriedenheit — statt nach Bauchgefühl.",
  },
  {
    title: "Investitionsplan",
    body:
      "Mittelfristige Instandhaltungsplanung mit Zeit- und Kostenrahmen, koordiniert mit Ihrer Zielrendite und Mietstruktur.",
  },
  {
    title: "Vergabe & Bauleitung",
    body:
      "Ausschreibung an verlässliche regionale Fach- und Handwerksbetriebe, Bauleitung über unsere Ticketplattform.",
  },
  {
    title: "Abnahme & Dokumentation",
    body:
      "Prüfung, Abnahme und lückenlose Dokumentation — inkl. Nachweisen für Behörden, Banken und Versicherer.",
  },
  {
    title: "Nachlauf",
    body:
      "Kontrolle der Gewährleistung, Wartungsverträge, Energieausweise und Anpassung der laufenden Verwaltung.",
  },
];

export default function Sanierungskonzepte() {
  return (
    <>
      <PageHeader
        eyebrow="Leistungen · Sanierungskonzepte"
        title={<>Vom Bauzustand zum Investitionsplan.</>}
        lead="Sinnvolle Sanierung ist keine Baustellenreihe — sie ist ein Plan. Wir schlagen die Maßnahmen vor, die Substanz sichern, Rendite stabilisieren und Mieter zufriedenstellen. Und begleiten die Umsetzung bis zur letzten Abnahme."
      />

      <StickyPanel
        eyebrow="Phasen"
        title="Sechs Schritte, ein Rahmen."
        intro="Jede Phase ist definiert, dokumentiert und dem Eigentümer transparent zugänglich — von der Aufnahme bis zur Nachbetreuung."
      >
        <ol className="divide-y divide-ink-950/10 border-y border-ink-950/10">
          {phases.map((p, i) => (
            <li key={p.title}>
              <RevealItem delay={i * 0.04}>
                <div className="grid grid-cols-[auto_1fr] items-baseline gap-6 py-6 sm:py-7">
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-azure-600 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-[22px] leading-tight text-ink-950">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-[15.5px] leading-relaxed text-ink-800">
                      {p.body}
                    </p>
                  </div>
                </div>
              </RevealItem>
            </li>
          ))}
        </ol>
      </StickyPanel>

      <ScaleToBackground
        image="https://images.unsplash.com/photo-1503389152951-9f343605f61e?auto=format&fit=crop&w=2200&q=80"
        eyebrow="Digitale Grundlage"
        headline={
          <>
            Erst scannen,
            <br />
            <span className="italic text-azure-300">dann investieren.</span>
          </>
        }
        paragraph="Ein Gebäudescan ersetzt kein Gespräch — aber er ersetzt das Rätselraten. Wir arbeiten mit einem digitalen Zwilling, den Handwerker und Eigentümer gleichermaßen nutzen: Zustand, Maße und Maßnahmen in einer Ansicht."
      />

      <ContactCTA />
    </>
  );
}
