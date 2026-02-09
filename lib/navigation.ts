export interface NavItem {
  label: string;
  href: string;
  id?: string;
  children?: NavItem[];
}

export const mainNavigation: NavItem[] = [
  {
    label: "Home",
    href: "/",
    id: "home",
  },
  {
    label: "Quem Somos",
    href: "/page-about",
    id: "quem-somos",
  },
  {
    label: "Soluções/Serviços",
    href: "/services",
    id: "solucoes",
  },
  {
    label: "Unidades Hospitalares",
    href: "/page-departments",
    id: "unidades",
  },
  {
    label: "Compliance",
    href: "/compliance",
    id: "compliance",
  },
  {
    label: "Trabalhe Conosco",
    href: "/trabalhe-conosco",
    id: "trabalhe-conosco",
  },
  {
    label: "Contato",
    href: "/contact",
    id: "contato",
  },
];
