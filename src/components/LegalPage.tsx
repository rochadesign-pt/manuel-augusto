import { Reveal } from "@/components/Reveal";

interface LegalPageProps {
  title: string;
  updated?: string;
  children: React.ReactNode;
}

export function LegalPage({ title, updated, children }: LegalPageProps) {
  return (
    <section className="pt-28 md:pt-32">
      <div className="container-page max-w-3xl pb-24">
        <Reveal>
          <h1 className="text-3xl font-semibold md:text-[2.5rem]">{title}</h1>
          {updated && (
            <p className="mt-3 text-sm text-muted-2">
              Última atualização: {updated}
            </p>
          )}
        </Reveal>
        <Reveal
          delay={0.1}
          className="mt-8 space-y-4 leading-relaxed text-ink-soft [&_h2]:mt-8 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-ink"
        >
          {children}
        </Reveal>
      </div>
    </section>
  );
}
