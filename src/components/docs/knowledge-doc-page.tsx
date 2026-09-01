import { ArrowLeft, ArrowRight, BookOpen, ExternalLink } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Markdown } from "@tanstack/markdown/react";
import { Button } from "@/components/ui/button";
import { DocConceptVisual } from "@/components/docs/doc-concept-visual";

export type KnowledgeDocPageProps = {
  section: string;
  title: string;
  description: string;
  source: string;
  next?: { to: string; label: string };
};

export function KnowledgeDocPage({ section, title, description, source, next }: KnowledgeDocPageProps) {
  return (
    <div className="pb-10">
      <section className="relative overflow-hidden rounded-3xl border border-[#2b2350] bg-[#0b0818] text-white shadow-2xl sm:rounded-[2rem]">
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(139,92,246,.10)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,.10)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-[#7c3aed]/15 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#a855f7]/10 blur-3xl" />

        <div className="relative grid gap-8 px-6 py-10 sm:px-10 sm:py-14 lg:grid-cols-[minmax(0,1fr)_minmax(420px,0.9fr)] lg:items-center lg:px-12 lg:py-16">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#a855f7]">Docs / {section}</p>
            <h1 className="mt-5 text-4xl font-bold leading-[1.03] tracking-tight sm:text-5xl lg:text-6xl">{title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#c9c4d8]">{description}</p>
            <div className="mt-7 flex flex-wrap gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-[#918aa8]">
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5">concept first</span>
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5">evidence driven</span>
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5">engineer readable</span>
            </div>
          </div>

          <DocConceptVisual section={section} />
        </div>
      </section>

      <article className="mt-8 rounded-3xl border border-[#2b2350] bg-[#15102d] px-6 py-8 shadow-xl sm:px-10 sm:py-10 lg:px-12">
        <div className="mb-10 rounded-2xl border border-[#3b2c66] bg-gradient-to-r from-[#1d153b] to-[#120d28] px-5 py-5 sm:px-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#a855f7]">How to read this guide</p>
          <p className="mt-2 max-w-4xl text-sm leading-6 text-[#c9c4d8]">
            Start with the visual assembly above. Each piece maps to a concept in this guide; the sections below provide the engineering detail, rules, examples and evidence needed to implement it correctly.
          </p>
        </div>

        <div className="max-w-4xl text-[15px] leading-7 [&_h1]:mt-0 [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:tracking-tight [&_h2]:mt-14 [&_h2]:scroll-mt-28 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h3]:mt-9 [&_h3]:text-lg [&_h3]:font-semibold [&_p]:mt-5 [&_p]:text-[#c9c4d8] [&_ul]:mt-5 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_ol]:mt-5 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6 [&_li]:text-[#c9c4d8] [&_strong]:font-semibold [&_strong]:text-[#faf8ff] [&_a]:text-[#a855f7] [&_a]:underline [&_a]:underline-offset-4 [&_code]:rounded [&_code]:bg-[#211a43] [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-[0.9em] [&_pre]:mt-6 [&_pre]:overflow-x-auto [&_pre]:rounded-2xl [&_pre]:border [&_pre]:border-[#2b2350] [&_pre]:bg-[#090713] [&_pre]:p-5 [&_pre]:text-[13px] [&_pre]:leading-6 [&_blockquote]:mt-6 [&_blockquote]:border-l-2 [&_blockquote]:border-[#a855f7]/40 [&_blockquote]:pl-5 [&_blockquote]:italic [&_blockquote]:text-[#a9a2bd] [&_table]:mt-6 [&_table]:w-full [&_table]:border-collapse [&_th]:border [&_th]:border-[#2b2350] [&_th]:bg-[#211a43] [&_th]:px-3 [&_th]:py-2 [&_th]:text-left [&_th]:text-xs [&_th]:font-semibold [&_th]:uppercase [&_th]:tracking-wide [&_td]:border [&_td]:border-[#2b2350] [&_td]:px-3 [&_td]:py-2 [&_td]:align-top [&_td]:text-[#c9c4d8] [&_hr]:my-10 [&_hr]:border-[#2b2350] [&_img]:rounded-2xl [&_img]:border [&_img]:border-[#2b2350]">
          <Markdown>{source}</Markdown>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-[#2b2350] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <Button asChild variant="ghost" className="px-0 text-[#a9a2bd] hover:text-[#faf8ff]"><Link to="/docs"><ArrowLeft className="mr-2 h-4 w-4" />Back to Docs</Link></Button>
          {next && <Button asChild><Link to={next.to}>{next.label}<ArrowRight className="ml-2 h-4 w-4" /></Link></Button>}
        </div>
        <div className="mt-8 text-xs text-[#918aa8]"><BookOpen className="mr-1 inline h-3.5 w-3.5" aria-hidden="true" />Primary sources are listed inside each page. <ExternalLink className="inline h-3.5 w-3.5" aria-hidden="true" /></div>
      </article>
    </div>
  );
}
