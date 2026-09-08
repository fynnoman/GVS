import Image from "next/image";

// The GVS logo already reads "GVS GmbH" — we use it as a self-contained
// wordmark. Height stays constant; width scales with the intrinsic aspect
// ratio (~2.38 : 1).

type Variant = "light" | "dark";

export default function Wordmark({
  variant = "dark",
  size = 34,
}: {
  variant?: Variant;
  size?: number;
}) {
  const width = Math.round(size * (252 / 106));
  return (
    <span
      className="inline-flex select-none items-center"
      style={{ height: size, width }}
      aria-label="GVS GmbH"
    >
      <Image
        src="/images/gvs-logo.jpg"
        alt="GVS GmbH"
        width={252}
        height={106}
        priority
        className={[
          "h-full w-auto rounded-md",
          variant === "light"
            ? "shadow-[0_1px_0_rgba(255,255,255,0.06)_inset]"
            : "shadow-[0_1px_2px_rgba(15,27,39,0.08)]",
        ].join(" ")}
      />
    </span>
  );
}
