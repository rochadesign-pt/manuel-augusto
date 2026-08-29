import type { Metadata } from "next";
import Link from "next/link";

import { Reveal } from "@/components/Reveal";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Media } from "@/components/ui/Media";
import { getPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Notícias",
  description:
    "Novidades, conselhos e histórias da Manuel Augusto & Filhos, Lda.",
  alternates: { canonical: "/noticias" },
};

export default async function NoticiasPage() {
  const posts = await getPosts();

  return (
    <>
      <section className="pt-28 md:pt-32">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Notícias</p>
            <h1 className="mt-3 text-4xl font-semibold leading-[1.05] md:text-[3rem]">
              Novidades e conselhos de quem percebe do assunto.
            </h1>
            <p className="mt-5 text-muted">
              Dicas para escolher, manter e tirar o máximo dos seus
              equipamentos — escritas pela nossa equipa.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-page">
          {posts.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-line-strong bg-surface-soft px-6 py-20 text-center">
              <div className="mx-auto grid size-12 place-items-center rounded-full bg-brand-soft text-brand">
                <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                  <path d="M4 5h16v14H4zM4 9h16M8 13h8M8 16h5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h2 className="mt-5 font-display text-xl font-semibold">
                Em breve, novidades por aqui.
              </h2>
              <p className="mx-auto mt-2 max-w-sm text-sm text-muted">
                Ainda não há notícias publicadas. Assim que a equipa publicar no
                Studio, aparecem automaticamente nesta página.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/noticias/${post.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white transition-shadow hover:shadow-card"
                >
                  <Media
                    image={post.coverImage}
                    alt={post.title}
                    tone="soft"
                    rounded={false}
                    className="aspect-[16/10] w-full"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="flex flex-1 flex-col p-6">
                    {post.publishedAt && (
                      <time className="text-xs font-medium text-muted-2">
                        {formatDate(post.publishedAt)}
                      </time>
                    )}
                    <h3 className="mt-2 font-display text-lg font-semibold text-ink group-hover:text-brand">
                      {post.title}
                    </h3>
                    {post.excerpt && (
                      <p className="mt-2 flex-1 text-sm text-muted">
                        {post.excerpt}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}

function formatDate(value: string) {
  try {
    return new Intl.DateTimeFormat("pt-PT", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(value));
  } catch {
    return value;
  }
}
