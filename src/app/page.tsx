import Navbar from "@/components/Navbar";
import ServiceShowcase from "@/components/ServiceShowcase";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Testimonials from "@/components/Testimonials";
import BackToTop from "@/components/BackToTop";

const principles = [
  {
    title: "Creative and technical, together.",
    text: "Design decisions and engineering decisions shape each other from the start.",
  },
  {
    title: "Clarity throughout.",
    text: "We discuss priorities, explain decisions and keep the next step clear.",
  },
  {
    title: "Built around the purpose.",
    text: "Your users, business needs and project goals guide what we create.",
  },
];

const steps = [
  {
    title: "Discover",
    text: "We listen, ask questions and define what success should look like.",
    detail: "Goals · Audience · Scope",
  },
  {
    title: "Design",
    text: "We turn the brief into a clear direction you can see and review.",
    detail: "Structure · Visual direction · Experience",
  },
  {
    title: "Build",
    text: "We develop, test and refine, keeping you involved along the way.",
    detail: "Development · Testing · Refinement",
  },
  {
    title: "Launch",
    text: "We prepare for release and agree the support your project needs next.",
    detail: "Release · Handover · Next steps",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      <main id="main-content" tabIndex={-1}>
        <ServiceShowcase />

        <section
          id="about"
          aria-labelledby="about-heading"
          className="about-editorial"
        >
          <div className="shell">
            <Reveal>
              <p className="eyebrow">
                The people behind the thinking
              </p>

              <div className="about-intro">
                <h2 id="about-heading">
                  Different
                  <br />
                  perspectives.
                  <br />
                  <span>One committed team.</span>
                </h2>

                <div className="about-copy">
                  <p>
                    PrismKeel brings together people with
                    complementary creative and technical skills.
                  </p>

                  <p>
                    We work collaboratively, communicate clearly
                    and shape each project around what your
                    business actually needs. From an early idea
                    to a working product, we connect the thinking
                    with the making.
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="about-principles">
              {principles.map((principle) => (
                <Reveal key={principle.title}>
                  <article>
                    <h3>{principle.title}</h3>
                    <p>{principle.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section
          id="approach"
          aria-labelledby="approach-heading"
          className="shell approach-editorial"
        >
          <div className="approach-heading">
            <p className="eyebrow">How we work</p>

            <h2
              id="approach-heading"
              className="section-title mt-5"
            >
              Ambitious thinking.
              <br />
              Practical steps.
            </h2>

            <p className="mt-6 max-w-sm leading-8 text-slate-400">
              A clear process with space to explore, challenge
              assumptions and make thoughtful decisions.
            </p>

            <a
              className="button button-secondary mt-8"
              href="#contact"
            >
              Tell us what you have in mind
            </a>
          </div>

          <div className="process-timeline">
            {steps.map((step, index) => (
              <Reveal key={step.title}>
                <article className="process-step">
                  <span className="process-number">
                    0{index + 1}
                  </span>

                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>

                    <span className="process-detail">
                      {step.detail}
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <Testimonials />

        <div className="shell" aria-hidden="true">
          <div className="h-px bg-white/10" />
        </div>

        <Reveal>
          <ContactForm />
        </Reveal>
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}