export const company = {
  name: "GVS GmbH",
  legalForm: "GVS GmbH",
  claim: "Digitales Gebäudemanagement",
  address: {
    street: "Malstatter Markt 7",
    zip: "66115",
    city: "Saarbrücken",
    country: "Deutschland",
  },
  phone: "+49 681 7094628",
  phoneHref: "tel:+496817094628",
  emailPrimary: "info@gvsgmbh.de",
  region: "Saarland · Rheinland-Pfalz",
  founded: 2005,
  founders: ["Nadine Wobido", "Patrick Berger"],
  sisterCompany: "Modern home Immobilienservice GmbH",
  sisterCompanyFounded: 2000,
} as const;

export const insurance = {
  liability: {
    label: "Berufshaftpflicht",
    provider: "Allianz",
    coverage: "10.000.000 €",
  },
  financialLoss: {
    label: "Vermögensschadenhaftpflicht",
    provider: "Allianz",
    coverage: "1.000.000 €",
  },
} as const;

export const nav = [
  { href: "/", label: "Startseite" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/wir-ueber-uns", label: "Wir über uns" },
  { href: "/portal", label: "Portal" },
  { href: "/links", label: "Links" },
  { href: "/kontakt", label: "Kontakt" },
  { href: "/anfahrt", label: "Anfahrt" },
] as const;

export const leistungen = [
  {
    slug: "mietverwaltung",
    kicker: "Kern-Leistung",
    title: "Mietverwaltung",
    lead:
      "Werterhaltende Bewirtschaftung — sachkundig, zuverlässig und stets im Einvernehmen mit dem Eigentümer.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2200&q=80",
  },
  {
    slug: "sanierungskonzepte",
    kicker: "Konzept",
    title: "Sanierungskonzepte",
    lead:
      "Vom Bauzustand zum sinnvollen Investitionsplan: Priorisiert nach Ertrag, Substanz und Mieterzufriedenheit.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2200&q=80",
  },
] as const;

export const pillars = [
  {
    tag: "Regional",
    text:
      "Wir kennen den lokalen Immobilienmarkt im Saarland und in Rheinland-Pfalz — inklusive der besten Partner für Handwerk und Dienstleistung.",
  },
  {
    tag: "Service",
    text:
      "Telefonischer 24-Stunden-Notfallsupport, eigene GVS App für Mieter, Ticketplattform für unsere Dienstleister.",
  },
  {
    tag: "Kompetenz",
    text:
      "Fundiert ausgebildetes Team, laufend geschult in fachlichen, gesetzlichen und technischen Entwicklungen.",
  },
  {
    tag: "Transparenz",
    text:
      "Vertrauen als Basis: sämtliche Aktivitäten der Verwaltung und alle Kosten liegen offen.",
  },
  {
    tag: "Sicherheit",
    text:
      "Berufshaftpflicht bei der Allianz mit einer Deckungssumme von 10.000.000 €.",
  },
  {
    tag: "Haftung",
    text:
      "Vermögensschadenhaftpflicht bei der Allianz mit einer Deckungssumme von 1.000.000 €.",
  },
  {
    tag: "Innovative Technik",
    text:
      "360-Grad-Rundgänge, Gebäudescanning, Immobilienclone, Dachbegutachtung per Drohne — modernstens ausgerüstet.",
  },
] as const;

export const mietverwaltungLeistungen: string[] = [
  "Betreuung der Mieter in allen Belangen des Mietverhältnisses per telefonischem 24-Stunden-Support oder eigener App",
  "Bearbeiten von Beschwerden",
  "Bearbeitung von Schlüsselbestellungen",
  "Abschluss, Änderung und Kündigung von Mietverträgen inkl. Abnahme und Übernahme der Wohnungen",
  "Akquise mit Bonitäts- und Sozialprüfung von Mietinteressenten",
  "Aufsetzen des Mietvertrages",
  "Buchung und Überwachung der Mietzahlungen sowie des gesamten Zahlungsverkehrs",
  "Mietinkasso und Geltendmachung sämtlicher Ansprüche aus den Mietverhältnissen",
  "Anlage und Überwachung der Mietkautionen",
  "Prüfung von Mieterhöhungsmöglichkeiten und Umsetzung vertraglicher wie gesetzlicher Mieterhöhungen",
  "Ermittlung der jährlichen Betriebskosten, Abrechnung mit den Mietern, Anpassung der Vorauszahlungen",
  "Abwicklung des Zahlungsverkehrs und Erfassung aller Zahlungsvorgänge",
  "Abführung von Überschüssen an den Eigentümer",
  "Kontrolle der Objekte",
  "Vergabe und Überwachung aller nötigen Reparaturen",
  "Prüfung des Versicherungsbedarfs, Abschluss und Kündigung von Versicherungsverträgen",
  "Einstellung, Entlassung, Anweisung und Überwachung von Gebäudeservice-Firmen",
  "Organisation und Vergabe von Instandhaltungs- und Instandsetzungsmaßnahmen an Fach- und Handwerksunternehmen",
  "Überwachung, Prüfung und Abnahme von Handwerkerarbeiten",
  "Abschluss erforderlicher Wartungsverträge",
  "Laufende Überwachung des technischen Gebäudezustandes",
  "Mittelfristige Instandhaltungsplanung",
  "Abwicklung von Versicherungsschäden",
  "Verkaufsvorbereitung im Bedarfsfall",
  "Erteilung von Prozessvollmachten an einen Rechtsanwalt für Klagen aus Mietverhältnissen",
  "Übernahme des gesamten Behördenverkehrs für die laufende Verwaltung",
  "Organisation und Beauftragung von Fachleuten zur Ausstellung von Energieausweisen",
];

export const stack = [
  {
    label: "GVS App",
    body:
      "Kommunikationsplattform für Mieter und Vermieter. Störungsmeldung mit einem Tap, statusverfolgt bis zur Erledigung.",
  },
  {
    label: "24 h Support",
    body:
      "Telefonischer Notfallsupport rund um die Uhr — kurze Reaktionszeiten, klare Zuständigkeiten.",
  },
  {
    label: "Ticketplattform",
    body:
      "Handwerker und Dienstleister arbeiten über ein zentrales System. Alles dokumentiert, alles nachvollziehbar.",
  },
  {
    label: "Gebäudescanning",
    body:
      "Ein digitaler Zwilling jeder Immobilie. Verwaltung und Handwerk greifen im Feld auf relevante Gebäudedaten zu.",
  },
  {
    label: "360-Grad-Rundgang",
    body:
      "Vollständige Rundgänge für Besichtigungen, Zustandsdokumentation und Auftragsabsprachen — ohne Anfahrt.",
  },
  {
    label: "Drohnen-Inspektion",
    body:
      "Dachbegutachtung aus der Luft. Schäden werden sichtbar, bevor sie teuer werden.",
  },
] as const;

export const references = [
  "Ministerium für Bildung und Kultur",
  "Mehrere hundert verwaltete Wohnungen",
  "Wohn- und Geschäftshäuser",
  "Denkmalgeschützte Objekte",
  "Immobilienkomplexe",
] as const;
