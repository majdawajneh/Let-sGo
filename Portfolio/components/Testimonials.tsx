import { testimonials } from "@/data/testimonials";
import { Reveal } from "@/components/Reveal";

export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section className="border-b border-line px-4 py-20 sm:px-6 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1500px]">
        <Reveal>
          <div className="mb-10 flex items-end justify-between gap-6">
            <h2 className="font-display text-4xl tracking-[-0.05em] sm:text-5xl">What collaborators say</h2>
            <span className="text-xs uppercase tracking-[0.14em] text-muted">Selected feedback</span>
          </div>
        </Reveal>
        <div className="grid border-l border-t border-line lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.06}>
              <figure className="flex min-h-72 flex-col border-b border-r border-line p-6 sm:p-8">
                <blockquote className="font-display text-2xl leading-snug tracking-[-0.035em]">“{item.quote}”</blockquote>
                <figcaption className="mt-auto pt-8 text-sm">
                  <strong className="block font-medium">{item.name}</strong>
                  <span className="mt-1 block text-muted">{item.role}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
