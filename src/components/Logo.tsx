import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

interface LogoProps {
  companyName: string;
  /** Kept for API compatibility; the wordmark SVG includes the full name. */
  shortName?: string;
  variant?: "dark" | "light";
  className?: string;
  priority?: boolean;
}

export function Logo({
  companyName,
  variant = "dark",
  className,
  priority = false,
}: LogoProps) {
  const src =
    variant === "light"
      ? "/logotipo-manuel-augusto-branco.svg"
      : "/logotipo-manuel-augusto.svg";

  return (
    <Link
      href="/"
      aria-label={companyName}
      className={cn("group inline-flex items-center", className)}
    >
      <Image
        src={src}
        alt={companyName}
        width={276}
        height={59}
        priority={priority}
        unoptimized
        className="h-7 w-auto md:h-[30px]"
      />
    </Link>
  );
}
