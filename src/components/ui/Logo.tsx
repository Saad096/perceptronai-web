import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Logo: small white "chip" carrying the PerceptronAI mark, paired with the
 * PerceptronAI wordmark in display type. The chip keeps the mark readable on
 * the dark UI; the wordmark guarantees brand legibility at any header size.
 */
export function Logo({
  className,
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const chip =
    size === "lg" ? "h-12 w-12 md:h-14 md:w-14" :
    size === "sm" ? "h-9 w-9" :
    "h-10 w-10 md:h-11 md:w-11";

  const text =
    size === "lg" ? "text-xl md:text-2xl" :
    size === "sm" ? "text-base" :
    "text-[17px] md:text-[19px]";

  return (
    <Link
      href="/"
      aria-label="PerceptronAI — home"
      className={cn(
        "group relative inline-flex items-center gap-2.5 transition-opacity",
        className
      )}
    >
      <span
        aria-hidden
        className="absolute -inset-2 -z-10 rounded-2xl opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(135deg, rgba(95,135,255,0.35), rgba(139,92,246,0.25) 45%, rgba(34,211,238,0.25))",
        }}
      />
      <span
        className={cn(
          "relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white ring-1 ring-white/10 shadow-[0_4px_24px_-6px_rgba(95,135,255,0.55)]",
          chip
        )}
      >
        <Image
          src="/logo/perceptronai-logo.webp"
          alt="PerceptronAI logo mark"
          width={120}
          height={120}
          className="size-full object-contain p-1"
          priority
        />
      </span>
      <span
        className={cn(
          "font-display font-semibold tracking-tight text-white",
          text
        )}
      >
        Perceptron<span className="text-gradient-brand">AI</span>
      </span>
    </Link>
  );
}
