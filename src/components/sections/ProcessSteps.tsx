import { Reveal } from "@/components/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";

interface Step {
  title: string;
  text: string;
}

interface ProcessStepsProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  steps: Step[];
}

/**
 * Numbered process timeline — steps connected by a hairline on desktop,
 * stacked on mobile. Customized to the site's system (brand markers, boxy).
 */
export function ProcessSteps({
  eyebrow = "Como trabalhamos",
  title,
  intro,
  steps,
}: ProcessStepsProps) {
  return (
    <section className="bg-surface-soft py-20 md:py-28">
      <div className="container-page">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <SplitReveal
              as="h2"
              text={title}
              className="mt-3 text-3xl font-semibold md:text-[2.5rem] md:leading-[1.1]"
            />
          </div>
          {intro && <p className="text-muted lg:pb-2">{intro}</p>}
        </div>

        <div className="relative mt-16 md:mt-20">
          {/* connecting hairline (desktop) */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-6 hidden h-px bg-line-strong lg:block"
          />
          <ol className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal key={step.title} as="li" delay={i * 0.08}>
                <span className="relative z-10 grid size-12 place-items-center rounded-full bg-brand font-display text-base font-semibold text-white ring-4 ring-surface-soft">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.text}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
