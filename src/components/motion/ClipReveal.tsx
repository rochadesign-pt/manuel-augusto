"use client";

import { useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * Subtle GSAP image reveal: the content wipes up from behind a clip while a
 * faint scale settles. Reduced motion → shows instantly.
 */
export function ClipReveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const frame = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.fromTo(
        inner.current,
        { clipPath: "inset(100% 0% 0% 0%)", scale: 1.06 },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          scale: 1,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: { trigger: frame.current, start: "top 85%", once: true },
        },
      );
    },
    { scope: frame },
  );

  return (
    <div ref={frame} className={className}>
      <div ref={inner} className="h-full w-full" style={{ willChange: "clip-path, transform" }}>
        {children}
      </div>
    </div>
  );
}
