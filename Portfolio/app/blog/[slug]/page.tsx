import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, posts } from "@/data/posts";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: post.title, description: post.summary };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article className="px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-4xl">
        <Link href="/blog" className="text-sm text-muted hover:text-ink">← Back to blog</Link>
        <header className="border-b border-line pb-10 pt-10">
          <div className="mb-5 flex flex-wrap gap-4 text-xs uppercase tracking-[0.13em] text-muted"><span>{post.date}</span><span>{post.readingTime}</span></div>
          <h1 className="font-display text-5xl leading-[.98] tracking-[-0.055em] sm:text-7xl">{post.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{post.summary}</p>
        </header>
        <div className="space-y-7 py-10 text-lg leading-8 text-muted">
          {post.content.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        </div>
      </div>
    </article>
  );
}
