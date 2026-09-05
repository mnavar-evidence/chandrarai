import type { Course } from "@/lib/types";

export const courses: Course[] = [
  {
    slug: "foundations-of-watercolor",
    title: "Foundations of Watercolor",
    tagline: "Learn to see light as color — gently, week by week.",
    description:
      "A four-week introduction to watercolor for absolute beginners and returning painters. We move from washes and edges to a small finished landscape, with demos, practice sheets, and calm live sessions.",
    whatYoullMake: [
      "Value and color studies in wash",
      "A botanical sketch from life",
      "A small landscape with sky, land, and water",
      "Your own sketchbook habit",
    ],
    skillLevel: "beginner",
    format: "self-paced + live",
    duration: "4 weeks",
    price: "₹4,800",
    nextLive: "Saturday, 20 Sep 2026 · 10:00 IST",
    highlights: [
      "Weekly live demo (recorded)",
      "Private community thread",
      "Supply list for Indian art stores",
      "Lifetime feedback on two pieces",
    ],
  },
  {
    slug: "quiet-still-life-in-oil",
    title: "Quiet Still Life in Oil",
    tagline: "Arrange, observe, and paint the hush of objects.",
    description:
      "Six sessions on composing and painting intimate still lifes. Emphasis on light temperature, soft edges, and knowing when to stop.",
    whatYoullMake: [
      "Two completed still lifes on panel",
      "Thumbnail composition studies",
      "A limited-palette color chart",
    ],
    skillLevel: "beginner–intermediate",
    format: "live",
    duration: "6 weeks",
    price: "₹7,200",
    nextLive: "Sunday, 5 Oct 2026 · 16:00 IST",
    highlights: [
      "Live block-ins every week",
      "Palette guidance for warm interiors",
      "Optional critique circle",
    ],
  },
  {
    slug: "ink-and-wash-evenings",
    title: "Ink & Wash Evenings",
    tagline: "Gesture, patience, and the beauty of one good line.",
    description:
      "A self-paced course of short evening practices — ink gesture, dilute wash, and simple landscapes. Designed for busy days; each lesson fits in under an hour.",
    whatYoullMake: [
      "A series of gesture pages",
      "Three ink-and-wash landscapes",
      "A personal mark vocabulary",
    ],
    skillLevel: "all levels",
    format: "self-paced",
    duration: "Self-paced · ~8 lessons",
    price: "₹2,400",
    highlights: [
      "Start anytime",
      "Downloadable practice sheets",
      "Lifetime office hours monthly",
    ],
  },
];

export function getCourse(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}

export function getNextLiveCourse(): Course | undefined {
  return courses.find((c) => c.nextLive);
}
