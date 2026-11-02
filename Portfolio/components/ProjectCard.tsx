import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { safeHref } from "@/lib/links";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group">
      <Link href={`/work/${project.slug}`} className="block overflow-hidden rounded-[1.75rem] bg-surface">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={project.image}
            alt={`${project.title} project preview`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
          />
          <span className="absolute bottom-4 right-4 translate-y-2 rounded-full bg-page/90 px-4 py-2 text-xs font-medium opacity-0 backdrop-blur transition group-hover:translate-y-0 group-hover:opacity-100">
            View case study ↗
          </span>
        </div>
      </Link>
      <div className="mt-5 flex items-start justify-between gap-5">
        <div>
          <h3 className="font-display text-3xl tracking-[-0.04em]">{project.title}</h3>
          <p className="mt-2 max-w-xl text-sm leading-6 text-muted">{project.description}</p>
        </div>
        <span className="text-xs text-muted">{project.year}</span>
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        {project.tech.map((tech) => (
          <span key={tech} className="rounded-full border border-line px-3 py-1 text-xs text-muted">{tech}</span>
        ))}
        <a className="ml-auto text-xs text-muted hover:text-ink" href={safeHref(project.liveUrl)} target="_blank" rel="noreferrer">Live demo ↗</a>
        <a className="text-xs text-muted hover:text-ink" href={safeHref(project.githubUrl)} target="_blank" rel="noreferrer">GitHub ↗</a>
      </div>
    </article>
  );
}
