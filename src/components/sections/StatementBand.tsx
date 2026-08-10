import { Reveal } from "@/components/Reveal";

interface StatementBandProps {
  lead: string;
  emphasis: string;
  body: string;
}

/** Dark statement band (Eletrodomésticos / Material Elétrico intros). */
export function StatementBand({ lead, emphasis, body }: StatementBandProps) {
  return (
    <section className="bg-navy py-20 text-white md:py-24">
      <div className="container-page grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold leading-snug md:text-[2rem] md:leading-[1.25]">
            {lead}{" "}
            <span className="text-white/45">{emphasis}</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-sm leading-relaxed text-white/60">{body}</p>
        </Reveal>
      </div>
    </section>
  );
}
