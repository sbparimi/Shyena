import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, FileText, PlayCircle } from "lucide-react";

export const Route = createFileRoute("/resources")({
  head: () => ({ meta: [
    { title: "Resources | Shyena" },
    { name: "description", content: "Guides, tutorials, case studies and insights for testing and evaluating AI agents." },
  ]}),
  component: ResourcesPage,
});

const cards = [
  ["GUIDE", "AI Agent Testing Guide", "A practical guide to testing GenAI and agentic systems.", "Read guide", BookOpen],
  ["CASE STUDY", "How BMW Scaled AI Testing", "See how structured assurance can turn complex AI testing into repeatable evidence.", "Read more", FileText],
  ["WEBINAR", "From Testing to Trust", "Watch a practical session on moving AI assurance from scripts to production evidence.", "Watch now", PlayCircle],
] as const;

function ResourceBrandVisual({ Icon }: { Icon: typeof BookOpen }) {
  return <div className="relative flex h-40 items-center justify-center overflow-hidden bg-[#f7f8fb]">
    <div className="absolute right-5 top-4 text-[9px] font-semibold uppercase tracking-[.18em] text-[#9aa4b5]">SHYENA</div>
    <img src="/shyena-mark.svg?v=20260917" alt="" aria-hidden="true" className="h-20 w-16 object-contain opacity-95" />
    <Icon className="absolute bottom-4 right-5 h-5 w-5 text-[#e87512]" aria-hidden="true" />
  </div>;
}

function ResourcesPage() {
  return <main className="overflow-x-hidden bg-white text-[#17213f]">
    <section className="border-b border-[#e6e8ed]"><div className="mx-auto max-w-[1280px] px-5 py-14 sm:px-8 lg:px-10 lg:py-18"><div className="text-xs font-semibold uppercase tracking-[.16em] text-[#e87512]">Resources</div><h1 className="mt-4 font-[Sora] text-[clamp(2.7rem,6vw,5rem)] font-extrabold leading-[.96] tracking-[-.055em]">Learn, explore and stay ahead.</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-[#69707d]">Guides, tutorials, case studies and insights to help you build better AI systems.</p><div className="mt-8 flex flex-wrap gap-5 border-b border-[#e6e8ed] pb-3 text-sm font-semibold"><span className="border-b-2 border-[#ff5a0a] pb-3 text-[#ff5a0a]">All</span><Link to="/blog" className="pb-3 text-[#69707d] hover:text-[#17213f]">Blog</Link><Link to="/blog" className="pb-3 text-[#69707d] hover:text-[#17213f]">Case studies</Link><Link to="/blog" className="pb-3 text-[#69707d] hover:text-[#17213f]">Guides</Link><Link to="/blog" className="pb-3 text-[#69707d] hover:text-[#17213f]">Webinars</Link></div></div></section>
    <section className="bg-[#fafbfc]"><div className="mx-auto max-w-[1280px] px-5 py-12 sm:px-8 lg:px-10 lg:py-16"><div className="grid gap-4 lg:grid-cols-3">{cards.map(([type,title,text,cta,Icon]) => <article key={title} className="overflow-hidden rounded-xl border border-[#e0e3e8] bg-white transition hover:-translate-y-0.5 hover:border-[#f0c6a5] hover:shadow-[0_22px_50px_-34px_rgba(23,33,63,.4)]"><ResourceBrandVisual Icon={Icon} /><div className="p-6"><div className="text-[10px] font-bold uppercase tracking-[.14em] text-[#e87512]">{type}</div><h2 className="mt-3 text-xl font-extrabold text-[#17213f]">{title}</h2><p className="mt-2 text-sm leading-6 text-[#69707d]">{text}</p><Link to="/blog" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[#ff5a0a]">{cta}<ArrowRight className="h-4 w-4" /></Link></div></article>)}</div></div></section>
  </main>;
}
