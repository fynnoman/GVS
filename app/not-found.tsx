import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative min-h-[70dvh] overflow-hidden bg-cloud-50 pt-40">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 tech-grid" />
      </div>
      <div className="relative mx-auto max-w-[900px] px-6 sm:px-8">
        <p className="eyebrow">404</p>
        <h1 className="mt-5 font-display font-normal text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.02] tracking-brand-tight text-ink-950">
          Diese Seite gibt es nicht — <span className="italic text-azure-600">noch nicht.</span>
        </h1>
        <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-steel-600">
          Prüfen Sie die URL oder kehren Sie zur Startseite zurück. Falls Sie
          hier etwas Bestimmtes erwartet haben, freuen wir uns über einen
          kurzen Hinweis.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/"
            className="btn inline-flex items-center gap-2 rounded-full bg-ink-950 px-5 py-3 text-[14px] font-medium text-cloud-50 hover:bg-azure-600"
          >
            Zur Startseite <span aria-hidden>→</span>
          </Link>
          <Link
            href="/kontakt"
            className="btn inline-flex items-center gap-2 rounded-full border border-ink-950/12 bg-white/70 px-5 py-3 text-[14px] font-medium text-ink-900 hover:bg-white"
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </div>
    </section>
  );
}
