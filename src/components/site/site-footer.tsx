import { Link } from "@tanstack/react-router";
import { ArrowRight, Linkedin, Github } from "lucide-react";
import { Logo } from "./logo";

const COLUMNS = [
  {
    title: "Platform",
    links: [
      { label: "Nexus", to: "/nexus" },
      { label: "Vera", to: "/vera" },
      { label: "Chakra", to: "/chakra" },
      { label: "Govern", to: "/govern" },
      { label: "Agentic SDLC overview", to: "/platform" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Sample report", to: "/sample-report" },
      { label: "Blog", to: "/blog" },
      { label: "Documentation", to: "/docs" },
      { label: "Pricing", to: "/pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Design partners", to: "/design-partners" },
      { label: "Security & trust", to: "/security" },
      { label: "Contact", to: "/contact" },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer data-shyena-chrome="footer" className="border-t">
      <div className="mx-auto w-full max-w-[1132px] px-6 py-14 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_2fr]">
          <div>
            <Link to="/" aria-label="Shyena home" className="inline-flex">
              <Logo size="footer" theme="dark" />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-6 text-[var(--warp-muted)]">
              The governed Agentic SDLC—from planning and coding agents through testing, security,
              release evidence and operational learning.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <a
                href="https://www.linkedin.com/company/shyena-ai/"
                aria-label="Shyena on LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--warp-border)] text-[var(--warp-muted)] transition hover:border-[var(--warp-border-strong)] hover:text-[var(--warp-ink)]"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/sbparimi/Shyena"
                aria-label="Shyena on GitHub"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--warp-border)] text-[var(--warp-muted)] transition hover:border-[var(--warp-border-strong)] hover:text-[var(--warp-ink)]"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {COLUMNS.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-medium uppercase tracking-[0.08em] shyena-footer-heading">
                  {column.title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {column.links.map((link) => (
                    <li key={`${column.title}-${link.label}`}>
                      <Link
                        to={link.to}
                        className="text-sm text-[var(--warp-muted)] transition-colors hover:text-[var(--warp-accent-text)]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 border-t border-[var(--warp-border)] pt-5 text-xs leading-5 text-[var(--warp-muted)]">
          <div>Shyena · Netherlands</div>
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[var(--warp-muted)]">
          <Link to="/privacy" className="hover:text-[var(--warp-accent-text)]">
            Privacy Policy
          </Link>
          <Link to="/cookies" className="hover:text-[var(--warp-accent-text)]">
            Cookie notice
          </Link>
          <Link to="/terms" className="hover:text-[var(--warp-accent-text)]">
            Terms
          </Link>
        </div>
        <div className="mt-6 flex flex-col gap-4 border-t border-[var(--warp-border)] pt-6 text-xs text-[var(--warp-muted)] sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Shyena. All rights reserved.</div>
          <div className="flex items-center gap-2">
            Built for a more trustworthy AI future <ArrowRight className="h-3.5 w-3.5" />
          </div>
        </div>
      </div>
    </footer>
  );
}
