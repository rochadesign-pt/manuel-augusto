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
        subtitle="Ajudamos a escolher o eletrodoméstico certo para o seu espaço e para o seu orçamento. Depois entregamos e montamos."
        src="/images/manuel-augusto-hero-eletrodomesticos-1.webp"
      />

      <StatementBand
        lead="Escolher um eletrodoméstico parece simples."
        emphasis="Até perceber que há dezenas de modelos, especificações e preços que ninguém explica."
        body="Na loja explicamos as diferenças com calma. Perguntamos quantos são lá em casa, que espaço tem e quanto quer gastar, e recomendamos o que faz sentido. Nem sempre é o mais caro."
      />

      <FeatureRows
        rows={[
          {
            eyebrow: "Grandes eletrodomésticos",
            title: "Uma escolha que fica anos lá em casa.",
            src: "/images/manuel-augusto-aconselhamento-frigorifico.webp",
            description:
              "Um frigorífico, uma máquina de lavar ou um fogão são equipamentos que usamos todos os dias durante anos. Sabemos quais as marcas que cumprem o que prometem e quais os modelos que resistem ao uso real.",
            bullets: [
              "Frigoríficos e combinados",
              "Máquinas de lavar roupa e loiça",
              "Fogões modernos e seguros",
            ],
            ctas: [
              { label: "Pedir aconselhamento", href: "/contactos", variant: "primary" },
            ],
          },
          {
            eyebrow: "Pequenos eletrodomésticos",
            title: "Para o dia a dia, os detalhes importam.",
            src: "/images/manuel-augusto-eletrodomesticos-2.webp",
            description:
              "Aspiradores, ferros, chaleiras: usa-os todos os dias sem pensar. Ajudamos a perceber o que vale a pena e o que só parece bom no papel.",
            bullets: [
              "Marcas que conhecemos bem",
              "Máquinas de café e cozinha",
              "Para usar todos os dias",
            ],
            ctas: [
              { label: "Pedir aconselhamento", href: "/contactos", variant: "primary" },
            ],
          },
        ]}
      />

      <CatalogCards catalogs={catalogs} />

      <Tagline
        eyebrow="Marcas & garantia"
        title="E se avariar, reparamos."
        body="Trabalhamos com a maioria das marcas do mercado, desde grandes nomes a equipamentos de uso diário. Nem sempre é possível reparar tudo, mas dizemos sempre o que é possível e o que não é."
      />

      <WordmarkBand />

      <PageClosing />
    </>
  );
}
