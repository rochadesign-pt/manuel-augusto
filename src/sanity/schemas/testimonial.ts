import { defineField, defineType } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Testemunho",
  type: "document",
  fields: [
    defineField({
      name: "quote",
      title: "Testemunho",
      type: "text",
      rows: 3,
      validation: (r) => r.required(),
    }),
    defineField({
      name: "name",
      title: "Nome",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "role",
      title: "Cargo / contexto",
      type: "string",
    }),
    defineField({
      name: "avatar",
      title: "Fotografia",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "rating",
      title: "Classificação (1–5)",
      type: "number",
      initialValue: 5,
      validation: (r) => r.min(1).max(5),
    }),
    defineField({
      name: "date",
      title: "Data",
      type: "string",
      description: "Ex.: 12 Setembro de 2023",
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
  preview: { select: { title: "name", subtitle: "role", media: "avatar" } },
});
