import { Reveal } from "@/components/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { Icon } from "@/components/ui/Icon";
import { Media } from "@/components/ui/Media";
import type { IconName } from "@/lib/types";

const FEATURES: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "advice",
    title: "Diagnóstico honesto",
    text: "Avaliamos antes de avançar e explicamos o que está a falhar — sem surpresas.",
  },
  {
    icon: "shield",
    title: "Garantia de 3 anos",
    text: "Cobertura no equipamento reparado, com peças e mão de obra incluídas.",
  },
];

export function AssistanceShowcase() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-16">
          <div>
            <p className="eyebrow">Assistência técnica</p>
            <SplitReveal
              as="h2"
              text="Reparações acompanhadas do início ao fim."
              className="mt-4 max-w-md text-3xl font-semibold md:text-[2.5rem] md:leading-[1.12]"
            />
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-md text-muted">
                Sabe sempre em que ponto está o seu equipamento — do primeiro
                contacto à entrega, tratamos de tudo com rigor.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="grid gap-7 sm:grid-cols-2 lg:pt-3">
            {FEATURES.map((f) => (
              <div key={f.title}>
                <div className="grid size-10 place-items-center rounded-lg border border-line bg-white text-brand shadow-[0_1px_2px_rgba(13,24,38,0.06)]">
                  <Icon name={f.icon} className="size-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                  {f.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {f.text}
                </p>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal delay={0.05} className="mt-14">
          <ShowcasePanel />
        </Reveal>
      </div>
    </section>
  );
}

function ShowcasePanel() {
  return (
    <Media
      src="/images/manuel-augusto-hero-assistencia.webp"
      alt="Técnico da Manuel Augusto a reparar uma máquina de lavar roupa"
      tone="steel"
      monogram=""
      className="aspect-[4/3] w-full rounded-3xl md:aspect-[21/9]"
      sizes="(max-width: 1280px) 100vw, 1200px"
    />
  );
}
