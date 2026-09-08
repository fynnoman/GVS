import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "GVS GmbH · Digitales Gebäudemanagement · Saarbrücken",
    template: "%s · GVS GmbH",
  },
  description:
    "Innovative Mietverwaltung im Saarland und in Rheinland-Pfalz. Eigene App, 24 h Support, Gebäudescanning, Drohnen-Inspektion — modernstes Immobilienmanagement der GVS GmbH.",
  metadataBase: new URL("https://www.gvsgmbh.de"),
  openGraph: {
    title: "GVS GmbH — Digitales Gebäudemanagement",
    description:
      "Wenn Zukunft bereits jetzt startet. Digitales Gebäudemanagement der GVS GmbH aus Saarbrücken.",
    type: "website",
    locale: "de_DE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="de"
      className={`${inter.variable} ${serif.variable} ${mono.variable}`}
    >
      <body className="bg-cloud-50 text-ink-950 antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
