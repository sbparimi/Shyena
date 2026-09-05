import { ArrowRight, BookOpen, Shield, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";

const LATEST_ARTICLES = [
  {
    title: "AI Agent Testing Is a Systems Problem, Not Just an LLM Evaluation Problem",
    category: "AI Agent Assurance",
    readTime: "6 min",
    to: "/blog/generated/ai-agent-testing-is-a-systems-problem",
    icon: Sparkles,
  },
  {
    title: "Why Conversational AI Needs a Different Testing Model",
    category: "Testing Strategy",
    readTime: "6 min",
    to: "/blog/why-conversational-ai-needs-a-different-testing-model",
    icon: Sparkles,
  },
  {
    title: "The Problem With Green Checkmarks on Broken Conversations",
    category: "Quality Assurance",
    readTime: "5 min",
    to: "/blog/the-problem-with-green-checkmarks-on-broken-conversations",
    icon: BookOpen,
  },
  {
    title: "How to Test a Cognigy Agent: A Practical Guide",
    category: "Testing Strategy",
    readTime: "7 min",
    to: "/blog/how-to-test-a-cognigy-agent",
    icon: BookOpen,
  },
  {
    title: "Cognigy Agent Security Testing: Red-Teaming with Ziran",
    category: "Security",
    readTime: "7 min",
    to: "/blog/cognigy-agent-security-testing-with-ziran",
    icon: Shield,
  },
] as const;

export function LatestArticles() {
  return (
    <aside className="lg:sticky lg:top-24">
      <div className="border-t-2 border-[#0e172b] pt-5">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#a87900]">Latest thinking</p>
            <h2 className="mt-2 text-xl font-bold tracking-tight text-[#0e172b]">Top 5 articles</h2>
          </div>
          <Link to="/blog" className="font-mono text-[10px] uppercase tracking-[0.12em] text-slate-500 transition-colors hover:text-[#a87900]">
            All insights
          </Link>
        </div>

        <div className="mt-5 border-t border-slate-300">
          {LATEST_ARTICLES.map((article, index) => {
            const Icon = article.icon;
            return (
              <Link
                key={article.to}
                to={article.to}
                className="group block border-b border-slate-300 py-5 transition-colors hover:bg-[#fffdf4]"
              >
                <div className="flex gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-slate-300 bg-white text-[#a87900] transition-colors group-hover:border-[#ffb703] group-hover:bg-[#fff4cc]">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-slate-400">0{index + 1}</span>
                      <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-slate-400">{article.readTime}</span>
                    </div>
                    <h3 className="mt-2 text-sm font-bold leading-snug text-[#0e172b] transition-colors group-hover:text-[#a87900]">
                      {article.title}
                    </h3>
                    <div className="mt-2 flex items-center justify-between gap-2">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-500">{article.category}</span>
                      <ArrowRight className="h-3.5 w-3.5 shrink-0 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-[#a87900]" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-5 border border-slate-300 bg-[#f7f4ec] p-4">
          <p className="text-xs font-semibold leading-relaxed text-[#0e172b]">New to AI agent assurance?</p>
          <p className="mt-1 text-xs leading-relaxed text-slate-600">Start with the engineering guides, then use the latest insights for deeper context.</p>
          <Link to="/docs/getting-started" className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-[#0e172b] hover:text-[#a87900]">
            Start here <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </aside>
  );
}
