import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/Button";
import { Media } from "@/components/ui/Media";

interface OverlayHeroProps {
  title: string;
  subtitle: string;
  tone?: "steel" | "navy";
}

export function OverlayHero({ title, subtitle, tone = "steel" }: OverlayHeroProps) {
  return (
    <section className="container-page pt-24 md:pt-28">
      <div className="relative overflow-hidden rounded-3xl">
        <div className="absolute inset-0">
          <Media
            alt={title}
            tone={tone}
            rounded={false}
            priority
            className="h-full"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-navy/55" />
        </div>

        <Reveal className="relative mx-auto max-w-2xl px-6 py-24 text-center md:py-32">
          <h1 className="font-display text-4xl font-semibold leading-[1.08] text-white md:text-[3rem]">
            {title}
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-white/75">{subtitle}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="#contacto" variant="light">
              Explorar
            </Button>
            <Button
              href="#contacto"
              variant="ghost"
              arrow
              className="border border-white/30 text-white hover:bg-white/10"
            >
              Contacto
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
