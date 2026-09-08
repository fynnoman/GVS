"use client";

import PlaceholderImage from "./PlaceholderImage";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  MotionValue,
} from "framer-motion";
import { useRef } from "react";

type Props = {
  image: string;
  eyebrow: string;
  headline: React.ReactNode;
  paragraph: string;
  children?: React.ReactNode;
  tone?: "dark" | "light";
};

// Section that starts as a floating rounded card and scales up to become the
// full-bleed background of the next content beat.
export default function ScaleToBackground(props: Props) {
  return (
    <>
      <div className="hidden md:block">
        <DesktopVariant {...props} />
      </div>
      <div className="md:hidden">
        <MobileVariant {...props} />
      </div>
    </>
  );
}

function DesktopVariant({
  image,
  eyebrow,
  headline,
  paragraph,
  children,
  tone = "dark",
}: Props) {
  const wrap = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: wrap,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0.15, 0.55],
    reduced ? [1, 1] : [0.9, 1.55],
  );
  const radius = useTransform(scrollYProgress, [0.15, 0.55], [36, 0]);
  const overlay = useTransform(
    scrollYProgress,
    [0.35, 0.6],
    tone === "dark" ? [0.06, 0.72] : [0.04, 0.32],
  );
  const contentOpacity = useTransform(scrollYProgress, [0.5, 0.65], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.5, 0.7], [40, 0]);

  const textCls = tone === "dark" ? "text-cloud-50" : "text-ink-950";
  const eyebrowCls = tone === "dark" ? "text-azure-300" : "text-azure-600";
  const overlayColor = tone === "dark" ? "bg-ink-950" : "bg-cloud-50";

  return (
    <section ref={wrap} className="relative h-[220vh] w-full">
      <div className="sticky top-0 flex h-[100dvh] w-full items-center justify-center overflow-hidden bg-cloud-50">
        <ScalingImage
          image={image}
          scale={scale}
          radius={radius}
          overlay={overlay}
          overlayColor={overlayColor}
        />

        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className={`relative z-10 mx-auto max-w-[1100px] px-6 md:px-10 text-center ${textCls}`}
        >
          <p className={`eyebrow ${eyebrowCls}`}>{eyebrow}</p>
          <h2 className="mt-6 font-display font-normal text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] tracking-brand-tight">
            {headline}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg leading-relaxed opacity-90">
            {paragraph}
          </p>
          {children && <div className="mt-10">{children}</div>}
        </motion.div>
      </div>
    </section>
  );
}

function ScalingImage({
  image,
  scale,
  radius,
  overlay,
  overlayColor,
}: {
  image: string;
  scale: MotionValue<number>;
  radius: MotionValue<number>;
  overlay: MotionValue<number>;
  overlayColor: string;
}) {
  return (
    <motion.div
      style={{ scale, borderRadius: radius }}
      className="absolute inset-0 md:inset-6 overflow-hidden will-change-transform ring-1 ring-ink-950/10"
    >
      <PlaceholderImage
        src={image}
        alt=""
        sizes="100vw"
        quality={72}
        className="object-cover"
      />
      <motion.div
        style={{ opacity: overlay }}
        className={`absolute inset-0 ${overlayColor}`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950/45 via-transparent to-transparent" />
    </motion.div>
  );
}

function MobileVariant({
  image,
  eyebrow,
  headline,
  paragraph,
  children,
  tone = "dark",
}: Props) {
  const wrap = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: wrap,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    reduced ? [1, 1] : [1.1, 1],
  );

  const textCls = tone === "dark" ? "text-cloud-50" : "text-ink-950";
  const eyebrowCls = tone === "dark" ? "text-azure-300" : "text-azure-600";

  return (
    <section
      ref={wrap}
      className="relative h-[82dvh] min-h-[520px] sm:h-[86dvh] sm:min-h-[560px] w-full overflow-hidden bg-ink-950"
    >
      <motion.div
        style={{ scale }}
        className="absolute inset-0 will-change-transform"
      >
        <PlaceholderImage
          src={image}
          alt=""
          sizes="100vw"
          quality={70}
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/45 to-ink-950/20" />
      <div className="relative z-10 flex h-full items-end p-5 pb-12 sm:p-6 sm:pb-14">
        <div className={textCls}>
          <p className={`eyebrow ${eyebrowCls}`}>{eyebrow}</p>
          <h2 className="mt-3 sm:mt-4 font-display text-[clamp(1.85rem,9vw,3rem)] leading-[1.05] tracking-brand-tight">
            {headline}
          </h2>
          <p className="mt-3 sm:mt-4 max-w-lg text-[14.5px] sm:text-[15px] leading-relaxed opacity-90">
            {paragraph}
          </p>
          {children && <div className="mt-5 sm:mt-6">{children}</div>}
        </div>
      </div>
    </section>
  );
}
