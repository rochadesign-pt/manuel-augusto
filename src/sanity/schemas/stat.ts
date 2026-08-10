import { defineField, defineType } from "sanity";

export const stat = defineType({
  name: "stat",
  title: "Número / estatística",
  type: "document",
  fields: [
    defineField({
      name: "value",
      title: "Valor",
      type: "string",
      description: "Ex.: 60+, 95%, 1000+",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "label",
      title: "Legenda",
      type: "string",
      validation: (r) => r.required(),
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
  preview: { select: { title: "value", subtitle: "label" } },
});
