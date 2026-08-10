import type { Metadata } from "next";

import { FeatureRows } from "@/components/sections/FeatureRows";
import { ImageBand } from "@/components/sections/ImageBand";
import { OverlayHero } from "@/components/sections/OverlayHero";
import { PageClosing } from "@/components/sections/PageClosing";
import { StatementBand } from "@/components/sections/StatementBand";
import { Tagline } from "@/components/sections/Tagline";

export const metadata: Metadata = {
  title: "Assistência Técnica",
  description:
    "Serviço especializado de manutenção e reparação de eletrodomésticos e equipamentos elétricos em Ílhavo. Diagnóstico honesto, resolução rápida.",
};

export default function ApoioTecnicoPage() {
  return (
    <>
      <OverlayHero
        title="Apoio técnico para que nunca pare."
        subtitle="Oferecemos serviço especializado de manutenção e reparação para eletrodomésticos e equipamentos elétricos em Ílhavo."
        tone="navy"
      />

      <StatementBand
        lead="Uma avaria não avisa."
        emphasis="E quando acontece, a última coisa que quer é ficar à espera sem saber o que está a falhar."
        body="A nossa equipa diagnostica com rigor, explica em termos técnicos e só avança quando sabe exatamente o que está em cima da mesa."
      />

      <FeatureRows
        rows={[
          {
            eyebrow: "Novidades",
            title: "Como conseguimos garantir qualidade",
            description:
              "Um frigorífico, uma máquina de lavar ou um fogão são equipamentos que usamos todos os dias durante anos. Sabemos quais as marcas que cumprem o que prometem e quais os modelos que resistem ao uso real.",
            bullets: [
              "Diagnóstico antes de qualquer coisa",
              "Reparar em vez de substituir",
              "Experiência técnica especializada",
            ],
            ctas: [
              { label: "Ver mais", href: "/contactos", variant: "primary" },
              { label: "Detalhes", href: "/contactos", variant: "outline" },
            ],
          },
          {
            eyebrow: "Novidades",
            title: "Sabemos que uma avaria não tem hora marcada.",
            description:
              "Não precisa de saber se é o termostato, o motor ou a resistência. Diz-nos o que o equipamento está a fazer (ou a deixar de fazer) e a partir daí orientamos o passo seguinte.",
            bullets: [
              "Atendemos por telefone, email ou presencial",
              "Sem obrigações antes do diagnóstico",
              "Processo simples e transparente",
            ],
            ctas: [
              { label: "Ver mais", href: "/contactos", variant: "primary" },
              { label: "Detalhes", href: "/contactos", variant: "outline" },
            ],
          },
          {
            eyebrow: "Contacto inicial",
            title: "Como funciona o nosso serviço de apoio técnico",
            description:
              "O primeiro contacto é a solução final, estamos consigo num processo simples e transparente. Você entra em contacto connosco pelo telefone ou website para relatar o problema técnico e nós tratamos do resto.",
            ctas: [
              { label: "Falar com técnico", href: "/contactos", variant: "primary" },
            ],
          },
        ]}
      />

      <Tagline
        title="Décadas de experiência a resolver o que avaria"
        body="Com mais de 60 anos de trabalho técnico, sabemos que cada equipamento é diferente e que a solução certa raramente é a mais óbvia. É por isso que começamos sempre por ouvir e perceber antes de agir."
      />

      <ImageBand alt="Técnico a reparar um eletrodoméstico" tone="steel" />

      <PageClosing />
    </>
  );
}
