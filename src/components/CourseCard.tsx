import Link from "next/link";
import type { Course } from "@/lib/types";

export default function CourseCard({ course }: { course: Course }) {
  return (
    <article className="card-quiet flex h-full flex-col p-6 sm:p-8">
      <p className="eyebrow">{course.format}</p>
      <h3 className="mt-3 font-serif text-2xl text-ink">{course.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
        {course.tagline}
      </p>
      <div className="mt-6 flex items-end justify-between gap-4 border-t border-ink/5 pt-5">
        <div>
          <p className="text-sm text-ink-muted">{course.duration}</p>
          <p className="mt-1 font-serif text-xl text-ink">{course.price}</p>
        </div>
        <Link href={`/learn/${course.slug}`} className="btn-secondary !px-4 !py-2 text-xs">
          View course
        </Link>
      </div>
    </article>
  );
}
