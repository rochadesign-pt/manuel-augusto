import { Reveal } from "@/components/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { Icon } from "@/components/ui/Icon";
import type { IconName } from "@/lib/types";

const FEATURES: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "advice",
    title: "Diagnóstico honesto",
    text: "Avaliamos antes de avançar e explicamos o que está a falhar — sem surpresas.",
  },
  {
    icon: "shield",
    title: "Garantia de 3 anos",
    text: "Cobertura no equipamento reparado, com peças e mão de obra incluídas.",
  },
];

export function AssistanceShowcase() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-16">
          <div>
            <p className="eyebrow">Assistência técnica</p>
            <SplitReveal
              as="h2"
              text="Reparações acompanhadas do início ao fim."
              className="mt-4 max-w-md text-3xl font-semibold md:text-[2.5rem] md:leading-[1.08]"
            />
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-md text-muted">
                Sabe sempre em que ponto está o seu equipamento — do primeiro
                contacto à entrega, tratamos de tudo com rigor.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="grid gap-7 sm:grid-cols-2 lg:pt-3">
            {FEATURES.map((f) => (
              <div key={f.title}>
                <div className="grid size-10 place-items-center rounded-lg border border-line bg-white text-brand shadow-[0_1px_2px_rgba(13,24,38,0.06)]">
                  <Icon name={f.icon} className="size-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                  {f.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {f.text}
                </p>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal delay={0.05} className="mt-14">
          <ShowcasePanel />
        </Reveal>
      </div>
    </section>
  );
}

function ShowcasePanel() {
  return (
    <div className="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-brand to-brand-700 p-6 ring-1 ring-inset ring-white/10 md:p-12">
      {/* dot-grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      {/* soft glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-white/15 blur-3xl"
      />

      <div className="relative grid gap-5 md:grid-cols-[1.15fr_0.85fr] md:items-start">
        <RequestsCard />
        <StatusCard />
      </div>
    </div>
  );
}

const REQUESTS = [
  { appliance: "Máquina de lavar", brand: "Bosch", status: "Reparado", tone: "green" as const },
  { appliance: "Frigorífico", brand: "Siemens", status: "Em diagnóstico", tone: "amber" as const },
  { appliance: "Placa de indução", brand: "Balay", status: "A caminho", tone: "blue" as const },
];

const STATUS_TONES = {
  green: "bg-emerald-50 text-emerald-600",
  amber: "bg-amber-50 text-amber-600",
  blue: "bg-brand-soft text-brand",
};

function RequestsCard() {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-[0_20px_50px_-24px_rgba(9,17,30,0.5)] ring-1 ring-ink/5 md:p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="flex gap-1">
            <span className="size-2 rounded-full bg-line-strong" />
            <span className="size-2 rounded-full bg-line-strong" />
            <span className="size-2 rounded-full bg-line-strong" />
          </span>
          <span className="ml-1 text-sm font-semibold text-ink">
            Pedidos de assistência
          </span>
        </div>
        <span className="rounded-full bg-surface-muted px-2 py-0.5 text-[11px] font-semibold text-muted">
          Hoje
        </span>
      </div>

      <ul className="mt-4 space-y-2.5">
        {REQUESTS.map((r) => (
          <li
            key={r.appliance}
            className="flex items-center gap-3 rounded-xl border border-line bg-surface-soft px-3 py-2.5"
          >
            <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-white text-brand ring-1 ring-line">
              <Icon name="appliance" className="size-[18px]" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[13px] font-semibold text-ink">
                {r.appliance}
              </p>
              <p className="truncate text-[11px] text-muted">{r.brand}</p>
            </div>
            <span
              className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-semibold ${STATUS_TONES[r.tone]}`}
            >
              {r.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const STEPS = ["Recebido", "Diagnóstico", "Reparação", "Entregue"];

function StatusCard() {
  const current = 2; // "Reparação"
  return (
    <div className="rounded-2xl bg-white p-5 shadow-[0_20px_50px_-24px_rgba(9,17,30,0.5)] ring-1 ring-ink/5 md:p-6">
      <p className="text-sm font-semibold text-ink">Estado da reparação</p>
      <p className="mt-1 text-[12px] text-muted">Frigorífico · Siemens</p>

      <ol className="mt-5 space-y-4">
        {STEPS.map((step, i) => {
          const done = i < current;
          const active = i === current;
          return (
            <li key={step} className="flex items-center gap-3">
              <span
                className={`grid size-6 shrink-0 place-items-center rounded-full text-[11px] font-bold ${
                  done
                    ? "bg-brand text-white"
                    : active
                      ? "bg-brand-soft text-brand ring-2 ring-brand"
                      : "bg-surface-muted text-muted-2"
                }`}
              >
                {done ? "✓" : i + 1}
              </span>
              <span
                className={`text-[13px] ${active ? "font-semibold text-ink" : done ? "text-ink-soft" : "text-muted-2"}`}
              >
                {step}
              </span>
              {active && (
                <span className="ml-auto rounded-full bg-brand-soft px-2 py-0.5 text-[10px] font-semibold text-brand">
                  Em curso
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
