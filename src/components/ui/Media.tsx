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
            background: `linear-gradient(135deg, ${t.from}, ${t.to})`,
          }}
          role="img"
          aria-label={alt}
        >
          <div
            className="absolute inset-0 opacity-[0.12] mix-blend-overlay"
            style={{
              backgroundImage:
                "radial-gradient(circle at 25% 20%, #fff 0, transparent 45%), radial-gradient(circle at 80% 75%, #fff 0, transparent 40%)",
            }}
          />
          <span
            className="absolute inset-0 grid place-items-center font-display text-6xl font-bold tracking-tight md:text-7xl"
            style={{ color: t.fg }}
          >
            {monogram}
          </span>
          {label && (
            <span className="absolute inset-x-0 bottom-0 p-4 text-sm font-medium text-white/85">
              {label}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
