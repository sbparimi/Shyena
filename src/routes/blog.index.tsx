import { useMemo, useState } from "react";
import { ArrowRight, BookOpen, Clock3, Search, ShieldCheck, Sparkles, Target, X } from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { generatedContent } from "@/content/generated-content";
import { CtaBand } from "@/components/site/cta-band";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "AI Agent Assurance Insights | Shyena" },
      { name: "description", content: "Engineering research and field notes on AI agent testing, evaluation, security, orchestration and evidence-backed release assurance." },
      { name: "robots", content: "index,follow" },
      { property: "og:title", content: "AI Agent Assurance Insights | Shyena" },
      { property: "og:description", content: "Engineering research and field notes on testing, evaluation, security and release assurance for AI agents." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.shyena.eu/blog" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "AI Agent Assurance Insights | Shyena" },
      { name: "twitter:description", content: "Engineering research and field notes for teams building reliable AI agents." },
    ],
    links: [{ rel: "canonical", href: "https://www.shyena.eu/blog" }],
  }),
  component: BlogIndexPage,
});

const CATEGORY_FILTERS = ["All", "AI Agent Assurance", "Testing Strategy", "Quality Assurance", "Evaluation Model", "Security"] as const;

type Category = (typeof CATEGORY_FILTERS)[number];

function BlogIndexPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category>("All");
  const normalizedQuery = query.trim().toLowerCase();

  const articles = generatedContent.articles;
  const featured = articles[0];
  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory = category === "All" || article.category === category;
      const searchable = `${article.title} ${article.description} ${article.category} ${article.primary_keyword} ${article.thesis}`.toLowerCase();
      return matchesCategory && (!normalizedQuery || searchable.includes(normalizedQuery));
    });
  }, [articles, category, normalizedQuery]);

  const secondaryArticles = filteredArticles.filter((article) => article.slug !== featured?.slug);

  return (
    <div className="min-h-screen bg-[#f7f4ec] text-[#0e172b]">
      <section className="relative overflow-hidden border-b border-[#d8d2c5] bg-[#f7f4ec]">
        <div className="pointer-events-none absolute right-[-12%] top-[-35%] h-[560px] w-[560px] rounded-full bg-[#dff3f1] blur-3xl opacity-80" />
        <div className="pointer-events-none absolute bottom-[-35%] left-[-12%] h-[440px] w-[440px] rounded-full bg-[#fff0bf] blur-3xl opacity-60" />
        <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:py-24">
          <div className="max-w-5xl">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#a87900]">
              <span>Shyena insights</span><span className="text-slate-400">/</span><span className="text-slate-500">AI assurance research &amp; field notes</span>
            </div>
            <h1 className="mt-5 max-w-5xl text-5xl font-bold leading-[0.96] tracking-[-0.06em] text-[#0e172b] sm:text-6xl lg:text-7xl">
              Engineering insight for AI systems.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
              Practical research for teams testing, evaluating, securing and releasing AI agents where a good answer is only one part of the system.
            </p>
          </div>

          <div className="mt-10 grid max-w-5xl border-y border-[#cfc8ba] sm:grid-cols-3">
            {[
              ["06", "engineering articles"],
              ["05", "assurance disciplines"],
              ["01", "evidence-first approach"],
            ].map(([value, label], index) => (
              <div key={label} className={`px-4 py-5 sm:px-6 ${index < 2 ? "border-b border-[#cfc8ba] sm:border-b-0 sm:border-r" : ""}`}>
                <div className="font-mono text-2xl font-bold text-[#0e172b]">{value}</div>
                <div className="mt-1 font-mono text-[9px] uppercase tracking-[0.14em] text-slate-500">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <main className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
        <section aria-labelledby="featured-heading">
          <div className="flex flex-col gap-5 border-b-2 border-[#0e172b] pb-7 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#a87900]">Featured research</p>
              <h2 id="featured-heading" className="mt-3 text-3xl font-bold tracking-[-0.04em] sm:text-4xl">Start with the systems problem.</h2>
            </div>
            <span className="inline-flex w-fit items-center gap-2 border border-[#cfc8ba] bg-white px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-600">
              <Sparkles className="h-3.5 w-3.5 text-[#a87900]" /> Editor&apos;s focus
            </span>
          </div>

          {featured && (
            <Link
              to="/blog/$slug"
              params={{ slug: featured.slug }}
              className="group mt-8 grid overflow-hidden border-2 border-[#0e172b] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[10px_10px_0_0_#dff3f1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a87900] lg:grid-cols-[1.25fr_.75fr]"
            >
              <div className="relative min-h-[300px] overflow-hidden bg-[#101a2d] p-7 text-white sm:p-10">
                <div className="absolute right-[-15%] top-[-30%] h-72 w-72 rounded-full bg-[#65e6d4]/15 blur-3xl" />
                <div className="absolute bottom-[-30%] left-[-10%] h-64 w-64 rounded-full bg-[#e7bf67]/15 blur-3xl" />
                <div className="relative flex h-full flex-col justify-between">
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#e7bf67]">{featured.category}</span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-slate-400">01 / {String(articles.length).padStart(2, "0")}</span>
                  </div>
                  <div className="mt-16 max-w-3xl">
                    <h3 className="text-3xl font-bold leading-tight tracking-[-0.04em] sm:text-4xl lg:text-5xl">{featured.title}</h3>
                    <p className="mt-5 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">{featured.description}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between bg-[#fff4cc] p-7 sm:p-10">
                <div>
                  <div className="flex items-center gap-2 font-mono text-[9px] font-semibold uppercase tracking-[0.15em] text-[#8c6500]">
                    <Target className="h-4 w-4" /> Core thesis
                  </div>
                  <p className="mt-5 text-lg font-semibold leading-7 text-[#0e172b]">{featured.thesis}</p>
                </div>
                <div className="mt-10 border-t border-[#d8c985] pt-6">
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-[#0e172b]">Read the research <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
                  <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.13em] text-slate-500">{featured.primary_keyword}</p>
                </div>
              </div>
            </Link>
          )}
        </section>

        <section className="mt-16" aria-labelledby="library-heading">
          <div className="flex flex-col gap-6 border-b-2 border-[#0e172b] pb-7 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#a87900]">Research library</p>
              <h2 id="library-heading" className="mt-3 text-3xl font-bold tracking-[-0.04em] sm:text-4xl">Browse the assurance disciplines.</h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">Testing strategy, evaluation, security and execution evidence—organized around the decisions engineering teams actually need to make.</p>
            </div>
            <div className="relative w-full max-w-sm">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#a87900]" />
              <label htmlFor="blog-search" className="sr-only">Search insights</label>
              <input id="blog-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search insights..." className="h-12 w-full border-2 border-[#0e172b] bg-white pl-11 pr-10 text-sm text-[#0e172b] outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-[#e7bf67]" />
              {query && <button type="button" onClick={() => setQuery("")} aria-label="Clear search" className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-500 hover:text-[#0e172b]"><X className="h-4 w-4" /></button>}
            </div>
          </div>

          <div className="mt-7 flex gap-2 overflow-x-auto pb-2" aria-label="Filter insights by category">
            {CATEGORY_FILTERS.map((filter) => (
              <button key={filter} type="button" onClick={() => setCategory(filter)} className={`shrink-0 border px-4 py-2 font-mono text-[9px] font-semibold uppercase tracking-[0.12em] transition-colors ${category === filter ? "border-[#0e172b] bg-[#0e172b] text-white" : "border-[#cfc8ba] bg-white text-slate-600 hover:border-[#a87900] hover:text-[#8c6500]"}`}>
                {filter}
              </button>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-between border-y border-[#d2ccc0] py-4">
            <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-500">{filteredArticles.length} {filteredArticles.length === 1 ? "article" : "articles"}</span>
            {(query || category !== "All") && <button type="button" onClick={() => { setQuery(""); setCategory("All"); }} className="font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-[#8c6500] hover:underline">Reset filters</button>}
          </div>

          {secondaryArticles.length > 0 ? (
            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {secondaryArticles.map((article, index) => (
                <Link key={article.slug} to="/blog/$slug" params={{ slug: article.slug }} className="group relative flex min-h-[330px] flex-col overflow-hidden border border-[#d2ccc0] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#a87900] hover:shadow-[8px_8px_0_0_#fff0bf] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a87900]">
                  <div className="border-b border-[#d2ccc0] bg-[#faf8f2] px-6 py-5">
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.15em] text-[#a87900]">{article.category}</span>
                      <span className="font-mono text-[10px] text-slate-400">{String(index + 2).padStart(2, "0")}</span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-500"><BookOpen className="h-3.5 w-3.5 text-[#a87900]" /> Field note</div>
                    <h3 className="mt-5 text-xl font-bold leading-snug tracking-[-0.025em] text-[#0e172b] group-hover:text-[#8c6500]">{article.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{article.description}</p>
                    <div className="mt-6 flex items-center justify-between border-t border-[#e2ddd2] pt-5">
                      <span className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0e172b]">Read article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
                      <span className="inline-flex items-center gap-1 text-[10px] font-medium uppercase tracking-[0.08em] text-slate-400"><Clock3 className="h-3 w-3" /> Research</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="mt-8 border border-[#d2ccc0] bg-white p-10 text-center">
              <ShieldCheck className="mx-auto h-7 w-7 text-[#a87900]" />
              <h3 className="mt-4 text-lg font-bold">No matching insight</h3>
              <p className="mt-2 text-sm text-slate-600">Try a different keyword or return to all research disciplines.</p>
            </div>
          )}
        </section>

        <section className="mt-16 grid gap-5 lg:grid-cols-3" aria-label="Shyena assurance principles">
          {[
            [ShieldCheck, "Evidence first", "Claims should connect to observable execution evidence, not only generated language."],
            [Target, "Outcome focused", "Test the business goal and critical invariants, not one ideal conversation transcript."],
            [Sparkles, "System aware", "Treat orchestration, tools, retrieval, security and model behaviour as one system."],
          ].map(([Icon, title, description]) => (
            <div key={title as string} className="border border-[#d2ccc0] bg-[#fff4cc] p-6">
              <Icon className="h-5 w-5 text-[#8c6500]" />
              <h3 className="mt-5 text-lg font-bold">{title as string}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">{description as string}</p>
            </div>
          ))}
        </section>
      </main>

      <CtaBand />
    </div>
  );
}
