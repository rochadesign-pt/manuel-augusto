import { Reveal } from "@/components/Reveal";
import { Media } from "@/components/ui/Media";

export function WordmarkBand({ word = "Manuel Augusto" }: { word?: string }) {
  return (
    <section className="py-8 md:py-12">
      <div className="container-page">
        <Reveal className="relative overflow-hidden rounded-3xl bg-navy">
          <div className="flex items-center justify-center pt-10 md:pt-12">
            <span className="font-display text-4xl font-bold tracking-tight text-white md:text-6xl">
              {word}
            </span>
          </div>
          <div className="relative mt-6 h-64 md:h-80">
            <Media
              alt="Carrinha e eletrodomésticos da Manuel Augusto & Filhos"
              tone="steel"
              rounded={false}
              className="h-full"
              sizes="100vw"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
