export interface NavItem {
  label: string;
  href: string;
  id?: string;
  children?: NavItem[];
}

export const mainNavigation: NavItem[] = [
  {
    label: "Home",
    href: "#",
    children: [
      { label: "Home main", href: "/" },
      { label: "home modern", href: "/home-modern" },
      { label: "home classic", href: "/home-classic" },
      { label: "home dentist", href: "/home-dentist" },
      { label: "home pharmacy", href: "/home-pharmacy" },
    ],
  },
  {
    label: "about us",
    href: "#",
    children: [
      { label: "about us", href: "/page-about" },
      { label: "medical services", href: "/page-our-services" },
      { label: "single service", href: "/single-service" },
      { label: "pricing & plans", href: "/page-pricing" },
      { label: "appointments", href: "/page-appointments" },
      { label: "help & fAQs", href: "/page-faqs" },
      { label: "our gallery", href: "/page-gallery" },
    ],
  },
  {
    label: "doctors",
    href: "#",
    children: [
      { label: "doctors timetable", href: "/doctors-timetable" },
      { label: "doctors standard", href: "/doctors-standard" },
      { label: "doctors modern", href: "/doctors-modern" },
      { label: "doctors grid", href: "/doctors-grid" },
      { label: "single doctor modern", href: "/doctors-single-modern" },
      { label: "single doctor classic", href: "/doctors-single-standard" },
    ],
  },
  {
    label: "blog",
    href: "#",
    children: [
      { label: "our blog", href: "/blog-grid-fullwidth" },
      { label: "blog-standard", href: "/blog-standard" },
      { label: "single blog post", href: "/blog-single-sidebar" },
    ],
  },
  {
    label: "shop",
    href: "#",
    children: [
      { label: "our products", href: "/shop-products" },
      { label: "single product", href: "/shop-single" },
      { label: "cart", href: "/shop-cart" },
      { label: "checkout", href: "/shop-checkout" },
      { label: "my account", href: "/shop-account" },
    ],
  },
  {
    label: "departments",
    href: "/page-departments",
    id: "departments",
    children: [
      { label: "neurology clinic", href: "/neurology-clinic" },
      { label: "pathology clinic", href: "/pathology-clinic" },
      { label: "laboratory analysis", href: "/laboratory-analysis" },
      { label: "pediatric clinic", href: "/pediatric-clinic" },
      { label: "cardiac clinic", href: "/cardiac-clinic" },
      { label: "ophthalmology clinic", href: "/ophthalmology-clinic" },
    ],
  },
  {
    label: "contact",
    href: "/contact",
    id: "contact",
  },
];
