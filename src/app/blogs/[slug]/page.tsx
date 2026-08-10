import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CTABanner } from "@/components/sections/CTABanner";
import { blogs, getBlog } from "@/data/blogs";
import { formatDate } from "@/lib/utils";
import { buildMetadata } from "@/lib/seo";

type Params = { slug: string };

export async function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const blog = getBlog(slug);
  if (!blog) return buildMetadata({ title: "Article not found", path: `/blogs/${slug}` });
  return buildMetadata({
    title: blog.title,
    path: `/blogs/${blog.slug}`,
    description: blog.excerpt,
    image: blog.cover && blog.cover.trim().length > 0 ? blog.cover : "/og.png",
  });
}

export default async function BlogDetail({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const blog = getBlog(slug);
  if (!blog) notFound();

  const related = blogs.filter((b) => b.slug !== blog.slug).slice(0, 3);

  return (
    <>
      <article className="pt-32 pb-16">
        <Container className="max-w-3xl">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-[13px] text-ink/60 hover:text-ink"
          >
            <ArrowLeft className="size-4" />
            All articles
          </Link>

          <div className="mt-6 flex items-center gap-3 text-[12.5px] text-ink/55">
            <span className="rounded-full border border-ink/10 bg-ink/[0.04] px-2.5 py-1 font-medium uppercase tracking-[0.12em]">
              {blog.category}
            </span>
            <time dateTime={blog.date}>{formatDate(blog.date)}</time>
            <span className="size-1 rounded-full bg-ink/30" />
            <span className="inline-flex items-center gap-1">
              <Clock className="size-3" /> {blog.readingTime}
            </span>
          </div>

          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight text-ink md:text-5xl">
            {blog.title}
          </h1>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/70">{blog.excerpt}</p>
          <p className="mt-6 text-[13px] text-ink/55">By {blog.author}</p>

          <div className="relative mt-10 overflow-hidden rounded-2xl border border-ink/[0.08] bg-surface">
            {blog.cover && blog.cover.trim().length > 0 ? (
              <Image
                src={blog.cover}
                alt={`${blog.title} cover`}
                width={1600}
                height={900}
                className="w-full object-cover"
              />
            ) : (
              <div
                className="relative aspect-[16/9] w-full"
                style={{
                  background:
                    "radial-gradient(circle at 25% 20%, rgba(110,96,234,0.45), transparent 55%), radial-gradient(circle at 75% 80%, rgba(122,112,240,0.4), transparent 55%), linear-gradient(135deg,#0a0f1f 0%, #04060d 60%, #050816 100%)",
                }}
              >
                <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
                <div className="absolute inset-0 flex items-end p-8">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-accent/85">
                      {blog.category}
                    </p>
                    <p className="mt-2 font-display text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl">
                      {blog.title}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="prose prose-invert mt-10 max-w-none">
            {blog.content.map((para, i) => (
              <p key={i} className="text-[16px] leading-relaxed text-ink/80">
                {para}
              </p>
            ))}
          </div>
        </Container>
      </article>

      <section className="section">
        <Container>
          <div className="flex items-end justify-between gap-6">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
              Keep reading
            </h2>
            <Button href="/blogs" variant="outline" size="sm">
              All articles <ArrowRight className="size-4" />
            </Button>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {related.map((b) => (
              <Link
                key={b.slug}
                href={`/blogs/${b.slug}`}
                className="group flex flex-col gap-3 rounded-2xl border border-ink/[0.06] bg-ink/[0.02] p-5 transition-colors hover:bg-ink/[0.04]"
              >
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
                  {b.category}
                </span>
                <h3 className="font-display text-[16px] font-semibold tracking-tight text-ink">
                  {b.title}
                </h3>
                <p className="text-[13.5px] text-ink/65">{b.excerpt}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
