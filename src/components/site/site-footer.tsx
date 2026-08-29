import { ArrowUpRight, Github } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Logo } from "./logo";

const COLUMNS = [
  {
    title: "Platform",
    links: [
      { label: "Nexus · Understand", to: "/nexus" },
      { label: "Vera · Evaluate", to: "/vera" },
      { label: "Chakra · Defend", to: "/chakra" },
      { label: "Pricing", to: "/pricing" },
    ],
  },
  {
    title: "Assurance",
    links: [
      { label: "Evaluation model", to: "/docs/evaluation-model" },
      { label: "Documentation", to: "/docs" },
      { label: "Professional services", to: "/services" },
      { label: "Insights", to: "/blog" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Shyena", to: "/about" },
      { label: "Contact", to: "/contact" },
      { label: "Request a demo", to: "/contact" },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-navy-border bg-navy text-navy-foreground">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_2fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-navy-muted">
              The AI agent assurance platform for teams that need evidence before they release.
              Understand the system. Evaluate the behavior. Defend the release.
            </p>
            <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-navy-border bg-white/[0.04] px-3 py-1.5 text-xs text-navy-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-success" />
              Evidence-backed AI assurance
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {COLUMNS.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-navy-foreground">{column.title}</h3>
                <ul className="mt-5 space-y-3.5">
                  {column.links.map((link) => (
                    <li key={`${column.title}-${link.label}`}>
                      <Link to={link.to} className="text-sm text-navy-muted transition-colors hover:text-navy-foreground">{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-5 border-t border-navy-border pt-6 text-xs text-navy-muted sm:grid-cols-[1fr_auto] sm:items-center">
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <span>© {new Date().getFullYear()} Shyena Labs B.V.</span>
            <span>AI agent assurance</span>
            <span>Conversational AI</span>
            <span>Security assurance</span>
          </div>
          <a href="https://github.com/sbparimi/bot-verdict" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 font-medium text-navy-muted hover:text-navy-foreground">
            Engineering on GitHub <Github className="h-3.5 w-3.5" /><ArrowUpRight className="h-3 w-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
