import type { Image } from "sanity";

export type IconName =
  | "advice"
  | "appliance"
  | "parts"
  | "wrench"
  | "truck"
  | "shield"
  | "plug";

export interface Service {
  title: string;
  description: string;
  icon: IconName;
}

export interface Brand {
  name: string;
  logo?: Image;
  url?: string;
}

export interface Catalog {
  name: string;
  description: string;
  color: string;
  logo?: Image;
  ctaLabel: string;
  url?: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role?: string;
  avatar?: Image;
  rating: number;
  date?: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface SocialLink {
  platform: string;
  url: string;
}

export interface Post {
  title: string;
  slug: string;
  excerpt?: string;
  publishedAt?: string;
  coverImage?: Image;
  body?: unknown[];
}

export interface SiteSettings {
  companyName: string;
  shortName: string;
  footerBlurb: string;
  nif: string;
  phone: string;
  email?: string;
  addressStreet: string;
  addressPostal: string;
  addressCity: string;
  mapUrl?: string;
  hoursWeek: string;
  hoursSat: string;
  socials: SocialLink[];
}
