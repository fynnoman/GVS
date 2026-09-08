import PageHeader from "@/components/PageHeader";
import { company } from "@/lib/data";

export const metadata = {
  title: "Impressum",
  description: "Angaben gemäß § 5 TMG — GVS GmbH, Saarbrücken.",
};

export default function Impressum() {
  return (
    <>
      <PageHeader
        eyebrow="Rechtliches"
        title={<>Impressum</>}
        lead="Angaben gemäß § 5 TMG. Sollten Angaben ergänzt oder korrigiert werden müssen, informieren Sie uns bitte kurz."
      />

      <section className="bg-cloud-50 pb-24">
        <div className="mx-auto max-w-[860px] px-6 sm:px-8">
          <div className="prose-legal">
            <Block title="Anschrift">
              <p>{company.name}</p>
              <p>{company.address.street}</p>
              <p>
                {company.address.zip} {company.address.city}
              </p>
              <p>{company.address.country}</p>
            </Block>

            <Block title="Kontakt">
              <p>Telefon: {company.phone}</p>
              <p>
                E-Mail:{" "}
                <a
                  href={`mailto:${company.emailPrimary}`}
                  className="text-azure-600 hover:underline"
                >
                  {company.emailPrimary}
                </a>
              </p>
            </Block>

            <Block title="Vertretungsberechtigt">
              <p>Geschäftsführer: Patrick Berger</p>
              <p>Geschäftsführerin: Nadine Wobido</p>
            </Block>

            <Block title="Register &amp; Umsatzsteuer">
              <p>
                Registergericht und Handelsregisternummer werden nach Freigabe
                durch den Auftraggeber ergänzt.
              </p>
              <p>Umsatzsteuer-Identifikationsnummer nach § 27 a UStG: [wird ergänzt]</p>
            </Block>

            <Block title="Redaktionell verantwortlich">
              <p>Patrick Berger &amp; Nadine Wobido, Anschrift wie oben.</p>
            </Block>

            <Block title="Berufshaftpflicht">
              <p>Versicherer: Allianz Versicherung</p>
              <p>Deckungssumme: 10.000.000 €</p>
              <p>Geltungsbereich: Deutschland</p>
            </Block>

            <Block title="Vermögensschadenhaftpflicht">
              <p>Versicherer: Allianz Versicherung</p>
              <p>Deckungssumme: 1.000.000 €</p>
            </Block>

            <Block title="EU-Streitschlichtung">
              <p>
                Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-azure-600 hover:underline"
                >
                  ec.europa.eu/consumers/odr
                </a>
                . Wir sind weder verpflichtet noch bereit, an einem
                Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </Block>

            <Block title="Haftung für Inhalte">
              <p>
                Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten
                nach den allgemeinen Gesetzen verantwortlich. Wir sind jedoch
                nicht verpflichtet, übermittelte oder gespeicherte fremde
                Informationen zu überwachen oder nach Umständen zu forschen, die
                auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
            </Block>

            <Block title="Haftung für Links">
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf
                deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
                diese fremden Inhalte auch keine Gewähr übernehmen. Für die
                Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
                verantwortlich.
              </p>
            </Block>

            <Block title="Urheberrecht">
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke
                unterliegen dem deutschen Urheberrecht. Vervielfältigung,
                Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb
                der Grenzen des Urheberrechtes bedürfen der schriftlichen
                Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </Block>
          </div>
        </div>
      </section>
    </>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-ink-950/10 pt-6 first:border-t-0 first:pt-0">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-azure-600">
        {title}
      </p>
      <div className="mt-3 space-y-1.5 text-[15px] leading-relaxed text-ink-800">
        {children}
      </div>
      <div className="pb-6" />
    </div>
  );
}
