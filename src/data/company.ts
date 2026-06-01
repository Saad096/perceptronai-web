export const company = {
  name: "QentrixAI",
  legalName: "QentrixAI",
  tagline: "AI Product Studio + Automation Partner",
  mission:
    "We help startups and businesses turn ideas into intelligent, scalable, deployable AI systems — from strategy and MVP design to cloud deployment, observability, and growth.",
  positioning:
    "QentrixAI builds production-ready AI systems, intelligent automation platforms, and scalable software products for modern businesses.",
  founded: "2024",
  location: "Lahore, Pakistan — serving clients worldwide",
  hours: "Mon – Sat · 9:00 – 19:00 PKT",
  pillars: [
    "Production-first AI engineering",
    "Strategy + design + development in one team",
    "GenAI, Agentic AI, RAG, Voice AI & MLOps depth",
    "Dockerized, cloud-ready delivery with full handover",
  ],
  capabilities: [
    "GenAI",
    "Agentic AI",
    "RAG Systems",
    "Voice AI",
    "Computer Vision",
    "Edge AI",
    "Responsible AI",
    "Blockchain",
    "Cloud & DevOps",
  ],
  stats: [
    { label: "Years in AI & data engineering", value: "5+" },
    { label: "Production systems shipped", value: "25+" },
    { label: "Client geographies served", value: "12" },
    { label: "Avg. MVP delivery window", value: "6 wks" },
  ],
  whyUs: [
    {
      title: "Production over demos",
      body: "Most AI projects stall at the demo. We architect data pipelines, observability and deployment from day one so what we ship survives real load and real users.",
    },
    {
      title: "One team, full path",
      body: "Strategy, product design, AI/ML, backend, DevOps and analytics under one roof — no handoff loss between vendors.",
    },
    {
      title: "Strong AI engineering depth",
      body: "GenAI, Agentic AI with LangGraph, RAG with hybrid retrieval, Voice AI on Whisper/Parakeet, Computer Vision, plus mature MLOps with Langfuse, LangSmith, Grafana.",
    },
    {
      title: "Cloud-ready by default",
      body: "Everything ships Dockerized, CI/CD wired, and ready for AWS, GCP or Azure. We hand over clean repos, runbooks and docs.",
    },
    {
      title: "Flexible engagement",
      body: "Fixed-scope MVPs, retainer-based engineering pods, product partnerships, or strategy-only sprints — we shape the engagement around your stage.",
    },
    {
      title: "Senior-only delivery",
      body: "No junior-heavy outsourcing. Every engagement is led by senior engineers and a domain consultant who own outcomes end-to-end.",
    },
  ],
  process: [
    {
      step: "01",
      title: "Discover",
      body: "Stakeholder interviews, data audit, success metrics, risk mapping. We end this phase with a written problem framing and a measurable target.",
    },
    {
      step: "02",
      title: "Design",
      body: "System architecture, model strategy, retrieval & agent design, UX wireframes, integration plan, security & compliance posture.",
    },
    {
      step: "03",
      title: "Build",
      body: "Iterative engineering with weekly demos. Clean repos, typed code, evaluation harnesses for prompts/agents, full test coverage on critical paths.",
    },
    {
      step: "04",
      title: "Integrate",
      body: "We connect to your CRM, data warehouse, auth, billing and downstream tools. APIs, webhooks, queues — production-grade.",
    },
    {
      step: "05",
      title: "Deploy",
      body: "Dockerized rollout to AWS, GCP, Azure, or your VPC. Blue/green or canary where needed. Secrets, SSL, monitoring all wired.",
    },
    {
      step: "06",
      title: "Monitor & Improve",
      body: "LLM observability (Langfuse, LangSmith), system observability (Grafana, Prometheus), continuous evals and a clear improvement loop.",
    },
  ],
};

export type Company = typeof company;
