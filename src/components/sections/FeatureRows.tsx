import type { Image as SanityImage } from "sanity";

import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/Button";
import { Media } from "@/components/ui/Media";
import { cn } from "@/lib/utils";

export interface FeatureRow {
  eyebrow?: string;
  title: string;
  description: string;
  bullets?: string[];
  image?: SanityImage;
  ctas?: { label: string; href: string; variant?: "primary" | "outline" }[];
}

interface FeatureRowsProps {
  heading?: { title: string; ctas?: FeatureRow["ctas"] };
  rows: FeatureRow[];
}

export function FeatureRows({ heading, rows }: FeatureRowsProps) {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        {heading && (
          <div className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <Reveal>
              <h2 className="max-w-md text-3xl font-semibold md:text-[2.5rem] md:leading-[1.1]">
                {heading.title}
              </h2>
            </Reveal>
            {heading.ctas && (
              <Reveal delay={0.1} className="flex gap-3">
                {heading.ctas.map((c) => (
                  <Button key={c.label} href={c.href} variant={c.variant ?? "outline"} arrow>
                    {c.label}
                  </Button>
                ))}
              </Reveal>
            )}
          </div>
        )}

        <div className="flex flex-col gap-16 md:gap-24">
          {rows.map((row, i) => {
            const flip = i % 2 === 1;
            return (
              <div
                key={row.title}
                className="grid items-center gap-8 md:grid-cols-2 md:gap-14"
              >
                <Reveal
                  className={cn(flip && "md:order-2")}
                  y={20}
                >
                  <Media
                    image={row.image}
                    alt={row.title}
                    tone={flip ? "soft" : "steel"}
                    className="aspect-[4/3] w-full"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </Reveal>

                <Reveal className={cn(flip && "md:order-1")} delay={0.08}>
                  {row.eyebrow && <p className="eyebrow">{row.eyebrow}</p>}
                  <h3 className="mt-3 font-display text-2xl font-semibold text-ink md:text-[1.75rem]">
                    {row.title}
                  </h3>
                  <p className="mt-4 text-muted">{row.description}</p>

                  {row.bullets && (
                    <ul className="mt-6 space-y-3">
                      {row.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-3 text-sm text-ink-soft">
                          <Check />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}

                  {row.ctas && (
                    <div className="mt-8 flex flex-wrap gap-3">
                      {row.ctas.map((c) => (
                        <Button
                          key={c.label}
                          href={c.href}
                          variant={c.variant ?? "primary"}
                          arrow={c.variant === "outline"}
                        >
                          {c.label}
                        </Button>
                      ))}
                    </div>
                  )}
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Check() {
  return (
    <span className="grid size-6 shrink-0 place-items-center rounded-md bg-brand-soft text-brand">
      <svg viewBox="0 0 16 16" className="size-3.5" fill="none" aria-hidden>
        <path
          d="m3.5 8.5 3 3 6-7"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
