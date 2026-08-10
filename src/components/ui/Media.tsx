import Image from "next/image";
import type { Image as SanityImage } from "sanity";

import { urlForImage } from "@/sanity/lib/image";
import { cn } from "@/lib/utils";

type Tone = "brand" | "navy" | "soft" | "steel";

const TONES: Record<Tone, { from: string; to: string; fg: string }> = {
  brand: { from: "#2f6bf6", to: "#1a49bd", fg: "rgba(255,255,255,0.9)" },
  navy: { from: "#16294479", to: "#0f1e33", fg: "rgba(255,255,255,0.85)" },
  soft: { from: "#eef2fc", to: "#dbe4fb", fg: "rgba(38,100,240,0.55)" },
  steel: { from: "#c9d2e0", to: "#9aa8bf", fg: "rgba(255,255,255,0.9)" },
};

interface MediaProps {
  image?: SanityImage;
  src?: string;
  alt: string;
  tone?: Tone;
  label?: string;
  monogram?: string;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
  rounded?: boolean;
  zoom?: boolean;
  ring?: boolean;
}

/**
 * Renders a Sanity/CDN image when available, otherwise a branded duotone
 * placeholder. Every photographic slot in the site flows through here so the
 * client can drop real photos in the Studio and they appear instantly.
 */
export function Media({
  image,
  src,
  alt,
  tone = "soft",
  label,
  monogram = "MA",
  className,
  imgClassName,
  sizes = "100vw",
  priority = false,
  rounded = true,
  zoom = false,
  ring = true,
}: MediaProps) {
  const url = image ? urlForImage(image)?.width(1600).url() : src;
  const t = TONES[tone];

  return (
    <div
      className={cn(
        "group/media relative isolate overflow-hidden bg-surface-muted",
        rounded && "rounded-2xl",
        ring && "ring-1 ring-inset ring-ink/[0.06]",
        className,
      )}
    >
      {url ? (
        <Image
          src={url}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={cn(
            "object-cover",
            zoom &&
              "transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/media:scale-[1.05]",
            imgClassName,
          )}
        />
      ) : (
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(140deg, ${t.from}, ${t.to})`,
          }}
          role="img"
          aria-label={alt}
        >
          {/* soft light */}
          <div
            className="absolute inset-0 opacity-[0.10] mix-blend-overlay"
            style={{
              backgroundImage:
                "radial-gradient(circle at 22% 18%, #fff 0, transparent 45%), radial-gradient(circle at 82% 78%, #fff 0, transparent 42%)",
            }}
          />
          {/* fine dot grid for texture */}
          <div
            className="absolute inset-0 opacity-[0.14]"
            style={{
              backgroundImage:
                "radial-gradient(currentColor 1px, transparent 1px)",
              backgroundSize: "20px 20px",
              color: t.fg,
            }}
          />
          {monogram ? (
            <div className="absolute inset-0 grid place-items-center">
              <div className="flex items-center gap-2 rounded-xl bg-white/10 px-2.5 py-2 ring-1 ring-white/20 backdrop-blur-[2px]">
                <span className="grid size-6 place-items-center rounded-md bg-white/90 font-display text-[11px] font-bold text-ink">
                  {monogram}
                </span>
                {label && (
                  <span className="pr-1 text-[13px] font-medium text-white/80">
                    {label}
                  </span>
                )}
              </div>
            </div>
          ) : (
            label && (
              <span className="absolute inset-x-0 bottom-0 p-4 text-sm font-medium text-white/85">
                {label}
              </span>
            )
          )}
        </div>
      )}
    </div>
  );
}
