import type { Image as SanityImage } from "sanity";

import { Reveal } from "@/components/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { Button } from "@/components/ui/Button";
import { Media } from "@/components/ui/Media";
import { cn } from "@/lib/utils";

export interface StickyItem {
  title: string;
  description: string;
  image?: SanityImage;
}

interface StickyFeaturesProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  ctas?: { label: string; href: string; variant?: "primary" | "outline" }[];
  items: StickyItem[];
}

/**
 * Sticky-left / scrolling-right feature layout: the heading + CTAs stay pinned
 * while the stacked feature items scroll past on the right.
 */
export function StickyFeatures({
  eyebrow,
  title,
  intro,
  ctas,
  items,
}: StickyFeaturesProps) {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <SplitReveal
            as="h2"
            text={title}
            className={cn(
              "text-3xl font-semibold md:text-[2.5rem] md:leading-[1.1]",
              eyebrow && "mt-3",
            )}
          />
          {intro && (
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-md text-muted">{intro}</p>
            </Reveal>
          )}
          {ctas && (
            <Reveal delay={0.15} className="mt-8 flex flex-wrap gap-3">
              {ctas.map((c) => (
                <Button
                  key={c.label}
                  href={c.href}
                  variant={c.variant ?? "primary"}
                  arrow={c.variant === "outline"}
                >
                  {c.label}
                </Button>
              ))}
            </Reveal>
          )}
        </div>

        <div className="flex flex-col">
          {items.map((item, i) => (
            <Reveal
              key={item.title}
              className={cn(
                "py-10 first:pt-0",
                i > 0 && "border-t border-line",
              )}
            >
              <Media
                image={item.image}
                alt={item.title}
                tone={i % 2 === 0 ? "steel" : "soft"}
                zoom
                className="aspect-[16/10] w-full"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <h3 className="mt-6 font-display text-xl font-semibold text-ink md:text-2xl">
                {item.title}
              </h3>
              <p className="mt-3 text-muted">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
