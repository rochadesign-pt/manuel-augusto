"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Reveal } from "@/components/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { Button } from "@/components/ui/Button";
import { Media } from "@/components/ui/Media";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface OverlayHeroProps {
  title: string;
  subtitle: string;
  tone?: "steel" | "navy";
  primaryLabel?: string;
  primaryHref?: string;
}

// Contained (final) vs full-bleed (start) clip states — matched unit shapes so
// GSAP can interpolate them smoothly.
const CONTAINED = "inset(1.5vh 3.5vw 1.5vh 3.5vw round 22px)";
const FULL = "inset(0vh 0vw 0vh 0vw round 0px)";

export function OverlayHero({
  title,
  subtitle,
  tone = "steel",
  primaryLabel = "Explorar",
  primaryHref = "/contactos",
}: OverlayHeroProps) {
  const section = useRef<HTMLElement>(null);
  const frame = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = frame.current;
      if (!el) return;
      const disabled =
        window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
        window.matchMedia("(hover: none), (pointer: coarse)").matches;
      if (disabled) {
        gsap.set(el, { clipPath: CONTAINED });
        return;
      }

      gsap.fromTo(
        el,
        { clipPath: FULL },
        {
          clipPath: CONTAINED,
          ease: "none",
          scrollTrigger: {
            trigger: section.current,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        },
      );
    },
    { scope: section },
  );

  return (
    <section ref={section} className="shrink-hero">
      <div className="shrink-sticky">
        <div
          ref={frame}
          className="absolute inset-0"
          style={{ clipPath: CONTAINED, willChange: "clip-path" }}
        >
          <Media
            alt={title}
            tone={tone}
            rounded={false}
            ring={false}
            priority
            className="h-full"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-navy/55" />
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <SplitReveal
            as="h1"
            trigger="load"
            text={title}
            className="max-w-3xl font-display text-4xl font-semibold text-white md:text-[3.5rem]"
          />
          <Reveal delay={0.2}>
            <p className="mx-auto mt-5 max-w-lg text-white/75">{subtitle}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href={primaryHref} variant="light" magnetic>
                {primaryLabel}
              </Button>
              <Button
                href="/contactos"
                variant="ghost"
                arrowUp
                className="border border-white/40 text-white hover:bg-white/10"
              >
                Contacto
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
