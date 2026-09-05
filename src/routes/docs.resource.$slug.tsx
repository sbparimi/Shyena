import { ArrowLeft, ArrowRight } from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { EUENGINEERS_RESOURCES } from "@/data/euengineers-resources";

export const Route = createFileRoute("/docs/resource/$slug")({
  head: ({ params }) => {
    const article = EUENGINEERS_RESOURCES.find((item) => item.slug === params.slug);
    return {
      meta: [
        { title: article ? `${article.title} | Shyena Docs` : "Resource | Shyena Docs" },
        { name: "description", content: article?.description || "Engineering resource from the Shyena documentation library." },
        { property: "og:type", content: "article" },
        { property: "og:title", content: article ? `${article.title} | Shyena Docs` : "Resource | Shyena Docs" },
        { property: "og:description", content: article?.description || "Engineering resource from the Shyena documentation library." },
      ],
      links: [{ rel: "canonical", href: `https://www.shyena.eu/docs/resource/${params.slug}` }],
    };
  },
  component: ResourceArticle,
});

function ResourceArticle() {
  const { slug } = Route.useParams();
  const article = EUENGINEERS_RESOURCES.find((item) => item.slug === slug);

  if (!article) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="text-3xl font-bold text-[#0e172b]">Resource not found</h1>
        <Button asChild className="mt-8"><Link to="/docs"><ArrowLeft className="mr-2 h-4 w-4" />Back to Documentation</Link></Button>
      </div>
    );
  }

  return (
    <div className="bg-white text-slate-950">
      <section className="border-b border-slate-300 bg-[#eaf5fa]">
        <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20">
          <Link to="/docs" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-950">
            <ArrowLeft className="h-4 w-4" /> Documentation
          </Link>
          <div className="mt-10 max-w-4xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#a87900]">Engineering resource</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-[#0e172b] sm:text-6xl">{article.title}</h1>
            {article.description && <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">{article.description}</p>}
            {article.published && <p className="mt-5 font-mono text-xs uppercase tracking-[0.12em] text-slate-500">{article.published}</p>}
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-5 py-12 sm:px-8 sm:py-20">
        <div
          className="euengineers-resource-content prose prose-slate max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-[#8a6500] prose-img:mx-auto prose-img:max-h-[680px] prose-img:rounded-lg"
          dangerouslySetInnerHTML={{ __html: article.html }}
        />

        <div className="mt-16 border-y-2 border-slate-950 bg-[#f5f8fc] px-6 py-8 sm:px-8">
          <p className="text-sm leading-7 text-slate-600">Originally published in the EU Engineers engineering library. This copy is maintained as part of the Shyena documentation knowledge base.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild className="bg-slate-950 text-white hover:bg-slate-800">
              <Link to="/docs/evaluation-model">Explore the Shyena evaluation model <ArrowRight className="h-4 w-4" /></Link>
            </Button>
            <Button asChild variant="outline">
              <a href={article.sourceUrl} target="_blank" rel="noopener noreferrer">View original article</a>
            </Button>
          </div>
        </div>
      </article>
    </div>
  );
}
