"use client";

import { motion } from "framer-motion";
import {
  CalendarClock,
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
import { getBookingUrl } from "@/lib/env";
import { company } from "@/data/company";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="absolute inset-0 -z-10 bg-grid opacity-50" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[480px] bg-gradient-to-b from-brand-500/15 via-transparent to-transparent" />

      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4 }}
        className="absolute -top-32 left-1/2 -z-10 size-[680px] -translate-x-1/2 rounded-full bg-gradient-to-br from-brand-500/25 via-accent-violet/15 to-accent-cyan/10 blur-3xl"
      />

      <Container className="relative">
        <div className="mx-auto max-w-4xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-[12px] font-medium uppercase tracking-[0.16em] text-white/75"
          >
            <Sparkles className="size-3.5 text-brand-300" />
            {company.tagline}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[68px]"
          >
            We build <span className="text-gradient-brand">AI products</span> that move
            <br className="hidden md:block" /> from idea to <span className="text-gradient-brand">production</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed text-white/65 md:text-[18px]"
          >
            PerceptronAI designs and develops GenAI apps, agentic workflows, RAG systems, voice AI platforms and scalable cloud-native products for startups and businesses. Strategy to deployment — under one roof.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
          >
            <Button href={getBookingUrl()} size="lg">
              <CalendarClock className="size-4" />
              Book a Strategy Call
            </Button>
            <Button href="/products" variant="secondary" size="lg">
              Explore Products
              <ArrowRight className="size-4" />
            </Button>
            <Button href="/services" variant="ghost" size="lg">
              View Services
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[13px] text-white/55"
          >
            {company.capabilities.map((c) => (
              <span key={c} className="inline-flex items-center gap-2 whitespace-nowrap">
                <span className="size-1.5 rounded-full bg-brand-400/80 shadow-glow" /> {c}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Visual: bento with denser content + Voice AI live visualizer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="relative mx-auto mt-16 max-w-6xl"
        >
          <div className="grid grid-cols-12 gap-3 md:gap-4">
            {/* Big Agentic AI tile */}
            <AgenticTile className="col-span-12 md:col-span-7 md:row-span-2" />

            {/* RAG */}
            <BentoTile
              className="col-span-6 md:col-span-5"
              icon={Database}
              eyebrow="RAG"
              title="Hybrid retrieval"
              body="BM25 + vector + re-rank with citation grounding. Eval suite ships on day one."
              accent="from-accent-cyan/30 to-transparent"
              tone="text-cyan-300"
            />

            {/* Voice AI animated */}
            <VoiceTile className="col-span-6 md:col-span-5" />

            {/* Edge AI */}
            <BentoTile
              className="col-span-6 md:col-span-4"
              icon={Cpu}
              eyebrow="Edge AI"
              title="On-device inference"
              body="Quantized models for phones, kiosks, factory floor. Hybrid edge–cloud routing."
              accent="from-accent-violet/30 to-transparent"
              tone="text-violet-300"
            />

            {/* Computer Vision */}
            <BentoTile
              className="col-span-6 md:col-span-4"
              icon={Eye}
              eyebrow="Vision"
              title="Real-world CV"
              body="Detection, OCR, video understanding — tuned for noisy real-world cameras."
              accent="from-brand-500/30 to-transparent"
              tone="text-brand-300"
            />

            {/* Responsible AI */}
            <BentoTile
              className="col-span-12 md:col-span-4"
              icon={ShieldCheck}
              eyebrow="Responsible AI"
              title="Eval · Red-team · PII"
              body="Defensible safety posture. Continuous evals, never one-off benchmarks."
              accent="from-emerald-400/30 to-transparent"
              tone="text-emerald-300"
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
    <div className={`relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 ${className ?? ""}`}>
      <div className={`absolute -top-12 -right-12 size-40 rounded-full bg-gradient-to-br ${accent} blur-2xl opacity-70`} />
      <div className={`inline-flex size-8 items-center justify-center rounded-lg border border-white/10 bg-ink-900 ${tone}`}>
        <Icon className="size-4" />
      </div>
      <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-200/90">
        {eyebrow}
      </p>
      <h3 className="mt-1 font-display text-[17px] font-semibold tracking-tight text-white md:text-[18px]">
        {title}
      </h3>
      <p className="mt-1.5 text-[13.5px] leading-relaxed text-white/65">{body}</p>
    </div>
  );
}

/** Big Agentic AI tile — denser content + tool list + tiny status row. */
function AgenticTile({ className }: { className?: string }) {
  const tools = ["search_kb", "send_email", "create_ticket", "wait_for_approval", "post_to_slack"];
  return (
    <div className={`relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 ${className ?? ""}`}>
      <div className="absolute -top-16 -right-16 size-56 rounded-full bg-gradient-to-br from-brand-500/30 to-transparent blur-2xl opacity-80" />
      <div className="relative">
        <div className="inline-flex size-9 items-center justify-center rounded-lg border border-white/10 bg-ink-900 text-brand-300">
          <Network className="size-4" />
        </div>
        <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-200/90">
          Agentic AI
        </p>
        <h3 className="mt-1 font-display text-xl font-semibold tracking-tight text-white md:text-2xl">
          LangGraph workflows with humans in the loop
        </h3>
        <p className="mt-2 max-w-md text-[14px] leading-relaxed text-white/65">
          Stateful agents, typed tools, retries, approval checkpoints, and Langfuse tracing on every run.
          We design agents that survive Monday morning — not just demo day.
        </p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {tools.map((t) => (
            <span
              key={t}
              className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-ink-900/60 px-2 py-1 font-mono text-[11px] text-white/75"
            >
              <span className="size-1 rounded-full bg-brand-400" />
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-4 border-t border-white/[0.06] pt-4 text-[12px] text-white/55">
          <span className="inline-flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse-glow" />
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
    <div className={`relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 ${className ?? ""}`}>
      <div className="absolute -top-12 -right-12 size-40 rounded-full bg-gradient-to-br from-emerald-400/30 to-transparent blur-2xl opacity-70" />
      <div className="inline-flex size-8 items-center justify-center rounded-lg border border-white/10 bg-ink-900 text-emerald-300">
        <Mic className="size-4" />
      </div>
      <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-200/90">
        Voice AI
      </p>
      <h3 className="mt-1 font-display text-[17px] font-semibold tracking-tight text-white md:text-[18px]">
        Sub-second turn-taking
      </h3>
      <p className="mt-1.5 text-[13.5px] leading-relaxed text-white/65">
        Streaming ASR + TTS on phone-grade audio, smart escalation to humans.
      </p>

      <div className="mt-4 flex h-10 items-end gap-[3px]">
        {bars.map((h, i) => (
          <motion.span
            key={i}
            className="block w-[3px] rounded-full bg-gradient-to-t from-emerald-400/60 via-emerald-300 to-emerald-200"
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
      <div className="mt-2 inline-flex items-center gap-1.5 text-[11px] font-medium text-white/55">
        <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse-glow" />
        Listening · 22 ms latency
      </div>
    </div>
  );
}
