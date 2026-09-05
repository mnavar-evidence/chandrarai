import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArtworkPlaceholder from "@/components/ArtworkPlaceholder";
import { artworks, getArtwork } from "@/data/artworks";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return artworks.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const artwork = getArtwork(slug);
  if (!artwork) return { title: "Artwork" };
  return {
    title: artwork.title,
    description: artwork.caption,
  };
}

export default async function ArtworkPage({ params }: Props) {
  const { slug } = await params;
  const artwork = getArtwork(slug);
  if (!artwork) notFound();

  return (
    <div className="container-page py-14 sm:py-20">
      <Link
        href="/gallery"
        className="text-sm text-ink-muted hover:text-ink"
      >
        ← Back to gallery
      </Link>
      <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16">
        <ArtworkPlaceholder
          artwork={artwork}
          className="aspect-[4/5] rounded-[1.5rem]"
        />
        <div>
          <p className="eyebrow">{artwork.series}</p>
          <h1 className="mt-3 font-serif text-4xl text-ink sm:text-5xl">
            {artwork.title}
          </h1>
          <p className="mt-4 text-lg text-ink-soft">{artwork.caption}</p>
          <dl className="mt-8 grid grid-cols-2 gap-4 text-sm">
            <div>
              <dt className="eyebrow">Medium</dt>
              <dd className="mt-1 capitalize text-ink">{artwork.medium}</dd>
            </div>
            <div>
              <dt className="eyebrow">Size</dt>
              <dd className="mt-1 text-ink">{artwork.size}</dd>
            </div>
            <div>
              <dt className="eyebrow">Year</dt>
              <dd className="mt-1 text-ink">{artwork.year}</dd>
            </div>
            <div>
              <dt className="eyebrow">Status</dt>
              <dd className="mt-1 capitalize text-ink">{artwork.availability}</dd>
            </div>
          </dl>
          <div className="prose-studio mt-10">
            <h2 className="mb-3 font-serif text-2xl text-ink">Story</h2>
            <p>{artwork.story}</p>
          </div>
          {artwork.availability === "available" && (
            <a
              href={`mailto:chandrarai922@gmail.com?subject=${encodeURIComponent(
                `Inquiry: ${artwork.title}`
              )}`}
              className="btn-primary mt-8"
            >
              Inquire about this piece
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
