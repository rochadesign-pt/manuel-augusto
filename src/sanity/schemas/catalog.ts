import { defineField, defineType } from "sanity";

export const catalog = defineType({
  name: "catalog",
  title: "Catálogo de marca",
  type: "document",
  description: "Os cartões coloridos de catálogo (Bosch, Siemens, Balay…).",
  fields: [
    defineField({
      name: "name",
      title: "Marca",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "description",
      title: "Descrição",
      type: "text",
      rows: 2,
      initialValue: "Veja o catálogo dos produtos que pode adquirir connosco.",
    }),
    defineField({
      name: "color",
      title: "Cor de fundo",
      type: "string",
      description: "Cor HEX do cartão (ex.: #E1231A).",
      initialValue: "#2664f0",
    }),
    defineField({
      name: "logo",
      title: "Logótipo (branco)",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "ctaLabel",
      title: "Texto do botão",
      type: "string",
      initialValue: "Ver catálogo",
    }),
    defineField({
      name: "url",
      title: "Link do catálogo",
      type: "url",
    }),
    defineField({
      name: "order",
      title: "Ordem",
      type: "number",
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: "Ordem",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: { select: { title: "name", media: "logo" } },
});
