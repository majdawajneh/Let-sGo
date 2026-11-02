"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { featuredProjects } from "@/data/projects";

export function FeaturedProjects() {
  return (
    <section
      id="works"
      className="border-b border-line px-4 py-20 sm:px-6 lg:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-[1500px]">

        {/* HEADER */}

        <div className="mb-12 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="mb-4 block text-[10px] uppercase tracking-[0.22em] text-muted">
              04 / Selected Work
            </span>

            <h2 className="max-w-4xl font-display text-5xl leading-[0.95] tracking-[-0.06em] sm:text-6xl lg:text-8xl">
              Selected
              <span className="block text-muted">
                projects.
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.65,
              delay: 0.1,
            }}
            className="max-w-sm text-sm leading-6 text-muted lg:pb-2"
          >
            A selection of full-stack systems, digital products,
            and web experiences built across frontend, backend,
            APIs, data, and user experience.
          </motion.p>
        </div>

        {/* PROJECTS */}

        <div className="grid gap-x-5 gap-y-16 lg:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{
                opacity: 0,
                y: 50,
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
                duration: 0.75,
                delay: (index % 2) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`
                group
                ${index === 1 ? "lg:mt-24" : ""}
                ${index === 3 ? "lg:mt-24" : ""}
              `}
            >
              <Link
                href={`/work/${project.slug}`}
                className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-4"
              >
                {/* IMAGE */}

                <div className="relative overflow-hidden rounded-[24px] bg-surface">
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={`${project.title} project preview`}
                      fill
                      sizes="
                        (max-width: 1024px) 100vw,
                        50vw
                      "
                      className="
                        object-cover
                        transition-transform
                        duration-[900ms]
                        ease-[cubic-bezier(0.22,1,0.36,1)]
                        group-hover:scale-[1.045]
                      "
                    />

                    {/* IMAGE OVERLAY */}

                    <div
                      className="
                        absolute inset-0
                        bg-black/0
                        transition-colors
                        duration-500
                        group-hover:bg-black/[0.06]
                      "
                    />

                    {/* PROJECT NUMBER */}

                    <div
                      className="
                        absolute left-5 top-5
                        rounded-full
                        border border-white/20
                        bg-black/20
                        px-3 py-1.5
                        text-[10px]
                        uppercase
                        tracking-[0.16em]
                        text-white
                        backdrop-blur-md
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    {/* HOVER VIEW BUTTON */}

                    <div
                      className="
                        absolute
                        bottom-5 right-5
                        flex h-16 w-16
                        items-center justify-center
                        rounded-full
                        bg-white text-black
                        opacity-0
                        translate-y-3
                        scale-90
                        transition-all
                        duration-500
                        ease-[cubic-bezier(0.22,1,0.36,1)]
                        group-hover:translate-y-0
                        group-hover:scale-100
                        group-hover:opacity-100
                      "
                    >
                      <span className="text-xl transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                        ↗
                      </span>
                    </div>
                  </div>
                </div>

                {/* META */}

                <div className="mt-6">
                  <div className="mb-4 flex items-start justify-between gap-6">
                    <div>
                      <span className="mb-2 block text-[10px] uppercase tracking-[0.18em] text-muted">
                        {project.category}
                      </span>

                      <h3
                        className="
                          font-display
                          text-3xl
                          tracking-[-0.045em]
                          sm:text-4xl
                          lg:text-[42px]
                        "
                      >
                        {project.title}
                      </h3>
                    </div>

                    <span
                      className="
                        mt-1
                        text-muted
                        transition-transform
                        duration-300
                        group-hover:-translate-y-1
                        group-hover:translate-x-1
                      "
                    >
                      ↗
                    </span>
                  </div>

                  <p className="max-w-xl text-sm leading-6 text-muted">
                    {project.description}
                  </p>

                  {/* TECHNOLOGIES */}

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((technology) => (
                      <span
                        key={technology}
                        className="
                          rounded-full
                          border border-line
                          px-3 py-1.5
                          text-[10px]
                          uppercase
                          tracking-[0.08em]
                          text-muted
                          transition-colors
                          duration-300
                          group-hover:text-ink
                        "
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>

              {/* EXTERNAL LINKS */}

              {(project.liveUrl || project.githubUrl) && (
                <div className="mt-5 flex gap-5 border-t border-line pt-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        group/link
                        inline-flex
                        items-center
                        gap-2
                        text-xs
                        uppercase
                        tracking-[0.1em]
                        text-muted
                        transition-colors
                        hover:text-ink
                      "
                    >
                      Live Site

                      <span className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5">
                        ↗
                      </span>
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        group/link
                        inline-flex
                        items-center
                        gap-2
                        text-xs
                        uppercase
                        tracking-[0.1em]
                        text-muted
                        transition-colors
                        hover:text-ink
                      "
                    >
                      GitHub

                      <span className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5">
                        ↗
                      </span>
                    </a>
                  )}
                </div>
              )}
            </motion.article>
          ))}
        </div>

        {/* VIEW ALL */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mt-20 flex justify-center"
        >
          <Link
            href="/work"
            className="
              group
              inline-flex
              items-center
              gap-8
              rounded-full
              border border-line
              px-6 py-4
              text-xs
              uppercase
              tracking-[0.12em]
              transition-all
              duration-300
              hover:bg-ink
              hover:text-page
            "
          >
            View All Work

            <span
              className="
                text-base
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              →
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}