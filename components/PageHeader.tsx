import { ReactNode } from "react";

// Compact hero for interior pages. Ambient tech grid + soft radial glow.
export default function PageHeader({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  children?: ReactNode;
}) {
  return (
    <header className="relative overflow-hidden pt-40 sm:pt-48 pb-16 sm:pb-20 bg-cloud-50">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 tech-grid" />
        <div className="absolute inset-0 bg-radial" />
      </div>
      <div className="relative mx-auto max-w-[1240px] px-6 sm:px-8">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-5 font-display font-normal text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.02] tracking-brand-tight text-ink-950 max-w-[22ch]">
          {title}
        </h1>
        {lead && (
          <p className="mt-6 max-w-2xl text-[16px] sm:text-[17px] leading-relaxed text-steel-600">
            {lead}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </header>
  );
}
