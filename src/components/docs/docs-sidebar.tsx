import { useState } from "react";
import { ChevronDown, ChevronRight, BookOpen } from "lucide-react";
import { Link, useLocation } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

const GETTING_STARTED_DOCS = [
  { to: "/docs/getting-started/01-ai-agent-assurance-foundations", label: "1. AI Agent Assurance Foundations", level: "Basic" },
  { to: "/docs/getting-started/02-anatomy-of-an-ai-agent", label: "2. Anatomy of an AI Agent", level: "Basic" },
  { to: "/docs/getting-started/03-deterministic-and-semantic-evaluation", label: "3. Deterministic & Semantic Evaluation", level: "Basic" },
  { to: "/docs/getting-started/04-goal-based-test-design", label: "4. Goal-Based Test Design", level: "Practitioner" },
  { to: "/docs/getting-started/05-conversation-trajectories-and-integrity", label: "5. Conversation Trajectories & Integrity", level: "Practitioner" },
  { to: "/docs/getting-started/06-tool-use-state-and-side-effects", label: "6. Tool Use, State & Side Effects", level: "Practitioner" },
  { to: "/docs/getting-started/07-rag-groundedness-and-evidence", label: "7. RAG Groundedness & Evidence", level: "Practitioner" },
  { to: "/docs/getting-started/08-llm-as-judge-and-calibration", label: "8. LLM-as-Judge & Calibration", level: "Expert" },
  { to: "/docs/getting-started/09-reliability-robustness-and-fault-injection", label: "9. Reliability, Robustness & Fault Injection", level: "Expert" },
  { to: "/docs/getting-started/10-release-gates-and-assurance-evidence", label: "10. Release Gates & Assurance Evidence", level: "Expert" },
] as const;

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
] as const;

export function DocsSidebar() {
  const location = useLocation();
  const [open, setOpen] = useState(true);
  const gettingStartedOpen = location.pathname.startsWith("/docs/getting-started");

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
                const isGettingStarted = item.to === "/docs/getting-started";
                return (
                  <div key={item.to}>
                    {isGettingStarted ? (
                      <div className="flex items-center">
                        <Link
                          to={item.to}
                          aria-current={active ? "page" : undefined}
                          className={cn(
                            "relative flex min-w-0 flex-1 items-center rounded-lg px-3 py-2.5 text-sm transition-colors",
                            active || gettingStartedOpen
                              ? "font-semibold text-primary"
                              : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                          )}
                        >
                          {(active || gettingStartedOpen) && <span className="absolute bottom-2 left-0 top-2 w-0.5 rounded-full bg-primary" aria-hidden="true" />}
                          <span className="pl-1">{item.label}</span>
                        </Link>
                        <button
                          type="button"
                          onClick={() => setOpen((value) => value)}
                          aria-label="Getting Started documents"
                          className="rounded-lg p-2 text-muted-foreground hover:bg-secondary hover:text-foreground"
                        >
                          {gettingStartedOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                        </button>
                      </div>
                    ) : (
                      <Link
                        to={item.to}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "relative flex items-center rounded-lg px-3 py-2.5 text-sm transition-colors",
                          active
                            ? "bg-primary/10 font-semibold text-primary"
                            : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                        )}
                      >
                        {active && <span className="absolute bottom-2 left-0 top-2 w-0.5 rounded-full bg-primary" aria-hidden="true" />}
                        <span className="pl-1">{item.label}</span>
                      </Link>
                    )}

                    {isGettingStarted && gettingStartedOpen && (
                      <div className="ml-3 mt-1 border-l border-border pl-2">
                        {GETTING_STARTED_DOCS.map((doc) => {
                          const docActive = location.pathname === doc.to;
                          return (
                            <Link
                              key={doc.to}
                              to={doc.to}
                              aria-current={docActive ? "page" : undefined}
                              className={cn(
                                "flex items-start gap-2 rounded-lg px-2.5 py-2 text-[12px] leading-4 transition-colors",
                                docActive
                                  ? "bg-primary/10 font-semibold text-primary"
                                  : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                              )}
                            >
                              <span className="min-w-0 flex-1">{doc.label}</span>
                              <span className="shrink-0 pt-0.5 text-[10px] uppercase tracking-wide text-muted-foreground/70">{doc.level}</span>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>
          )}
        </div>
      </div>
    </aside>
  );
}
