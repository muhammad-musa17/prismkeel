import type { CSSProperties } from "react";
import type { ServiceId } from "@/data/services";

type Props = {
  kind: ServiceId | "hero";
  color?: string;
};

const labels = {
  hero: [
    "PRISMKEEL / DIGITAL STUDIO",
    "From possibility to product.",
  ],
  mobile: [
    "MOBILE / EXPERIENCE DESIGN",
    "Everything, within reach.",
  ],
  web: [
    "WEB / DIGITAL EXPERIENCES",
    "Built around your users.",
  ],
  security: [
    "SECURITY / SYSTEM REVIEW",
    "Clarity before complexity.",
  ],
  marketing: [
    "SOCIAL / CREATIVE DIRECTION",
    "A story worth following.",
  ],
  modelling: [
    "3D / FORM & MATERIAL",
    "Give your ideas dimension.",
  ],
  ai: [
    "AI / CONNECTED WORKFLOWS",
    "Make room for better work.",
  ],
};

export default function VisualBanner({
  kind,
  color = "#67e8f9",
}: Props) {
  const [label, title] = labels[kind];

  return (
    <div
      className={`visual-banner visual-${kind}`}
      style={{ "--visual-accent": color } as CSSProperties}
      aria-hidden="true"
    >
      <div className="visual-grid" />

      <div className="visual-topline">
        <span>{label}</span>
      </div>

      <div className="visual-art">
        {kind === "mobile" ? (
          <div className="phone-art">
            <div className="phone-camera" />

            <div className="phone-content">
              <p className="art-kicker">
                YOUR EVERYDAY, SIMPLIFIED
              </p>

              <h4>
                Good things.
                <br />
                One place.
              </h4>

              <div className="phone-feature">
                <span>Discover something new</span>
              </div>

              <div className="phone-tiles">
                <div>
                  Explore
                  <br />
                  <strong>◇</strong>
                </div>

                <div>
                  Saved
                  <br />
                  <strong>＋</strong>
                </div>
              </div>

              <div className="phone-nav">
                <span>⌂</span>
                <span>◇</span>
                <span>☰</span>
              </div>
            </div>
          </div>
        ) : kind === "security" ? (
          <div className="system-art">
            <div className="system-heading">
              <span className="status-dot" />
              <span>Security review</span>
              <span className="ml-auto text-slate-500">
                OVERVIEW
              </span>
            </div>

            <div className="security-symbol">◇</div>

            {[
              "Identity & access",
              "Application surface",
              "Infrastructure",
            ].map((item) => (
              <div className="system-row" key={item}>
                <span className="status-dot" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        ) : kind === "ai" ? (
          <div className="workflow-art">
            <div className="workflow-node">
              <strong>Your inputs</strong>
            </div>

            <div className="workflow-line" />

            <div className="workflow-core">
              <span>✳</span>

              <div>
                Connected intelligence
                <small>Context · Tools · Human review</small>
              </div>
            </div>

            <div className="workflow-line" />

            <div className="workflow-node">
              <strong>Useful outcomes</strong>
            </div>
          </div>
        ) : kind === "modelling" ? (
          <div className="sculpture-art">
            <div className="sculpture-ring ring-one" />
            <div className="sculpture-ring ring-two" />
            <div className="sculpture-ring ring-three" />

            <span>FORM & MATERIAL</span>
          </div>
        ) : kind === "marketing" ? (
          <div className="campaign-art">
            <div className="campaign-card campaign-back">
              <span>THE NEXT CHAPTER</span>

              <strong>
                Make
                <br />
                your
                <br />
                mark.
              </strong>
            </div>

            <div className="campaign-card campaign-front">
              <span>IDEAS WITH INTENT</span>

              <div className="campaign-orb" />

              <strong>
                Seen.
                <br />
                Remembered.
              </strong>
            </div>
          </div>
        ) : (
          <div className="browser-art">
            <div className="browser-toolbar">
              <span />
              <span />
              <span />
              <p>an idea, brought to life</p>
            </div>

            <div className="browser-body">
              <div className="browser-sidebar">
                <b>pk.</b>
                <i />
                <i />
                <i />
              </div>

              <div className="browser-main">
                <p className="art-kicker">
                  DESIGNED TO MOVE YOU FORWARD
                </p>

                <h4>
                  Make space
                  <br />
                  for what&apos;s next.
                </h4>

                <div className="browser-feature">
                  <div className="feature-orb" />
                  <span>Explore the possibilities</span>
                </div>

                <div className="browser-cards">
                  <div>
                    <b>Imagine</b>
                  </div>

                  <div>
                    <b>Create</b>
                  </div>

                  <div>
                    <b>Connect</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="visual-bottomline">
        <span>{title}</span>
      </div>
    </div>
  );
}