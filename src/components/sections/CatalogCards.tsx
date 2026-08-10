"use client";

import { motion, useReducedMotion } from "framer-motion";

import { staggerContainer, staggerItem } from "@/components/Reveal";
import { Media } from "@/components/ui/Media";
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
            href={c.url ?? "#contacto"}
            target={c.url ? "_blank" : undefined}
            rel={c.url ? "noreferrer noopener" : undefined}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            className="group flex flex-col overflow-hidden rounded-2xl"
          >
            <div
              className="relative grid h-44 place-items-center"
              style={{ backgroundColor: c.color }}
            >
              {c.logo ? (
                <Media
                  image={c.logo}
                  alt={c.name}
                  className="h-12 w-40 bg-transparent"
                  imgClassName="object-contain"
                />
              ) : (
                <span className="font-display text-3xl font-bold uppercase tracking-wide text-white">
                  {c.name}
                </span>
              )}
              <div className="absolute inset-0 bg-white/0 transition-colors group-hover:bg-white/5" />
            </div>
            <div className="flex flex-1 flex-col bg-surface-soft p-6">
              <h3 className="font-display text-lg font-semibold text-ink">
                Catálogo {c.name}
              </h3>
              <p className="mt-2 flex-1 text-sm text-muted">{c.description}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                {c.ctaLabel}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden className="transition-transform group-hover:translate-x-1">
                  <path d="M3.5 8h9m0 0L9 4.5M12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
