import Reveal from "@/components/Reveal";

type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role?: string;
  company?: string;
  service?: string;
};

const testimonials: Testimonial[] = [
  // Add genuine, approved feedback here.
  //
  // {
  //   id: "unique-id",
  //   quote: "Paste the client's approved words here.",
  //   name: "Client's approved display name",
  //   role: "Founder",
  //   company: "Company name",
  //   service: "Web development",
  // },
];

export default function Testimonials() {
  if (testimonials.length === 0) return null;

  const columns =
    testimonials.length === 1
      ? "grid-cols-1"
      : testimonials.length === 2
        ? "md:grid-cols-2"
        : "md:grid-cols-2 lg:grid-cols-3";

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="shell py-20"
    >
      <Reveal>
        <div className="mb-10">
          <p className="eyebrow">Client perspectives</p>

          <h2
            id="testimonials-heading"
            className="section-title mt-5"
          >
            In their words.
          </h2>

          <p className="mt-5 max-w-lg text-sm leading-7 text-slate-400">
            Feedback from the people we&apos;ve worked with.
          </p>
        </div>
      </Reveal>

      <div className={`grid gap-5 ${columns}`}>
        {testimonials.map((testimonial) => (
          <Reveal key={testimonial.id}>
            <figure className="testimonial-card">
              {testimonial.service && (
                <p className="testimonial-service">
                  {testimonial.service}
                </p>
              )}

              <blockquote>
                <p>“{testimonial.quote}”</p>
              </blockquote>

              <figcaption>
                <span className="testimonial-avatar" aria-hidden="true">
                  {testimonial.name
                    .trim()
                    .split(/\s+/)
                    .slice(0, 2)
                    .map((part) => part[0])
                    .join("")}
                </span>

                <div>
                  <p className="font-medium text-slate-100">
                    {testimonial.name}
                  </p>

                  {(testimonial.role || testimonial.company) && (
                    <p className="mt-1 text-xs text-slate-400">
                      {[testimonial.role, testimonial.company]
                        .filter(Boolean)
                        .join(" · ")}
                    </p>
                  )}
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}