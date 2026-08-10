import { client } from "@/sanity/lib/client";
import { isSanityConfigured } from "@/sanity/env";

import * as seed from "./content";
import * as q from "./queries";
import type {
  Brand,
  Catalog,
  Faq,
  Post,
  Service,
  SiteSettings,
  Stat,
  Testimonial,
} from "./types";

/**
 * Fetch from Sanity when configured, otherwise return the local seed.
 * If a Sanity query fails or comes back empty, we gracefully fall back so the
 * site never renders blank.
 */
async function fromSanity<T>(
  query: string,
  fallback: T,
  isEmpty: (value: T) => boolean,
): Promise<T> {
  if (!isSanityConfigured) return fallback;
  try {
    const data = await client.fetch<T>(query, {}, {
      next: { revalidate: 60 },
    });
    if (data == null || isEmpty(data)) return fallback;
    return data;
  } catch {
    return fallback;
  }
}

const emptyArray = (v: unknown[]) => v.length === 0;

export function getSiteSettings(): Promise<SiteSettings> {
  return fromSanity<SiteSettings>(
    q.siteSettingsQuery,
    seed.siteSettings,
    (v) => !v || !v.companyName,
  );
}

export function getServices(): Promise<Service[]> {
  return fromSanity<Service[]>(q.servicesQuery, seed.services, emptyArray);
}

export function getBrands(): Promise<Brand[]> {
  return fromSanity<Brand[]>(q.brandsQuery, seed.brands, emptyArray);
}

export function getCatalogs(): Promise<Catalog[]> {
  return fromSanity<Catalog[]>(q.catalogsQuery, seed.catalogs, emptyArray);
}

export function getStats(): Promise<Stat[]> {
  return fromSanity<Stat[]>(q.statsQuery, seed.stats, emptyArray);
}

export function getTestimonials(): Promise<Testimonial[]> {
  return fromSanity<Testimonial[]>(
    q.testimonialsQuery,
    seed.testimonials,
    emptyArray,
  );
}

export function getFaqs(): Promise<Faq[]> {
  return fromSanity<Faq[]>(q.faqsQuery, seed.faqs, emptyArray);
}

export function getPosts(): Promise<Post[]> {
  return fromSanity<Post[]>(q.postsQuery, [], () => false);
}

export async function getPost(slug: string): Promise<Post | null> {
  if (!isSanityConfigured) return null;
  try {
    return await client.fetch<Post | null>(
      q.postBySlugQuery,
      { slug },
      { next: { revalidate: 60 } },
    );
  } catch {
    return null;
  }
}
