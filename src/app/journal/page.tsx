import type { Metadata } from "next";
import Link from "next/link";
import { journalPosts } from "@/data/journal";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Studio notes from Chandrarai — process, teaching, and small observations.",
};

export default function JournalPage() {
  return (
    <div className="container-page py-14 sm:py-20">
      <p className="eyebrow">Journal</p>
      <h1 className="mt-3 font-serif text-4xl text-ink sm:text-5xl">
        Studio notes
      </h1>
      <p className="mt-4 max-w-xl text-ink-soft">
        Occasional writing on process and teaching. A few sample posts to show
        the shape of the section.
      </p>
      <ul className="mt-12 divide-y divide-ink/10 border-y border-ink/10">
        {journalPosts.map((post) => (
          <li key={post.slug} className="py-8">
            <p className="text-xs uppercase tracking-[0.18em] text-ink-muted">
              {new Date(post.date).toLocaleDateString("en-IN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <h2 className="mt-2 font-serif text-2xl text-ink sm:text-3xl">
              <Link href={`/journal/${post.slug}`} className="hover:text-ink-soft">
                {post.title}
              </Link>
            </h2>
            <p className="mt-3 max-w-2xl text-ink-soft">{post.excerpt}</p>
            <Link
              href={`/journal/${post.slug}`}
              className="mt-4 inline-block text-sm text-ink-muted underline-offset-4 hover:text-ink hover:underline"
            >
              Read note
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
