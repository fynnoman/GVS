import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import PlaceholderImage from "@/components/PlaceholderImage";
import ContactCTA from "@/components/home/ContactCTA";
import { leistungen } from "@/lib/data";

export const metadata = {
  title: "Leistungen — Mietverwaltung & Sanierungskonzepte",
  description:
    "Zwei Kernbereiche der GVS GmbH: Mietverwaltung und Sanierungskonzepte. Vollständig spezialisiert, konsequent digital.",
};

export default function LeistungenIndex() {
  return (
    <>
      <PageHeader
        eyebrow="Leistungen"
        title={<>Verwaltung als Dienstleistung, nicht als Verwaltungsakt.</>}
        lead="Im Gegensatz zu anderen Verwaltungsgesellschaften haben wir uns komplett auf das Segment der Mietverwaltung spezialisiert und bieten keine WEG-Verwaltung an. Ein Objekt im Interesse des Eigentümers zu führen ist die Pflicht jedes Verwalters — wir gehen darüber hinaus und tragen zur langfristigen Werterhaltung Ihres Vermögens bei."
      />

      <section className="bg-cloud-50 pb-24 sm:pb-32">
        <div className="mx-auto max-w-[1240px] px-6 sm:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {leistungen.map((l) => (
              <Link
                key={l.slug}
                href={`/leistungen/${l.slug}`}
                className="group relative block overflow-hidden rounded-[24px] border border-ink-950/8 bg-white"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <div className="absolute inset-0 transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]">
                    <PlaceholderImage
                      src={l.image}
                      alt={l.title}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={72}
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-ink-950/10 to-transparent" />
                  <div className="absolute left-5 top-5">
                    <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cloud-50/85">
                      {l.kicker}
                    </p>
                  </div>
                </div>
                <div className="flex items-start justify-between gap-6 p-6 sm:p-7">
                  <div>
                    <h2 className="font-display text-[30px] leading-tight tracking-brand-tight text-ink-950">
                      {l.title}
                    </h2>
                    <p className="mt-3 max-w-md text-[14.5px] leading-relaxed text-steel-600">
                      {l.lead}
                    </p>
                  </div>
                  <span
                    aria-hidden
                    className="mt-2 inline-flex h-10 w-10 flex-none items-center justify-center rounded-full border border-ink-950/10 text-ink-900 transition-transform duration-300 group-hover:translate-x-1 group-hover:border-azure-500 group-hover:text-azure-600"
                  >
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
