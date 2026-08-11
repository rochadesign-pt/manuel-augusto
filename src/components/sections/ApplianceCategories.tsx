import { Reveal } from "@/components/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { Icon } from "@/components/ui/Icon";
import type { IconName } from "@/lib/types";

const CATEGORIES: { label: string; icon: IconName }[] = [
  { label: "Frigoríficos", icon: "appliance" },
  { label: "Máquinas de lavar", icon: "appliance" },
  { label: "Máquinas de loiça", icon: "appliance" },
  { label: "Fogões & placas", icon: "plug" },
  { label: "Fornos", icon: "appliance" },
  { label: "Micro-ondas", icon: "appliance" },
  { label: "Aspiradores", icon: "parts" },
  { label: "Pequenos eletrodomésticos", icon: "advice" },
];

export function ApplianceCategories({
  eyebrow = "Reparamos de tudo",
  title = "Assistência para todos os equipamentos.",
}: {
  eyebrow?: string;
  title?: string;
}) {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="eyebrow">{eyebrow}</p>
          <SplitReveal
            as="h2"
            text={title}
            className="mt-3 text-3xl font-semibold md:text-[2.5rem] md:leading-[1.1]"
          />
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {CATEGORIES.map((c, i) => (
            <Reveal
              key={c.label}
              delay={(i % 4) * 0.06}
              className="group flex items-center gap-3 rounded-xl border border-line bg-white p-4 transition-colors hover:border-line-strong md:p-5"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-line bg-white text-ink shadow-[0_1px_2px_rgba(13,24,38,0.04)] transition-colors group-hover:border-brand group-hover:text-brand">
                <Icon name={c.icon} className="size-5" />
              </span>
              <span className="text-sm font-semibold text-ink">{c.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
