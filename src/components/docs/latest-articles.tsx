import { ArrowRight, BookOpen, Shield, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";

const LATEST_ARTICLES = [
  { title: "AI Agent Testing Is a Systems Problem, Not Just an LLM Evaluation Problem", category: "AI Agent Assurance", readTime: "6 min", to: "/blog/generated/ai-agent-testing-is-a-systems-problem", icon: Sparkles },
  { title: "Why Conversational AI Needs a Different Testing Model", category: "Testing Strategy", readTime: "6 min", to: "/blog/why-conversational-ai-needs-a-different-testing-model", icon: Sparkles },
  { title: "The Problem With Green Checkmarks on Broken Conversations", category: "Quality Assurance", readTime: "5 min", to: "/blog/the-problem-with-green-checkmarks-on-broken-conversations", icon: BookOpen },
  { title: "How to Test a Cognigy Agent: A Practical Guide", category: "Testing Strategy", readTime: "7 min", to: "/blog/how-to-test-a-cognigy-agent", icon: BookOpen },
  { title: "Cognigy Agent Security Testing: Red-Teaming with Ziran", category: "Security", readTime: "7 min", to: "/blog/cognigy-agent-security-testing-with-ziran", icon: Shield },
] as const;

export function LatestArticles() {
  return (
    <section aria-labelledby="latest-thinking-heading" className="border-t-2 border-[#0e172b] pt-8">
      <div className="flex flex-col gap-4 border-b border-[#d2ccc0] pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div><p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#a87900]">Latest thinking</p><h2 id="latest-thinking-heading" className="mt-2 text-3xl font-bold tracking-[-0.035em] text-[#0e172b] sm:text-4xl">Top 5 articles</h2><p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">Deep dives into AI assurance, testing strategy, conversational systems and security.</p></div>
        <Link to="/blog" className="inline-flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500 transition-colors hover:text-[#8c6500]">All insights <ArrowRight className="h-3.5 w-3.5" /></Link>
      </div>
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {LATEST_ARTICLES.map((article, index) => { const Icon = article.icon; return <Link key={article.to} to={article.to} className="group relative flex min-h-56 flex-col overflow-hidden border border-[#d2ccc0] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#a87900] hover:shadow-[8px_8px_0_0_#fff0bf] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffb804]"><div className="absolute left-0 top-0 h-1 w-full bg-[#ffb804] opacity-40 transition-opacity group-hover:opacity-100" /><div className="flex items-center justify-between gap-4"><span className="flex h-10 w-10 items-center justify-center border border-[#d2ccc0] bg-[#faf8f2] text-[#a87900] group-hover:border-[#ffb804] group-hover:bg-[#fff4cc]"><Icon className="h-4 w-4" /></span><span className="font-mono text-[9px] uppercase tracking-[0.12em] text-slate-400">0{index + 1} · {article.readTime}</span></div><div className="mt-5 font-mono text-[9px] font-semibold uppercase tracking-[0.13em] text-[#a87900]">{article.category}</div><h3 className="mt-3 text-lg font-bold leading-snug tracking-[-0.02em] text-[#0e172b] transition-colors group-hover:text-[#8c6500]">{article.title}</h3><div className="mt-auto flex items-center gap-2 pt-6 text-sm font-bold text-[#0e172b]">Read article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></div></Link>; })}
      </div>
      <div className="mt-5 border border-[#c6dfdc] bg-[#dff3f1] p-5 sm:flex sm:items-center sm:justify-between sm:gap-6"><div><p className="text-sm font-bold text-[#0e172b]">New to AI agent assurance?</p><p className="mt-1 text-xs leading-5 text-slate-600">Start with the engineering guides, then use the latest insights for deeper context.</p></div><Link to="/docs/getting-started" className="mt-4 inline-flex shrink-0 items-center gap-2 text-xs font-bold text-[#0e172b] hover:text-[#8c6500] sm:mt-0">Start here <ArrowRight className="h-3.5 w-3.5" /></Link></div>
    </section>
  );
}
