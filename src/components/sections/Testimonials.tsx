import { Reveal } from "@/components/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { Media } from "@/components/ui/Media";
import type { Testimonial } from "@/lib/types";

export function Testimonials({ items }: { items: Testimonial[] }) {
  return (
    <section className="bg-surface-muted py-20 md:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <SplitReveal
            as="h2"
            text="A confiança conquista-se com o tempo."
            className="text-3xl font-semibold md:text-[2.5rem] md:leading-[1.1]"
          />
          <Reveal delay={0.15}>
            <p className="mt-4 text-muted">
              Mais do que clientes, temos relações que duram há décadas. É essa
              proximidade que nos motiva a continuar a fazer bem o que fazemos.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {items.map((t, i) => (
            <Reveal
              key={t.name + i}
              delay={i * 0.08}
              className="flex h-full flex-col rounded-[1.25rem] bg-white p-6 shadow-card ring-1 ring-ink/[0.04] transition-shadow duration-300 hover:shadow-soft"
            >
              <Stars rating={t.rating} />
              <p className="mt-4 flex-1 text-[15px] leading-relaxed text-ink-soft">
                {t.quote}
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                <Media
                  image={t.avatar}
                  alt={t.name}
                  tone="soft"
                  monogram={initials(t.name)}
                  className="size-10 shrink-0 rounded-full"
                />
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-ink">
                    {t.name}
                  </p>
                  {t.role && (
                    <p className="truncate text-xs text-muted">{t.role}</p>
                  )}
                </div>
                {t.date && (
                  <span className="ml-auto whitespace-nowrap text-xs text-muted-2">
                    {t.date}
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} de 5 estrelas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={i < rating ? "size-4 text-brand" : "size-4 text-line-strong"}
          fill="currentColor"
          aria-hidden
        >
          <path d="M10 1.6l2.47 5 5.53.8-4 3.9.94 5.5L10 14.2l-4.94 2.6.94-5.5-4-3.9 5.53-.8L10 1.6Z" />
        </svg>
      ))}
    </div>
  );
}

function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}
