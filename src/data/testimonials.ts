export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  highlight?: boolean;
};

/**
 * Sample / placeholder testimonials drafted in-house. Replace with real client
 * quotes (signed-off) when available — the existing structure stays the same.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      "PerceptronAI's team walked us from a vague AI idea to a deployed product in eight weeks — with eval dashboards, runbooks, and a roadmap our team could continue.",
    author: "Internal stakeholder",
    role: "Director of Product (NDA)",
    highlight: true,
  },
  {
    quote:
      "We've worked with three AI vendors. PerceptronAI is the only one that ships with observability and eval already wired up. Their handover docs are the best we've seen.",
    author: "Engineering lead",
    role: "Mid-market SaaS (NDA)",
  },
  {
    quote:
      "The voice agent went live on real customer calls within a quarter. Containment numbers improved week over week — and we always know why, thanks to the eval suite.",
    author: "Operations leader",
    role: "Recruitment Agency (NDA)",
  },
];
