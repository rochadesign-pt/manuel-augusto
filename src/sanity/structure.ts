import type { StructureResolver } from "sanity/structure";

const SINGLETONS = new Set(["siteSettings"]);

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Conteúdo")
    .items([
      S.listItem()
        .title("Definições do site")
        .id("siteSettings")
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings"),
        ),
      S.divider(),
      S.documentTypeListItem("service").title("Serviços"),
      S.documentTypeListItem("brand").title("Marcas"),
      S.documentTypeListItem("catalog").title("Catálogos"),
      S.documentTypeListItem("stat").title("Números"),
      S.documentTypeListItem("testimonial").title("Testemunhos"),
      S.documentTypeListItem("faq").title("Perguntas frequentes"),
      S.divider(),
      S.documentTypeListItem("post").title("Notícias"),
      ...S.documentTypeListItems().filter(
        (item) =>
          ![
            "siteSettings",
            "service",
            "brand",
            "catalog",
            "stat",
            "testimonial",
            "faq",
            "post",
          ].includes(item.getId() ?? ""),
      ),
    ]);

export { SINGLETONS };
