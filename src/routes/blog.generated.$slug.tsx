import { ArrowLeft, ArrowRight } from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArticleConceptDiagram, type ArticleConcept } from "@/components/blog/article-concept-diagrams";
import { Button } from "@/components/ui/button";
import { GeneratedMarkdown, getGeneratedArticle } from "@/content/generated-content-loader";

export const Route = createFileRoute("/blog/generated/$slug")({
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

  const concept = (article.diagram || "systems") as ArticleConcept;
  const thesis = article.thesis || article.description;

  return (
    <>
      <section className="relative overflow-hidden bg-lavender text-lavender-foreground">
        <div className="mx-auto w-full max-w-4xl px-5 pb-12 pt-20 sm:px-8 sm:pt-28">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3.5 py-1.5 text-xs font-medium text-primary">
              {article.category || "Engineering"}
            </span>
            <h1 className="mt-6 text-3xl font-bold leading-[1.1] sm:text-5xl">{article.title}</h1>
            <div className="mt-10 text-left"><ArticleConceptDiagram concept={concept} /></div>
            <p className="mx-auto mt-8 max-w-3xl text-base font-medium leading-relaxed text-foreground sm:text-lg">{thesis}</p>
            <p className="mt-5 text-sm text-muted-foreground">{article.author || "Shyena Engineering"}</p>
          </div>
        </div>
      </section>

      <article className="mx-auto w-full max-w-3xl px-5 pb-24 pt-12 sm:px-8">
        <GeneratedMarkdown sourcePath={article.sourcePath} />
        <div className="mt-16 rounded-2xl border border-navy-border bg-navy px-6 py-10 text-center sm:px-10">
          <h2 className="text-xl font-bold text-navy-foreground sm:text-2xl">Apply the model to your AI agent</h2>
          <p className="mx-auto mt-3 max-w-lg text-navy-muted">Explore the Shyena assurance model and see how deterministic, semantic, orchestration, and security evidence fit together.</p>
          <Button asChild size="lg" className="mt-6"><Link to="/docs/evaluation-model">Read the evaluation model<ArrowRight className="h-4 w-4" /></Link></Button>
        </div>
        <div className="mt-10"><Button asChild variant="ghost" className="px-0 text-muted-foreground hover:text-foreground"><Link to="/blog"><ArrowLeft className="mr-2 h-4 w-4" />Back to Blog</Link></Button></div>
      </article>
    </>
  );
}
