import { Reveal } from "@/components/Reveal";
import { BrandsMarquee } from "@/components/sections/BrandsMarquee";
import { PageClosing } from "@/components/sections/PageClosing";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { StatsShowcase } from "@/components/sections/StatsShowcase";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
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
      <HomeHero />
      <BrandsMarquee brands={brands} />
      <ServicesGrid services={services} />
      <ComfortBand />
      <StatsShowcase stats={stats} />
      <PageClosing />
    </>
  );
}

function HomeHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Media
          alt="Técnicos da Manuel Augusto a instalar eletrodomésticos"
          tone="steel"
          priority
          rounded={false}
          className="h-full"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-navy/10" />
      </div>

      <div className="container-page relative flex min-h-[560px] flex-col justify-end pb-16 pt-28 md:min-h-[640px] md:pb-20">
        <Reveal className="max-w-2xl">
          <h1 className="text-4xl font-semibold leading-[1.08] text-white md:text-[3.25rem]">
            Há mais de 60 anos a cuidar da energia e do conforto da sua casa.
          </h1>
          <p className="mt-5 max-w-xl text-base text-white/75 md:text-lg">
            Desde 1960 que ajudamos as famílias de Ílhavo a escolher, manter e
            reparar os seus eletrodomésticos.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#contacto" variant="light" size="lg">
              Fala connosco
            </Button>
            <Button
              href="/servicos"
              variant="ghost"
              size="lg"
              arrow
              className="border border-white/30 text-white hover:bg-white/10"
            >
              Fala com técnico
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ComfortBand() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-white md:py-28">
      <div className="absolute inset-0 opacity-25">
        <Media
          alt="Instalação profissional"
          tone="navy"
          rounded={false}
          className="h-full"
        />
      </div>
      <div className="container-page relative">
        <div className="max-w-2xl">
          <p className="eyebrow text-white/50">Conforto sem complicações</p>
          <h2 className="mt-3 font-display text-3xl font-semibold md:text-[2.5rem] md:leading-[1.1]">
            Melhore o conforto do seu dia a dia.
          </h2>
          <p className="mt-4 max-w-xl text-white/70">
            Pequenas melhorias fazem grandes diferenças. Um eletrodoméstico mais
            eficiente, uma instalação mais segura ou uma reparação feita a tempo:
            tudo contribui para um espaço mais cómodo e tranquilo.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#contacto" variant="light">
              Entrar em contacto
            </Button>
            <Button
              href="/servicos"
              variant="ghost"
              arrow
              className="border border-white/30 text-white hover:bg-white/10"
            >
              Saber mais
            </Button>
          </div>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          <ComfortCard
            icon="truck"
            title="Entrega e montagem"
            text="No momento da compra pode comunicar-nos onde deseja que o eletrodoméstico seja entregue. Nós tratamos do transporte e da montagem."
          />
          <ComfortCard
            icon="shield"
            title="Garantia de 3 anos"
            text="Após a compra garantimos 3 anos de garantia para cliente particular no eletrodoméstico adquirido, que usufrua do mesmo sem problemas."
          />
        </div>
      </div>
    </section>
  );
}

function ComfortCard({
  icon,
  title,
  text,
}: {
  icon: "truck" | "shield";
  title: string;
  text: string;
}) {
  return (
    <Reveal className="rounded-2xl border border-white/10 bg-white/[0.06] p-7 backdrop-blur-sm">
      <div className="mb-4 grid size-11 place-items-center rounded-xl bg-white/10 text-white">
        <Icon name={icon} />
      </div>
      <h3 className="font-display text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/65">{text}</p>
    </Reveal>
  );
}
