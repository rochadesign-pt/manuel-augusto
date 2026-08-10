import type {
  Brand,
  Catalog,
  Faq,
  Service,
  SiteSettings,
  Stat,
  Testimonial,
} from "./types";

/**
 * Local seed content — mirrors the Figma base so the site renders fully
 * before a Sanity project is connected. Once the client publishes documents
 * in the Studio, live content takes over automatically.
 */

export const siteSettings: SiteSettings = {
  companyName: "Manuel Augusto & Filhos, Lda.",
  shortName: "MA",
  footerBlurb: "Disponíveis para ajudar famílias há mais de 60 anos.",
  nif: "501801332",
  phone: "234 322 751",
  email: "geral@manuelaugusto.pt",
  addressStreet: "Av. 25 de Abril, 38-A",
  addressPostal: "3830-044",
  addressCity: "Ílhavo",
  mapUrl: "https://maps.google.com/?q=Av.+25+de+Abril+38-A+Ílhavo",
  hoursWeek: "Seg–Sex: 09h–19h",
  hoursSat: "Sábado: 09h–13h",
  socials: [
    { platform: "Facebook", url: "https://facebook.com" },
    { platform: "Instagram", url: "https://instagram.com" },
    { platform: "X", url: "https://x.com" },
  ],
};

export const services: Service[] = [
  {
    title: "Aconselhamento",
    description:
      "Explicamos as diferenças, comparamos opções e ajudamos a perceber o que se encaixa no seu dia a dia e no seu espaço.",
    icon: "advice",
  },
  {
    title: "Eletrodomésticos",
    description:
      "Grandes e pequenos eletrodomésticos, de marcas de confiança, escolhidos com conhecimento.",
    icon: "appliance",
  },
  {
    title: "Peças e acessórios",
    description:
      "Antes de substituir, vale a pena reparar. Temos peças para muitas marcas e modelos.",
    icon: "parts",
  },
  {
    title: "Assistência técnica",
    description:
      "Avaria no equipamento? A nossa equipa diagnostica e resolve — com rapidez e sem surpresas na fatura.",
    icon: "wrench",
  },
];

export const brands: Brand[] = [
  { name: "Bosch" },
  { name: "JuneX" },
  { name: "LG" },
  { name: "Meireles" },
  { name: "Balay" },
  { name: "Hyundai" },
  { name: "Siemens" },
];

export const catalogs: Catalog[] = [
  {
    name: "Bosch",
    description: "Veja o catálogo dos produtos Bosch que pode adquirir connosco.",
    color: "#E1231A",
    ctaLabel: "Ver catálogo",
  },
  {
    name: "Siemens",
    description:
      "Veja o catálogo dos produtos Siemens que pode adquirir connosco.",
    color: "#009999",
    ctaLabel: "Ver catálogo",
  },
  {
    name: "Balay",
    description: "Veja o catálogo dos produtos Balay que pode adquirir connosco.",
    color: "#2664f0",
    ctaLabel: "Ver catálogo",
  },
];

export const stats: Stat[] = [
  { value: "60+", label: "Anos de mercado" },
  { value: "1000+", label: "Clientes atendidos" },
  { value: "95%", label: "Taxa de satisfação" },
];

export const testimonials: Testimonial[] = [
  {
    quote: "Produtos de excelente qualidade e preços justos, recomendo muito.",
    name: "Maria Santos",
    role: "Arquiteta",
    rating: 5,
    date: "12 Setembro de 2023",
  },
  {
    quote:
      "A Manuel Augusto & Filhos superou todas as minhas expectativas com um serviço rápido e profissional.",
    name: "João Silva",
    role: "Cliente há anos",
    rating: 5,
    date: "12 Setembro de 2023",
  },
  {
    quote:
      "Um atendimento diferenciado que faz toda a diferença na hora de escolher os melhores equipamentos.",
    name: "Pedro Oliveira",
    role: "Engenheiro elétrico",
    rating: 5,
    date: "12 Setembro de 2023",
  },
];

export const faqs: Faq[] = [
  {
    question: "Quais marcas de eletrodomésticos trabalham?",
    answer:
      "Trabalhamos com as principais marcas do mercado, como Bosch, Siemens, LG, Balay, Meireles e outras, garantindo qualidade e durabilidade.",
  },
  {
    question: "Como funciona a assistência técnica?",
    answer:
      "Oferecemos suporte técnico especializado, com diagnóstico rápido e solução eficiente para problemas em equipamentos elétricos.",
  },
  {
    question: "Atendem empresas e residências?",
    answer:
      "Sim, atendemos tanto clientes residenciais quanto empresariais, com soluções personalizadas para cada necessidade.",
  },
  {
    question: "Qual a região de atuação?",
    answer:
      "Os nossos serviços são focados em Ílhavo e região, com atendimento personalizado e de alta qualidade.",
  },
  {
    question: "Como solicitar um orçamento?",
    answer:
      "Pode solicitar orçamento pelo nosso site, telefone ou e-mail. A nossa equipa está pronta para o atender.",
  },
];
