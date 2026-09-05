import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Write to the Chandrarai studio — commissions, course questions, and general inquiries.",
};

export default function ContactPage() {
  return (
    <div className="container-page py-14 sm:py-20">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Contact</p>
          <h1 className="mt-3 font-serif text-4xl text-ink sm:text-5xl">
            Write to the studio
          </h1>
          <p className="mt-4 max-w-md text-ink-soft">
            Commissions, course questions, or a simple hello — the form
            validates on your device and opens email (with a console stub for
            local testing).
          </p>
          <ul className="mt-10 space-y-4 text-sm text-ink-soft">
            <li>
              <span className="eyebrow block">Email</span>
              <a
                href="mailto:chandrarai922@gmail.com"
                className="mt-1 inline-block text-base text-ink hover:underline"
              >
                chandrarai922@gmail.com
              </a>
            </li>
            <li>
              <span className="eyebrow block">WhatsApp</span>
              <a
                href="https://wa.me/919901932981"
                className="mt-1 inline-block text-base text-ink hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                +91 99019 32981
              </a>
            </li>
          </ul>
        </div>
        <div className="card-quiet p-6 sm:p-8">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
