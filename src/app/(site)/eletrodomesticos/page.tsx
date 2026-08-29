import type { Metadata } from "next";

import { CatalogCards } from "@/components/sections/CatalogCards";
import { FeatureRows } from "@/components/sections/FeatureRows";
import { OverlayHero } from "@/components/sections/OverlayHero";
import { PageClosing } from "@/components/sections/PageClosing";
import { StatementBand } from "@/components/sections/StatementBand";
import { Tagline } from "@/components/sections/Tagline";
import { WordmarkBand } from "@/components/sections/WordmarkBand";
import { getCatalogs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Eletrodomésticos",
  description:
    "Grandes e pequenos eletrodomésticos das melhores marcas, com aconselhamento honesto, entrega, montagem e garantia.",
  alternates: { canonical: "/eletrodomesticos" },
};

export default async function EletrodomesticosPage() {
  const catalogs = await getCatalogs();

  return (
    <>
      <OverlayHero
        title="Eletrodomésticos de qualidade para a sua casa"
        subtitle="Uma seleção, feita com conhecimento, para encontrar o eletrodoméstico que se encaixa no seu espaço, no seu orçamento e no seu dia a dia."
      />

      <StatementBand
        lead="Escolher um eletrodoméstico parece simples."
        emphasis="Até perceber que há dezenas de modelos, especificações e preços que ninguém explica."
        body="Há 60 anos que ajudamos as famílias de Ílhavo a evitar o 'stress' de escolher o melhor ou o mais barato. Não vendemos catálogos, ouvimos o que precisa, percebemos o seu espaço e recomendamos o que faz sentido para si."
      />

      <FeatureRows
        rows={[
          {
            eyebrow: "Novidades",
            title: "Uma escolha que fica anos lá em casa.",
            description:
              "Um frigorífico, uma máquina de lavar ou um fogão são equipamentos que usamos todos os dias durante anos. Sabemos quais as marcas que cumprem o que prometem e quais os modelos que resistem ao uso real.",
            bullets: [
              "Frigoríficos de última geração",
              "Máquinas de lavar eficientes",
              "Fogões modernos e seguros",
            ],
            ctas: [
              { label: "Ver mais", href: "/contactos", variant: "primary" },
              { label: "Detalhes", href: "/contactos", variant: "outline" },
            ],
          },
          {
            eyebrow: "Novidades",
            title: "Para o dia a dia, os detalhes importam.",
            description:
              "Aspiradores, ferros ou chaleiras: são equipamentos que usa sem pensar. Por isso importa escolhê-los bem. Ajudamos a perceber o que vale a pena e o que não passa de especificações no papel.",
            bullets: [
              "Pequenos eletrodomésticos de confiança",
              "Máquinas de café e cozinha",
              "Conforto e eficiência no dia a dia",
            ],
            ctas: [
              { label: "Ver mais", href: "/contactos", variant: "primary" },
              { label: "Detalhes", href: "/contactos", variant: "outline" },
            ],
          },
        ]}
      />

      <CatalogCards catalogs={catalogs} />

      <Tagline
        title="Cobertura alargada, diagnóstico honesto."
        body="Trabalhamos com a maioria das marcas do mercado, desde grandes nomes a equipamentos de uso diário. Nem sempre é possível reparar tudo, mas dizemos sempre o que é possível e o que não é."
      />

      <WordmarkBand />

      <PageClosing />
    </>
  );
}
