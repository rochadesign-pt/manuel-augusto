import type { Metadata, Viewport } from "next";

import "./globals.css";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import {
  display,
  familjen,
  figtree,
  hanken,
  inter,
  karla,
  onest,
  overused,
  schibsted,
  sora,
  spaceGrotesk,
} from "./fonts";

const DESCRIPTION =
  "Há mais de 60 anos a cuidar da energia e do conforto da sua casa. Venda, aconselhamento e assistência técnica de eletrodomésticos e material elétrico em Ílhavo.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Manuel Augusto & Filhos, Lda. — Eletrodomésticos e Material Elétrico",
    template: "%s · Manuel Augusto & Filhos",
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "shopping",
  keywords: [
    "eletrodomésticos",
    "material elétrico",
    "assistência técnica",
    "reparação eletrodomésticos",
    "Ílhavo",
    "Aveiro",
    "Manuel Augusto & Filhos",
    "Bosch",
    "Siemens",
    "Balay",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: SITE_URL,
    siteName: SITE_NAME,
    title:
      "Manuel Augusto & Filhos, Lda. — Eletrodomésticos e Material Elétrico",
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Manuel Augusto & Filhos, Lda. — Eletrodomésticos e Material Elétrico",
    description: DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1626" },
  ],
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt"
      className={[
        inter.variable,
        display.variable,
        spaceGrotesk.variable,
        sora.variable,
        figtree.variable,
        karla.variable,
        onest.variable,
        hanken.variable,
        schibsted.variable,
        familjen.variable,
        overused.variable,
      ].join(" ")}
    >
      <body>{children}</body>
    </html>
  );
}
