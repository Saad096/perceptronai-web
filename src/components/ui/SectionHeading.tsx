import { cn } from "@/lib/utils";

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
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-brand-200">
          <span className="size-1.5 rounded-full bg-brand-400 shadow-glow animate-pulse-glow" />
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-[44px] lg:leading-[1.05]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-white/65 md:text-[17px]">
          {description}
        </p>
      )}
    </div>
  );
}
