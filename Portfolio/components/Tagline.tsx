import { Reveal } from "@/components/Reveal";

export function Tagline() {
  return (
    <section className="border-b border-line px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[1500px]">
        <Reveal>
          <p className="max-w-6xl font-display text-4xl leading-[1.02] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
            I build clean, scalable products that stay understandable in code and dependable in real-world use.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
