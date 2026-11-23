import { Reveal } from "@/components/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { Button } from "@/components/ui/Button";
import { CountUp } from "@/components/ui/CountUp";
import { Media } from "@/components/ui/Media";
import type { Stat } from "@/lib/types";
import { cn } from "@/lib/utils";

export function StatsShowcase({ stats }: { stats: Stat[] }) {
  const [first, second, third] = stats;

  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="eyebrow">Em números</p>
            <SplitReveal
              as="h2"
              text="Mais de 60 anos a trabalhar em Ílhavo."
              className="mt-3 text-3xl md:text-[2.5rem] md:leading-[1.1]"
            />
          </div>
          <Reveal delay={0.1} className="lg:pb-2">
            <p className="text-muted">
              Começámos em 1960 e ainda hoje fazemos o mesmo: vender bons equipamentos, explicar com calma e reparar o que avaria. Muitos clientes conhecem-nos pelo nome, e nós a eles.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/sobre" variant="primary">
                A nossa história
              </Button>
              <Button href="/servicos" variant="outline" arrow>
                Os nossos serviços
              </Button>
            </div>
          </Reveal>
        </div>

        {/* Bento: 60+ tall left · technician + 1000+ centre · 95% + assistance right */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 md:grid-cols-3 md:h-[480px]">
          {first && <StatCard stat={first} className="md:h-full" />}

          <div className="flex flex-col gap-4">
            <Media
              src="/images/manuel-augusto-bento-image1.webp"
              alt="Técnico da Manuel Augusto a reparar uma máquina de lavar loiça"
              tone="steel"
              className="hidden min-h-[150px] flex-1 sm:block"
            />
            {second && <StatCard stat={second} className="min-h-[150px] shrink-0" />}
          </div>

          <div className="flex flex-col gap-4">
            {third && <StatCard stat={third} className="min-h-[150px] shrink-0" />}
            <AssistanceCard className="min-h-[220px] flex-1" />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat, className }: { stat: Stat; className?: string }) {
  return (
    <Reveal
      className={cn(
        "flex flex-col justify-end rounded-2xl bg-brand-soft p-7 md:p-8",
        className,
      )}
    >
      <span className="font-display text-[2.75rem] font-normal leading-none text-ink md:text-6xl">
        <CountUp value={stat.value} />
      </span>
      <span className="mt-3 text-sm font-medium text-ink-soft">
        {stat.label}
      </span>
    </Reveal>
  );
}

/** Assistance value proposition framed over a photo slot. */
function AssistanceCard({ className }: { className?: string }) {
  return (
    <Reveal
      className={cn("group relative overflow-hidden rounded-2xl", className)}
    >
      <Media
        src="/images/manuel-augusto-bento-image2.webp"
        alt="Equipa da Manuel Augusto a entregar e instalar um frigorífico"
        tone="navy"
        rounded={false}
        ring={false}
        monogram=""
        className="absolute inset-0 h-full w-full"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/20" />
      <div className="absolute inset-x-0 bottom-0 p-7 text-white md:p-8">
        <p className="font-display text-lg font-normal leading-snug">
          Equipa própria de assistência técnica, aqui em Ílhavo.
        </p>
        <p className="mt-2 text-sm leading-relaxed text-white/75">
          Os técnicos são da casa. Vemos o que se passa, dizemos quanto custa e só depois reparamos.
        </p>
      </div>
    </Reveal>
  );
}
