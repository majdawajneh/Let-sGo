"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/data/site";

const marquee = "SOFTWARE ENGINEER • FULL-STACK DEVELOPER • PRODUCT BUILDER • ";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="overflow-hidden border-b border-line px-4 pb-14 pt-8 sm:px-6 lg:px-10 lg:pb-20 lg:pt-10">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-6 flex items-center justify-between text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
          <span>©2026</span>
          <span>/BUILDING SINCE {site.buildingSince}</span>
        </div>

        <div className="grid items-end gap-8 lg:grid-cols-[1.35fr_.65fr]">
          <div>
            <motion.h1
              initial={reduceMotion ? false : { opacity: 0, y: 30 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[17vw] font-semibold uppercase leading-[0.74] tracking-[-0.075em] sm:text-[15vw] lg:text-[10.4vw]"
            >
              Software
              <span className="block text-muted">Engineer</span>
            </motion.h1>

            <div className="mt-8 flex max-w-2xl flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-md text-base leading-7 text-muted">
                {site.role} building useful digital products with a sharp focus on architecture, performance, and product quality.
              </p>
              <a href="#works" className="group inline-flex items-center gap-3 text-sm font-medium">
                Selected work
                <span className="transition-transform group-hover:translate-x-1">↗</span>
              </a>
            </div>
          </div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }}
            animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-surface"
          >
            <Image
              src="/images/ME-.jpg"
              alt="[MY NAME] portrait, front view"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 34vw"
              className="object-cover transition duration-700 ease-out group-hover:scale-[1.03] group-hover:opacity-0"
            />
            <Image
              src="/images/ME-HACK.jpg"
              alt="[MY NAME] portrait, alternate view"
              fill
              sizes="(max-width: 1024px) 100vw, 34vw"
              className="object-cover opacity-0 transition duration-700 ease-out group-hover:scale-[1.03] group-hover:opacity-100"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 text-xs uppercase tracking-[0.14em] text-white/80">
              <span>{site.name}</span>
              <span>{site.location}</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mt-12 border-y border-line py-3">
        <div className="marquee-track whitespace-nowrap font-display text-xs uppercase tracking-[0.18em] text-muted">
          <span>{marquee.repeat(4)}</span>
        </div>
      </div>
    </section>
  );
}
