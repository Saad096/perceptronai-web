export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: "What kind of AI work do you take on?",
    answer:
      "End-to-end AI products and systems: GenAI copilots, agentic workflows, RAG / enterprise search, Voice AI, Edge AI, and production MLOps. We're comfortable from week-one strategy through deployment and post-launch operations.",
  },
  {
    question: "Are you a services company or a product company?",
    answer:
      "Both. We run a delivery practice for client engagements and an internal product studio (Minutely, NeuroMesh, SalesPire, VoxRoute, DocumentAI, AlmaRed). The product work informs how we deliver, and vice versa.",
  },
  {
    question: "How fast can you ship an MVP?",
    answer:
      "Typical AI MVP delivery is 6–10 weeks from kickoff to a deployed, usable product. Tighter timelines are possible for well-scoped projects with clean data and decisioned stakeholders.",
  },
  {
    question: "Can you work with our existing engineering team?",
    answer:
      "Yes. We commonly run as an embedded pod alongside in-house teams, or own a specific vertical (e.g. the AI layer, MLOps, or the data pipeline) while your team owns the rest.",
  },
  {
    question: "Which cloud providers do you support?",
    answer:
      "AWS, GCP, Azure, and on-prem / hybrid VPC deployments. Everything we ship is Dockerized by default so cloud choice rarely blocks delivery.",
  },
  {
    question: "How do you handle data privacy and compliance?",
    answer:
      "We default to data minimisation, role-based access, encryption at rest and in transit, and an explicit data-flow document per project. For regulated industries we deploy inside your VPC or on-prem and exclude third-party model APIs where required.",
  },
  {
    question: "What does pricing look like?",
    answer:
      "Three engagement shapes: fixed-scope MVP, monthly retainer pods, and product partnerships (revenue/equity blends). Book a strategy call and we'll suggest the shape that fits your stage and risk profile.",
  },
  {
    question: "Do you sign NDAs?",
    answer:
      "Yes. We are happy to sign a mutual NDA before the first technical conversation. Just include it in your message or ask on the call.",
  },
];
