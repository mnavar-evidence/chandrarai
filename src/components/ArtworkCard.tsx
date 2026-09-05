import Link from "next/link";
import type { Artwork } from "@/lib/types";
import ArtworkPlaceholder from "./ArtworkPlaceholder";

export default function ArtworkCard({ artwork }: { artwork: Artwork }) {
  return (
    <Link
      href={`/gallery/${artwork.slug}`}
      className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-clay"
    >
      <ArtworkPlaceholder
        artwork={artwork}
        className="aspect-[4/5] rounded-2xl transition duration-500 group-hover:scale-[1.01]"
      />
      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="font-serif text-xl text-ink group-hover:text-ink-soft">
            {artwork.title}
          </h3>
          <p className="mt-1 text-sm text-ink-muted">
            {artwork.medium} · {artwork.series}
          </p>
        </div>
        <span className="shrink-0 text-xs uppercase tracking-wider text-ink-muted">
          {artwork.availability}
        </span>
      </div>
    </Link>
  );
}
