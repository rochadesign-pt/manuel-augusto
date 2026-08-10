import { defineField, defineType } from "sanity";

export const service = defineType({
  name: "service",
  title: "Serviço",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "description",
      title: "Descrição",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "icon",
      title: "Ícone",
      type: "string",
      options: {
        list: [
          { title: "Aconselhamento", value: "advice" },
          { title: "Eletrodoméstico", value: "appliance" },
          { title: "Peças & acessórios", value: "parts" },
          { title: "Assistência técnica", value: "wrench" },
          { title: "Entrega", value: "truck" },
          { title: "Garantia", value: "shield" },
          { title: "Material elétrico", value: "plug" },
        ],
      },
      initialValue: "advice",
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
  preview: { select: { title: "title", subtitle: "icon" } },
});
