import { services } from "@/data/services";

export default function Footer() {
  return (
    <footer className="editorial-footer">
      <div className="shell">
        <div className="footer-main">
          <div>
            <a href="#" className="text-3xl font-semibold tracking-tight">
              PrismKeel<span className="text-cyan-200">.</span>
            </a>

            <p className="mt-5 max-w-xs text-sm leading-7 text-slate-400">
              Creative thinking. Thoughtful engineering.
              Digital foundations for what comes next.
            </p>

            <p className="mt-6 text-sm text-cyan-100">
              Bold ideas. Solid foundations.
            </p>
          </div>

          <nav aria-label="Footer services">
            <p className="eyebrow mb-5">Capabilities</p>

            <ul className="space-y-3 text-sm text-slate-400">
              {services.map((service) => (
                <li key={service.id}>
                  <a
                    href={`#service-${service.id}`}
                    className="nav-link"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer navigation">
            <p className="eyebrow mb-5">Explore</p>

            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#about" className="nav-link">About PrismKeel</a></li>
              <li><a href="#approach" className="nav-link">Our approach</a></li>
              <li><a href="#contact" className="nav-link">Start a project</a></li>
            </ul>
          </nav>
        </div>

        <div className="footer-wordmark" aria-hidden="true">
          PRISMKEEL
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} PrismKeel. All rights reserved.</p>
          <p>Design with intent. Build with care.</p>
        </div>
      </div>
    </footer>
  );
}