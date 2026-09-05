import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-ink/10 bg-paper-warm">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-3">
        <div>
          <p className="font-serif text-2xl text-ink">Chandrarai</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-muted">
            An online art studio for quiet paintings and patient learning.
          </p>
          <p className="mt-4 text-xs uppercase tracking-[0.18em] text-ink-muted">
            chandrarai.art
          </p>
        </div>
        <div>
          <p className="eyebrow">Explore</p>
          <ul className="mt-4 space-y-2 text-sm text-ink-soft">
            <li>
              <Link href="/gallery" className="hover:text-ink">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/learn" className="hover:text-ink">
                Courses
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-ink">
                About
              </Link>
            </li>
            <li>
              <Link href="/journal" className="hover:text-ink">
                Journal
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="eyebrow">Studio</p>
          <ul className="mt-4 space-y-2 text-sm text-ink-soft">
            <li>
              <Link href="/contact" className="hover:text-ink">
                Contact
              </Link>
            </li>
            <li>
              <a href="mailto:chandrarai922@gmail.com" className="hover:text-ink">
                chandrarai922@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/919901932981"
                className="hover:text-ink"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp: +91 99019 32981
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink/5 py-6 text-center text-xs text-ink-muted">
        © {new Date().getFullYear()} Chandrarai. All rights reserved.
      </div>
    </footer>
  );
}
