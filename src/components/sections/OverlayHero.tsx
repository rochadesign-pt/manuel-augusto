import { Reveal } from "@/components/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { Parallax } from "@/components/motion/Parallax";
import { Button } from "@/components/ui/Button";
import { Media } from "@/components/ui/Media";

interface OverlayHeroProps {
  title: string;
  subtitle: string;
  tone?: "steel" | "navy";
  primaryLabel?: string;
  primaryHref?: string;
}

export function OverlayHero({
  title,
  subtitle,
  tone = "steel",
  primaryLabel = "Explorar",
  primaryHref = "/contactos",
}: OverlayHeroProps) {
  return (
    <section className="container-page pt-24 md:pt-28">
      <div className="relative overflow-hidden rounded-4xl">
        <div className="absolute inset-0">
          <Parallax className="absolute inset-0" amount={8}>
            <Media
              alt={title}
              tone={tone}
              rounded={false}
              priority
              className="h-full"
              sizes="100vw"
            />
          </Parallax>
          <div className="absolute inset-0 bg-navy/55" />
        </div>

        <div className="relative mx-auto max-w-3xl px-6 py-24 text-center md:py-36">
          <SplitReveal
            as="h1"
            trigger="load"
            text={title}
            className="font-display text-4xl font-semibold text-white md:text-[3.5rem]"
          />
          <Reveal delay={0.2}>
            <p className="mx-auto mt-5 max-w-lg text-white/75">{subtitle}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href={primaryHref} variant="light" magnetic>
                {primaryLabel}
              </Button>
              <Button
                href="/contactos"
                variant="ghost"
                arrowUp
                className="border border-white/30 text-white hover:bg-white/10"
              >
                Contacto
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
