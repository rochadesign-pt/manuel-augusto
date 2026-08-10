import type { Metadata, Viewport } from "next";

import "./globals.css";
import {
  display,
  familjen,
  figtree,
  hanken,
  inter,
  karla,
  onest,
  schibsted,
  sora,
  spaceGrotesk,
} from "./fonts";

export const metadata: Metadata = {
  metadataBase: new URL("https://manuelaugusto.pt"),
  title: {
    default: "Manuel Augusto & Filhos, Lda. — Eletrodomésticos e Material Elétrico",
    template: "%s · Manuel Augusto & Filhos",
  },
  description:
    "Há mais de 60 anos a cuidar da energia e do conforto da sua casa. Venda, aconselhamento e assistência técnica de eletrodomésticos e material elétrico em Ílhavo.",
  keywords: [
    "eletrodomésticos",
    "material elétrico",
    "assistência técnica",
    "Ílhavo",
    "Manuel Augusto",
  ],
  openGraph: {
    type: "website",
    locale: "pt_PT",
    siteName: "Manuel Augusto & Filhos, Lda.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0f1e33",
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
      ].join(" ")}
    >
      <body>{children}</body>
    </html>
  );
}
