export interface NavItem {
  label: string;
  href: string;
  id?: string;
  children?: NavItem[];
}

export const esNavigation: NavItem[] = [
  {
    label: "Inicio",
    href: "/es",
    id: "home",
  },
  {
    label: "Quiénes Somos",
    href: "/es/quem-somos",
    id: "quienes-somos",
  },
  {
    label: "Soluciones/Servicios",
    href: "#departments-2",
    id: "soluciones",
  },
  {
    label: "Unidades Hospitalarias",
    href: "#hospital-units",
    id: "unidades-hospitalarias",
  },
  {
    label: "Compliance",
    href: "/es/compliance",
    id: "compliance",
  },
];

export const mainNavigation: NavItem[] = [
  {
    label: "Home",
    href: "/",
    id: "home",
  },
  {
    label: "Quem Somos",
    href: "/quem-somos",
    id: "quem-somos",
  },
  {
    label: "Soluções/Serviços",
    href: "#departments-2",
    id: "solucoes",
  },
  {
    label: "Unidades Hospitalares",
    href: "#hospital-units",
    id: "unidades-hospitalares",
  },
  {
    label: "Compliance",
    href: "/compliance",
    id: "compliance",
  },
];
