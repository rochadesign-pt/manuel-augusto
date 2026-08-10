export interface NavLink {
  label: string;
  href: string;
}

export const mainNav: NavLink[] = [
  { label: "Sobre", href: "/sobre" },
  { label: "Serviços", href: "/servicos" },
  { label: "Eletrodomésticos", href: "/eletrodomesticos" },
  { label: "Material Elétrico", href: "/material-eletrico" },
  { label: "Assistência", href: "/apoio-tecnico" },
  { label: "Notícias", href: "/noticias" },
];

export const footerNav: NavLink[] = [
  { label: "Início", href: "/" },
  { label: "Sobre nós", href: "/sobre" },
  { label: "Serviços", href: "/servicos" },
  { label: "Eletrodomésticos", href: "/eletrodomesticos" },
  { label: "Material Elétrico", href: "/material-eletrico" },
  { label: "Assistência técnica", href: "/apoio-tecnico" },
  { label: "Notícias", href: "/noticias" },
  { label: "Contactos", href: "/contactos" },
];
