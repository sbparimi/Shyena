import { useState } from "react";
import { ArrowLeft, ArrowRight, BookOpen, ChevronDown, ChevronRight, ExternalLink } from "lucide-react";
import { Link, useLocation } from "@tanstack/react-router";
import { Markdown } from "@tanstack/markdown/react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type KnowledgeDocPageProps = {
  section: string;
  title: string;
  description: string;
  source: string;
  next?: { to: string; label: string };
};

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

function DocsNavigation() {
  const location = useLocation();
  const [open, setOpen] = useState(true);

  return (
    <aside className="hidden lg:block lg:w-[258px] lg:shrink-0">
      <div className="sticky top-[92px] rounded-2xl border border-border bg-card/80 p-3 shadow-card backdrop-blur-xl">
        <button type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} className="flex w-full items-center gap-2 rounded-xl px-3 py-2.5 text-left text-sm font-semibold text-foreground transition-colors hover:bg-secondary">
          <BookOpen className="h-4 w-4 text-primary" />
          <span className="flex-1">Documentation</span>
          {open ? <ChevronDown className="h-4 w-4 text-muted-foreground" /> : <ChevronRight className="h-4 w-4 text-muted-foreground" />}
        </button>
        {open && (
          <nav aria-label="Documentation sections" className="mt-2 border-t border-border pt-2">
            {DOCS_SECTIONS.map((item) => {
              const active = location.pathname === item.to;
              return (
                <Link key={item.to} to={item.to} aria-current={active ? "page" : undefined} className={cn("relative flex items-center rounded-lg px-3 py-2.5 text-sm transition-colors", active ? "bg-primary/10 font-semibold text-primary" : "text-muted-foreground hover:bg-secondary hover:text-foreground")}>
                  {active && <span className="absolute bottom-2 left-0 top-2 w-0.5 rounded-full bg-primary" aria-hidden="true" />}
                  <span className="pl-1">{item.label}</span>
                </Link>
              );
            })}
          </nav>
        )}
      </div>
    </aside>
  );
}

function MobileDocsNavigation() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const active = DOCS_SECTIONS.find((item) => item.to === location.pathname);

  return (
    <div className="lg:hidden">
      <div className="rounded-2xl border border-border bg-card/80 p-3 shadow-card backdrop-blur-xl">
        <button type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} className="flex w-full items-center gap-2 rounded-xl px-3 py-2.5 text-left text-sm font-semibold text-foreground">
          <BookOpen className="h-4 w-4 text-primary" />
          <span className="flex-1">{active?.label ?? "Documentation"}</span>
          {open ? <ChevronDown className="h-4 w-4 text-muted-foreground" /> : <ChevronRight className="h-4 w-4 text-muted-foreground" />}
        </button>
        {open && (
          <nav aria-label="Documentation sections" className="mt-2 border-t border-border pt-2">
            {DOCS_SECTIONS.map((item) => {
              const isActive = location.pathname === item.to;
              return <Link key={item.to} to={item.to} onClick={() => setOpen(false)} className={cn("block rounded-lg px-3 py-2.5 text-sm", isActive ? "bg-primary/10 font-semibold text-primary" : "text-muted-foreground hover:bg-secondary hover:text-foreground")}>{item.label}</Link>;
            })}
          </nav>
        )}
      </div>
    </div>
  );
}

export function KnowledgeDocPage({ section, title, description, source, next }: KnowledgeDocPageProps) {
  return (
    <>
      <section className="relative overflow-hidden bg-[#0a071d] text-white">
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(168,85,247,.10)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,.10)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="absolute -right-32 top-0 h-[28rem] w-[28rem] rounded-full bg-[#7c3aed]/15 blur-3xl" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-14 pt-20 sm:px-8 sm:pb-16 sm:pt-28">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-white/70"><BookOpen className="h-3.5 w-3.5 text-[#a855f7]" />Docs · {section}</span>
            <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.03] tracking-tight sm:text-6xl">{title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#c9c4d8]">{description}</p>
          </div>
        </div>
      </section>
      <section className="mx-auto w-full max-w-7xl px-5 pb-24 pt-8 sm:px-8 sm:pt-10">
        <MobileDocsNavigation />
        <div className="mt-6 grid gap-10 lg:grid-cols-[258px_minmax(0,1fr)] lg:items-start lg:gap-12">
          <DocsNavigation />
          <article className="min-w-0">
            <div className="max-w-3xl text-[15px] leading-7 [&_h1]:mt-0 [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:tracking-tight [&_h2]:mt-14 [&_h2]:scroll-mt-28 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h3]:mt-9 [&_h3]:text-lg [&_h3]:font-semibold [&_p]:mt-5 [&_p]:text-muted-foreground [&_ul]:mt-5 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_ol]:mt-5 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6 [&_li]:text-muted-foreground [&_strong]:font-semibold [&_strong]:text-foreground [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4 [&_code]:rounded [&_code]:bg-secondary [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-[0.9em] [&_pre]:mt-6 [&_pre]:overflow-x-auto [&_pre]:rounded-2xl [&_pre]:border [&_pre]:border-border [&_pre]:bg-[#090713] [&_pre]:p-5 [&_pre]:text-[13px] [&_pre]:leading-6 [&_blockquote]:mt-6 [&_blockquote]:border-l-2 [&_blockquote]:border-primary/40 [&_blockquote]:pl-5 [&_blockquote]:italic [&_blockquote]:text-muted-foreground [&_table]:mt-6 [&_table]:w-full [&_table]:border-collapse [&_th]:border [&_th]:border-border [&_th]:bg-secondary [&_th]:px-3 [&_th]:py-2 [&_th]:text-left [&_th]:text-xs [&_th]:font-semibold [&_th]:uppercase [&_th]:tracking-wide [&_td]:border [&_td]:border-border [&_td]:px-3 [&_td]:py-2 [&_td]:align-top [&_td]:text-muted-foreground">
              <Markdown>{source}</Markdown>
            </div>
            <div className="mt-14 flex flex-col gap-3 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
              <Button asChild variant="ghost" className="px-0 text-muted-foreground hover:text-foreground"><Link to="/docs"><ArrowLeft className="mr-2 h-4 w-4" />Back to Docs</Link></Button>
              {next && <Button asChild className="rounded-full"><Link to={next.to}>{next.label}<ArrowRight className="ml-2 h-4 w-4" /></Link></Button>}
            </div>
            <div className="mt-8 text-xs text-muted-foreground"><span>Primary sources are listed inside each page.</span>{" "}<ExternalLink className="inline h-3.5 w-3.5" aria-hidden="true" /></div>
          </article>
        </div>
      </section>
    </>
  );
}
