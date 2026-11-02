import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";
import { safeHref } from "@/lib/links";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.title, description: project.description };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(index + 1) % projects.length];

  return (
    <article className="px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[1500px]">
        <header className="grid gap-10 border-b border-line pb-12 lg:grid-cols-[1fr_.45fr]">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.16em] text-muted">Case study / {project.year}</p>
            <h1 className="font-display text-6xl tracking-[-0.06em] sm:text-8xl lg:text-9xl">{project.title}</h1>
          </div>
          <div className="grid content-end gap-5 text-sm">
            <div><span className="block text-xs uppercase tracking-[0.12em] text-muted">Role</span><strong className="mt-1 block font-medium">{project.role}</strong></div>
            <div><span className="block text-xs uppercase tracking-[0.12em] text-muted">Stack</span><p className="mt-1 text-muted">{project.tech.join(" · ")}</p></div>
            <div className="flex gap-4"><a href={safeHref(project.liveUrl)} target="_blank" rel="noreferrer">Live ↗</a><a href={safeHref(project.githubUrl)} target="_blank" rel="noreferrer">GitHub ↗</a></div>
          </div>
        </header>

        <div className="relative my-10 aspect-[16/8] overflow-hidden rounded-[2rem] bg-surface">
          <Image src={project.image} alt={`${project.title} hero`} fill priority sizes="100vw" className="object-cover" />
        </div>

        <div className="grid gap-12 py-12 lg:grid-cols-[.4fr_1fr]">
          <p className="text-xs uppercase tracking-[0.16em] text-muted">Overview</p>
          <p className="max-w-4xl font-display text-4xl leading-[1.06] tracking-[-0.045em] sm:text-5xl">{project.overview}</p>
        </div>

        <div className="grid gap-6 border-y border-line py-12 md:grid-cols-2">
          <section><p className="mb-4 text-xs uppercase tracking-[0.14em] text-muted">The problem</p><p className="max-w-xl text-base leading-7 text-muted">{project.problem}</p></section>
          <section><p className="mb-4 text-xs uppercase tracking-[0.14em] text-muted">The solution</p><p className="max-w-xl text-base leading-7 text-muted">{project.solution}</p></section>
        </div>

        <section className="grid gap-8 py-12 lg:grid-cols-[.4fr_1fr]">
          <p className="text-xs uppercase tracking-[0.14em] text-muted">Key features</p>
          <div className="grid gap-3 sm:grid-cols-2">{project.features.map((feature) => <div key={feature} className="rounded-2xl border border-line p-5 text-sm">{feature}</div>)}</div>
        </section>

        <section className="grid border-y border-line md:grid-cols-3">
          {project.results.map((result) => (
            <div key={result.label} className="border-b border-line p-6 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0">
              <strong className="font-display text-4xl tracking-[-0.04em]">{result.value}</strong>
              <span className="mt-2 block text-xs uppercase tracking-[0.12em] text-muted">{result.label}</span>
            </div>
          ))}
        </section>

        <section className="py-14">
          <p className="mb-6 text-xs uppercase tracking-[0.14em] text-muted">Gallery</p>
          <div className="grid gap-5 lg:grid-cols-2">
            {project.gallery.map((image, imageIndex) => (
              <div key={`${image}-${imageIndex}`} className={`relative overflow-hidden rounded-[2rem] bg-surface ${imageIndex === 0 ? "aspect-[16/10] lg:col-span-2" : "aspect-[4/3]"}`}>
                <Image src={image} alt={`${project.title} detail ${imageIndex + 1}`} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              </div>
            ))}
          </div>
        </section>

        <Link href={`/work/${nextProject.slug}`} className="group flex items-end justify-between border-t border-line py-12">
          <div><span className="text-xs uppercase tracking-[0.14em] text-muted">Next project</span><h2 className="mt-3 font-display text-4xl tracking-[-0.05em] sm:text-6xl">{nextProject.title}</h2></div>
          <span className="text-2xl transition group-hover:translate-x-2">→</span>
        </Link>
      </div>
    </article>
  );
}
