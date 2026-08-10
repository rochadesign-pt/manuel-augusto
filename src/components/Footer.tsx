import Link from "next/link";

import { Logo } from "./Logo";
import { NewsletterForm } from "./NewsletterForm";
import { footerNav } from "@/lib/nav";
import type { SiteSettings } from "@/lib/types";

const YEAR = 2025;

export function Footer({ settings }: { settings: SiteSettings }) {
  return (
    <footer id="contacto" className="relative z-0 overflow-hidden bg-navy text-white/70">
      <div className="container-page relative z-10 pt-28 md:pt-40">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr]">
          <div className="max-w-xs">
            <Logo
              companyName={settings.companyName}
              shortName={settings.shortName}
              variant="light"
            />
            <p className="mt-5 text-sm leading-relaxed text-white/60">
              {settings.footerBlurb}
            </p>
            <div className="mt-6 flex gap-2.5">
              {settings.socials.map((s) => (
                <a
                  key={s.platform}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={s.platform}
                  className="grid size-9 place-items-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <SocialIcon platform={s.platform} />
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Contactos">
            <p className="text-white/80">{settings.addressStreet}</p>
            <p>
              {settings.addressPostal} — {settings.addressCity}
            </p>
            <a
              href={`tel:${settings.phone.replace(/\s/g, "")}`}
              className="mt-3 block text-white/80 transition-colors hover:text-white"
            >
              {settings.phone}
            </a>
            {settings.email && (
              <a
                href={`mailto:${settings.email}`}
                className="block transition-colors hover:text-white"
              >
                {settings.email}
              </a>
            )}
            <p className="mt-3 text-white/50">{settings.hoursWeek}</p>
            <p className="text-white/50">{settings.hoursSat}</p>
          </FooterCol>

          <FooterCol title="Navegação">
            <ul className="space-y-2">
              {footerNav.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterCol>

          <FooterCol title="Novidades">
            <p className="mb-4 text-white/60">
              Dicas e novidades sobre eletrodomésticos e assistência — sem spam.
            </p>
            <NewsletterForm />
          </FooterCol>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <p>
            © {YEAR} {settings.companyName} · NIF {settings.nif}
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/politica-de-privacidade" className="hover:text-white">
              Política de Privacidade
            </Link>
            <Link href="/termos" className="hover:text-white">
              Termos de Serviço
            </Link>
            <Link href="/cookies" className="hover:text-white">
              Definições de Cookies
            </Link>
          </div>
        </div>
      </div>

      {/* Oversized faded wordmark */}
      <div
        aria-hidden
        className="pointer-events-none relative z-0 mt-6 select-none overflow-hidden"
      >
        <p
          className="translate-y-[0.2em] whitespace-nowrap text-center font-display font-bold leading-[0.8] text-white/[0.045]"
          style={{ fontSize: "clamp(4rem, 19vw, 17rem)", letterSpacing: "-0.04em" }}
        >
          Manuel Augusto
        </p>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="text-sm leading-relaxed">
      <h3 className="mb-4 font-display text-xs font-semibold uppercase tracking-wider text-white/40">
        {title}
      </h3>
      <div className="space-y-1">{children}</div>
    </div>
  );
}

function SocialIcon({ platform }: { platform: string }) {
  const common = {
    className: "size-4 shrink-0",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-hidden": true,
  } as const;
  switch (platform) {
    case "Facebook":
      return (
        <svg {...common}>
          <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5H17V3.6c-.3 0-1.3-.1-2.45-.1-2.42 0-4.05 1.48-4.05 4.2v2.2H7.8V13h2.7v8h3Z" />
        </svg>
      );
    case "Instagram":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
          <circle cx="12" cy="12" r="3.6" />
          <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "X":
      return (
        <svg {...common}>
          <path d="M17.5 3h3l-6.6 7.5L21.7 21h-6l-4.3-5.7L6.2 21H3.2l7-8L2.6 3h6.1l3.9 5.2L17.5 3Zm-1 16h1.6L7.6 4.7H5.9L16.5 19Z" />
        </svg>
      );
    default:
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="8.5" />
        </svg>
      );
  }
}
