export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-10-01";

export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

/**
 * Falls back to a harmless placeholder so the app (and the Studio bundle)
 * always builds, even before the client wires up a real Sanity project.
 */
export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "placeholder";

/**
 * True only when a real Sanity project is configured. When false, the site
 * renders from the local seed content in `src/lib/content.ts` and never hits
 * the network.
 */
export const isSanityConfigured =
  !!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== "placeholder";
