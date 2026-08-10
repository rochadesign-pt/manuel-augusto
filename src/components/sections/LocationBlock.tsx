import { Reveal } from "@/components/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { Media } from "@/components/ui/Media";
import type { SiteSettings } from "@/lib/types";

export function LocationBlock({ settings }: { settings: SiteSettings }) {
  const items = [
    {
      icon: "pin",
      label: "Morada",
      value: `${settings.addressStreet} · ${settings.addressPostal} · ${settings.addressCity}`,
    },
    { icon: "mail", label: "E-mail", value: settings.email ?? "" },
    { icon: "phone", label: "Telefone", value: settings.phone },
    {
      icon: "clock",
      label: "Horário de funcionamento",
      value: `${settings.hoursWeek} · ${settings.hoursSat}`,
    },
  ].filter((i) => i.value);

  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <div className="text-center">
          <p className="eyebrow eyebrow-center">Localização</p>
          <SplitReveal
            as="h2"
            text="Onde nos encontrar"
            className="mx-auto mt-4 max-w-2xl text-4xl font-semibold md:text-[3rem]"
          />
          <p className="mx-auto mt-4 max-w-md text-muted">
            Encontre a nossa loja e oficina em {settings.addressCity}.
          </p>
        </div>

        <Reveal className="relative mt-12 overflow-hidden rounded-4xl">
          <Media
            alt={`Loja ${settings.companyName}`}
            tone="steel"
            rounded={false}
            className="h-[420px] w-full md:h-[560px]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/40 to-transparent" />

          <div className="absolute inset-x-4 bottom-4 md:inset-x-10 md:bottom-10 md:max-w-md">
            <div className="rounded-3xl bg-white/95 p-7 shadow-float backdrop-blur md:p-9">
              <h3 className="font-display text-2xl font-semibold md:text-[1.75rem]">
                Não hesite em fazer-nos uma visita!
              </h3>
              <ul className="mt-6 space-y-4">
                {items.map((item) => (
                  <li key={item.label} className="flex gap-3.5">
                    <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand">
                      <LocIcon name={item.icon} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-medium uppercase tracking-wide text-muted-2">
                        {item.label}
                      </p>
                      <p className="text-sm font-medium text-ink">{item.value}</p>
                    </div>
                  </li>
                ))}
              </ul>
              {settings.mapUrl && (
                <a
                  href={settings.mapUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand"
                >
                  Ver no mapa
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                    <path d="M3.5 8h9m0 0L9 4.5M12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function LocIcon({ name }: { name: string }) {
  const common = {
    className: "size-[18px]",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    viewBox: "0 0 24 24",
    "aria-hidden": true,
  };
  switch (name) {
    case "pin":
      return (
        <svg {...common}>
          <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      );
    case "mail":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      );
    case "phone":
      return (
        <svg {...common}>
          <path d="M6 3h3l1.5 5-2 1.5a12 12 0 0 0 6 6l1.5-2 5 1.5V21a1 1 0 0 1-1 1A17 17 0 0 1 4 5a1 1 0 0 1 1-1Z" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 7.5V12l3 2" />
        </svg>
      );
  }
}
