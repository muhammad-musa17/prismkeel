"use client";

import { useForm, ValidationError } from "@formspree/react";
import { services } from "@/data/services";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xjykwpdp");

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="shell grid gap-12 py-20 lg:grid-cols-2"
    >
      <div>
        <p className="eyebrow">Start a conversation</p>

        <h2
          id="contact-heading"
          className="section-title mt-5"
        >
          A bold idea?
          <br />
          Let&apos;s build on it.
        </h2>

        <p className="mt-6 max-w-md leading-8 text-slate-400">
          Tell us what you want to create, improve or explore.
          We&apos;ll use your details to get back to you about
          your project.
        </p>

        <div className="mt-10 space-y-5 border-l border-cyan-200/40 pl-5">
          <div>
            <h3 className="text-sm font-medium text-white">
              Starting something new?
            </h3>

            <p className="mt-1 text-sm leading-7 text-slate-400">
              Share the idea and who it&apos;s for.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-white">
              Improving something existing?
            </h3>

            <p className="mt-1 text-sm leading-7 text-slate-400">
              Tell us what works, what doesn&apos;t and what
              you want to change.
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-[#0d1421] p-6 sm:p-9">
        {state.succeeded ? (
          <div
            role="status"
            aria-live="polite"
            className="flex min-h-[420px] flex-col justify-center"
          >
            <span
              aria-hidden="true"
              className="mb-7 grid h-16 w-16 place-items-center rounded-full border border-cyan-200/30 bg-cyan-200/10 text-3xl text-cyan-200"
            >
              ✓
            </span>

            <p className="eyebrow">Enquiry submitted</p>

            <h3 className="mt-4 text-3xl font-medium tracking-tight text-white">
              Thanks for starting
              <br />
              the conversation.
            </h3>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              Your enquiry has been submitted successfully.
              We&apos;ll review it and respond using the email
              address you provided.
            </p>

            <a
              href="#services"
              className="button button-secondary mt-8 self-start"
            >
              Explore our capabilities
            </a>
          </div>
        ) : (
          <form
            method="POST"
            action="https://formspree.io/f/xjykwpdp"
            onSubmit={handleSubmit}
            aria-busy={state.submitting}
          >
            <div className="mb-7">
              <h3 className="text-xl font-medium tracking-tight text-white">
                Tell us about your project
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                A rough idea is a perfectly good starting point.
              </p>
            </div>

            <fieldset disabled={state.submitting}>
              <legend className="sr-only">
                Project enquiry details
              </legend>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="field-label"
                  >
                    Your name
                  </label>

                  <input
                    id="contact-name"
                    className="field"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your full name"
                    required
                    maxLength={100}
                    aria-describedby="contact-name-error"
                  />

                  <div
                    id="contact-name-error"
                    className="mt-2 text-sm text-rose-300"
                  >
                    <ValidationError
                      prefix="Name"
                      field="name"
                      errors={state.errors}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="field-label"
                  >
                    Email address
                  </label>

                  <input
                    id="contact-email"
                    className="field"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    required
                    maxLength={254}
                    aria-describedby="contact-email-error"
                  />

                  <div
                    id="contact-email-error"
                    className="mt-2 text-sm text-rose-300"
                  >
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="contact-company"
                  className="field-label"
                >
                  Company or project name
                  <span className="ml-2 text-slate-500">
                    (optional)
                  </span>
                </label>

                <input
                  id="contact-company"
                  className="field"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  placeholder="Your business or project"
                  maxLength={150}
                />
              </div>

              <div className="mt-5">
                <label
                  htmlFor="contact-service"
                  className="field-label"
                >
                  What can we help with?
                </label>

                <select
                  id="contact-service"
                  className="field"
                  name="service"
                  defaultValue=""
                  required
                  aria-describedby="contact-service-error"
                >
                  <option value="" disabled>
                    Select a service
                  </option>

                  {services.map((service) => (
                    <option
                      key={service.id}
                      value={service.label}
                    >
                      {service.label}
                    </option>
                  ))}

                  <option value="Multiple services">
                    Multiple services
                  </option>

                  <option value="Not sure yet">
                    Not sure yet — let&apos;s discuss
                  </option>
                </select>

                <div
                  id="contact-service-error"
                  className="mt-2 text-sm text-rose-300"
                >
                  <ValidationError
                    prefix="Service"
                    field="service"
                    errors={state.errors}
                  />
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="contact-message"
                  className="field-label"
                >
                  Project details
                </label>

                <textarea
                  id="contact-message"
                  className="field min-h-40 resize-y"
                  name="message"
                  placeholder="What would you like to build? Share your goals, any useful links and your preferred timeline."
                  required
                  minLength={10}
                  maxLength={5000}
                  aria-describedby="contact-message-error"
                />

                <div
                  id="contact-message-error"
                  className="mt-2 text-sm text-rose-300"
                >
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>
              </div>

              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                style={{ display: "none" }}
              />

              <p className="mt-5 text-xs leading-6 text-slate-400">
                We use the details you provide to respond to
                your enquiry. Submissions are processed through
                Formspree. Please don&apos;t include passwords
                or sensitive information.
              </p>

              <button
                type="submit"
                disabled={state.submitting}
                className="button mt-6 w-full justify-center disabled:cursor-wait disabled:opacity-60"
              >
                {state.submitting
                  ? "Sending your enquiry…"
                  : "Send enquiry"}
              </button>
            </fieldset>

            <div
              role="status"
              aria-live="polite"
              className="mt-4 text-sm leading-6 text-rose-300"
            >
              <ValidationError errors={state.errors} />
            </div>
          </form>
        )}
      </div>
    </section>
  );
}