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
              text="Uma história feita de trabalho, confiança e proximidade."
              className="text-4xl font-semibold leading-[1.05] md:text-[3.25rem]"
            />
            <Reveal delay={0.25}>
              <p className="mt-5 max-w-xl text-muted">
                Desde 1960, ajudamos famílias e empresas a manter o essencial a
                funcionar, com a mesma dedicação de sempre.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/contactos" variant="primary" magnetic>
                  Fala connosco
                </Button>
                <Button href="/servicos" variant="outline" arrow>
                  Os nossos serviços
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="mt-12">
            <Media
              alt="Interior histórico da loja Manuel Augusto & Filhos"
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
              Começámos como uma pequena oficina e, ao longo dos anos, crescemos
              com os nossos clientes, famílias, técnicos, empresas, sempre com a
              mesma filosofia. Fazer bem, com atenção ao detalhe e respeito por
              quem confia em nós.
            </p>
            <p>
              Hoje, continuamos a ser uma empresa familiar. As casas, as
              histórias. E é isso que nos distingue: a relação próxima e o
              compromisso em fazer as coisas como deve ser — com tempo, cuidado e
              seriedade.
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
    title: "A nossa missão",
    text: "Ajudar cada cliente a escolher e manter o que precisa, com honestidade.",
  },
  {
    icon: "appliance",
    title: "A nossa visão",
    text: "Continuar a ser a referência de confiança em Ílhavo e na região.",
  },
  {
    icon: "shield",
    title: "Os nossos valores",
    text: "Proximidade, rigor e compromisso em cada atendimento.",
  },
];

function MissionBand() {
  return (
    <section className="pb-4">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0">
            <Media
              alt="Fachada da loja Manuel Augusto & Filhos, Lda."
              tone="navy"
              rounded={false}
              className="h-full"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-navy/45" />
          </div>

          <div className="relative flex justify-center px-5 py-16 md:justify-start md:px-12 md:py-20">
            <Reveal className="w-full max-w-md rounded-2xl bg-white p-8 shadow-soft md:p-10">
              <h2 className="font-display text-2xl font-semibold md:text-[1.75rem]">
                Décadas de dedicação.
                <br /> Décadas de compromisso.
              </h2>
              <p className="mt-3 text-sm text-muted">
                De geração em geração, os valores mantêm-se firmes: dar mais
                conforto e facilitar a vida dos ilhavenses.
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
