import { Reveal } from "@/components/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { Button } from "@/components/ui/Button";

interface CtaBannerProps {
  title?: string;
  text?: string;
}

export function CtaBanner({
  title = "Precisa de ajuda a escolher o próximo eletrodoméstico?",
  text = "Fale connosco, teremos todo o gosto em dar-lhe uma resposta rápida, com conhecimento e garantia.",
}: CtaBannerProps) {
  return (
    <section className="bg-navy pb-0 pt-20 md:pt-28">
      <div className="container-page">
        <Reveal className="relative overflow-hidden rounded-4xl bg-brand">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
          />
          <div className="relative grid items-center gap-6 md:grid-cols-[1.2fr_0.8fr]">
            <div className="p-8 md:p-14 lg:p-16">
              <span className="eyebrow text-white/60">Manuel Augusto &amp; Filhos</span>
              <SplitReveal
                as="h2"
                text={title}
                className="mt-4 max-w-md font-display text-2xl font-semibold text-white md:text-[2.25rem] md:leading-[1.12]"
              />
              <p className="mt-4 max-w-md text-sm leading-relaxed text-white/75">
                {text}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/servicos" variant="light" magnetic>
                  Conhecer serviços
                </Button>
                <Button
                  href="/contactos"
                  variant="ghost"
                  arrowUp
                  className="text-white hover:bg-white/10"
                >
                  Fala com técnico
                </Button>
              </div>
            </div>

            <div className="relative hidden h-full min-h-[340px] items-end justify-center md:flex">
              <KettleArt />
            </div>
          </div>

          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-20 size-64 rounded-full bg-white/10 blur-2xl"
          />
        </Reveal>
      </div>
    </section>
  );
}

function KettleArt() {
  return (
    <svg
      viewBox="0 0 220 220"
      className="h-full w-auto max-h-[300px] drop-shadow-[0_24px_40px_rgba(0,0,0,0.25)]"
      fill="none"
      aria-hidden
    >
      <ellipse cx="110" cy="200" rx="78" ry="12" fill="rgba(0,0,0,0.18)" />
      <path
        d="M56 118h108c0 34-24 62-54 62s-54-28-54-62Z"
        fill="#e9c46a"
        stroke="#b8892f"
        strokeWidth="3"
      />
      <path
        d="M56 118h108l6-14c1-4-2-8-6-8H56c-4 0-7 4-6 8l6 14Z"
        fill="#f4d58d"
        stroke="#b8892f"
        strokeWidth="3"
      />
      <path
        d="M164 130c18 0 24 20 8 30l-14 8"
        stroke="#b8892f"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M92 96h36l-6-14c-1-3-4-4-7-4h-10c-3 0-6 1-7 4l-6 14Z"
        fill="#f4d58d"
        stroke="#b8892f"
        strokeWidth="3"
      />
      <circle cx="110" cy="72" r="6" fill="#fff" stroke="#b8892f" strokeWidth="3" />
      <rect x="90" y="180" width="40" height="10" rx="3" fill="#3a3f47" />
    </svg>
  );
}
