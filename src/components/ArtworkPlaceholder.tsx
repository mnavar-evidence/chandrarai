import Image from "next/image";
import type { Artwork } from "@/lib/types";

type Props = {
  artwork: Pick<Artwork, "title" | "gradient" | "accent" | "image">;
  className?: string;
  priority?: boolean;
};

export default function ArtworkPlaceholder({
  artwork,
  className = "",
  priority = false,
}: Props) {
  if (artwork.image) {
    return (
      <div className={`relative overflow-hidden bg-paper-warm ${className}`}>
        <Image
          src={artwork.image}
          alt={artwork.title}
          fill
          priority={priority}
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ background: artwork.gradient }}
      role="img"
      aria-label={`Placeholder artwork for ${artwork.title}`}
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-30 mix-blend-soft-light"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <filter id="grain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.85"
              numOctaves="2"
              stitchTiles="stitch"
            />
          </filter>
        </defs>
        <rect width="100%" height="100%" filter="url(#grain)" opacity="0.4" />
      </svg>
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: `radial-gradient(ellipse at 30% 20%, ${artwork.accent}55, transparent 55%)`,
        }}
      />
      <span className="sr-only">Placeholder image — replace with real artwork</span>
    </div>
  );
}
