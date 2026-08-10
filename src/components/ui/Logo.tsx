/**
 * 2026-07 revamp: the mark now uses the new circular QENTIX ribbon
 * (public/logo/qentrix-mark.png) inside a fully circular glass container.
 * `compact` drives the 48px → 32px header shrink on scroll.
 */
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  size = "md",
  compact = false,
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
  compact?: boolean;
}) {
  const circle = compact
    ? "size-8"
    : size === "lg"
      ? "size-12 md:size-14"
      : size === "sm"
        ? "size-8"
        : "size-12";

  const text = compact
    ? "text-[15px]"
    : size === "lg"
      ? "text-xl md:text-2xl"
      : size === "sm"
        ? "text-base"
        : "text-[17px] md:text-[19px]";

  return (
    <Link
      href="/"
      aria-label="QentrixAI home"
      className={cn("group relative inline-flex items-center gap-2.5", className)}
    >
      <span
        className={cn(
          "relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full",
          "bg-surface/80 ring-1 ring-ink/10 shadow-[0_4px_20px_-6px_rgb(var(--color-accent-rgb)/0.45)]",
          "backdrop-blur transition-all duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)]",
          "group-hover:ring-accent/40",
          circle
        )}
      >
        <Image
          src="/logo/qentrix-mark.png"
          alt="QentrixAI logo mark"
          width={112}
          height={112}
          className="size-full object-contain p-[3px]"
          priority
        />
      </span>
      <span
        className={cn(
          "font-display font-semibold tracking-tight text-ink transition-all duration-[350ms]",
          text
        )}
      >
        Qentrix<span className="text-gradient-brand">AI</span>
      </span>
    </Link>
  );
}
