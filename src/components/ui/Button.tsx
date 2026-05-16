import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-brand-500 via-brand-600 to-accent-violet text-white shadow-glow hover:brightness-110",
  secondary:
    "bg-white/10 text-white border border-white/15 backdrop-blur hover:bg-white/15",
  ghost: "text-white/80 hover:text-white hover:bg-white/5",
  outline:
    "border border-white/20 text-white hover:border-white/40 hover:bg-white/5",
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
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950",
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
