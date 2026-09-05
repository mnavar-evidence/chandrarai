import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "The artist story, process, and teaching philosophy behind Chandrarai — an online art studio by Chandra Rai.",
};

export default function AboutPage() {
  return (
    <div className="container-page py-14 sm:py-20">
      <p className="eyebrow">About</p>
      <h1 className="mt-3 max-w-3xl font-serif text-4xl text-ink sm:text-5xl">
        A studio built around looking carefully
      </h1>

      <div className="mt-12 grid gap-14 lg:grid-cols-[1.4fr_1fr]">
        <div className="prose-studio max-w-2xl space-y-10">
          <section>
            <h2 className="mb-4 font-serif text-2xl text-ink">Artist story</h2>
            <p>
              Chandrarai is the studio of Chandra Rai — a corner table, a
              window, and a stack of paper that never quite stayed flat in
              monsoon season. The name carries Chandra into one word: soft
              illumination rather than spotlight.
            </p>
            <p>
              The work moves across subjects and series — shared roads,
              quiet rooms, weather, botanical hours — held together by careful
              looking. Paintings meant for rooms where people read, rest, and
              talk softly.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-2xl text-ink">Process</h2>
            <p>
              Most pieces start with a small observational sketch. Watercolor
              stays close to the paper&apos;s voice; oil is slower, built in
              sessions that honor drying time. Ink arrives when a single gesture
              says enough.
            </p>
            <p>
              Real artwork photographs are replacing the earlier placeholders
              on this site. More studio moments will follow as the gallery grows.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-2xl text-ink">
              Teaching philosophy
            </h2>
            <p>
              Teaching is part of the practice. Classes stay small in spirit even
              when they are online: clear demos, room to fail safely, and
              feedback that names what is already working.
            </p>
            <p>
              You do not need talent mythology. You need a few reliable
              materials, a little time, and permission to make ordinary pictures
              until the good ones arrive.
            </p>
          </section>
        </div>

        <aside className="space-y-8">
          <div className="overflow-hidden rounded-[1.5rem] bg-paper-warm shadow-lg shadow-ink/5">
            <div className="relative aspect-[4/5]">
              <Image
                src="/studio/chandra-rai.png"
                alt="Chandra Rai"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 28rem"
                priority
              />
            </div>
            <div className="p-5">
              <p className="font-serif text-xl text-ink">Chandra Rai</p>
              <p className="mt-1 text-sm text-ink-muted">Artist &amp; teacher</p>
            </div>
          </div>
          <div className="card-quiet p-8">
            <p className="eyebrow">Visit</p>
            <p className="mt-3 font-serif text-2xl text-ink">chandrarai.art</p>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              Browse the gallery, explore a course, or write to Chandra — WhatsApp and email are on the contact page.
            </p>
            <Link href="/contact" className="btn-secondary mt-8">
              Say hello
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
