import { groq } from "next-sanity";

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0]{
    companyName, shortName, footerBlurb, nif, phone, email,
    addressStreet, addressPostal, addressCity, mapUrl,
    hoursWeek, hoursSat, socials
  }
`;

export const servicesQuery = groq`
  *[_type == "service"] | order(order asc){ title, description, icon }
`;

export const brandsQuery = groq`
  *[_type == "brand"] | order(order asc){ name, url, logo }
`;

export const catalogsQuery = groq`
  *[_type == "catalog"] | order(order asc){
    name, description, color, ctaLabel, url, logo
  }
`;

export const statsQuery = groq`
  *[_type == "stat"] | order(order asc){ value, label }
`;

export const testimonialsQuery = groq`
  *[_type == "testimonial"] | order(order asc){
    quote, name, role, rating, date, avatar
  }
`;

export const faqsQuery = groq`
  *[_type == "faq"] | order(order asc){ question, answer }
`;

export const postsQuery = groq`
  *[_type == "post"] | order(publishedAt desc){
    title, "slug": slug.current, excerpt, publishedAt, coverImage
  }
`;

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0]{
    title, "slug": slug.current, excerpt, publishedAt, coverImage, body
  }
`;
