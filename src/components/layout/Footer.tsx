import Link from "next/link";
import { Github, Linkedin, Mail, MessageCircle, Instagram, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { footerSections } from "@/data/navigation";
import { publicEnv, getBookingUrl } from "@/lib/env";
import { XIcon } from "@/components/ui/Icons";

export function Footer() {
  const year = new Date().getFullYear();
  const s = publicEnv.socials;
  const profile = publicEnv.profile;
  return (
    <footer className="relative mt-24 border-t border-white/[0.06] bg-ink-950/90">
      <div className="pointer-events-none absolute inset-x-0 -top-40 h-40 bg-gradient-to-b from-transparent via-brand-500/5 to-transparent" />
      <Container className="relative py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo size="lg" />
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/60">
              Production-ready AI products, agentic workflows, RAG systems, voice AI, edge intelligence, and cloud-native software — from idea to deployment.
            </p>
            <ul className="mt-6 space-y-4 text-sm text-white/65">
              <li className="flex items-center gap-3">
                <MapPin className="size-4 shrink-0 text-white/50" />
                <span>{profile.location}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-4 shrink-0 text-white/50" />
                <a href={`mailto:${profile.email}`} className="hover:text-white">
                  {profile.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-white/50" />
                <a href={`tel:${profile.phone}`} className="hover:text-white">
                  {profile.phone}
                </a>
              </li>
            </ul>
            <div className="mt-6 flex items-center gap-2">
              {s.linkedin && (
                <a
                  href={s.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="grid size-9 place-items-center rounded-full border border-white/10 text-white/70 hover:bg-white/5 hover:text-white"
                >
                  <Linkedin className="size-4" />
                </a>
              )}
              {s.github && (
                <a
                  href={s.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="grid size-9 place-items-center rounded-full border border-white/10 text-white/70 hover:bg-white/5 hover:text-white"
                >
                  <Github className="size-4" />
                </a>
              )}
              {s.x && (
                <a
                  href={s.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X / Twitter"
                  className="grid size-9 place-items-center rounded-full border border-white/10 text-white/70 hover:bg-white/5 hover:text-white"
                >
                  <XIcon className="size-3.5" />
                </a>
              )}
              {s.instagram && (
                <a
                  href={s.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="grid size-9 place-items-center rounded-full border border-white/10 text-white/70 hover:bg-white/5 hover:text-white"
                >
                  <Instagram className="size-4" />
                </a>
              )}
              {s.whatsapp && (
                <a
                  href={s.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="grid size-9 place-items-center rounded-full border border-white/10 text-white/70 hover:bg-white/5 hover:text-white"
                >
                  <MessageCircle className="size-4" />
                </a>
              )}
            </div>
          </div>

          <div className="md:col-span-4 grid grid-cols-2 gap-8 md:gap-10">
            {footerSections.map((s) => (
              <div key={s.title}>
                <h4 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-white/50">
                  {s.title}
                </h4>
                <ul className="mt-4 space-y-2.5">
                  {s.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-[14px] text-white/70 hover:text-white"
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
            <h4 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-white/50">
              Get started
            </h4>
            <p className="mt-4 text-[14px] text-white/65">
              Book a 30-minute strategy call. We&apos;ll review your goal, suggest an approach, and tell you straight whether AI is the right tool.
            </p>
            <div className="mt-5 space-y-2.5">
              <Button href={getBookingUrl()} size="sm" className="w-full">
                Book a Strategy Call
              </Button>
              <Button href="/contact" variant="outline" size="sm" className="w-full">
                Contact form
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/[0.06] pt-6 text-xs text-white/45 md:flex-row md:items-center">
          <p>© {year} PerceptronAI. All rights reserved.</p>
          <p className="text-white/40">
            Built with Next.js · Tailwind CSS · Framer Motion. Engineered for production.
          </p>
        </div>
      </Container>
    </footer>
  );
}
