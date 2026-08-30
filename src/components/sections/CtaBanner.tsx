import Image from "next/image";

import { Reveal } from "@/components/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { Button } from "@/components/ui/Button";

interface CtaBannerProps {
  title?: string;
  text?: string;
}

export function CtaBanner({
  title = "Precisa de ajuda a escolher o próximo eletrodoméstico?",
  text = "Fale connosco, teremos todo o gosto em dar-lhe uma resposta rápida, com conhecimento e garantia.",
}: CtaBannerProps) {
  return (
    <section className="relative bg-white pt-20 md:pt-28">
      {/* Navy pedestal at the bottom — seamlessly continues into the footer, so
          the card's lower portion reads as overlapping the dark footer. Kept
          inside this section to avoid cross-stacking-context z-index issues. */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-32 bg-navy md:h-48"
      />
      <div className="container-page relative z-10">
        <Reveal className="relative overflow-hidden rounded-4xl bg-brand">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
          />
          <div className="relative grid items-center gap-6 md:grid-cols-[1.2fr_0.8fr]">
            <div className="p-8 md:p-14 lg:p-16">
              <span className="eyebrow text-white/60">Manuel Augusto &amp; Filhos</span>
              <SplitReveal
                as="h2"
                text={title}
                className="mt-4 max-w-md font-display text-2xl font-semibold text-white md:text-[2.25rem] md:leading-[1.12]"
              />
              <p className="mt-4 max-w-md text-sm leading-relaxed text-white/75">
                {text}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/servicos" variant="light" magnetic>
                  Conhecer serviços
                </Button>
                <Button
                  href="/contactos"
                  variant="ghost"
                  arrowUp
                  className="text-white hover:bg-white/10"
                >
                  Fala com técnico
                </Button>
              </div>
            </div>

            <div className="relative hidden h-full min-h-[360px] md:block">
              <Image
                src="/images/manuel-augusto-eletrodomesticos-cta.webp"
                alt="Pequenos eletrodomésticos — chaleira e máquina de café"
                fill
                sizes="(max-width: 1024px) 40vw, 32vw"
                className="object-contain object-bottom drop-shadow-[0_28px_45px_rgba(0,0,0,0.3)]"
              />
            </div>
          </div>

          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-20 size-64 rounded-full bg-white/10 blur-2xl"
          />
        </Reveal>
      </div>
    </section>
  );
}
