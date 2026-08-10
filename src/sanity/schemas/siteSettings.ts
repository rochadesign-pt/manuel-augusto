import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Definições do site",
  type: "document",
  groups: [
    { name: "general", title: "Geral", default: true },
    { name: "contact", title: "Contactos" },
    { name: "social", title: "Redes sociais" },
  ],
  fields: [
    defineField({
      name: "companyName",
      title: "Nome da empresa",
      type: "string",
      group: "general",
      initialValue: "Manuel Augusto & Filhos, Lda.",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "shortName",
      title: "Sigla (logótipo)",
      type: "string",
      group: "general",
      initialValue: "MA",
    }),
    defineField({
      name: "footerBlurb",
      title: "Frase do rodapé",
      type: "text",
      rows: 2,
      group: "general",
      initialValue: "Disponíveis para ajudar famílias há mais de 60 anos.",
    }),
    defineField({
      name: "nif",
      title: "NIF",
      type: "string",
      group: "general",
      initialValue: "501801332",
    }),
    defineField({
      name: "phone",
      title: "Telefone",
      type: "string",
      group: "contact",
      initialValue: "234 322 751",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      group: "contact",
    }),
    defineField({
      name: "addressStreet",
      title: "Morada",
      type: "string",
      group: "contact",
      initialValue: "Av. 25 de Abril, 38-A",
    }),
    defineField({
      name: "addressPostal",
      title: "Código postal",
      type: "string",
      group: "contact",
      initialValue: "3830-044",
    }),
    defineField({
      name: "addressCity",
      title: "Localidade",
      type: "string",
      group: "contact",
      initialValue: "Ílhavo",
    }),
    defineField({
      name: "mapUrl",
      title: "Link do Google Maps",
      type: "url",
      group: "contact",
    }),
    defineField({
      name: "hoursWeek",
      title: "Horário (semana)",
      type: "string",
      group: "contact",
      initialValue: "Seg–Sex: 09h–19h",
    }),
    defineField({
      name: "hoursSat",
      title: "Horário (sábado)",
      type: "string",
      group: "contact",
      initialValue: "Sábado: 09h–13h",
    }),
    defineField({
      name: "socials",
      title: "Redes sociais",
      type: "array",
      group: "social",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "platform",
              title: "Plataforma",
              type: "string",
              options: {
                list: ["Facebook", "Instagram", "X", "LinkedIn", "YouTube"],
              },
            }),
            defineField({ name: "url", title: "Link", type: "url" }),
          ],
          preview: { select: { title: "platform", subtitle: "url" } },
        },
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Definições do site" }),
  },
});
