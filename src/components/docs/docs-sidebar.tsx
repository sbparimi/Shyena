import { useState } from "react";
import { ChevronDown, ChevronRight, BookOpen } from "lucide-react";
import { Link, useLocation } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

const DOCS_SECTIONS = [
  { to: "/docs", label: "Overview" },
  { to: "/docs/getting-started", label: "Getting Started" },
  { to: "/docs/writing-test-specs", label: "Writing Test Specs" },
  { to: "/docs/evaluation-model", label: "The Evaluation Model" },
  { to: "/docs/environments", label: "Environments & Configuration" },
  { to: "/docs/integrations", label: "Integrations" },
  { to: "/docs/api-reference", label: "API Reference" },
  { to: "/docs/reporting", label: "Reporting & Release Evidence" },
  { to: "/docs/troubleshooting", label: "Troubleshooting" },
  { to: "/docs/sage-content-engineering", label: "SAGE Content Engineering" },
] as const;

export function DocsSidebar() {
  const location = useLocation();
  const [open, setOpen] = useState(true);

  return (
    <aside className="hidden lg:block lg:w-[260px] lg:shrink-0">
      <div className="sticky top-[92px]">
        <div className="rounded-2xl border border-border bg-card/70 p-3 shadow-card backdrop-blur-xl">
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            className="flex w-full items-center gap-2 rounded-xl px-3 py-2.5 text-left text-sm font-semibold text-foreground hover:bg-secondary"
          >
            <BookOpen className="h-4 w-4 text-primary" />
            <span className="flex-1">Documentation</span>
            {open ? <ChevronDown className="h-4 w-4 text-muted-foreground" /> : <ChevronRight className="h-4 w-4 text-muted-foreground" />}
          </button>

          {open && (
            <nav aria-label="Documentation sections" className="mt-2 border-t border-border pt-2">
              {DOCS_SECTIONS.map((item) => {
                const active = location.pathname === item.to;
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={cn(
                      "relative flex items-center rounded-lg px-3 py-2.5 text-sm transition-colors",
                      active
                        ? "bg-primary/10 font-semibold text-primary"
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                    )}
                  >
                    {active && <span className="absolute left-0 top-2 bottom-2 w-0.5 rounded-full bg-primary" aria-hidden="true" />}
                    <span className="pl-1">{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          )}
        </div>
      </div>
    </aside>
  );
}
