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
    "Componentes elétricos certificados para instalações domésticas, comerciais e industriais, com aconselhamento ao balcão.",
  alternates: { canonical: "/material-eletrico" },
};

export default function MaterialEletricoPage() {
  return (
    <>
      <OverlayHero
        title="Distribuição de material elétrico"
        subtitle="Cabos, disjuntores, tomadas, quadros e o resto do que uma instalação precisa. Para eletricistas, empresas e particulares."
        tone="navy"
        src="/images/manuel-augusto-hero-material-eletrico.webp"
      />

      <StatementBand
        lead="Encontrar o componente certo parece fácil."
        emphasis="Seja numa instalação doméstica ou projeto maior, a diferença entre o certo e o próximo está nos detalhes."
        body="Traga a referência, uma fotografia ou a peça antiga. Ajudamos a encontrar o que serve."
      />

      <FeatureRows
        rows={[
          {
            eyebrow: "Material elétrico",
            title: "O componente certo está aqui.",
            src: "/images/manuel-augusto-material-eletrico-1.webp",
            description:
              "Temos em loja material certificado para instalações domésticas, comerciais e industriais, do cabo à tomada e do disjuntor ao quadro.",
            bullets: [
              "Cabos e condutores para todas as aplicações",
              "Disjuntores, interruptores e proteções",
              "Tomadas, fichas e material de instalação",
            ],
            ctas: [
              { label: "Pedir aconselhamento", href: "/contactos", variant: "primary" },
            ],
          },
          {
            eyebrow: "Aconselhamento",
            title: "Não saber o que precisa não é problema.",
            src: "/images/manuel-augusto-material-eletrico-2.webp",
            description:
              "Diga-nos o que vai fazer e ajudamos a escolher o material, seja para trocar uma tomada ou para uma obra maior.",
            bullets: [
              "Aconselhamento sem compromisso",
              "Material escolhido para a sua obra",
              "Para particulares e profissionais",
            ],
            ctas: [
              { label: "Pedir aconselhamento", href: "/contactos", variant: "primary" },
            ],
          },
        ]}
      />

      <Tagline
        eyebrow="Qualidade"
        title="Só vendemos o que usaríamos."
        body="Numa instalação elétrica, um material fraco é um problema à espera de acontecer. Por isso escolhemos com cuidado o que temos na loja."
      />

      <ImageBand
        alt="Técnico a aconselhar sobre componentes elétricos ao balcão"
        src="/images/manuel-augusto-material-eletrico-3.webp"
        tone="steel"
      />

      <PageClosing />
    </>
  );
}
