import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  PortableText,
  type PortableTextComponents,
  type PortableTextBlock,
} from "@portabletext/react";

import { Button } from "@/components/ui/Button";
import { Media } from "@/components/ui/Media";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { getPost } from "@/lib/data";
import type { Image as SanityImage } from "sanity";

interface Params {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Notícia" };
  const canonical = `/noticias/${slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: canonical,
      ...(post.publishedAt ? { publishedTime: post.publishedAt } : {}),
    },
  };
}

const components: PortableTextComponents = {
  types: {
    image: ({ value }: { value: SanityImage }) => (
      <Media
        image={value}
        alt=""
        tone="soft"
        className="my-8 aspect-[16/9] w-full"
      />
    ),
  },
  block: {
    h2: ({ children }) => (
      <h2 className="mt-10 font-display text-2xl font-semibold">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 font-display text-xl font-semibold">{children}</h3>
    ),
    normal: ({ children }) => (
      <p className="mt-4 leading-relaxed text-ink-soft">{children}</p>
    ),
  },
};

export default async function PostPage({ params }: Params) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  return (
    <>
      <article className="pt-28 md:pt-32">
        <div className="container-page max-w-3xl">
          <Button href="/noticias" variant="ghost" className="-ml-2 mb-6 text-muted">
            ← Voltar às notícias
          </Button>
          <h1 className="text-3xl font-semibold leading-tight md:text-[2.75rem]">
            {post.title}
          </h1>
          {post.publishedAt && (
            <p className="mt-4 text-sm text-muted-2">
              {new Intl.DateTimeFormat("pt-PT", {
                day: "numeric",
                month: "long",
                year: "numeric",
              }).format(new Date(post.publishedAt))}
            </p>
          )}
          {post.coverImage && (
            <Media
              image={post.coverImage}
              alt={post.title}
              tone="steel"
              className="mt-8 aspect-[16/9] w-full"
              sizes="100vw"
              priority
            />
          )}
          <div className="mt-8">
            {post.body ? (
              <PortableText
                value={post.body as PortableTextBlock[]}
                components={components}
              />
            ) : (
              post.excerpt && (
                <p className="leading-relaxed text-ink-soft">{post.excerpt}</p>
              )
            )}
          </div>
        </div>
      </article>

      <div className="mt-20">
        <CtaBanner />
      </div>
    </>
  );
}
