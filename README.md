# Chandrarai — online art studio

A Next.js (App Router) + TypeScript + Tailwind site for **Chandrarai** (chandrarai.art):
gallery-first paintings and online painting courses.

## Run locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

Production build:

```bash
npm run build
npm run start
```

## What to replace with real art

- **Gallery images**: `src/components/ArtworkPlaceholder.tsx` renders CSS/SVG gradient placeholders. Swap for `next/image` pointing at files in `public/`.
- **Artwork copy**: edit `src/data/artworks.ts` (titles, stories, sizes, availability, series, medium).
- **Courses**: edit `src/data/courses.ts`.
- **Journal**: edit `src/data/journal.ts`.
- **Contact**: replace WhatsApp placeholder and `hello@chandrarai.art` everywhere once mail is live.
- **Enroll**: `EnrollActions` is mailto + console/alert stub — wire Stripe or your provider later (no secrets in this repo).

Placeholder note: all visual artwork on the site is intentionally fake (gradients labeled as placeholders). Do not treat them as final photography.

## Domain / DNS

The UI shows **chandrarai.art**. Domain purchase, DNS, and hosting come later — this project is ready to deploy when you are.

## Routes

- `/` Home
- `/gallery` Filterable gallery
- `/gallery/[slug]` Piece detail
- `/learn` Course catalog
- `/learn/[slug]` Course landing
- `/about` Artist story & teaching
- `/contact` Contact form
- `/journal` Studio notes
- `/journal/[slug]` Journal post

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Google fonts: Cormorant Garamond (titles) + Outfit (body)
