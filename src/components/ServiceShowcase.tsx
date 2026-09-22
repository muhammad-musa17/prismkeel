"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";
import { services } from "@/data/services";
import VisualBanner from "./VisualBanner";

export default function ServiceShowcase() {
  const [active, setActive] = useState(0);
  const sections = useRef<(HTMLElement | null)[]>([]);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    let frame = 0;

    function updateActiveService() {
      frame = 0;

      const readingLine = window.innerHeight * 0.45;
      let nearestIndex = 0;
      let nearestDistance = Infinity;

      sections.current.forEach((section, index) => {
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const centre = rect.top + rect.height / 2;
        const distance = Math.abs(centre - readingLine);

        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearestIndex = index;
        }
      });

      setActive(nearestIndex);
    }

    function scheduleUpdate() {
      if (!frame) {
        frame = window.requestAnimationFrame(
          updateActiveService
        );
      }
    }

    updateActiveService();

    window.addEventListener("scroll", scheduleUpdate, {
      passive: true,
    });

    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  const selectedService = services[active];

  return (
    <>
      <section className="hero-editorial">
        <div className="shell relative">
          <div className="hero-intro">
            <p className="eyebrow">
              Creative thinking. Technical depth.
            </p>

            <span className="hero-index" aria-hidden="true">
              PRISMKEEL — DIGITAL STUDIO
            </span>
          </div>

          <h1 className="hero-headline">
            Bold ideas.
            <br />
            <span>Solid foundations.</span>
          </h1>

          <div className="hero-lower">
            <div className="hero-copy">
              <p>
                We design and build websites, apps and digital
                experiences—bringing together development,
                cybersecurity, creative media and AI.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a className="button" href="#contact">
                  Start a project
                </a>

                <a
                  className="button button-secondary"
                  href="#services"
                >
                  Explore our services
                </a>
              </div>

              <div className="hero-note">
                <span />
                Different perspectives. One committed team.
              </div>
            </div>

            <div className="hero-artwork">
              <VisualBanner kind="hero" />
            </div>
          </div>

          <div className="hero-bottom">
            <span>Design with intent.</span>
            <span>Build with precision.</span>
            <span>Make it matter.</span>
          </div>
        </div>
      </section>

      <section
        id="services"
        aria-labelledby="services-heading"
        className="shell services-editorial"
      >
        <div className="services-heading">
          <div>
            <p className="eyebrow">Our capabilities</p>

            <h2
              id="services-heading"
              className="section-title mt-5"
            >
              Different disciplines.
              <br />
              A shared direction.
            </h2>
          </div>

          <p>
            From the first impression to the systems behind it,
            we bring the right skills together for your project.
          </p>
        </div>

        <nav
          aria-label="Jump to a service"
          className="service-jump-links"
        >
          {services.map((service) => (
            <a
              key={service.id}
              href={`#service-${service.id}`}
            >
              {service.label}
            </a>
          ))}
        </nav>

        <p className="mt-5 text-xs leading-6 text-slate-500">
          Illustrative concepts showing our capabilities.
        </p>

        <div className="service-story">
          <div className="service-story-copy">
            {services.map((service, index) => (
              <article
                key={service.id}
                id={`service-${service.id}`}
                ref={(element) => {
                  sections.current[index] = element;
                }}
                className="service-chapter"
              >
                <motion.div
                  initial={false}
                  whileInView={
                    reducedMotion
                      ? undefined
                      : {
                          opacity: [0.55, 1],
                          y: [20, 0],
                        }
                  }
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="service-chapter-label">
                    <p style={{ color: service.color }}>
                      {service.label}
                    </p>
                  </div>

                  <h3>{service.title}</h3>

                  <p className="service-description">
                    {service.description}
                  </p>

                  <ul className="service-deliverables">
                    {service.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>

                  <a
                    className="service-enquiry"
                    href="#contact"
                  >
                    Discuss your project
                  </a>
                </motion.div>

                <div className="service-mobile-art">
                  <VisualBanner
                    kind={service.id}
                    color={service.color}
                  />
                </div>
              </article>
            ))}
          </div>

          <div className="service-sticky-column">
            <div className="service-sticky">
              <div className="service-visual-caption">
                <span>{selectedService.label}</span>
              </div>

              <div className="service-visual-frame">
                <AnimatePresence
                  initial={false}
                  mode="wait"
                >
                  <motion.div
                    key={selectedService.id}
                    initial={{
                      opacity: 0,
                      y: reducedMotion ? 0 : 14,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: reducedMotion ? 0 : -10,
                    }}
                    transition={{
                      duration: reducedMotion ? 0 : 0.2,
                    }}
                  >
                    <VisualBanner
                      kind={selectedService.id}
                      color={selectedService.color}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              <div
                className="service-progress"
                aria-hidden="true"
              >
                {services.map((service, index) => (
                  <span
                    key={service.id}
                    className={
                      index === active ? "is-active" : ""
                    }
                  />
                ))}
              </div>

              <p className="service-scroll-note">
                Scroll to explore our capabilities
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}