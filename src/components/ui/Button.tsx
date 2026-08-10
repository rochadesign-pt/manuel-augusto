"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type Variant = "primary" | "light" | "outline" | "dark" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold " +
  "transition-colors duration-200 whitespace-nowrap select-none";

const sizes = {
  md: "h-11 px-5",
  lg: "h-12 px-6",
} as const;

const variants: Record<Variant, string> = {
  primary: "bg-brand text-white hover:bg-brand-600",
  light: "bg-white text-ink hover:bg-surface-muted",
  outline: "border border-line-strong text-ink hover:bg-surface-muted",
  dark: "bg-ink text-white hover:bg-ink-soft",
  ghost: "text-ink hover:bg-surface-muted",
};

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  size?: keyof typeof sizes;
  className?: string;
  arrow?: boolean;
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
  external = false,
  onClick,
  type = "button",
  ...rest
}: ButtonProps) {
  const classes = cn(base, sizes[size], variants[variant], className);
  const content = (
    <>
      {children}
      {arrow && <Arrow />}
    </>
  );

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.97 },
    transition: { type: "spring" as const, stiffness: 400, damping: 22 },
  };

  if (href) {
    if (external) {
      return (
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
    }
    return (
      <MotionLink href={href} className={classes} {...motionProps} {...rest}>
        {content}
      </MotionLink>
    );
  }

  return (
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

function Arrow() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="translate-y-px"
    >
      <path
        d="M3.5 8h9m0 0L9 4.5M12.5 8 9 11.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
