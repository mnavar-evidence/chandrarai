import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import EnrollActions from "@/components/EnrollActions";
import { courses, getCourse } from "@/data/courses";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) return { title: "Course" };
  return {
    title: course.title,
    description: course.tagline,
  };
}

export default async function CoursePage({ params }: Props) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  const enrollMailto = `mailto:hello@chandrarai.art?subject=${encodeURIComponent(
    `Enroll: ${course.title}`
  )}&body=${encodeURIComponent(
    `Hi,\n\nI would like to enroll in ${course.title}.\n\nThanks!`
  )}`;

  return (
    <div className="container-page py-14 sm:py-20">
      <Link href="/learn" className="text-sm text-ink-muted hover:text-ink">
        ← All courses
      </Link>
      <div className="mt-8 grid gap-12 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <p className="eyebrow">
            {course.format} · {course.skillLevel}
          </p>
          <h1 className="mt-3 font-serif text-4xl text-ink sm:text-5xl">
            {course.title}
          </h1>
          <p className="mt-4 text-lg text-ink-soft">{course.tagline}</p>
          <p className="mt-6 leading-relaxed text-ink-soft">
            {course.description}
          </p>

          <h2 className="mt-12 font-serif text-2xl text-ink">
            What you&apos;ll make
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-ink-soft">
            {course.whatYoullMake.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2 className="mt-10 font-serif text-2xl text-ink">Included</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-ink-soft">
            {course.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <aside className="card-quiet h-fit p-6 sm:p-8">
          <p className="eyebrow">Enroll</p>
          <p className="mt-3 font-serif text-3xl text-ink">{course.price}</p>
          <p className="mt-2 text-sm text-ink-muted">{course.duration}</p>
          {course.nextLive && (
            <p className="mt-4 text-sm text-ink-soft">
              Next live: {course.nextLive}
            </p>
          )}
          <EnrollActions
            slug={course.slug}
            title={course.title}
            mailto={enrollMailto}
          />
          <p className="mt-4 text-xs leading-relaxed text-ink-muted">
            Payment integration comes later. For now, enrollment opens your
            email or shows a placeholder alert.
          </p>
        </aside>
      </div>
    </div>
  );
}
