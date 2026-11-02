import Link from "next/link";
import { posts } from "@/data/posts";
import { Reveal } from "@/components/Reveal";

export function BlogPreview() {
  return (
    <section className="border-b border-line px-4 py-20 sm:px-6 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1500px]">
        <Reveal>
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-muted">Thoughts / 04</p>
              <h2 className="font-display text-5xl tracking-[-0.055em] sm:text-6xl">Notes on building</h2>
            </div>
            <Link href="/blog" className="hidden text-sm font-medium md:block">All articles ↗</Link>
          </div>
        </Reveal>
        <div className="border-t border-line">
          {posts.slice(0, 3).map((post, index) => (
            <Reveal key={post.slug} delay={index * 0.05}>
              <Link href={`/blog/${post.slug}`} className="group grid gap-4 border-b border-line py-6 transition hover:pl-2 md:grid-cols-[160px_1fr_auto] md:items-center">
                <span className="text-xs uppercase tracking-[0.12em] text-muted">{post.date}</span>
                <div>
                  <h3 className="font-display text-2xl tracking-[-0.035em] sm:text-3xl">{post.title}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">{post.summary}</p>
                </div>
                <span className="text-muted transition group-hover:translate-x-1 group-hover:text-ink">↗</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
