import Link from "next/link";
import ArtworkCard from "@/components/ArtworkCard";
import ArtworkPlaceholder from "@/components/ArtworkPlaceholder";
import { getFeaturedArtworks, artworks } from "@/data/artworks";
import { getNextLiveCourse } from "@/data/courses";

export default function HomePage() {
  const featured = getFeaturedArtworks();
  const hero = artworks.find((a) => a.slug === "looking-back") ?? featured[0];
  const nextLive = getNextLiveCourse();

  return (
    <>
      <section className="container-page grid items-center gap-12 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div>
          <p className="eyebrow">Online art studio · chandrarai.art</p>
          <h1 className="display mt-4">
            Paintings for quiet rooms, and lessons that move at the speed of attention.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-ink-soft sm:text-lg">
            Chandrarai is a gallery-first studio — original work to live with, and
            online painting courses that honor beginners and returning hands alike.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/gallery" className="btn-primary">
              Browse work
            </Link>
            <Link href="/learn" className="btn-secondary">
              Learn with me
            </Link>
          </div>
        </div>
        <div className="relative">
          <ArtworkPlaceholder
            artwork={hero}
            priority
            className="aspect-[4/5] rounded-[1.75rem] shadow-lg shadow-ink/5"
          />
          <p className="mt-4 text-sm text-ink-muted">
            Featured · <span className="text-ink">{hero.title}</span>
          </p>
        </div>
      </section>

      <section className="border-y border-ink/5 bg-paper-warm/60 py-16">
        <div className="container-page">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 className="mt-2 font-serif text-3xl text-ink sm:text-4xl">
                Featured pieces
              </h2>
            </div>
            <Link
              href="/gallery"
              className="hidden text-sm text-ink-muted underline-offset-4 hover:text-ink hover:underline sm:inline"
            >
              View all
            </Link>
          </div>
          <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((artwork) => (
              <ArtworkCard key={artwork.slug} artwork={artwork} />
            ))}
          </div>
        </div>
      </section>

      {nextLive && (
        <section className="container-page py-20">
          <div className="card-quiet grid gap-8 p-8 sm:p-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <p className="eyebrow">Next live class</p>
              <h2 className="mt-3 font-serif text-3xl text-ink sm:text-4xl">
                {nextLive.title}
              </h2>
              <p className="mt-4 max-w-xl text-ink-soft">{nextLive.tagline}</p>
              <p className="mt-4 text-sm text-ink-muted">{nextLive.nextLive}</p>
            </div>
            <div className="flex flex-col items-start gap-4 lg:items-end">
              <p className="font-serif text-2xl text-ink">{nextLive.price}</p>
              <Link href={`/learn/${nextLive.slug}`} className="btn-primary">
                View course
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
