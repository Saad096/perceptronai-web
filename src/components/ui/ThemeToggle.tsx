"use client";

/**
 * 2026-07 revamp: pill-shaped light/dark toggle. The preference persists in
 * localStorage under "qx-theme" and is applied pre-paint by the bootstrap
 * script in layout.tsx.
 */
import * as React from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = React.useState<"light" | "dark" | null>(null);

  React.useEffect(() => {
    setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem("qx-theme", next);
    } catch {
      /* private mode: preference simply won't persist */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      className={cn(
        "relative grid size-9 shrink-0 place-items-center rounded-full border border-ink/10 text-ink/70 transition-all duration-300 ease-out hover:border-accent/40 hover:text-accent",
        className
      )}
    >
      <Sun
        className={cn(
          "absolute size-4 transition-all duration-300",
          theme === "dark" ? "scale-0 opacity-0 -rotate-90" : "scale-100 opacity-100 rotate-0"
        )}
      />
      <Moon
        className={cn(
          "absolute size-4 transition-all duration-300",
          theme === "dark" ? "scale-100 opacity-100 rotate-0" : "scale-0 opacity-0 rotate-90"
        )}
      />
    </button>
  );
}
