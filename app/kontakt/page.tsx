"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import { company } from "@/lib/data";

export default function Kontakt() {
  const [state, setState] = useState<"idle" | "submitting" | "sent">("idle");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    // No backend — simulate submission then show a mailto handoff.
    const form = e.currentTarget;
    const data = new FormData(form);
    const subject = encodeURIComponent(
      `Anfrage von ${data.get("name") || "Kontaktformular"}`
    );
    const body = encodeURIComponent(
      `Name: ${data.get("name") || ""}\n` +
        `E-Mail: ${data.get("email") || ""}\n` +
        `Telefon: ${data.get("phone") || ""}\n` +
        `Objekt / Anliegen: ${data.get("topic") || ""}\n\n` +
        `Nachricht:\n${data.get("message") || ""}`
    );
    setTimeout(() => {
      window.location.href = `mailto:${company.emailPrimary}?subject=${subject}&body=${body}`;
      setState("sent");
    }, 350);
  }

  return (
    <>
      <PageHeader
        eyebrow="Kontakt"
        title={<>Haben Sie Fragen, Wünsche oder Anregungen?</>}
        lead="Bitte nehmen Sie Kontakt mit uns auf, wir helfen Ihnen gerne weiter. Wir melden uns in der Regel innerhalb eines Werktages zurück."
      />

      <section className="relative bg-cloud-50 pb-24 sm:pb-32">
        <div className="mx-auto max-w-[1240px] px-6 sm:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] md:gap-16">
            <aside className="glass rounded-[24px] p-7 md:sticky md:top-32 md:h-fit">
              <p className="eyebrow">Direktkontakt</p>
              <h2 className="mt-4 font-display text-[28px] leading-tight tracking-brand-tight text-ink-950">
                GVS GmbH
              </h2>
              <div className="mt-6 space-y-4 text-[14.5px]">
                <Row label="Adresse">
                  {company.address.street}
                  <br />
                  {company.address.zip} {company.address.city}
                </Row>
                <Row label="Telefon">
                  <a href={company.phoneHref} className="text-ink-900 hover:text-azure-600">
                    {company.phone}
                  </a>
                </Row>
                <Row label="E-Mail">
                  <a
                    href={`mailto:${company.emailPrimary}`}
                    className="text-ink-900 hover:text-azure-600"
                  >
                    {company.emailPrimary}
                  </a>
                </Row>
                <Row label="Region">{company.region}</Row>
              </div>
            </aside>

            <form
              onSubmit={onSubmit}
              className="rounded-[24px] border border-ink-950/10 bg-white p-7 sm:p-9"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Name" name="name" required />
                <Field label="E-Mail" name="email" type="email" required />
                <Field label="Telefon" name="phone" type="tel" />
                <Field label="Objekt / Anliegen" name="topic" />
              </div>
              <div className="mt-5">
                <label className="block">
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-steel-500">
                    Nachricht
                  </span>
                  <textarea
                    name="message"
                    rows={6}
                    required
                    className="mt-2 block w-full rounded-2xl border border-ink-950/10 bg-cloud-50 px-4 py-3 text-[15px] text-ink-950 outline-none transition-colors focus:border-azure-500 focus:bg-white"
                  />
                </label>
              </div>

              <div className="mt-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                <p className="text-[12.5px] leading-relaxed text-steel-500">
                  Mit dem Absenden öffnet sich Ihr Mailprogramm mit einer
                  vorbefüllten Nachricht an {company.emailPrimary}.
                </p>
                <motion.button
                  type="submit"
                  disabled={state === "submitting"}
                  whileTap={{ scale: 0.97 }}
                  className="btn inline-flex items-center gap-2 rounded-full bg-ink-950 px-5 py-3 text-[14px] font-medium text-cloud-50 hover:bg-azure-600 disabled:opacity-70"
                >
                  {state === "submitting" ? "Wird gesendet…" : state === "sent" ? "Weitergeleitet" : "Nachricht senden"}
                  <span aria-hidden>→</span>
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-baseline justify-between gap-6 border-b border-ink-950/8 pb-3 last:border-b-0">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-steel-500">
        {label}
      </p>
      <p className="text-right text-[14.5px] text-ink-900">{children}</p>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-steel-500">
        {label}
        {required && <span aria-hidden className="text-azure-600"> ·</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 block w-full rounded-full border border-ink-950/10 bg-cloud-50 px-4 py-3 text-[15px] text-ink-950 outline-none transition-colors focus:border-azure-500 focus:bg-white"
      />
    </label>
  );
}
