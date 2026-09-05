import { Clock, ArrowRight } from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { generatedContent } from "@/content/generated-content";

export const Route = createFileRoute("/blog/")({
  head: () => ({ meta: [
    { title: "Insights | Shyena AI Agent Assurance" },
    { name: "description", content: "Deep engineering notes on AI agent assurance, evaluation, security, orchestration and release evidence." },
    { property: "og:title", content: "Insights | Shyena AI Agent Assurance" },
    { property: "og:description", content: "Research and field notes on AI agent assurance and evidence-backed release engineering." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: "https://shyena.eu/blog" }] }),
  component: BlogIndexPage,
});

function BlogIndexPage() {
  return <div className="min-h-screen bg-[#0a071d] text-[#faf8ff]">
    <section className="relative overflow-hidden border-b border-[#2b2350] bg-[#0a071d]"><div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(139,92,246,.10)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,.10)_1px,transparent_1px)] [background-size:64px_64px]"/><div className="absolute -right-24 top-0 h-96 w-96 rounded-full bg-[#7c3aed]/20 blur-3xl"/><div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28"><p className="font-mono text-xs uppercase tracking-[0.22em] text-[#a855f7]">Research &amp; field notes</p><h1 className="mt-5 max-w-4xl text-5xl font-bold leading-[1.02] tracking-tight sm:text-7xl">Engineering insight for AI systems.</h1><p className="mt-7 max-w-3xl text-lg leading-relaxed text-[#c9c4d8]">Deep technical writing on evaluation, security, orchestration, testing strategy and the evidence required to release AI agents with confidence.</p><div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold"><span className="rounded-full border border-[#514778] bg-[#15102d] px-4 py-2">AI agent assurance</span><span className="rounded-full border border-[#514778] bg-[#15102d] px-4 py-2">Evaluation engineering</span><span className="rounded-full border border-[#514778] bg-[#15102d] px-4 py-2">Security &amp; red teaming</span></div></div></section>
    <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20"><p className="font-mono text-xs uppercase tracking-[0.18em] text-[#f59804]">Latest thinking</p><h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Evidence over opinion.</h2><p className="mt-4 max-w-2xl text-[#c9c4d8]">Research-backed notes for engineers and QA teams working with non-deterministic, tool-using AI systems.</p><div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">{generatedContent.articles.map((article) => <Link key={article.slug} to="/blog/$slug" params={{ slug: article.slug }} className="group flex flex-col overflow-hidden rounded-3xl border border-[#2b2350] bg-[#15102d] shadow-xl transition-all hover:-translate-y-1 hover:border-[#a855f7]/50"><div className="border-b border-[#2b2350] bg-[#211a43] px-6 py-8"><span className="font-mono text-xs uppercase tracking-[0.18em] text-[#f59804]">{article.category || "Engineering"}</span></div><div className="flex flex-1 flex-col p-6"><div className="flex items-center justify-between gap-3"><span className="rounded-full bg-[#7c3aed]/15 px-2.5 py-1 text-xs font-medium text-[#d8c8ff]">SAGE</span><span className="inline-flex items-center gap-1 text-xs text-[#918aa8]"><Clock className="h-3 w-3"/>Published</span></div><h2 className="mt-4 text-xl font-bold leading-snug text-[#faf8ff]">{article.title}</h2><p className="mt-3 flex-1 text-sm leading-relaxed text-[#c9c4d8]">{article.description}</p><div className="mt-5 flex items-center gap-2 text-sm font-medium text-[#a855f7]">Read article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5"/></div></div></Link>)}</div></section>
  </div>;
}
