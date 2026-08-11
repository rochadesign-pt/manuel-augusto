"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import type { IconName } from "@/lib/types";
import { cn } from "@/lib/utils";

const APPLIANCES: { label: string; icon: IconName }[] = [
  { label: "Frigorífico", icon: "appliance" },
  { label: "Máquina de lavar", icon: "appliance" },
  { label: "Máquina de loiça", icon: "appliance" },
  { label: "Fogão / Placa", icon: "plug" },
  { label: "Forno", icon: "appliance" },
  { label: "Outro", icon: "advice" },
];

const STEP_LABELS = ["Equipamento", "Problema", "Contacto"];

type Status = "idle" | "submitting" | "success" | "error";

export function AssistanceRequest() {
  const [step, setStep] = useState(0);
  const [appliance, setAppliance] = useState("");
  const [problem, setProblem] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const canNext = step === 0 ? !!appliance : step === 1 ? problem.trim().length > 3 : true;
  const canSubmit =
    name.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && consent;

  async function submit() {
    setStatus("submitting");
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: name,
          email,
          phone,
          subject: `Assistência — ${appliance}`,
          message: `Equipamento: ${appliance}\nProblema: ${problem}`,
          consent,
        }),
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
    <section className="py-20 md:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow">Pedir assistência</p>
          <h2 className="mt-3 text-3xl font-semibold md:text-[2.5rem] md:leading-[1.1]">
            Conte-nos o problema. Tratamos do resto.
          </h2>
          <p className="mt-5 max-w-md text-muted">
            Em três passos rápidos, dizemos-lhe o próximo passo — sem
            compromisso e sem custos de diagnóstico à distância.
          </p>
          <ul className="mt-7 space-y-3">
            {[
              "Resposta no próprio dia útil",
              "Diagnóstico honesto antes de avançar",
              "Peças de origem e garantia de 3 anos",
            ].map((b) => (
              <li key={b} className="flex items-center gap-3 text-sm text-ink-soft">
                <span className="grid size-6 shrink-0 place-items-center rounded-md bg-brand-soft text-brand">
                  <svg viewBox="0 0 16 16" className="size-3.5" fill="none" aria-hidden>
                    <path d="m3.5 8.5 3 3 6-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {b}
              </li>
            ))}
          </ul>
        </div>

        <Reveal className="rounded-3xl border border-line bg-white p-6 shadow-float md:p-8">
          {status === "success" ? (
            <div className="flex flex-col items-center py-12 text-center">
              <div className="grid size-14 place-items-center rounded-full bg-brand-soft text-brand">
                <svg viewBox="0 0 24 24" className="size-7" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                  <path d="m5 12.5 4.5 4.5L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">
                Pedido recebido!
              </h3>
              <p className="mt-2 max-w-xs text-sm text-muted">
                A nossa equipa vai analisar o seu {appliance.toLowerCase()} e
                entra em contacto o mais breve possível.
              </p>
            </div>
          ) : (
            <>
              {/* Stepper */}
              <div className="flex items-center gap-2">
                {STEP_LABELS.map((label, i) => (
                  <div key={label} className="flex flex-1 items-center gap-2">
                    <span
                      className={cn(
                        "grid size-7 shrink-0 place-items-center rounded-full text-xs font-bold transition-colors",
                        i < step
                          ? "bg-brand text-white"
                          : i === step
                            ? "bg-brand-soft text-brand ring-2 ring-brand"
                            : "bg-surface-muted text-muted-2",
                      )}
                    >
                      {i < step ? "✓" : i + 1}
                    </span>
                    <span
                      className={cn(
                        "hidden text-xs font-medium sm:block",
                        i === step ? "text-ink" : "text-muted-2",
                      )}
                    >
                      {label}
                    </span>
                    {i < STEP_LABELS.length - 1 && (
                      <span className="h-px flex-1 bg-line" />
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-7 min-h-[240px]">
                <AnimatePresence mode="wait">
                  {step === 0 && (
                    <StepWrap key="s0">
                      <p className="mb-4 text-sm font-medium text-ink-soft">
                        Que equipamento precisa de assistência?
                      </p>
                      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                        {APPLIANCES.map((a) => (
                          <button
                            key={a.label}
                            type="button"
                            onClick={() => {
                              setAppliance(a.label);
                              setStep(1);
                            }}
                            className={cn(
                              "flex flex-col items-start gap-3 rounded-xl border p-4 text-left transition-colors",
                              appliance === a.label
                                ? "border-brand bg-brand-soft"
                                : "border-line hover:border-line-strong",
                            )}
                          >
                            <Icon name={a.icon} className="size-5 text-brand" />
                            <span className="text-sm font-medium text-ink">
                              {a.label}
                            </span>
                          </button>
                        ))}
                      </div>
                    </StepWrap>
                  )}

                  {step === 1 && (
                    <StepWrap key="s1">
                      <label className="mb-2 block text-sm font-medium text-ink-soft">
                        O que se passa com o seu {appliance.toLowerCase()}?
                      </label>
                      <textarea
                        value={problem}
                        onChange={(e) => setProblem(e.target.value)}
                        rows={5}
                        autoFocus
                        placeholder="Ex.: não arranca, faz barulho, não aquece, deita água…"
                        className="w-full rounded-xl border border-line-strong bg-white px-4 py-3 text-sm text-ink shadow-[0_1px_2px_rgba(13,24,38,0.05)] placeholder:text-muted-2 focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand/15"
                      />
                    </StepWrap>
                  )}

                  {step === 2 && (
                    <StepWrap key="s2">
                      <div className="grid gap-3">
                        <Field label="Nome" value={name} onChange={setName} placeholder="O seu nome" required />
                        <div className="grid gap-3 sm:grid-cols-2">
                          <Field label="Telemóvel" value={phone} onChange={setPhone} placeholder="Contacto" type="tel" />
                          <Field label="E-mail" value={email} onChange={setEmail} placeholder="O seu e-mail" type="email" required />
                        </div>
                        <label className="mt-1 flex items-start gap-3 text-sm text-muted">
                          <input
                            type="checkbox"
                            checked={consent}
                            onChange={(e) => setConsent(e.target.checked)}
                            className="mt-0.5 size-4 rounded border-line-strong accent-brand"
                          />
                          <span>Aceito ser contactado sobre este pedido de assistência.</span>
                        </label>
                        {status === "error" && error && (
                          <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">{error}</p>
                        )}
                      </div>
                    </StepWrap>
                  )}
                </AnimatePresence>
              </div>

              {/* Nav */}
              <div className="mt-6 flex items-center justify-between border-t border-line pt-5">
                <button
                  type="button"
                  onClick={() => setStep((s) => Math.max(0, s - 1))}
                  className={cn(
                    "text-sm font-medium text-muted transition-colors hover:text-ink",
                    step === 0 && "invisible",
                  )}
                >
                  ← Voltar
                </button>
                {step < 2 ? (
                  <Button
                    onClick={() => canNext && setStep((s) => s + 1)}
                    variant="primary"
                    className={cn(!canNext && "pointer-events-none opacity-50")}
                    arrow
                  >
                    Continuar
                  </Button>
                ) : (
                  <Button
                    onClick={() => canSubmit && submit()}
                    variant="primary"
                    className={cn((!canSubmit || status === "submitting") && "pointer-events-none opacity-60")}
                  >
                    {status === "submitting" ? "A enviar…" : "Enviar pedido"}
                  </Button>
                )}
              </div>
            </>
          )}
        </Reveal>
      </div>
    </section>
  );
}

function StepWrap({ children, ...rest }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-ink-soft">
        {label} {required && <span className="text-brand">*</span>}
      </span>
      <input
        type={type}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-line-strong bg-white px-4 py-3 text-sm text-ink shadow-[0_1px_2px_rgba(13,24,38,0.05)] placeholder:text-muted-2 focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand/15"
      />
    </label>
  );
}
