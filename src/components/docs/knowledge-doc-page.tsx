import { ArrowLeft, ArrowRight, BookOpen, ExternalLink } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Markdown } from "@tanstack/markdown/react";
import { Button } from "@/components/ui/button";

export type KnowledgeDocPageProps = { section: string; title: string; description: string; source: string; next?: { to: string; label: string } };

export function KnowledgeDocPage({ section, title, description, source, next }: KnowledgeDocPageProps) {
  return <>
    <section className="relative overflow-hidden rounded-3xl border border-[#2b2350] bg-[#15102d] text-white shadow-xl sm:rounded-[2rem]">
      <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(139,92,246,.10)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,.10)_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="absolute -right-24 top-0 h-96 w-96 rounded-full bg-[#7c3aed]/20 blur-3xl" />
      <div className="relative px-6 py-14 sm:px-10 sm:py-20 lg:px-12">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#a855f7]">Docs / {section}</p>
        <h1 className="mt-5 max-w-5xl text-4xl font-bold leading-[1.03] tracking-tight sm:text-6xl">{title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#c9c4d8]">{description}</p>
      </div>
    </section>

    <article className="mt-8 rounded-3xl border border-[#2b2350] bg-[#15102d] px-6 py-8 shadow-xl sm:px-10 sm:py-10 lg:px-12">
      <div className="max-w-4xl text-[15px] leading-7 [&_h1]:mt-0 [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:tracking-tight [&_h2]:mt-14 [&_h2]:scroll-mt-28 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h3]:mt-9 [&_h3]:text-lg [&_h3]:font-semibold [&_p]:mt-5 [&_p]:text-[#c9c4d8] [&_ul]:mt-5 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_ol]:mt-5 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6 [&_li]:text-[#c9c4d8] [&_strong]:font-semibold [&_strong]:text-[#faf8ff] [&_a]:text-[#a855f7] [&_a]:underline [&_a]:underline-offset-4 [&_code]:rounded [&_code]:bg-[#211a43] [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-[0.9em] [&_pre]:mt-6 [&_pre]:overflow-x-auto [&_pre]:rounded-2xl [&_pre]:border [&_pre]:border-[#2b2350] [&_pre]:bg-[#090713] [&_pre]:p-5 [&_pre]:text-[13px] [&_pre]:leading-6 [&_blockquote]:mt-6 [&_blockquote]:border-l-2 [&_blockquote]:border-[#a855f7]/40 [&_blockquote]:pl-5 [&_blockquote]:italic [&_blockquote]:text-[#a9a2bd] [&_table]:mt-6 [&_table]:w-full [&_table]:border-collapse [&_th]:border [&_th]:border-[#2b2350] [&_th]:bg-[#211a43] [&_th]:px-3 [&_th]:py-2 [&_th]:text-left [&_th]:text-xs [&_th]:font-semibold [&_th]:uppercase [&_th]:tracking-wide [&_td]:border [&_td]:border-[#2b2350] [&_td]:px-3 [&_td]:py-2 [&_td]:align-top [&_td]:text-[#c9c4d8]">
        <Markdown>{source}</Markdown>
      </div>
      <div className="mt-14 flex flex-col gap-3 border-t border-[#2b2350] pt-8 sm:flex-row sm:items-center sm:justify-between">
        <Button asChild variant="ghost" className="px-0 text-[#a9a2bd] hover:text-[#faf8ff]"><Link to="/docs"><ArrowLeft className="mr-2 h-4 w-4" />Back to Docs</Link></Button>
        {next && <Button asChild><Link to={next.to}>{next.label}<ArrowRight className="ml-2 h-4 w-4" /></Link></Button>}
      </div>
      <div className="mt-8 text-xs text-[#918aa8]"><BookOpen className="mr-1 inline h-3.5 w-3.5" aria-hidden="true" />Primary sources are listed inside each page. <ExternalLink className="inline h-3.5 w-3.5" aria-hidden="true" /></div>
    </article>
  </>;
}
