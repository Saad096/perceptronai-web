/**
 * 2026-07 revamp: circular avatar layout (no hard-cornered portraits),
 * semantic tokens, accent ring on hover.
 */
import Image from "next/image";
import { Linkedin } from "lucide-react";
import type { TeamMember } from "@/data/team";

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article className="group relative flex h-full flex-col items-center overflow-hidden rounded-2xl border border-ink/[0.06] bg-surface/60 p-6 text-center transition-all duration-[250ms] hover:-translate-y-1 hover:border-ink/15 hover:shadow-card card-glow">
      <div className="relative size-28 shrink-0 overflow-hidden rounded-full ring-2 ring-ink/10 transition-all duration-300 group-hover:ring-accent/50">
        <Image
          src={member.image}
          alt={`${member.name}, ${member.role} at QentrixAI`}
          fill
          sizes="112px"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
        />
      </div>

      <p className="mt-5 text-[12px] font-medium uppercase tracking-[0.14em] text-accent">
        {member.role}
      </p>
      <h3 className="mt-1 font-display text-[20px] font-semibold text-ink">
        {member.name}
      </h3>
      <p className="text-[13px] text-ink/55">{member.background}</p>

      <p className="mt-3 text-[13.5px] leading-relaxed text-ink/70">{member.bio}</p>

      <div className="mt-4 flex flex-wrap justify-center gap-1.5">
        {member.skills.slice(0, 4).map((s) => (
          <span
            key={s}
            className="rounded-full border border-ink/10 bg-ink/[0.03] px-2.5 py-1 text-[11px] text-ink/70"
          >
            {s}
          </span>
        ))}
      </div>

      {member.linkedin && (
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto pt-5 inline-flex items-center gap-2 text-[13px] font-medium text-ink/70 transition-colors hover:text-accent"
          aria-label={`${member.name} on LinkedIn`}
        >
          <span className="grid size-8 place-items-center rounded-full border border-ink/10 transition-all group-hover:border-accent/40">
            <Linkedin className="size-3.5" />
          </span>
          LinkedIn
        </a>
      )}
    </article>
  );
}
