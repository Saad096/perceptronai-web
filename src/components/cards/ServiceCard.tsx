/**
 * 2026-07 revamp: semantic tokens, -4px hover lift with shadow, and a
 * "Learn more" underline that slides in from the left (.link-slide).
 */
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/data/services";
import { cn } from "@/lib/utils";

const accentRing: Record<Service["accent"], string> = {
  blue: "from-brand-500/30 to-transparent",
  violet: "from-accent-violet/30 to-transparent",
  cyan: "from-accent-sky/30 to-transparent",
  mint: "from-accent-mint/30 to-transparent",
};

const accentIcon: Record<Service["accent"], string> = {
  blue: "text-accent",
  violet: "text-accent-violet",
  cyan: "text-accent-sky",
  mint: "text-accent-mint",
};

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <Link
      href={`/services#${service.slug}`}
      data-cursor-text="View"
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink/[0.06] bg-surface/60 p-6 shadow-card transition-all duration-[250ms] ease-out hover:-translate-y-1 hover:border-ink/15 hover:shadow-glow card-glow"
    >
      <div className={cn("absolute -top-24 -right-20 size-64 rounded-full bg-gradient-to-br opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-40", accentRing[service.accent])} />

      <div className="relative">
        <div className={cn("inline-flex size-11 items-center justify-center rounded-xl border border-ink/10 bg-surface", accentIcon[service.accent])}>
          <Icon className="size-5" />
        </div>

        <h3 className="mt-5 font-display text-[20px] font-semibold tracking-tight text-ink">
          {service.title}
        </h3>
        <p className="mt-2 text-[14.5px] leading-relaxed text-ink/65">
          {service.short}
        </p>

        <ul className="mt-5 space-y-1.5">
          {service.bullets.slice(0, 3).map((b) => (
            <li key={b} className="flex items-start gap-2 text-[13.5px] text-ink/70">
              <span className="mt-1.5 size-1 shrink-0 rounded-full bg-accent" />
              {b}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-center justify-between border-t border-ink/[0.06] pt-4">
          <span className="link-slide text-[12px] font-medium uppercase tracking-[0.14em] text-ink/45 transition-colors duration-200 group-hover:text-accent">
            Learn more
          </span>
          <ArrowUpRight className="size-4 text-ink/50 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
        </div>
      </div>
    </Link>
  );
}
