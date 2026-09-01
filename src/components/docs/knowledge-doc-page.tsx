import { ArrowLeft, ArrowRight, BookOpen, ExternalLink } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Markdown } from "@tanstack/markdown/react";
import { Button } from "@/components/ui/button";

export type KnowledgeDocPageProps = {
  section: string;
  title: string;
  description: string;
  source: string;
  next?: { to: string; label: string };
};

export function KnowledgeDocPage({ section, title, description, source, next }: KnowledgeDocPageProps) {
  return (
    <>
      <section className="relative overflow-hidden bg-[#0a071d] text-white">
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(168,85,247,.10)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,.10)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="absolute -right-32 top-0 h-[28rem] w-[28rem] rounded-full bg-[#7c3aed]/15 blur-3xl" />
        <div className="relative mx-auto w-full max-w-5xl px-5 pb-14 pt-20 sm:px-8 sm:pb-16 sm:pt-28">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-white/70">
              <BookOpen className="h-3.5 w-3.5 text-[#a855f7]" />
              Docs · {section}
            </span>
            <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.03] tracking-tight sm:text-6xl">{title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#c9c4d8]">{description}</p>
          </div>
        </div>
      </section>

      <article className="mx-auto w-full max-w-5xl px-5 pb-24 pt-12 sm:px-8 sm:pt-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_220px] lg:items-start">
          <div className="max-w-3xl text-[15px] leading-7 [&_h1]:mt-0 [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:tracking-tight [&_h2]:mt-14 [&_h2]:scroll-mt-28 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h3]:mt-9 [&_h3]:text-lg [&_h3]:font-semibold [&_p]:mt-5 [&_p]:text-muted-foreground [&_ul]:mt-5 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_ol]:mt-5 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6 [&_li]:text-muted-foreground [&_strong]:font-semibold [&_strong]:text-foreground [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4 [&_code]:rounded [&_code]:bg-secondary [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-[0.9em] [&_pre]:mt-6 [&_pre]:overflow-x-auto [&_pre]:rounded-2xl [&_pre]:border [&_pre]:border-border [&_pre]:bg-[#090713] [&_pre]:p-5 [&_pre]:text-[13px] [&_pre]:leading-6 [&_blockquote]:mt-6 [&_blockquote]:border-l-2 [&_blockquote]:border-primary/40 [&_blockquote]:pl-5 [&_blockquote]:italic [&_blockquote]:text-muted-foreground [&_table]:mt-6 [&_table]:w-full [&_table]:border-collapse [&_th]:border [&_th]:border-border [&_th]:bg-secondary [&_th]:px-3 [&_th]:py-2 [&_th]:text-left [&_th]:text-xs [&_th]:font-semibold [&_th]:uppercase [&_th]:tracking-wide [&_td]:border [&_td]:border-border [&_td]:px-3 [&_td]:py-2 [&_td]:align-top [&_td]:text-muted-foreground">
            <Markdown>{source}</Markdown>
          </div>
          <aside className="hidden lg:block lg:sticky lg:top-28">
            <div className="rounded-2xl border border-border bg-card p-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">Shyena knowledge model</p>
              <p className="mt-3 text-sm font-semibold">Understand → Evaluate → Prove → Release</p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">Every page connects engineering practice to evidence, not just test execution.</p>
            </div>
            <div className="mt-4 rounded-2xl border border-border bg-card p-4">
              <p className="text-xs font-semibold text-foreground">Documentation principles</p>
              <ul className="mt-3 space-y-2 text-xs leading-relaxed text-muted-foreground">
                <li>Deterministic checks before subjective judgment.</li>
                <li>Trace every verdict to observable evidence.</li>
                <li>Separate evaluation from execution integrity.</li>
                <li>Make security a first-class assurance layer.</li>
              </ul>
            </div>
          </aside>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <Button asChild variant="ghost" className="px-0 text-muted-foreground hover:text-foreground">
            <Link to="/docs"><ArrowLeft className="mr-2 h-4 w-4" />Back to Docs</Link>
          </Button>
          {next && (
            <Button asChild className="rounded-full">
              <Link to={next.to}>{next.label}<ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          )}
        </div>

        <div className="mt-8 text-xs text-muted-foreground">
          <span>Primary sources are listed inside each page.</span>{" "}
          <ExternalLink className="inline h-3.5 w-3.5" aria-hidden="true" />
        </div>
      </article>
    </>
  );
}
