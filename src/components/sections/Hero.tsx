"use client";

/**
 * 2026-07 revamp: declarative headline anchored on the studio's real
 * positioning (production over demos) and two CTAs instead of three.
 * Part 2 added the layered motion backdrop: looping video, glow orbs,
 * and the scroll-reactive sand particle canvas (see layer note below).
 */
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Network,
  Database,
  Mic,
  Cpu,
  Eye,
  ShieldCheck,
  Activity,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { company } from "@/data/company";

/**
 * Per client feedback the hero backdrop is content-first again: the video
 * layer and sand particle canvas were removed, keeping only the drifting
 * glow orbs and the dotted grid as ambient texture.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
      <div aria-hidden className="absolute inset-0 overflow-hidden">
        <div className="orb left-[8%] top-[-120px] size-[480px] bg-accent/20" />
        <div className="orb orb-2 right-[4%] top-[80px] size-[400px] bg-accent-sky/15" />
        <div className="absolute inset-0 bg-grid opacity-40" />
      </div>

      <Container className="relative z-10">
        <div className="mx-auto max-w-5xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-ink/[0.04] px-3.5 py-1.5 text-[12px] font-medium uppercase tracking-[0.16em] text-ink/75"
          >
            <Sparkles className="size-3.5 text-accent" />
            {company.tagline}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-6 font-display font-semibold leading-[1.02] tracking-tight text-ink"
            style={{ fontSize: "clamp(40px, 5vw, 72px)" }}
          >
            Most AI stalls at the demo.
            <br />
            <span className="text-gradient-brand gradient-animate">We build the kind that ships.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed text-ink/65 md:text-[18px]"
          >
            QentrixAI designs, builds, and runs agentic systems, RAG pipelines, and
            voice AI that hold up under real users and real load.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
          >
            <Button href="/contact" size="lg">
              Start a conversation
              <ArrowRight className="size-4" />
            </Button>
            <Button href="/case-studies" variant="outline" size="lg">
              Explore case studies
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[13px] text-ink/55"
          >
            {company.capabilities.map((c) => (
              <span key={c} className="inline-flex items-center gap-2 whitespace-nowrap">
                <span className="size-1.5 rounded-full bg-accent/80 shadow-glow" /> {c}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Visual: bento with real system surfaces instead of stock imagery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="relative mx-auto mt-16 max-w-6xl"
        >
          <div className="grid grid-cols-12 gap-3 md:gap-4">
            <AgenticTile className="col-span-12 md:col-span-7 md:row-span-2" />

            <BentoTile
              className="col-span-6 md:col-span-5"
              icon={Database}
              eyebrow="RAG"
              title="Hybrid retrieval"
              body="BM25, vectors, and re-ranking with citation grounding. The eval suite ships on day one."
              accent="from-accent-sky/30 to-transparent"
              tone="text-accent-sky"
            />

            <VoiceTile className="col-span-6 md:col-span-5" />

            <BentoTile
              className="col-span-6 md:col-span-4"
              icon={Cpu}
              eyebrow="Edge AI"
              title="On-device inference"
              body="Quantized models for phones, kiosks, and the factory floor. Hybrid edge and cloud routing."
              accent="from-accent-violet/30 to-transparent"
              tone="text-accent-violet"
            />

            <BentoTile
              className="col-span-6 md:col-span-4"
              icon={Eye}
              eyebrow="Vision"
              title="Real-world CV"
              body="Detection, OCR, and video understanding tuned for noisy real-world cameras."
              accent="from-brand-500/30 to-transparent"
              tone="text-accent"
            />

            <BentoTile
              className="col-span-12 md:col-span-4"
              icon={ShieldCheck}
              eyebrow="Responsible AI"
              title="Eval · Red-team · PII"
              body="A defensible safety posture. Continuous evals, never one-off benchmarks."
              accent="from-accent-mint/30 to-transparent"
              tone="text-accent-mint"
            />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

function BentoTile({
  className,
  icon: Icon,
  eyebrow,
  title,
  body,
  accent,
  tone,
}: {
  className?: string;
  icon: React.ComponentType<{ className?: string }>;
  eyebrow: string;
  title: string;
  body: string;
  accent: string;
  tone: string;
}) {
  return (
    <div className={`relative overflow-hidden rounded-2xl border border-ink/[0.07] bg-surface/60 p-5 ${className ?? ""}`}>
      <div className={`absolute -top-12 -right-12 size-40 rounded-full bg-gradient-to-br ${accent} blur-2xl opacity-70`} />
      <div className={`inline-flex size-8 items-center justify-center rounded-lg border border-ink/10 bg-surface ${tone}`}>
        <Icon className="size-4" />
      </div>
      <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
        {eyebrow}
      </p>
      <h3 className="mt-1 font-display text-[17px] font-semibold tracking-tight text-ink md:text-[18px]">
        {title}
      </h3>
      <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink/65">{body}</p>
    </div>
  );
}

/** Big Agentic AI tile: dense content, tool list, tiny status row. */
function AgenticTile({ className }: { className?: string }) {
  const tools = ["search_kb", "send_email", "create_ticket", "wait_for_approval", "post_to_slack"];
  return (
    <div className={`relative overflow-hidden rounded-2xl border border-ink/[0.07] bg-surface/60 p-6 ${className ?? ""}`}>
      <div className="absolute -top-16 -right-16 size-56 rounded-full bg-gradient-to-br from-brand-500/30 to-transparent blur-2xl opacity-80" />
      <div className="relative">
        <div className="inline-flex size-9 items-center justify-center rounded-lg border border-ink/10 bg-surface text-accent">
          <Network className="size-4" />
        </div>
        <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
          Agentic AI
        </p>
        <h3 className="mt-1 font-display text-xl font-semibold tracking-tight text-ink md:text-2xl">
          LangGraph workflows with humans in the loop
        </h3>
        <p className="mt-2 max-w-md text-[14px] leading-relaxed text-ink/65">
          Stateful agents, typed tools, retries, approval checkpoints, and Langfuse
          tracing on every run. We design agents that survive Monday morning, not
          just demo day.
        </p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {tools.map((t) => (
            <span
              key={t}
              className="inline-flex items-center gap-1.5 rounded-md border border-ink/10 bg-base/60 px-2 py-1 font-mono text-[11px] text-ink/75"
            >
              <span className="size-1 rounded-full bg-accent" />
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-4 border-t border-ink/[0.06] pt-4 text-[12px] text-ink/55">
          <span className="inline-flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-accent-mint animate-pulse-glow" />
            12 traces · last 5 min
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Activity className="size-3" /> p95 1.8s
          </span>
          <span className="inline-flex items-center gap-1.5">
            tools · 5
          </span>
        </div>
      </div>
    </div>
  );
}

/** Voice AI tile with a live-looking waveform animation. */
function VoiceTile({ className }: { className?: string }) {
  const bars = [10, 22, 14, 30, 18, 26, 12, 24, 16, 28, 14, 20, 22, 12, 26];
  return (
    <div className={`relative overflow-hidden rounded-2xl border border-ink/[0.07] bg-surface/60 p-5 ${className ?? ""}`}>
      <div className="absolute -top-12 -right-12 size-40 rounded-full bg-gradient-to-br from-accent-mint/30 to-transparent blur-2xl opacity-70" />
      <div className="inline-flex size-8 items-center justify-center rounded-lg border border-ink/10 bg-surface text-accent-mint">
        <Mic className="size-4" />
      </div>
      <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
        Voice AI
      </p>
      <h3 className="mt-1 font-display text-[17px] font-semibold tracking-tight text-ink md:text-[18px]">
        Sub-second turn-taking
      </h3>
      <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink/65">
        Streaming ASR and TTS on phone-grade audio with smart escalation to humans.
      </p>

      <div className="mt-4 flex h-10 items-end gap-[3px]">
        {bars.map((h, i) => (
          <motion.span
            key={i}
            className="block w-[3px] rounded-full bg-gradient-to-t from-accent-mint/60 via-accent-mint to-accent-mint/80"
            initial={{ scaleY: 0.4 }}
            animate={{ scaleY: [0.4, h / 30, 0.4] }}
            transition={{
              duration: 1.2 + (i % 5) * 0.18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.06,
            }}
            style={{ height: 32, transformOrigin: "bottom" }}
          />
        ))}
      </div>
      <div className="mt-2 inline-flex items-center gap-1.5 text-[11px] font-medium text-ink/55">
        <span className="size-1.5 rounded-full bg-accent-mint animate-pulse-glow" />
        Listening · 22 ms latency
      </div>
    </div>
  );
}
