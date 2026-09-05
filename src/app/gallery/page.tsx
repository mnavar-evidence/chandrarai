import type { Metadata } from "next";
import GalleryFilter from "@/components/GalleryFilter";
import { artworks, getMediums, getSeriesList } from "@/data/artworks";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse original paintings from Chandrarai — watercolor, oil, ink, and mixed media across monsoon, coastal, botanical, and interior series.",
};

export default function GalleryPage() {
  return (
    <div className="container-page py-14 sm:py-20">
      <p className="eyebrow">Gallery</p>
      <h1 className="mt-3 font-serif text-4xl text-ink sm:text-5xl">
        Work to live with
      </h1>
      <p className="mt-4 max-w-2xl text-ink-soft">
        Filter by medium or series. Placeholder gradients stand in for
        photography — replace them with your scans when ready.
      </p>
      <div className="mt-12">
        <GalleryFilter
          artworks={artworks}
          mediums={getMediums()}
          seriesList={getSeriesList()}
        />
      </div>
    </div>
  );
}
