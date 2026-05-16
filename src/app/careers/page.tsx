import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CTABanner } from "@/components/sections/CTABanner";
import { buildMetadata } from "@/lib/seo";
import { publicEnv } from "@/lib/env";

export const metadata = buildMetadata({
  title: "Careers",
  path: "/careers",
  description:
    "Join PerceptronAI. We hire senior AI engineers, platform engineers, and product operators who care about shipping production-grade systems.",
});

const principles = [
  {
    title: "Senior-only bench",
    body: "We keep the team small and senior on purpose. If you've shipped production AI systems and want a clean engineering culture, we'll talk.",
  },
  {
    title: "Production over polish",
    body: "Demos are easy. Surviving Monday morning is hard. We hire people who think about eval, observability, and rollback as features, not chores.",
  },
  {
    title: "Async-first, remote-friendly",
    body: "We work async by default, meet on purpose, and document everything. Time-zone tolerant. Lahore-based core team, global collaborators.",
  },
  {
    title: "Skin in the game",
    body: "Senior engineers and product operators have access to project-level upside on partnership-style engagements.",
  },
];

const openRoles = [
  {
    title: "Senior AI Engineer (GenAI / Agentic)",
    location: "Remote / Lahore · Full-time",
    summary:
      "Lead delivery on agentic and GenAI client engagements. Strong LangChain / LangGraph, eval, and production deployment background expected.",
  },
  {
    title: "Voice AI Engineer",
    location: "Remote · Full-time or Contract",
    summary:
      "Build streaming ASR + TTS systems on phone-grade audio. Whisper / WhisperX / Parakeet experience strongly preferred.",
  },
  {
    title: "Cloud & DevOps Engineer",
    location: "Remote / Lahore · Full-time",
    summary:
      "Own the deployment layer across client engagements. Docker, Kubernetes-ready architecture, CI/CD and observability.",
  },
  {
    title: "Product Designer (UI/UX)",
    location: "Remote · Contract",
    summary:
      "Design product surfaces for AI applications. Comfortable with bento layouts, dense data UI, and motion that respects users.",
  },
];

export default function CareersPage() {
  return (
    <>
      <section className="pt-32 pb-12">
        <Container>
          <SectionHeading
            eyebrow="Careers"
            title="Work with senior people on AI systems that ship."
            description="No army-of-juniors model, no busywork. Real engineering, real outcomes, real upside."
          />
        </Container>
      </section>

      <section className="pb-12">
        <Container>
          <div className="grid gap-4 md:grid-cols-2">
            {principles.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6"
              >
                <div className="inline-flex size-9 items-center justify-center rounded-lg border border-brand-400/30 bg-brand-500/10 text-brand-200">
                  <Sparkles className="size-4" />
                </div>
                <h3 className="mt-4 font-display text-[17px] font-semibold text-white">
                  {p.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-white/65">{p.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-white md:text-3xl">
            Open roles
          </h2>
          <div className="mt-6 divide-y divide-white/[0.06] rounded-2xl border border-white/[0.06] bg-white/[0.02]">
            {openRoles.map((r) => (
              <div
                key={r.title}
                className="flex flex-col items-start gap-3 p-6 md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <h3 className="font-display text-[17px] font-semibold text-white">{r.title}</h3>
                  <p className="mt-1 text-[13.5px] text-white/55">{r.location}</p>
                  <p className="mt-2 max-w-2xl text-[14px] text-white/70">{r.summary}</p>
                </div>
                <Button
                  href={`mailto:${publicEnv.profile.email}?subject=Career: ${encodeURIComponent(r.title)}`}
                  variant="outline"
                  size="sm"
                >
                  Apply <ArrowRight className="size-4" />
                </Button>
              </div>
            ))}
            <div className="p-6 text-[13.5px] text-white/55">
              Don't see the right fit? Email{" "}
              <a href={`mailto:${publicEnv.profile.email}`} className="text-brand-300 hover:underline">
                {publicEnv.profile.email}
              </a>{" "}
              with what you do best and a few links.
            </div>
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
