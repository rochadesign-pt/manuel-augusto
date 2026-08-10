"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/** Animates the numeric part of a value like "60+", "95%", "1000+". */
export function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const match = value.match(/^(\D*)(\d[\d.,]*)(\D*)$/);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || !match) return;

      const target = parseInt(match[2].replace(/[.,]/g, ""), 10);
      const prefix = match[1];
      const suffix = match[3];

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        el.textContent = value;
        return;
      }

      const obj = { v: 0 };
      gsap.to(obj, {
        v: target,
        duration: 1.4,
        ease: "power2.out",
        snap: { v: 1 },
        onUpdate: () => {
          el.textContent = `${prefix}${Math.round(obj.v)}${suffix}`;
        },
        scrollTrigger: { trigger: el, start: "top 90%", once: true },
      });
    },
    { scope: ref },
  );

  // Render the real value as the SSR/no-JS fallback; GSAP animates from 0 → value.
  return <span ref={ref}>{value}</span>;
}
