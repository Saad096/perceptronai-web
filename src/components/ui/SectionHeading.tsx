/**
 * Part 2 motion revamp: every section heading now rises into view through
 * the shared GSAP Reveal (data-reveal), so pages that never wrapped their
 * headings get the scroll reveal for free.
 */
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-ink/[0.03] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
          <span className="size-1.5 rounded-full bg-brand-400 shadow-glow animate-pulse-glow" />
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl lg:text-[44px] lg:leading-[1.05]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-ink/65 md:text-[17px]">
          {description}
        </p>
      )}
    </Reveal>
  );
}
