import PageHeader from "@/components/PageHeader";
import ScaleToBackground from "@/components/ScaleToBackground";
import PlaceholderImage from "@/components/PlaceholderImage";
import ContactCTA from "@/components/home/ContactCTA";

export const metadata = {
  title: "Wir über uns",
  description:
    "GVS GmbH — innovatives, dynamisches Unternehmen mit Fokus auf modernste IT- und Cloudlösungen für das gesamte Immobilienmanagement.",
};

const founders = [
  {
    name: "Patrick Berger",
    role: "Geschäftsführer · Leiter technisches Gebäudemanagement",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=80",
    note: "Dozent der Europäischen Immobilienakademie (EIA) im Fachbereich Gebäudetechnik.",
  },
  {
    name: "Nadine Wobido",
    role: "Geschäftsführerin · Leiterin kaufmännische Abteilung",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1200&q=80",
    note: "Kauffrau der Grundstücks- und Wohnungswirtschaft mit über zwei Jahrzehnten Praxis.",
  },
];

export default function WirUeberUns() {
  return (
    <>
      <PageHeader
        eyebrow="Wir über uns"
        title={<>Ein innovatives Unternehmen — mit Fokus auf IT.</>}
        lead="Wir sind ein dynamisches Unternehmen, das seinen Fokus auf modernste IT- und Cloudlösungen für das gesamte Immobilienmanagement gerichtet hat. Was uns antreibt: Substanz erhalten, Reaktionszeiten verkürzen, Transparenz herstellen — Tag für Tag."
      />

      <section className="relative bg-cloud-50 pb-24">
        <div className="mx-auto max-w-[1240px] px-6 sm:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {founders.map((f, i) => (
              <article
                key={f.name}
                className="group overflow-hidden rounded-[24px] border border-ink-950/8 bg-white"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <div className="absolute inset-0 transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]">
                    <PlaceholderImage
                      src={f.image}
                      alt={f.name}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={74}
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/55 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cloud-50/85">
                      {String(i + 1).padStart(2, "0")} · Geschäftsführung
                    </p>
                  </div>
                </div>
                <div className="p-7">
                  <h2 className="font-display text-[30px] leading-tight tracking-brand-tight text-ink-950">
                    {f.name}
                  </h2>
                  <p className="mt-2 text-[14px] text-azure-600">{f.role}</p>
                  <p className="mt-5 text-[15px] leading-relaxed text-steel-600">
                    {f.note}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ScaleToBackground
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2200&q=80"
        eyebrow="Team & Historie"
        headline={
          <>
            Aus Einzelobjekt
            <br />
            <span className="italic text-azure-300">wurde ein Betrieb.</span>
          </>
        }
        paragraph="Für die Betreuung eines Großprojektes wurde 2005 die GVS GmbH gegründet. Der Immobilienbestand wuchs — und mit ihm das Team: Technik, Vermietung und Verwaltung wurden eigene Abteilungen. 2010 kamen Mietverwaltung und Sanierungskonzepte hinzu."
      />

      <section className="relative bg-cloud-50 py-24 sm:py-32">
        <div className="mx-auto max-w-[1240px] px-6 sm:px-8">
          <div className="grid grid-cols-1 gap-14 md:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] md:gap-24">
            <div>
              <p className="eyebrow">Anspruch</p>
              <h2 className="mt-5 font-display font-normal text-[clamp(2rem,4.6vw,3.4rem)] leading-[1.05] tracking-brand-tight text-ink-950">
                Bekannt als innovativster Mietverwalter der Region.
              </h2>
            </div>
            <div className="space-y-6 text-[15.5px] leading-relaxed text-ink-800">
              <p>
                Von der Mietverwaltung einzelner Wohnungen bis zu großen
                Immobilienkomplexen wie dem Gebäude des Ministerium für Bildung und
                Kultur betreut die GVS GmbH seit vielen Jahren mehrere hundert
                Immobilien.
              </p>
              <p>
                Wir stehen für eine kundenorientierte, sachkundige und umfassende
                Objektverwaltung, die stets höchsten Qualitätsansprüchen genügt und
                somit zur Sicherung oder Steigerung Ihrer Immobilienwerte beiträgt.
              </p>
              <p>
                Als Dozent der Europäischen Immobilienakademie (EIA) unterrichtet
                Patrick Berger den Fachbereich Gebäudetechnik. Dieses Wissen fließt
                unmittelbar in die tägliche Arbeit der GVS GmbH ein.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
