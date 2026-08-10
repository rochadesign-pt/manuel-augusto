"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { Button } from "@/components/ui/Button";
import type { Faq } from "@/lib/types";
import { cn } from "@/lib/utils";

export function FaqSection({ items }: { items: Faq[] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-20 md:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="text-3xl font-semibold md:text-[2.5rem]">Dúvidas</h2>
          <p className="mt-4 max-w-sm text-muted">
            Respondemos às perguntas mais frequentes para ajudar a entender os
            nossos serviços. Caso ainda persista alguma dúvida, não hesite em
            falar com a nossa equipa!
          </p>
          <Button href="#contacto" variant="primary" className="mt-6">
            Entrar em contacto
          </Button>
        </div>

        <ul className="divide-y divide-line rounded-2xl border border-line bg-surface-soft">
          {items.map((item, i) => {
            const open = openIndex === i;
            return (
              <li key={item.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? -1 : i)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left md:px-6"
                >
                  <span
                    className={cn(
                      "font-display text-[15px] font-semibold transition-colors md:text-base",
                      open ? "text-ink" : "text-ink-soft",
                    )}
                  >
                    {item.question}
                  </span>
                  <Chevron open={open} />
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm leading-relaxed text-muted md:px-6">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function Chevron({ open }: { open: boolean }) {
  return (
    <motion.span
      animate={{ rotate: open ? 45 : 0 }}
      transition={{ duration: 0.2 }}
      className="grid size-6 shrink-0 place-items-center text-muted"
    >
      <svg viewBox="0 0 16 16" className="size-4" fill="none" aria-hidden>
        <path
          d="M8 3v10M3 8h10"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    </motion.span>
  );
}
