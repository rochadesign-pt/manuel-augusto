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
            <p className="eyebrow">Nossos números</p>
            <SplitReveal
              as="h2"
              text="Décadas de experiência ao serviço de quem confia em nós."
              className="mt-3 text-3xl font-semibold md:text-[2.5rem] md:leading-[1.1]"
            />
          </div>
          <Reveal delay={0.1} className="lg:pb-2">
            <p className="text-muted">
              Desde 1960 que fazemos o que sabemos melhor: ajudar pessoas e
              empresas a manter tudo a funcionar — com segurança, qualidade e
              atenção ao detalhe. O tempo ensinou-nos que a verdadeira excelência
              está na confiança construída dia após dia.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/sobre" variant="primary">
                Conhecer história
              </Button>
              <Button href="/servicos" variant="outline" arrow>
                Os nossos serviços
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-4 md:grid-rows-[190px_190px]">
          {first && (
            <StatCard
              stat={first}
              tone="navy"
              className="md:col-span-1 md:row-span-2"
            />
          )}
          <Media
            alt="Equipa técnica em ação"
            tone="steel"
            className="hidden md:col-span-2 md:block"
          />
          {second && <StatCard stat={second} tone="soft" />}
          {third && (
            <StatCard stat={third} tone="brand" className="md:col-span-1" />
          )}
          <Media
            alt="Assistência ao domicílio"
            tone="steel"
            className="hidden md:block"
          />
          <Media
            alt="Instalação de eletrodomésticos"
            tone="soft"
            className="hidden md:block"
          />
        </div>
      </div>
    </section>
  );
}

function StatCard({
  stat,
  tone,
  className,
}: {
  stat: Stat;
  tone: "navy" | "soft" | "brand";
  className?: string;
}) {
  const styles = {
    navy: "bg-navy text-white",
    soft: "bg-surface-muted text-ink",
    brand: "bg-brand text-white",
  }[tone];

  return (
    <Reveal
      className={cn(
        "flex flex-col justify-center rounded-2xl p-7 md:p-8",
        styles,
        className,
      )}
    >
      <span className="font-display text-4xl font-bold tracking-tight md:text-5xl">
        <CountUp value={stat.value} />
      </span>
      <span
        className={cn(
          "mt-2 text-sm font-medium",
          tone === "soft" ? "text-muted" : "text-white/70",
        )}
      >
        {stat.label}
      </span>
    </Reveal>
  );
}
