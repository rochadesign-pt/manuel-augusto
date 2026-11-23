import type { Metadata } from "next";

import { ApplianceCategories } from "@/components/sections/ApplianceCategories";
import { AssistanceRequest } from "@/components/sections/AssistanceRequest";
import { FeatureRows } from "@/components/sections/FeatureRows";
import { ImageBand } from "@/components/sections/ImageBand";
import { OverlayHero } from "@/components/sections/OverlayHero";
import { PageClosing } from "@/components/sections/PageClosing";
import { StatementBand } from "@/components/sections/StatementBand";
import { Tagline } from "@/components/sections/Tagline";
import { TrustBadges } from "@/components/sections/TrustBadges";

export const metadata: Metadata = {
  title: "Assistência Técnica",
  description:
    "Serviço especializado de manutenção e reparação de eletrodomésticos e equipamentos elétricos em Ílhavo. Feita pela nossa equipa técnica.",
  alternates: { canonical: "/apoio-tecnico" },
};

export default function ApoioTecnicoPage() {
  return (
    <>
      <OverlayHero
        title="Avariou? Nós reparamos."
        subtitle="Reparamos e fazemos a manutenção de eletrodomésticos e equipamentos elétricos, com técnicos da casa."
        tone="navy"
        src="/images/manuel-augusto-hero-assistencia.webp"
      />

      <StatementBand
        lead="Uma avaria não avisa."
        emphasis="E quando acontece, a última coisa que quer é ficar à espera sem saber o que está a falhar."
        body="Vemos o equipamento, explicamos o que se passa por palavras simples e dizemos quanto custa antes de reparar."
      />

      <TrustBadges />

      <ApplianceCategories />

      <FeatureRows
        rows={[
          {
            eyebrow: "Qualidade",
            title: "Primeiro percebemos o que avariou.",
            src: "/images/manuel-augusto-reparacao-detalhe.webp",
            description:
              "Antes de trocar um equipamento, vale a pena saber se tem arranjo. Muitas vezes tem, e sai mais barato. Quando não compensa, dizemos-lhe.",
            bullets: [
              "Diagnóstico antes do orçamento",
              "Reparar antes de substituir",
              "Técnicos da casa",
            ],
            ctas: [
              { label: "Pedir assistência", href: "/contactos", variant: "primary" },
            ],
          },
          {
            eyebrow: "Disponibilidade",
            title: "Sabemos que uma avaria não tem hora marcada.",
            src: "/images/manuel-augusto-assistencia-3.webp",
            description:
              "Não precisa de saber se é o termostato, o motor ou a resistência. Diga-nos o que o equipamento está a fazer (ou a deixar de fazer) e a partir daí orientamos o passo seguinte.",
            bullets: [
              "Por telefone, e-mail ou na loja",
              "Sem compromisso até aceitar o orçamento",
              "Sabe sempre em que ponto está",
            ],
            ctas: [
              { label: "Pedir assistência", href: "/contactos", variant: "primary" },
            ],
          },
          {
            eyebrow: "Como funciona",
            title: "Ligue-nos e conte o que se passa.",
            src: "/images/manuel-augusto-assistencia-2.webp",
            description:
              "Pode ligar, escrever ou fazer o pedido aqui no site. Dizemos-lhe o passo seguinte e combinamos consigo a visita ou a entrega do equipamento na loja.",
            ctas: [
              { label: "Pedir assistência", href: "/contactos", variant: "primary" },
            ],
          },
        ]}
      />

      <AssistanceRequest />

      <Tagline
        eyebrow="Experiência"
        title="Há mais de 60 anos a reparar o que avaria."
        body="Cada avaria é diferente. Por isso começamos sempre por ouvir o que nos conta e por ver o equipamento, antes de dizer seja o que for."
      />

      <ImageBand
        alt="Técnico da Manuel Augusto a limpar a gaveta do detergente de uma máquina de lavar"
        src="/images/manuel-augusto-manutencao-detergente.webp"
        tone="navy"
      />

      <PageClosing />
    </>
  );
}
