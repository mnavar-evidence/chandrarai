"use client";

import { useMemo, useState } from "react";
import type { Artwork } from "@/lib/types";
import ArtworkCard from "./ArtworkCard";

type Props = {
  artworks: Artwork[];
  mediums: string[];
  seriesList: string[];
};

export default function GalleryFilter({
  artworks,
  mediums,
  seriesList,
}: Props) {
  const [medium, setMedium] = useState<string>("all");
  const [series, setSeries] = useState<string>("all");

  const filtered = useMemo(() => {
    return artworks.filter((a) => {
      const mediumOk = medium === "all" || a.medium === medium;
      const seriesOk = series === "all" || a.series === series;
      return mediumOk && seriesOk;
    });
  }, [artworks, medium, series]);

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex flex-wrap gap-3">
          <label className="block text-sm">
            <span className="eyebrow">Medium</span>
            <select
              className="mt-2 block w-44 rounded-full border border-ink/15 bg-paper-card px-4 py-2 text-sm text-ink focus:border-clay focus:outline-none"
              value={medium}
              onChange={(e) => setMedium(e.target.value)}
            >
              <option value="all">All mediums</option>
              {mediums.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </label>
          <label className="block text-sm">
            <span className="eyebrow">Series</span>
            <select
              className="mt-2 block w-52 rounded-full border border-ink/15 bg-paper-card px-4 py-2 text-sm text-ink focus:border-clay focus:outline-none"
              value={series}
              onChange={(e) => setSeries(e.target.value)}
            >
              <option value="all">All series</option>
              {seriesList.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </label>
        </div>
        <p className="text-sm text-ink-muted" aria-live="polite">
          {filtered.length} piece{filtered.length === 1 ? "" : "s"}
        </p>
      </div>

      <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((artwork) => (
          <ArtworkCard key={artwork.slug} artwork={artwork} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-16 text-center text-ink-muted">
          No pieces match these filters. Try another combination.
        </p>
      )}
    </div>
  );
}
