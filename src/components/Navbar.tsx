"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Our approach", href: "#approach" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function update() {
      setScrolled(window.scrollY > 24);
    }

    update();
    window.addEventListener("scroll", update, { passive: true });

    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <nav
        aria-label="Main navigation"
        className="shell flex h-20 items-center justify-between"
      >
        <a
          href="#"
          className="flex items-center gap-3"
          aria-label="PrismKeel home"
          onClick={() => setOpen(false)}
        >
          <span className="brand-mark" aria-hidden="true">◇</span>
          <span className="text-xl font-semibold tracking-tight">
            PrismKeel<span className="text-cyan-200">.</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          {links.map((link) => (
            <a key={link.href} className="nav-link" href={link.href}>
              {link.label}
            </a>
          ))}

          <a className="button button-small" href="#contact">
            Start a project
          </a>
        </div>

        <button
          type="button"
          className="rounded-full border border-white/20 px-4 py-2 text-sm md:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {open && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="shell flex flex-col gap-1 pb-6 md:hidden"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/10 py-4 text-lg"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="button mt-5 justify-center"
          >
            Start a project
          </a>
        </nav>
      )}
    </header>
  );
}