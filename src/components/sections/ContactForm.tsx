"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  consent: false,
};

export function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const set = (key: keyof typeof form) => (value: string | boolean) =>
    setForm((f) => ({ ...f, [key]: value }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Erro ao enviar.");
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Erro ao enviar.");
    }
  }

  return (
    <div className="rounded-3xl bg-white p-6 shadow-float ring-1 ring-line/70 md:p-8">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center py-10 text-center"
          >
            <div className="grid size-14 place-items-center rounded-full bg-brand-soft text-brand">
              <svg viewBox="0 0 24 24" className="size-7" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                <path d="m5 12.5 4.5 4.5L19 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="mt-5 font-display text-xl font-semibold">
              Mensagem enviada!
            </h3>
            <p className="mt-2 max-w-xs text-sm text-muted">
              Obrigado pelo seu contacto. A nossa equipa responde o mais breve
              possível.
            </p>
            <Button
              variant="outline"
              className="mt-6"
              onClick={() => {
                setForm(initialForm);
                setStatus("idle");
              }}
            >
              Enviar outra mensagem
            </Button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={onSubmit}
            className="space-y-4"
            noValidate
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                label="Primeiro nome"
                required
                value={form.firstName}
                onChange={set("firstName")}
                placeholder="Primeiro nome"
              />
              <Field
                label="Apelido"
                value={form.lastName}
                onChange={set("lastName")}
                placeholder="Apelido"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                label="E-mail"
                type="email"
                required
                value={form.email}
                onChange={set("email")}
                placeholder="Insira o seu e-mail"
              />
              <Field
                label="Telemóvel"
                type="tel"
                value={form.phone}
                onChange={set("phone")}
                placeholder="Insira o seu número"
              />
            </div>
            <Field
              label="Assunto"
              value={form.subject}
              onChange={set("subject")}
              placeholder="Introduza o assunto da sua mensagem"
            />
            <Field
              label="Mensagem"
              required
              textarea
              value={form.message}
              onChange={set("message")}
              placeholder="Explique-nos em que podemos ajudar!"
            />

            <label className="flex items-start gap-3 text-sm text-muted">
              <input
                type="checkbox"
                checked={form.consent}
                onChange={(e) => set("consent")(e.target.checked)}
                className="mt-0.5 size-4 rounded border-line-strong text-brand accent-brand"
              />
              <span>
                Aceito as condições e termos de privacidade da Manuel Augusto &
                Filhos.
              </span>
            </label>

            {status === "error" && error && (
              <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">
                {error}
              </p>
            )}

            <Button
              type="submit"
              size="lg"
              className="w-full"
              aria-label="Enviar mensagem"
            >
              {status === "submitting" ? "A enviar…" : "Enviar mensagem"}
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
  textarea = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
}) {
  const base =
    "w-full rounded-xl border border-line-strong bg-white px-4 py-3 text-sm text-ink " +
    "shadow-[0_1px_2px_rgba(13,24,38,0.05)] placeholder:text-muted-2 transition-[box-shadow,border-color] " +
    "focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand/15";
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-ink-soft">
        {label} {required && <span className="text-brand">*</span>}
      </span>
      {textarea ? (
        <textarea
          value={value}
          required={required}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={4}
          className={cn(base, "resize-none")}
        />
      ) : (
        <input
          type={type}
          value={value}
          required={required}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={base}
        />
      )}
    </label>
  );
}
