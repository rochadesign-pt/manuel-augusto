import {
  Bricolage_Grotesque,
  Fraunces,
  Inter,
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
// only download when a designer switches to them.
export const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-fraunces",
  preload: false,
});

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
