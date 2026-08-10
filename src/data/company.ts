/**
 * 2026-07 revamp: copy rewritten in plain brand voice. Dash separators and
 * filler phrases removed, tagline shortened to something a human would say.
 */
export const company = {
  name: "QentrixAI",
  legalName: "QentrixAI",
  tagline: "AI product studio",
  mission:
    "We turn ideas into AI systems you can actually deploy. Strategy, design, engineering, and operations from one senior team.",
  positioning:
    "QentrixAI builds production AI systems, intelligent automation, and scalable software products for modern businesses.",
  founded: "2024",
  location: "Lahore, Pakistan, serving clients worldwide",
  hours: "Mon to Sat · 9:00 to 19:00 PKT",
  pillars: [
    "Production-first AI engineering",
    "Strategy, design, and development in one team",
    "GenAI, agentic AI, RAG, voice AI, and MLOps depth",
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
      body: "Most AI projects stall at the demo. We architect data pipelines, observability, and deployment from day one so what we ship survives real load and real users.",
    },
    {
      title: "One team, full path",
      body: "Strategy, product design, AI/ML, backend, DevOps, and analytics under one roof. No handoff loss between vendors.",
    },
    {
      title: "Strong AI engineering depth",
      body: "GenAI, agentic AI with LangGraph, RAG with hybrid retrieval, voice AI on Whisper and Parakeet, computer vision, plus mature MLOps with Langfuse, LangSmith, and Grafana.",
    },
    {
      title: "Cloud-ready by default",
      body: "Everything ships Dockerized, CI/CD wired, and ready for AWS, GCP, or Azure. We hand over clean repos, runbooks, and docs.",
    },
    {
      title: "Flexible engagement",
      body: "Fixed-scope MVPs, retainer-based engineering pods, product partnerships, or strategy-only sprints. We shape the engagement around your stage.",
    },
    {
      title: "Senior-only delivery",
      body: "No junior-heavy outsourcing. Every engagement is led by senior engineers and a domain consultant who own outcomes end to end.",
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
      body: "System architecture, model strategy, retrieval and agent design, UX wireframes, integration plan, security and compliance posture.",
    },
    {
      step: "03",
      title: "Build",
      body: "Iterative engineering with weekly demos. Clean repos, typed code, evaluation harnesses for prompts and agents, full test coverage on critical paths.",
    },
    {
      step: "04",
      title: "Integrate",
      body: "We connect to your CRM, data warehouse, auth, billing, and downstream tools. Production-grade APIs, webhooks, and queues.",
    },
    {
      step: "05",
      title: "Deploy",
      body: "Dockerized rollout to AWS, GCP, Azure, or your VPC. Blue/green or canary where needed. Secrets, SSL, and monitoring all wired.",
    },
    {
      step: "06",
      title: "Monitor & improve",
      body: "LLM observability with Langfuse and LangSmith, system observability with Grafana and Prometheus, continuous evals, and a clear improvement loop.",
    },
  ],
};

export type Company = typeof company;
