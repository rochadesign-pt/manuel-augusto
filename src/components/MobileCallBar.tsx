"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Persistent mobile contact bar — keeps calling and messaging one tap away.
 * Appears once the visitor scrolls past the hero. Hidden on large screens
 * (the header already shows the phone there).
 */
export function MobileCallBar({ phone }: { phone: string }) {
  const reduce = useReducedMotion();
  const [show, setShow] = useState(false);
  const tel = `tel:${phone.replace(/\s/g, "")}`;

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={reduce ? false : { y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={reduce ? undefined : { y: 24, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] lg:hidden print:hidden"
        >
          <div className="mx-auto flex max-w-md items-center gap-2 rounded-2xl border border-line bg-white/95 p-2 shadow-float backdrop-blur">
            <a
              href={tel}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-brand px-4 py-3 text-sm font-semibold text-white"
            >
              <svg viewBox="0 0 16 16" className="size-4" fill="none" aria-hidden>
                <path
                  d="M5.2 2.5 6.5 5l-1.3 1.3a8 8 0 0 0 3.5 3.5L10 8.5l2.5 1.3c.4.2.6.6.5 1l-.4 1.6a1 1 0 0 1-1 .8C6.6 13 3 9.4 2.8 4.4a1 1 0 0 1 .8-1l1.6-.4c.4-.1.8.1 1 .5Z"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinejoin="round"
                />
              </svg>
              Ligar {phone}
            </a>
            <a
              href="/contactos"
              aria-label="Enviar mensagem"
              className="grid size-[46px] shrink-0 place-items-center rounded-xl border border-line text-ink"
            >
              <svg viewBox="0 0 16 16" className="size-[18px]" fill="none" aria-hidden>
                <path
                  d="M2.5 4.2c0-.4.3-.7.7-.7h9.6c.4 0 .7.3.7.7v7.6c0 .4-.3.7-.7.7H3.2a.7.7 0 0 1-.7-.7V4.2Z"
                  stroke="currentColor"
                  strokeWidth="1.3"
                />
                <path
                  d="m3 4.5 5 3.5 5-3.5"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
