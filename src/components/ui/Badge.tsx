import { cn } from "@/lib/utils";

const tones = {
  default: "border-white/10 bg-white/[0.03] text-white/80",
  brand: "border-brand-400/30 bg-brand-500/10 text-brand-200",
  violet: "border-accent-violet/30 bg-accent-violet/10 text-violet-200",
  cyan: "border-accent-cyan/30 bg-accent-cyan/10 text-cyan-200",
  mint: "border-emerald-300/30 bg-emerald-400/10 text-emerald-200",
  amber: "border-amber-300/30 bg-amber-400/10 text-amber-200",
};

export function Badge({
  children,
  tone = "default",
  className,
}: {
  children: React.ReactNode;
  tone?: keyof typeof tones;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.12em]",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
