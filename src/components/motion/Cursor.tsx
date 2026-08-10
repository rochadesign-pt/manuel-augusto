"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

/**
 * Minimal awwwards-style cursor: a precise dot and a lagging ring that swells
 * over interactive elements. Desktop / fine-pointer only.
 */
export function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.matchMedia("(hover: none), (pointer: coarse)").matches
    )
      return;

    const dotEl = dot.current;
    const ringEl = ring.current;
    if (!dotEl || !ringEl) return;

    const dotX = gsap.quickTo(dotEl, "x", { duration: 0.15, ease: "power3" });
    const dotY = gsap.quickTo(dotEl, "y", { duration: 0.15, ease: "power3" });
    const ringX = gsap.quickTo(ringEl, "x", { duration: 0.45, ease: "power3" });
    const ringY = gsap.quickTo(ringEl, "y", { duration: 0.45, ease: "power3" });

    let visible = false;
    const onMove = (e: MouseEvent) => {
      if (!visible) {
        visible = true;
        gsap.to([dotEl, ringEl], { autoAlpha: 1, duration: 0.3 });
      }
      dotX(e.clientX);
      dotY(e.clientY);
      ringX(e.clientX);
      ringY(e.clientY);
    };

    const interactive = "a, button, input, textarea, select, [data-cursor]";
    const onOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest(interactive)) {
        ringEl.classList.add("is-hover");
      }
    };
    const onOut = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest(interactive)) {
        ringEl.classList.remove("is-hover");
      }
    };

    gsap.set([dotEl, ringEl], { xPercent: -50, yPercent: -50, autoAlpha: 0 });
    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

  return (
    <>
      <div ref={dot} className="cursor-dot" aria-hidden />
      <div ref={ring} className="cursor-ring" aria-hidden />
    </>
  );
}
