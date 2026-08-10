import { Reveal } from "@/components/Reveal";
import { Media } from "@/components/ui/Media";

export function ImageBand({
  alt,
  tone = "steel",
}: {
  alt: string;
  tone?: "steel" | "soft" | "navy";
}) {
  return (
    <section className="py-8 md:py-12">
      <div className="container-page">
        <Reveal>
          <Media
            alt={alt}
            tone={tone}
            className="h-64 w-full md:h-96"
            sizes="100vw"
          />
        </Reveal>
      </div>
    </section>
  );
}
