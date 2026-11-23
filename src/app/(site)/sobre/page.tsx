import type { Metadata } from "next";

import { Reveal } from "@/components/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { PageClosing } from "@/components/sections/PageClosing";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Media } from "@/components/ui/Media";
import type { IconName } from "@/lib/types";

export const metadata: Metadata = {
  title: "Sobre nós",
  description:
    "A Manuel Augusto & Filhos nasceu em Ílhavo nos anos 60. Mais de seis décadas a resolver problemas e a facilitar a vida das pessoas.",
  alternates: { canonical: "/sobre" },
};

export default function SobrePage() {
  return (
    <>
      <section className="pt-28 md:pt-32">
        <div className="container-page">
          <div className="max-w-3xl">
            <SplitReveal
              as="h1"
              trigger="load"
              text="Uma loja de família, em Ílhavo desde 1960."
              className="text-4xl font-semibold leading-[1.12] md:text-[3.25rem]"
            />
            <Reveal load delay={0.25}>
              <p className="mt-5 max-w-xl text-muted">
                Começou com o Manuel Augusto e continuou com os filhos. Vendemos, instalamos e reparamos, como sempre fizemos.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/contactos" variant="primary" magnetic>
                  Fale connosco
                </Button>
                <Button href="/servicos" variant="outline" arrow>
                  Os nossos serviços
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="mt-12">
            <Media
              src="/images/manuel-augusto-loja-1961.webp"
              alt="A fachada da Manuel Augusto & Filhos, Lda. nos primeiros anos"
              imgClassName="object-[50%_6%]"
              tone="steel"
              className="h-72 w-full md:h-[420px]"
              sizes="100vw"
              priority
            />
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <Reveal>
            <h2 className="text-3xl font-semibold md:text-[2.5rem] md:leading-[1.12]">
              Mais de seis décadas de mãos à obra.
            </h2>
            <p className="mt-6 text-lg text-ink-soft">
              A Manuel Augusto & Filhos nasceu em Ílhavo, nos anos 60, de uma
              vontade simples: resolver problemas e facilitar a vida das pessoas.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="space-y-5 text-muted lg:pt-2">
            <p>
              Começámos como uma pequena loja com oficina. Com os anos vieram mais clientes: famílias, eletricistas, empresas da zona. A forma de trabalhar manteve-se: fazer bem, explicar com calma e conhecer quem nos procura.
            </p>
            <p>
              Hoje continuamos a ser uma empresa familiar. Quem liga fala com alguém da casa, e quem entra na loja é atendido por quem conhece os equipamentos.
            </p>
          </Reveal>
        </div>
      </section>

      <MissionBand />

      <PageClosing />
    </>
  );
}

const VALUES: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "advice",
    title: "Dizer a verdade",
    text: "Se não compensa reparar, dizemos. Se um modelo mais barato serve, também.",
  },
  {
    icon: "appliance",
    title: "Estar perto",
    text: "Na Avenida 25 de Abril, de segunda a sábado, e sempre ao telefone.",
  },
  {
    icon: "shield",
    title: "Fazer bem à primeira",
    text: "Entregamos, montamos e reparamos com cuidado, para não ter de voltar.",
  },
];

function MissionBand() {
  return (
    <section className="pb-4">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0">
            <Media
              src="/images/manuel-augusto-loja-ilhavo.webp"
              alt="A loja da Manuel Augusto na Avenida 25 de Abril, em Ílhavo"
              tone="navy"
              rounded={false}
              monogram=""
              className="h-full"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-navy/45" />
          </div>

          <div className="relative flex justify-center px-5 py-16 md:justify-start md:px-12 md:py-20">
            <Reveal className="w-full max-w-md rounded-2xl bg-white p-8 shadow-soft md:p-10">
              <h2 className="font-display text-2xl font-semibold md:text-[1.75rem]">
                O que não mudou.
              </h2>
              <p className="mt-3 text-sm text-muted">
                Passaram mais de 60 anos e as regras da casa continuam as mesmas.
              </p>
              <ul className="mt-7 space-y-5">
                {VALUES.map((v) => (
                  <li key={v.title} className="flex gap-4">
                    <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand">
                      <Icon name={v.icon} className="size-5" />
                    </span>
                    <div>
                      <p className="font-display text-sm font-semibold text-ink">
                        {v.title}
                      </p>
                      <p className="mt-0.5 text-sm text-muted">{v.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
