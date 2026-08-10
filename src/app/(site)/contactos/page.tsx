import type { Metadata } from "next";

import { Reveal } from "@/components/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { Parallax } from "@/components/motion/Parallax";
import { ContactForm } from "@/components/sections/ContactForm";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FaqSection } from "@/components/sections/Faq";
import { LocationBlock } from "@/components/sections/LocationBlock";
import { Media } from "@/components/ui/Media";
import { getFaqs, getSiteSettings } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contactos",
  description:
    "Fale connosco. Estamos disponíveis para ajudar com dúvidas, orçamentos e assistência técnica em Ílhavo.",
};

export default async function ContactosPage() {
  const [settings, faqs] = await Promise.all([getSiteSettings(), getFaqs()]);

  return (
    <>
      <section className="container-page pt-24 md:pt-28">
        <div className="grid items-stretch gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative min-h-[380px] overflow-hidden rounded-4xl md:min-h-[560px]">
            <Parallax className="absolute inset-0" amount={7}>
              <Media
                alt="Técnico da Manuel Augusto em assistência"
                tone="navy"
                rounded={false}
                priority
                className="h-full"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </Parallax>
            <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/40 to-navy/20" />
            <div className="relative flex h-full flex-col justify-end p-8 md:p-12">
              <p className="eyebrow text-white/60">Fale connosco</p>
              <SplitReveal
                as="h1"
                trigger="load"
                text="Estamos disponíveis para ajudar!"
                className="mt-4 max-w-md text-4xl font-semibold text-white md:text-[3.25rem]"
              />
              <p className="mt-5 max-w-sm text-white/75">
                Dúvidas, informações, estamos cá para encontrar a solução ideal.
                A nossa equipa está sempre pronta para o assistir e acompanhar.
              </p>
            </div>
          </div>

          <Reveal delay={0.1} className="lg:pt-2">
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <LocationBlock settings={settings} />

      <FaqSection items={faqs} />

      <CtaBanner />
    </>
  );
}
