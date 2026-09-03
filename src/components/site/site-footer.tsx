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
      { label: "Assurance model", to: "/docs/evaluation-model" },
      { label: "Release evidence", to: "/docs/reporting" },
      { label: "Documentation", to: "/docs" },
      { label: "Insights", to: "/blog" },
    ],
  },
  {
    title: "Enterprise",
    links: [
      { label: "Security & trust", to: "/security" },
      { label: "Professional services", to: "/services" },
      { label: "Contact", to: "/contact" },
      { label: "Request a demo", to: "/contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Shyena", to: "/about" },
      { label: "Contact", to: "/contact" },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-[#edf6ff] text-[#0e172b]">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_2.9fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#475569]">
              The AI agent assurance platform for teams that need evidence before they release.
              Understand the system. Evaluate the behavior. Defend the release.
            </p>
            <div className="mt-7 inline-flex items-center gap-2 border border-slate-200 bg-white/70 px-3 py-1.5 text-xs text-[#64748b]">
              <span className="h-1.5 w-1.5 bg-[#14b8a6]" />
              Evidence-backed AI assurance
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {COLUMNS.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0e172b]">{column.title}</h3>
                <ul className="mt-5 space-y-3.5">
                  {column.links.map((link) => (
                    <li key={`${column.title}-${link.label}`}>
                      <Link to={link.to} className="text-sm text-[#64748b] transition-colors hover:text-[#0e172b]">{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 border-t border-slate-200 pt-6 text-xs text-[#64748b]">
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <span>© {new Date().getFullYear()} Shyena Labs B.V.</span>
            <span>AI agent assurance</span>
            <span>Conversational AI</span>
            <span>Security assurance</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
