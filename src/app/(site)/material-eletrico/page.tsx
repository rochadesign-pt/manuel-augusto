import type { Metadata } from "next";

import { FeatureRows } from "@/components/sections/FeatureRows";
import { ImageBand } from "@/components/sections/ImageBand";
import { OverlayHero } from "@/components/sections/OverlayHero";
import { PageClosing } from "@/components/sections/PageClosing";
import { StatementBand } from "@/components/sections/StatementBand";
import { Tagline } from "@/components/sections/Tagline";

export const metadata: Metadata = {
  title: "Distribuição de Material Elétrico",
  description:
    "Componentes elétricos certificados para instalações domésticas, comerciais e industriais — com aconselhamento técnico especializado.",
  alternates: { canonical: "/material-eletrico" },
};

export default function MaterialEletricoPage() {
  return (
    <>
      <OverlayHero
        title="Distribuição de material elétrico"
        subtitle="Fornecemos soluções completas de material elétrico para profissionais e empresas, com qualidade e eficiência em cada entrega."
        tone="navy"
      />

      <StatementBand
        lead="Encontrar o componente certo parece fácil."
        emphasis="Seja numa instalação doméstica ou projeto maior, a diferença entre o certo e o próximo está nos detalhes."
        body="Temos o material. Temos o conhecimento. E estamos aqui para garantir que leva o que é certo, não apenas o que está disponível."
      />

      <FeatureRows
        rows={[
          {
            eyebrow: "Novidades",
            title: "O componente certo está aqui.",
            description:
              "Uma seleção alargada de componentes elétricos certificados para instalações domésticas, comerciais e industriais. Do cabo à tomada, do disjuntor ao quadro, tudo com as especificações certas para cada aplicação.",
            bullets: [
              "Cabos e condutores para todas as aplicações",
              "Disjuntores, interruptores e proteções",
              "Tomadas, fichas e material de instalação",
            ],
            ctas: [
              { label: "Ver mais", href: "/contactos", variant: "primary" },
              { label: "Detalhes", href: "/contactos", variant: "outline" },
            ],
          },
          {
            eyebrow: "Novidades",
            title: "Não saber o que precisa não é problema.",
            description:
              "Com décadas de experiência em instalações elétricas, a nossa equipa orienta na escolha certa — seja para uma pequena reparação doméstica ou um projeto de maior escala. Diga-nos o que pretende e nós tratamos do resto.",
            bullets: [
              "Orientação técnica sem compromisso",
              "Seleção adaptada ao seu projeto específico",
              "Apoio tanto para particulares como profissionais",
            ],
            ctas: [
              { label: "Ver mais", href: "/contactos", variant: "primary" },
              { label: "Detalhes", href: "/contactos", variant: "outline" },
            ],
          },
        ]}
      />

      <Tagline
        title="Componentes de qualidade. Conhecimento de décadas."
        body="Conhecimento é material com que se trabalha e sabemos o que isso pode afetar numa instalação. Só quem temos em loja passou pelo critério de quem percebe do assunto há mais de 60 anos."
      />

      <ImageBand alt="Técnicos a analisar componentes elétricos" tone="steel" />

      <PageClosing />
    </>
  );
}
