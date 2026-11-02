import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on software engineering, architecture, product development, and performance.",
};

export default function BlogPage() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1500px]">
        <header className="mb-14 max-w-5xl">
          <p className="mb-4 text-xs uppercase tracking-[0.16em] text-muted">Thoughts</p>
          <h1 className="font-display text-6xl tracking-[-0.06em] sm:text-8xl lg:text-9xl">Notes from building software.</h1>
        </header>

        <div className="border-t border-line">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group grid gap-4 border-b border-line py-7 transition hover:pl-2 md:grid-cols-[160px_1fr_auto] md:items-center">
              <span className="text-xs uppercase tracking-[0.12em] text-muted">{post.date}</span>
              <div><h2 className="font-display text-3xl tracking-[-0.04em] sm:text-4xl">{post.title}</h2><p className="mt-2 max-w-2xl text-sm leading-6 text-muted">{post.summary}</p></div>
              <div className="flex items-center gap-4 text-xs text-muted"><span>{post.readingTime}</span><span className="transition group-hover:translate-x-1">↗</span></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
