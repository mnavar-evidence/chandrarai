export type Medium =
  | "watercolor"
  | "oil"
  | "ink"
  | "acrylic"
  | "mixed media"
  | "digital";

export type Series =
  | "Monsoon Light"
  | "Quiet Rooms"
  | "Coastal Studies"
  | "Botanical Hours"
  | "Night Windows"
  | "Shared Roads"
  | "Quiet Paths";

export type Availability = "available" | "sold" | "reserved";

export interface Artwork {
  slug: string;
  title: string;
  caption: string;
  story: string;
  medium: Medium;
  series: Series;
  size: string;
  year: number;
  availability: Availability;
  featured?: boolean;
  /** CSS gradient used as placeholder art when image is absent */
  gradient: string;
  accent: string;
  /** Optional path under /public for a real artwork image */
  image?: string;
}

export type SkillLevel = "beginner" | "beginner–intermediate" | "intermediate" | "all levels";

export interface Course {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  whatYoullMake: string[];
  skillLevel: SkillLevel;
  format: "self-paced" | "live" | "self-paced + live";
  duration: string;
  price: string;
  nextLive?: string;
  highlights: string[];
}

export interface JournalPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  body: string[];
}
