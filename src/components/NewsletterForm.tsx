"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    setDone(true);
  }

  if (done) {
    return (
      <p className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80">
        Obrigado! Fica atento à sua caixa de entrada.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex items-center gap-2">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="O seu e-mail"
        aria-label="O seu e-mail"
        className="h-11 min-w-0 flex-1 rounded-lg border border-white/15 bg-white/5 px-4 text-sm text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none focus:ring-4 focus:ring-white/10"
      />
      <button
        type="submit"
        className="h-11 shrink-0 rounded-lg border border-white/10 bg-white px-4 text-sm font-semibold text-ink shadow-[0_1px_2px_rgba(0,0,0,0.2)] transition-colors hover:bg-white/90"
      >
        Subscrever
      </button>
    </form>
  );
}
