"use client";

type Props = {
  slug: string;
  title: string;
  mailto: string;
};

export default function EnrollActions({ slug, title, mailto }: Props) {
  return (
    <div className="mt-8 space-y-3">
      <a href={mailto} className="btn-primary w-full">
        Enroll / inquire
      </a>
      <button
        type="button"
        className="btn-secondary w-full"
        onClick={() => {
          console.log("[Enroll placeholder]", { slug, title });
          alert(
            "Checkout placeholder — connect Stripe or your payment tool later. Use Enroll / inquire for now."
          );
        }}
      >
        Placeholder checkout
      </button>
    </div>
  );
}
