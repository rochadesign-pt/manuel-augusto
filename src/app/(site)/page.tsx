import { Reveal } from "@/components/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { Parallax } from "@/components/motion/Parallax";
import { AssistanceShowcase } from "@/components/sections/AssistanceShowcase";
import { BrandsMarquee } from "@/components/sections/BrandsMarquee";
import { PageClosing } from "@/components/sections/PageClosing";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { StatsShowcase } from "@/components/sections/StatsShowcase";
import { TrustBadges } from "@/components/sections/TrustBadges";
import { Button } from "@/components/ui/Button";
import { Media } from "@/components/ui/Media";
import { getBrands, getServices, getStats } from "@/lib/data";

export default async function HomePage() {
  const [services, brands, stats] = await Promise.all([
    getServices(),
    getBrands(),
    getStats(),
  ]);

  return (
    <>
      <div className="flex min-h-svh flex-col">
        <HomeHero />
        <BrandsMarquee brands={brands} />
      </div>
      <ServicesGrid services={services} />
      <TrustBadges />
      <AssistanceShowcase />
      <ComfortBand />
      <StatsShowcase stats={stats} />
      <PageClosing />
    </>
  );
}

function HomeHero() {
  return (
    <section className="relative flex flex-1 flex-col overflow-hidden">
      <div className="absolute inset-0">
        <Parallax className="absolute inset-0" amount={6}>
          <Media
            alt="Técnicos da Manuel Augusto a instalar eletrodomésticos"
            tone="steel"
            priority
            rounded={false}
            className="h-full"
            sizes="100vw"
          />
        </Parallax>
        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/45 to-navy/20" />
      </div>

      <div className="container-page relative flex min-h-[560px] flex-1 flex-col justify-end pb-14 pt-28 md:pb-20">
        <div className="max-w-3xl">
          <SplitReveal
            as="h1"
            trigger="load"
            stagger={0.05}
            text="Há mais de 60 anos a cuidar da energia e do conforto da sua casa."
            className="text-4xl font-semibold leading-[1.05] text-white md:text-[3.5rem]"
          />
          <Reveal load delay={0.35}>
            <p className="mt-6 max-w-xl text-base text-white/75 md:text-lg">
              Desde 1960 que ajudamos as famílias de Ílhavo a escolher, manter e
              reparar os seus eletrodomésticos.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contactos" variant="light" size="lg" magnetic>
                Fala connosco
              </Button>
              <Button
                href="/apoio-tecnico"
                variant="ghost"
                size="lg"
                arrowUp
                className="border border-white/30 text-white hover:bg-white/10"
              >
                Fala com técnico
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ComfortBand() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0">
        <Media
          alt="Entrega e montagem de um eletrodoméstico pela equipa Manuel Augusto"
          tone="steel"
          rounded={false}
          ring={false}
          className="h-full"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/45 to-navy/25" />
      </div>

      <div className="container-page relative flex min-h-[86vh] flex-col justify-between py-28 text-white md:py-32">
        <Reveal className="max-w-xl">
          <p className="text-sm font-medium text-white/70">Tagline</p>
          <h2 className="mt-3 font-display text-4xl font-semibold md:text-[3rem] md:leading-[1.05]">
            Melhore o conforto do seu dia a dia.
          </h2>
          <p className="mt-6 max-w-lg leading-relaxed text-white/75">
            Pequenas melhorias fazem grandes diferenças. Um eletrodoméstico mais
            eficiente, uma instalação mais segura ou uma reparação feita a tempo,
            tudo contribui para um espaço mais cómodo e funcional.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-2">
            <Button href="/contactos" variant="light">
              Entrar em contacto
            </Button>
            <Button
              href="/apoio-tecnico"
              variant="ghost"
              arrow
              className="text-white hover:bg-white/10"
            >
              Falar
            </Button>
          </div>
        </Reveal>

        <Reveal
          delay={0.1}
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:ml-auto lg:max-w-3xl"
        >
          <div>
            <h3 className="font-display text-xl font-semibold">
              Entrega e montagem
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              No momento da compra pode comunicar-nos onde deseja que o
              eletrodoméstico seja entregue. Nós garantimos o transporte!
            </p>
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold">
              Garantia de 3 anos
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Após a compra garantimos 3 anos de garantia (para cliente
              particular) no eletrodoméstico adquirido para que usufrua do mesmo
              sem problemas!
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
