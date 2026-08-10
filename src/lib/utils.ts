type ClassValue = string | number | null | false | undefined;

/** Tiny classNames joiner — no dependency needed. */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}
