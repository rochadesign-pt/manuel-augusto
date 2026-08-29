import type { Metadata } from "next";

import { Reveal } from "@/components/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { PageClosing } from "@/components/sections/PageClosing";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { StickyFeatures } from "@/components/sections/StickyFeatures";
import { Button } from "@/components/ui/Button";
import { Media } from "@/components/ui/Media";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Da venda à assistência: aconselhamento, eletrodomésticos, material elétrico e assistência técnica especializada.",
  alternates: { canonical: "/servicos" },
};

export default function ServicosPage() {
  return (
    <>
      <section className="pt-28 md:pt-32">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SplitReveal
              as="h1"
              trigger="load"
              text="Da venda à assistência, ajudar é o que nos move."
              className="text-4xl font-semibold leading-[1.05] md:text-[3.25rem]"
            />
            <Reveal load delay={0.25}>
              <p className="mt-5 max-w-md text-muted">
                Dúvidas, informações, damos conta de tudo. A nossa equipa está
                sempre disponível para o assistir e acompanhar.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/contactos" variant="primary" magnetic>
                  Fala connosco
                </Button>
                <Button href="/eletrodomesticos" variant="outline" arrow>
                  Ver produtos
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <Media
              alt="Entrega e montagem de um frigorífico"
              tone="steel"
              zoom
              className="aspect-[4/3] w-full"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            <p className="mt-3 text-sm text-muted">
              Marcas de qualidade para a sua casa — seleção cuidadosa dos
              melhores eletrodomésticos do mercado.
            </p>
          </Reveal>
        </div>
      </section>

      <VoucherBand />

      <StickyFeatures
        title="O seu conforto é o nosso objetivo."
        intro="Seja um novo eletrodoméstico, uma peça elétrica ou até uma reparação, estamos cá para ajudar."
        ctas={[
          { label: "Começar", href: "/contactos", variant: "primary" },
          { label: "Detalhes", href: "/eletrodomesticos", variant: "outline" },
        ]}
        items={[
          {
            title: "Equipamentos que fazem a diferença no seu dia a dia",
            description:
              "Oferecemos uma seleção criteriosa de eletrodomésticos das marcas mais fiáveis. O nosso objetivo é proporcionar conforto e praticidade para a sua casa. Se não souber o melhor, estamos cá para ajudar.",
          },
          {
            title: "Material elétrico para profissionais e empresas",
            description:
              "Produtos da alta qualidade para projetos elétricos. A nossa equipa aconselha os melhores produtos elétricos para os seus projetos, profissionais ou particulares.",
          },
          {
            title: "Manutenção e assistência especializada",
            description:
              "A nossa equipa garante o funcionamento perfeito. Realizamos uma análise completa do equipamento para identificar a causa do problema.",
          },
        ]}
      />

      <ProcessSteps
        title="Simples, do primeiro contacto à entrega."
        intro="Um processo transparente, sem surpresas — sabe sempre o que se segue."
        steps={[
          {
            title: "Contacto",
            text: "Fale connosco por telefone, e-mail ou na loja. Ouvimos o que precisa.",
          },
          {
            title: "Diagnóstico",
            text: "Avaliamos o equipamento ou o projeto e explicamos as opções com clareza.",
          },
          {
            title: "Solução",
            text: "Reparamos, fornecemos ou aconselhamos a escolha certa para si.",
          },
          {
            title: "Entrega & garantia",
            text: "Entregamos, montamos e garantimos o resultado, com acompanhamento.",
          },
        ]}
      />

      <PageClosing />
    </>
  );
}

function VoucherBand() {
  return (
    <section className="relative overflow-hidden bg-surface-muted py-16 md:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-1/2 hidden -translate-y-1/2 select-none font-display text-7xl font-bold text-white/50 lg:block"
      >
        Dê um
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 top-1/2 hidden -translate-y-1/2 select-none font-display text-7xl font-bold text-white/50 lg:block"
      >
        connosco.
      </div>

      <Reveal className="container-page relative">
        <div className="mx-auto max-w-2xl rounded-3xl bg-white p-8 text-center shadow-soft md:p-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand">
            Voucher E-Lar
          </span>
          <h2 className="mt-4 font-display text-2xl font-semibold md:text-[1.9rem] md:leading-tight">
            Somos uma entidade na qual pode trocar o seu voucher E-Lar!
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted">
            Não hesite em melhorar o conforto do seu lar com a comparticipação do
            eLar. Fale connosco sem compromisso.
          </p>
          <div className="mt-6 flex justify-center">
            <Button href="/contactos" variant="primary">
              Entrar em contacto
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
