import { Reveal } from "@/components/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";

export function Tagline({
  eyebrow = "Tagline",
  title,
  body,
}: {
  eyebrow?: string;
  title: string;
  body: string;
}) {
  return (
    <section className="py-16 md:py-20">
      <div className="container-page grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <SplitReveal
            as="h2"
            text={title}
            className="mt-3 text-3xl font-semibold md:text-[2.25rem] md:leading-[1.15]"
          />
        </div>
        <Reveal delay={0.1}>
          <p className="text-muted lg:pt-2">{body}</p>
        </Reveal>
      </div>
    </section>
  );
}
