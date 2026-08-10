"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Logo } from "./Logo";
import { Button } from "./ui/Button";
import { mainNav } from "@/lib/nav";
import type { SiteSettings } from "@/lib/types";
import { cn } from "@/lib/utils";

export function Header({ settings }: { settings: SiteSettings }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Pages whose top is a full-bleed dark hero the header can overlay.
  const DARK_HERO = ["/", "/apoio-tecnico", "/eletrodomesticos", "/material-eletrico"];
  const transparentCapable = DARK_HERO.includes(pathname);
  const solid = !transparentCapable || scrolled;
  const onDark = !solid;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        solid
          ? "border-b border-line bg-white/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4 md:h-[72px]">
        <Logo
          companyName={settings.companyName}
          shortName={settings.shortName}
          variant={onDark ? "light" : "dark"}
        />

        <nav className="hidden items-center gap-0.5 lg:flex">
          {mainNav.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-lg px-3 py-2 text-[13px] font-medium transition-colors",
                  onDark
                    ? active
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                    : active
                      ? "text-ink"
                      : "text-muted hover:text-ink",
                )}
              >
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className={cn(
                      "absolute inset-0 -z-10 rounded-lg",
                      onDark ? "bg-white/15" : "bg-surface-muted",
                    )}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          {onDark ? (
            <Button
              href="/contactos"
              variant="ghost"
              arrowUp
              className="hidden border border-white/50 text-white hover:bg-white/10 sm:inline-flex"
            >
              Fala connosco
            </Button>
          ) : (
            <Button
              href="/contactos"
              variant="dark"
              arrowUp
              magnetic
              className="hidden sm:inline-flex"
            >
              Fala connosco
            </Button>
          )}

          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "grid size-10 place-items-center rounded-lg border lg:hidden",
              onDark
                ? "border-white/30 text-white"
                : "border-line text-ink",
            )}
          >
            <Burger open={open} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 bottom-0 top-16 z-40 bg-white lg:hidden"
          >
            <nav className="container-page flex flex-col gap-1 py-6">
              {mainNav.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="block border-b border-line py-4 font-display text-xl font-medium text-ink"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <Button
                href="/contactos"
                size="lg"
                arrowUp
                className="mt-6 w-full"
              >
                Fala connosco
              </Button>
              <Button
                href={`tel:${settings.phone.replace(/\s/g, "")}`}
                external
                variant="outline"
                size="lg"
                className="mt-3 w-full"
              >
                Ligar {settings.phone}
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Burger({ open }: { open: boolean }) {
  return (
    <div className="relative h-4 w-5">
      <motion.span
        className="absolute left-0 block h-0.5 w-5 rounded-full bg-current"
        animate={open ? { rotate: 45, top: 7 } : { rotate: 0, top: 2 }}
        style={{ top: 2 }}
      />
      <motion.span
        className="absolute left-0 top-[7px] block h-0.5 w-5 rounded-full bg-current"
        animate={open ? { opacity: 0 } : { opacity: 1 }}
      />
      <motion.span
        className="absolute left-0 block h-0.5 w-5 rounded-full bg-current"
        animate={open ? { rotate: -45, top: 7 } : { rotate: 0, top: 12 }}
        style={{ top: 12 }}
      />
    </div>
  );
}
