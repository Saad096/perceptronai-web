import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import type { Blog } from "@/data/blogs";
import { formatDate } from "@/lib/utils";

export function BlogCard({ blog }: { blog: Blog }) {
  const hasCover = !!blog.cover && blog.cover.trim().length > 0;

  return (
    <Link
      href={`/blogs/${blog.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink/[0.06] bg-ink/[0.02] transition-all duration-300 hover:border-ink/15 hover:bg-ink/[0.035] card-glow"
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        {hasCover ? (
          <>
            <Image
              src={blog.cover}
              alt={`${blog.title} cover`}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-base/80 via-base/20 to-transparent" />
          </>
        ) : (
          <GradientCover category={blog.category} title={blog.title} />
        )}
        <div className="absolute left-4 top-4">
          <span className="rounded-full border border-ink/15 bg-base/70 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-ink/80 backdrop-blur">
            {blog.category}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3 text-[12px] text-ink/55">
          <time dateTime={blog.date}>{formatDate(blog.date)}</time>
          <span className="size-1 rounded-full bg-ink/30" />
          <span className="inline-flex items-center gap-1">
            <Clock className="size-3" /> {blog.readingTime}
          </span>
        </div>
        <h3 className="mt-3 font-display text-[19px] font-semibold leading-snug tracking-tight text-ink group-hover:text-gradient-brand">
          {blog.title}
        </h3>
        <p className="mt-2 line-clamp-3 text-[14px] text-ink/65">{blog.excerpt}</p>
        <div className="mt-6 flex items-center justify-between border-t border-ink/[0.06] pt-4">
          <span className="text-[13px] font-medium text-ink/80">Read article</span>
          <ArrowUpRight className="size-4 text-ink/50 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
        </div>
      </div>
    </Link>
  );
}

function GradientCover({ category, title }: { category: string; title: string }) {
  return (
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(circle at 25% 20%, rgba(110,96,234,0.45), transparent 55%), radial-gradient(circle at 75% 80%, rgba(122,112,240,0.4), transparent 55%), linear-gradient(135deg,#0a0f1f 0%, #04060d 60%, #050816 100%)",
      }}
    >
      <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
      <div className="absolute inset-0 flex items-end p-6">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-accent/85">
            {category}
          </p>
          <p className="mt-2 font-display text-2xl font-semibold leading-tight tracking-tight text-white md:text-[26px]">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}
