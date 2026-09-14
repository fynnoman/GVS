"use client";
import dynamic from "next/dynamic";
const Globe = dynamic(() => import("./Globe"), { ssr: false });
export default function Hero() {
  return <section className="globe-hero" aria-label="GVS – Digitales Gebäudemanagement"><h1 className="sr-only">GVS – Digitales Gebäudemanagement</h1><div className="globe-stage"><Globe /></div></section>;
}
