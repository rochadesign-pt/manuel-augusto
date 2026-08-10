"use client";

import { Fragment, useRef, type ElementType } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface SplitRevealProps {
  text: string;
  as?: ElementType;
  className?: string;
  delay?: number;
  stagger?: number;
  trigger?: "load" | "scroll";
}

/**
 * Word-by-word masked reveal. Each word rises from behind a clip.
 * Runs in a layout effect (via useGSAP) so the hidden state is set before
 * paint — no flash. Reduced-motion users see the text immediately.
 */
export function SplitReveal({
  text,
  as: Tag = "h2",
  className,
  delay = 0,
  stagger = 0.045,
  trigger = "scroll",
}: SplitRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const words = text.split(" ");

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const inners = el.querySelectorAll<HTMLElement>(".reveal-word > span");
      gsap.set(inners, { yPercent: 115 });

      const play = () =>
        gsap.to(inners, {
          yPercent: 0,
          duration: 0.9,
          ease: "power4.out",
          stagger,
          delay,
        });

      if (trigger === "load") {
        play();
      } else {
        ScrollTrigger.create({
          trigger: el,
          start: "top 85%",
          once: true,
          onEnter: play,
        });
      }
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} className={className}>
      {words.map((word, i) => (
        <Fragment key={i}>
          <span className="reveal-word">
            <span>{word}</span>
          </span>
          {i < words.length - 1 ? " " : ""}
        </Fragment>
      ))}
    </Tag>
  );
}
