export type Client = {
  name: string;
  logo: string;       // path under /public
  url?: string;       // optional external URL
  industry?: string;
};

/**
 * Clients we've delivered for or actively partner with. Logos live in
 * /public/products (kept there from the initial media drop). Adding a new
 * client is a one-line append to this array.
 */
export const clients: Client[] = [
  {
    name: "TriggerX",
    logo: "/products/triggerx.png",
    industry: "Workflow automation",
  },
  {
    name: "Grow9X",
    logo: "/products/grow9x.png",
    industry: "Growth / RevOps",
  },
  {
    name: "TechForge",
    logo: "/products/techforge.png",
    industry: "Engineering services",
  },
];
