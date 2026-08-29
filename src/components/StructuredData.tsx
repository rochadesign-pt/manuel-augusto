import { SITE_NAME, SITE_URL } from "@/lib/site";
import type { SiteSettings } from "@/lib/types";

/**
 * JSON-LD structured data for rich results. Emits an ElectronicsStore
 * (a LocalBusiness subtype) plus a WebSite node, wired from the live site
 * settings so address, phone and hours stay in one place.
 */
export function StructuredData({ settings }: { settings: SiteSettings }) {
  const phoneIntl = `+351${settings.phone.replace(/\D/g, "")}`;

  const graph = [
    {
      "@type": "ElectronicsStore",
      "@id": `${SITE_URL}/#business`,
      name: SITE_NAME,
      url: SITE_URL,
      image: `${SITE_URL}/opengraph-image`,
      logo: `${SITE_URL}/icon.svg`,
      telephone: phoneIntl,
      email: settings.email,
      vatID: settings.nif,
      priceRange: "€€",
      description:
        "Venda, aconselhamento e assistência técnica de eletrodomésticos e material elétrico em Ílhavo há mais de 60 anos.",
      address: {
        "@type": "PostalAddress",
        streetAddress: settings.addressStreet,
        postalCode: settings.addressPostal,
        addressLocality: settings.addressCity,
        addressRegion: "Aveiro",
        addressCountry: "PT",
      },
      areaServed: [
        { "@type": "City", name: "Ílhavo" },
        { "@type": "AdministrativeArea", name: "Aveiro" },
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
          ],
          opens: "09:00",
          closes: "19:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "09:00",
          closes: "13:00",
        },
      ],
      sameAs: settings.socials?.map((s) => s.url).filter(Boolean) ?? [],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: "pt-PT",
      publisher: { "@id": `${SITE_URL}/#business` },
    },
  ];

  const json = { "@context": "https://schema.org", "@graph": graph };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
