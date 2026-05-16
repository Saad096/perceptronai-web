import Image from "next/image";
import { Linkedin } from "lucide-react";
import type { TeamMember } from "@/data/team";

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] transition-all duration-300 hover:border-white/15 hover:bg-white/[0.035] card-glow">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-gradient-to-br from-ink-800 to-ink-900">
        <Image
          src={member.image}
          alt={`${member.name}, ${member.role} at PerceptronAI`}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5">
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-brand-200/90">
            {member.role}
          </p>
          <h3 className="mt-1 font-display text-[22px] font-semibold text-white">
            {member.name}
          </h3>
          <p className="text-[13px] text-white/55">{member.background}</p>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-[14px] leading-relaxed text-white/70">{member.bio}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {member.skills.slice(0, 5).map((s) => (
            <span
              key={s}
              className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-white/70"
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
            className="mt-5 inline-flex items-center gap-2 self-start rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-[13px] font-medium text-white/85 hover:bg-white/[0.07]"
            aria-label={`${member.name} on LinkedIn`}
          >
            <Linkedin className="size-3.5" />
            LinkedIn
          </a>
        )}
      </div>
    </article>
  );
}
