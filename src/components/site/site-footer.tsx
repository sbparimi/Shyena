import { Link } from "@tanstack/react-router";
import { Linkedin, Github } from "lucide-react";
import { Logo } from "./logo";

const COLUMNS: { title: string; links: { label: string; to: string }[] }[] = [
  {
    title: "Product",
    links: [
      { label: "Overview", to: "/product" },
      { label: "Pricing", to: "/pricing" },
      { label: "Evaluation metrics", to: "/docs" },
      { label: "Integrity gate", to: "/product" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Careers", to: "/about" },
      { label: "Contact", to: "/contact" },
      { label: "Request a demo", to: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Docs", to: "/docs" },
      { label: "Blog", to: "/blog" },
      { label: "Changelog", to: "/blog" },
      { label: "Status", to: "/docs" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", to: "/about" },
      { label: "Terms", to: "/about" },
      { label: "Security", to: "/about" },
      { label: "DPA", to: "/about" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              The AI evaluation platform — live for conversational and voice AI, RAG is next.
              Evidence for every turn, a verdict you can release on.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-foreground">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={`${col.title}-${link.label}`}>
                    <Link
                      to={link.to}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col-reverse items-start justify-between gap-6 border-t border-border pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Shyena Labs B.V. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            {[
              { label: "LinkedIn", icon: Linkedin },
              { label: "X", icon: null },
              { label: "GitHub", icon: Github },
            ].map(({ label, icon: Icon }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                {Icon ? (
                  <Icon className="h-4 w-4" />
                ) : (
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
                    <path d="M18.9 2H22l-7.1 8.1L23.2 22h-6.6l-5.2-6.8L5.5 22H2.4l7.6-8.7L1.2 2h6.8l4.7 6.2L18.9 2Zm-1.1 18h1.8L7.3 3.9H5.4L17.8 20Z" />
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}