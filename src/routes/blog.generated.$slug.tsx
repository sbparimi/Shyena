import { ArrowLeft, ArrowRight } from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { GeneratedMarkdown, getGeneratedArticle } from "@/content/generated-content-loader";

export const Route = createFileRoute("/blog/generated/$slug")({
  head: ({ params }) => {
    const article = getGeneratedArticle(params.slug);
    if (!article) {
      return { meta: [{ title: "Article not found — Shyena" }] };
    }
    return {
      meta: [
        { title: `${article.title} — Shyena` },
        { name: "description", content: article.description },
        { property: "og:title", content: article.title },
        { property: "og:description", content: article.description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `https://shyena.eu/blog/generated/${params.slug}` }],
    };
  },
  component: GeneratedArticlePage,
});

function GeneratedArticlePage() {
  const { slug } = Route.useParams();
  const article = getGeneratedArticle(slug);
  const isLatencyArticle = slug === "agentic-ai-latency-engineering-guide";

  if (!article) {
    return (
      <div className="mx-auto w-full max-w-3xl px-5 py-24 text-center sm:px-8">
        <h1 className="text-3xl font-bold">Article not found</h1>
        <Button asChild className="mt-8" variant="outline">
          <Link to="/blog"><ArrowLeft className="mr-2 h-4 w-4" />Back to Blog</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f7f4ec] text-[#0e172b]">
      <section className="relative overflow-hidden border-b border-[#d8d2c5] bg-[#f7f4ec]">
        <div className="pointer-events-none absolute right-[-10%] top-[-40%] h-[520px] w-[520px] rounded-full bg-[#dff3f1] blur-3xl opacity-70" />
        <div className="pointer-events-none absolute bottom-[-45%] left-[-10%] h-[420px] w-[420px] rounded-full bg-[#fff0bf] blur-3xl opacity-60" />
        <div className="relative mx-auto w-full max-w-5xl px-5 pb-12 pt-16 sm:px-8 sm:pb-16 sm:pt-24">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#a87900]">
              <span>{article.category || "Engineering"}</span><span className="text-slate-400">/</span><span className="text-slate-500">Shyena research</span>
            </div>
            <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-[0.98] tracking-[-0.055em] text-[#0e172b] sm:text-5xl lg:text-6xl">{article.title}</h1>
            <p className="mt-6 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">{article.description}</p>
            <div className="mt-6 flex flex-wrap items-center gap-3 font-mono text-[9px] font-semibold uppercase tracking-[0.13em] text-slate-500"><span className="border border-[#cfc8ba] bg-white px-3 py-1.5">{article.author || "Shyena Engineering"}</span><span className="border border-[#cfc8ba] bg-white px-3 py-1.5">Evidence-first engineering</span></div>
          </div>
        </div>
      </section>

      <article className="mx-auto w-full max-w-4xl px-5 pb-24 pt-10 sm:px-8 sm:pt-14">
        {isLatencyArticle && (
          <figure className="mb-14 overflow-hidden border-2 border-[#0e172b] bg-white shadow-[10px_10px_0_0_#dff3f1]">
            <img src="/latency-multi-turn-agentic-ai.svg" alt="Latency in Multi-Turn Agentic AI: infographic covering bot-turn measurement, TTFT versus response latency, latency sources, critical-path execution, latency distribution, latency contracts and the Shyena evaluation model." className="block h-auto w-full" loading="eager" decoding="async" />
            <figcaption className="border-t border-[#d2ccc0] bg-[#faf8f2] px-5 py-3 font-mono text-[9px] font-semibold uppercase tracking-[0.13em] text-slate-500 sm:px-7">Latency Skill — measuring, tracing and assuring multi-turn agentic AI response time</figcaption>
          </figure>
        )}

        <div className="generated-content mx-auto max-w-3xl">
          <GeneratedMarkdown sourcePath={article.sourcePath} />
        </div>

        <div className="mt-16 overflow-hidden border-2 border-[#0e172b] bg-[#0e172b] px-6 py-10 text-center sm:px-10">
          <h2 className="text-xl font-bold text-white sm:text-2xl">Apply the model to your AI agent</h2>
          <p className="mx-auto mt-3 max-w-lg text-slate-300">Explore the Shyena assurance model and see how deterministic, semantic, orchestration, and security evidence fit together.</p>
          <Button asChild size="lg" className="mt-6 rounded-none"><Link to="/docs/evaluation-model">Read the evaluation model<ArrowRight className="h-4 w-4" /></Link></Button>
        </div>
        <div className="mt-10"><Button asChild variant="ghost" className="px-0 text-slate-500 hover:text-[#0e172b]"><Link to="/blog"><ArrowLeft className="mr-2 h-4 w-4" />Back to Blog</Link></Button></div>
      </article>
    </div>
  );
}
