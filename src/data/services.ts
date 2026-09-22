export const services = [
  {
    id: "mobile",
    label: "Mobile applications",
    title: "Your idea.\nIn their hands.",
    description:
      "Purposeful mobile experiences that make everyday tasks feel simple. From the first screen to the final release.",
    tags: ["iOS & Android", "UI / UX", "App development"],
    color: "#67e8f9",
  },
  {
    id: "web",
    label: "Web development",
    title: "A better place\nto do business.",
    description:
      "Responsive websites and web applications designed around your customers, your workflows and your next stage of growth.",
    tags: ["Websites", "Web applications", "Responsive design"],
    color: "#a78bfa",
  },
  {
    id: "security",
    label: "Cybersecurity",
    title: "Build confidence.\nReduce exposure.",
    description:
      "Understand weaknesses and strengthen your digital foundations through agreed, authorised security assessments.",
    tags: ["Security reviews", "Risk assessment", "Hardening"],
    color: "#6ee7b7",
  },
  {
    id: "marketing",
    label: "Social media marketing",
    title: "Make your brand\npart of the conversation.",
    description:
      "A considered mix of content, creative direction and campaign planning to help your business connect with its audience.",
    tags: ["Content strategy", "Creative campaigns", "Social media"],
    color: "#f9a8d4",
  },
  {
    id: "modelling",
    label: "3D modelling",
    title: "Another dimension\nto your ideas.",
    description:
      "Bring concepts into view with custom 3D assets, product visualisations and carefully crafted digital forms.",
    tags: ["3D assets", "Product visuals", "Creative modelling"],
    color: "#fcd34d",
  },
  {
    id: "ai",
    label: "AI integration",
    title: "Less repetitive.\nMore possibility.",
    description:
      "Connect useful AI capabilities to your existing processes, with clear goals and people in control.",
    tags: ["Workflow automation", "AI assistants", "Integrations"],
    color: "#93c5fd",
  },
] as const;

export type ServiceId = (typeof services)[number]["id"];