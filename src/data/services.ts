import {
  Bot,
  Network,
  Database,
  Phone,
  Rocket,
  Cloud,
  BrainCircuit,
  Zap,
  Cpu,
  Eye,
  Languages,
  Boxes,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: LucideIcon;
  accent: "blue" | "violet" | "cyan" | "mint";
  outcomes: string[];
  technologies: string[];
  bullets: string[];
};

export const services: Service[] = [
  {
    slug: "generative-ai",
    title: "Generative AI Solutions",
    short: "Custom LLM apps, copilots, and multimodal AI built around your data.",
    description:
      "We design and ship custom LLM products — copilots, content engines, and reasoning workflows — anchored on your data, your tone, and your KPIs. No off-the-shelf chatbot wrappers.",
    icon: BrainCircuit,
    accent: "blue",
    outcomes: [
      "Domain-tuned copilots that lift task throughput",
      "Multimodal pipelines (text, vision, voice)",
      "Eval harnesses so quality is provable, not guessed",
    ],
    technologies: ["GPT-4o", "Claude", "Gemini", "Llama", "DeepSeek", "LangChain"],
    bullets: [
      "Custom LLM apps & copilots",
      "Prompt engineering & system prompt design",
      "Multimodal (text · image · voice)",
      "Fine-tuning, LoRA & adapter strategy",
      "Evaluation suites with automated regression",
    ],
  },
  {
    slug: "agentic-ai",
    title: "Agentic AI & Multi-Agent Systems",
    short: "Production agents that take real actions — with humans in the loop.",
    description:
      "We design tool-using, plan-and-execute agents with traceable state, retries, human approvals, and guardrails. Built to operate inside real business workflows — not just demos.",
    icon: Network,
    accent: "violet",
    outcomes: [
      "Autonomous workflows that move tickets, leads, and tasks",
      "Human-in-the-loop approvals on sensitive actions",
      "Stable orchestration across multi-agent teams",
    ],
    technologies: ["LangGraph", "LangChain", "CrewAI", "AutoGen", "LlamaIndex"],
    bullets: [
      "LangGraph & stateful agent design",
      "Tool-using agents with retries & guardrails",
      "Human-in-the-loop approvals",
      "Multi-agent orchestration & role specialisation",
      "Observability with Langfuse / LangSmith",
    ],
  },
  {
    slug: "rag-enterprise-search",
    title: "RAG & Enterprise Knowledge Systems",
    short: "Hybrid retrieval over your docs, contracts, tickets, and code.",
    description:
      "We build retrieval systems that actually answer — hybrid keyword + vector search, re-ranking, citation, eval. Suitable for legal, healthcare, finance and engineering docs.",
    icon: Database,
    accent: "cyan",
    outcomes: [
      "Trustworthy answers with inline citations",
      "Secure, role-aware enterprise data Q&A",
      "Measurable retrieval quality with eval scores",
    ],
    technologies: ["FAISS", "Pinecone", "Qdrant", "Azure AI Search", "Elasticsearch", "LlamaIndex"],
    bullets: [
      "Document intelligence & extraction",
      "Hybrid keyword + vector retrieval",
      "Vector DBs: FAISS · Pinecone · Qdrant · Chroma",
      "Citation, grounding & hallucination guards",
      "Retrieval evaluation with quantitative metrics",
    ],
  },
  {
    slug: "voice-ai",
    title: "Voice AI & Conversational Automation",
    short: "Real-time voice agents, call automation, and IVR replacement.",
    description:
      "ASR + TTS + LLM stitched into a real-time conversational layer. Outbound call agents, IVR replacement, recruitment screening, support deflection — all measurable.",
    icon: Phone,
    accent: "mint",
    outcomes: [
      "Sub-second turn-taking on real calls",
      "IVR replacement with higher containment",
      "Searchable transcripts and call analytics",
    ],
    technologies: ["Whisper", "WhisperX", "Parakeet", "Twilio", "ElevenLabs"],
    bullets: [
      "ASR / TTS / streaming voice agents",
      "AI call assistants & outbound agents",
      "IVR automation & intelligent routing",
      "Real-time transcription & analytics",
      "Call-center automation with CRM sync",
    ],
  },
  {
    slug: "computer-vision",
    title: "Computer Vision & Visual Intelligence",
    short: "Detection, recognition, OCR, and video understanding — built for real environments.",
    description:
      "Production computer-vision systems for identity, safety, quality, and content. We design for real lighting, real cameras, and real edge cases — not pristine benchmarks.",
    icon: Eye,
    accent: "blue",
    outcomes: [
      "Reliable detection across lighting and camera variance",
      "Auditable, privacy-respecting biometric pipelines",
      "Tight latency budgets, even on the edge",
    ],
    technologies: ["PyTorch", "YOLO", "MMDetection", "OpenCV", "MediaPipe", "ONNX Runtime"],
    bullets: [
      "Object detection & tracking",
      "Face recognition & anti-spoofing",
      "OCR & document layout analysis",
      "Video understanding & event detection",
      "Edge deployment (Jetson, mobile, kiosks)",
    ],
  },
  {
    slug: "nlp-document-ai",
    title: "NLP & Document AI",
    short: "Classification, extraction, summarisation, and translation — at production accuracy.",
    description:
      "Beyond chatbots. Classic-and-modern NLP for invoices, contracts, claims, tickets, and feedback streams — wired into the systems your team already uses.",
    icon: Languages,
    accent: "cyan",
    outcomes: [
      "Structured data from messy documents and conversations",
      "Multilingual coverage with grounded accuracy",
      "Lower handle time on text-heavy operations",
    ],
    technologies: ["spaCy", "Hugging Face", "Llama", "Whisper", "LayoutLM", "Tesseract"],
    bullets: [
      "Entity, intent & sentiment classification",
      "Information extraction from PDFs, scans, forms",
      "Multilingual translation & summarisation",
      "Topic modelling & feedback analytics",
      "PII detection & redaction",
    ],
  },
  {
    slug: "ai-mvp-development",
    title: "AI Product MVP Development",
    short: "Idea → shippable AI product in 6–10 weeks.",
    description:
      "A focused sprint from problem framing to a deployable MVP. UI/UX, backend, AI integration, Docker, CI/CD, and analytics — handed over with a roadmap for V1.",
    icon: Rocket,
    accent: "blue",
    outcomes: [
      "A real, deployable product — not a Figma deck",
      "Architecture ready for V1 scale",
      "Founder-friendly handover & docs",
    ],
    technologies: ["Next.js", "FastAPI", "Postgres", "Docker", "Vercel", "AWS"],
    bullets: [
      "Discovery & MVP scoping",
      "UI/UX design & prototyping",
      "Frontend, backend & AI integration",
      "Dockerized deploy with CI/CD",
      "Fast 1-week iteration cycles",
    ],
  },
  {
    slug: "blockchain-web3",
    title: "Blockchain, Web3 & AI × Blockchain",
    short: "Smart contracts, dApps, tokenomics — and AI agents that operate on-chain.",
    description:
      "Our CTO leads a dedicated blockchain practice covering smart contracts, secure dApps, and tokenized systems. We also fuse the two stacks — AI agents that read on-chain state, sign transactions through wallets, and enforce policies via smart contracts.",
    icon: Boxes,
    accent: "violet",
    outcomes: [
      "Audited smart contracts with test & invariant coverage",
      "Production-grade dApp front-ends and indexers",
      "AI agents that interact with chains safely and predictably",
    ],
    technologies: ["Solidity", "Foundry", "Hardhat", "Viem", "Ethers.js", "The Graph"],
    bullets: [
      "Smart contract design & audits-ready code",
      "EVM-compatible dApp engineering (Ethereum · Polygon · Base · Arbitrum)",
      "Token design, vesting, and governance modules",
      "On-chain indexers and analytics pipelines",
      "AI agents wired to wallets, oracles, and smart contracts",
    ],
  },
  {
    slug: "edge-ai",
    title: "Edge AI & On-Device Intelligence",
    short: "Run models close to the data — phones, kiosks, cameras, IoT.",
    description:
      "When latency, privacy, or connectivity rule out the cloud, we move models to the edge. Optimized inference, quantization, and hybrid edge–cloud routing tuned to your device class.",
    icon: Cpu,
    accent: "violet",
    outcomes: [
      "Real-time inference without cloud round-trips",
      "Data stays on-device for privacy & compliance",
      "Lower per-inference cost at scale",
    ],
    technologies: ["ONNX Runtime", "TensorRT", "OpenVINO", "Core ML", "TFLite", "NVIDIA Jetson"],
    bullets: [
      "Model quantization & pruning for edge",
      "On-device LLMs and vision models",
      "Hybrid edge + cloud routing",
      "Jetson / Coral / mobile deployments",
      "OTA model updates and remote eval",
    ],
  },
  {
    slug: "cloud-devops-mlops",
    title: "Cloud, DevOps & MLOps",
    short: "Production infrastructure for AI workloads.",
    description:
      "We design and run the boring-but-critical layer that keeps AI products alive: containers, deployments, observability, security, scaling, and LLM-specific evals.",
    icon: Cloud,
    accent: "cyan",
    outcomes: [
      "Predictable, observable AI deployments",
      "Cost controls on tokens, GPUs, and storage",
      "Clean CI/CD with one-click rollback",
    ],
    technologies: ["Docker", "Kubernetes", "AWS", "GCP", "Azure", "Langfuse", "Grafana"],
    bullets: [
      "Dockerized services & K8s-ready architecture",
      "CI/CD with GitHub Actions / GitLab",
      "LLM observability (Langfuse, LangSmith)",
      "System observability (Grafana, Prometheus, Loki)",
      "Cost dashboards & token budgeting",
    ],
  },
  {
    slug: "data-science-ml",
    title: "Data Science & ML Engineering",
    short: "Predictive models, forecasting, recommendations — productionized.",
    description:
      "Classic ML done right. We build forecasting, classification, and recommendation systems with proper data pipelines, evaluation, and deployment.",
    icon: BrainCircuit,
    accent: "blue",
    outcomes: [
      "Models that ship, monitored and re-trained",
      "Cleaner data pipelines and feature stores",
      "Clear ROI from each model in production",
    ],
    technologies: ["PyTorch", "TensorFlow", "scikit-learn", "MLflow", "W&B", "BigQuery"],
    bullets: [
      "Forecasting, churn & propensity models",
      "Recommendation systems",
      "Data pipelines & feature stores",
      "Model deployment, monitoring, re-training",
      "Experimentation & A/B framework",
    ],
  },
  {
    slug: "responsible-ai",
    title: "Responsible AI & Governance",
    short: "Safety, evaluation, bias, privacy — built into the system, not bolted on.",
    description:
      "AI you can defend in a board meeting and in a regulator's inbox. We build evaluation harnesses, red-team pipelines, PII controls, and governance docs so your AI ships with a clear safety posture.",
    icon: ShieldCheck,
    accent: "mint",
    outcomes: [
      "Defensible AI risk posture, in writing",
      "Continuous evals, not one-time benchmarks",
      "Compliance-aligned deployments (GDPR, HIPAA, SOC2 paths)",
    ],
    technologies: ["Langfuse", "Promptfoo", "Giskard", "Presidio", "Custom evals"],
    bullets: [
      "Eval suites with regression on every change",
      "Red-team & jailbreak resistance testing",
      "Bias and fairness assessments",
      "PII detection, redaction & data minimisation",
      "Model cards, system cards, governance docs",
    ],
  },
  {
    slug: "no-code-automation",
    title: "No-Code / Low-Code AI Automation",
    short: "Internal workflows automated without rebuilding your stack.",
    description:
      "We extend the tools your team already uses — n8n, Make, Zapier, your CRM — with AI steps. Faster than a full build, durable enough to keep around.",
    icon: Zap,
    accent: "mint",
    outcomes: [
      "Days-not-months ops automation",
      "AI inserted into existing CRM & sales flows",
      "Hand-off-able workflows your ops team can edit",
    ],
    technologies: ["n8n", "Make.com", "Zapier", "HubSpot", "Airtable", "Slack"],
    bullets: [
      "n8n, Make, Zapier workflow design",
      "CRM & lead-gen automation",
      "AI enrichment, scoring & routing",
      "Slack & email automations",
      "Documentation your ops team can own",
    ],
  },
  {
    slug: "ai-strategy-consulting",
    title: "AI Strategy & Consulting",
    short: "Roadmap, prioritization, and architecture review for AI initiatives.",
    description:
      "For teams who need clarity before they spend. We audit your data, prioritise use-cases, design the right architecture, and produce a defensible roadmap.",
    icon: Bot,
    accent: "violet",
    outcomes: [
      "Prioritised AI use-case roadmap",
      "Architecture & build-vs-buy decisions",
      "Risk, cost and compliance posture",
    ],
    technologies: ["Strategy", "Architecture", "Governance", "Compliance"],
    bullets: [
      "AI readiness audit",
      "Use-case discovery & ROI modelling",
      "Architecture & vendor selection",
      "Build vs buy decisions",
      "AI governance & risk posture",
    ],
  },
];
