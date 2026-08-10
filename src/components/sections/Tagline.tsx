import { Reveal } from "@/components/Reveal";

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
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold md:text-[2.25rem] md:leading-[1.15]">
            {title}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-muted lg:pt-2">{body}</p>
        </Reveal>
      </div>
    </section>
  );
}
