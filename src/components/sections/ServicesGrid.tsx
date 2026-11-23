"use client";

import { motion, useReducedMotion } from "framer-motion";

import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { staggerContainer, staggerItem } from "@/components/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";
import type { Service } from "@/lib/types";

export function ServicesGrid({ services }: { services: Service[] }) {
  const reduce = useReducedMotion();
  return (
    <section className="bg-surface-soft py-20 md:py-28">
      <div className="container-page">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="eyebrow">O que fazemos</p>
            <SplitReveal
              as="h2"
              text="Da compra à reparação."
              className="mt-3 text-3xl font-semibold md:text-[2.5rem] md:leading-[1.1]"
            />
          </div>
          <div className="lg:pt-3">
            <p className="text-muted">
              Ajudamos a escolher, entregamos, instalamos e, quando é preciso, reparamos. Tudo feito pela mesma equipa.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="/servicos" variant="primary">
                Os nossos serviços
              </Button>
              <Button href="/sobre" variant="outline" arrow>
                A nossa história
              </Button>
            </div>
          </div>
        </div>

        <motion.ul
          variants={staggerContainer}
          initial={reduce ? false : "hidden"}
          animate={reduce ? "show" : undefined}
          whileInView={reduce ? undefined : "show"}
          viewport={{ once: true, margin: "-10%" }}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 md:mt-20"
        >
          {services.map((service) => (
            <motion.li
              key={service.title}
              variants={staggerItem}
              className="group rounded-xl border border-line bg-white p-6 transition-colors duration-200 hover:border-line-strong"
            >
              <div className="grid size-11 place-items-center rounded-lg border border-line bg-white text-ink shadow-[0_1px_2px_rgba(13,24,38,0.04)] transition-colors duration-200 group-hover:border-brand group-hover:text-brand">
                <Icon name={service.icon} className="size-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {service.description}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
