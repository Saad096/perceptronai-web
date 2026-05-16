import {
  Banknote,
  HeartPulse,
  ShieldCheck,
  Headset,
  Scale,
  GraduationCap,
  Truck,
  Landmark,
  ShoppingBag,
  Factory,
  type LucideIcon,
} from "lucide-react";

export type Industry = {
  slug: string;
  name: string;
  short: string;
  icon: LucideIcon;
  highlights: string[];
};

export const industries: Industry[] = [
  {
    slug: "fintech",
    name: "FinTech",
    short: "Fraud, KYC, agentic onboarding and document-heavy back-office automation.",
    icon: Banknote,
    highlights: [
      "AI KYC & document verification",
      "Fraud and AML signal pipelines",
      "Agentic financial back-office",
    ],
  },
  {
    slug: "healthtech",
    name: "HealthTech",
    short: "Clinical documentation, intake automation, and de-identified analytics.",
    icon: HeartPulse,
    highlights: [
      "AI scribe & clinical documentation",
      "Patient intake voice agents",
      "PHI redaction and HIPAA-aligned pipelines",
    ],
  },
  {
    slug: "insuretech",
    name: "InsureTech",
    short: "Claims triage, policy Q&A and document extraction at scale.",
    icon: ShieldCheck,
    highlights: [
      "Claims document extraction",
      "Policy Q&A copilots",
      "Fraud-pattern detection on claims",
    ],
  },
  {
    slug: "customertech",
    name: "CustomerTech",
    short: "Voice and chat agents that deflect tickets without hallucinating answers.",
    icon: Headset,
    highlights: [
      "Voice IVR replacement",
      "Knowledge-grounded support copilots",
      "Quality scoring on real conversations",
    ],
  },
  {
    slug: "legaltech",
    name: "LegalTech",
    short: "Contract intelligence, clause search, and case-law retrieval.",
    icon: Scale,
    highlights: [
      "Contract review & clause extraction",
      "Citation-grounded legal research",
      "Matter intake & triage automation",
    ],
  },
  {
    slug: "edtech",
    name: "EdTech",
    short: "Tutors, study companions, and assessment with grounded reasoning.",
    icon: GraduationCap,
    highlights: [
      "Subject-tuned tutoring agents",
      "Automated grading with rationale",
      "Curriculum-grounded RAG",
    ],
  },
  {
    slug: "logistics",
    name: "Logistics & Supply Chain",
    short: "Demand forecasting, route AI, and document automation for freight.",
    icon: Truck,
    highlights: [
      "Demand & inventory forecasting",
      "Bill-of-lading & invoice extraction",
      "Route and load optimisation",
    ],
  },
  {
    slug: "govtech",
    name: "GovTech & Public Sector",
    short: "Citizen services, policy search, and accountable AI for government data.",
    icon: Landmark,
    highlights: [
      "Citizen-services chatbots",
      "Policy and statute retrieval",
      "Auditable, on-prem AI deployments",
    ],
  },
  {
    slug: "retail-ecommerce",
    name: "Retail & E-commerce",
    short: "Product search, conversational shopping, and content automation.",
    icon: ShoppingBag,
    highlights: [
      "Semantic product search",
      "Conversational shopping agents",
      "Catalog enrichment & content generation",
    ],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing & Industry",
    short: "Vision QA, predictive maintenance, and edge intelligence on the line.",
    icon: Factory,
    highlights: [
      "Vision-based quality inspection",
      "Predictive maintenance models",
      "Edge inference on Jetson / industrial PCs",
    ],
  },
];
