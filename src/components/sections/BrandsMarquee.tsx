import { Reveal } from "@/components/Reveal";
import { Media } from "@/components/ui/Media";
import type { Brand } from "@/lib/types";

export function BrandsMarquee({ brands }: { brands: Brand[] }) {
  const row = [...brands, ...brands];
  return (
    <section className="border-y border-line bg-white py-10">
      <div className="container-page grid items-center gap-8 lg:grid-cols-[auto_1fr]">
        <Reveal className="max-w-[12rem] shrink-0">
          <p className="text-sm font-medium leading-snug text-muted">
            Trabalhamos com
            <br /> marcas de confiança
          </p>
        </Reveal>

        <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
          <div className="marquee-track flex w-max items-center gap-9">
            {row.map((brand, i) => (
              <div
                key={brand.name + i}
                className="flex items-center gap-9 text-xl font-semibold text-muted-2"
              >
                {brand.logo ? (
                  <Media
                    image={brand.logo}
                    alt={brand.name}
                    ring={false}
                    tone="soft"
                    className="h-8 w-24 bg-transparent"
                    imgClassName="object-contain"
                  />
                ) : (
                  <span className="whitespace-nowrap font-display tracking-tight opacity-70 transition-opacity hover:opacity-100">
                    {brand.name}
                  </span>
                )}
                <span
                  aria-hidden
                  className="size-1.5 shrink-0 rounded-full bg-line-strong"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
