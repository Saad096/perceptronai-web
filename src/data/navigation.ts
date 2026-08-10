/**
 * 2026-07 revamp: nav labels rewritten in human, sentence-case brand voice.
 * Primary nav trimmed to five items so it fits the floating pill header.
 * Team and Contact remain reachable via the footer and the "Work with us"
 * CTA button in the header.
 */
export type NavItem = { label: string; href: string };

export const primaryNav: NavItem[] = [
  { label: "What we build", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Case studies", href: "/case-studies" },
  { label: "Our story", href: "/about" },
  { label: "Insights", href: "/blogs" },
];

export const footerSections: { title: string; links: NavItem[] }[] = [
  {
    title: "Company",
    links: [
      { label: "Our story", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Case studies", href: "/case-studies" },
    ],
  },
  {
    title: "Work",
    links: [
      { label: "What we build", href: "/services" },
      { label: "Products", href: "/products" },
      { label: "Insights", href: "/blogs" },
      { label: "Work with us", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy policy", href: "/privacy" },
      { label: "Terms of service", href: "/terms" },
    ],
  },
];
