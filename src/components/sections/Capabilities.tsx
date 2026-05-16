import { Container } from "@/components/ui/Container";

const items = [
  "GenAI & LLM Apps",
  "Agentic AI · LangGraph",
  "RAG Systems",
  "Voice AI",
  "Computer Vision",
  "NLP & Document AI",
  "Edge AI",
  "MLOps & Observability",
  "Responsible AI",
  "Blockchain · Web3",
  "AI × Blockchain",
  "Cloud & DevOps",
  "Product Engineering",
];

export function Capabilities() {
  return (
    <section className="relative -mt-4 pb-12 md:pb-16">
      <Container>
        <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.015]">
          <div className="marquee-mask relative overflow-hidden py-5 md:py-6">
            <div
              className="flex w-max items-center gap-x-10 whitespace-nowrap animate-marquee md:gap-x-14"
              aria-hidden="false"
            >
              {[...items, ...items].map((label, i) => (
                <div
                  key={`${label}-${i}`}
                  className="inline-flex shrink-0 items-center gap-2 text-[13px] font-medium uppercase tracking-[0.16em] text-white/55 md:text-[13.5px]"
                >
                  <span className="size-1.5 rounded-full bg-brand-400" />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
