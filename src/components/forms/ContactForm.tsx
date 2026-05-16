"use client";

import * as React from "react";
import { Send, MessageCircle, Mail, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { publicEnv } from "@/lib/env";
import { cn } from "@/lib/utils";

const services = [
  "Generative AI",
  "Agentic AI",
  "RAG / Enterprise Search",
  "Voice AI",
  "Edge AI",
  "AI MVP",
  "Cloud & DevOps",
  "Other",
];

const budgets = [
  "< $5k (exploration)",
  "$5k – $15k",
  "$15k – $40k",
  "$40k – $100k",
  "$100k+",
  "Not sure yet",
];

type State =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

export function ContactForm() {
  const [state, setState] = React.useState<State>({ status: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState({ status: "submitting" });
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    if ((data as Record<string, string>).honeypot) {
      setState({ status: "success", message: "Thanks — we'll be in touch." });
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setState({
          status: "error",
          message: json?.message || "Couldn't send right now. Please email or WhatsApp us — link below.",
        });
        return;
      }
      setState({
        status: "success",
        message: json?.message || "Thanks — we received your message and will reply within one business day.",
      });
      form.reset();
    } catch {
      setState({
        status: "error",
        message: "Network issue. Please email or WhatsApp us — link below.",
      });
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <input type="text" name="honeypot" autoComplete="off" tabIndex={-1} className="hidden" />

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" name="name" type="text" required placeholder="Your full name" />
        <Field label="Email" name="email" type="email" required placeholder="you@company.com" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Company" name="company" type="text" placeholder="Company / project" />
        <Field label="Phone / WhatsApp" name="phone" type="text" placeholder="+1 555 …" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Select label="Service interested in" name="service" options={services} />
        <Select label="Budget range" name="budget" options={budgets} />
      </div>
      <Field label="Message" name="message" type="textarea" required placeholder="Tell us about the problem, the team, and the ideal timeline." />

      <div className="mt-2 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
        <Button type="submit" disabled={state.status === "submitting"}>
          {state.status === "submitting" ? (
            <>
              <Loader2 className="size-4 animate-spin" /> Sending…
            </>
          ) : (
            <>
              <Send className="size-4" /> Send message
            </>
          )}
        </Button>
        <p className="text-[12.5px] text-white/50">
          We typically respond within one business day.
        </p>
      </div>

      {state.status === "success" && (
        <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-[14px] text-emerald-200">
          {state.message}
        </div>
      )}
      {state.status === "error" && (
        <div className="rounded-xl border border-amber-400/20 bg-amber-400/10 px-4 py-3 text-[14px] text-amber-200">
          <p>{state.message}</p>
          <div className="mt-2 flex flex-wrap gap-3">
            <a
              href={`mailto:${publicEnv.profile.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[13px] text-white"
            >
              <Mail className="size-3.5" /> Email
            </a>
            {publicEnv.socials.whatsapp && (
              <a
                href={publicEnv.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[13px] text-white"
              >
                <MessageCircle className="size-3.5" /> WhatsApp
              </a>
            )}
          </div>
        </div>
      )}
    </form>
  );
}

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-[14.5px] text-white placeholder-white/35 outline-none transition focus:border-brand-400/60 focus:bg-white/[0.05] focus:ring-2 focus:ring-brand-400/30";

function Field({
  label,
  name,
  type,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type: "text" | "email" | "textarea";
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="block text-[12.5px] font-medium uppercase tracking-[0.12em] text-white/60">
        {label}
        {required && <span className="text-brand-300"> *</span>}
      </span>
      {type === "textarea" ? (
        <textarea
          name={name}
          required={required}
          rows={5}
          placeholder={placeholder}
          className={cn(inputClass, "mt-2 resize-none")}
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className={cn(inputClass, "mt-2")}
        />
      )}
    </label>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <label className="block">
      <span className="block text-[12.5px] font-medium uppercase tracking-[0.12em] text-white/60">
        {label}
      </span>
      <select
        name={name}
        defaultValue=""
        className={cn(inputClass, "mt-2 appearance-none")}
      >
        <option value="" disabled className="bg-ink-900">
          Choose…
        </option>
        {options.map((o) => (
          <option key={o} value={o} className="bg-ink-900">
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}
