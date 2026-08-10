import {
  Bricolage_Grotesque,
  Familjen_Grotesk,
  Figtree,
  Hanken_Grotesk,
  Inter,
  Karla,
  Onest,
  Schibsted_Grotesk,
  Sora,
  Space_Grotesk,
} from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Default display face (preloaded).
export const display = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-bricolage",
});

// Alternates for the live type-tweaks panel — lazy (not preloaded), so they
// only download when a designer switches to them. All sans-serif.
export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  preload: false,
});

export const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-sora",
  preload: false,
});

export const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-figtree",
  preload: false,
});

export const karla = Karla({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-karla",
  preload: false,
});

export const onest = Onest({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-onest",
  preload: false,
});

export const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-hanken",
  preload: false,
});

export const schibsted = Schibsted_Grotesk({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-schibsted",
  preload: false,
});

export const familjen = Familjen_Grotesk({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-familjen",
  preload: false,
});
