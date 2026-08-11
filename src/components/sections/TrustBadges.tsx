import { Icon } from "@/components/ui/Icon";
import type { IconName } from "@/lib/types";

const BADGES: { icon: IconName; title: string; text: string }[] = [
  { icon: "shield", title: "Garantia de 3 anos", text: "No equipamento reparado" },
  { icon: "wrench", title: "Técnicos próprios", text: "Equipa especializada" },
  { icon: "truck", title: "Resposta rápida", text: "Ílhavo e região" },
  { icon: "parts", title: "Peças de origem", text: "Reparação que dura" },
];

export function TrustBadges() {
  return (
    <section className="border-y border-line bg-white">
      <div className="container-page grid grid-cols-2 gap-x-6 gap-y-6 py-8 md:grid-cols-4 md:py-9">
        {BADGES.map((b) => (
          <div key={b.title} className="flex items-center gap-3">
            <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-line bg-white text-brand shadow-[0_1px_2px_rgba(13,24,38,0.05)]">
              <Icon name={b.icon} className="size-5" />
            </span>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-ink">{b.title}</p>
              <p className="text-xs text-muted">{b.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
