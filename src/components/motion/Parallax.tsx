"use client";

import { useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * Vertical parallax for imagery. The inner layer is taller than the frame so
 * it can drift within it as the section scrolls. Disabled on coarse pointers
 * and reduced motion.
 */
export function Parallax({
  children,
  className,
  amount = 9,
}: {
  children: ReactNode;
  className?: string;
  amount?: number;
}) {
  const frame = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (
        window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
        window.matchMedia("(hover: none), (pointer: coarse)").matches
      )
        return;

      gsap.fromTo(
        inner.current,
        { yPercent: -amount },
        {
          yPercent: amount,
          ease: "none",
          scrollTrigger: {
            trigger: frame.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    },
    { scope: frame },
  );

  return (
    <div ref={frame} className={cn("overflow-hidden", className)}>
      <div ref={inner} className="relative h-[124%] w-full -translate-y-[12%]">
        {children}
      </div>
    </div>
  );
}
