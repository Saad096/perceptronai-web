import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/data/services";
import { cn } from "@/lib/utils";

const accentRing: Record<Service["accent"], string> = {
  blue: "from-brand-500/30 to-transparent",
  violet: "from-accent-violet/30 to-transparent",
  cyan: "from-accent-cyan/30 to-transparent",
  mint: "from-emerald-400/30 to-transparent",
};

const accentIcon: Record<Service["accent"], string> = {
  blue: "text-brand-300",
  violet: "text-violet-300",
  cyan: "text-cyan-300",
  mint: "text-emerald-300",
};

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <Link
      href={`/services#${service.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.035] card-glow"
    >
      <div className={cn("absolute -top-24 -right-20 size-64 rounded-full bg-gradient-to-br opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-40", accentRing[service.accent])} />

      <div className="relative">
        <div className={cn("inline-flex size-11 items-center justify-center rounded-xl border border-white/10 bg-ink-900", accentIcon[service.accent])}>
          <Icon className="size-5" />
        </div>

        <h3 className="mt-5 font-display text-[20px] font-semibold tracking-tight text-white">
          {service.title}
        </h3>
        <p className="mt-2 text-[14.5px] leading-relaxed text-white/65">
          {service.short}
        </p>

        <ul className="mt-5 space-y-1.5">
          {service.bullets.slice(0, 3).map((b) => (
            <li key={b} className="flex items-start gap-2 text-[13.5px] text-white/70">
              <span className="mt-1.5 size-1 shrink-0 rounded-full bg-brand-400" />
              {b}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-center justify-between border-t border-white/[0.06] pt-4">
          <span className="text-[12px] font-medium uppercase tracking-[0.14em] text-white/45">
            Learn more
          </span>
          <ArrowUpRight className="size-4 text-white/50 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
        </div>
      </div>
    </Link>
  );
}
