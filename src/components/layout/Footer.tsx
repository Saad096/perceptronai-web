/**
 * 2026-07 revamp: removed the tech-attribution line, background is now a
 * tonal shift (one shade deeper than the page base, no hard border),
 * social icons sit in circular containers that lift with the accent on
 * hover, and copy was scrubbed of dash separators.
 */
import Link from "next/link";
import { Github, Linkedin, Mail, MessageCircle, Instagram, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { footerSections } from "@/data/navigation";
import { publicEnv, getBookingUrl } from "@/lib/env";

const socialIconClass =
  "grid size-9 place-items-center rounded-full border border-ink/10 text-ink/70 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent hover:shadow-glow";

export function Footer() {
  const year = new Date().getFullYear();
  const s = publicEnv.socials;
  const profile = publicEnv.profile;
  return (
    <footer className="relative mt-24 bg-ink/[0.04]">
      <div className="pointer-events-none absolute inset-x-0 -top-24 h-24 bg-gradient-to-b from-transparent to-ink/[0.04]" />
      <Container className="relative py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo size="lg" />
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink/60">
              Production AI products, agentic workflows, RAG systems, voice AI,
              edge intelligence, and cloud-native software. From idea to deployment.
            </p>
            <ul className="mt-6 space-y-4 text-sm text-ink/65">
              <li className="flex items-center gap-3">
                <MapPin className="size-4 shrink-0 text-ink/50" />
                <span>{profile.location}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-4 shrink-0 text-ink/50" />
                <a href={`mailto:${profile.email}`} className="transition-colors hover:text-accent">
                  {profile.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-ink/50" />
                <a href={`tel:${profile.phone}`} className="transition-colors hover:text-accent">
                  {profile.phone}
                </a>
              </li>
            </ul>
            <div className="mt-6 flex items-center gap-2">
              {s.linkedin && (
                <a href={s.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={socialIconClass}>
                  <Linkedin className="size-4" />
                </a>
              )}
              {s.github && (
                <a href={s.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={socialIconClass}>
                  <Github className="size-4" />
                </a>
              )}
              {s.instagram && (
                <a href={s.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={socialIconClass}>
                  <Instagram className="size-4" />
                </a>
              )}
              {s.whatsapp && (
                <a href={s.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className={socialIconClass}>
                  <MessageCircle className="size-4" />
                </a>
              )}
            </div>
          </div>

          <div className="md:col-span-4 grid grid-cols-2 gap-8 md:gap-10">
            {footerSections.map((sec) => (
              <div key={sec.title}>
                <h4 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-ink/50">
                  {sec.title}
                </h4>
                <ul className="mt-4 space-y-2.5">
                  {sec.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-[14px] text-ink/70 transition-colors duration-200 hover:text-accent"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-ink/50">
              Get started
            </h4>
            <p className="mt-4 text-[14px] text-ink/65">
              Book a 30-minute strategy call. We&apos;ll review your goal, suggest an
              approach, and tell you straight whether AI is the right tool.
            </p>
            <div className="mt-5 space-y-2.5">
              <Button href={getBookingUrl()} size="sm" className="w-full">
                Book a strategy call
              </Button>
              <Button href="/contact" variant="outline" size="sm" className="w-full">
                Work with us
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-ink/[0.06] pt-6 text-xs text-ink/45">
          <p>© {year} QentrixAI. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
