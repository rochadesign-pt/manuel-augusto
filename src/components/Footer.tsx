import Link from "next/link";

import { Logo } from "./Logo";
import { footerNav } from "@/lib/nav";
import type { SiteSettings } from "@/lib/types";

const YEAR = 2025;

export function Footer({ settings }: { settings: SiteSettings }) {
  return (
    <footer id="contacto" className="bg-navy text-white/70">
      <div className="container-page py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-xs">
            <Logo
              companyName={settings.companyName}
              shortName={settings.shortName}
              variant="light"
            />
            <p className="mt-5 text-sm leading-relaxed text-white/60">
              {settings.footerBlurb}
            </p>
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
          </FooterCol>

          <FooterCol title="Horário">
            <p>{settings.hoursWeek}</p>
            <p>{settings.hoursSat}</p>
            <div className="mt-4 space-y-2">
              {footerNav.slice(0, 4).map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="block transition-colors hover:text-white"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </FooterCol>

          <FooterCol title="Acompanhe-nos">
            <ul className="space-y-2.5">
              {settings.socials.map((s) => (
                <li key={s.platform}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2.5 transition-colors hover:text-white"
                  >
                    <SocialIcon platform={s.platform} />
                    {s.platform}
                  </a>
                </li>
              ))}
            </ul>
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
