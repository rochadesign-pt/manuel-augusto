import type { ReactNode } from "react";

import { Reveal } from "@/components/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { Button } from "@/components/ui/Button";
import { getSiteSettings } from "@/lib/data";

interface CtaBannerProps {
  title?: string;
  text?: string;
}

interface ContactRow {
  icon: ReactNode;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}

/**
 * Warm contact close shared by every page: a human invitation to talk, with
 * the real ways to reach the team (call, write, visit) one tap away. The navy
 * pedestal continues into the footer so the card reads as overlapping it.
 */
export async function CtaBanner({
  title = "Prefere falar com uma pessoa?",
  text = "Do outro lado está uma equipa de Ílhavo que conhece o seu equipamento — e a sua casa. Ligue, escreva ou passe pela loja: respondemos com tempo e sem rodeios.",
}: CtaBannerProps) {
  const s = await getSiteSettings();
  const tel = `tel:${s.phone.replace(/\s/g, "")}`;
  const mapHref =
    s.mapUrl ??
    `https://maps.google.com/?q=${encodeURIComponent(
      `${s.addressStreet}, ${s.addressPostal} ${s.addressCity}`,
    )}`;

  const rows: ContactRow[] = [
    { icon: <PhoneIcon />, label: "Telefone", value: s.phone, href: tel },
    ...(s.email
      ? [
          {
            icon: <MailIcon />,
            label: "E-mail",
            value: s.email,
            href: `mailto:${s.email}`,
          },
        ]
      : []),
    {
      icon: <PinIcon />,
      label: "Loja",
      value: `${s.addressStreet}, ${s.addressCity}`,
      href: mapHref,
      external: true,
    },
    {
      icon: <ClockIcon />,
      label: "Horário",
      value: `${s.hoursWeek} · ${s.hoursSat}`,
    },
  ];

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
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-20 size-72 rounded-full bg-white/10 blur-3xl"
          />

          <div className="relative grid grid-cols-1 gap-10 p-6 md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14 lg:p-16">
            <div>
              <span className="eyebrow text-white/60">Vamos conversar</span>
              <SplitReveal
                as="h2"
                text={title}
                className="mt-4 max-w-md text-[2rem] leading-[1.08] text-white md:text-[2.75rem]"
              />
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/80">
                {text}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={tel}
                  className="inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-white bg-white px-6 text-sm font-semibold text-ink shadow-[0_1px_2px_rgba(13,24,38,0.12)] transition-colors hover:bg-surface-soft focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
                >
                  <PhoneIcon />
                  Ligar {s.phone}
                </a>
                <Button
                  href="/contactos"
                  variant="ghost"
                  size="lg"
                  arrowUp
                  className="border border-white/40 text-white hover:bg-white/10"
                >
                  Enviar mensagem
                </Button>
              </div>
            </div>

            <ul className="divide-y divide-white/10 rounded-3xl bg-white/[0.08] p-2 ring-1 ring-inset ring-white/15 backdrop-blur-sm">
              {rows.map((row) => (
                <li key={row.label}>
                  <ContactItem row={row} />
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ContactItem({ row }: { row: ContactRow }) {
  const inner = (
    <>
      <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-white/15 text-white sm:size-10">
        {row.icon}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-[11px] font-semibold uppercase tracking-[0.12em] text-white/55">
          {row.label}
        </span>
        <span className="mt-0.5 block text-[14px] font-semibold leading-snug text-white [overflow-wrap:anywhere] sm:text-[15px]">
          {row.value}
        </span>
      </span>
      {row.href && (
        <svg
          viewBox="0 0 16 16"
          className="size-4 shrink-0 text-white/50 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-white"
          fill="none"
          aria-hidden
        >
          <path
            d="M6 3.5 10.5 8 6 12.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </>
  );

  const cls =
    "group flex items-center gap-3 rounded-2xl px-3 py-4 transition-colors sm:gap-4 sm:px-4";

  if (!row.href) return <div className={cls}>{inner}</div>;
  return (
    <a
      href={row.href}
      {...(row.external
        ? { target: "_blank", rel: "noreferrer noopener" }
        : {})}
      className={`${cls} hover:bg-white/[0.07]`}
    >
      {inner}
    </a>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 16 16" className="size-4" fill="none" aria-hidden>
      <path
        d="M5.2 2.5 6.5 5l-1.3 1.3a8 8 0 0 0 3.5 3.5L10 8.5l2.5 1.3c.4.2.6.6.5 1l-.4 1.6a1 1 0 0 1-1 .8C6.6 13 3 9.4 2.8 4.4a1 1 0 0 1 .8-1l1.6-.4c.4-.1.8.1 1 .5Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 16 16" className="size-4" fill="none" aria-hidden>
      <rect x="2.5" y="3.5" width="11" height="9" rx="1.2" stroke="currentColor" strokeWidth="1.3" />
      <path d="m3 4.5 5 3.5 5-3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 16 16" className="size-4" fill="none" aria-hidden>
      <path
        d="M8 14s4.5-4.1 4.5-7.5a4.5 4.5 0 0 0-9 0C3.5 9.9 8 14 8 14Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <circle cx="8" cy="6.5" r="1.6" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 16 16" className="size-4" fill="none" aria-hidden>
      <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M8 5v3l2 1.3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
