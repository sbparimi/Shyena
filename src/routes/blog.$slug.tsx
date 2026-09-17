import { ArrowLeft, ArrowRight } from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArticleConceptDiagram, type ArticleConcept } from "@/components/blog/article-concept-diagrams";
import { GeneratedMarkdown, getGeneratedArticle } from "@/content/generated-content-loader";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const article = getGeneratedArticle(params.slug);
    if (!article) return { meta: [{ title: "Article not found — Shyena" }] };
    return {
      meta: [
        { title: `${article.title} — Shyena` },
        { name: "description", content: article.description },
        { property: "og:title", content: article.title },
        { property: "og:description", content: article.description },
        { property: "og:type", content: "article" },
        { property: "og:image", content: "https://www.shyena.eu/shyena-logo-lockup.svg?v=20260917" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: "https://www.shyena.eu/shyena-logo-lockup.svg?v=20260917" },
      ],
      links: [{ rel: "canonical", href: `https://shyena.eu/blog/${params.slug}` }],
    };
  },
  component: ArticlePage,
});

function ArticlePage() {
  const { slug } = Route.useParams();
  const article = getGeneratedArticle(slug);

  if (!article) {
    return <div className="mx-auto w-full max-w-3xl px-5 py-24 text-center sm:px-8"><h1 className="text-3xl font-bold">Article not found</h1><p className="mt-4 text-muted-foreground">This article is not published yet.</p><Button asChild className="mt-8" variant="outline"><Link to="/blog"><ArrowLeft className="mr-2 h-4 w-4" />Back to Insights</Link></Button></div>;
  }

  return <>
    <section className="relative overflow-hidden bg-[#f7f8fb] text-[#17213f]">
      <div className="mx-auto w-full max-w-5xl px-5 pb-10 pt-12 sm:px-8 sm:pt-20">
        <div className="mb-10 flex items-center justify-center">
          <img src="/shyena-mark.svg?v=20260917" alt="Shyena" className="h-14 w-11 object-contain" />
          <span className="ml-3 font-[Sora] text-2xl font-extrabold tracking-[-.04em] text-[#0B1B3A]">Shyena</span>
        </div>
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#f0d6c2] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#e87512]">{article.category || "Engineering"}</span>
          <h1 className="mt-6 text-3xl font-bold leading-[1.1] tracking-[-.035em] sm:text-5xl">{article.title}</h1>
        </div>
        {article.diagram && <div className="mt-10"><ArticleConceptDiagram concept={article.diagram as ArticleConcept} /></div>}
        {article.thesis && <p className="mx-auto mt-10 max-w-3xl text-center text-base font-medium leading-relaxed text-[#4f5b70] sm:text-lg">{article.thesis}</p>}
        <div className="mt-5 text-center text-sm text-[#7b8494]">{article.author || "Shyena Engineering"}</div>
      </div>
    </section>

    <article className="mx-auto w-full max-w-3xl px-5 pb-24 pt-12 sm:px-8">
      <GeneratedMarkdown sourcePath={article.sourcePath} />
      <div className="mt-16 overflow-hidden rounded-2xl border border-[#f0d6c2] bg-[#fff8f2] px-6 py-10 text-center sm:px-10">
        <img src="/shyena-mark.svg?v=20260917" alt="" aria-hidden="true" className="mx-auto h-12 w-10 object-contain" />
        <h2 className="mt-4 text-xl font-bold text-[#17213f] sm:text-2xl">Make the release decision defensible.</h2>
        <p className="mx-auto mt-3 max-w-lg text-[#69707d]">Shyena connects live agent behaviour to evidence, evaluation and release governance.</p>
        <Button asChild size="lg" className="mt-6"><Link to="/docs/evaluation-model">Read the evaluation model <ArrowRight className="h-4 w-4" /></Link></Button>
      </div>
      <div className="mt-10"><Button asChild variant="ghost" className="px-0 text-muted-foreground hover:text-foreground"><Link to="/blog"><ArrowLeft className="mr-2 h-4 w-4" />Back to Insights</Link></Button></div>
    </article>
  </>;
}
