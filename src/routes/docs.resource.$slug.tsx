import { ArrowLeft, ArrowRight } from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { generatedContent } from "@/content/generated-content";

export const Route = createFileRoute("/docs/resource/$slug")({
  head: ({ params }) => {
    const article = generatedContent.docs.find((item) => item.slug === params.slug);
    return {
      meta: [
        { title: article ? `${article.title} | Shyena Docs` : "Resource | Shyena Docs" },
        { name: "description", content: article?.description || "Engineering resource from the Shyena documentation library." },
        { property: "og:type", content: "article" },
        { property: "og:title", content: article ? `${article.title} | Shyena Docs` : "Resource | Shyena Docs" },
        { property: "og:description", content: article?.description || "Engineering resource from the Shyena documentation library." },
      ],
      links: [{ rel: "canonical", href: `https://shyena.eu/docs/resource/${params.slug}` }],
    };
  },
  component: ResourceArticle,
});

function ResourceArticle() {
  const { slug } = Route.useParams();
  const article = generatedContent.docs.find((item) => item.slug === slug);

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
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">{article.description}</p>
            {article.published && <p className="mt-5 font-mono text-xs uppercase tracking-[0.12em] text-slate-500">Published</p>}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="border-y border-slate-300 bg-[#f5f8fc] px-6 py-8 sm:px-8">
          <p className="text-sm leading-7 text-slate-600">This resource is maintained as content-as-code and published through the Shyena documentation pipeline.</p>
          <Button asChild className="mt-6 bg-slate-950 text-white hover:bg-slate-800">
            <Link to="/docs/$slug" params={{ slug: article.slug }}>Read the engineering guide <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
