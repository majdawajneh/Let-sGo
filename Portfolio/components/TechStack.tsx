"use client";

import { motion } from "framer-motion";

import { skills } from "@/data/skills";

export function TechStack() {
  return (
    <section
      id="stack"
      className="border-b border-line px-4 py-20 sm:px-6 lg:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="mb-3 block text-[10px] uppercase tracking-[0.2em] text-muted">
              Technologies & Tools
            </span>

            <h2 className="font-display text-4xl tracking-[-0.05em] sm:text-5xl">
              Tech stack
            </h2>
          </div>

          <span className="text-xs uppercase tracking-[0.14em] text-muted">
            Tools I use to ship
          </span>
        </div>

        <div className="grid grid-cols-1 border-l border-t border-line sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                initial={{
                  opacity: 0,
                  y: 24,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.025,
                }}
                className="group flex min-h-32 items-center gap-4 border-b border-r border-line p-5 transition-colors duration-300 hover:bg-surface"
              >
                <div
                  className="
                    flex h-12 w-12 shrink-0
                    items-center justify-center
                    rounded-xl
                    border border-line
                    bg-surface
                    transition-all duration-300
                    group-hover:-translate-y-1
                    group-hover:shadow-lg
                  "
                >
                  <Icon
                    className={`text-2xl ${skill.iconClassName}`}
                    aria-hidden="true"
                  />
                </div>

                <div className="min-w-0">
                  <h3 className="text-sm font-semibold tracking-[-0.02em]">
                    {skill.name}
                  </h3>

                  <p className="mt-1 text-xs text-muted">
                    {skill.category}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}