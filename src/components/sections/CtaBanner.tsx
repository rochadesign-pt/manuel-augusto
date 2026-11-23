import type { ReactNode } from "react";

import { Reveal } from "@/components/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { Button } from "@/components/ui/Button";
import { getSiteSettings } from "@/lib/data";

interface CtaBannerProps {
  title?: string;
  text?: string;
}

/**
 * Contact close shared by every page: a plain invitation to call or visit,
 * with the real contact details listed simply. The navy pedestal continues
 * into the footer so the card reads as overlapping it.
 */
export async function CtaBanner({
  title = "Ligue-nos ou passe pela loja.",
  text = "Estamos na Avenida 25 de Abril, em Ílhavo, de segunda a sábado. Quem atende o telefone é quem vai tratar do seu pedido.",
}: CtaBannerProps) {
  const s = await getSiteSettings();
  const tel = `tel:${s.phone.replace(/\s/g, "")}`;
  const mapHref =
    s.mapUrl ??
    `https://maps.google.com/?q=${encodeURIComponent(
      `${s.addressStreet}, ${s.addressPostal} ${s.addressCity}`,
    )}`;

  return (
    <section className="relative bg-white pt-20 md:pt-28">
      {/* Navy pedestal at the bottom — seamlessly continues into the footer, so
          the card's lower portion reads as overlapping the dark footer. Kept
          inside this section to avoid cross-stacking-context z-index issues. */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-32 bg-navy md:h-48"
      />
      <div className="container-page relative z-10">
        <Reveal className="rounded-4xl bg-brand text-white">
          <div className="grid grid-cols-1 gap-10 p-7 md:p-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16 lg:p-16">
            <div>
              <p className="eyebrow text-white/70">Contactos</p>
              <SplitReveal
                as="h2"
                text={title}
                className="mt-3 max-w-md text-[2rem] text-white md:text-[2.5rem]"
              />
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/80">
                {text}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={tel}
                  className="inline-flex h-12 items-center justify-center whitespace-nowrap rounded-xl bg-white px-6 text-sm font-semibold text-ink transition-colors hover:bg-surface-soft focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
                >
                  Ligar {s.phone}
                </a>
                <Button
                  href="/contactos"
                  variant="ghost"
                  size="lg"
                  className="border border-white/40 text-white hover:bg-white/10"
                >
                  Enviar mensagem
                </Button>
              </div>
            </div>

            <dl className="grid grid-cols-1 gap-x-10 gap-y-6 border-t border-white/20 pt-8 sm:grid-cols-2 lg:border-l lg:border-t-0 lg:pl-14 lg:pt-0">
              <Fact label="Telefone">
                <a href={tel} className="underline-offset-4 hover:underline">
                  {s.phone}
                </a>
              </Fact>
              {s.email && (
                <Fact label="E-mail">
                  <a
                    href={`mailto:${s.email}`}
                    className="underline-offset-4 [overflow-wrap:anywhere] hover:underline"
                  >
                    {s.email}
                  </a>
                </Fact>
              )}
              <Fact label="Loja">
                <a
                  href={mapHref}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="underline-offset-4 hover:underline"
                >
                  {s.addressStreet}
                  <br />
                  {s.addressPostal} {s.addressCity}
                </a>
              </Fact>
              <Fact label="Horário">
                {s.hoursWeek}
                <br />
                {s.hoursSat}
              </Fact>
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Fact({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <dt className="text-sm text-white/65">{label}</dt>
      <dd className="mt-1 text-[17px] font-semibold leading-snug">{children}</dd>
    </div>
  );
}
