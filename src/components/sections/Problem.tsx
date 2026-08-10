import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { AlertCircle, GitBranch, ChartNoAxesCombined, ShieldAlert } from "lucide-react";

const failures = [
  {
    icon: AlertCircle,
    title: "Stuck at the demo stage",
    body: "Models look great in a notebook but never reach a deploy pipeline. No monitoring, no eval, no rollback.",
  },
  {
    icon: GitBranch,
    title: "Brittle architecture",
    body: "Prompts, agents and retrieval all stitched by hand. Hard to debug, harder to evolve.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "No measurable quality",
    body: "Teams can't answer 'is quality up or down this week'. Improvements ship on vibes.",
  },
  {
    icon: ShieldAlert,
    title: "Cost & risk surprises",
    body: "Token spend and latency only surface after launch. Compliance gaps follow soon after.",
  },
];

export function Problem() {
  return (
    <section className="section">
      <Container>
        <SectionHeading
          eyebrow="The Problem"
          title="Most AI projects fail after the demo. Here's why."
          description="It's rarely the model. It's the missing architecture, evaluation, observability, and deployment planning. QentrixAI focuses on the full path, not just the shiny part."
          align="center"
        />
        <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2">
          {failures.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.05}>
              <div className="flex h-full gap-4 rounded-2xl border border-ink/[0.06] bg-ink/[0.02] p-5">
                <div className="grid size-10 shrink-0 place-items-center rounded-xl border border-red-400/20 bg-red-400/10 text-red-600 dark:text-red-300">
                  <f.icon className="size-4" />
                </div>
                <div>
                  <h3 className="font-display text-[16px] font-semibold text-ink">{f.title}</h3>
                  <p className="mt-1 text-[14px] text-ink/65">{f.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
