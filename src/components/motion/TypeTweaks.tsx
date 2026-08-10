"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const FONTS = [
  { id: "bricolage", label: "Bricolage", tag: "atual", var: "--font-bricolage" },
  { id: "inter", label: "Inter", tag: "neutra", var: "--font-inter" },
  { id: "figtree", label: "Figtree", tag: "amigável", var: "--font-figtree" },
  { id: "onest", label: "Onest", tag: "moderna", var: "--font-onest" },
  { id: "karla", label: "Karla", tag: "grotesca", var: "--font-karla" },
  { id: "space", label: "Space Grotesk", tag: "técnica", var: "--font-space-grotesk" },
  { id: "hanken", label: "Hanken Grotesk", tag: "grotesca", var: "--font-hanken" },
  { id: "schibsted", label: "Schibsted", tag: "grotesca", var: "--font-schibsted" },
  { id: "familjen", label: "Familjen", tag: "grotesca", var: "--font-familjen" },
  { id: "sora", label: "Sora", tag: "geométrica", var: "--font-sora" },
] as const;

const FONT_KEY = "ma-type-font";
const TRACK_KEY = "ma-type-track";
const FLAG_KEY = "ma-tweaks";

function applyFont(id: string) {
  const font = FONTS.find((f) => f.id === id) ?? FONTS[0];
  document.documentElement.style.setProperty(
    "--font-display",
    `var(${font.var}), var(--font-inter), sans-serif`,
  );
}
function applyTrack(v: number) {
  document.documentElement.style.setProperty("--display-tracking", `${v / 1000}em`);
}

/**
 * Live typography preview panel. Hidden from visitors — revealed with
 * `?tweaks` in the URL or Shift+T, and remembered per-browser. The chosen
 * face is stored locally, so it previews only for the person tuning it.
 */
export function TypeTweaks() {
  const [enabled, setEnabled] = useState(true);
  const [open, setOpen] = useState(false);
  const [font, setFont] = useState("bricolage");
  const [track, setTrack] = useState(-25);

  // Apply saved preferences on every load (even with the panel hidden).
  useEffect(() => {
    const savedFont = localStorage.getItem(FONT_KEY);
    const savedTrack = localStorage.getItem(TRACK_KEY);
    if (savedFont) {
      setFont(savedFont);
      applyFont(savedFont);
    }
    if (savedTrack) {
      const t = Number(savedTrack);
      setTrack(t);
      applyTrack(t);
    }

    // Visible by default; only hidden if the user chose to hide it.
    const params = new URLSearchParams(window.location.search);
    if (params.has("tweaks")) localStorage.removeItem(FLAG_KEY);
    if (localStorage.getItem(FLAG_KEY) === "hidden") setEnabled(false);

    const onKey = (e: KeyboardEvent) => {
      if (e.shiftKey && (e.key === "T" || e.key === "t")) {
        setEnabled((v) => {
          const next = !v;
          if (next) localStorage.removeItem(FLAG_KEY);
          else localStorage.setItem(FLAG_KEY, "hidden");
          return next;
        });
        setOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function hidePanel() {
    localStorage.setItem(FLAG_KEY, "hidden");
    setEnabled(false);
  }

  function chooseFont(id: string) {
    setFont(id);
    applyFont(id);
    localStorage.setItem(FONT_KEY, id);
  }
  function changeTrack(v: number) {
    setTrack(v);
    applyTrack(v);
    localStorage.setItem(TRACK_KEY, String(v));
  }
  function reset() {
    chooseFont("bricolage");
    changeTrack(-25);
  }

  if (!enabled) return null;

  return (
    <div className="fixed bottom-4 left-4 z-[80] print:hidden">
      <AnimatePresence>
        {open ? (
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="w-[280px] rounded-2xl border border-line bg-white/95 p-4 shadow-float backdrop-blur"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-muted">
                Tipografia · preview
              </span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Fechar painel"
                className="grid size-6 place-items-center rounded-md text-muted hover:bg-surface-muted"
              >
                <svg viewBox="0 0 16 16" className="size-3.5" fill="none" aria-hidden>
                  <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-1.5">
              {FONTS.map((f) => (
                <button
                  key={f.id}
                  onClick={() => chooseFont(f.id)}
                  className={`rounded-lg border px-2.5 py-2 text-left transition-colors ${
                    font === f.id
                      ? "border-brand bg-brand-soft"
                      : "border-line hover:border-line-strong"
                  }`}
                  style={{ fontFamily: `var(${f.var}), sans-serif` }}
                >
                  <span className="block text-sm font-semibold text-ink">
                    {f.label}
                  </span>
                  <span className="block text-[10px] text-muted-2">{f.tag}</span>
                </button>
              ))}
            </div>

            <div className="mt-4">
              <label className="flex items-center justify-between text-[11px] font-medium text-ink-soft">
                Espaçamento
                <span className="tabular-nums text-muted">
                  {(track / 1000).toFixed(3)}em
                </span>
              </label>
              <input
                type="range"
                min={-50}
                max={10}
                value={track}
                onChange={(e) => changeTrack(Number(e.target.value))}
                className="mt-1.5 w-full accent-[var(--color-brand)]"
              />
            </div>

            <div className="mt-4 flex items-center justify-between">
              <button
                onClick={reset}
                className="text-xs font-medium text-muted hover:text-ink"
              >
                Repor
              </button>
              <button
                onClick={hidePanel}
                className="text-xs font-medium text-muted hover:text-ink"
              >
                Ocultar
              </button>
            </div>
            <p className="mt-2 text-[10px] text-muted-2">
              Só visível para ti · Shift + T para reabrir
            </p>
          </motion.div>
        ) : (
          <motion.button
            key="tab"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={() => setOpen(true)}
            className="flex items-center gap-2 rounded-full border border-line bg-white/95 px-4 py-2.5 text-ink shadow-card backdrop-blur transition-colors hover:border-brand"
            aria-label="Abrir painel de tipografia"
          >
            <span className="text-base font-bold" style={{ fontFamily: "var(--font-display)" }}>
              Aa
            </span>
            <span className="text-xs font-semibold" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              Tipografia
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
