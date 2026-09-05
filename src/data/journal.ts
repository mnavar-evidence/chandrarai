import type { JournalPost } from "@/lib/types";

export const journalPosts: JournalPost[] = [
  {
    slug: "on-leaving-space",
    title: "On Leaving Space",
    date: "2026-08-12",
    excerpt:
      "The hardest part of a painting is often knowing what not to touch.",
    body: [
      "In the studio this month I have been practicing restraint. A wash that wants a second pass; a corner that wants a story. Most of the time, the first quiet answer is better.",
      "When I teach, I ask students to put the brush down for a full minute before they decide the piece is unfinished. That minute is where taste grows.",
      "If you are looking at the gallery this season, you will notice more paper left open — especially in the monsoon pieces. That open paper is not emptiness. It is breath.",
    ],
  },
  {
    slug: "a-small-palette-for-travel",
    title: "A Small Palette for Travel",
    date: "2026-07-03",
    excerpt:
      "Six pans, one brush, and permission to paint badly on trains.",
    body: [
      "I travel with a tiny tin: raw umber, ultramarine, burnt sienna, sap green, a warm red, and titanium white in a tube. That is enough for weather, rooms, and tea stalls.",
      "The point is not perfect pictures. It is keeping the eye soft and the hand moving while the world goes by.",
      "If you join Foundations of Watercolor, we build a travel kit together in week two — tuned to what you can find locally.",
    ],
  },
];

export function getPost(slug: string): JournalPost | undefined {
  return journalPosts.find((p) => p.slug === slug);
}
