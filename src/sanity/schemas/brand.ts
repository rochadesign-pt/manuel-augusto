import { defineField, defineType } from "sanity";

export const brand = defineType({
  name: "brand",
  title: "Marca",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nome",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "logo",
      title: "Logótipo",
      type: "image",
      options: { hotspot: true },
      description: "Idealmente PNG/SVG com fundo transparente.",
    }),
    defineField({
      name: "url",
      title: "Website da marca",
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
