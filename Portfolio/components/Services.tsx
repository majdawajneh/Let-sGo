import { services } from "@/data/services";
import { Reveal } from "@/components/Reveal";

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 border-b border-line px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-muted">Services / 02</p>
            <h2 className="font-display text-5xl tracking-[-0.055em] sm:text-6xl">How I help</h2>
          </div>
          <p className="hidden max-w-sm text-sm leading-6 text-muted md:block">Product engineering support from first architecture decisions through launch and iteration.</p>
        </div>

        <div className="grid border-l border-t border-line md:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.06}>
              <article className="group min-h-72 border-b border-r border-line p-6 transition hover:bg-surface sm:p-8">
                <div className="mb-16 flex items-center justify-between text-xs text-muted">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
                </div>
                <h3 className="font-display text-3xl tracking-[-0.04em]">{service.title}</h3>
                <p className="mt-4 max-w-xl text-sm leading-6 text-muted">{service.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-line px-3 py-1 text-xs text-muted">{tag}</span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
