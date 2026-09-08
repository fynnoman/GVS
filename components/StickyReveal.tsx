"use client";

// Sticky-column two-panel layout — left column stays fixed while right column scrolls.
import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

export function StickyPanel({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <section className="relative">
      <div className="mx-auto grid max-w-[1240px] gap-12 px-6 py-24 sm:px-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] md:gap-20 md:py-32">
        <div className="md:sticky md:top-32 md:h-fit">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mt-5 font-display font-normal text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] tracking-brand-tight text-ink-950">
            {title}
          </h2>
          {intro && (
            <p className="mt-6 max-w-md text-[15.5px] leading-relaxed text-steel-600">
              {intro}
            </p>
          )}
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}

export function RevealItem({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
