/**
 * 2026-07 revamp: variants moved to semantic tokens so buttons hold up in
 * both themes. Primary fills with the accent and lifts on hover; secondary
 * and outline fill with a 10% accent tint on hover (one consistent rule).
 * Hover/tap scale is CSS-only so the component stays server-renderable.
 */
import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-brand-500 to-brand-700 text-white shadow-glow hover:scale-[1.03] hover:brightness-110 active:scale-[0.97]",
  secondary:
    "bg-ink/10 text-ink border border-ink/15 backdrop-blur hover:bg-accent/10 hover:border-accent/40",
  ghost: "text-ink/80 hover:text-accent hover:bg-accent/10",
  outline:
    "border border-accent/40 text-ink hover:bg-accent/10 hover:border-accent",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-[15px]",
  lg: "h-12 px-6 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type ButtonProps = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type LinkButtonProps = CommonProps & {
  href: string;
  target?: string;
  rel?: string;
  prefetch?: boolean;
};

export function Button(props: ButtonProps | LinkButtonProps) {
  const { variant = "primary", size = "md", className, children, ...rest } = props as ButtonProps & {
    href?: string;
    target?: string;
    rel?: string;
    prefetch?: boolean;
  };
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-200 will-change-transform",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-base",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    variants[variant],
    sizes[size],
    className
  );

  if ("href" in props && props.href) {
    const isExternal = props.href.startsWith("http") || props.href.startsWith("mailto:");
    if (isExternal) {
      return (
        <a
          href={props.href}
          target={props.target ?? "_blank"}
          rel={props.rel ?? "noopener noreferrer"}
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={props.href} prefetch={props.prefetch} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
