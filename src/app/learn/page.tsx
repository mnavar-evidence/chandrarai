import type { Metadata } from "next";
import CourseCard from "@/components/CourseCard";
import { courses } from "@/data/courses";

export const metadata: Metadata = {
  title: "Learn",
  description:
    "Self-paced and live painting courses from Chandrarai — watercolor foundations, oil still life, and ink & wash evenings.",
};

export default function LearnPage() {
  return (
    <div className="container-page py-14 sm:py-20">
      <p className="eyebrow">Learn with me</p>
      <h1 className="mt-3 font-serif text-4xl text-ink sm:text-5xl">
        Courses for patient painters
      </h1>
      <p className="mt-4 max-w-2xl text-ink-soft">
        Online classes that favor clarity over hurry — demos, practice, and
        feedback without the noise of a typical course funnel.
      </p>
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <CourseCard key={course.slug} course={course} />
        ))}
      </div>
    </div>
  );
}
