import Hero from "@/components/home/Hero";
import UnternehmenBand from "@/components/home/UnternehmenBand";
import ScaleToBackground from "@/components/ScaleToBackground";
import ParallaxImage from "@/components/ParallaxImage";
import LeistungenTeaser from "@/components/home/LeistungenTeaser";
import StackGrid from "@/components/home/StackGrid";
import AnspruchPanel from "@/components/home/AnspruchPanel";
import ContactCTA from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />

      <UnternehmenBand />

      <ScaleToBackground
        image="https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=2200&q=80"
        eyebrow="Verwaltung"
        headline={
          <>
            Zufriedenheit und Substanz —
            <br />
            <span className="italic text-azure-300">stabil im Ertrag.</span>
          </>
        }
        paragraph="Viele Menschen suchen heute eine sichere Kapitalanlage oder solide Altersvorsorge. Eine Immobilie ist wohl die beste Form. Zufriedene Mieter und sinnvolle Sanierungsmaßnahmen sind dabei die Schlüsselfunktionen für einen stabilen Ertrag."
      />

      <LeistungenTeaser />

      <ScaleToBackground
        image="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2200&q=80"
        eyebrow="IT-Schnittstellen"
        headline={
          <>
            Ein digitaler Zwilling
            <br />
            <span className="italic text-azure-300">für jede Immobilie.</span>
          </>
        }
        paragraph="Gebäudescanning liefert unseren Verwaltungsmitarbeitern und Handwerkern in Sekunden Zugriff auf relevante Gebäudedaten. Kommunikation läuft über unsere eigene GVS App — für Mieter und Vermieter gleichermaßen."
      />

      <StackGrid />

      <AnspruchPanel />

      <ParallaxImage
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=80"
        alt="Verwaltete Immobilie im Saarland"
        height="h-[68dvh] min-h-[520px]"
        intensity={140}
      >
        <blockquote className="max-w-3xl text-center">
          <p className="font-display font-normal text-[clamp(1.6rem,3vw,2.6rem)] leading-[1.2] text-cloud-50">
            &ldquo;Bekannt als innovativster Mietverwalter im regionalen Raum
            Saarland und Rheinland-Pfalz.&rdquo;
          </p>
          <p className="mt-8 eyebrow" style={{ color: "rgba(247,249,252,0.75)" }}>
            Anspruch der GVS GmbH — seit 2005
          </p>
        </blockquote>
      </ParallaxImage>

      <ContactCTA />
    </>
  );
}
