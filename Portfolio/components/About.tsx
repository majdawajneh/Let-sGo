import { site } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-b border-line px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
      <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[.35fr_1fr]">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">About / 01</p>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="max-w-4xl">
            <p className="font-display text-4xl leading-[1.04] tracking-[-0.05em] sm:text-5xl lg:text-7xl">
              Hey! I’m {site.name}, a Software Engineer & Full-Stack Developer based in{" "}
              {site.location}, focused on building reliable, scalable, and well-crafted
              web applications.
            </p>

            <div className="mt-8 grid gap-6 text-base leading-7 text-muted md:grid-cols-2">
              <p>
                I work across the full development lifecycle, from designing responsive
                interfaces and application flows to building backend APIs, authentication
                systems, business logic, and relational data models.
              </p>

              <p>
                I care about clean architecture, maintainable code, thoughtful performance,
                and creating software that feels polished for users while remaining
                structured and dependable behind the scenes.
              </p>
            </div>
            <a href="#contact" className="mt-9 inline-flex rounded-full bg-ink px-5 py-3 text-sm font-medium text-page transition hover:-translate-y-0.5">
              Hire me
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
