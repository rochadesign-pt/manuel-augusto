"use client";

import { motion, useReducedMotion } from "framer-motion";

import { staggerContainer, staggerItem } from "@/components/Reveal";
import type { Catalog } from "@/lib/types";

export function CatalogCards({ catalogs }: { catalogs: Catalog[] }) {
  const reduce = useReducedMotion();
  return (
    <section className="py-8 md:py-12">
      <motion.div
        variants={staggerContainer}
        initial={reduce ? false : "hidden"}
        whileInView={reduce ? undefined : "show"}
        viewport={{ once: true, margin: "-10%" }}
        className="container-page grid gap-5 md:grid-cols-3"
      >
        {catalogs.map((c) => (
          <motion.a
            key={c.name}
            variants={staggerItem}
            href={c.url ?? "/contactos"}
            target={c.url ? "_blank" : undefined}
            rel={c.url ? "noreferrer noopener" : undefined}
            whileHover={reduce ? undefined : { y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            className="group relative flex min-h-[340px] flex-col justify-between overflow-hidden rounded-2xl p-7 text-white ring-1 ring-inset ring-white/10 md:min-h-[380px] md:p-8"
            style={{ backgroundColor: c.color }}
          >
            {/* dot-grid texture */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.16]"
              style={{
                backgroundImage:
                  "radial-gradient(#fff 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />

            <div className="relative">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/70">
                Catálogo
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold md:text-[1.75rem]">
                {c.name}
              </h3>
            </div>

            <div className="relative">
              <div className="h-px w-full bg-white/25" />
              <div className="mt-5 flex items-end justify-between gap-4">
                <p className="max-w-[15rem] text-sm leading-relaxed text-white/80">
                  {c.description}
                </p>
                <span className="grid size-11 shrink-0 place-items-center rounded-full border border-white/40 text-white transition-colors duration-200 group-hover:bg-white group-hover:text-ink">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  >
                    <path
                      d="M3.5 8h9m0 0L9 4.5M12.5 8 9 11.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <span className="sr-only">{c.ctaLabel}</span>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
