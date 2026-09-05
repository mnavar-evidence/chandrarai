"use client";

import { FormEvent, useState } from "react";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

function validate(name: string, email: string, message: string): Errors {
  const errors: Errors = {};
  if (!name.trim()) errors.name = "Please share your name.";
  if (!email.trim()) errors.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errors.email = "That email looks incomplete.";
  if (!message.trim()) errors.message = "A short message helps.";
  else if (message.trim().length < 10)
    errors.message = "A few more words, please.";
  return errors;
}

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const next = validate(name, email, message);
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const subject = encodeURIComponent(`Studio inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    const mailto = `mailto:hello@chandrarai.art?subject=${subject}&body=${body}`;

    // Stub for local testing — also opens mailto when available
    console.log("[Chandrarai contact stub]", { name, email, message });
    setStatus("sent");
    window.location.href = mailto;
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="name" className="eyebrow">
          Name
        </label>
        <input
          id="name"
          name="name"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-2 w-full rounded-xl border border-ink/15 bg-paper-card px-4 py-3 text-ink focus:border-clay focus:outline-none"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-sm text-clay-deep">
            {errors.name}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="email" className="eyebrow">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-2 w-full rounded-xl border border-ink/15 bg-paper-card px-4 py-3 text-ink focus:border-clay focus:outline-none"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-clay-deep">
            {errors.email}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="message" className="eyebrow">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-2 w-full rounded-xl border border-ink/15 bg-paper-card px-4 py-3 text-ink focus:border-clay focus:outline-none"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-clay-deep">
            {errors.message}
          </p>
        )}
      </div>
      <button type="submit" className="btn-primary">
        Send message
      </button>
      {status === "sent" && (
        <p className="text-sm text-sage" role="status">
          Opening your email client… If nothing opens, write to
          hello@chandrarai.art directly.
        </p>
      )}
    </form>
  );
}
