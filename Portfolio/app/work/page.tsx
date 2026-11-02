import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected full-stack software engineering projects and case studies.",
};

export default function WorkPage() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-14 max-w-5xl">
          <p className="mb-4 text-xs uppercase tracking-[0.16em] text-muted">All work</p>
          <h1 className="font-display text-6xl tracking-[-0.06em] sm:text-8xl lg:text-9xl">Projects built to work in the real world.</h1>
        </div>
        <div className="grid gap-x-6 gap-y-14 lg:grid-cols-2">
          {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
        </div>
      </div>
    </section>
  );
}
