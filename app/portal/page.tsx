import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import PlaceholderImage from "@/components/PlaceholderImage";
import ContactCTA from "@/components/home/ContactCTA";

export const metadata = {
  title: "Mieter- / Vermieterportal",
  description:
    "Zentrale Plattform für Mieter und Vermieter: Störungsmeldung per App, 24 h Support, transparente Kommunikation.",
};

const mieterFeatures = [
  "Störungsmeldung in wenigen Sekunden — mit Foto, Ort und Status",
  "Direkter Draht zum 24-Stunden-Support",
  "Wohnungsdaten, Verträge und Nebenkostenabrechnungen jederzeit einsehbar",
  "Terminabstimmung mit Handwerkern über die App",
];

const vermieterFeatures = [
  "Dashboards über Ihren Bestand — Auslastung, Zahlungseingänge, offene Vorgänge",
  "Zugriff auf digitale Objektakten mit Verträgen, Plänen und Wartungsnachweisen",
  "Freigabeprozesse für Reparaturen und Investitionen mit Kostenübersicht",
  "Monats- und Jahresberichte auf Wunsch als PDF oder ePaper",
];

export default function Portal() {
  return (
    <>
      <PageHeader
        eyebrow="Portal"
        title={<>Ein Zugang. Für beide Seiten.</>}
        lead="Unsere GVS App ist die Kommunikationsplattform für Mieter und Vermieter — verbunden mit unserem Ticketsystem für Handwerker und Dienstleister. Sichtbar wird, was passiert. Kurz werden Wege, die früher lang waren."
      />

      <section className="relative bg-cloud-50 pb-24">
        <div className="mx-auto max-w-[1240px] px-6 sm:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Card
              tag="Mieter"
              title="Alles zu Ihrer Wohnung in einer App."
              image="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1800&q=80"
              features={mieterFeatures}
              cta={{ label: "App-Zugang anfordern", href: "/kontakt" }}
            />
            <Card
              tag="Vermieter"
              title="Ihr Portfolio in einer Ansicht."
              image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1800&q=80"
              features={vermieterFeatures}
              cta={{ label: "Vermieter-Portal anfragen", href: "/kontakt" }}
            />
          </div>

          <div className="glass mt-10 rounded-[24px] p-6 sm:p-8">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div>
                <p className="eyebrow">Login</p>
                <p className="mt-3 max-w-xl text-[15.5px] leading-relaxed text-ink-800">
                  Sie sind bereits Nutzer? Der Portalzugang wird individuell für
                  jedes Objekt eingerichtet. Bitte melden Sie sich telefonisch oder
                  per E-Mail — wir schalten Sie kurzfristig frei.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:+496817094628"
                  className="btn inline-flex items-center gap-2 rounded-full bg-ink-950 px-5 py-3 text-[14px] font-medium text-cloud-50 hover:bg-azure-600"
                >
                  +49 681 7094628
                </a>
                <a
                  href="mailto:info@gvsgmbh.de"
                  className="btn inline-flex items-center gap-2 rounded-full border border-ink-950/12 bg-white/70 px-5 py-3 text-[14px] font-medium text-ink-900 hover:bg-white"
                >
                  info@gvsgmbh.de
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}

function Card({
  tag,
  title,
  image,
  features,
  cta,
}: {
  tag: string;
  title: string;
  image: string;
  features: string[];
  cta: { label: string; href: string };
}) {
  return (
    <article className="group overflow-hidden rounded-[24px] border border-ink-950/8 bg-white">
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <div className="absolute inset-0 transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]">
          <PlaceholderImage
            src={image}
            alt={tag}
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={72}
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-ink-950/10 to-transparent" />
        <div className="absolute left-5 top-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cloud-50/85">
            {tag}
          </p>
        </div>
      </div>
      <div className="p-7">
        <h3 className="font-display text-[28px] leading-tight tracking-brand-tight text-ink-950">
          {title}
        </h3>
        <ul className="mt-6 space-y-3">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-3 text-[14.5px] leading-relaxed text-ink-800">
              <span aria-hidden className="mt-2 inline-block h-[6px] w-[6px] flex-none rounded-full bg-azure-500" />
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <Link
          href={cta.href}
          className="btn mt-8 inline-flex items-center gap-2 rounded-full bg-ink-950 px-5 py-2.5 text-[13.5px] font-medium text-cloud-50 hover:bg-azure-600"
        >
          {cta.label} <span aria-hidden>→</span>
        </Link>
      </div>
    </article>
  );
}
