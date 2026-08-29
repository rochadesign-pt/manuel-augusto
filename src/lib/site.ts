/**
 * Canonical site URL. Set NEXT_PUBLIC_SITE_URL to the production domain at
 * launch (e.g. https://manuelaugusto.pt); falls back to a sensible default.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://manuelaugusto.pt"
).replace(/\/$/, "");

export const SITE_NAME = "Manuel Augusto & Filhos, Lda.";
