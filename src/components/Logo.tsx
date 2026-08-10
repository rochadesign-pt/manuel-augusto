import Link from "next/link";

import { cn } from "@/lib/utils";

interface LogoProps {
  companyName: string;
  shortName: string;
  variant?: "dark" | "light";
  className?: string;
}

export function Logo({
  companyName,
  shortName,
  variant = "dark",
  className,
}: LogoProps) {
  const isLight = variant === "light";
  return (
    <Link
      href="/"
      aria-label={companyName}
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <span className="relative grid size-9 place-items-center rounded-lg bg-brand text-white shadow-sm">
        <span className="font-display text-sm font-bold leading-none tracking-tight">
          {shortName}
        </span>
        <span
          aria-hidden
          className="absolute -right-1 -top-1 grid size-3.5 place-items-center rounded-[3px] bg-ink text-[8px] font-bold text-white"
        >
          +
        </span>
      </span>
      <span className="flex flex-col leading-tight">
        <span
          className={cn(
            "font-display text-[15px] font-semibold",
            isLight ? "text-white" : "text-ink",
          )}
        >
          Manuel Augusto
        </span>
        <span
          className={cn(
            "text-[11px] font-medium",
            isLight ? "text-white/60" : "text-muted-2",
          )}
        >
          &amp; Filhos, Lda.
        </span>
      </span>
    </Link>
  );
}
