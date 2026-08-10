"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";

import { Magnetic } from "@/components/motion/Magnetic";
import { cn } from "@/lib/utils";

type Variant = "primary" | "light" | "outline" | "dark" | "ghost";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold " +
  "whitespace-nowrap select-none transition-[background,box-shadow,color,border-color] duration-200 " +
  "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/25";

const sizes = {
  md: "h-11 px-5",
  lg: "h-12 px-6",
} as const;

// Untitled UI–style depth: 1px border, a faint top sheen, and a layered
// shadow so buttons read as raised rather than flat.
const variants: Record<Variant, string> = {
  primary:
    "border border-brand-700 text-white bg-brand bg-gradient-to-b from-white/20 to-transparent " +
    "shadow-[0_1px_2px_rgba(13,24,38,0.18),inset_0_1px_0_rgba(255,255,255,0.24)] " +
    "hover:from-transparent hover:bg-brand-600",
  light:
    "border border-line-strong text-ink bg-white shadow-[0_1px_2px_rgba(13,24,38,0.07)] " +
    "hover:bg-surface-soft",
  outline:
    "border border-line-strong text-ink bg-white shadow-[0_1px_2px_rgba(13,24,38,0.07)] " +
    "hover:bg-surface-muted",
  dark:
    "border border-white/10 text-white bg-ink bg-gradient-to-b from-white/12 to-transparent " +
    "shadow-[0_1px_2px_rgba(13,24,38,0.35),inset_0_1px_0_rgba(255,255,255,0.14)] " +
    "hover:bg-ink-soft",
  ghost: "text-ink hover:bg-surface-muted",
};

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  size?: keyof typeof sizes;
  className?: string;
  arrow?: boolean;
  arrowUp?: boolean;
  magnetic?: boolean;
  external?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
  "aria-label"?: string;
}

const MotionLink = motion.create(Link);

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  arrow = false,
  arrowUp = false,
  magnetic = false,
  external = false,
  onClick,
  type = "button",
  ...rest
}: ButtonProps) {
  const classes = cn(base, sizes[size], variants[variant], className);
  const content = (
    <>
      {children}
      {(arrow || arrowUp) && <Arrow up={arrowUp} />}
    </>
  );

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.97 },
    transition: { type: "spring" as const, stiffness: 400, damping: 22 },
  };

  let el: ReactNode;
  if (href) {
    if (external) {
      el = (
        <motion.a
          href={href}
          target="_blank"
          rel="noreferrer noopener"
          className={classes}
          {...motionProps}
          {...rest}
        >
          {content}
        </motion.a>
      );
    } else {
      el = (
        <MotionLink href={href} className={classes} {...motionProps} {...rest}>
          {content}
        </MotionLink>
      );
    }
  } else {
    el = (
      <motion.button
        type={type}
        onClick={onClick}
        className={classes}
        {...motionProps}
        {...rest}
      >
        {content}
      </motion.button>
    );
  }

  return magnetic ? <Magnetic strength={0.35}>{el}</Magnetic> : el;
}

function Arrow({ up = false }: { up?: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={cn(
        "transition-transform duration-300 ease-out",
        up
          ? "group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          : "group-hover:translate-x-0.5",
      )}
    >
      <path
        d={up ? "M4.5 11.5 11.5 4.5M11.5 4.5H5.5M11.5 4.5V10.5" : "M3.5 8h9m0 0L9 4.5M12.5 8 9 11.5"}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
