"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Wordmark from "./Wordmark";
import { nav } from "@/lib/data";

// Nav shown on scroll ≠ nav shown at top: glass condensates once scrolled.
export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header
        className={[
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled ? "pt-2 sm:pt-3" : "pt-4 sm:pt-6",
        ].join(" ")}
      >
        <div className="mx-auto max-w-[1080px] px-4 sm:px-6">
          <div
            className={[
              "nav-island flex items-center justify-between rounded-full transition-all duration-500",
              scrolled ? "px-3 py-2.5 sm:px-4" : "px-3 py-3 sm:px-4",
            ].join(" ")}

          >
            <Link href="/" className="group flex items-center gap-3 pl-1">
              <Wordmark />
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {nav
                .filter((l) => l.href !== "/")
                .map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="group relative px-3 py-2 text-[13.5px] text-ink-800 hover:text-ink-950 transition-colors"
                  >
                    <span>{l.label}</span>
                    <span className="absolute inset-x-3 bottom-1.5 h-px origin-left scale-x-0 bg-azure-500 transition-transform duration-300 group-hover:scale-x-100" />
                  </Link>
                ))}
              <Link
                href="/kontakt"
                className="btn ml-2 inline-flex items-center gap-2 rounded-full bg-ink-950 px-4 py-2 text-[13px] font-medium text-cloud-50 hover:bg-azure-600"
              >
                Beratung anfragen
                <span aria-hidden className="translate-y-[0.5px]">→</span>
              </Link>
            </nav>

            <button
              type="button"
              aria-label={open ? "Menü schließen" : "Menü öffnen"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-950/10 mr-1"
            >
              <span className="relative block h-3 w-4">
                <span
                  className={[
                    "absolute left-0 top-0 h-px w-4 bg-ink-950 transition-transform duration-300",
                    open ? "translate-y-[6px] rotate-45" : "",
                  ].join(" ")}
                />
                <span
                  className={[
                    "absolute left-0 top-[6px] h-px w-4 bg-ink-950 transition-opacity duration-200",
                    open ? "opacity-0" : "opacity-100",
                  ].join(" ")}
                />
                <span
                  className={[
                    "absolute left-0 top-[12px] h-px w-4 bg-ink-950 transition-transform duration-300",
                    open ? "-translate-y-[6px] -rotate-45" : "",
                  ].join(" ")}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-[#082954]"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex h-full w-full flex-col items-start justify-center px-8 pt-24 pb-10"
            >
              <ul className="w-full space-y-3">
                {nav
                  .filter((l) => l.href !== "/")
                  .map((l, i) => (
                    <motion.li
                      key={l.href}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.05 + i * 0.04 }}
                    >
                      <Link
                        href={l.href}
                        onClick={() => setOpen(false)}
                        className="font-display text-[40px] leading-[1.05] tracking-brand-tight text-white"
                      >
                        {l.label}
                      </Link>
                    </motion.li>
                  ))}
              </ul>
              <div className="mt-10 hairline w-full" />
              <div className="mt-8 space-y-2">
                <a href="tel:+496817094628" className="block text-[15px] text-white">
                  +49 681 7094628
                </a>
                <a href="mailto:info@gvsgmbh.de" className="block text-[15px] text-white">
                  info@gvsgmbh.de
                </a>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
