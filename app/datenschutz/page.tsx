import PageHeader from "@/components/PageHeader";
import { company } from "@/lib/data";

export const metadata = {
  title: "Datenschutz",
  description:
    "Datenschutzerklärung der GVS GmbH — Informationen zur Verarbeitung personenbezogener Daten nach DSGVO.",
};

const sections: { title: string; body: React.ReactNode }[] = [
  {
    title: "Verantwortlicher",
    body: (
      <>
        <p>
          Verantwortlich für die Datenverarbeitung auf dieser Website ist:
        </p>
        <p className="mt-3">
          {company.name}
          <br />
          {company.address.street}
          <br />
          {company.address.zip} {company.address.city}
          <br />
          {company.address.country}
          <br />
          Telefon: {company.phone}
          <br />
          E-Mail:{" "}
          <a
            href={`mailto:${company.emailPrimary}`}
            className="text-azure-600 hover:underline"
          >
            {company.emailPrimary}
          </a>
        </p>
      </>
    ),
  },
  {
    title: "Server-Logfiles",
    body: (
      <p>
        Bei jedem Zugriff auf diese Seite werden technisch bedingt Daten in
        Server-Logfiles gespeichert (IP-Adresse in gekürzter Form, Datum,
        Uhrzeit, aufgerufene URL, Referrer, User-Agent). Diese Daten dienen der
        Sicherheit und Stabilität der Website und werden nach spätestens 30
        Tagen automatisiert gelöscht. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f
        DSGVO.
      </p>
    ),
  },
  {
    title: "Kontaktaufnahme",
    body: (
      <p>
        Wenn Sie uns per Kontaktformular, E-Mail oder Telefon kontaktieren,
        werden Ihre Angaben zur Bearbeitung der Anfrage und für den Fall von
        Anschlussfragen gespeichert. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b
        DSGVO bei einer vertraglichen oder vorvertraglichen Beziehung, sonst
        Art. 6 Abs. 1 lit. f DSGVO.
      </p>
    ),
  },
  {
    title: "GVS App &amp; Ticketsystem",
    body: (
      <p>
        Zur Bewirtschaftung der von uns betreuten Immobilien setzen wir eine
        eigene App sowie eine Ticketplattform ein. Nutzerkonten werden nur nach
        vertraglicher Grundlage angelegt. Die verarbeiteten Daten dienen der
        Erfüllung des Verwaltungsvertrages nach Art. 6 Abs. 1 lit. b DSGVO
        sowie berechtigten Interessen an einer effizienten Verwaltung nach Art.
        6 Abs. 1 lit. f DSGVO.
      </p>
    ),
  },
  {
    title: "Cookies",
    body: (
      <p>
        Diese Website setzt keine Marketing- oder Analyse-Cookies ein.
        Technisch notwendige Speicher (z. B. Session-Cookies bei aktivem Formular)
        werden nur temporär genutzt und nach Ende der Sitzung entfernt.
      </p>
    ),
  },
  {
    title: "Ihre Rechte",
    body: (
      <p>
        Sie haben nach der DSGVO das Recht auf Auskunft (Art. 15),
        Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der
        Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch
        (Art. 21). Zudem steht Ihnen ein Beschwerderecht bei einer
        Aufsichtsbehörde zu — für uns ist das{" "}
        <span className="whitespace-nowrap">
          das Unabhängige Datenschutzzentrum Saarland
        </span>
        .
      </p>
    ),
  },
  {
    title: "Änderungen dieser Erklärung",
    body: (
      <p>
        Wir passen diese Datenschutzerklärung an, wenn sich die Rechtslage oder
        unsere Angebote ändern. Es gilt die jeweils bei Zugriff auf die Website
        veröffentlichte Fassung.
      </p>
    ),
  },
];

export default function Datenschutz() {
  return (
    <>
      <PageHeader
        eyebrow="Rechtliches"
        title={<>Datenschutzerklärung</>}
        lead="Wir behandeln personenbezogene Daten sorgfältig, sparsam und ausschließlich auf einer nachvollziehbaren Rechtsgrundlage."
      />

      <section className="bg-cloud-50 pb-24">
        <div className="mx-auto max-w-[860px] px-6 sm:px-8">
          {sections.map((s, i) => (
            <div
              key={s.title}
              className={
                i === 0
                  ? ""
                  : "mt-8 border-t border-ink-950/10 pt-8"
              }
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-azure-600">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-2 font-display text-[24px] leading-tight tracking-brand-tight text-ink-950">
                {s.title}
              </h2>
              <div className="mt-4 space-y-3 text-[15px] leading-relaxed text-ink-800">
                {s.body}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
