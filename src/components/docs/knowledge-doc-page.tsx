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
    <div className="min-h-screen bg-[#eef7fb] pb-10 text-[#202a33]">
      <section className="relative overflow-hidden rounded-3xl border border-[#d6e7ee] bg-[#eaf5fa] shadow-[0_20px_60px_-35px_rgba(24,55,70,.28)] sm:rounded-[2rem]">
        <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(65,125,150,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(65,125,150,.07)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-[#6fb8d4]/15 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#f59a24]/10 blur-3xl" />

        <div className="relative grid gap-8 px-6 py-10 sm:px-10 sm:py-14 lg:grid-cols-[minmax(0,1fr)_minmax(420px,0.9fr)] lg:items-center lg:px-12 lg:py-16">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#e87516]">Docs / {section}</p>
            <h1 className="mt-5 text-4xl font-bold leading-[1.03] tracking-tight text-[#202a33] sm:text-5xl lg:text-6xl">{title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#52616b]">{description}</p>
            <div className="mt-7 flex flex-wrap gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-[#647782]">
              <span className="rounded-full border border-[#cbdfe8] bg-white/70 px-3 py-1.5">concept first</span>
              <span className="rounded-full border border-[#cbdfe8] bg-white/70 px-3 py-1.5">evidence driven</span>
              <span className="rounded-full border border-[#cbdfe8] bg-white/70 px-3 py-1.5">engineer readable</span>
            </div>
          </div>

          <DocConceptVisual section={section} />
        </div>
      </section>

      <article className="mt-8 rounded-3xl border border-[#d7e5eb] bg-white px-6 py-8 shadow-[0_18px_55px_-38px_rgba(24,55,70,.32)] sm:px-10 sm:py-10 lg:px-12">
        <div className="mb-10 rounded-2xl border border-[#d8e9f0] bg-[#f3f9fc] px-5 py-5 sm:px-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#e87516]">How to read this guide</p>
          <p className="mt-2 max-w-4xl text-sm leading-6 text-[#52616b]">
            Start with the visual assembly above. Each piece maps to a concept in this guide; the sections below provide the engineering detail, rules, examples and evidence needed to implement it correctly.
          </p>
        </div>

        <div className="max-w-4xl text-[15px] leading-7 [&_h1]:mt-0 [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:tracking-tight [&_h1]:text-[#202a33] [&_h2]:mt-14 [&_h2]:scroll-mt-28 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-[#202a33] [&_h3]:mt-9 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-[#273640] [&_p]:mt-5 [&_p]:text-[#52616b] [&_ul]:mt-5 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_ol]:mt-5 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6 [&_li]:text-[#52616b] [&_strong]:font-semibold [&_strong]:text-[#202a33] [&_a]:text-[#d86610] [&_a]:underline [&_a]:underline-offset-4 [&_code]:rounded [&_code]:bg-[#eef6f9] [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-[0.9em] [&_code]:text-[#334b57] [&_pre]:mt-6 [&_pre]:overflow-x-auto [&_pre]:rounded-2xl [&_pre]:border [&_pre]:border-[#d7e5eb] [&_pre]:bg-[#f5f9fb] [&_pre]:p-5 [&_pre]:text-[13px] [&_pre]:leading-6 [&_pre]:text-[#263841] [&_blockquote]:mt-6 [&_blockquote]:border-l-2 [&_blockquote]:border-[#e87516]/50 [&_blockquote]:pl-5 [&_blockquote]:italic [&_blockquote]:text-[#657782] [&_table]:mt-6 [&_table]:w-full [&_table]:border-collapse [&_th]:border [&_th]:border-[#d7e5eb] [&_th]:bg-[#edf6fa] [&_th]:px-3 [&_th]:py-2 [&_th]:text-left [&_th]:text-xs [&_th]:font-semibold [&_th]:uppercase [&_th]:tracking-wide [&_th]:text-[#344955] [&_td]:border [&_td]:border-[#d7e5eb] [&_td]:px-3 [&_td]:py-2 [&_td]:align-top [&_td]:text-[#52616b] [&_hr]:my-10 [&_hr]:border-[#d7e5eb] [&_img]:rounded-2xl [&_img]:border [&_img]:border-[#d7e5eb]">
          <Markdown>{source}</Markdown>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-[#d7e5eb] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <Button asChild variant="ghost" className="px-0 text-[#647782] hover:text-[#202a33]"><Link to="/docs"><ArrowLeft className="mr-2 h-4 w-4" />Back to Docs</Link></Button>
          {next && <Button asChild><Link to={next.to}>{next.label}<ArrowRight className="ml-2 h-4 w-4" /></Link></Button>}
        </div>
        <div className="mt-8 text-xs text-[#71848e]"><BookOpen className="mr-1 inline h-3.5 w-3.5" aria-hidden="true" />Primary sources are listed inside each page. <ExternalLink className="inline h-3.5 w-3.5" aria-hidden="true" /></div>
      </article>
    </div>
  );
}
