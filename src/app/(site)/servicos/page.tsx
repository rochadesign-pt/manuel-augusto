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
      <section className="pb-20 pt-28 md:pb-28 md:pt-32">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SplitReveal
              as="h1"
              trigger="load"
              text="Da venda à reparação, tratamos de tudo."
              className="text-4xl font-semibold leading-[1.12] md:text-[3.25rem]"
            />
            <Reveal load delay={0.25}>
              <p className="mt-5 max-w-md text-muted">
                Vendemos, entregamos, instalamos e reparamos. Se tiver uma
                dúvida, pergunte: na loja ou por telefone, respondemos sem
                compromisso.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/contactos" variant="primary" magnetic>
                  Fale connosco
                </Button>
                <Button href="/sobre" variant="outline" arrow>
                  Conhecer a empresa
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <Media
              src="/images/manuel-augusto-hero-servicos.webp"
              alt="Equipa da Manuel Augusto a entregar um frigorífico"
              tone="steel"
              zoom
              className="aspect-[4/3] w-full"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            <div className="mt-4">
              <p className="text-sm font-semibold text-ink">
                Marcas de qualidade para a sua casa
              </p>
              <p className="mt-1 text-sm text-muted">
                Escolhidas por quem as instala e as repara todos os dias.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <VoucherBand />

      <StickyFeatures
        title="Tudo na mesma loja."
        intro="Seja um novo eletrodoméstico, uma peça elétrica ou até uma reparação, estamos cá para ajudar."
        ctas={[
          { label: "Falar connosco", href: "/contactos", variant: "primary" },
          { label: "Conhecer a empresa", href: "/sobre", variant: "outline" },
        ]}
        items={[
          {
            title: "Eletrodomésticos",
            src: "/images/manuel-augusto-servicos-1.webp",
            description:
              "Trabalhamos com marcas em que confiamos e ajudamos a escolher o modelo certo para a sua casa. Entregamos e montamos.",
          },
          {
            title: "Material elétrico",
            src: "/images/manuel-augusto-material-eletrico-1.webp",
            description:
              "Material de qualidade para instalações elétricas. A nossa equipa aconselha a solução certa para cada projeto, profissional ou particular.",
          },
          {
            title: "Assistência técnica",
            src: "/images/manuel-augusto-tecnico-frigorifico.webp",
            description:
              "Os nossos técnicos reparam eletrodomésticos de várias marcas. Primeiro descobrimos o que está a falhar, depois dizemos quanto custa.",
          },
        ]}
      />

      <ProcessSteps
        title="Simples, do primeiro contacto à entrega."
        intro="Sabe sempre o que vem a seguir e quanto vai pagar."
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
            Aceitamos o voucher E-Lar.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted">
            Se recebeu o voucher do programa E-Lar, pode usá-lo cá na loja. Explicamos como funciona e ajudamos a escolher o equipamento.
          </p>
          <div className="mt-6 flex justify-center">
            <Button href="/contactos" variant="primary">
              Fale connosco
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
